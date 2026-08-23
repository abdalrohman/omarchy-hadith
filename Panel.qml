import QtQuick
import Quickshell
import Quickshell.Io
import qs.Commons
import qs.Ui
import "HadithData.js" as Data
import "Model.js" as Model

// ============================================================================
// Panel.qml — Detailed Reading, Collections Browser & Settings for Hadith
// ============================================================================
Panel {
  id: root
  moduleName: "abdulrahman.hadith"
  ipcTarget: "abdulrahman.hadith"
  manageIpc: false

  property var anchorItem: null
  property var hostWidget: null
  readonly property var barIdentity: hostWidget || root

  // Theme integration helpers
  readonly property color barForeground: root.bar ? root.bar.foreground : Color.foreground
  readonly property string barFontFamily: root.bar ? root.bar.fontFamily : Style.font.family

  // Base directory for resolving assets
  readonly property string pluginDir: Qt.resolvedUrl(".").toString().replace(/^file:\/\//, "")

  // Live timestamp updated every second
  property date now: new Date()

  // State storage path & maximum byte ceiling
  readonly property int maxStateBytes: 65536
  readonly property string statePath: Quickshell.env("HOME") + "/.local/state/omarchy/settings/hadith.json"

  // Configured settings state from ~/.local/state/omarchy/settings/hadith.json
  property var configuredState: Model.parseHadithState("{}")

  // Active Hadith resolution
  readonly property var activeHadith: Model.findHadithById(configuredState.currentHadithId) || Model.getDailyHadith(root.now, configuredState.preferredCollection) || Data.BUILTIN_HADITHS[0]
  readonly property bool isBookmarked: (activeHadith && configuredState.bookmarks) ? configuredState.bookmarks.indexOf(activeHadith.id) !== -1 : false

  // Periodic reminder countdown (seconds remaining)
  property int timerSecondsRemaining: (configuredState.periodicIntervalHours || 4) * 3600

  // Menubar widget label & tooltip
  readonly property string barLabel: Model.formatBarLabel(activeHadith, timerSecondsRemaining, configuredState.barFormatIndex)
  readonly property string tooltipText: (activeHadith ? (activeHadith.collectionName + " #" + activeHadith.hadithNumber + "\n" + activeHadith.arabic) : "Prophetic Hadiths") + "\n(Click to open • Middle-click random • Right-click format)"

  // Navigation & Drawer states
  property int activeTab: 0 // 0 = Active Reader, 1 = Collections & Search, 2 = Bookmarks, 3 = Settings
  property string selectedCollection: configuredState.preferredCollection || "all"
  property string searchQuery: ""
  property bool showEnglishTranslation: true

  // Tracking last fired scheduled reminders to prevent double firing in the same minute
  property string lastFiredDailyDate: ""

  // --------------------------------------------------------------------------
  // Lifecycle & Open / Close Handlers
  // --------------------------------------------------------------------------
  function open() {
    refresh()
    setCenterHoverRevealSuppressed(false)
    root.controller.show()
    Qt.callLater(function() {
      if (root.opened) setCenterHoverRevealSuppressed(true)
    })
  }

  function showHadith(id) {
    if (id) {
      updateState({ currentHadithId: id })
    }
    activeTab = 0
    open()
  }

  function openFromHotkey() {
    open()
  }

  function close() {
    setCenterHoverRevealSuppressed(false)
    root.controller.hide()
  }

  function toggle() {
    if (root.opened) close()
    else open()
  }

  function switchPanel(direction) {
    if (root.bar && typeof root.bar.switchPanelFrom === "function")
      return root.bar.switchPanelFrom(root.barIdentity, direction)
    return false
  }

  function setCenterHoverRevealSuppressed(value) {
    if (root.bar && "centerHoverRevealSuppressed" in root.bar)
      root.bar.centerHoverRevealSuppressed = value
  }

  function readState() {
    if (!stateReaderProc.running) {
      stateReaderProc.running = true
    }
  }

  function refresh() {
    now = new Date()
    readState()
    checkDailyRollover()
  }

  function checkDailyRollover() {
    var todayKey = Qt.formatDate(now, "yyyy-MM-dd")
    if (configuredState.dailyHadithDate !== todayKey) {
      var daily = Model.getDailyHadith(now, configuredState.preferredCollection)
      if (daily) {
        updateState({
          dailyHadithDate: todayKey,
          currentHadithId: daily.id
        })
      }
    }
  }

  // --------------------------------------------------------------------------
  // Persistence & State Management
  // --------------------------------------------------------------------------
  function loadState(raw) {
    if (raw && typeof raw === "string" && raw.length > root.maxStateBytes) {
      raw = ""
    }
    configuredState = Model.parseHadithState(raw)
  }

  function updateState(partial) {
    var next = {}
    for (var k in configuredState) next[k] = configuredState[k]
    for (var p in partial) next[p] = partial[p]
    configuredState = next
    saveState()
  }

  function saveState() {
    var jsonStr = JSON.stringify(configuredState, null, 2)
    saveStateProc.command = [
      "python3", "-c",
      "import sys, os, tempfile\n" +
      "dir_p = os.path.expanduser('~/.local/state/omarchy/settings')\n" +
      "os.makedirs(dir_p, exist_ok=True)\n" +
      "dest = os.path.join(dir_p, 'hadith.json')\n" +
      "if os.path.islink(dest): os.unlink(dest)\n" +
      "with tempfile.NamedTemporaryFile('w', dir=dir_p, delete=False) as tf:\n" +
      "    tf.write(sys.argv[1])\n" +
      "    tmp_n = tf.name\n" +
      "os.replace(tmp_n, dest)",
      jsonStr
    ]
    saveStateProc.running = true
  }

  // --------------------------------------------------------------------------
  // Navigation & Reader Actions
  // --------------------------------------------------------------------------
  function loadRandomHadith() {
    var excludeId = activeHadith ? activeHadith.id : ""
    var item = Model.getRandomHadith(configuredState.preferredCollection, excludeId)
    if (item) {
      updateState({ currentHadithId: item.id })
    }
  }

  function advanceNext() {
    var nextItem = Model.getNextHadith(activeHadith ? activeHadith.id : "", selectedCollection, configuredState.bookmarks)
    if (nextItem) updateState({ currentHadithId: nextItem.id })
  }

  function advancePrev() {
    var prevItem = Model.getPrevHadith(activeHadith ? activeHadith.id : "", selectedCollection, configuredState.bookmarks)
    if (prevItem) updateState({ currentHadithId: prevItem.id })
  }

  function selectHadith(item) {
    if (!item) return
    updateState({ currentHadithId: item.id })
    activeTab = 0
  }

  function toggleBookmark() {
    if (!activeHadith) return
    var bms = (configuredState.bookmarks || []).slice()
    var idx = bms.indexOf(activeHadith.id)
    if (idx !== -1) {
      bms.splice(idx, 1)
    } else {
      bms.push(activeHadith.id)
    }
    updateState({ bookmarks: bms })
  }

  function cycleBarFormat() {
    var nextIdx = ((configuredState.barFormatIndex || 0) + 1) % Model.BAR_FORMATS.length
    updateState({ barFormatIndex: nextIdx })
  }

  function copyHadithToClipboard() {
    if (!activeHadith) return
    var text = activeHadith.arabic + "\n\n" + (activeHadith.english ? ("\"" + activeHadith.english + "\"\n\n") : "") + "[" + activeHadith.collectionName + " #" + activeHadith.hadithNumber + " — Grade: " + (activeHadith.grade || "Sahih") + "]"
    clipProc.command = [
      "python3", "-c",
      "import sys, subprocess\n" +
      "t = sys.argv[1]\n" +
      "for cmd in [['wl-copy'], ['xclip', '-selection', 'clipboard']]:\n" +
      "    try:\n" +
      "        p = subprocess.Popen(cmd, stdin=subprocess.PIPE)\n" +
      "        p.communicate(input=t.encode('utf-8'))\n" +
      "        if p.returncode == 0: break\n" +
      "    except Exception: pass",
      text
    ]
    clipProc.running = true
  }

  // --------------------------------------------------------------------------
  // Scheduled Daily & Periodic Notifications Engine
  // --------------------------------------------------------------------------
  function checkScheduledReminders() {
    var todayKey = Qt.formatDate(now, "yyyy-MM-dd")
    var currentHHmm = Qt.formatDate(now, "HH:mm")

    // 1. Daily Hadith of the Day Notification
    if (configuredState.dailyNotificationEnabled && currentHHmm === configuredState.dailyNotificationTime && lastFiredDailyDate !== todayKey) {
      lastFiredDailyDate = todayKey
      var daily = Model.getDailyHadith(now, configuredState.preferredCollection)
      if (daily) {
        updateState({ currentHadithId: daily.id, dailyHadithDate: todayKey })
        sendHadithNotification("📜 حديث اليوم (" + daily.collectionName + ")", daily.arabic + "\n\n" + (daily.english ? ("\"" + daily.english + "\"") : ""))
      }
      return
    }

    // 2. Periodic Interval Notification
    if (configuredState.periodicNotificationEnabled) {
      if (timerSecondsRemaining <= 1) {
        timerSecondsRemaining = (configuredState.periodicIntervalHours || 4) * 3600
        var randItem = Model.getRandomHadith(configuredState.preferredCollection, activeHadith ? activeHadith.id : "")
        if (randItem) {
          updateState({ currentHadithId: randItem.id })
          sendHadithNotification("📜 من هدي النبوة", randItem.arabic + "\n\n" + (randItem.english ? ("\"" + randItem.english + "\"") : ""))
        }
      } else {
        timerSecondsRemaining--
      }
    }
  }

  function sendHadithNotification(title, message) {
    if (configuredState.soundEnabled) playSound("chime")
    notifyProc.command = [
      "omarchy-notification-send",
      "-g", "📜",
      "-u", "normal",
      title,
      message
    ]
    notifyProc.running = true
  }

  function playSound(type) {
    var file = pluginDir + "/assets/chime.wav"
    var volFraction = (configuredState.soundVolume !== undefined ? configuredState.soundVolume : 80) / 100.0

    soundProc.command = [
      "python3", "-c",
      "import sys, subprocess\n" +
      "f = sys.argv[1]\n" +
      "vol = float(sys.argv[2])\n" +
      "vol100 = str(round(vol * 100))\n" +
      "vol65k = str(round(vol * 65536))\n" +
      "cmds = [\n" +
      "    ['pw-play', '--volume', str(vol), f],\n" +
      "    ['paplay', '--volume=' + vol65k, f],\n" +
      "    ['mpv', '--no-video', '--volume=' + vol100, f],\n" +
      "    ['ffplay', '-nodisp', '-autoexit', '-volume', vol100, f]\n" +
      "]\n" +
      "for c in cmds:\n" +
      "    try:\n" +
      "        if subprocess.run(c, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL).returncode == 0:\n" +
      "            break\n" +
      "    except Exception:\n" +
      "        pass",
      file,
      String(volFraction)
    ]
    soundProc.running = true
  }

  // --------------------------------------------------------------------------
  // Bounded State Reader & Background Processes
  // --------------------------------------------------------------------------
  Process {
    id: stateReaderProc
    command: ["head", "-c", String(root.maxStateBytes + 1), root.statePath]
    running: true
    stdout: StdioCollector { id: stateOut }
    onExited: function(exitCode) {
      if (exitCode === 0) {
        var raw = stateOut.text
        if (raw.length > root.maxStateBytes) {
          console.warn("hadith: settings file exceeds size limit (" + raw.length + " > " + root.maxStateBytes + " bytes), rejecting file and using defaults")
          root.loadState("")
        } else {
          root.loadState(raw)
        }
      } else {
        root.loadState("")
      }
    }
  }

  Timer {
    id: clockTimer
    interval: 1000
    repeat: true
    running: true
    onTriggered: {
      root.now = new Date()
      root.checkScheduledReminders()
    }
  }

  Process { id: saveStateProc }
  Process { id: notifyProc }
  Process { id: soundProc }
  Process { id: clipProc }

  // --------------------------------------------------------------------------
  // UI Presentation: KeyboardPanel & Content
  // --------------------------------------------------------------------------
  KeyboardPanel {
    id: panel
    anchorItem: root.anchorItem
    owner: root.barIdentity
    bar: root.bar
    open: root.opened
    centerOnBar: true
    focusTarget: keyCatcher
    contentWidth: panel.fittedContentWidth(Style.space(660))
    contentHeight: panel.fittedContentHeight(Style.space(600))

    PanelKeyCatcher {
      id: keyCatcher
      anchors.fill: parent
      clip: true
      onCloseRequested: root.close()
      onTabRequested: function(direction) { root.switchPanel(direction) }
      onTextKey: function(t) {
        if (t === " ") root.loadRandomHadith()
        else if (t === "n" || t === "N" || t === "l" || t === "L") root.advanceNext()
        else if (t === "p" || t === "P" || t === "h" || t === "H") root.advancePrev()
        else if (t === "f" || t === "F" || t === "b" || t === "B") root.toggleBookmark()
        else if (t === "1") root.activeTab = 0
        else if (t === "2") root.activeTab = 1
        else if (t === "3") root.activeTab = 2
        else if (t === "4") root.activeTab = 3
      }

      // ====================================================================
      // TOP HEADER TAB BAR: Reader | Collections | Bookmarks | Settings
      // ====================================================================
      Item {
        id: topHeaderItem
        anchors.top: parent.top
        anchors.left: parent.left
        anchors.right: parent.right
        height: Style.space(42)

        Item {
          width: parent.width
          height: Style.space(34)
          anchors.top: parent.top

          Row {
            anchors.left: parent.left
            anchors.verticalCenter: parent.verticalCenter
            spacing: Style.space(4)

            Button {
              text: "📜 Reader"
              selected: root.activeTab === 0
              onClicked: root.activeTab = 0
            }

            Button {
              text: "📚 Collections"
              selected: root.activeTab === 1
              onClicked: root.activeTab = 1
            }

            Button {
              text: "⭐ Bookmarks (" + ((root.configuredState.bookmarks || []).length) + ")"
              selected: root.activeTab === 2
              onClicked: root.activeTab = 2
            }

            Button {
              text: "⚙ Settings"
              selected: root.activeTab === 3
              onClicked: root.activeTab = 3
            }
          }

          Row {
            anchors.right: parent.right
            anchors.verticalCenter: parent.verticalCenter
            spacing: Style.space(4)

            Button {
              text: "🔀 Random"
              tooltipText: "Fetch a random Hadith (Key: Spacebar)"
              onClicked: root.loadRandomHadith()
            }

            Button {
              text: "✕"
              tooltipText: "Close Panel"
              onClicked: root.close()
            }
          }
        }

        PanelSeparator {
          anchors.bottom: parent.bottom
          anchors.left: parent.left
          anchors.right: parent.right
          foreground: root.barForeground
        }
      }

      // ====================================================================
      // MAIN CONTENT AREA (Strictly Bounded Inside Panel)
      // ====================================================================
      Item {
        id: tabContentContainer
        anchors.top: topHeaderItem.bottom
        anchors.topMargin: Style.space(6)
        anchors.bottom: parent.bottom
        anchors.left: parent.left
        anchors.right: parent.right
        clip: true

        // ==================================================================
        // TAB 0: ACTIVE HADITH READER VIEW
        // ==================================================================
        Item {
          visible: root.activeTab === 0
          anchors.fill: parent

          // Top Status Bar: Collection Pill Badge + Hadith Number + Grade Badge
          Item {
            id: readerStatusBar
            anchors.top: parent.top
            anchors.left: parent.left
            anchors.right: parent.right
            height: Style.space(24)

            Row {
              anchors.left: parent.left
              anchors.verticalCenter: parent.verticalCenter
              spacing: Style.space(8)

              Rectangle {
                height: Style.space(20)
                width: colBadgeText.implicitWidth + Style.space(12)
                radius: Style.space(4)
                color: Style.selectedFillFor(root.barForeground, Color.accent)

                Text {
                  id: colBadgeText
                  anchors.centerIn: parent
                  textFormat: Text.PlainText
                  text: root.activeHadith ? root.activeHadith.collectionName : "HADITH"
                  color: Color.accent
                  font.family: root.barFontFamily
                  font.pixelSize: 10
                  font.bold: true
                }
              }

              Text {
                textFormat: Text.PlainText
                text: "Hadith #" + (root.activeHadith ? root.activeHadith.hadithNumber : "1")
                color: root.barForeground
                font.family: root.barFontFamily
                font.pixelSize: Style.font.bodySmall
                font.bold: true
                anchors.verticalCenter: parent.verticalCenter
              }
            }

            Row {
              anchors.right: parent.right
              anchors.verticalCenter: parent.verticalCenter
              spacing: Style.space(8)

              Rectangle {
                height: Style.space(18)
                width: gradeText.implicitWidth + Style.space(10)
                radius: Style.space(3)
                color: Util.alpha(Color.accent, 0.12)

                Text {
                  id: gradeText
                  anchors.centerIn: parent
                  textFormat: Text.PlainText
                  text: "Grade: " + (root.activeHadith ? (root.activeHadith.grade || "Sahih") : "Sahih")
                  color: Color.accent
                  font.family: root.barFontFamily
                  font.pixelSize: 9
                  font.bold: true
                }
              }
            }
          }

          // MAIN HADITH SCROLLABLE CALLIGRAPHY CARD
          BorderSurface {
            anchors.top: readerStatusBar.bottom
            anchors.topMargin: Style.space(6)
            anchors.bottom: readerActionBar.top
            anchors.bottomMargin: Style.space(8)
            anchors.left: parent.left
            anchors.right: parent.right
            radius: Style.cornerRadius
            color: Style.selectedFillFor(root.barForeground, Color.accent)
            borderSpec: Border.controlSpec("selected", root.barForeground, Color.accent)

            Flickable {
              id: hadithScroll
              anchors.fill: parent
              anchors.margins: Style.space(12)
              contentWidth: width
              contentHeight: hadithContentCol.implicitHeight
              clip: true
              boundsBehavior: Flickable.StopAtBounds
              interactive: contentHeight > height

              Column {
                id: hadithContentCol
                width: hadithScroll.width
                spacing: Style.space(14)

                // Arabic Hadith Text
                Text {
                  textFormat: Text.PlainText
                  width: parent.width
                  text: root.activeHadith ? root.activeHadith.arabic : ""
                  color: root.barForeground
                  font.pixelSize: Model.FONT_SIZES[root.configuredState.fontSizeIndex !== undefined ? root.configuredState.fontSizeIndex : 1].size
                  font.bold: true
                  wrapMode: Text.WordWrap
                  horizontalAlignment: Text.AlignHCenter
                  lineHeight: 1.5
                }

                // English Translation Block
                Column {
                  visible: root.showEnglishTranslation && root.activeHadith && root.activeHadith.english !== ""
                  width: parent.width
                  spacing: Style.space(8)

                  PanelSeparator { foreground: Util.alpha(root.barForeground, 0.2) }

                  Text {
                    textFormat: Text.PlainText
                    width: parent.width
                    text: root.activeHadith ? ("\"" + root.activeHadith.english + "\"") : ""
                    color: root.barForeground
                    font.family: root.barFontFamily
                    font.pixelSize: Style.font.bodySmall
                    wrapMode: Text.WordWrap
                    horizontalAlignment: Text.AlignHCenter
                    lineHeight: 1.3
                  }
                }
              }
            }
          }

          // ACTION BAR: Prev | Next | Bookmark | Copy | Toggle English
          Item {
            id: readerActionBar
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            anchors.right: parent.right
            height: Style.space(32)

            Row {
              anchors.left: parent.left
              anchors.verticalCenter: parent.verticalCenter
              spacing: Style.space(6)

              Button {
                text: "◀ Prev"
                tooltipText: "Previous Hadith (Key: P)"
                onClicked: root.advancePrev()
              }

              Button {
                text: "Next ▶"
                tooltipText: "Next Hadith (Key: N)"
                onClicked: root.advanceNext()
              }

              Button {
                text: root.isBookmarked ? "⭐ Bookmarked" : "☆ Bookmark"
                selected: root.isBookmarked
                tooltipText: "Bookmark this Hadith (Key: B)"
                onClicked: root.toggleBookmark()
              }
            }

            Row {
              anchors.right: parent.right
              anchors.verticalCenter: parent.verticalCenter
              spacing: Style.space(6)

              Button {
                text: "📋 Copy"
                tooltipText: "Copy Arabic & English Hadith with citation to clipboard"
                onClicked: root.copyHadithToClipboard()
              }

              Button {
                text: root.showEnglishTranslation ? "En Meaning" : "En"
                selected: root.showEnglishTranslation
                tooltipText: "Toggle English Translation"
                onClicked: root.showEnglishTranslation = !root.showEnglishTranslation
              }
            }
          }
        }

        // ==================================================================
        // TAB 1: COLLECTIONS & LIVE SEARCH
        // ==================================================================
        Item {
          visible: root.activeTab === 1
          anchors.fill: parent

          Column {
            id: tab1HeaderCol
            anchors.top: parent.top
            anchors.left: parent.left
            anchors.right: parent.right
            spacing: Style.space(6)

            // Search Box
            Item {
              width: parent.width
              height: Style.space(30)

              Row {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(8)

                TextField {
                  width: Style.space(400)
                  placeholderText: "🔍 Search 36,108 Hadiths (intention, prayer, parents, patience)…"
                  text: root.searchQuery
                  onTextChanged: root.searchQuery = text
                }

                Button {
                  visible: root.searchQuery !== ""
                  text: "Clear"
                  onClicked: root.searchQuery = ""
                }
              }
            }

            // Collection Filter Chips (Wrapping Flow layout - all 10 collections visible)
            Flow {
              width: parent.width
              spacing: Style.space(4)

              Button {
                text: "📖 All (36,108)"
                selected: root.selectedCollection === "all"
                onClicked: root.selectedCollection = "all"
              }

              Repeater {
                model: Data.COLLECTIONS

                Button {
                  required property var modelData
                  text: modelData.name + " (" + modelData.totalHadiths + ")"
                  selected: root.selectedCollection === modelData.key
                  tooltipText: modelData.arabicName + " by " + modelData.author
                  onClicked: root.selectedCollection = modelData.key
                }
              }
            }

            PanelSeparator { foreground: root.barForeground }
          }

          // Filtered Hadiths List strictly bounded by anchors
          Flickable {
            anchors.top: tab1HeaderCol.bottom
            anchors.topMargin: Style.space(4)
            anchors.bottom: parent.bottom
            anchors.left: parent.left
            anchors.right: parent.right
            contentWidth: width
            contentHeight: colListCol.implicitHeight
            clip: true
            boundsBehavior: Flickable.StopAtBounds

            Column {
              id: colListCol
              width: parent.width
              spacing: Style.space(4)

              readonly property var filteredList: Model.filterHadiths(root.selectedCollection, root.searchQuery, root.configuredState.bookmarks)

              Text {
                textFormat: Text.PlainText
                visible: parent.filteredList.length === 0
                width: parent.width
                text: "No hadiths found matching your filter."
                color: Qt.darker(root.barForeground, 1.4)
                font.family: root.barFontFamily
                font.pixelSize: Style.font.bodySmall
                horizontalAlignment: Text.AlignHCenter
              }

              Repeater {
                model: parent.filteredList

                BorderSurface {
                  required property var modelData
                  required property int index
                  width: parent.width
                  height: Style.space(64)
                  radius: Style.cornerRadius
                  clip: true

                  readonly property bool isCurrent: root.activeHadith && root.activeHadith.id === modelData.id

                  color: isCurrent
                    ? Style.selectedFillFor(root.barForeground, Color.accent)
                    : (hMouseArea.containsMouse ? Util.alpha(root.barForeground, 0.05) : "transparent")

                  borderSpec: isCurrent
                    ? Border.controlSpec("selected", root.barForeground, Color.accent)
                    : (hMouseArea.containsMouse
                      ? Border.flat(Util.alpha(Color.accent, 0.4), 1)
                      : Border.controlSpec("normal", root.barForeground, Color.accent))

                  MouseArea {
                    id: hMouseArea
                    anchors.fill: parent
                    hoverEnabled: true
                    cursorShape: Qt.PointingHandCursor
                    onClicked: root.selectHadith(modelData)
                  }

                  Item {
                    anchors.fill: parent
                    anchors.margins: Style.space(8)

                    Item {
                      anchors.left: parent.left
                      anchors.right: hActionRow.left
                      anchors.rightMargin: Style.space(12)
                      anchors.verticalCenter: parent.verticalCenter
                      height: itemRowCol.implicitHeight
                      clip: true

                      Column {
                        id: itemRowCol
                        width: parent.width
                        spacing: Style.space(2)

                        Row {
                          spacing: Style.space(6)
                          Text {
                            textFormat: Text.PlainText
                            text: modelData.collectionName + " #" + modelData.hadithNumber
                            color: isCurrent ? Color.accent : root.barForeground
                            font.family: root.barFontFamily
                            font.pixelSize: Style.font.bodySmall
                            font.bold: true
                          }
                          Text {
                            textFormat: Text.PlainText
                            text: "• " + (modelData.grade || "Sahih")
                            color: Qt.darker(root.barForeground, 1.4)
                            font.family: root.barFontFamily
                            font.pixelSize: Style.font.caption
                          }
                        }

                        Text {
                          textFormat: Text.PlainText
                          width: parent.width
                          text: modelData.arabic
                          color: root.barForeground
                          font.pixelSize: 14
                          font.bold: true
                          horizontalAlignment: Text.AlignLeft
                          elide: Text.ElideRight
                          maximumLineCount: 1
                          wrapMode: Text.NoWrap
                        }
                      }
                    }

                    Row {
                      id: hActionRow
                      anchors.right: parent.right
                      anchors.verticalCenter: parent.verticalCenter
                      spacing: Style.space(4)

                      Button {
                        text: "▶ Read"
                        selected: isCurrent
                        onClicked: root.selectHadith(modelData)
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // ==================================================================
        // TAB 2: BOOKMARKS & SAVED HADITHS
        // ==================================================================
        Item {
          visible: root.activeTab === 2
          anchors.fill: parent

          readonly property var bookmarkedList: Model.filterHadiths("bookmarks", "", root.configuredState.bookmarks)

          Text {
            textFormat: Text.PlainText
            visible: parent.bookmarkedList.length === 0
            width: parent.width
            text: "You haven't bookmarked any Hadiths yet. Click ☆ Bookmark in the reader to save Hadiths."
            color: Qt.darker(root.barForeground, 1.4)
            font.family: root.barFontFamily
            font.pixelSize: Style.font.bodySmall
            horizontalAlignment: Text.AlignHCenter
          }

          Flickable {
            anchors.fill: parent
            contentWidth: width
            contentHeight: bmListCol.implicitHeight
            clip: true
            boundsBehavior: Flickable.StopAtBounds

            Column {
              id: bmListCol
              width: parent.width
              spacing: Style.space(4)

              Repeater {
                model: parent.parent.bookmarkedList

                BorderSurface {
                  required property var modelData
                  required property int index
                  width: parent.width
                  height: Style.space(64)
                  radius: Style.cornerRadius
                  clip: true

                  readonly property bool isCurrent: root.activeHadith && root.activeHadith.id === modelData.id

                  color: isCurrent
                    ? Style.selectedFillFor(root.barForeground, Color.accent)
                    : (bmMouseArea.containsMouse ? Util.alpha(root.barForeground, 0.05) : "transparent")

                  borderSpec: isCurrent
                    ? Border.controlSpec("selected", root.barForeground, Color.accent)
                    : Border.controlSpec("normal", root.barForeground, Color.accent)

                  MouseArea {
                    id: bmMouseArea
                    anchors.fill: parent
                    hoverEnabled: true
                    cursorShape: Qt.PointingHandCursor
                    onClicked: root.selectHadith(modelData)
                  }

                  Item {
                    anchors.fill: parent
                    anchors.margins: Style.space(8)

                    Item {
                      anchors.left: parent.left
                      anchors.right: bmActionRow.left
                      anchors.rightMargin: Style.space(12)
                      anchors.verticalCenter: parent.verticalCenter
                      height: bmRowCol.implicitHeight
                      clip: true

                      Column {
                        id: bmRowCol
                        width: parent.width
                        spacing: Style.space(2)

                        Row {
                          spacing: Style.space(6)
                          Text {
                            textFormat: Text.PlainText
                            text: modelData.collectionName + " #" + modelData.hadithNumber
                            color: isCurrent ? Color.accent : root.barForeground
                            font.family: root.barFontFamily
                            font.pixelSize: Style.font.bodySmall
                            font.bold: true
                          }
                        }

                        Text {
                          textFormat: Text.PlainText
                          width: parent.width
                          text: modelData.arabic
                          color: root.barForeground
                          font.pixelSize: 14
                          font.bold: true
                          horizontalAlignment: Text.AlignLeft
                          elide: Text.ElideRight
                          maximumLineCount: 1
                          wrapMode: Text.NoWrap
                        }
                      }
                    }

                    Row {
                      id: bmActionRow
                      anchors.right: parent.right
                      anchors.verticalCenter: parent.verticalCenter
                      spacing: Style.space(4)

                      Button {
                        text: "▶ Read"
                        selected: isCurrent
                        onClicked: root.selectHadith(modelData)
                      }

                      Button {
                        text: "🗑 Remove"
                        accent: Color.urgent
                        onClicked: {
                          var bms = (root.configuredState.bookmarks || []).slice()
                          var idx = bms.indexOf(modelData.id)
                          if (idx !== -1) {
                            bms.splice(idx, 1)
                            root.updateState({ bookmarks: bms })
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        // ==================================================================
        // TAB 3: SETTINGS DRAWER
        // ==================================================================
        Flickable {
          visible: root.activeTab === 3
          anchors.fill: parent
          contentWidth: width
          contentHeight: settingsCol.implicitHeight
          clip: true
          boundsBehavior: Flickable.StopAtBounds

          Column {
            id: settingsCol
            width: parent.width
            spacing: Style.space(12)

            PanelSectionHeader {
              text: "1. DAILY & PERIODIC NOTIFICATIONS"
              foreground: root.barForeground
              fontFamily: root.barFontFamily
            }

            // Daily Hadith Notification Row
            BorderSurface {
              width: parent.width
              height: Style.space(64)
              radius: Style.cornerRadius
              color: root.configuredState.dailyNotificationEnabled ? Style.selectedFillFor(root.barForeground, Color.accent) : "transparent"
              borderSpec: Border.controlSpec("normal", root.barForeground, Color.accent)

              Item {
                anchors.fill: parent
                anchors.leftMargin: Style.space(12)
                anchors.rightMargin: Style.space(12)

                Row {
                  anchors.left: parent.left
                  anchors.verticalCenter: parent.verticalCenter
                  spacing: Style.space(8)

                  ToggleSwitch {
                    checked: root.configuredState.dailyNotificationEnabled
                    onToggled: root.updateState({ dailyNotificationEnabled: !root.configuredState.dailyNotificationEnabled })
                    anchors.verticalCenter: parent.verticalCenter
                  }

                  Column {
                    spacing: Style.space(2)
                    anchors.verticalCenter: parent.verticalCenter
                    Text { textFormat: Text.PlainText; text: "📜 Daily Hadith of the Day Notification"; color: root.barForeground; font.family: root.barFontFamily; font.pixelSize: Style.font.bodySmall; font.bold: true }
                    Text { textFormat: Text.PlainText; text: "Delivers a fresh Prophetic Hadith to your desktop every morning"; color: Qt.darker(root.barForeground, 1.4); font.family: root.barFontFamily; font.pixelSize: Style.font.caption }
                  }
                }

                Row {
                  anchors.right: parent.right
                  anchors.verticalCenter: parent.verticalCenter
                  spacing: Style.space(6)

                  Text { textFormat: Text.PlainText; text: "Scheduled:"; color: Qt.darker(root.barForeground, 1.4); font.family: root.barFontFamily; font.pixelSize: Style.font.caption; anchors.verticalCenter: parent.verticalCenter }
                  TextField {
                    width: Style.space(80)
                    text: root.configuredState.dailyNotificationTime || "08:00"
                    font.family: root.barFontFamily
                    font.pixelSize: Style.font.caption
                    onEditingFinished: root.updateState({ dailyNotificationTime: text.trim() })
                  }
                }
              }
            }

            // Periodic Reminder Presets
            Item {
              width: parent.width
              height: Style.space(32)

              Row {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(8)

                ToggleSwitch {
                  checked: root.configuredState.periodicNotificationEnabled
                  onToggled: root.updateState({ periodicNotificationEnabled: !root.configuredState.periodicNotificationEnabled })
                  anchors.verticalCenter: parent.verticalCenter
                }

                Text {
                  textFormat: Text.PlainText
                  text: "Periodic Reminder Interval:"
                  color: root.barForeground
                  font.family: root.barFontFamily
                  font.pixelSize: Style.font.bodySmall
                  anchors.verticalCenter: parent.verticalCenter
                }
              }

              Row {
                anchors.right: parent.right
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(4)

                Repeater {
                  model: Model.INTERVAL_PRESETS

                  Button {
                    required property var modelData
                    text: modelData.label
                    selected: (root.configuredState.periodicIntervalHours || 4) === modelData.value
                    onClicked: {
                      root.updateState({ periodicIntervalHours: modelData.value })
                      root.timerSecondsRemaining = modelData.value * 3600
                    }
                  }
                }
              }
            }

            PanelSeparator { foreground: root.barForeground }

            PanelSectionHeader {
              text: "2. READING PREFERENCES & TYPOGRAPHY"
              foreground: root.barForeground
              fontFamily: root.barFontFamily
            }

            // Font Size Selector
            Item {
              width: parent.width
              height: Style.space(32)

              Row {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(8)

                Text {
                  textFormat: Text.PlainText
                  text: "Arabic Typography Size:"
                  color: root.barForeground
                  font.family: root.barFontFamily
                  font.pixelSize: Style.font.bodySmall
                  anchors.verticalCenter: parent.verticalCenter
                }
              }

              Row {
                anchors.right: parent.right
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(4)

                Repeater {
                  model: Model.FONT_SIZES

                  Button {
                    required property var modelData
                    required property int index
                    text: modelData.label + " (" + modelData.size + "px)"
                    selected: (root.configuredState.fontSizeIndex !== undefined ? root.configuredState.fontSizeIndex : 1) === index
                    onClicked: root.updateState({ fontSizeIndex: index })
                  }
                }
              }
            }

            // Volume & Sound Controls
            Item {
              width: parent.width
              height: Style.space(32)

              Row {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(8)

                Text {
                  textFormat: Text.PlainText
                  text: "󰕾 Volume (" + (root.configuredState.soundVolume !== undefined ? root.configuredState.soundVolume : 80) + "%):"
                  color: root.barForeground
                  font.family: root.barFontFamily
                  font.pixelSize: Style.font.bodySmall
                  font.bold: true
                  anchors.verticalCenter: parent.verticalCenter
                }

                PanelSlider {
                  bar: root.bar
                  width: Style.space(220)
                  minimum: 0
                  maximum: 100
                  step: 5
                  integer: true
                  value: root.configuredState.soundVolume !== undefined ? root.configuredState.soundVolume : 80
                  onMoved: function(v) { root.updateState({ soundVolume: Math.round(v) }) }
                  anchors.verticalCenter: parent.verticalCenter
                }
              }

              Row {
                anchors.right: parent.right
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(6)

                Button {
                  text: "▶ Test Chime"
                  onClicked: root.playSound("chime")
                }
              }
            }

            PanelSeparator { foreground: root.barForeground }

            PanelSectionHeader {
              text: "3. MENUBAR WIDGET APPEARANCE"
              foreground: root.barForeground
              fontFamily: root.barFontFamily
            }

            Item {
              width: parent.width
              height: Style.space(32)

              Row {
                anchors.left: parent.left
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(8)

                Text {
                  textFormat: Text.PlainText
                  text: "Bar Display Format:"
                  color: root.barForeground
                  font.family: root.barFontFamily
                  font.pixelSize: Style.font.bodySmall
                  anchors.verticalCenter: parent.verticalCenter
                }
              }

              Row {
                anchors.right: parent.right
                anchors.verticalCenter: parent.verticalCenter
                spacing: Style.space(4)

                Repeater {
                  model: Model.BAR_FORMATS

                  Button {
                    required property var modelData
                    required property int index
                    text: modelData.label
                    selected: (root.configuredState.barFormatIndex !== undefined ? root.configuredState.barFormatIndex : 0) === index
                    tooltipText: "Example: " + modelData.example + " (Right-click widget on bar to cycle)"
                    onClicked: root.updateState({ barFormatIndex: index })
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
