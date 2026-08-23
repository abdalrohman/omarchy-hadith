// ============================================================================
// HadithData.js — 10 Hadith Collections Metadata & Core Authentic Dataset
// ============================================================================
.pragma library

var COLLECTIONS = [
  {
    "key": "bukhari",
    "name": "Sahih al-Bukhari",
    "arabicName": "صحيح البخاري",
    "author": "Imam Bukhari",
    "reliability": "Sahih",
    "totalHadiths": 7580
  },
  {
    "key": "muslim",
    "name": "Sahih Muslim",
    "arabicName": "صحيح مسلم",
    "author": "Imam Muslim",
    "reliability": "Sahih",
    "totalHadiths": 7360
  },
  {
    "key": "abudawud",
    "name": "Sunan Abu Dawud",
    "arabicName": "سنن أبي داود",
    "author": "Abu Dawud",
    "reliability": "Hasan/Sahih",
    "totalHadiths": 5272
  },
  {
    "key": "tirmidhi",
    "name": "Jami at-Tirmidhi",
    "arabicName": "جامع الترمذي",
    "author": "Imam Tirmidhi",
    "reliability": "Hasan/Sahih",
    "totalHadiths": 3926
  },
  {
    "key": "ibnmajah",
    "name": "Sunan Ibn Majah",
    "arabicName": "سنن ابن ماجه",
    "author": "Ibn Majah",
    "reliability": "Hasan/Sahih",
    "totalHadiths": 4340
  },
  {
    "key": "nasai",
    "name": "Sunan an-Nasa'i",
    "arabicName": "سنن النسائي",
    "author": "Imam an-Nasa'i",
    "reliability": "Sahih",
    "totalHadiths": 5679
  },
  {
    "key": "malik",
    "name": "Muwatta Malik",
    "arabicName": "موطأ مالك",
    "author": "Imam Malik",
    "reliability": "Sahih",
    "totalHadiths": 1829
  },
  {
    "key": "nawawi",
    "name": "Nawawi's 40 Hadith",
    "arabicName": "الأربعون النووية",
    "author": "Imam an-Nawawi",
    "reliability": "Various",
    "totalHadiths": 42
  },
  {
    "key": "qudsi",
    "name": "40 Hadith Qudsi",
    "arabicName": "الأحاديث القدسية",
    "author": "Various",
    "reliability": "Various",
    "totalHadiths": 40
  },
  {
    "key": "dehlawi",
    "name": "Shah Waliullah's 40 Hadith",
    "arabicName": "الأربعون لولي الله الدهلوي",
    "author": "Shah Waliullah Dehlawi",
    "reliability": "Various",
    "totalHadiths": 40
  }
];

