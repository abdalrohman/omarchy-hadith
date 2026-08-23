import QtQuick
import Quickshell
import Quickshell.Io
import qs.Commons
import qs.Ui
import "Model.js" as Model

// ============================================================================
// BarWidget.qml — Menubar Widget for Omarchy Hadith Plugin
// ============================================================================
BarWidget {
  id: root
  moduleName: "abdulrahman.hadith"

  function injectPanel() {
    var target = panelLoader.item
    if (!target) return
    if ("bar" in target) target.bar = root.bar
    if ("settings" in target) target.settings = root.settings
    if ("anchorItem" in target) target.anchorItem = button
    if ("hostWidget" in target) target.hostWidget = root
  }

  function refresh() {
    if (panelLoader.item && panelLoader.item.refresh) panelLoader.item.refresh()
  }

  function togglePanel() {
    if (panelLoader.item && panelLoader.item.toggle) panelLoader.item.toggle()
  }

  function nextHadith() {
    if (panelLoader.item && panelLoader.item.advanceNext) panelLoader.item.advanceNext()
  }

  function prevHadith() {
    if (panelLoader.item && panelLoader.item.advancePrev) panelLoader.item.advancePrev()
  }

  function randomHadith() {
    if (panelLoader.item && panelLoader.item.loadRandomHadith) panelLoader.item.loadRandomHadith()
  }

  function showHadith(id) {
    if (panelLoader.item && panelLoader.item.showHadith) panelLoader.item.showHadith(id)
  }

  function cycleFormat() {
    if (panelLoader.item && panelLoader.item.cycleBarFormat) panelLoader.item.cycleBarFormat()
  }

  readonly property bool opened: panelLoader.item ? panelLoader.item.opened === true : false

  function open() {
    if (panelLoader.item && panelLoader.item.open) panelLoader.item.open()
  }

  function close() {
    if (panelLoader.item && panelLoader.item.close) panelLoader.item.close()
  }

  readonly property real openPanelIndicatorWidth: button.labelWidth
  readonly property real openPanelIndicatorHeight: Math.max(Style.space(10), Math.round(Style.bar.iconSlot * 0.55))

  readonly property bool popoutSwitchClosing: panelLoader.item ? panelLoader.item.popoutSwitchClosing === true : false

  function closeForPopoutSwitch() {
    if (panelLoader.item && panelLoader.item.closeForPopoutSwitch) panelLoader.item.closeForPopoutSwitch()
  }

  visible: true
  implicitWidth: button.implicitWidth
  implicitHeight: button.implicitHeight

  onBarChanged: injectPanel()
  onSettingsChanged: injectPanel()

  Loader {
    id: panelLoader
    active: true
    source: Qt.resolvedUrl("Panel.qml")
    visible: false
    onLoaded: {
      root.injectPanel()
      Qt.callLater(root.injectPanel)
    }
  }

  IpcHandler {
    target: "abdulrahman.hadith"

    function open(): void { root.open() }
    function close(): void { root.close() }
    function show(): void { root.open() }
    function hide(): void { root.close() }
    function toggle(): void { root.togglePanel() }
    function next(): void { root.nextHadith() }
    function prev(): void { root.prevHadith() }
    function random(): void { root.randomHadith() }
    function showHadith(id: string): void { root.showHadith(id) }
    function cycleFormat(): void { root.cycleFormat() }
    function refresh(): void { root.refresh() }
  }

  WidgetButton {
    id: button
    anchors.fill: parent
    bar: root.bar
    text: panelLoader.item ? panelLoader.item.barLabel : "📜 Hadith"
    labelVisible: true
    hasVisualContent: true
    horizontalMargin: 8.75
    verticalPadding: 8.75
    tooltipText: panelLoader.item ? panelLoader.item.tooltipText : "Prophetic Hadiths & Daily Wisdom"

    onPressed: function(b) {
      if (b === Qt.RightButton) root.cycleFormat()
      else if (b === Qt.MiddleButton) root.randomHadith()
      else root.togglePanel()
    }

    onWheelMoved: function(delta) {
      if (delta > 0) root.prevHadith()
      else if (delta < 0) root.nextHadith()
    }
  }
}