var BUILTIN_HADITHS = [
  {
    "id": "bukhari-1",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 1,
    "arabic": "حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ ، قَالَ : حَدَّثَنَا سُفْيَانُ ، قَالَ : حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْأَنْصَارِيُّ ، قَالَ : أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ ، يَقُولُ : سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُ عَلَى الْمِنْبَرِ، قَالَ : سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، يَقُولُ : \" إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
    "english": "Narrated 'Umar bin Al-Khattab: I heard Allah's Messenger (ﷺ) saying, \"The reward of deeds depends upon the intentions and every person will get the reward according to what he has intended. So whoever emigrated for worldly benefits or for a woman to marry, his emigration was for what he emigrated for",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-2",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 2,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَنْ هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ ـ رضى الله عنها ـ أَنَّ الْحَارِثَ بْنَ هِشَامٍ ـ رضى الله عنه ـ سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ كَيْفَ يَأْتِيكَ الْوَحْىُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ أَحْيَانًا يَأْتِينِي مِثْلَ صَلْصَلَةِ الْجَرَسِ ـ وَهُوَ أَشَدُّهُ عَلَىَّ ـ فَيُفْصَمُ عَنِّي وَقَدْ وَعَيْتُ عَنْهُ مَا قَالَ، وَأَحْيَانًا يَتَمَثَّلُ لِيَ الْمَلَكُ رَجُلاً فَيُكَلِّمُنِي فَأَعِي مَا يَقُولُ ‏\"‏‏.‏ قَالَتْ عَائِشَةُ رضى الله عنها وَلَقَدْ رَأَيْتُهُ يَنْزِلُ عَلَيْهِ الْوَحْىُ فِي الْيَوْمِ الشَّدِيدِ الْبَرْدِ، فَيَفْصِمُ عَنْهُ وَإِنَّ جَبِينَهُ لَيَتَفَصَّدُ عَرَقًا‏.‏",
    "english": "Narrated 'Aisha: (the mother of the faithful believers) Al-Harith bin Hisham asked Allah's Messenger (ﷺ) \"O Allah's Messenger (ﷺ)! How is the Divine Inspiration revealed to you?\" Allah's Messenger (ﷺ) replied, \"Sometimes it is (revealed) like the ringing of a bell, this form of Inspiration is the hardest of all and then this state passes off after I have grasped what is inspired. Sometimes the Angel comes in the form of a man and talks to me and I grasp whatever he says.\" 'Aisha added: Verily I saw the Prophet (ﷺ) being inspired divinely on a very cold day and noticed the sweat dropping from his forehead (as the Inspiration was over)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-3",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا يَحْيَى بْنُ بُكَيْرٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ عُقَيْلٍ، عَنِ ابْنِ شِهَابٍ، عَنْ عُرْوَةَ بْنِ الزُّبَيْرِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ، أَنَّهَا قَالَتْ أَوَّلُ مَا بُدِئَ بِهِ رَسُولُ اللَّهِ صلى الله عليه وسلم مِنَ الْوَحْىِ الرُّؤْيَا الصَّالِحَةُ فِي النَّوْمِ، فَكَانَ لاَ يَرَى رُؤْيَا إِلاَّ جَاءَتْ مِثْلَ فَلَقِ الصُّبْحِ، ثُمَّ حُبِّبَ إِلَيْهِ الْخَلاَءُ، وَكَانَ يَخْلُو بِغَارِ حِرَاءٍ فَيَتَحَنَّثُ فِيهِ ـ وَهُوَ التَّعَبُّدُ ـ اللَّيَالِيَ ذَوَاتِ الْعَدَدِ قَبْلَ أَنْ يَنْزِعَ إِلَى أَهْلِهِ، وَيَتَزَوَّدُ لِذَلِكَ، ثُمَّ يَرْجِعُ إِلَى خَدِيجَةَ، فَيَتَزَوَّدُ لِمِثْلِهَا، حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ، فَجَاءَهُ الْمَلَكُ فَقَالَ اقْرَأْ‏.‏ قَالَ ‏\"‏ مَا أَنَا بِقَارِئٍ ‏\"‏‏.‏ قَالَ ‏\"‏ فَأَخَذَنِي فَغَطَّنِي حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ قُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّانِيَةَ حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ فَقُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّالِثَةَ، ثُمَّ أَرْسَلَنِي فَقَالَ ‏{‏اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ * خَلَقَ الإِنْسَانَ مِنْ عَلَقٍ * اقْرَأْ وَرَبُّكَ الأَكْرَمُ‏}‏ ‏\"‏‏.‏ فَرَجَعَ بِهَا رَسُولُ اللَّهِ صلى الله عليه وسلم يَرْجُفُ فُؤَادُهُ، فَدَخَلَ عَلَى خَدِيجَةَ بِنْتِ خُوَيْلِدٍ رضى الله عنها فَقَالَ ‏\"‏ زَمِّلُونِي زَمِّلُونِي ‏\"‏‏.‏ فَزَمَّلُوهُ حَتَّى ذَهَبَ عَنْهُ الرَّوْعُ، فَقَالَ لِخَدِيجَةَ وَأَخْبَرَهَا الْخَبَرَ ‏\"‏ لَقَدْ خَشِيتُ عَلَى نَفْسِي ‏\"‏‏.‏ فَقَالَتْ خَدِيجَةُ كَلاَّ وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا، إِنَّكَ لَتَصِلُ الرَّحِمَ، وَتَحْمِلُ الْكَلَّ، وَتَكْسِبُ الْمَعْدُومَ، وَتَقْرِي الضَّيْفَ، وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ‏.‏ فَانْطَلَقَتْ بِهِ خَدِيجَةُ حَتَّى أَتَتْ بِهِ وَرَقَةَ بْنَ نَوْفَلِ بْنِ أَسَدِ بْنِ عَبْدِ الْعُزَّى ابْنَ عَمِّ خَدِيجَةَ ـ وَكَانَ امْرَأً تَنَصَّرَ فِي الْجَاهِلِيَّةِ، وَكَانَ يَكْتُبُ الْكِتَابَ الْعِبْرَانِيَّ، فَيَكْتُبُ مِنَ الإِنْجِيلِ بِالْعِبْرَانِيَّةِ مَا شَاءَ اللَّهُ أَنْ يَكْتُبَ، وَكَانَ شَيْخًا كَبِيرًا قَدْ عَمِيَ ـ فَقَالَتْ لَهُ خَدِيجَةُ يَا ابْنَ عَمِّ اسْمَعْ مِنَ ابْنِ أَخِيكَ‏.‏ فَقَالَ لَهُ وَرَقَةُ يَا ابْنَ أَخِي مَاذَا تَرَى فَأَخْبَرَهُ رَسُولُ اللَّهِ صلى الله عليه وسلم خَبَرَ مَا رَأَى‏.‏ فَقَالَ لَهُ وَرَقَةُ هَذَا النَّامُوسُ الَّذِي نَزَّلَ اللَّهُ عَلَى مُوسَى صلى الله عليه وسلم يَا لَيْتَنِي فِيهَا جَذَعًا، لَيْتَنِي أَكُونُ حَيًّا إِذْ يُخْرِجُكَ قَوْمُكَ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ أَوَمُخْرِجِيَّ هُمْ ‏\"‏‏.‏ قَالَ نَعَمْ، لَمْ يَأْتِ رَجُلٌ قَطُّ بِمِثْلِ مَا جِئْتَ بِهِ إِلاَّ عُودِيَ، وَإِنْ يُدْرِكْنِي يَوْمُكَ أَنْصُرْكَ نَصْرًا مُؤَزَّرًا‏.‏ ثُمَّ لَمْ يَنْشَبْ وَرَقَةُ أَنْ تُوُفِّيَ وَفَتَرَ الْوَحْىُ‏.‏",
    "english": "Narrated 'Aisha (the mother of the faithful believers):The commencement of the Divine Inspiration to Allah's Messenger (ﷺ) was in the form of good dreams which came true like bright daylight, and then the love of seclusion was bestowed upon him. He used to go in seclusion in the cave of Hira where he used to worship (Allah alone) continuously for many days before his desire to see his family. He used to take with him the journey food for the stay and then come back to (his wife) Khadija to take his food likewise again till suddenly the Truth descended upon him while he was in the cave of Hira. The angel came to him and asked him to read. The Prophet (ﷺ) replied, \"I do not know how to read.\" The Prophet (ﷺ) added, \"The angel caught me (forcefully) and pressed me so hard that I could not bear it any more. He then released me and again asked me to read and I replied, 'I do not know how to read.' Thereupon he caught me again and pressed me a second time till I could not bear it any more. He then released me and again asked me to read but again I replied, 'I do not know how to read (or what shall I read)?' Thereupon he caught me for the third time and pressed me, and then released me and said, 'Read in the name of your Lord, who has created (all that exists), created man from a clot. Read! And your Lord is the Most Generous.\" (96.1, 96.2, 96.3) Then Allah's Messenger (ﷺ) returned with the Inspiration and with his heart beating severely. Then he went to Khadija bint Khuwailid and said, \"Cover me! Cover me!\" They covered him till his fear was over and after that he told her everything that had happened and said, \"I fear that something may happen to me.\" Khadija replied, \"Never! By Allah, Allah will never disgrace you. You keep good relations with your kith and kin, help the poor and the destitute, serve your guests generously and assist the deserving calamity-afflicted ones.\" Khadija then accompanied him to her cousin Waraqa bin Naufal bin Asad bin 'Abdul 'Uzza, who, during the pre-Islamic Period became a Christian and used to write the writing with Hebrew letters. He would write from the Gospel in Hebrew as much as Allah wished him to write. He was an old man and had lost his eyesight. Khadija said to Waraqa, \"Listen to the story of your nephew, O my cousin!\" Waraqa asked, \"O my nephew! What have you seen?\" Allah's Messenger (ﷺ) described whatever he had seen. Waraqa said, \"This is the same one who keeps the secrets (angel Gabriel) whom Allah had sent to Moses. I wish I were young and could live up to the time when your people would turn you out.\" Allah's Messenger (ﷺ) asked, \"Will they drive me out?\" Waraqa replied in the affirmative and said, \"Anyone (man) who came with something similar to what you have brought was treated with hostility; and if I should remain alive till the day when you will be turned out then I would support you strongly.\" But after a few days Waraqa died and the Divine Inspiration was also paused for a while",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-4",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 4,
    "arabic": "قَالَ ابْنُ شِهَابٍ وَأَخْبَرَنِي أَبُو سَلَمَةَ بْنُ عَبْدِ الرَّحْمَنِ، أَنَّ جَابِرَ بْنَ عَبْدِ اللَّهِ الأَنْصَارِيَّ، قَالَ ـ وَهُوَ يُحَدِّثُ عَنْ فَتْرَةِ الْوَحْىِ، فَقَالَ ـ فِي حَدِيثِهِ ‏\"‏ بَيْنَا أَنَا أَمْشِي، إِذْ سَمِعْتُ صَوْتًا، مِنَ السَّمَاءِ، فَرَفَعْتُ بَصَرِي فَإِذَا الْمَلَكُ الَّذِي جَاءَنِي بِحِرَاءٍ جَالِسٌ عَلَى كُرْسِيٍّ بَيْنَ السَّمَاءِ وَالأَرْضِ، فَرُعِبْتُ مِنْهُ، فَرَجَعْتُ فَقُلْتُ زَمِّلُونِي‏.‏ فَأَنْزَلَ اللَّهُ تَعَالَى ‏{‏يَا أَيُّهَا الْمُدَّثِّرُ * قُمْ فَأَنْذِرْ‏}‏ إِلَى قَوْلِهِ ‏{‏وَالرُّجْزَ فَاهْجُرْ‏}‏ فَحَمِيَ الْوَحْىُ وَتَتَابَعَ ‏\"‏‏.‏ تَابَعَهُ عَبْدُ اللَّهِ بْنُ يُوسُفَ وَأَبُو صَالِحٍ‏.‏ وَتَابَعَهُ هِلاَلُ بْنُ رَدَّادٍ عَنِ الزُّهْرِيِّ‏.‏ وَقَالَ يُونُسُ وَمَعْمَرٌ ‏\"‏ بَوَادِرُهُ ‏\"‏‏.‏",
    "english": "Narrated Jabir bin 'Abdullah Al-Ansari (while talking about the period of pause in revelation) reporting the speech of the Prophet:\"While I was walking, all of a sudden I heard a voice from the sky. I looked up and saw the same angel who had visited me at the cave of Hira' sitting on a chair between the sky and the earth. I got afraid of him and came back home and said, 'Wrap me (in blankets).' And then Allah revealed the following Holy Verses (of Quran): 'O you (i.e. Muhammad)! wrapped up in garments!' Arise and warn (the people against Allah's Punishment),... up to 'and desert the idols.' (74.1-5) After this the revelation started coming strongly, frequently and regularly",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-5",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 5,
    "arabic": "حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، قَالَ حَدَّثَنَا أَبُو عَوَانَةَ، قَالَ حَدَّثَنَا مُوسَى بْنُ أَبِي عَائِشَةَ، قَالَ حَدَّثَنَا سَعِيدُ بْنُ جُبَيْرٍ، عَنِ ابْنِ عَبَّاسٍ، فِي قَوْلِهِ تَعَالَى ‏{‏لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ‏}‏ قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُعَالِجُ مِنَ التَّنْزِيلِ شِدَّةً، وَكَانَ مِمَّا يُحَرِّكُ شَفَتَيْهِ ـ فَقَالَ ابْنُ عَبَّاسٍ فَأَنَا أُحَرِّكُهُمَا لَكُمْ كَمَا كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُحَرِّكُهُمَا‏.‏ وَقَالَ سَعِيدٌ أَنَا أُحَرِّكُهُمَا كَمَا رَأَيْتُ ابْنَ عَبَّاسٍ يُحَرِّكُهُمَا‏.‏ فَحَرَّكَ شَفَتَيْهِ ـ فَأَنْزَلَ اللَّهُ تَعَالَى ‏{‏لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ* إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ‏}‏ قَالَ جَمْعُهُ لَهُ فِي صَدْرِكَ، وَتَقْرَأَهُ ‏{‏فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ‏}‏ قَالَ فَاسْتَمِعْ لَهُ وَأَنْصِتْ ‏{‏ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ‏}‏ ثُمَّ إِنَّ عَلَيْنَا أَنْ تَقْرَأَهُ‏.‏ فَكَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم بَعْدَ ذَلِكَ إِذَا أَتَاهُ جِبْرِيلُ اسْتَمَعَ، فَإِذَا انْطَلَقَ جِبْرِيلُ قَرَأَهُ النَّبِيُّ صلى الله عليه وسلم كَمَا قَرَأَهُ‏.‏",
    "english": "Narrated Said bin Jubair: Ibn 'Abbas in the explanation of the statement of Allah \"Move not your tongue concerning (the Quran) to make haste therewith.\" (75.16) said \"Allah's Messenger (ﷺ) used to bear the revelation with great trouble and used to move his lips (quickly) with the Inspiration.\" Ibn 'Abbas moved his lips saying, \"I am moving my lips in front of you as Allah's Messenger (ﷺ) used to move his.\" Said moved his lips saying: \"I am moving my lips, as I saw Ibn 'Abbas moving his.\" Ibn 'Abbas added, \"So Allah revealed 'Move not your tongue concerning (the Qur'an) to make haste therewith. It is for Us to collect it and to give you (O Muhammad) the ability to recite it (the Quran)' (75.16-17) which means that Allah will make him (the Prophet) remember the portion of the Qur'an which was revealed at that time by heart and recite it. The statement of Allah: 'And when we have recited it to you (O Muhammad through Gabriel) then you follow its (Quran) recital' (75.18) means 'listen to it and be silent.' Then it is for Us (Allah) to make it clear to you' (75.19) means 'Then it is (for Allah) to make you recite it (and its meaning will be clear by itself through your tongue). Afterwards, Allah's Messenger (ﷺ) used to listen to Gabriel whenever he came and after his departure he used to recite it as Gabriel had recited it",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-6",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 6,
    "arabic": "حَدَّثَنَا عَبْدَانُ، قَالَ أَخْبَرَنَا عَبْدُ اللَّهِ، قَالَ أَخْبَرَنَا يُونُسُ، عَنِ الزُّهْرِيِّ، ح وَحَدَّثَنَا بِشْرُ بْنُ مُحَمَّدٍ، قَالَ أَخْبَرَنَا عَبْدُ اللَّهِ، قَالَ أَخْبَرَنَا يُونُسُ، وَمَعْمَرٌ، عَنِ الزُّهْرِيِّ، نَحْوَهُ قَالَ أَخْبَرَنِي عُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ، عَنِ ابْنِ عَبَّاسٍ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم أَجْوَدَ النَّاسِ، وَكَانَ أَجْوَدُ مَا يَكُونُ فِي رَمَضَانَ حِينَ يَلْقَاهُ جِبْرِيلُ، وَكَانَ يَلْقَاهُ فِي كُلِّ لَيْلَةٍ مِنْ رَمَضَانَ فَيُدَارِسُهُ الْقُرْآنَ، فَلَرَسُولُ اللَّهِ صلى الله عليه وسلم أَجْوَدُ بِالْخَيْرِ مِنَ الرِّيحِ الْمُرْسَلَةِ‏.‏",
    "english": "Narrated Ibn 'Abbas: Allah's Messenger (ﷺ) was the most generous of all the people, and he used to reach the peak in generosity in the month of Ramadan when Gabriel met him. Gabriel used to meet him every night of Ramadan to teach him the Qur'an. Allah's Messenger (ﷺ) was the most generous person, even more generous than the strong uncontrollable wind (in readiness and haste to do charitable deeds)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-7",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 7,
    "arabic": "حَدَّثَنَا أَبُو الْيَمَانِ الْحَكَمُ بْنُ نَافِعٍ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي عُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ عُتْبَةَ بْنِ مَسْعُودٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عَبَّاسٍ، أَخْبَرَهُ أَنَّ أَبَا سُفْيَانَ بْنَ حَرْبٍ أَخْبَرَهُ أَنَّ هِرَقْلَ أَرْسَلَ إِلَيْهِ فِي رَكْبٍ مِنْ قُرَيْشٍ ـ وَكَانُوا تُجَّارًا بِالشَّأْمِ ـ فِي الْمُدَّةِ الَّتِي كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم مَادَّ فِيهَا أَبَا سُفْيَانَ وَكُفَّارَ قُرَيْشٍ، فَأَتَوْهُ وَهُمْ بِإِيلِيَاءَ فَدَعَاهُمْ فِي مَجْلِسِهِ، وَحَوْلَهُ عُظَمَاءُ الرُّومِ ثُمَّ دَعَاهُمْ وَدَعَا بِتَرْجُمَانِهِ فَقَالَ أَيُّكُمْ أَقْرَبُ نَسَبًا بِهَذَا الرَّجُلِ الَّذِي يَزْعُمُ أَنَّهُ نَبِيٌّ فَقَالَ أَبُو سُفْيَانَ فَقُلْتُ أَنَا أَقْرَبُهُمْ نَسَبًا‏.‏ فَقَالَ أَدْنُوهُ مِنِّي، وَقَرِّبُوا أَصْحَابَهُ، فَاجْعَلُوهُمْ عِنْدَ ظَهْرِهِ‏.‏ ثُمَّ قَالَ لِتَرْجُمَانِهِ قُلْ لَهُمْ إِنِّي سَائِلٌ هَذَا عَنْ هَذَا الرَّجُلِ، فَإِنْ كَذَبَنِي فَكَذِّبُوهُ‏.‏ فَوَاللَّهِ لَوْلاَ الْحَيَاءُ مِنْ أَنْ يَأْثِرُوا عَلَىَّ كَذِبًا لَكَذَبْتُ عَنْهُ، ثُمَّ كَانَ أَوَّلَ مَا سَأَلَنِي عَنْهُ أَنْ قَالَ كَيْفَ نَسَبُهُ فِيكُمْ قُلْتُ هُوَ فِينَا ذُو نَسَبٍ‏.‏ قَالَ فَهَلْ قَالَ هَذَا الْقَوْلَ مِنْكُمْ أَحَدٌ قَطُّ قَبْلَهُ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ لاَ‏.‏ قَالَ فَأَشْرَافُ النَّاسِ يَتَّبِعُونَهُ أَمْ ضُعَفَاؤُهُمْ فَقُلْتُ بَلْ ضُعَفَاؤُهُمْ‏.‏ قَالَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ قُلْتُ بَلْ يَزِيدُونَ‏.‏ قَالَ فَهَلْ يَرْتَدُّ أَحَدٌ مِنْهُمْ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ يَغْدِرُ قُلْتُ لاَ، وَنَحْنُ مِنْهُ فِي مُدَّةٍ لاَ نَدْرِي مَا هُوَ فَاعِلٌ فِيهَا‏.‏ قَالَ وَلَمْ تُمْكِنِّي كَلِمَةٌ أُدْخِلُ فِيهَا شَيْئًا غَيْرُ هَذِهِ الْكَلِمَةِ‏.‏ قَالَ فَهَلْ قَاتَلْتُمُوهُ قُلْتُ نَعَمْ‏.‏ قَالَ فَكَيْفَ كَانَ قِتَالُكُمْ إِيَّاهُ قُلْتُ الْحَرْبُ بَيْنَنَا وَبَيْنَهُ سِجَالٌ، يَنَالُ مِنَّا وَنَنَالُ مِنْهُ‏.‏ قَالَ مَاذَا يَأْمُرُكُمْ قُلْتُ يَقُولُ اعْبُدُوا اللَّهَ وَحْدَهُ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَاتْرُكُوا مَا يَقُولُ آبَاؤُكُمْ، وَيَأْمُرُنَا بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ وَالصِّلَةِ‏.‏ فَقَالَ لِلتَّرْجُمَانِ قُلْ لَهُ سَأَلْتُكَ عَنْ نَسَبِهِ، فَذَكَرْتَ أَنَّهُ فِيكُمْ ذُو نَسَبٍ، فَكَذَلِكَ الرُّسُلُ تُبْعَثُ فِي نَسَبِ قَوْمِهَا، وَسَأَلْتُكَ هَلْ قَالَ أَحَدٌ مِنْكُمْ هَذَا الْقَوْلَ فَذَكَرْتَ أَنْ لاَ، فَقُلْتُ لَوْ كَانَ أَحَدٌ قَالَ هَذَا الْقَوْلَ قَبْلَهُ لَقُلْتُ رَجُلٌ يَأْتَسِي بِقَوْلٍ قِيلَ قَبْلَهُ، وَسَأَلْتُكَ هَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ فَذَكَرْتَ أَنْ لاَ، قُلْتُ فَلَوْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ رَجُلٌ يَطْلُبُ مُلْكَ أَبِيهِ، وَسَأَلْتُكَ هَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ فَذَكَرْتَ أَنْ لاَ، فَقَدْ أَعْرِفُ أَنَّهُ لَمْ يَكُنْ لِيَذَرَ الْكَذِبَ عَلَى النَّاسِ وَيَكْذِبَ عَلَى اللَّهِ، وَسَأَلْتُكَ أَشْرَافُ النَّاسِ اتَّبَعُوهُ أَمْ ضُعَفَاؤُهُمْ فَذَكَرْتَ أَنَّ ضُعَفَاءَهُمُ اتَّبَعُوهُ، وَهُمْ أَتْبَاعُ الرُّسُلِ، وَسَأَلْتُكَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ فَذَكَرْتَ أَنَّهُمْ يَزِيدُونَ، وَكَذَلِكَ أَمْرُ الإِيمَانِ حَتَّى يَتِمَّ، وَسَأَلْتُكَ أَيَرْتَدُّ أَحَدٌ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ فَذَكَرْتَ أَنْ لاَ، فَكَذَلِكَ الإِيمَانُ حِينَ تُخَالِطُ بَشَاشَتُهُ الْقُلُوبَ، وَسَأَلْتُكَ هَلْ يَغْدِرُ فَذَكَرْتَ أَنْ لاَ، وَكَذَلِكَ الرُّسُلُ لاَ تَغْدِرُ، وَسَأَلْتُكَ بِمَا يَأْمُرُكُمْ، فَذَكَرْتَ أَنَّهُ يَأْمُرُكُمْ أَنْ تَعْبُدُوا اللَّهَ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَيَنْهَاكُمْ عَنْ عِبَادَةِ الأَوْثَانِ، وَيَأْمُرُكُمْ بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ‏.‏ فَإِنْ كَانَ مَا تَقُولُ حَقًّا فَسَيَمْلِكُ مَوْضِعَ قَدَمَىَّ هَاتَيْنِ، وَقَدْ كُنْتُ أَعْلَمُ أَنَّهُ خَارِجٌ، لَمْ أَكُنْ أَظُنُّ أَنَّهُ مِنْكُمْ، فَلَوْ أَنِّي أَعْلَمُ أَنِّي أَخْلُصُ إِلَيْهِ لَتَجَشَّمْتُ لِقَاءَهُ، وَلَوْ كُنْتُ عِنْدَهُ لَغَسَلْتُ عَنْ قَدَمِهِ‏.‏ ثُمَّ دَعَا بِكِتَابِ رَسُولِ اللَّهِ صلى الله عليه وسلم الَّذِي بَعَثَ بِهِ دِحْيَةُ إِلَى عَظِيمِ بُصْرَى، فَدَفَعَهُ إِلَى هِرَقْلَ فَقَرَأَهُ فَإِذَا فِيهِ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ‏.‏ مِنْ مُحَمَّدٍ عَبْدِ اللَّهِ وَرَسُولِهِ إِلَى هِرَقْلَ عَظِيمِ الرُّومِ‏.‏ سَلاَمٌ عَلَى مَنِ اتَّبَعَ الْهُدَى، أَمَّا بَعْدُ فَإِنِّي أَدْعُوكَ بِدِعَايَةِ الإِسْلاَمِ، أَسْلِمْ تَسْلَمْ، يُؤْتِكَ اللَّهُ أَجْرَكَ مَرَّتَيْنِ، فَإِنْ تَوَلَّيْتَ فَإِنَّ عَلَيْكَ إِثْمَ الأَرِيسِيِّينَ وَ‏{‏يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَى كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَنْ لاَ نَعْبُدَ إِلاَّ اللَّهَ وَلاَ نُشْرِكَ بِهِ شَيْئًا وَلاَ يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِنْ دُونِ اللَّهِ فَإِنْ تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ‏}‏ قَالَ أَبُو سُفْيَانَ فَلَمَّا قَالَ مَا قَالَ، وَفَرَغَ مِنْ قِرَاءَةِ الْكِتَابِ كَثُرَ عِنْدَهُ الصَّخَبُ، وَارْتَفَعَتِ الأَصْوَاتُ وَأُخْرِجْنَا، فَقُلْتُ لأَصْحَابِي حِينَ أُخْرِجْنَا لَقَدْ أَمِرَ أَمْرُ ابْنِ أَبِي كَبْشَةَ، إِنَّهُ يَخَافُهُ مَلِكُ بَنِي الأَصْفَرِ‏.‏ فَمَا زِلْتُ مُوقِنًا أَنَّهُ سَيَظْهَرُ حَتَّى أَدْخَلَ اللَّهُ عَلَىَّ الإِسْلاَمَ‏.‏ وَكَانَ ابْنُ النَّاظُورِ صَاحِبُ إِيلِيَاءَ وَهِرَقْلَ سُقُفًّا عَلَى نَصَارَى الشَّأْمِ، يُحَدِّثُ أَنَّ هِرَقْلَ حِينَ قَدِمَ إِيلِيَاءَ أَصْبَحَ يَوْمًا خَبِيثَ النَّفْسِ، فَقَالَ بَعْضُ بَطَارِقَتِهِ قَدِ اسْتَنْكَرْنَا هَيْئَتَكَ‏.‏ قَالَ ابْنُ النَّاظُورِ وَكَانَ هِرَقْلُ حَزَّاءً يَنْظُرُ فِي النُّجُومِ، فَقَالَ لَهُمْ حِينَ سَأَلُوهُ إِنِّي رَأَيْتُ اللَّيْلَةَ حِينَ نَظَرْتُ فِي النُّجُومِ مَلِكَ الْخِتَانِ قَدْ ظَهَرَ، فَمَنْ يَخْتَتِنُ مِنْ هَذِهِ الأُمَّةِ قَالُوا لَيْسَ يَخْتَتِنُ إِلاَّ الْيَهُودُ فَلاَ يُهِمَّنَّكَ شَأْنُهُمْ وَاكْتُبْ إِلَى مَدَايِنِ مُلْكِكَ، فَيَقْتُلُوا مَنْ فِيهِمْ مِنَ الْيَهُودِ‏.‏ فَبَيْنَمَا هُمْ عَلَى أَمْرِهِمْ أُتِيَ هِرَقْلُ بِرَجُلٍ أَرْسَلَ بِهِ مَلِكُ غَسَّانَ، يُخْبِرُ عَنْ خَبَرِ رَسُولِ اللَّهِ صلى الله عليه وسلم فَلَمَّا اسْتَخْبَرَهُ هِرَقْلُ قَالَ اذْهَبُوا فَانْظُرُوا أَمُخْتَتِنٌ هُوَ أَمْ لاَ‏.‏ فَنَظَرُوا إِلَيْهِ، فَحَدَّثُوهُ أَنَّهُ مُخْتَتِنٌ، وَسَأَلَهُ عَنِ الْعَرَبِ فَقَالَ هُمْ يَخْتَتِنُونَ‏.‏ فَقَالَ هِرَقْلُ هَذَا مَلِكُ هَذِهِ الأُمَّةِ قَدْ ظَهَرَ‏.‏ ثُمَّ كَتَبَ هِرَقْلُ إِلَى صَاحِبٍ لَهُ بِرُومِيَةَ، وَكَانَ نَظِيرَهُ فِي الْعِلْمِ، وَسَارَ هِرَقْلُ إِلَى حِمْصَ، فَلَمْ يَرِمْ حِمْصَ حَتَّى أَتَاهُ كِتَابٌ مِنْ صَاحِبِهِ يُوَافِقُ رَأْىَ هِرَقْلَ عَلَى خُرُوجِ النَّبِيِّ صلى الله عليه وسلم وَأَنَّهُ نَبِيٌّ، فَأَذِنَ هِرَقْلُ لِعُظَمَاءِ الرُّومِ فِي دَسْكَرَةٍ لَهُ بِحِمْصَ ثُمَّ أَمَرَ بِأَبْوَابِهَا فَغُلِّقَتْ، ثُمَّ اطَّلَعَ فَقَالَ يَا مَعْشَرَ الرُّومِ، هَلْ لَكُمْ فِي الْفَلاَحِ وَالرُّشْدِ وَأَنْ يَثْبُتَ مُلْكُكُمْ فَتُبَايِعُوا هَذَا النَّبِيَّ، فَحَاصُوا حَيْصَةَ حُمُرِ الْوَحْشِ إِلَى الأَبْوَابِ، فَوَجَدُوهَا قَدْ غُلِّقَتْ، فَلَمَّا رَأَى هِرَقْلُ نَفْرَتَهُمْ، وَأَيِسَ مِنَ الإِيمَانِ قَالَ رُدُّوهُمْ عَلَىَّ‏.‏ وَقَالَ إِنِّي قُلْتُ مَقَالَتِي آنِفًا أَخْتَبِرُ بِهَا شِدَّتَكُمْ عَلَى دِينِكُمْ، فَقَدْ رَأَيْتُ‏.‏ فَسَجَدُوا لَهُ وَرَضُوا عَنْهُ، فَكَانَ ذَلِكَ آخِرَ شَأْنِ هِرَقْلَ‏.‏ رَوَاهُ صَالِحُ بْنُ كَيْسَانَ وَيُونُسُ وَمَعْمَرٌ عَنِ الزُّهْرِيِّ‏.‏",
    "english": "Narrated 'Abdullah bin 'Abbas: Abu Sufyan bin Harb informed me that Heraclius had sent a messenger to him while he had been accompanying a caravan from Quraish. They were merchants doing business in Sham (Syria, Palestine, Lebanon and Jordan), at the time when Allah's Messenger (ﷺ) had truce with Abu Sufyan and Quraish infidels. So Abu Sufyan and his companions went to Heraclius at Ilya (Jerusalem). Heraclius called them in the court and he had all the senior Roman dignitaries around him. He called for his translator who, translating Heraclius's question said to them, \"Who amongst you is closely related to that man who claims to be a Prophet?\" Abu Sufyan replied, \"I am the nearest relative to him (amongst the group).\" Heraclius said, \"Bring him (Abu Sufyan) close to me and make his companions stand behind him.\" Abu Sufyan added, Heraclius told his translator to tell my companions that he wanted to put some questions to me regarding that man (The Prophet) and that if I told a lie they (my companions) should contradict me.\" Abu Sufyan added, \"By Allah! Had I not been afraid of my companions labeling me a liar, I would not have spoken the truth about the Prophet. The first question he asked me about him was: 'What is his family status amongst you?' I replied, 'He belongs to a good (noble) family amongst us.' Heraclius further asked, 'Has anybody amongst you ever claimed the same (i.e. to be a Prophet) before him?' I replied, 'No.' He said, 'Was anybody amongst his ancestors a king?' I replied, 'No.' Heraclius asked, 'Do the nobles or the poor follow him?' I replied, 'It is the poor who follow him.' He said, 'Are his followers increasing decreasing (day by day)?' I replied, 'They are increasing.' He then asked, 'Does anybody amongst those who embrace his religion become displeased and renounce the religion afterwards?' I replied, 'No.' Heraclius said, 'Have you ever accused him of telling lies before his claim (to be a Prophet)?' I replied, 'No. ' Heraclius said, 'Does he break his promises?' I replied, 'No. We are at truce with him but we do not know what he will do in it.' I could not find opportunity to say anything against him except that. Heraclius asked, 'Have you ever had a war with him?' I replied, 'Yes.' Then he said, 'What was the outcome of the battles?' I replied, 'Sometimes he was victorious and sometimes we.' Heraclius said, 'What does he order you to do?' I said, 'He tells us to worship Allah and Allah alone and not to worship anything along with Him, and to renounce all that our ancestors had said. He orders us to pray, to speak the truth, to be chaste and to keep good relations with our Kith and kin.' Heraclius asked the translator to convey to me the following, I asked you about his family and your reply was that he belonged to a very noble family. In fact all the Apostles come from noble families amongst their respective peoples. I questioned you whether anybody else amongst you claimed such a thing, your reply was in the negative. If the answer had been in the affirmative, I would have thought that this man was following the previous man's statement. Then I asked you whether anyone of his ancestors was a king. Your reply was in the negative, and if it had been in the affirmative, I would have thought that this man wanted to take back his ancestral kingdom. I further asked whether he was ever accused of telling lies before he said what he said, and your reply was in the negative. So I wondered how a person who does not tell a lie about others could ever tell a lie about Allah. I, then asked you whether the rich people followed him or the poor. You replied that it was the poor who followed him. And in fact all the Apostle have been followed by this very class of people. Then I asked you whether his followers were increasing or decreasing. You replied that they were increasing, and in fact this is the way of true faith, till it is complete in all respects. I further asked you whether there was anybody, who, after embracing his religion, became displeased and discarded his religion. Your reply was in the negative, and in fact this is (the sign of) true faith, when its delight enters the hearts and mixes with them completely. I asked you whether he had ever betrayed. You replied in the negative and likewise the Apostles never betray. Then I asked you what he ordered you to do. You replied that he ordered you to worship Allah and Allah alone and not to worship any thing along with Him and forbade you to worship idols and ordered you to pray, to speak the truth and to be chaste. If what you have said is true, he will very soon occupy this place underneath my feet and I knew it (from the scriptures) that he was going to appear but I did not know that he would be from you, and if I could reach him definitely, I would go immediately to meet him and if I were with him, I would certainly wash his feet.' Heraclius then asked for the letter addressed by Allah's Apostle which was delivered by Dihya to the Governor of Busra, who forwarded it to Heraclius to read. The contents of the letter were as follows: \"In the name of Allah the Beneficent, the Merciful (This letter is) from Muhammad the slave of Allah and His Apostle to Heraclius the ruler of Byzantine. Peace be upon him, who follows the right path. Furthermore I invite you to Islam, and if you become a Muslim you will be safe, and Allah will double your reward, and if you reject this invitation of Islam you will be committing a sin of Arisiyin (tillers, farmers i.e. your people). And (Allah's Statement:) 'O people of the scripture! Come to a word common to you and us that we worship none but Allah and that we associate nothing in worship with Him, and that none of us shall take others as Lords beside Allah. Then, if they turn away, say: Bear witness that we are Muslims (those who have surrendered to Allah).' (3:64). Abu Sufyan then added, \"When Heraclius had finished his speech and had read the letter, there was a great hue and cry in the Royal Court. So we were turned out of the court. I told my companions that the question of Ibn-Abi-Kabsha) (the Prophet Muhammad (ﷺ)) has become so prominent that even the King of Bani Al-Asfar (Byzantine) is afraid of him. Then I started to become sure that he (the Prophet) would be the conqueror in the near future till I embraced Islam (i.e. Allah guided me to it).\" The sub narrator adds, \"Ibn An-Natur was the Governor of Ilya' (Jerusalem) and Heraclius was the head of the Christians of Sham. Ibn An-Natur narrates that once while Heraclius was visiting ilya' (Jerusalem), he got up in the morning with a sad mood. Some of his priests asked him why he was in that mood? Heraclius was a foreteller and an astrologer. He replied, 'At night when I looked at the stars, I saw that the leader of those who practice circumcision had appeared (become the conqueror). Who are they who practice circumcision?' The people replied, 'Except the Jews nobody practices circumcision, so you should not be afraid of them (Jews). 'Just Issue orders to kill every Jew present in the country.' While they were discussing it, a messenger sent by the king of Ghassan to convey the news of Allah's Messenger (ﷺ) to Heraclius was brought in. Having heard the news, he (Heraclius) ordered the people to go and see whether the messenger of Ghassan was circumcised. The people, after seeing him, told Heraclius that he was circumcised. Heraclius then asked him about the Arabs. The messenger replied, 'Arabs also practice circumcision.' (After hearing that) Heraclius remarked that sovereignty of the 'Arabs had appeared. Heraclius then wrote a letter to his friend in Rome who was as good as Heraclius in knowledge. Heraclius then left for Homs. (a town in Syrian and stayed there till he received the reply of his letter from his friend who agreed with him in his opinion about the emergence of the Prophet (ﷺ) and the fact that he was a Prophet. On that Heraclius invited all the heads of the Byzantines to assemble in his palace at Homs. When they assembled, he ordered that all the doors of his palace be closed. Then he came out and said, 'O Byzantines! If success is your desire and if you seek right guidance and want your empire to remain then give a pledge of allegiance to this Prophet (i.e. embrace Islam).' (On hearing the views of Heraclius) the people ran towards the gates of the palace like onagers but found the doors closed. Heraclius realized their hatred towards Islam and when he lost the hope of their embracing Islam, he ordered that they should be brought back in audience. (When they returned) he said, 'What already said was just to test the strength of your conviction and I have seen it.' The people prostrated before him and became pleased with him, and this was the end of Heraclius's story (in connection with his faith)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-8",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 8,
    "arabic": "حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُوسَى، قَالَ أَخْبَرَنَا حَنْظَلَةُ بْنُ أَبِي سُفْيَانَ، عَنْ عِكْرِمَةَ بْنِ خَالِدٍ، عَنِ ابْنِ عُمَرَ ـ رضى الله عنهما ـ قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاَةِ، وَإِيتَاءِ الزَّكَاةِ، وَالْحَجِّ، وَصَوْمِ رَمَضَانَ ‏\"‏‏.‏",
    "english": "Narrated Ibn 'Umar: Allah's Messenger (ﷺ) said: Islam is based on (the following) five (principles): 1. To testify that none has the right to be worshipped but Allah and Muhammad is Allah's Messenger (ﷺ). 2. To offer the (compulsory congregational) prayers dutifully and perfectly. 3. To pay Zakat (i.e. obligatory charity) . 4. To perform Hajj. (i.e. Pilgrimage to Mecca) 5. To observe fast during the month of Ramadan",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-9",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 9,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ، قَالَ حَدَّثَنَا أَبُو عَامِرٍ الْعَقَدِيُّ، قَالَ حَدَّثَنَا سُلَيْمَانُ بْنُ بِلاَلٍ، عَنْ عَبْدِ اللَّهِ بْنِ دِينَارٍ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ ‏\"‏‏.‏",
    "english": "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Faith (Belief) consists of more than sixty branches (i.e. parts). And Haya (This term \"Haya\" covers a large number of concepts which are to be taken together; amongst them are self respect, modesty, bashfulness, and scruple, etc.) is a part of faith",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-10",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 10,
    "arabic": "حَدَّثَنَا آدَمُ بْنُ أَبِي إِيَاسٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ عَبْدِ اللَّهِ بْنِ أَبِي السَّفَرِ، وَإِسْمَاعِيلَ، عَنِ الشَّعْبِيِّ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ ‏\"‏.‏ قَالَ أَبُو عَبْدِ اللَّهِ وَقَالَ أَبُو مُعَاوِيَةَ حَدَّثَنَا دَاوُدُ عَنْ عَامِرٍ قَالَ سَمِعْتُ عَبْدَ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏ وَقَالَ عَبْدُ الأَعْلَى عَنْ دَاوُدَ عَنْ عَامِرٍ عَنْ عَبْدِ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏",
    "english": "Narrated 'Abdullah bin 'Amr: The Prophet (ﷺ) said, \"A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden",
    "grade": "Sahih"
  },
  {
    "id": "muslim-3",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 3,
    "arabic": "وَحَدَّثَنِي زُهَيْرُ بْنُ حَرْبٍ، حَدَّثَنَا إِسْمَاعِيلُ، - يَعْنِي ابْنَ عُلَيَّةَ - عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، أَنَّهُ قَالَ إِنَّهُ لَيَمْنَعُنِي أَنْ أُحَدِّثَكُمْ حَدِيثًا كَثِيرًا أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ مَنْ تَعَمَّدَ عَلَىَّ كَذِبًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ ‏\"‏ ‏.‏",
    "english": "Zuhayr bin Harb narrated to me, Ismā’īl, rather, Ibn Ulayyah narrated to us, on authority of Abd il-Azīz ibn Suhayb, on authority of Anas bin Mālik, that he said:‘Indeed what prevents me from relating to you a great number of Ḥadīth is that the Messenger of Allah, peace and blessings of Allah upon him, said: ‘Whoever intends to lie upon me, then let him take his seat in the Fire.’",
    "grade": "Sahih"
  },
  {
    "id": "muslim-4",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 4,
    "arabic": "وَحَدَّثَنَا مُحَمَّدُ بْنُ عُبَيْدٍ الْغُبَرِيُّ، حَدَّثَنَا أَبُو عَوَانَةَ، عَنْ أَبِي حَصِينٍ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ مَنْ كَذَبَ عَلَىَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ ‏\"‏ ‏.‏",
    "english": "Muhammad bin Ubayd il-Ghubarī narrated to us, Abū Awānah narrated to us, on authority of Abī Hasīn, on authority of Abī Sālih, on authority of Abū Hurayrah, he said, the Messenger of Allah, peace and blessings of Allah upon him, said:‘Whoever lies upon me intentionally, then let him take his seat in the Fire’",
    "grade": "Sahih"
  },
  {
    "id": "muslim-15",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 15,
    "arabic": "وَحَدَّثَنِي مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ، وَزُهَيْرُ بْنُ حَرْبٍ، قَالاَ حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يَزِيدَ، قَالَ حَدَّثَنِي سَعِيدُ بْنُ أَبِي أَيُّوبَ، قَالَ حَدَّثَنِي أَبُو هَانِئٍ، عَنْ أَبِي عُثْمَانَ، مُسْلِمِ بْنِ يَسَارٍ عَنْ أَبِي هُرَيْرَةَ، عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم أَنَّهُ قَالَ ‏ \"‏ سَيَكُونُ فِي آخِرِ أُمَّتِي أُنَاسٌ يُحَدِّثُونَكُمْ مَا لَمْ تَسْمَعُوا أَنْتُمْ وَلاَ آبَاؤُكُمْ فَإِيَّاكُمْ وَإِيَّاهُمْ ‏\"‏ ‏.‏,وَحَدَّثَنِي حَرْمَلَةُ بْنُ يَحْيَى بْنِ عَبْدِ اللَّهِ بْنِ حَرْمَلَةَ بْنِ عِمْرَانَ التُّجِيبِيُّ، قَالَ حَدَّثَنَا ابْنُ وَهْبٍ، قَالَ حَدَّثَنِي أَبُو شُرَيْحٍ، أَنَّهُ سَمِعَ شَرَاحِيلَ بْنَ يَزِيدَ، يَقُولُ أَخْبَرَنِي مُسْلِمُ بْنُ يَسَارٍ، أَنَّهُ سَمِعَ أَبَا هُرَيْرَةَ، يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ يَكُونُ فِي آخِرِ الزَّمَانِ دَجَّالُونَ كَذَّابُونَ يَأْتُونَكُمْ مِنَ الأَحَادِيثِ بِمَا لَمْ تَسْمَعُوا أَنْتُمْ وَلاَ آبَاؤُكُمْ فَإِيَّاكُمْ وَإِيَّاهُمْ لاَ يُضِلُّونَكُمْ وَلاَ يَفْتِنُونَكُمْ ‏\"‏ ‏.‏",
    "english": "Muhammad bin Abd Allah bin Numayr and Zuhayr bin Harb narrated to me, they said Abd Allah bin Yazīd narrated to us, he said Sa’īd bin Abī Ayyūb narrated to me, he said Abū Hāni’ narrated to me, on authority of Uthmān Muslim bin Yasār, on authority of Abī Hurayrah, on authority of the Messenger of Allah, peace and blessings of Allah upon him, he said:‘There will be in the last of my nation a people narrating to you what you nor your fathers heard, so beware of them’. ,Harmalah bin Yahyā bin Abd Allah bin Harmalah bin Imrān at-Tujībī narrated to me, he said Ibn Wahb narrated to us, he said Abū Shurayh narrated to me that he heard Sharāhīl bin Yazīd saying ‘Muslim bin Yasār informed me that he heard Abā Hurayrah saying, the Messenger of Allah, peace and blessings of Allah upon him, said:‘There will be in the end of time charlatan liars coming to you with narrations that you nor your fathers heard, so beware of them lest they misguide you and cause you tribulations’.’",
    "grade": "Sahih"
  },
  {
    "id": "muslim-93",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 93,
    "arabic": "حَدَّثَنِي أَبُو خَيْثَمَةَ، زُهَيْرُ بْنُ حَرْبٍ حَدَّثَنَا وَكِيعٌ، عَنْ كَهْمَسٍ، عَنْ عَبْدِ اللَّهِ بْنِ بُرَيْدَةَ، عَنْ يَحْيَى بْنِ يَعْمَرَ، ح وَحَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُعَاذٍ الْعَنْبَرِيُّ، - وَهَذَا حَدِيثُهُ - حَدَّثَنَا أَبِي، حَدَّثَنَا كَهْمَسٌ، عَنِ ابْنِ بُرَيْدَةَ، عَنْ يَحْيَى بْنِ يَعْمَرَ، قَالَ كَانَ أَوَّلَ مَنْ قَالَ فِي الْقَدَرِ بِالْبَصْرَةِ مَعْبَدٌ الْجُهَنِيُّ فَانْطَلَقْتُ أَنَا وَحُمَيْدُ بْنُ عَبْدِ الرَّحْمَنِ الْحِمْيَرِيُّ حَاجَّيْنِ أَوْ مُعْتَمِرَيْنِ فَقُلْنَا لَوْ لَقِينَا أَحَدًا مِنْ أَصْحَابِ رَسُولِ اللَّهِ صلى الله عليه وسلم فَسَأَلْنَاهُ عَمَّا يَقُولُ هَؤُلاَءِ فِي الْقَدَرِ فَوُفِّقَ لَنَا عَبْدُ اللَّهِ بْنُ عُمَرَ بْنِ الْخَطَّابِ دَاخِلاً الْمَسْجِدَ فَاكْتَنَفْتُهُ أَنَا وَصَاحِبِي أَحَدُنَا عَنْ يَمِينِهِ وَالآخَرُ عَنْ شِمَالِهِ فَظَنَنْتُ أَنَّ صَاحِبِي سَيَكِلُ الْكَلاَمَ إِلَىَّ فَقُلْتُ أَبَا عَبْدِ الرَّحْمَنِ إِنَّهُ قَدْ ظَهَرَ قِبَلَنَا نَاسٌ يَقْرَءُونَ الْقُرْآنَ وَيَتَقَفَّرُونَ الْعِلْمَ - وَذَكَرَ مِنْ شَأْنِهِمْ - وَأَنَّهُمْ يَزْعُمُونَ أَنْ لاَ قَدَرَ وَأَنَّ الأَمْرَ أُنُفٌ ‏.‏ قَالَ فَإِذَا لَقِيتَ أُولَئِكَ فَأَخْبِرْهُمْ أَنِّي بَرِيءٌ مِنْهُمْ وَأَنَّهُمْ بُرَآءُ مِنِّي وَالَّذِي يَحْلِفُ بِهِ عَبْدُ اللَّهِ بْنُ عُمَرَ لَوْ أَنَّ لأَحَدِهِمْ مِثْلَ أُحُدٍ ذَهَبًا فَأَنْفَقَهُ مَا قَبِلَ اللَّهُ مِنْهُ حَتَّى يُؤْمِنَ بِالْقَدَرِ ثُمَّ قَالَ حَدَّثَنِي أَبِي عُمَرُ بْنُ الْخَطَّابِ قَالَ بَيْنَمَا نَحْنُ عِنْدَ رَسُولِ اللَّهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ شَدِيدُ سَوَادِ الشَّعَرِ لاَ يُرَى عَلَيْهِ أَثَرُ السَّفَرِ وَلاَ يَعْرِفُهُ مِنَّا أَحَدٌ حَتَّى جَلَسَ إِلَى النَّبِيِّ صلى الله عليه وسلم فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ وَقَالَ يَا مُحَمَّدُ أَخْبِرْنِي عَنِ الإِسْلاَمِ ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَتُقِيمَ الصَّلاَةَ وَتُؤْتِيَ الزَّكَاةَ وَتَصُومَ رَمَضَانَ وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيلاً ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ ‏.‏ قَالَ فَأَخْبِرْنِي عَنِ الإِيمَانِ ‏.‏ قَالَ ‏\"‏ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الآخِرِ وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ فَأَخْبِرْنِي عَنِ الإِحْسَانِ ‏.‏ قَالَ ‏\"‏ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ ‏\"‏ ‏.‏ قَالَ فَأَخْبِرْنِي عَنِ السَّاعَةِ ‏.‏ قَالَ ‏\"‏ مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ ‏\"‏ ‏.‏ قَالَ فَأَخْبِرْنِي عَنْ أَمَارَتِهَا ‏.‏ قَالَ ‏\"‏ أَنْ تَلِدَ الأَمَةُ رَبَّتَهَا وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ ‏\"‏ ‏.‏ قَالَ ثُمَّ انْطَلَقَ فَلَبِثْتُ مَلِيًّا ثُمَّ قَالَ لِي ‏\"‏ يَا عُمَرُ أَتَدْرِي مَنِ السَّائِلُ ‏\"‏ ‏.‏ قُلْتُ اللَّهُ وَرَسُولُهُ أَعْلَمُ ‏.‏ قَالَ ‏\"‏ فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Yahya b. Ya'mur that the first man who discussed qadr (Divine Decree) in Basra was Ma'bad al-Juhani. I along with Humaid b. 'Abdur-Rahman Himyari set out for pilgrimage or for 'Umrah and said:Should it so happen that we come into contact with one of the Companions of the Messenger of Allah (peace be upon him) we shall ask him about what is talked about taqdir (Divine Decree). Accidentally we came across Abdullah ibn Umar ibn al-Khattab, while he was entering the mosque. My companion and I surrounded him. One of us (stood) on his right and the other stood on his left. I expected that my companion would authorize me to speak. I therefore said: Abu Abdur Rahman! There have appeared some people in our land who recite the Qur'an and pursue knowledge. And then after talking about their affairs, added: They (such people) claim that there is no such thing as Divine Decree and events are not predestined. He (Abdullah ibn Umar) said: When you happen to meet such people tell them that I have nothing to do with them and they have nothing to do with me. And verily they are in no way responsible for my (belief). Abdullah ibn Umar swore by Him (the Lord) (and said): If any one of them (who does not believe in the Divine Decree) had with him gold equal to the bulk of (the mountain) Uhud and spent it (in the way of Allah), Allah would not accept it unless he affirmed his faith in Divine Decree. He further said: My father, Umar ibn al-Khattab, told me: One day we were sitting in the company of Allah's Apostle (peace be upon him) when there appeared before us a man dressed in pure white clothes, his hair extraordinarily black. There were no signs of travel on him. None amongst us recognized him. At last he sat with the Apostle (peace be upon him) He knelt before him placed his palms on his thighs and said: Muhammad, inform me about al-Islam. The Messenger of Allah (peace be upon him) said: Al-Islam implies that you testify that there is no god but Allah and that Muhammad is the messenger of Allah, and you establish prayer, pay Zakat, observe the fast of Ramadan, and perform pilgrimage to the (House) if you are solvent enough (to bear the expense of) the journey. He (the inquirer) said: You have told the truth. He (Umar ibn al-Khattab) said: It amazed us that he would put the question and then he would himself verify the truth. He (the inquirer) said: Inform me about Iman (faith). He (the Holy Prophet) replied: That you affirm your faith in Allah, in His angels, in His Books, in His Apostles, in the Day of Judgment, and you affirm your faith in the Divine Decree about good and evil. He (the inquirer) said: You have told the truth. He (the inquirer) again said: Inform me about al-Ihsan (performance of good deeds). He (the Holy Prophet) said: That you worship Allah as if you are seeing Him, for though you don't see Him, He, verily, sees you. He (the enquirer) again said: Inform me about the hour (of the Doom). He (the Holy Prophet) remarked: One who is asked knows no more than the one who is inquiring (about it). He (the inquirer) said: Tell me some of its indications. He (the Holy Prophet) said: That the slave-girl will give birth to her mistress and master, that you will find barefooted, destitute goat-herds vying with one another in the construction of magnificent buildings. He (the narrator, Umar ibn al-Khattab) said: Then he (the inquirer) went on his way but I stayed with him (the Holy Prophet) for a long while. He then, said to me: Umar, do you know who this inquirer was? I replied: Allah and His Apostle knows best. He (the Holy Prophet) remarked: He was Gabriel (the angel). He came to you in order to instruct you in matters of religion",
    "grade": "Sahih"
  },
  {
    "id": "muslim-94",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 94,
    "arabic": "حَدَّثَنِي مُحَمَّدُ بْنُ عُبَيْدٍ الْغُبَرِيُّ، وَأَبُو كَامِلٍ الْجَحْدَرِيُّ وَأَحْمَدُ بْنُ عَبْدَةَ قَالُوا حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، عَنْ مَطَرٍ الْوَرَّاقِ، عَنْ عَبْدِ اللَّهِ بْنِ بُرَيْدَةَ، عَنْ يَحْيَى بْنِ يَعْمَرَ، قَالَ لَمَّا تَكَلَّمَ مَعْبَدٌ بِمَا تَكَلَّمَ بِهِ فِي شَأْنِ الْقَدَرِ أَنْكَرْنَا ذَلِكَ ‏.‏ قَالَ فَحَجَجْتُ أَنَا وَحُمَيْدُ بْنُ عَبْدِ الرَّحْمَنِ الْحِمْيَرِيُّ حِجَّةً ‏.‏ وَسَاقُوا الْحَدِيثَ بِمَعْنَى حَدِيثِ كَهْمَسٍ وَإِسْنَادِهِ ‏.‏ وَفِيهِ بَعْضُ زِيَادَةٍ وَنُقْصَانُ أَحْرُفٍ ‏.‏",
    "english": "It is narrated on the authority of Yahya b. Ya'mur that when Ma'bad discussed the problem pertaining to Divine Decree, we refuted that. He (the narrator) said:I and Humaid b. Abdur-Rahman Himyari argued. And they carried on the conversation about the purport of the hadith related by Kahmas and its chain of transmission too, and there is some variation of words",
    "grade": "Sahih"
  },
  {
    "id": "muslim-95",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 95,
    "arabic": "وَحَدَّثَنِي مُحَمَّدُ بْنُ حَاتِمٍ، حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الْقَطَّانُ، حَدَّثَنَا عُثْمَانُ بْنُ غِيَاثٍ، حَدَّثَنَا عَبْدُ اللَّهِ بْنُ بُرَيْدَةَ، عَنْ يَحْيَى بْنِ يَعْمَرَ، وَحُمَيْدِ بْنِ عَبْدِ الرَّحْمَنِ، قَالاَ لَقِينَا عَبْدَ اللَّهِ بْنَ عُمَرَ فَذَكَرْنَا الْقَدَرَ وَمَا يَقُولُونَ فِيهِ ‏.‏ فَاقْتَصَّ الْحَدِيثَ كَنَحْوِ حَدِيثِهِمْ عَنْ عُمَرَ - رضى الله عنه - عَنِ النَّبِيِّ صلى الله عليه وسلم وَفِيهِ شَىْءٌ مِنْ زِيَادَةٍ وَقَدْ نَقَصَ مِنْهُ شَيْئًا ‏.‏",
    "english": "It is narrated on the authority of Yahya b. Ya'mur and Humaid b. 'Abdur-Rahman that they said:We met Abdullah b. 'Umar and we discussed about the Divine Decree, and what they talked about it and he narrated the hadith that has been transmitted by 'Umar (may Allah be pleased with him) from the Apostle (ﷺ). There is a slight variation in that",
    "grade": "Sahih"
  },
  {
    "id": "muslim-96",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 96,
    "arabic": "وَحَدَّثَنِي حَجَّاجُ بْنُ الشَّاعِرِ، حَدَّثَنَا يُونُسُ بْنُ مُحَمَّدٍ، حَدَّثَنَا الْمُعْتَمِرُ، عَنْ أَبِيهِ، عَنْ يَحْيَى بْنِ يَعْمَرَ، عَنِ ابْنِ عُمَرَ، عَنْ عُمَرَ، عَنِ النَّبِيِّ صلى الله عليه وسلم بِنَحْوِ حَدِيثِهِمْ ‏.‏",
    "english": "The same hadith is mentioned through a different chain",
    "grade": "Sahih"
  },
  {
    "id": "muslim-97",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 97,
    "arabic": "وَحَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، وَزُهَيْرُ بْنُ حَرْبٍ، جَمِيعًا عَنِ ابْنِ عُلَيَّةَ، قَالَ زُهَيْرٌ حَدَّثَنَا إِسْمَاعِيلُ بْنُ إِبْرَاهِيمَ، عَنْ أَبِي حَيَّانَ، عَنْ أَبِي زُرْعَةَ بْنِ عَمْرِو بْنِ جَرِيرٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يَوْمًا بَارِزًا لِلنَّاسِ فَأَتَاهُ رَجُلٌ فَقَالَ يَا رَسُولَ اللَّهِ مَا الإِيمَانُ قَالَ ‏\"‏ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكِتَابِهِ وَلِقَائِهِ وَرُسُلِهِ وَتُؤْمِنَ بِالْبَعْثِ الآخِرِ ‏\"‏ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِسْلاَمُ قَالَ ‏\"‏ الإِسْلاَمُ أَنْ تَعْبُدَ اللَّهَ وَلاَ تُشْرِكَ بِهِ شَيْئًا وَتُقِيمَ الصَّلاَةَ الْمَكْتُوبَةَ وَتُؤَدِّيَ الزَّكَاةَ الْمَفْرُوضَةَ وَتَصُومَ رَمَضَانَ ‏\"‏ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِحْسَانُ قَالَ ‏\"‏ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنَّكَ إِنْ لاَ تَرَاهُ فَإِنَّهُ يَرَاكَ ‏\"‏ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَتَى السَّاعَةُ قَالَ ‏\"‏ مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ وَلَكِنْ سَأُحَدِّثُكَ عَنْ أَشْرَاطِهَا إِذَا وَلَدَتِ الأَمَةُ رَبَّهَا فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا كَانَتِ الْعُرَاةُ الْحُفَاةُ رُءُوسَ النَّاسِ فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا تَطَاوَلَ رِعَاءُ الْبَهْمِ فِي الْبُنْيَانِ فَذَاكَ مِنْ أَشْرَاطِهَا فِي خَمْسٍ لاَ يَعْلَمُهُنَّ إِلاَّ اللَّهُ ‏\"‏ ‏.‏ ثُمَّ تَلاَ صلى الله عليه وسلم ‏{‏ إِنَّ اللَّهَ عِنْدَهُ عِلْمُ السَّاعَةِ وَيُنَزِّلُ الْغَيْثَ وَيَعْلَمُ مَا فِي الأَرْحَامِ وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا وَمَا تَدْرِي نَفْسٌ بِأَىِّ أَرْضٍ تَمُوتُ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ‏}‏ ‏\"‏ ‏.‏ قَالَ ثُمَّ أَدْبَرَ الرَّجُلُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ رُدُّوا عَلَىَّ الرَّجُلَ ‏\"‏ ‏.‏ فَأَخَذُوا لِيَرُدُّوهُ فَلَمْ يَرَوْا شَيْئًا ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ هَذَا جِبْرِيلُ جَاءَ لِيُعَلِّمَ النَّاسَ دِينَهُمْ ‏\"‏ ‏.‏",
    "english": "Abu Huraira reported:One day the Messenger of Allah (ﷺ) appeared before the public so a man came to him and then said: Prophet of Allah, what is Iman? Upon this he (the Holy Prophet) replied: That you affirm your faith in Allah, His angels, His Books, His meeting, His Messengers and that you affirm your faith in the Resurrection hereafter. He said: Messenger of Allah, what is al-Islam? He replied: Al-Islam is that you worship Allah and do not associate anything with Him and you establish obligatory prayer and you pay the obligatory alms (Zakat) and you observe the fast of Ramadan. He said: Messenger of Allah, what is al-Ihsan? He replied: That you worship Allah as if you are seeing Him, and for if you fail to see Him. He said: Messenger of Allah, when is the Hour (of Doom)? He replied: The one who is asked about it is no better informed than the inquirer, however I will narrate some of its signs to you. When the slave-girl will give birth to her master, then that is from its signs. When the naked, barefooted would become the chiefs of the people, then that is from its signs. When the shepherds of the black (camels) would exult themselves in buildings, then that is from its signs. (The Hour is) Among one of the five which no one knows but Allah. Then he recited (the verse): \"Verily Allah! with Him alone is the knowledge of the Hour and He it is Who sends down the rain and knows that which is in the wombs. And no soul knows what it shall earn tomorrow, and a soul knows not in what land it shall die. Verily Allah is Knowing, Aware.\" He (Abu Huraira) said: Then the person turned back and went away. The Messenger of Allah (ﷺ) said: Bring that man back to me. They went to bring him back, but they saw nothing there. Upon this the Messenger of Allah remarked: he was Gabriel, who came to teach the people their religion",
    "grade": "Sahih"
  },
  {
    "id": "muslim-98",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 98,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ، حَدَّثَنَا مُحَمَّدُ بْنُ بِشْرٍ، حَدَّثَنَا أَبُو حَيَّانَ التَّيْمِيُّ، بِهَذَا الإِسْنَادِ مِثْلَهُ غَيْرَ أَنَّ فِي رِوَايَتِهِ ‏ \"‏ إِذَا وَلَدَتِ الأَمَةُ بَعْلَهَا ‏\"‏ يَعْنِي السَّرَارِيَّ ‏.‏",
    "english": "This hadith is narrated to us on the authority of Muhammad b. 'Abdullah b. Numair, on the authority of Muhammad b. Bishr, on the authority of Abd Hayyan al-Taymi with the exception that in this narration (instead of the words (Iza Waladat al'amah rabbaha), the words are (Iza Waladat al'amah Ba'laha), i, e, when slave-girl gives birth to her master",
    "grade": "Sahih"
  },
  {
    "id": "muslim-99",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 99,
    "arabic": "حَدَّثَنِي زُهَيْرُ بْنُ حَرْبٍ، حَدَّثَنَا جَرِيرٌ، عَنْ عُمَارَةَ، - وَهُوَ ابْنُ الْقَعْقَاعِ - عَنْ أَبِي زُرْعَةَ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ سَلُونِي ‏\"‏ فَهَابُوهُ أَنْ يَسْأَلُوهُ ‏.‏ فَجَاءَ رَجُلٌ فَجَلَسَ عِنْدَ رُكْبَتَيْهِ ‏.‏ فَقَالَ يَا رَسُولَ اللَّهِ مَا الإِسْلاَمُ قَالَ ‏\"‏ لاَ تُشْرِكُ بِاللَّهِ شَيْئًا وَتُقِيمُ الصَّلاَةَ وَتُؤْتِي الزَّكَاةَ وَتَصُومُ رَمَضَانَ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِيمَانُ قَالَ ‏\"‏ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكِتَابِهِ وَلِقَائِهِ وَرُسُلِهِ وَتُؤْمِنَ بِالْبَعْثِ وَتُؤْمِنَ بِالْقَدَرِ كُلِّهِ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِحْسَانُ قَالَ ‏\"‏ أَنْ تَخْشَى اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنَّكَ إِنْ لاَ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَتَى تَقُومُ السَّاعَةُ قَالَ ‏\"‏ مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ وَسَأُحَدِّثُكَ عَنْ أَشْرَاطِهَا إِذَا رَأَيْتَ الْمَرْأَةَ تَلِدُ رَبَّهَا فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا رَأَيْتَ الْحُفَاةَ الْعُرَاةَ الصُّمَّ الْبُكْمَ مُلُوكَ الأَرْضِ فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا رَأَيْتَ رِعَاءَ الْبَهْمِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ فَذَاكَ مِنْ أَشْرَاطِهَا فِي خَمْسٍ مِنَ الْغَيْبِ لاَ يَعْلَمُهُنَّ إِلاَّ اللَّهُ ‏\"‏ ‏.‏ ثُمَّ قَرَأَ ‏{‏ إِنَّ اللَّهَ عِنْدَهُ عِلْمُ السَّاعَةِ وَيُنَزِّلُ الْغَيْثَ وَيَعْلَمُ مَا فِي الأَرْحَامِ وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا وَمَا تَدْرِي نَفْسٌ بِأَىِّ أَرْضٍ تَمُوتُ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ‏}‏ قَالَ ثُمَّ قَامَ الرَّجُلُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ رُدُّوهُ عَلَىَّ ‏\"‏ فَالْتُمِسَ فَلَمْ يَجِدُوهُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ هَذَا جِبْرِيلُ أَرَادَ أَنْ تَعَلَّمُوا إِذْ لَمْ تَسْأَلُوا ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Abu Huraira that the Messenger of Allah (ﷺ) said:Ask me (about religious matters), but they (the Companions) were in awe of asking him. Then came a man, and sat near his knees and said: O Messenger of Allah, what is al-Islam? So he (the Holy Prophet) replied: [That] you do not associate anything with Allah, and establish the prayer, pay the alms (Zakat) and fast Ramadan. He said: You (have) told the truth. He said: Messenger of Allah, what is al-Iman (Faith)? He said: That you affirm your faith in Allah, His angels, His Books, His meeting, His Apostles, and that you believe in Resurrection and that you believe in Qadr (Divine Decree) in all its entirety. He (the inquirer) said: You have told the truth. He said: Messenger of Allah, what is al-Ihsan? Upon this he said: that you fear Allah as if you are seeing Him, and though you see Him not, verily He is seeing you. He (the inquirer) said: You (have) told the truth. He (the inquirer) said: When will the Hour (of Doom) occur? He said: The one who is being asked about it is no better informed than the inquirer and I will narrate some of its signs to you. When you see a [slave] woman giving birth to her master - then that is [one] of its signs. And when you see barefooted, naked, deaf and dumb (ignorant and foolish persons) as the rulers of the earth - then that is [one] of its signs. And when you see the shepherds of black (camels) exult in buildings - then that is [one] of its signs. The (Hour) is one of the five things of the unseen. No one knows them except Allah. Then (the Holy Prophet) recited (the folowing verse):\" Verily Allah! with Him alone is the knowledge of the Hour and He it is Who sends down the rain and knows that which is in the wombs. And no soul knows what it shall earn on the morrow and a soul knows not in what land it shall die. Verily Allah is Knowing, Aware.\" He (Abu Huraira) said: Then the person stood up (and made his way). Then the Messenger of Allah (ﷺ) said: Bring him back to me. He was searched for, but they could not find him. The Messenger of Allah (ﷺ) thereupon said: He was Gabriel and he wanted to teach you when you did not ask",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-1",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 1,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ بْنِ قَعْنَبٍ الْقَعْنَبِيُّ، حَدَّثَنَا عَبْدُ الْعَزِيزِ، - يَعْنِي ابْنَ مُحَمَّدٍ - عَنْ مُحَمَّدٍ، - يَعْنِي ابْنَ عَمْرٍو - عَنْ أَبِي سَلَمَةَ، عَنِ الْمُغِيرَةِ بْنِ شُعْبَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا ذَهَبَ الْمَذْهَبَ أَبْعَدَ ‏.‏",
    "english": "Narrated Mughirah ibn Shu'bah: When the Prophet (ﷺ) went (outside) to relieve himself, he went to a far-off place",
    "grade": "Hasan Sahih"
  },
  {
    "id": "abudawud-2",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 2,
    "arabic": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ، حَدَّثَنَا عِيسَى بْنُ يُونُسَ، أَخْبَرَنَا إِسْمَاعِيلُ بْنُ عَبْدِ الْمَلِكِ، عَنْ أَبِي الزُّبَيْرِ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا أَرَادَ الْبَرَازَ انْطَلَقَ حَتَّى لاَ يَرَاهُ أَحَدٌ ‏.‏",
    "english": "Narrated Jabir ibn Abdullah: When the Prophet (ﷺ) felt the need of relieving himself, he went far off where no one could see him",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-3",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، حَدَّثَنَا حَمَّادٌ، أَخْبَرَنَا أَبُو التَّيَّاحِ، حَدَّثَنِي شَيْخٌ، قَالَ لَمَّا قَدِمَ عَبْدُ اللَّهِ بْنُ عَبَّاسٍ الْبَصْرَةَ فَكَانَ يُحَدَّثُ عَنْ أَبِي مُوسَى، فَكَتَبَ عَبْدُ اللَّهِ إِلَى أَبِي مُوسَى يَسْأَلُهُ عَنْ أَشْيَاءَ، فَكَتَبَ إِلَيْهِ أَبُو مُوسَى إِنِّي كُنْتُ مَعَ رَسُولِ اللَّهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ فَأَرَادَ أَنْ يَبُولَ فَأَتَى دَمِثًا فِي أَصْلِ جِدَارٍ فَبَالَ ثُمَّ قَالَ صلى الله عليه وسلم ‏ \"‏ إِذَا أَرَادَ أَحَدُكُمْ أَنْ يَبُولَ فَلْيَرْتَدْ لِبَوْلِهِ مَوْضِعًا ‏\"‏ ‏.‏",
    "english": "Abu al-Tayyah reported on the authority of a shaykh (an old man):When Abdullah ibn Abbas came to Basrah, people narrated to him traditions from AbuMusa. Therefore Ibn Abbas wrote to him asking him about certain things. In reply AbuMusa wrote to him saying: One day I was in the company of the Messenger of Allah (ﷺ). He wanted to urinate. Then he came to a soft ground at the foot of a wall and urinated. He (the Prophet) then said: If any of you wants to urinate, he should look for a place (like this) for his urination",
    "grade": "Daif"
  },
  {
    "id": "abudawud-4",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 4,
    "arabic": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، وَعَبْدُ الْوَارِثِ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِذَا دَخَلَ الْخَلاَءَ - قَالَ عَنْ حَمَّادٍ قَالَ ‏\"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ ‏\"‏ ‏.‏ وَقَالَ عَنْ عَبْدِ الْوَارِثِ - قَالَ ‏\"‏ أَعُوذُ بِاللَّهِ مِنَ الْخُبُثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏ قَالَ أَبُو دَاوُد رَوَاهُ شُعْبَةُ عَنْ عَبْدِ الْعَزِيزِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ وَقَالَ مَرَّةً أَعُوذُ بِاللَّهِ و قَالَ وُهَيْبٌ فَلْيَتَعَوَّذْ بِاللَّهِ",
    "english": "Anas b. Malik reported:When the Apostle of Allaah (sal Allahu alayhi wa sallam) entered the toilet, he used to say (before entering): \"O Allaah, I seek refuge in Thee.\" This is according to the version of Hammad. 'Abd al-Warith has another version :\"I seek refuge in Allaah from male and female devils",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-5",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 5,
    "arabic": "حَدَّثَنَا الْحَسَنُ بْنُ عَمْرٍو، - يَعْنِي السَّدُوسِيَّ - حَدَّثَنَا وَكِيعٌ، عَنْ شُعْبَةَ، عَنْ عَبْدِ الْعَزِيزِ، - هُوَ ابْنُ صُهَيْبٍ - عَنْ أَنَسٍ، بِهَذَا الْحَدِيثِ قَالَ ‏\"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ ‏\"‏ ‏.‏ وَقَالَ شُعْبَةُ وَقَالَ مَرَّةً ‏\"‏ أَعُوذُ بِاللَّهِ ‏\"‏ ‏.‏",
    "english": "Another tradition on the authority of Anas has:\" O Allaah, I seek refuge in Thee.\" Shu'bah said: Anas sometimes reported the words: \"I take refuge in Allah",
    "grade": "Shadh"
  },
  {
    "id": "abudawud-6",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 6,
    "arabic": "حَدَّثَنَا عَمْرُو بْنُ مَرْزُوقٍ، أَخْبَرَنَا شُعْبَةُ، عَنْ قَتَادَةَ، عَنِ النَّضْرِ بْنِ أَنَسٍ، عَنْ زَيْدِ بْنِ أَرْقَمَ، عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ إِنَّ هَذِهِ الْحُشُوشَ مُحْتَضَرَةٌ فَإِذَا أَتَى أَحَدُكُمُ الْخَلاَءَ فَلْيَقُلْ أَعُوذُ بِاللَّهِ مِنَ الْخُبُثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏",
    "english": "Narrated Zayd ibn Arqam: The Messenger of Allah (ﷺ) said: These privies are frequented by the jinns and devils. So when anyone amongst you goes there, he should say: \"I seek refuge in Allah from male and female devils",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-7",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 7,
    "arabic": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ، حَدَّثَنَا أَبُو مُعَاوِيَةَ، عَنِ الأَعْمَشِ، عَنْ إِبْرَاهِيمَ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ يَزِيدَ، عَنْ سَلْمَانَ، قَالَ قِيلَ لَهُ لَقَدْ عَلَّمَكُمْ نَبِيُّكُمْ كُلَّ شَىْءٍ حَتَّى الْخِرَاءَةَ ‏.‏ قَالَ أَجَلْ لَقَدْ نَهَانَا صلى الله عليه وسلم أَنْ نَسْتَقْبِلَ الْقِبْلَةَ بِغَائِطٍ أَوْ بَوْلٍ وَأَنْ لاَ نَسْتَنْجِيَ بِالْيَمِينِ وَأَنْ لاَ يَسْتَنْجِيَ أَحَدُنَا بِأَقَلَّ مِنْ ثَلاَثَةِ أَحْجَارٍ أَوْ يَسْتَنْجِيَ بِرَجِيعٍ أَوْ عَظْمٍ ‏.‏",
    "english": "Narrated Salman al-Farsi: It was said to Salman: Your Prophet teaches you everything, even about excrement. He replied: Yes. He has forbidden us to face the qiblah at the time of easing or urinating, and cleansing with right hand, and cleansing with less than three stones, or cleansing with dung or bone",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-8",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 8,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ النُّفَيْلِيُّ، حَدَّثَنَا ابْنُ الْمُبَارَكِ، عَنْ مُحَمَّدِ بْنِ عَجْلاَنَ، عَنِ الْقَعْقَاعِ بْنِ حَكِيمٍ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ إِنَّمَا أَنَا لَكُمْ بِمَنْزِلَةِ الْوَالِدِ أُعَلِّمُكُمْ فَإِذَا أَتَى أَحَدُكُمُ الْغَائِطَ فَلاَ يَسْتَقْبِلِ الْقِبْلَةَ وَلاَ يَسْتَدْبِرْهَا وَلاَ يَسْتَطِبْ بِيَمِينِهِ ‏\"‏ ‏.‏ وَكَانَ يَأْمُرُ بِثَلاَثَةِ أَحْجَارٍ وَيَنْهَى عَنِ الرَّوْثِ وَالرِّمَّةِ ‏.‏",
    "english": "Narrated Abu Hurairah:The Apostle of Allaah ( sal Allaahu alayhi wa sallam ) as saying: I am like father to you. When any of you goes to privy, he should not face or turn his back towards the qiblah. He should not cleanse with his right hand. He (the Prophet, sal Allaahu alayhi wa sallam) also commanded the Muslims to use three stones and forbade them to use dung or decayed bone",
    "grade": "Hasan"
  },
  {
    "id": "abudawud-9",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 9,
    "arabic": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ، حَدَّثَنَا سُفْيَانُ، عَنِ الزُّهْرِيِّ، عَنْ عَطَاءِ بْنِ يَزِيدَ اللَّيْثِيِّ، عَنْ أَبِي أَيُّوبَ، رِوَايَةً قَالَ ‏ \"‏ إِذَا أَتَيْتُمُ الْغَائِطَ فَلاَ تَسْتَقْبِلُوا الْقِبْلَةَ بِغَائِطٍ وَلاَ بَوْلٍ وَلَكِنْ شَرِّقُوا أَوْ غَرِّبُوا ‏\"‏ ‏.‏ فَقَدِمْنَا الشَّامَ فَوَجَدْنَا مَرَاحِيضَ قَدْ بُنِيَتْ قِبَلَ الْقِبْلَةِ فَكُنَّا نَنْحَرِفُ عَنْهَا وَنَسْتَغْفِرُ اللَّهَ ‏.‏",
    "english": "Narrated Abu Ayyub :That he (the Holy Prophet, sal Allahu alayhi wa sallam) said:\"When you go to the privy, neither turn your face nor your back towards the qiblah at the time of excretion or urination, but turn towards the east or the west. (Abu Ayyub said): When we came to Syria, we found that the toilets already built there were facing the qiblah, We turned our faces away from them and begged pardon of Allaah",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-10",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 10,
    "arabic": "حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، حَدَّثَنَا وُهَيْبٌ، حَدَّثَنَا عَمْرُو بْنُ يَحْيَى، عَنْ أَبِي زَيْدٍ، عَنْ مَعْقِلِ بْنِ أَبِي مَعْقِلٍ الأَسَدِيِّ، قَالَ نَهَى رَسُولُ اللَّهِ صلى الله عليه وسلم أَنْ نَسْتَقْبِلَ الْقِبْلَتَيْنِ بِبَوْلٍ أَوْ غَائِطٍ ‏.‏ قَالَ أَبُو دَاوُدَ وَأَبُو زَيْدٍ هُوَ مَوْلَى بَنِي ثَعْلَبَةَ ‏.‏",
    "english": "Narrated Ma'qil ibn AbuMa'qil al-Asadi: The Messenger of Allah (ﷺ) has forbidden us to face the two qiblahs at the time of urination or excretion",
    "grade": "Daif"
  },
  {
    "id": "tirmidhi-1",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 1,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، حَدَّثَنَا أَبُو عَوَانَةَ، عَنْ سِمَاكِ بْنِ حَرْبٍ، ح وَحَدَّثَنَا هَنَّادٌ، حَدَّثَنَا وَكِيعٌ، عَنْ إِسْرَائِيلَ، عَنْ سِمَاكٍ، عَنْ مُصْعَبِ بْنِ سَعْدٍ، عَنِ ابْنِ عُمَرَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏\"‏ لاَ تُقْبَلُ صَلاَةٌ بِغَيْرِ طُهُورٍ وَلاَ صَدَقَةٌ مِنْ غُلُولٍ ‏\"‏ ‏.‏ قَالَ هَنَّادٌ فِي حَدِيثِهِ ‏\"‏ إِلاَّ بِطُهُورٍ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا الْحَدِيثُ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ وَأَحْسَنُ ‏.‏ وَفِي الْبَابِ عَنْ أَبِي الْمَلِيحِ عَنْ أَبِيهِ وَأَبِي هُرَيْرَةَ وَأَنَسٍ ‏.‏ وَأَبُو الْمَلِيحِ بْنُ أُسَامَةَ اسْمُهُ عَامِرٌ وَيُقَالُ زَيْدُ بْنُ أُسَامَةَ بْنِ عُمَيْرٍ الْهُذَلِيُّ ‏.‏",
    "english": "Ibn `Umar narrated that:the Prophet said: \"Salat will not be accepted without purification, nor Charity from Ghulul.\" Hannad said in his narration, \"except with purification\" [Abu `Eisa said: This Hadith is the most correct thing on this topic, and the best. There are also narrations on this topic from Abu Al-Malih, from his father; and Abu Hurairah and Anas. And Abu Al-Malih bin Usamah's name is `Amir, and they also say it was Zaid bin Usamah bin `Umair Al-Hudhali]",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-2",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 2,
    "arabic": "حَدَّثَنَا إِسْحَاقُ بْنُ مُوسَى الأَنْصَارِيُّ، حَدَّثَنَا مَعْنُ بْنُ عِيسَى الْقَزَّازُ، حَدَّثَنَا مَالِكُ بْنُ أَنَسٍ، ح وَحَدَّثَنَا قُتَيْبَةُ، عَنْ مَالِكٍ، عَنْ سُهَيْلِ بْنِ أَبِي صَالِحٍ، عَنْ أَبِيهِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَتْ مِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ أَوْ نَحْوِ هَذَا وَإِذَا غَسَلَ يَدَيْهِ خَرَجَتْ مِنْ يَدَيْهِ كُلُّ خَطِيئَةٍ بَطَشَتْهَا يَدَاهُ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ حَتَّى يَخْرُجَ نَقِيًّا مِنَ الذُّنُوبِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ وَهُوَ حَدِيثُ مَالِكٍ عَنْ سُهَيْلٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ ‏.‏ وَأَبُو صَالِحٍ وَالِدُ سُهَيْلٍ هُوَ أَبُو صَالِحٍ السَّمَّانُ وَاسْمُهُ ذَكْوَانُ ‏.‏ وَأَبُو هُرَيْرَةَ اخْتُلِفَ فِي اسْمِهِ فَقَالُوا عَبْدُ شَمْسٍ وَقَالُوا عَبْدُ اللَّهِ بْنُ عَمْرٍو وَهَكَذَا قَالَ مُحَمَّدُ بْنُ إِسْمَاعِيلَ وَهُوَ الأَصَحُّ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عُثْمَانَ بْنِ عَفَّانَ وَثَوْبَانَ وَالصُّنَابِحِيِّ وَعَمْرِو بْنِ عَبَسَةَ وَسَلْمَانَ وَعَبْدِ اللَّهِ بْنِ عَمْرٍو ‏.‏ وَالصُّنَابِحِيُّ الَّذِي رَوَى عَنْ أَبِي بَكْرٍ الصِّدِّيقِ لَيْسَ لَهُ سَمَاعٌ مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم وَاسْمُهُ عَبْدُ الرَّحْمَنِ بْنُ عُسَيْلَةَ وَيُكْنَى أَبَا عَبْدِ اللَّهِ رَحَلَ إِلَى النَّبِيِّ صلى الله عليه وسلم فَقُبِضَ النَّبِيُّ صلى الله عليه وسلم وَهُوَ فِي الطَّرِيقِ وَقَدْ رَوَى عَنِ النَّبِيِّ صلى الله عليه وسلم أَحَادِيثَ ‏.‏ وَالصُّنَابِحُ بْنُ الأَعْسَرِ الأَحْمَسِيُّ صَاحِبُ النَّبِيِّ صلى الله عليه وسلم يُقَالُ لَهُ الصُّنَابِحِيُّ أَيْضًا وَإِنَّمَا حَدِيثُهُ قَالَ سَمِعْتُ النَّبِيَّ صلى الله عليه وسلم يَقُولُ ‏\"‏ إِنِّي مُكَاثِرٌ بِكُمُ الأُمَمَ فَلاَ تَقْتَتِلُنَّ بَعْدِي ‏\"‏ ‏.‏",
    "english": "Abu Hurairah narrated that :Allah's Messenger said: \"When a Muslim, or believer, performs Wudu', washing his face, every evil that he looked at with his eyes leaves with the water - or with the last drop of water, or an expression similar to that - and when he washes his hands, every evil he did with his hands leaves with the water - or with the last drop of water - until he becomes free of sin",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-3",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، وَهَنَّادٌ، وَمَحْمُودُ بْنُ غَيْلاَنَ، قَالُوا حَدَّثَنَا وَكِيعٌ، عَنْ سُفْيَانَ، ح وَحَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ مَهْدِيٍّ، حَدَّثَنَا سُفْيَانُ، عَنْ عَبْدِ اللَّهِ بْنِ مُحَمَّدِ بْنِ عَقِيلٍ، عَنْ مُحَمَّدِ ابْنِ الْحَنَفِيَّةِ، عَنْ عَلِيٍّ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ مِفْتَاحُ الصَّلاَةِ الطُّهُورُ وَتَحْرِيمُهَا التَّكْبِيرُ وَتَحْلِيلُهَا التَّسْلِيمُ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا الْحَدِيثُ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ وَأَحْسَنُ ‏.‏ وَعَبْدُ اللَّهِ بْنُ مُحَمَّدِ بْنِ عَقِيلٍ هُوَ صَدُوقٌ وَقَدْ تَكَلَّمَ فِيهِ بَعْضُ أَهْلِ الْعِلْمِ مِنْ قِبَلِ حِفْظِهِ ‏.‏ قَالَ أَبُو عِيسَى وَسَمِعْتُ مُحَمَّدَ بْنَ إِسْمَاعِيلَ يَقُولُ كَانَ أَحْمَدُ بْنُ حَنْبَلٍ وَإِسْحَاقُ بْنُ إِبْرَاهِيمَ وَالْحُمَيْدِيُّ يَحْتَجُّونَ بِحَدِيثِ عَبْدِ اللَّهِ بْنِ مُحَمَّدِ بْنِ عَقِيلٍ ‏.‏ قَالَ مُحَمَّدٌ وَهُوَ مُقَارِبُ الْحَدِيثِ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ جَابِرٍ وَأَبِي سَعِيدٍ ‏.‏",
    "english": "Ali narrated that :the Prophet, said: \"The key to Salat is the purification, its Tahrlm is the Takblr, and its Tahlil is the Taslim",
    "grade": "Hasan Sahih"
  },
  {
    "id": "tirmidhi-4",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 4,
    "arabic": "حَدَّثَنَا أَبُو بَكْرٍ، مُحَمَّدُ بْنُ زَنْجَوَيْهِ الْبَغْدَادِيُّ وَغَيْرُ وَاحِدٍ قَالَ حَدَّثَنَا الْحُسَيْنُ بْنُ مُحَمَّدٍ، حَدَّثَنَا سُلَيْمَانُ بْنُ قَرْمٍ، عَنْ أَبِي يَحْيَى الْقَتَّاتِ، عَنْ مُجَاهِدٍ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ، رضى الله عنهما قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ مِفْتَاحُ الْجَنَّةِ الصَّلاَةُ وَمِفْتَاحُ الصَّلاَةِ الْوُضُوءُ ‏\"‏ ‏.‏",
    "english": "Jabir bin 'Abdullah, may Allah be pleased with them, narrated that :Allah's Messenger said: \"The key to Paradise is Salat, and the key to Salat is Wudu",
    "grade": "Sahih Lighairihi"
  },
  {
    "id": "tirmidhi-5",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 5,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، وَهَنَّادٌ، قَالاَ حَدَّثَنَا وَكِيعٌ، عَنْ شُعْبَةَ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا دَخَلَ الْخَلاَءَ قَالَ ‏ \"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ قَالَ شُعْبَةُ وَقَدْ قَالَ مَرَّةً أُخْرَى أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبِيثِ أَوِ الْخُبُثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عَلِيٍّ وَزَيْدِ بْنِ أَرْقَمَ وَجَابِرٍ وَابْنِ مَسْعُودٍ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ أَنَسٍ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ وَأَحْسَنُ ‏.‏ وَحَدِيثُ زَيْدِ بْنِ أَرْقَمَ فِي إِسْنَادِهِ اضْطِرَابٌ رَوَى هِشَامٌ الدَّسْتَوَائِيُّ وَسَعِيدُ بْنُ أَبِي عَرُوبَةَ عَنْ قَتَادَةَ فَقَالَ سَعِيدٌ عَنِ الْقَاسِمِ بْنِ عَوْفٍ الشَّيْبَانِيِّ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَقَالَ هِشَامٌ الدَّسْتَوَائِيُّ عَنْ قَتَادَةَ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَرَوَاهُ شُعْبَةُ وَمَعْمَرٌ عَنْ قَتَادَةَ عَنِ النَّضْرِ بْنِ أَنَسٍ فَقَالَ شُعْبَةُ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَقَالَ مَعْمَرٌ عَنِ النَّضْرِ بْنِ أَنَسٍ عَنْ أَبِيهِ عَنِ النَّبِيِّ صلى الله عليه وسلم ‏.‏ قَالَ أَبُو عِيسَى سَأَلْتُ مُحَمَّدًا عَنْ هَذَا فَقَالَ يُحْتَمَلُ أَنْ يَكُونَ قَتَادَةُ رَوَى عَنْهُمَا جَمِيعًا ‏.‏",
    "english": "Anas bin Malik said:\"When the Prophet entered the toilet he would say: 'O Allah Indeed I seek refuge in You.'\" Shu'bah (one of the narrators) said: \"Another time he said: 'I seek refuge in You from AI-Khubthi and al-Khablth.' Or: 'Al-Khubthi and Al-Khaba'ith",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-6",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 6,
    "arabic": "أَخْبَرَنَا أَحْمَدُ بْنُ عَبْدَةَ الضَّبِّيُّ الْبَصْرِيُّ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا دَخَلَ الْخَلاَءَ قَالَ ‏ \"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏",
    "english": "Anas bin Malik said:\"When the Prophet would enter the toilet 'He said: \"O Allah! Indeed I seek refuge in You from Al-Khubith and Al- Khaba'ith",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-7",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 7,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ إِسْمَاعِيلَ، حَدَّثَنَا مَالِكُ بْنُ إِسْمَاعِيلَ، عَنْ إِسْرَائِيلَ بْنِ يُونُسَ، عَنْ يُوسُفَ بْنِ أَبِي بُرْدَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، رضى الله عنها قَالَتْ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا خَرَجَ مِنَ الْخَلاَءِ قَالَ ‏ \"‏ غُفْرَانَكَ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ غَرِيبٌ لاَ نَعْرِفُهُ إِلاَّ مِنْ حَدِيثِ إِسْرَائِيلَ عَنْ يُوسُفَ بْنِ أَبِي بُرْدَةَ ‏.‏ وَأَبُو بُرْدَةَ بْنُ أَبِي مُوسَى اسْمُهُ عَامِرُ بْنُ عَبْدِ اللَّهِ بْنِ قَيْسٍ الأَشْعَرِيُّ ‏.‏ وَلاَ نَعْرِفُ فِي هَذَا الْبَابِ إِلاَّ حَدِيثَ عَائِشَةَ رضى الله عنها عَنِ النَّبِيِّ صلى الله عليه وسلم ‏.‏",
    "english": "Aishah, [may Allah be pleased with her] said:\"When the Prophet would exit the toilet he would say: 'Ghufranak",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-8",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 8,
    "arabic": "حَدَّثَنَا سَعِيدُ بْنُ عَبْدِ الرَّحْمَنِ الْمَخْزُومِيُّ، حَدَّثَنَا سُفْيَانُ بْنُ عُيَيْنَةَ، عَنِ الزُّهْرِيِّ، عَنْ عَطَاءِ بْنِ يَزِيدَ اللَّيْثِيِّ، عَنْ أَبِي أَيُّوبَ الأَنْصَارِيِّ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ إِذَا أَتَيْتُمُ الْغَائِطَ فَلاَ تَسْتَقْبِلُوا الْقِبْلَةَ بِغَائِطٍ وَلاَ بَوْلٍ وَلاَ تَسْتَدْبِرُوهَا وَلَكِنْ شَرِّقُوا أَوْ غَرِّبُوا ‏\"‏ ‏.‏ فَقَالَ أَبُو أَيُّوبَ فَقَدِمْنَا الشَّأْمَ فَوَجَدْنَا مَرَاحِيضَ قَدْ بُنِيَتْ مُسْتَقْبَلَ الْقِبْلَةِ فَنَنْحَرِفُ عَنْهَا وَنَسْتَغْفِرُ اللَّهَ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عَبْدِ اللَّهِ بْنِ الْحَارِثِ بْنِ جَزْءٍ الزُّبَيْدِيِّ وَمَعْقِلِ بْنِ أَبِي الْهَيْثَمِ وَيُقَالُ مَعْقِلُ بْنُ أَبِي مَعْقِلٍ وَأَبِي أُمَامَةَ وَأَبِي هُرَيْرَةَ وَسَهْلِ بْنِ حُنَيْفٍ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ أَبِي أَيُّوبَ أَحْسَنُ شَيْءٍ فِي هَذَا الْبَابِ وَأَصَحُّ ‏.‏ وَأَبُو أَيُّوبَ اسْمُهُ خَالِدُ بْنُ زَيْدٍ ‏.‏ وَالزُّهْرِيُّ اسْمُهُ مُحَمَّدُ بْنُ مُسْلِمِ بْنِ عُبَيْدِ اللَّهِ بْنِ شِهَابٍ الزُّهْرِيُّ وَكُنْيَتُهُ أَبُو بَكْرٍ ‏.‏ قَالَ أَبُو الْوَلِيدِ الْمَكِّيُّ قَالَ أَبُو عَبْدِ اللَّهِ مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ إِنَّمَا مَعْنَى قَوْلِ النَّبِيِّ صلى الله عليه وسلم ‏\"‏ لاَ تَسْتَقْبِلُوا الْقِبْلَةَ بِغَائِطٍ وَلاَ بِبَوْلٍ وَلاَ تَسْتَدْبِرُوهَا ‏\"‏ ‏.‏ إِنَّمَا هَذَا فِي الْفَيَافِي وَأَمَّا فِي الْكُنُفِ الْمَبْنِيَّةِ لَهُ رُخْصَةٌ فِي أَنْ يَسْتَقْبِلَهَا ‏.‏ وَهَكَذَا قَالَ إِسْحَاقُ بْنُ إِبْرَاهِيمَ ‏.‏ وَقَالَ أَحْمَدُ بْنُ حَنْبَلٍ رَحِمَهُ اللَّهُ إِنَّمَا الرُّخْصَةُ مِنَ النَّبِيِّ صلى الله عليه وسلم فِي اسْتِدْبَارِ الْقِبْلَةِ بِغَائِطٍ أَوْ بَوْلٍ وَأَمَّا اسْتِقْبَالُ الْقِبْلَةِ فَلاَ يَسْتَقْبِلُهَا ‏.‏ كَأَنَّهُ لَمْ يَرَ فِي الصَّحْرَاءِ وَلاَ فِي الْكُنُفِ أَنْ يَسْتَقْبِلَ الْقِبْلَةَ ‏.‏",
    "english": "Abu Ayyub Al-Ansari narrated that :Allah's Messenger said: \"When one of you arrives to defecate, then let none of you face the Qiblah while defecating, nor while urinating. And do not have your back towards it, but have it east of you or west of you",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-9",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 9,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، وَمُحَمَّدُ بْنُ الْمُثَنَّى، قَالاَ حَدَّثَنَا وَهْبُ بْنُ جَرِيرٍ، حَدَّثَنَا أَبِي، عَنْ مُحَمَّدِ بْنِ إِسْحَاقَ، عَنْ أَبَانَ بْنِ صَالِحٍ، عَنْ مُجَاهِدٍ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ، قَالَ نَهَى النَّبِيُّ صلى الله عليه وسلم أَنْ نَسْتَقْبِلَ الْقِبْلَةَ بِبَوْلٍ فَرَأَيْتُهُ قَبْلَ أَنْ يُقْبَضَ بِعَامٍ يَسْتَقْبِلُهَا ‏.‏ وَفِي الْبَابِ عَنْ أَبِي قَتَادَةَ وَعَائِشَةَ وَعَمَّارِ بْنِ يَاسِرٍ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ جَابِرٍ فِي هَذَا الْبَابِ حَدِيثٌ حَسَنٌ غَرِيبٌ ‏.‏",
    "english": "Jabir bin Abdullah said:\"The Prophet prohibited us from facing the Qiblah while urinating. Then i saw him facing it a year before he died",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-10",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 10,
    "arabic": "وَقَدْ رَوَى هَذَا الْحَدِيثَ ابْنُ لَهِيعَةَ، عَنْ أَبِي الزُّبَيْرِ، عَنْ جَابِرٍ، عَنْ أَبِي قَتَادَةَ، أَنَّهُ رَأَى النَّبِيَّ صلى الله عليه وسلم يَبُولُ مُسْتَقْبِلَ الْقِبْلَةِ ‏.‏ حَدَّثَنَا بِذَلِكَ قُتَيْبَةُ حَدَّثَنَا ابْنُ لَهِيعَةَ ‏.‏ وَحَدِيثُ جَابِرٍ عَنِ النَّبِيِّ صلى الله عليه وسلم أَصَحُّ مِنْ حَدِيثِ ابْنِ لَهِيعَةَ ‏.‏ وَابْنُ لَهِيعَةَ ضَعِيفٌ عِنْدَ أَهْلِ الْحَدِيثِ ضَعَّفَهُ يَحْيَى بْنُ سَعِيدٍ الْقَطَّانُ وَغَيْرُهُ مِنْ قِبَلِ حِفْظِهِ ‏.‏",
    "english": "Abu Qatadah narrated that :he saw the Prophet urinating while facing the Qiblah. Qutaibah narrated that to us, he said: \"Ibn Lahi'ah informed us.\" Jabir's Hadlth about the Prophet is more correct than the Hadith of Ibn Lahi'ah. Ibn Lahi'ah is weak according to the scholars of Hadith. He was graded weak by Yahya bin Sa'eed Al-Qattan, and others, [due to his memorization]",
    "grade": "Daif Isnaad"
  },
  {
    "id": "nasai-1",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 1,
    "arabic": "أَخْبَرَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، قَالَ حَدَّثَنَا سُفْيَانُ، عَنِ الزُّهْرِيِّ، عَنْ أَبِي سَلَمَةَ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ ‏ \"‏ إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنْ نَوْمِهِ فَلاَ يَغْمِسْ يَدَهُ فِي وَضُوئِهِ حَتَّى يَغْسِلَهَا ثَلاَثًا فَإِنَّ أَحَدَكُمْ لاَ يَدْرِي أَيْنَ بَاتَتْ يَدُهُ ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Hurairah that the Prophet (ﷺ) said:\"When any one of you wakes from sleep, let him not dip his hand in (the water he uses for) his Wudu' until he has washed it three times, for none of you knows where his hand spent the night",
    "grade": "Sahih"
  },
  {
    "id": "nasai-2",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 2,
    "arabic": "أَخْبَرَنَا إِسْحَاقُ بْنُ إِبْرَاهِيمَ، وَقُتَيْبَةُ بْنُ سَعِيدٍ، عَنْ جَرِيرٍ، عَنْ مَنْصُورٍ، عَنْ أَبِي وَائِلٍ، عَنْ حُذَيْفَةَ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِذَا قَامَ مِنَ اللَّيْلِ يَشُوصُ فَاهُ بِالسِّوَاكِ ‏.‏",
    "english": "It was narrated that Huthaifah said:\"When the Messenger of Allah (ﷺ) got up at night, he would brush his mouth with the Siwak",
    "grade": "Sahih"
  },
  {
    "id": "nasai-3",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 3,
    "arabic": "أَخْبَرَنَا أَحْمَدُ بْنُ عَبْدَةَ، قَالَ حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، قَالَ أَخْبَرَنَا غَيْلاَنُ بْنُ جَرِيرٍ، عَنْ أَبِي بُرْدَةَ، عَنْ أَبِي مُوسَى، قَالَ دَخَلْتُ عَلَى رَسُولِ اللَّهِ صلى الله عليه وسلم وَهُوَ يَسْتَنُّ وَطَرَفُ السِّوَاكِ عَلَى لِسَانِهِ وَهُوَ يَقُولُ ‏ \"‏ عَأْعَأْ ‏\"‏ ‏.‏",
    "english": "It was narrated that Abu Musa said:\"I came to the Messenger of Allah (ﷺ) when he was using the Siwak, and the end of the Siwak was on his toungue, and he was saying, \"'A','a",
    "grade": "Sahih"
  },
  {
    "id": "nasai-4",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 4,
    "arabic": "أَخْبَرَنَا عَمْرُو بْنُ عَلِيٍّ، حَدَّثَنَا يَحْيَى، - وَهُوَ ابْنُ سَعِيدٍ - قَالَ حَدَّثَنَا قُرَّةُ بْنُ خَالِدٍ، قَالَ حَدَّثَنَا حُمَيْدُ بْنُ هِلاَلٍ، قَالَ حَدَّثَنِي أَبُو بُرْدَةَ، عَنْ أَبِي مُوسَى، قَالَ أَقْبَلْتُ إِلَى النَّبِيِّ صلى الله عليه وسلم وَمَعِي رَجُلاَنِ مِنَ الأَشْعَرِيِّينَ أَحَدُهُمَا عَنْ يَمِينِي وَالآخَرُ عَنْ يَسَارِي وَرَسُولُ اللَّهِ صلى الله عليه وسلم يَسْتَاكُ فَكِلاَهُمَا سَأَلَ الْعَمَلَ قُلْتُ وَالَّذِي بَعَثَكَ بِالْحَقِّ نَبِيًّا مَا أَطْلَعَانِي عَلَى مَا فِي أَنْفُسِهِمَا وَمَا شَعَرْتُ أَنَّهُمَا يَطْلُبَانِ الْعَمَلَ فَكَأَنِّي أَنْظُرُ إِلَى سِوَاكِهِ تَحْتَ شَفَتِهِ قَلَصَتْ فَقَالَ ‏ \"‏ إِنَّا لاَ - أَوْ لَنْ - نَسْتَعِينَ عَلَى الْعَمَلِ مَنْ أَرَادَهُ وَلَكِنِ اذْهَبْ أَنْتَ ‏\"‏ ‏.‏ فَبَعَثَهُ عَلَى الْيَمَنِ ثُمَّ أَرْدَفَهُ مُعَاذُ بْنُ جَبَلٍ رضى الله عنهما ‏.‏",
    "english": "It was narrated from Abu Burdah that Abu Musa said:\"I came to the Prophet (ﷺ) when he was using the Siwak and with me were two men of the Ash'aris - one on my right and the other on my left - who were seeking to be appointed as officials. I said: 'By the One Who sent you as a Prophet with the truth, they did not tell me why they wanted to come with me and I did not realize that they were seeking to be appointed as officials.' And I could see his Siwak beneath his lip, then it slipped and he said: 'We do not' - or; 'We will never appoint as an official anyone who seeks that. Rather you should go.'\" So he sent his (Abu Musa) to Yemen, then he sent Mu'adh bin Jabal to go after him - may Allah be pleased with them",
    "grade": "Sahih"
  },
  {
    "id": "nasai-5",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 5,
    "arabic": "أَخْبَرَنَا حُمَيْدُ بْنُ مَسْعَدَةَ، وَمُحَمَّدُ بْنُ عَبْدِ الأَعْلَى، عَنْ يَزِيدَ، - وَهُوَ ابْنُ زُرَيْعٍ - قَالَ حَدَّثَنِي عَبْدُ الرَّحْمَنِ بْنُ أَبِي عَتِيقٍ، قَالَ حَدَّثَنِي أَبِي قَالَ، سَمِعْتُ عَائِشَةَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ السِّوَاكُ مَطْهَرَةٌ لِلْفَمِ مَرْضَاةٌ لِلرَّبِّ ‏\"‏ ‏.‏",
    "english": "Abdur-Rahman bin Abu 'Atiq said:\"My father told me: 'I heard 'Aishah say, (narrating) from the Prophet (ﷺ): \"Siwak is a means of purification for the mouth and is pleasing to the Lord",
    "grade": "Sahih"
  },
  {
    "id": "nasai-6",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 6,
    "arabic": "أَخْبَرَنَا حُمَيْدُ بْنُ مَسْعَدَةَ، وَعِمْرَانُ بْنُ مُوسَى، قَالاَ حَدَّثَنَا عَبْدُ الْوَارِثِ، قَالَ حَدَّثَنَا شُعَيْبُ بْنُ الْحَبْحَابِ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ قَدْ أَكْثَرْتُ عَلَيْكُمْ فِي السِّوَاكِ ‏\"‏ ‏.‏",
    "english": "It was narrated that Anas bin Malik said:\"The Messenger of Allah (ﷺ) said: 'I have indeed urged you with regard to the Siwak",
    "grade": "Sahih"
  },
  {
    "id": "nasai-7",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 7,
    "arabic": "أَخْبَرَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ لَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي لأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلاَةٍ ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Hurairah that the Messenger of Allah (ﷺ) said:\"Were it not that it would be too difficult for my Ummah, I would have commanded them to use the Siwak at (the time of) every Salah",
    "grade": "Sahih"
  },
  {
    "id": "nasai-8",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 8,
    "arabic": "أَخْبَرَنَا عَلِيُّ بْنُ خَشْرَمٍ، قَالَ حَدَّثَنَا عِيسَى، - وَهُوَ ابْنُ يُونُسَ - عَنْ مِسْعَرٍ، عَنِ الْمِقْدَامِ، - وَهُوَ ابْنُ شُرَيْحٍ - عَنْ أَبِيهِ، قَالَ قُلْتُ لِعَائِشَةَ بِأَىِّ شَىْءٍ كَانَ يَبْدَأُ النَّبِيُّ صلى الله عليه وسلم إِذَا دَخَلَ بَيْتَهُ قَالَتْ بِالسِّوَاكِ ‏.‏",
    "english": "It was narrated from Al-Miqdam - Abu Shuraih - that his father said:\"I said to 'Aishah: 'What did the Prophet (ﷺ) start with when he entered his house?' She said: 'The Siwak",
    "grade": "Sahih"
  },
  {
    "id": "nasai-9",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 9,
    "arabic": "أَخْبَرَنَا الْحَارِثُ بْنُ مِسْكِينٍ، قِرَاءَةً عَلَيْهِ وَأَنَا أَسْمَعُ، عَنِ ابْنِ وَهْبٍ، عَنْ يُونُسَ، عَنِ ابْنِ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، عَنْ رَسُولِ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ الْفِطْرَةُ خَمْسٌ الاِخْتِتَانُ وَالاِسْتِحْدَادُ وَقَصُّ الشَّارِبِ وَتَقْلِيمُ الأَظْفَارِ وَنَتْفُ الإِبْطِ ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Hurairah that the Messenger of Allah (ﷺ) said:\"The Fitrah are five: Circumcision, removing the pubes, trimming the mustache, clipping the nails, and plucking the armpit hairs",
    "grade": "Sahih"
  },
  {
    "id": "nasai-10",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 10,
    "arabic": "أَخْبَرَنَا مُحَمَّدُ بْنُ عَبْدِ الأَعْلَى، قَالَ حَدَّثَنَا الْمُعْتَمِرُ، قَالَ سَمِعْتُ مَعْمَرًا، عَنِ الزُّهْرِيِّ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ خَمْسٌ مِنَ الْفِطْرَةِ قَصُّ الشَّارِبِ وَنَتْفُ الإِبْطِ وَتَقْلِيمُ الأَظْفَارِ وَالاِسْتِحْدَادُ وَالْخِتَانُ ‏\"‏ ‏.‏",
    "english": "It was narrated that Abu Hurairah said:\"The Messenger of Allah (ﷺ) said: 'The Fitrah are five: Trimming the mustache, plucking the armpit hairs, clipping the nails, removing the pubes, and circumcision",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-1",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 1,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ قَالَ: حَدَّثَنَا شَرِيكٌ عَنِ الأَعْمَشِ عَنْ أَبِي صَالِحٍ عَنْ أَبِي هُرَيْرَةَ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: «مَا أَمَرْتُكُمْ بِهِ فَخُذُوهُ وَمَا نَهَيْتُكُمْ عَنْهُ فَانْتَهُوا»",
    "english": "Abu Hurairah narrated that:The Prophet said: \"Whatever I have commanded you do it, and whatever I have forbidden you, refrain from it",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-2",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 2,
    "arabic": "حَدَّثَنَا أَبُو عَبْدِ اللَّهِ، قَالَ حَدَّثَنَا مُحَمَّدُ بْنُ الصَّبَّاحِ، قَالَ أَنْبَأَنَا جَرِيرٌ، عَنِ الأَعْمَشِ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏ \"‏ ذَرُونِي مَا تَرَكْتُكُمْ فَإِنَّمَا هَلَكَ مَنْ كَانَ قَبْلَكُمْ بِسُؤَالِهِمْ وَاخْتِلاَفِهِمْ عَلَى أَنْبِيَائِهِمْ فَإِذَا أَمَرْتُكُمْ بِشَىْءٍ فَخُذُوا مِنْهُ مَا اسْتَطَعْتُمْ وَإِذَا نَهَيْتُكُمْ عَنْ شَىْءٍ فَانْتَهُوا ‏\"‏ ‏.‏",
    "english": "Abu Hurairah narrated that:The Prophet said: \"Leave me as I have left you (Don't ask me the minor things that I have avoided to tell you). For those who came before you were doomed because of their questions and differences with their Prophets. If I commanded you to do something, then do as much of it as you can, and if I forbid you from doing something, then refrain from it",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-3",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا أَبُو مُعَاوِيَةَ، وَوَكِيعٌ، عَنِ الأَعْمَشِ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏ \"‏ مَنْ أَطَاعَنِي فَقَدْ أَطَاعَ اللَّهَ وَمَنْ عَصَانِي فَقَدْ عَصَى اللَّهَ ‏\"‏ ‏.‏",
    "english": "Abu Hurairah narrated that:The Prophet said: \"Whoever obeys me, obeys Allah; and whoever disobeys me, disobeys Allah",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-4",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 4,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ، حَدَّثَنَا زَكَرِيَّا بْنُ عَدِيٍّ، عَنِ ابْنِ الْمُبَارَكِ، عَنْ مُحَمَّدِ بْنِ سُوقَةَ، عَنْ أَبِي جَعْفَرٍ، قَالَ كَانَ ابْنُ عُمَرَ إِذَا سَمِعَ مِنْ، رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ حَدِيثًا لَمْ يَعْدُهُ وَلَمْ يُقَصِّرْ دُونَهُ ‏.‏",
    "english": "Abu Ja'far said:\"Whenever Ibn 'Umar heard a Hadith from the Messanger of Allah (ﷺ), he would not do more than it said, and he would not do less",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-5",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 5,
    "arabic": "حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ الدِّمَشْقِيُّ، حَدَّثَنَا مُحَمَّدُ بْنُ عِيسَى بْنِ سُمَيْعٍ، حَدَّثَنَا إِبْرَاهِيمُ بْنُ سُلَيْمَانَ الأَفْطَسُ، عَنِ الْوَلِيدِ بْنِ عَبْدِ الرَّحْمَنِ الْجُرَشِيِّ، عَنْ جُبَيْرِ بْنِ نُفَيْرٍ، عَنْ أَبِي الدَّرْدَاءِ، قَالَ خَرَجَ عَلَيْنَا رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ وَنَحْنُ نَذْكُرُ الْفَقْرَ وَنَتَخَوَّفُهُ فَقَالَ ‏ \"‏ آلْفَقْرَ تَخَافُونَ وَالَّذِي نَفْسِي بِيَدِهِ لَتُصَبَّنَّ عَلَيْكُمُ الدُّنْيَا صَبًّا حَتَّى لاَ يُزِيغَ قَلْبَ أَحَدٍ مِنْكُمْ إِزَاغَةً إِلاَّ هِيَهْ وَايْمُ اللَّهِ لَقَدْ تَرَكْتُكُمْ عَلَى مِثْلِ الْبَيْضَاءِ لَيْلُهَا وَنَهَارُهَا سَوَاءٌ ‏\"‏ ‏.‏ قَالَ أَبُو الدَّرْدَاءِ صَدَقَ وَاللَّهِ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ تَرَكَنَا وَاللَّهِ عَلَى مِثْلِ الْبَيْضَاءِ لَيْلُهَا وَنَهَارُهَا سَوَاءٌ ‏.‏",
    "english": "Abu Darda' said:\"The Messenger of Allah (ﷺ) came out to us when we were speaking of poverty and how we feared it. He said: 'Is it poverty that you fear? By the One in Whose Hand is my soul, (the delights and luxuries of) this world will come to you in plenty, and nothing will cause the heart of anyone of you to deviate except that. By Allah, I am leaving you upon something like Bayda (white, bright, clear path) the night and day of which are the same",
    "grade": "Hasan"
  },
  {
    "id": "ibnmajah-6",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 6,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا مُحَمَّدُ بْنُ جَعْفَرٍ، حَدَّثَنَا شُعْبَةُ، عَنْ مُعَاوِيَةَ بْنِ قُرَّةَ، عَنْ أَبِيهِ، قَالَ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏ \"‏ لاَ تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي مَنْصُورِينَ لاَ يَضُرُّهُمْ مَنْ خَذَلَهُمْ حَتَّى تَقُومَ السَّاعَةُ ‏\"‏ ‏.‏",
    "english": "Mu'awiyah bin Qurrah narrated that his father said:The Messenger of Allah (ﷺ) said: \"A group of my Ummah will continue to prevail and they will never be harmed by those who forsake them, until the Hour begins",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-7",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 7,
    "arabic": "حَدَّثَنَا أَبُو عَبْدِ اللَّهِ، قَالَ حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ، قَالَ حَدَّثَنَا يَحْيَى بْنُ حَمْزَةَ، قَالَ حَدَّثَنَا أَبُو عَلْقَمَةَ، نَصْرُ بْنُ عَلْقَمَةَ عَنْ عُمَيْرِ بْنِ الأَسْوَدِ، وَكَثِيرِ بْنِ مُرَّةَ الْحَضْرَمِيِّ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ لاَ تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي قَوَّامَةً عَلَى أَمْرِ اللَّهِ لاَ يَضُرُّهَا مَنْ خَالَفَهَا ‏\"‏ ‏.‏",
    "english": "Abu Hurairah narrated that:The Messenger of Allah (ﷺ) said: \"A group of my Ummah will continue to adhere steadfastly to the command of Allah and those who oppose them will not be able to harm them",
    "grade": "Hasan Sahih"
  },
  {
    "id": "ibnmajah-8",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 8,
    "arabic": "حَدَّثَنَا أَبُو عَبْدِ اللَّهِ، قَالَ حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ، حَدَّثَنَا الْجَرَّاحُ بْنُ مَلِيحٍ، حَدَّثَنَا بَكْرُ بْنُ زُرْعَةَ، قَالَ سَمِعْتُ أَبَا عِنَبَةَ الْخَوْلاَنِيَّ، وَكَانَ، قَدْ صَلَّى الْقِبْلَتَيْنِ مَعَ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ سَمِعْتُ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ يَقُولُ ‏ \"‏ لاَ يَزَالُ اللَّهُ يَغْرِسُ فِي هَذَا الدِّينِ غَرْسًا يَسْتَعْمِلُهُمْ فِي طَاعَتِهِ ‏\"‏ ‏.‏",
    "english": "Abu 'Inabah Al-Khawlani said that:The Messenger of Allah (ﷺ) said: \"Allah will continue to plant new people in this religion and use them in His obedience",
    "grade": "Hasan"
  },
  {
    "id": "ibnmajah-9",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 9,
    "arabic": "حَدَّثَنَا يَعْقُوبُ بْنُ حُمَيْدِ بْنِ كَاسِبٍ، حَدَّثَنَا الْقَاسِمُ بْنُ نَافِعٍ، حَدَّثَنَا الْحَجَّاجُ بْنُ أَرْطَاةَ، عَنْ عَمْرِو بْنِ شُعَيْبٍ، عَنْ أَبِيهِ، قَالَ قَامَ مُعَاوِيَةُ خَطِيبًا فَقَالَ أَيْنَ عُلَمَاؤُكُمْ أَيْنَ عُلَمَاؤُكُمْ سَمِعْتُ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ يَقُولُ ‏ \"‏ لاَ تَقُومُ السَّاعَةُ إِلاَّ وَطَائِفَةٌ مِنْ أُمَّتِي ظَاهِرُونَ عَلَى النَّاسِ لاَ يُبَالُونَ مَنْ خَذَلَهُمْ وَلاَ مَنْ نَصَرَهُمْ ‏\"‏ ‏.‏",
    "english": "Amr bin Shu'aib narrated that:His father said: \"Mu'awiyah stood up to deliver a sermon and said: 'Where are your scholars? Where are your scholars? For I heard the Messenger of Allah (ﷺ) say: The Hour will not begin until a group of my Ummah will prevail over the people, and they will not care who lets them down and who supports them",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-10",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 10,
    "arabic": "حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ، حَدَّثَنَا مُحَمَّدُ بْنُ شُعَيْبٍ، حَدَّثَنَا سَعِيدُ بْنُ بَشِيرٍ، عَنْ قَتَادَةَ، عَنْ أَبِي قِلاَبَةَ، عَنْ أَبِي أَسْمَاءَ الرَّحَبِيِّ، عَنْ ثَوْبَانَ، أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ لاَ يَزَالُ طَائِفَةٌ مِنْ أُمَّتِي عَلَى الْحَقِّ مَنْصُورِينَ لاَ يَضُرُّهُمْ مَنْ خَالَفَهُمْ حَتَّى يَأْتِيَ أَمْرُ اللَّهِ عَزَّ وَجَلَّ ‏\"‏ ‏.‏",
    "english": "It was narrated from Thawban that:The Messenger of Allah (ﷺ) said: \"A group among my Ummah will continue to follow the truth and prevail, and those who oppose them will not be able to harm them, until the command of Allah comes to pass",
    "grade": "Sahih"
  },
  {
    "id": "malik-1",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 1,
    "arabic": "قَالَ حَدَّثَنِي يَحْيَى بْنُ يَحْيَى اللَّيْثِيُّ، عَنْ مَالِكِ بْنِ أَنَسٍ، عَنِ ابْنِ شِهَابٍ، أَنَّ عُمَرَ بْنَ عَبْدِ الْعَزِيزِ، أَخَّرَ الصَّلاَةَ يَوْمًا فَدَخَلَ عَلَيْهِ عُرْوَةُ بْنُ الزُّبَيْرِ فَأَخْبَرَهُ أَنَّ الْمُغِيرَةَ بْنَ شُعْبَةَ أَخَّرَ الصَّلاَةَ يَوْمًا وَهُوَ بِالْكُوفَةِ فَدَخَلَ عَلَيْهِ أَبُو مَسْعُودٍ الأَنْصَارِيُّ فَقَالَ مَا هَذَا يَا مُغِيرَةُ أَلَيْسَ قَدْ عَلِمْتَ أَنَّ جِبْرِيلَ نَزَلَ فَصَلَّى فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ صَلَّى فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ صَلَّى فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ صَلَّى فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ صَلَّى فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ قَالَ ‏ \"‏ بِهَذَا أُمِرْتُ ‏\"‏ ‏.‏ فَقَالَ عُمَرُ بْنُ عَبْدِ الْعَزِيزِ اعْلَمْ مَا تُحَدِّثُ بِهِ يَا عُرْوَةُ أَوَ إِنَّ جِبْرِيلَ هُوَ الَّذِي أَقَامَ لِرَسُولِ اللَّهِ صلى الله عليه وسلم وَقْتَ الصَّلاَةِ قَالَ عُرْوَةُ كَذَلِكَ كَانَ بَشِيرُ بْنُ أَبِي مَسْعُودٍ الأَنْصَارِيُّ يُحَدِّثُ عَنْ أَبِيهِ ‏.‏",
    "english": "He said, \"Yahya ibn Yahya al-Laythi related to me from Malik ibn Anas from Ibn Shihab that one day Umar ibn Abdal-Aziz delayed the prayer. Urwa ibn az-Zubayr came and told him that al-Mughira ibn Shuba had delayed the prayer one day while he was in Kufa and Abu Masud al- Ansari had come to him and said, 'What's this, Mughira? Don't you know that the angel Jibril came down and prayed and the Messenger of Allah, may Allah bless him and grant him peace, prayed.' Then he prayed again, and the Messenger of Allah, may Allah bless him and grant him peace, prayed. Then he prayed again, and the Messenger of Allah, may Allah bless him and grant him peace, prayed. Then he prayed again, and the Messenger of Allah, may Allah bless him and grant him peace, prayed. Then he prayed again, and the Messenger of Allah, may Allah bless him and grant him peace, prayed. Then Jibril said, 'This is what you have been ordered to do.' Umar ibn Abd al-Aziz said, 'Be sure of what you relate, Urwa. Was it definitely Jibril who established the time of the prayer for the Messenger of Allah?' \" Urwa said, \"That's how it was related to Bashir ibn Abi Masud al-Ansari by his father",
    "grade": "Sahih"
  },
  {
    "id": "malik-2",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 2,
    "arabic": "قَالَ عُرْوَةُ وَلَقَدْ حَدَّثَتْنِي عَائِشَةُ زَوْجُ النَّبِيِّ صلى الله عليه وسلم أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم كَانَ يُصَلِّي الْعَصْرَ وَالشَّمْسُ فِي حُجْرَتِهَا قَبْلَ أَنْ تَظْهَرَ ‏.‏",
    "english": "Urwa said that A'isha, the wife of the Prophet, may Allah bless him and grant him peace used to pray asr while the sunlight was pouring into her room, before the sun itself had become visible (i.e. because it was still high in the sky)",
    "grade": "Sahih"
  },
  {
    "id": "malik-3",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 3,
    "arabic": "وَحَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، عَنْ عَطَاءِ بْنِ يَسَارٍ، أَنَّهُ قَالَ جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَسَأَلَهُ عَنْ وَقْتِ صَلاَةِ الصُّبْحِ قَالَ فَسَكَتَ عَنْهُ رَسُولُ اللَّهِ صلى الله عليه وسلم حَتَّى إِذَا كَانَ مِنَ الْغَدِ صَلَّى الصُّبْحَ حِينَ طَلَعَ الْفَجْرُ ثُمَّ صَلَّى الصُّبْحَ مِنَ الْغَدِ بَعْدَ أَنْ أَسْفَرَ ثُمَّ قَالَ ‏\"‏ أَيْنَ السَّائِلُ عَنْ وَقْتِ الصَّلاَةِ ‏\"‏ ‏.‏ قَالَ هَا أَنَا ذَا يَا رَسُولَ اللَّهِ ‏.‏ فَقَالَ ‏\"‏ مَا بَيْنَ هَذَيْنِ وَقْتٌ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Zayd ibn Aslam that Ata ibn Yasar said, \"A man came to the Messenger of Allah, may Allah bless him and grant him peace, and asked him about the time of the subh prayer. The Messenger of Allah, may Allah bless him and grant him peace, did not answer him, but in the morning he prayed subh at first light. The following morning he prayed subh when it was much lighter, and then said, 'Where is the man who was asking about the time of the prayer?' The man replied, 'Here I am, Messenger of Allah.' He said,'The time is between these two",
    "grade": "Sahih Lighairihi"
  },
  {
    "id": "malik-4",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 4,
    "arabic": "وَحَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، عَنْ عَمْرَةَ بِنْتِ عَبْدِ الرَّحْمَنِ، عَنْ عَائِشَةَ، زَوْجِ النَّبِيِّ صلى الله عليه وسلم أَنَّهَا قَالَتْ إِنْ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم لَيُصَلِّي الصُّبْحَ فَيَنْصَرِفُ النِّسَاءُ مُتَلَفِّعَاتٍ بِمُرُوطِهِنَّ مَا يُعْرَفْنَ مِنَ الْغَلَسِ ‏.‏",
    "english": "Yahya related to me from Malik from Yahya ibn Said from Amra bint Abd ar-Rahman that A'isha, the wife of the Prophet, may Allah bless him and grant him peace, said, \"The Messenger of Allah, may Allah bless him and grant him peace, used to pray subh and the women would leave wrapped in their garments and they could not yet be recognised in the darkness",
    "grade": "Sahih"
  },
  {
    "id": "malik-5",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 5,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، عَنْ عَطَاءِ بْنِ يَسَارٍ، وَعَنْ بُسْرِ بْنِ سَعِيدٍ، وَعَنِ الأَعْرَجِ، كُلُّهُمْ يُحَدِّثُونَهُ عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ مَنْ أَدْرَكَ رَكْعَةً مِنَ الصُّبْحِ قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ فَقَدْ أَدْرَكَ الصُّبْحَ وَمَنْ أَدْرَكَ رَكْعَةً مِنَ الْعَصْرِ قَبْلَ أَنْ تَغْرُبَ الشَّمْسُ فَقَدْ أَدْرَكَ الْعَصْرَ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Zayd ibn Aslam from Ata ibn Yasar and from Busr ibn Said and from al-Araj-all of whom related it from Abu Hurayra - that the Messenger of Allah, may Allah bless him and grant him peace, said, \"Whoever manages to do a raka of subh before the sun has risen has done subh in time, and whoever manages to do a raka of asr before the sun has set has done asr in time",
    "grade": "Sahih"
  },
  {
    "id": "malik-6",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 6,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ نَافِعٍ، مَوْلَى عَبْدِ اللَّهِ بْنِ عُمَرَ أَنَّ عُمَرَ بْنَ الْخَطَّابِ، كَتَبَ إِلَى عُمَّالِهِ إِنَّ أَهَمَّ أَمْرِكُمْ عِنْدِي الصَّلاَةُ فَمَنْ حَفِظَهَا وَحَافَظَ عَلَيْهَا حَفِظَ دِينَهُ وَمَنْ ضَيَّعَهَا فَهُوَ لِمَا سِوَاهَا أَضْيَعُ ‏.‏ ثُمَّ كَتَبَ أَنْ صَلُّوا الظُّهْرَ إِذَا كَانَ الْفَىْءُ ذِرَاعًا إِلَى أَنْ يَكُونَ ظِلُّ أَحَدِكُمْ مِثْلَهُ وَالْعَصْرَ وَالشَّمْسُ مُرْتَفِعَةٌ بَيْضَاءُ نَقِيَّةٌ قَدْرَ مَا يَسِيرُ الرَّاكِبُ فَرْسَخَيْنِ أَوْ ثَلاَثَةً قَبْلَ غُرُوبِ الشَّمْسِ وَالْمَغْرِبَ إِذَا غَرَبَتِ الشَّمْسُ وَالْعِشَاءَ إِذَا غَابَ الشَّفَقُ إِلَى ثُلُثِ اللَّيْلِ فَمَنْ نَامَ فَلاَ نَامَتْ عَيْنُهُ فَمَنْ نَامَ فَلاَ نَامَتْ عَيْنُهُ فَمَنْ نَامَ فَلاَ نَامَتْ عَيْنُهُ وَالصَّبْحَ وَالنُّجُومُ بَادِيَةٌ مُشْتَبِكَةٌ ‏.‏",
    "english": "Yahya related to me from Malik from Nafi', the mawla of Abdullah ibn Umar, that Umar ibn al-Khattab wrote to his governors saying, \"The most important of your affairs in my view is the prayer. Whoever protects it and observes it carefully is protecting his deen, while whoever is negligent about it will be even more negligent about other things.\" Then he added, \"Pray dhuhr any time from when the afternoon shade is the length of your forearm until the length of your shadow matches your height. Pray asr when the sun is still pure white, so that a rider can travel two or three farsakhs before the sun sets. Pray maghrib when the sun has set. Pray isha any time from when the redness in the western sky has disappeared until a third of the night has passed - and a person who sleeps, may he have no rest, a person who sleeps, may he have no rest. And pray subh when all the stars are visible and like a haze in the sky",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-7",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 7,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ عَمِّهِ أَبِي سُهَيْلٍ، عَنْ أَبِيهِ، أَنَّ عُمَرَ بْنَ الْخَطَّابِ، كَتَبَ إِلَى أَبِي مُوسَى أَنْ صَلِّ الظُّهْرَ، إِذَا زَاغَتِ الشَّمْسُ وَالْعَصْرَ وَالشَّمْسُ بَيْضَاءُ نَقِيَّةٌ قَبْلَ أَنْ يَدْخُلَهَا صُفْرَةٌ وَالْمَغْرِبَ إِذَا غَرَبَتِ الشَّمْسُ وَأَخِّرِ الْعِشَاءَ مَا لَمْ تَنَمْ وَصَلِّ الصُّبْحَ وَالنُّجُومُ بَادِيَةٌ مُشْتَبِكَةٌ وَاقْرَأْ فِيهَا بِسُورَتَيْنِ طَوِيلَتَيْنِ مِنَ الْمُفَصَّلِ ‏.‏",
    "english": "Yahya related to me from Malik, from his uncle Abu Suhayl from his father that Umar ibn al-Khattab wrote to Abu Musa saying that he should pray dhuhr when the sun had started to decline, asr when the sun was still pure white before any yellowness had entered it maghrib when the sun had set, and to delay isha as long as he did not sleep, and to pray subh when the stars were all visible and like a haze in the sky and to read in it two long suras from the mufassal",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-8",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 8,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، أَنَّ عُمَرَ بْنَ الْخَطَّابِ، كَتَبَ إِلَى أَبِي مُوسَى الأَشْعَرِيِّ أَنْ صَلِّ الْعَصْرَ، وَالشَّمْسُ، بَيْضَاءُ نَقِيَّةٌ قَدْرَ مَا يَسِيرُ الرَّاكِبُ ثَلاَثَةَ فَرَاسِخَ وَأَنْ صَلِّ الْعِشَاءَ مَا بَيْنَكَ وَبَيْنَ ثُلُثِ اللَّيْلِ فَإِنْ أَخَّرْتَ فَإِلَى شَطْرِ اللَّيْلِ وَلاَ تَكُنْ مِنَ الْغَافِلِينَ ‏.‏",
    "english": "Yahya related to me from Malik from Hisham ibn Urwa from his father that Umar ibn al-Khattab wrote to Abu Musa al-Ashari that he should pray asr when the sun was still pure white so that a man could ride three farsakhs (before maghrib) and that he should pray Isha during the first third of the night, or, if he delayed it, then up until the middle of the night, and he warned him not to be forgetful",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-9",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 9,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ يَزِيدَ بْنِ زِيَادٍ، عَنْ عَبْدِ اللَّهِ بْنِ رَافِعٍ، مَوْلَى أُمِّ سَلَمَةَ زَوْجِ النَّبِيِّ صلى الله عليه وسلم أَنَّهُ سَأَلَ أَبَا هُرَيْرَةَ عَنْ وَقْتِ الصَّلاَةِ فَقَالَ أَبُو هُرَيْرَةَ أَنَا أُخْبِرُكَ صَلِّ الظُّهْرَ إِذَا كَانَ ظِلُّكَ مِثْلَكَ وَالْعَصْرَ إِذَا كَانَ ظِلُّكَ مِثْلَيْكَ وَالْمَغْرِبَ إِذَا غَرَبَتِ الشَّمْسُ وَالْعِشَاءَ مَا بَيْنَكَ وَبَيْنَ ثُلُثِ اللَّيْلِ وَصَلِّ الصُّبْحَ بِغَبَشٍ ‏.‏ يَعْنِي الْغَلَسَ ‏.‏",
    "english": "Yahya related to me from Malik from Yazid ibn Ziyad that Abdullah ibn Rafi, the mawla of Umm Salama, the wife of the Prophet, may Allah bless him and grant him peace, asked Abu Hurayra about the time of the prayer. Abu Hurayra said, \"Let me tell you. Pray dhuhr when the length of your shadow matches your height, asr when your shadow is twice your height, maghrib when the sun has set, isha in the first third of the night, and subh in the very first light of dawn,\" i.e. when the dawn has definitely come",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-10",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 10,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ إِسْحَاقَ بْنِ عَبْدِ اللَّهِ بْنِ أَبِي طَلْحَةَ، عَنْ أَنَسِ بْنِ مَالِكٍ، أَنَّهُ قَالَ كُنَّا نُصَلِّي الْعَصْرَ ثُمَّ يَخْرُجُ الإِنْسَانُ إِلَى بَنِي عَمْرِو بْنِ عَوْفٍ فَيَجِدُهُمْ يُصَلُّونَ الْعَصْرَ ‏.‏",
    "english": "Yahya related to me from Malik from Ishaq ibn Abdullah ibn Abi Talha that Anas ibn Malik said, \"We would pray asr and anyone who then went to the Bani Amr ibn Awf would find them praying asr",
    "grade": "Sahih"
  },
  {
    "id": "nawawi-1",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 1,
    "arabic": "عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ: \" إنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إلَى مَا هَاجَرَ إلَيْهِ\". رَوَاهُ إِمَامَا الْمُحَدِّثِينَ أَبُو عَبْدِ اللهِ مُحَمَّدُ بنُ إِسْمَاعِيل بن إِبْرَاهِيم بن الْمُغِيرَة بن بَرْدِزبَه الْبُخَارِيُّ الْجُعْفِيُّ [رقم:1]، وَأَبُو الْحُسَيْنِ مُسْلِمٌ بنُ الْحَجَّاج بن مُسْلِم الْقُشَيْرِيُّ النَّيْسَابُورِيُّ [رقم:1907] رَضِيَ اللهُ عَنْهُمَا فِي \"صَحِيحَيْهِمَا\" اللذَينِ هُمَا أَصَحُّ الْكُتُبِ الْمُصَنَّفَةِ",
    "english": "It is narrated on the authority of Amirul Mu'minin, Abu Hafs 'Umar bin al-Khattab (ra) who said: I heard the Messenger of Allah (ﷺ) say: \"Actions are (judged) by motives (niyyah), so each man will have what he intended. Thus, he whose migration (hijrah) was to Allah and His Messenger, his migration is to Allah and His Messenger; but he whose migration was for some worldly thing he might gain, or for a wife he might marry, his migration is to that for which he migrated.\" [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-2",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 2,
    "arabic": "عَنْ عُمَرَ رَضِيَ اللهُ عَنْهُ أَيْضًا قَالَ: بَيْنَمَا نَحْنُ جُلُوسٌ عِنْدَ رَسُولِ اللَّهِ صلى الله عليه و سلم ذَاتَ يَوْمٍ، إذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعْرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ. حَتَّى جَلَسَ إلَى النَّبِيِّ صلى الله عليه و سلم . فَأَسْنَدَ رُكْبَتَيْهِ إلَى رُكْبَتَيْهِ، وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ، وَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنْ الْإِسْلَامِ. فَقَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَتُقِيمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُومَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إنْ اسْتَطَعْت إلَيْهِ سَبِيلًا. قَالَ: صَدَقْت . فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ! قَالَ: فَأَخْبِرْنِي عَنْ الْإِيمَانِ. قَالَ: أَنْ تُؤْمِنَ بِاَللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْت. قَالَ: فَأَخْبِرْنِي عَنْ الْإِحْسَانِ. قَالَ: أَنْ تَعْبُدَ اللَّهَ كَأَنَّك تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاك. قَالَ: فَأَخْبِرْنِي عَنْ السَّاعَةِ. قَالَ: مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنْ السَّائِلِ. قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا؟ قَالَ: أَنْ تَلِدَ الْأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ. ثُمَّ انْطَلَقَ، فَلَبِثْتُ مَلِيًّا، ثُمَّ قَالَ: يَا عُمَرُ أَتَدْرِي مَنْ السَّائِلُ؟. ‫‬قُلْتُ: اللَّهُ وَرَسُولُهُ أَعْلَمُ. قَالَ: فَإِنَّهُ جِبْرِيلُ أَتَاكُمْ يُعَلِّمُكُمْ دِينَكُمْ . [رَوَاهُ مُسْلِمٌ]",
    "english": "Also on the authority of `Umar (ra) who said: While we were one day sitting with the Messenger of Allah (ﷺ) there appeared before us a man dressed in extremely white clothes and with very black hair. No traces of journeying were visible on him, and none of us knew him. He sat down close by the Prophet (ﷺ) rested his knees against the knees of the Prophet (ﷺ) and placed his palms over his thighs, and said: \"O Muhammad! Inform me about Islam.\" The Messenger of Allah (ﷺ) replied: \"Islam is that you should testify that there is no deity worthy of worship except Allah and that Muhammad is His Messenger (ﷺ), that you should perform salah (ritual prayer), pay the zakah, fast during Ramadan, and perform Hajj (pilgrimage) to the House (the Ka`bah at Makkah), if you can find a way to it (or find the means for making the journey to it).\" He said: \"You have spoken the truth.\" We were astonished at his thus questioning him (ﷺ) and then telling him that he was right, but he went on to say, \"Inform me about Iman (faith).\" He (the Prophet) answered, \"It is that you believe in Allah and His angels and His Books and His Messengers and in the Last Day, and in fate (qadar), both in its good and in its evil aspects.\" He said, \"You have spoken the truth.\" Then he (the man) said, \"Inform me about Ihsan.\" He (the Prophet) answered, \"It is that you should serve Allah as though you could see Him, for though you cannot see Him yet He sees you.\" He said, \"Inform me about the Hour.\" He (the Prophet) said, \"About that the one questioned knows no more than the questioner.\" So he said, \"Well, inform me about its signs.\" He said, \"They are that the slave-girl will give birth to her mistress and that you will see the barefooted ones, the naked, the destitute, the herdsmen of the sheep (competing with each other) in raising lofty buildings.\" Thereupon the man went off. I waited a while, and then he (the Prophet) said, \"O `Umar, do you know who that questioner was?\" I replied, \"Allah and His Messenger know better.\" He said, \"That was Jibril. He came to teach you your religion.\" [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-3",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 3,
    "arabic": "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلَاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ . [رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Abdullah, the son of Umar ibn al-Khattab (ra), who said: I heard the Messenger of Allah (ﷺ) say, \"Islam has been built on five [pillars]: testifying that there is no deity worthy of worship except Allah and that Muhammad is the Messenger of Allah, establishing the salah (prayer), paying the zakat (obligatory charity), making the hajj (pilgrimage) to the House, and fasting in Ramadhan.\" [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-4",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 4,
    "arabic": "عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ رَضِيَ اللهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُولُ اللَّهِ صلى الله عليه و سلم -وَهُوَ الصَّادِقُ الْمَصْدُوقُ-: إنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا نُطْفَةً، ثُمَّ يَكُونُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُونُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيهِ الرُّوحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٍّ أَمْ سَعِيدٍ؛ فَوَاَللَّهِ الَّذِي لَا إلَهَ غَيْرُهُ إنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إلَّا ذِرَاعٌ فَيَسْبِقُ عَلَيْهِ الْكِتَابُ فَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ فَيَدْخُلُهَا. وَإِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إلَّا ذِرَاعٌ فَيَسْبِقُ عَلَيْهِ الْكِتَابُ فَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ فَيَدْخُلُهَا . [رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Abdullah ibn Masood (ra), who said: The Messenger of Allah (ﷺ), and he is the truthful, the believed, narrated to us, “Verily the creation of each one of you is brought together in his mother’s womb for forty days in the form of a nutfah (a drop), then he becomes an alaqah (clot of blood) for a like period, then a mudghah (morsel of flesh) for a like period, then there is sent to him the angel who blows his soul into him and who is commanded with four matters: to write down his rizq (sustenance), his life span, his actions, and whether he will be happy or unhappy (i.e., whether or not he will enter Paradise). By the One, other than Whom there is no deity, verily one of you performs the actions of the people of Paradise until there is but an arms length between him and it, and that which has been written overtakes him, and so he acts with the actions of the people of the Hellfire and thus enters it; and verily one of you performs the actions of the people of the Hellfire, until there is but an arms length between him and it, and that which has been written overtakes him and so he acts with the actions of the people of Paradise and thus he enters it.” [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-5",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 5,
    "arabic": "عَنْ أُمِّ الْمُؤْمِنِينَ أُمِّ عَبْدِ اللَّهِ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا، قَالَتْ: قَالَ: رَسُولُ اللَّهِ صلى الله عليه و سلم مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ [رَوَاهُ الْبُخَارِيُّ] ،[وَمُسْلِمٌ] وَفِي رِوَايَةٍ لِمُسْلِمٍ: مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ",
    "english": "On the authority of the mother of the faithful, Aisha (ra), who said: The Messenger of Allah (ﷺ) said, “He who innovates something in this matter of ours (i.e., Islam) that is not of it will have it rejected (by Allah).” [Bukhari & Muslim] In another version in Muslim it reads: “He who does an act which we have not commanded, will have it rejected (by Allah).”",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-6",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 6,
    "arabic": "عَنْ أَبِي عَبْدِ اللَّهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا، قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: إنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنْ النَّاسِ، فَمَنْ اتَّقَى الشُّبُهَاتِ فَقْد اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ، أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللَّهِ مَحَارِمُهُ، أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ .\n[رَوَاهُ الْبُخَارِيُّ]، [وَمُسْلِمٌ]",
    "english": "On the authority of an-Nu’man ibn Basheer (ra), who said: I heard the Messenger of Allah (ﷺ) say, “That which is lawful is clear and that which is unlawful is clear, and between the two of them are doubtful matters about which many people do not know. Thus he who avoids doubtful matters clears himself in regard to his religion and his honor, but he who falls into doubtful matters [eventually] falls into that which is unlawful, like the shepherd who pastures around a sanctuary, all but grazing therein. Truly every king has a sanctuary, and truly Allah’s sanctuary is His prohibitions. Truly in the body there is a morsel of flesh, which, if it be whole, all the body is whole, and which, if it is diseased, all of [the body] is diseased. Truly, it is the heart.” [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-7",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 7,
    "arabic": "عَنْ أَبِي رُقَيَّةَ تَمِيمِ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللهُ عَنْهُ أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ: \"الدِّينُ النَّصِيحَةُ.\" قُلْنَا: لِمَنْ؟ قَالَ: \"لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ.\" [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Tameem ibn Aus ad-Daree (ra): The Prophet (ﷺ) said, “The deen (religion) is naseehah (advice, sincerity).” We said, “To whom?” He (ﷺ) said, “To Allah, His Book, His Messenger, and to the leaders of the Muslims and their common folk.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-8",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 8,
    "arabic": "عَنْ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ؛ فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى .\n[رَوَاهُ الْبُخَارِيُّ] ،[وَمُسْلِمٌ]",
    "english": "On the authority of Abdullah ibn Umar (ra): The Messenger of Allah (ﷺ) said, \"I have been ordered to fight against the people until they testify that there is none worthy of worship except Allah and that Muhammad is the Messenger of Allah, and until they establish the salah and pay the zakat. And if they do that then they will have gained protection from me for their lives and property, unless [they commit acts that are punishable] in Islam, and their reckoning will be with Allah.\" [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-9",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 9,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ .\n[رَوَاهُ الْبُخَارِيُّ] ،[وَمُسْلِمٌ]",
    "english": "On the authority of Abu Hurayrah (ra): I heard the Messenger of Allah (ﷺ) say, “What I have forbidden for you, avoid. What I have ordered you [to do], do as much of it as you can. For verily, it was only the excessive questioning and their disagreeing with their Prophets that destroyed [the nations] who were before you.” [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-10",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 10,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم \"إنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إلَّا طَيِّبًا، وَإِنَّ اللَّهَ أَمَرَ الْمُؤْمِنِينَ بِمَا أَمَرَ بِهِ الْمُرْسَلِينَ فَقَالَ تَعَالَى: \"يَا أَيُّهَا الرُّسُلُ كُلُوا مِنْ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا\"، وَقَالَ تَعَالَى: \"يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ\" ثُمَّ ذَكَرَ الرَّجُلَ يُطِيلُ السَّفَرَ أَشْعَثَ أَغْبَرَ يَمُدُّ يَدَيْهِ إلَى السَّمَاءِ: يَا رَبِّ! يَا رَبِّ! وَمَطْعَمُهُ حَرَامٌ، وَمَشْرَبُهُ حَرَامٌ، وَمَلْبَسُهُ حَرَامٌ، وَغُذِّيَ بِالْحَرَامِ، فَأَنَّى يُسْتَجَابُ لَهُ؟\". [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Hurayrah (ra): The Messenger of Allah (ﷺ) said, “Allah the Almighty is Good and accepts only that which is good. And verily Allah has commanded the believers to do that which He has commanded the Messengers. So the Almighty has said: “O (you) Messengers! Eat of the tayyibat [all kinds of halal (legal) foods], and perform righteous deeds.” [23:51] and the Almighty has said: “O you who believe! Eat of the lawful things that We have provided you.” [2:172]” Then he (ﷺ) mentioned [the case] of a man who, having journeyed far, is disheveled and dusty, and who spreads out his hands to the sky saying “O Lord! O Lord!,” while his food is haram (unlawful), his drink is haram, his clothing is haram, and he has been nourished with haram, so how can [his supplication] be answered? [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-1",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 1,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَمَّا قَضَى اللَّهُ الْخَلْقَ، كَتَبَ فِي كِتَابِهِ عَلَى نَفْسِهِ، فَهُوَ مَوْضُوعٌ عِنْدَهُ: إِنَّ رَحْمَتِي تَغْلِبُ غَضَبِي رواه مسلم (وكذلك البخاري والنسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: When Allah decreed the Creation He pledged Himself by writing in His book which is laid down with Him: My mercy prevails over my wrath. It was related by Muslim (also by al-Bukhari, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-2",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 2,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: قَالَ اللَّهُ تَعَالَى: كَذَّبَنِي ابْنُ آدَمَ وَلَمْ يَكُنْ لَهُ ذَلِكَ، وَشَتَمَنِي وَلَمْ يَكُنْ لَهُ ذَلِكَ، فَأَمَّا تَكْذِيبُهُ إِيَّايَ فَقَوْلُهُ: لَنْ يُعِيدَنِي كَمَا بَدَأَنِي، وَلَيْسَ أَوَّلُ الْخَلْقِ بِأَهْوَنَ عَلَيَّ مِنْ إِعَادَتِهِ، وَأَمَّا شَتْمُهُ إِيَّايَ فَقَوْلُهُ: اتَّخَذَ اللَّهُ وَلَدًا، وَأَنَا الْأَحَدُ الصَّمَدُ، لَمْ أَلِدْ وَلَمْ أُولَدْ، وَلَمْ يَكُنْ لِي كُفُوًا أَحَدٌ رواه البخاري (وكذلك النسائي)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah Almighty has said: The son of Adam denied Me and he had no right to do so. And he reviled Me and he had no right to do so. As for his denying Me, it is his saying: He will not remake me as He made me at first (1) - and the initial creation [of him] is no easier for Me than remaking him. As for his reviling Me, it is his saying: Allah has taken to Himself a son, while I am the One, the Everlasting Refuge. I begot not nor was I begotten, and there is none comparable to Me.(1) i.e., bring me back to life after death. It was related by al-Bukhari (also by an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-3",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 3,
    "arabic": "عَنْ زَيْدِ بْنِ خَالِدٍ الْجُهَنِيِّ، رَضِيَ اللَّهُ عَنْهُ قَالَ: \"صَلَّى لَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلَاةَ الصُّبْحِ بِالْحُدَيْبِيَةِ، عَلَى إِثْرِ سَمَاءٍ (1) كَانَتْ مِنْ اللَّيْلَةِ، فَلَمَّا انْصَرَفَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَقْبَلَ عَلَى النَّاسِ، فَقَالَ لَهُمْ: \"هَلْ تَدْرُونَ مَاذَا قَالَ رَبُّكُمْ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ، قَالَ: أَصْبَحَ مِنْ عِبَادِي مُؤْمِنٌ بِي وَكَافِرٌ، فَأَمَّا مَنْ قَالَ: مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ، فَذَلِكَ مُؤْمِنٌ بِي، كَافِرٌ بِالْكَوْكَبِ، وَأَمَّا مَنْ قَالَ: مُطِرْنَا بِنَوْءِ(1) كَذَا وَكَذَا، فَذَلِكَ كَافِرٌ بِي، مُؤْمِنٌ بِالْكَوْكَبِ\"\nرواه البخاري (وكذلك مالك والنسائي)",
    "english": "On the authority of Zayd ibn Khalid al-Juhaniyy (may Allah be pleased with him), who said: The Messenger of Allah (ﷺ) led the morning prayer for us at al-Hudaybiyah following rainfall during the night. When the Prophet (ﷺ) finished, he faced the people and said to them: Do you know what your Lord has said? They said: Allah and his Messenger know best. He said: This morning one of my servants became a believer in Me and one a disbeliever. As for him who said: We have been given rain by virtue of Allah and His mercy, that one is a believer in Me, a disbeliever in the stars (2); and as for him who said: We have been given rain by such-and-such a star, that one is a disbeliever in Me, a believer in the stars. (2) The pre-Islamic Arabs believed that rain was brought about by the movement of stars. This Hadith draws attention to the fact that whatever be the direct cause of such natural phenomena as rain, it is Allah the Almighty who is the Disposer of all things. It was related by al-Bukhari (also by Malik and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-4",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 4,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: قَالَ اللَّهُ: يَسُبُّ بَنُو آدَمَ الدَّهْرَ، وَأَنَا الدَّهْرُ، بِيَدِي اللَّيْلُ وَالنَّهَارُ رواه البخاري (وكذلك مسلم)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah said: Sons of Adam inveigh against [the vicissitudes of] Time, and I am Time, in My hand is the night and the day (1). (1) As the Almighty is the Ordainer of all things, to inveigh against misfortunes that are part of Time is tantamount to inveighing against Him. It was related by al-Bukhari (also by Muslim)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-5",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 5,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: قَالَ اللَّهُ تَبَارَكَ وَتَعَالَى: أَنَا أَغْنَى الشُّرَكَاءِ عَنْ الشِّرْكِ؛ مَنْ عَمِلَ عَمَلًا أَشْرَكَ مَعِي غَيْرِي(1)، تَرَكْتُهُ وَشِرْكَهُ .\nرواه مسلم (وكذلك ابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (glorified and exalted be He) said: I am so self-sufficient that I am in no need of having an associate. Thus he who does an action for someone else's sake as well as Mine will have that action renounced by Me to him whom he associated with Me. It was related by Muslim (also by Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-6",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 6,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ أَوَّلَ النَّاسِ يُقْضَى يَوْمَ الْقِيَامَةِ عَلَيْهِ رَجُلٌ اسْتُشْهِدَ، فَأُتِيَ بِهِ فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ قَاتَلْتُ فِيكَ حَتَّى اسْتُشْهِدْتُ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ قَاتَلْتَ لِأَنْ يُقَالَ: جَرِيءٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ فَسُحِبَ عَلَى وَجْهِهِ حَتَّى أُلْقِيَ فِي النَّارِ. وَرَجُلٌ تَعَلَّمَ الْعِلْمَ وَعَلَّمَهُ وَقَرَأَ الْقُرْآنَ، فَأُتِيَ بِهِ، فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ: تَعَلَّمْتُ الْعِلْمَ وَعَلَّمْتُهُ، وَقَرَأْتُ فِيكَ الْقُرْآنَ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ تَعَلَّمْتَ الْعِلْمَ لِيُقَالَ: عَالِمٌ، وَقَرَأْتَ الْقُرْآنَ لِيُقَالَ: هُوَ قَارِئٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ، فَسُحِبَ عَلَى وَجْهِهِ حَتَّى أُلْقِيَ فِي النَّارِ. وَرَجُلٌ وَسَّعَ اللَّهُ عَلَيْهِ، وَأَعْطَاهُ مِنْ أَصْنَافِ الْمَالِ كُلِّهِ، فَأُتِيَ بِهِ، فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ: مَا تَرَكْتُ مِنْ سَبِيلٍ تُحِبُّ أَنْ يُنْفَقَ فِيهَا إِلَّا أَنْفَقْتُ فِيهَا لَكَ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ فَعَلْتَ لِيُقَالَ: هُوَ جَوَادٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ فَسُحِبَ عَلَى وَجْهِهِ، ثُمَّ أُلْقِيَ فِي النَّارِ .\nرواه مسلم (وكذلك الترمذي والنسائي)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said: I heard the Messenger of Allah (ﷺ) say: The first of people against whom judgment will be pronounced on the Day of Resurrection will be a man who died a martyr. He will be brought and Allah will make known to him His favours and he will recognize them. [ The Almighty] will say: And what did you do about them? He will say: I fought for you until I died a martyr. He will say: You have lied - you did but fight that it might be said [of you]: He is courageous. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. [Another] will be a man who has studied [religious] knowledge and has taught it and who used to recite the Quran. He will be brought and Allah will make known to him His favours and he will recognize them. [The Almighty] will say: And what did you do about them? He will say: I studied [religious] knowledge and I taught it and I recited the Quran for Your sake. He will say: You have lied - you did but study [religious] knowledge that it might be said [of you]: He is learned. And you recited the Quran that it might be said [of you]: He is a reciter. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. [Another] will be a man whom Allah had made rich and to whom He had given all kinds of wealth. He will be brought and Allah will make known to him His favours and he will recognize them. [The Almighty] will say: And what did you do about them? He will say: I left no path [untrodden] in which You like money to be spent without spending in it for Your sake. He will say: You have lied - you did but do so that it might be said [of you]: He is open-handed. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. It was related by Muslim (also by at-Tirmidhi and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-7",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 7,
    "arabic": "عَنْ عُقْبَةَ بْنِ عَامِرٍ، رَضِيَ اللَّهُ عَنْهُ، قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: يَعْجَبُ رَبُّكَ مِنْ رَاعِي غَنَمٍ، فِي رَأْسِ شَظِيَّةِ الْجَبَلِ(1)، يُؤَذِّنُ بِالصَّلَاةِ وَيُصَلِّي، فَيَقُولُ اللَّهُ، عَزَّ وَجَلَّ: انْظُرُوا إِلَى عَبْدِي هَذَا، يُؤَذِّنُ وَيُقِيمُ الصَّلَاةَ، يَخَافُ مِنِّي، قَدْ غَفَرْتُ لِعَبْدِي، وَأَدْخَلْتُهُ الْجَنَّةَ .\nرواه النسائي بسند صحيح",
    "english": "On the authority of Uqbah ibn Amir (may Allah be pleased with him), who said: I heard the messenger of Allah (ﷺ) say: Your Lord delights at a shepherd who, on the peak of a mountain crag, gives the call to prayer and prays. Then Allah (glorified and exalted be He) say: Look at this servant of Mine, he gives the call to prayer and performs the prayers; he is in awe of Me. I have forgiven My servant [his sins] and have admitted him to Paradise. It was related by an-Nasa'i with a good chain of authorities",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-8",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 8,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ صَلَّى صَلَاةً لَمْ يَقْرَأْ فِيهَا بِأُمِّ الْقُرْآنِ، فَهِيَ خِدَاجٌ(1) ثَلَاثًا، غَيْرَ تَمَامٍ، فَقِيلَ لِأَبِي هُرَيْرَةَ: إِنَّا نَكُونُ وَرَاءَ الْإِمَامِ، فَقَالَ: اقْرَأْ بِهَا فِي نَفْسِكَ، فَإِنِّي سَمِعْتُ النبي صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: قَالَ اللَّهُ عَزَّ وَجَلَّ: قَسَمْتُ الصَّلَاةَ بَيْنِي وَبَيْنَ عَبْدِي نِصْفَيْنِ، وَلِعَبْدِي مَا سَأَلَ، فَإِذَا قَالَ الْعَبْدُ:{ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ } قَالَ اللَّهُ عَزَّ وَجَلَّ: حَمِدَنِي عَبْدِي، وَإِذَا قَالَ:{ الرَّحْمَنِ الرَّحِيمِ } قَالَ اللَّهُ عَزَّ وَجَلَّ: أَثْنَى عَلَيَّ عَبْدِي، وَإِذَا قَالَ:{ مَالِكِ يَوْمِ الدِّينِ } قَالَ اللَّهُ: مَجَّدَنِي عَبْدِي - وَقَالَ مَرَّةً: فَوَّضَ إِلَيَّ عَبْدِي، فَإِذَا قَالَ:{ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ } قَالَ: هَذَا بَيْنِي وَبَيْنَ عَبْدِي وَلِعَبْدِي مَا سَأَلَ، فَإِذَا قَالَ:{ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ } قَالَ: هَذَا لِعَبْدِي وَلِعَبْدِي مَا سَأَلَ .\nرواه مسلم (وكذلك مالك والترمذي وأبو داود والنسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: A prayer performed by someone who has not recited the Essence of the Quran (1) during it is deficient (and he repeated the word three times), incomplete. Someone said to Abu Hurayrah: [Even though] we are behind the imam? (2) He said: Recite it to yourself, for I have heard the Prophet (may the blessings and peace of Allah be up on him) say: Allah (mighty and sublime be He), had said: I have divided prayer between Myself and My servant into two halves, and My servant shall have what he has asked for. When the servant says: Al-hamdu lillahi rabbi l-alamin (3), Allah (mighty and sublime be He) says: My servant has praised Me. And when he says: Ar-rahmani r-rahim (4), Allah (mighty and sublime be He) says: My servant has extolled Me, and when he says: Maliki yawmi d-din (5), Allah says: My servant has glorified Me - and on one occasion He said: My servant has submitted to My power. And when he says: Iyyaka na budu wa iyyaka nasta in (6), He says: This is between Me and My servant, and My servant shall have what he has asked for. And when he says: Ihdina s-sirata l- mustaqim, siratal ladhina an amta alayhim ghayril-maghdubi alayhim wa la d-dallin (7), He says: This is for My servant, and My servant shall have what he has asked for. (1) Surat al-Fatihah, the first surah (chapter) of the Qur'an. (2) i.e. standing behind the imam (leader) listening to him reciting al-Fatihah. (3) \"Praise be to Allah, Lord of the Worlds.\" (4) \"The Merciful, the Compassionate\". (5) \"Master of the Day of Judgement\". (6) \"It is You we worship and it is You we ask for help\". (7) \"Guide us to the straight path, the path of those upon whom You have bestowed favors, not of those against whom You are angry, nor of those who are astray\". It was related by Muslim (also by Malik, at-Tirmidhi, Abu-Dawud, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-9",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 9,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ. فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ، فَإِنْ انْتَقَصَ مِنْ فَرِيضَتِهِ شَيْءٌ، قَالَ الرَّبُّ عَزَّ وَجَلَّ: انْظُرُوا هَلْ لِعَبْدِي مِنْ تَطَوُّعٍ فَيُكَمَّلَ بِهَا مَا انْتَقَصَ مِنْ الْفَرِيضَةِ، ثُمَّ يَكُونُ سَائِرُ عَمَلِهِ عَلَى ذَلِكَ .\nرواه الترمذي(1) وكذلك أبو داود والنسائي وابن ماجه وأحمد",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (mighty and sublime be He) says: The first of his actions for which a servant of Allah will be held accountable on the Day of Resurrection will be his prayers. If they are in order, then he will have prospered and succeeded: and if they are wanting, then he will have failed and lost. If there is something defective in his obligatory prayers, the Lord (glorified and exalted be He) will say: See if My servant has any supererogatory prayers with which may be completed that which was defective in his obligatory prayers. Then the rest of his actions will be judged in like fashion. It was related by at-Tirmidhi (also by Abu Dawud, an-Nasa'i, Ibn Majah and Ahmad)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-10",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 10,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: يَقُولُ اللَّهُ عَزَّ وَجَلَّ: الصَّوْمُ لِي، وَأَنَا أَجْزِي بِهِ، يَدَعُ شَهْوَتَهُ وَأَكْلَهُ وَشُرْبَهُ مِنْ أَجْلِي، وَالصَّوْمُ جُنَّةٌ(1)، وَلِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ حِينَ يُفْطِرُ، وَفَرْحَةٌ حِينَ يَلْقَى رَبَّهُ، وَلَخُلُوفُ(2) فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ .\nرواه البخاري (وكذلك مسلم ومالك والترمذي النسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (mighty and sublime be He) says: Fasting is Mine and it is I who give reward for it. [A man] gives up his sexual passion, his food and his drink for my sake. Fasting is like a shield, and he who fasts has two joys: a joy when he breaks his fast and a joy when he meets his Lord. The change in the breath of the mouth of him who fasts is better in Allah's estimation than the smell of musk. It was related by al-Bukhari (also by Muslim, Malik, at-Tirmidhi, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-1",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 1,
    "arabic": "لَیْسَ الْخَبَرُ کَالْمُعَایَنَةِ",
    "english": "The report is not like witnessing",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-2",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 2,
    "arabic": "الْحَرْبُ خُدَعَةٌ",
    "english": "War is deception",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-3",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 3,
    "arabic": "الْمُسْلِمُ مِرْآةُ الْمُسْلِمِ",
    "english": "A Muslim is a mirror of the Muslim",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-4",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 4,
    "arabic": "الْمُسْتَشَارُ مُؤتَمَنٌ",
    "english": "Someone whose advice is sought is in a position of trust",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-5",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 5,
    "arabic": "الدَّالُّ عَلَی الْخَیْرِ کَفَاعِلِهِ",
    "english": "The person guiding (someone) to do a good deed, is like the one performing the good deed",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-6",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 6,
    "arabic": "إِسْتَعِیْنُوْا عَلَی الْحَوَائِجِ بِالْکِتْمَانِ",
    "english": "Seek help for any needs discreetly",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-7",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 7,
    "arabic": "إِتَّقُوْا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ",
    "english": "Protect yourself from the fire even with a part of a date",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-8",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 8,
    "arabic": "الدُّنْیَا سِجْنُ الْمُؤمِنِ وَ جَنَّةُ الْکَافِرِ",
    "english": "The world is the believer’s prison and the disbeliever’s paradise",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-9",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 9,
    "arabic": "الْحَیَاءُ خَیْرٌ کُلُّهُ",
    "english": "Modesty is entirely good",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-10",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 10,
    "arabic": "عِدَةُ الْمُؤمِنِ کَاَخْذِ الْکَفِّ",
    "english": "The word of the believer is like seizing of the hand",
    "grade": "Hasan/Sahih"
  }
];
