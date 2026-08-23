// ============================================================================
// HadithData.js — 10 Hadith Collections Metadata & Bundled Authentic Hadiths
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
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ، عَنْ هِشَامِ بْنِ عُرْوَةَ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ ـ رضى الله عنها ـ أَنَّ الْحَارِثَ بْنَ هِشَامٍ ـ رضى الله عنه ـ سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ كَيْفَ يَأْتِيكَ الْوَحْىُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ أَحْيَانًا يَأْتِينِي مِثْلَ صَلْصَلَةِ الْجَرَسِ ـ وَهُوَ أَشَدُّهُ عَلَىَّ ـ فَيُفْصَم�� عَنِّي وَقَدْ وَعَيْتُ عَنْهُ مَا قَالَ، وَأَحْيَانًا يَتَمَثَّلُ لِيَ الْمَلَكُ رَجُلاً فَيُكَلِّمُنِي فَأَعِي مَا يَقُولُ ‏\"‏‏.‏ قَالَتْ عَائِشَةُ رضى الله عنها وَلَقَدْ رَأَيْتُهُ يَنْزِلُ عَلَيْهِ الْوَحْىُ فِي الْيَوْمِ الشَّدِيدِ الْبَرْدِ، فَيَفْصِمُ عَنْهُ وَإِنَّ جَبِينَهُ لَيَتَفَصَّدُ عَرَقًا‏.‏",
    "english": "Narrated 'Aisha: (the mother of the faithful believers) Al-Harith bin Hisham asked Allah's Messenger (ﷺ) \"O Allah's Messenger (ﷺ)! How is the Divine Inspiration revealed to you?\" Allah's Messenger (ﷺ) replied, \"Sometimes it is (revealed) like the ringing of a bell, this form of Inspiration is the hardest of all and then this state passes off after I have grasped what is inspired. Sometimes the Angel comes in the form of a man and talks to me and I grasp whatever he says.\" 'Aisha added: Verily I saw the Prophet (ﷺ) being inspired divinely on a very cold day and noticed the sweat dropping from his forehead (as the Inspiration was over)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-3",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا يَحْيَى بْنُ بُكَيْرٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ عُقَيْلٍ، عَنِ ابْنِ شِهَابٍ، عَنْ عُرْوَةَ بْنِ الزُّبَيْرِ، عَنْ عَائِشَةَ أُمِّ الْمُؤْمِنِينَ، أَنَّهَا قَالَتْ أَوَّلُ مَا بُدِئَ بِهِ رَسُولُ اللَّهِ صلى الله عليه وسلم مِنَ الْوَحْىِ الرُّؤْيَا الصَّالِحَةُ فِي النَّوْمِ، فَكَانَ لاَ يَرَى رُؤْيَا إِلاَّ جَاءَتْ مِثْلَ فَلَقِ الصُّبْحِ، ثُمَّ حُبِّبَ إِلَيْهِ الْخَلاَءُ، وَكَانَ يَخْلُو بِغَارِ حِرَاءٍ فَيَتَحَنَّثُ فِيهِ ـ وَهُوَ التَّعَبُّدُ ـ اللَّيَالِيَ ذَوَاتِ الْعَدَدِ قَبْلَ أَنْ يَنْزِعَ إِلَى أَهْلِهِ، وَيَتَزَوَّدُ لِذَلِكَ، ثُمَّ يَرْجِعُ إِلَى خَدِيجَةَ، فَيَتَزَوَّدُ لِمِثْلِهَا، حَتَّى جَاءَهُ الْحَقُّ وَهُوَ فِي غَارِ حِرَاءٍ، فَجَاءَهُ الْمَلَكُ فَقَالَ اقْرَأْ‏.‏ قَالَ ‏\"‏ مَا أَنَا بِقَارِئٍ ‏\"‏‏.‏ قَالَ ‏\"‏ فَأَخَذَنِي فَغَطَّنِي حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ قُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّانِيَةَ حَتَّى بَلَغَ مِنِّي الْجَهْدَ، ثُمَّ أَرْسَلَنِي فَقَالَ اقْرَأْ‏.‏ فَقُلْتُ مَا أَنَا بِقَارِئٍ‏.‏ فَأَخَذَنِي فَغَطَّنِي الثَّالِثَةَ، ثُمَّ أَرْسَلَنِي فَقَالَ ‏{‏اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ * خَلَقَ الإِنْسَانَ مِنْ عَلَقٍ * اقْرَأْ وَرَبُّكَ الأَكْرَمُ‏}‏ ‏\"‏‏.‏ فَرَجَعَ بِهَا رَسُولُ اللَّهِ صلى الله عليه وسلم يَرْجُفُ فُؤَادُهُ، فَدَخَلَ عَلَى خَدِيجَةَ بِنْتِ خُوَيْلِدٍ رضى الله عنها فَقَالَ ‏\"‏ زَمِّلُونِي زَمِّلُونِي ‏\"‏‏.‏ فَزَمَّلُوهُ حَتَّى ذَهَبَ عَنْهُ الرَّوْعُ، فَقَالَ لِخَدِيجَةَ وَأَخْبَرَهَا الْخَبَرَ ‏\"‏ لَقَدْ خَشِيتُ عَلَى نَفْسِي ‏\"‏‏.‏ فَقَالَتْ خَدِيجَةُ كَلاَّ وَاللَّهِ مَا يُخْزِيكَ اللَّهُ أَبَدًا، إِنَّكَ لَتَصِلُ الرَّحِمَ، وَتَحْمِلُ الْكَلَّ، وَتَكْسِبُ الْمَعْدُومَ، وَتَقْرِي الضَّيْفَ، وَتُعِينُ عَلَى نَوَائِبِ الْحَقِّ‏.‏ فَانْطَلَقَتْ بِهِ خَدِيجَةُ حَتَّى أَتَتْ بِهِ وَرَقَةَ بْنَ نَوْفَلِ بْنِ أَسَدِ بْنِ عَبْدِ الْعُزَّى ابْنَ عَمِّ خَدِيجَةَ ـ وَكَانَ امْرَأً تَنَصَّرَ فِي الْجَاهِلِيَّةِ، وَكَانَ يَكْتُبُ الْكِتَابَ الْعِبْرَانِيَّ، فَيَكْتُبُ مِنَ الإِنْجِيلِ بِالْعِبْرَانِيَّةِ مَا شَاءَ اللَّهُ أَنْ يَكْتُبَ، وَكَانَ شَيْخًا كَبِيرًا قَدْ عَمِيَ ـ فَقَالَتْ لَهُ خَدِيجَةُ يَا ابْنَ عَمِّ اسْمَعْ مِنَ ابْنِ أَخِيكَ‏.‏ فَقَالَ لَهُ وَرَقَةُ يَا ابْنَ أَخِي مَاذَا تَرَى فَأَخْبَ��َهُ رَسُولُ اللَّهِ صلى الله عليه وسلم خَبَرَ مَا رَأَى‏.‏ فَقَالَ لَهُ وَرَقَةُ هَذَا النَّامُوسُ الَّذِي نَزَّلَ اللَّهُ عَلَى مُوسَى صلى الله عليه وسلم يَا لَيْتَنِي فِيهَا جَذَعًا، لَيْتَنِي أَكُونُ حَيًّا إِذْ يُخْرِجُكَ قَوْمُكَ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ أَوَمُخْرِجِيَّ هُمْ ‏\"‏‏.‏ قَالَ نَعَمْ، لَمْ يَأْتِ رَجُلٌ قَطُّ بِمِثْلِ مَا جِئْتَ بِهِ إِلاَّ عُودِيَ، وَإِنْ يُدْرِكْنِي يَوْمُكَ أَنْصُرْكَ نَصْرًا مُؤَزَّرًا‏.‏ ثُمَّ لَمْ يَنْشَبْ وَرَقَةُ أَنْ تُوُفِّيَ وَفَتَرَ الْوَحْىُ‏.‏",
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
    "arabic": "حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، قَالَ حَدَّثَنَا أَبُو عَوَانَةَ، قَالَ حَدَّثَنَا مُوسَى بْنُ أَبِي عَائِشَةَ، قَالَ حَدَّثَنَا سَعِيدُ بْنُ جُبَيْرٍ، عَنِ ابْنِ عَبَّاسٍ، فِي قَوْلِهِ تَعَالَى ‏{‏لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَل�� بِهِ‏}‏ قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُعَالِجُ مِنَ التَّنْزِيلِ شِدَّةً، وَكَانَ مِمَّا يُحَرِّكُ شَفَتَيْهِ ـ فَقَالَ ابْنُ عَبَّاسٍ فَأَنَا أُحَرِّكُهُمَا لَكُمْ كَمَا كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يُحَرِّكُهُمَا‏.‏ وَقَالَ سَعِيدٌ أَنَا أُحَرِّكُهُمَا كَمَا رَأَيْتُ ابْنَ عَبَّاسٍ يُحَرِّكُهُمَا‏.‏ فَحَرَّكَ شَفَتَيْهِ ـ فَأَنْزَلَ اللَّهُ تَعَالَى ‏{‏لاَ تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ* إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ‏}‏ قَالَ جَمْعُهُ لَهُ فِي صَدْرِكَ، وَتَقْرَأَهُ ‏{‏فَإِذَا قَرَأْنَاهُ فَاتَّبِعْ قُرْآنَهُ‏}‏ قَالَ فَاسْتَمِعْ لَهُ وَأَنْصِتْ ‏{‏ثُمَّ إِنَّ عَلَيْنَا بَيَانَهُ‏}‏ ثُمَّ إِنَّ عَلَيْنَا أَنْ تَقْرَأَهُ‏.‏ فَكَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم بَعْدَ ذَلِكَ إِذَا أَتَاهُ جِبْرِيلُ اسْتَمَعَ، فَإِذَا انْطَلَقَ جِبْرِيلُ قَرَأَهُ النَّبِيُّ صلى الله عليه وسلم كَمَا قَرَأَهُ‏.‏",
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
    "arabic": "حَدَّثَنَا أَبُو الْيَمَانِ الْحَكَمُ بْنُ نَافِعٍ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي عُبَيْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ عُتْبَةَ بْنِ مَسْعُودٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عَبَّاسٍ، أَخْبَرَهُ أَنَّ أَبَا سُفْيَانَ بْنَ حَرْبٍ أَخْبَرَهُ أَنَّ هِرَقْلَ أَرْسَلَ إِلَيْهِ فِي رَكْبٍ مِنْ قُرَيْشٍ ـ وَكَانُوا تُ��َّارًا بِالشَّأْمِ ـ فِي الْمُدَّةِ الَّتِي كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم مَادَّ فِيهَا أَبَا سُفْيَانَ وَكُفَّارَ قُرَيْشٍ، فَأَتَوْهُ وَهُمْ بِإِيلِيَاءَ فَدَعَاهُمْ فِي مَجْلِسِهِ، وَحَوْلَهُ عُظَمَاءُ الرُّومِ ثُمَّ دَعَاهُمْ وَدَعَا بِتَرْجُمَانِهِ فَقَالَ أَيُّكُمْ أَقْرَبُ نَسَبًا بِهَذَا الرَّجُلِ الَّذِي يَزْعُمُ أَنَّهُ نَبِيٌّ فَقَالَ أَبُو سُفْيَانَ فَقُلْتُ أَنَا أَقْرَبُهُمْ نَسَبًا‏.‏ فَقَالَ أَدْنُوهُ مِنِّي، وَقَرِّبُوا أَصْحَابَهُ، فَاجْعَلُوهُمْ عِنْدَ ظَهْرِهِ‏.‏ ثُمَّ قَالَ لِتَرْجُمَانِهِ قُلْ لَهُمْ إِنِّي سَائِلٌ هَذَا عَنْ هَذَا الرَّجُلِ، فَإِنْ كَذَبَنِي فَكَذِّبُوهُ‏.‏ فَوَاللَّهِ لَوْلاَ الْحَيَاءُ مِنْ أَنْ يَأْثِرُوا عَلَىَّ كَذِبًا لَكَذَبْتُ عَنْهُ، ثُمَّ كَانَ أَوَّلَ مَ�� سَأَلَنِي عَنْهُ أَنْ قَالَ كَيْفَ نَسَبُهُ فِيكُمْ قُلْتُ هُوَ فِينَا ذُو نَسَبٍ‏.‏ قَالَ فَهَلْ قَالَ هَذَا الْقَوْلَ مِنْكُمْ أَحَدٌ قَطُّ قَبْلَهُ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ لاَ‏.‏ قَالَ فَأَشْرَافُ النَّاسِ يَتَّبِعُونَهُ أَمْ ضُعَفَاؤُهُمْ فَقُلْتُ بَلْ ضُعَفَاؤُهُمْ‏.‏ قَالَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ قُلْتُ بَلْ يَزِيدُونَ‏.‏ قَالَ فَهَلْ يَرْتَدُّ أَحَدٌ مِنْهُمْ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ قُلْتُ لاَ‏.‏ قَالَ فَهَلْ يَغْدِرُ قُلْتُ لاَ، وَنَحْنُ مِنْهُ فِي مُدَّةٍ لاَ نَدْرِي مَا هُوَ فَاعِلٌ فِيهَا‏.‏ قَالَ وَلَمْ تُمْكِنِّي كَلِمَةٌ أُدْخِلُ فِيهَا شَيْئً�� غَيْرُ هَذِهِ الْكَلِمَةِ‏.‏ قَالَ فَهَلْ قَاتَلْتُمُوهُ قُلْتُ نَعَمْ‏.‏ قَالَ فَكَيْفَ كَانَ قِتَالُكُمْ إِيَّاهُ قُلْتُ الْحَرْبُ بَيْنَنَا وَبَيْنَهُ سِجَالٌ، يَنَالُ مِنَّا وَنَنَالُ مِنْهُ‏.‏ قَالَ مَاذَا يَأْمُرُكُمْ قُلْتُ يَقُولُ اعْبُدُوا اللَّهَ وَحْدَهُ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَاتْرُكُوا مَا يَقُولُ آبَاؤُكُمْ، وَيَأْمُرُنَا بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ وَالصِّلَةِ‏.‏ فَقَالَ لِلتَّرْجُمَانِ قُلْ لَهُ سَأَلْتُكَ عَنْ نَسَبِهِ، فَذَكَرْتَ أَنَّهُ فِيكُمْ ذُو نَسَبٍ، فَكَذَلِكَ الرُّسُلُ تُبْعَثُ فِي نَسَبِ قَوْمِهَا، وَسَأَلْتُكَ هَلْ قَالَ أَحَدٌ مِنْكُمْ هَذَا الْقَوْلَ فَذَكَرْتَ أَنْ لاَ، فَقُلْتُ لَوْ كَانَ أَحَدٌ قَالَ هَذَا الْقَوْلَ قَبْلَهُ لَقُلْتُ رَجُلٌ يَأْتَسِي بِقَوْلٍ قِيلَ قَبْلَهُ، وَسَأَلْتُكَ هَلْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ فَذَكَرْتَ أَنْ لاَ، قُلْتُ فَلَوْ كَانَ مِنْ آبَائِهِ مِنْ مَلِكٍ قُلْتُ رَجُلٌ يَطْلُبُ مُلْكَ أَبِيهِ، وَسَأَلْتُكَ هَلْ كُنْتُمْ تَتَّهِمُونَهُ بِالْكَذِبِ قَبْلَ أَنْ يَقُولَ مَا قَالَ فَذَكَرْتَ أَنْ لاَ، فَقَدْ أَعْرِفُ أَنَّهُ لَمْ يَكُنْ لِيَذَرَ الْكَذِبَ عَلَى النَّاسِ وَيَكْذِبَ عَلَى اللَّهِ، وَسَأَلْتُكَ أَشْرَافُ النَّاسِ اتَّبَعُوهُ أَمْ ضُعَفَاؤُهُمْ فَذَكَرْتَ أَنَّ ضُعَفَاءَهُمُ اتَّبَعُوهُ، وَهُمْ أَتْبَاعُ الرُّسُلِ، وَسَأَلْتُكَ أَيَزِيدُونَ أَمْ يَنْقُصُونَ فَذَكَرْتَ أَنَّهُمْ يَزِيدُونَ، وَكَذَلِكَ أَمْرُ الإِيمَانِ حَتَّى يَتِمَّ، وَسَأَلْتُكَ أَيَرْتَدُّ أَحَدٌ سَخْطَةً لِدِينِهِ بَعْدَ أَنْ يَدْخُلَ فِيهِ فَذَكَرْتَ أَنْ لاَ، ��َكَذَلِكَ الإِيمَانُ حِينَ تُخَالِطُ بَشَاشَتُهُ الْقُلُوبَ، وَسَأَلْتُكَ هَلْ يَغْدِرُ فَذَكَرْتَ أَنْ لاَ، وَكَذَلِكَ الرُّسُلُ لاَ تَغْدِرُ، وَسَأَلْتُكَ بِمَا يَأْمُرُكُمْ، فَذَكَرْتَ أَنَّهُ يَأْمُرُكُمْ أَنْ تَعْبُدُوا اللَّهَ، وَلاَ تُشْرِكُوا بِهِ شَيْئًا، وَيَنْهَاكُمْ عَنْ عِبَادَةِ الأَوْثَانِ، وَيَأْمُرُكُمْ بِالصَّلاَةِ وَالصِّدْقِ وَالْعَفَافِ‏.‏ فَإِنْ كَانَ مَا تَقُولُ حَقًّا فَسَيَمْلِكُ مَوْضِعَ قَدَمَىَّ هَاتَيْنِ، وَقَدْ كُنْتُ أَعْلَمُ أَنَّهُ خَارِجٌ، لَمْ أَكُنْ أَظُنُّ أَنَّهُ مِنْكُمْ، فَلَوْ أَنِّي أَعْلَمُ أَنِّي أَخْلُصُ إِلَيْهِ لَتَجَشَّمْتُ لِقَاءَهُ، وَلَوْ كُنْتُ عِنْدَهُ لَغَسَلْتُ عَنْ قَدَمِهِ‏.‏ ثُمَّ دَعَا بِكِتَابِ رَسُولِ اللَّهِ صلى الله عليه وسلم الَّذِي بَعَثَ بِهِ دِحْيَةُ إِلَى عَظِيمِ بُصْرَى، فَدَفَعَهُ إِلَى هِرَقْلَ فَقَرَأَهُ فَإِذَا فِيهِ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ‏.‏ مِنْ مُحَمَّدٍ عَبْدِ اللَّهِ وَرَسُولِهِ إِلَى هِرَقْلَ عَظِيمِ الرُّومِ‏.‏ سَلاَمٌ عَلَى مَنِ اتَّبَعَ الْهُدَى، أَمَّا بَعْدُ فَإِنِّي أَدْعُوكَ بِدِعَايَةِ الإِسْلاَمِ، أَسْلِمْ تَسْلَمْ، يُؤْتِكَ اللَّهُ أَجْرَكَ مَرَّتَيْنِ، فَإِنْ تَوَلَّيْتَ فَإِنَّ عَلَيْكَ إِثْمَ الأَرِيسِيِّينَ وَ‏{‏يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَى كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَنْ لاَ نَعْبُدَ إِلاَّ اللَّهَ وَلاَ نُشْرِكَ بِهِ شَيْئًا وَلاَ يَتَّخِذَ بَعْضُنَا بَعْضًا أَرْبَابًا مِنْ دُونِ اللَّهِ فَإِنْ تَوَلَّوْا فَقُولُوا اشْهَدُوا بِأَنَّا مُسْلِمُونَ‏}‏ قَالَ أَبُو سُفْيَانَ فَلَمَّا قَالَ مَا قَالَ�� وَفَرَغَ مِنْ قِرَاءَةِ الْكِتَابِ كَثُرَ عِنْدَهُ الصَّخَبُ، وَارْتَفَعَتِ الأَصْوَاتُ وَأُخْرِجْنَا، فَقُلْتُ لأَصْحَابِي حِينَ أُخْرِجْنَا لَقَدْ أَمِرَ أَمْرُ ابْنِ أَبِي كَبْشَةَ، إِنَّهُ يَخَافُهُ مَلِكُ بَنِي الأَصْفَرِ‏.‏ فَمَا زِلْتُ مُوقِنًا أَنَّهُ سَيَظْهَرُ حَتَّى أَدْخَلَ اللَّهُ عَلَىَّ الإِسْلاَمَ‏.‏ وَكَانَ ابْنُ النَّاظُورِ صَاحِبُ إِيلِيَاءَ وَهِرَقْلَ سُقُفًّا عَلَى نَصَارَى الشَّأْمِ، يُحَدِّثُ أَنَّ هِرَقْلَ حِينَ قَدِمَ إِيلِيَاءَ أَصْبَحَ يَوْمًا خَبِيثَ النَّفْسِ، فَقَالَ بَعْضُ بَطَارِقَتِهِ قَدِ اسْتَنْكَرْنَا هَيْئَتَكَ‏.‏ قَالَ ابْنُ النَّاظُورِ وَكَانَ هِرَقْلُ حَزَّاءً يَنْظُرُ فِي النُّجُومِ، فَقَالَ لَهُمْ حِينَ سَأَلُوهُ إِنِّي رَأَيْتُ اللَّيْلَةَ حِينَ نَظَرْتُ فِي النُّجُومِ م��لِكَ الْخِتَانِ قَدْ ظَهَرَ، فَمَنْ يَخْتَتِنُ مِنْ هَذِهِ الأُمَّةِ قَالُوا لَيْسَ يَخْتَتِنُ إِلاَّ الْيَهُودُ فَلاَ يُهِمَّنَّكَ شَأْنُهُمْ وَاكْتُبْ إِلَى مَدَايِنِ مُلْكِكَ، فَيَقْتُلُوا مَنْ فِيهِمْ مِنَ الْيَهُودِ‏.‏ فَبَيْنَمَا هُمْ عَلَى أَمْرِهِمْ أُتِيَ هِرَقْلُ بِرَجُلٍ أَرْسَلَ بِهِ مَلِكُ غَسَّانَ، يُخْبِرُ عَنْ خَبَرِ رَسُولِ اللَّهِ صلى الله عليه وسلم فَلَمَّا اسْتَخْبَرَهُ هِرَقْلُ قَالَ اذْهَبُوا فَانْظُرُوا أَمُخْتَتِنٌ هُوَ أَمْ لاَ‏.‏ فَنَظَرُوا إِلَيْهِ، فَحَدَّثُوهُ أَنَّهُ مُخْتَتِنٌ، وَسَأَلَهُ عَنِ الْعَرَبِ فَقَالَ هُمْ يَخْتَتِنُونَ‏.‏ فَقَالَ هِرَقْلُ هَذَا مَلِكُ هَذِهِ الأُمَّةِ قَدْ ظَهَرَ‏.‏ ثُمَّ كَتَبَ هِرَقْلُ إِلَى صَاحِبٍ لَهُ بِرُومِيَةَ، وَكَانَ نَظِيرَهُ فِي الْعِلْمِ، وَسَارَ هِرَقْلُ إِلَى حِمْصَ، فَلَمْ يَرِمْ حِمْصَ حَتَّى أَتَاهُ كِتَابٌ مِنْ صَاحِبِهِ يُوَافِقُ رَأْىَ هِرَقْلَ عَلَى خُرُوجِ النَّبِيِّ صلى الله عليه وسلم وَأَنَّهُ نَبِيٌّ، فَأَذِنَ هِرَقْلُ لِعُظَمَاءِ الرُّومِ فِي دَسْكَرَةٍ لَهُ بِحِمْصَ ثُمَّ أَمَرَ بِأَبْوَابِهَا فَغُلِّقَتْ، ثُمَّ اطَّلَعَ فَقَالَ يَا مَعْشَرَ الرُّومِ، هَلْ لَكُمْ فِي الْفَلاَحِ وَالرُّشْدِ وَأَنْ يَثْبُتَ مُلْكُكُمْ فَتُبَايِعُوا هَذَا النَّبِيَّ، فَحَاصُوا حَيْصَةَ حُمُرِ الْوَحْشِ إِلَى الأَبْوَابِ، فَوَجَدُوهَا قَدْ غُلِّقَتْ، فَلَمَّا رَأَى هِرَقْلُ نَفْرَتَهُمْ، وَأَيِسَ مِنَ الإِيمَانِ قَالَ رُدُّوهُمْ عَلَىَّ‏.‏ وَقَالَ إِنِّي قُلْتُ مَقَالَتِي آنِفًا أَخْتَبِرُ بِهَا شِدَّتَكُمْ عَلَى دِينِكُمْ، فَقَدْ رَأَيْتُ‏.‏ فَسَجَدُوا لَهُ وَرَ��ُوا عَنْهُ، فَكَانَ ذَلِكَ آخِرَ شَأْنِ هِرَقْلَ‏.‏ رَوَاهُ صَالِحُ بْنُ كَيْسَانَ وَيُونُسُ وَمَعْمَرٌ عَنِ الزُّهْرِيِّ‏.‏",
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
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ، قَالَ حَدَّثَنَا أَبُو عَامِرٍ الْعَقَدِيُّ، قَالَ حَدَّثَنَا سُلَيْمَانُ بْنُ بِلاَلٍ، عَنْ عَبْدِ اللَّهِ بْنِ دِينَارٍ، عَنْ أَبِي صَالِحٍ، عَنْ أَبِي هُرَيْرَةَ ـ رضى ال��ه عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ الإِيمَانُ بِضْعٌ وَسِتُّونَ شُعْبَةً، وَالْحَيَاءُ شُعْبَةٌ مِنَ الإِيمَانِ ‏\"‏‏.‏",
    "english": "Narrated Abu Huraira: The Prophet (ﷺ) said, \"Faith (Belief) consists of more than sixty branches (i.e. parts). And Haya (This term \"Haya\" covers a large number of concepts which are to be taken together; amongst them are self respect, modesty, bashfulness, and scruple, etc.) is a part of faith",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-10",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 10,
    "arabic": "حَدَّثَنَا آدَمُ بْنُ أَبِي إِيَاسٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ عَبْدِ اللَّهِ بْنِ أَبِي السَّفَرِ، وَإِسْمَاعِيلَ، عَنِ الشَّعْبِيِّ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ ‏\"‏���.‏ قَالَ أَبُو عَبْدِ اللَّهِ وَقَالَ أَبُو مُعَاوِيَةَ حَدَّثَنَا دَاوُدُ عَنْ عَامِرٍ قَالَ سَمِعْتُ عَبْدَ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏ وَقَالَ عَبْدُ الأَعْلَى عَنْ دَاوُدَ عَنْ عَامِرٍ عَنْ عَبْدِ اللَّهِ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏",
    "english": "Narrated 'Abdullah bin 'Amr: The Prophet (ﷺ) said, \"A Muslim is the one who avoids harming Muslims with his tongue and hands. And a Muhajir (emigrant) is the one who gives up (abandons) all what Allah has forbidden",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-11",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 11,
    "arabic": "حَدَّثَنَا سَعِيدُ بْنُ يَحْيَى بْنِ سَعِيدٍ الْقُرَشِيِّ، قَالَ حَدَّثَنَا أَبِي قَالَ، حَدَّثَنَا أَبُو بُرْدَةَ بْنُ عَبْدِ اللَّهِ بْنِ أَبِي بُرْدَةَ، عَنْ أَبِي بُرْدَةَ، عَنْ أَبِي مُوسَى ـ رضى الله عنه ـ قَالَ قَالُوا يَا رَسُولَ اللَّهِ أَىُّ الإِسْلاَمِ أَفْضَلُ قَالَ ‏ \"‏ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ ‏\"‏‏.‏",
    "english": "Narrated Abu Musa: Some people asked Allah's Messenger (ﷺ), \"Whose Islam is the best? i.e. (Who is a very good Muslim)?\" He replied, \"One who avoids harming the Muslims with his tongue and hands",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-12",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 12,
    "arabic": "حَدَّثَنَا عَمْرُو بْنُ خَالِدٍ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ يَزِيدَ، عَنْ أَبِي الْخَيْرِ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو ـ رضى الله عنهما ـ أَنَّ رَجُلاً، سَأَلَ النَّبِيَّ صلى الله عليه وسلم أَىُّ الإِسْلاَمِ خَيْرٌ قَالَ ‏ \"‏ تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ ‏\"‏‏.‏",
    "english": "Narrated 'Abdullah bin 'Amr: A man asked the Prophet (ﷺ) , \"What sort of deeds or (what qualities of) Islam are good?\" The Prophet (ﷺ) replied, 'To feed (the poor) and greet those whom you know and those whom you do not Know (See Hadith No)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-13",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 13,
    "arabic": "حَدَّثَنَا مُسَدَّدٌ، قَالَ حَدَّثَنَا يَحْيَى، عَنْ شُعْبَةَ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم‏.‏ وَعَنْ حُسَيْنٍ الْمُعَلِّمِ، قَالَ حَدَّثَنَا قَتَادَةُ، عَنْ أَنَسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ ‏\"‏‏.‏",
    "english": "Narrated Anas: The Prophet (ﷺ) said, \"None of you will have faith till he wishes for his (Muslim) brother what he likes for himself",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-14",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 14,
    "arabic": "حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، قَالَ حَدَّثَنَا أَبُو الزِّنَادِ، عَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ ـ رضى الله عنه ـ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ فَوَالَّذِي نَفْسِي بِيَدِهِ لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ ‏\"‏‏.‏",
    "english": "Narrated Abu Huraira: \"Allah's Messenger (ﷺ) said, \"By Him in Whose Hands my life is, none of you will have faith till he loves me more than his father and his children",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-15",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 15,
    "arabic": "حَدَّثَنَا يَعْقُوبُ بْنُ إِبْرَاهِيمَ، قَالَ حَدَّثَنَا ابْنُ عُلَيَّةَ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم ح وَحَدَّثَنَا آدَمُ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم ‏ \"‏ لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ ‏\"‏‏.‏",
    "english": "Narrated Anas: The Prophet (ﷺ) said \"None of you will have faith till he loves me more than his father, his children and all mankind",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-16",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 16,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى، قَالَ حَدَّثَنَا عَبْدُ الْوَهَّابِ الثَّقَفِيُّ، قَالَ حَدَّثَنَا أَيُّوبُ، عَنْ أَبِي قِلاَبَةَ، عَنْ أَنَسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاَوَةَ الإِيمَانِ أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ الْمَرْءَ لاَ يُحِبُّهُ إِلاَّ لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الْكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ ‏\"‏‏.‏",
    "english": "Narrated Anas: The Prophet (ﷺ) said, \"Whoever possesses the following three qualities will have the sweetness (delight) of faith: 1. The one to whom Allah and His Apostle become dearer than anything else. 2. Who loves a person and he loves him only for Allah's sake. 3. Who hates to revert to Atheism (disbelief) as he hates to be thrown into the fire",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-17",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 17,
    "arabic": "حَدَّثَنَا أَبُو الْوَلِيدِ، قَالَ حَدَّثَنَا شُعْبَةُ، قَالَ أَخْبَرَنِي عَبْدُ اللَّهِ بْنُ عَبْدِ اللَّهِ بْنِ جَبْرٍ، قَالَ سَمِعْتُ أَنَسًا، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ آيَةُ الإِيمَانِ حُبُّ الأَنْصَارِ، وَآيَةُ النِّفَاقِ بُغْضُ الأَنْصَارِ ‏\"‏‏.‏",
    "english": "Narrated Anas: The Prophet (ﷺ) said, \"Love for the Ansar is a sign of faith and hatred for the Ansar is a sign of hypocrisy",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-18",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 18,
    "arabic": "حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي أَبُو إِدْرِيسَ، عَائِذُ اللَّهِ بْنُ عَبْدِ اللَّهِ أَنَّ عُبَادَةَ بْنَ الصَّامِتِ ـ رضى الله عنه ـ وَكَانَ شَهِدَ بَدْرًا، وَهُوَ أَحَدُ النُّقَبَاءِ لَيْلَةَ الْعَقَبَةِ ـ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ وَحَوْلَهُ عِصَابَةٌ مِنْ أَصْحَابِهِ ‏ \"‏ بَايِعُونِي عَلَى أَنْ لاَ تُشْرِكُوا بِاللَّهِ شَيْئًا، وَلاَ تَسْرِقُوا، وَلاَ تَزْنُوا، وَلاَ تَقْتُلُوا أَوْلاَدَكُمْ، وَلاَ تَأْتُوا بِبُهْتَانٍ تَفْتَرُونَهُ بَيْنَ أَيْدِيكُمْ وَأَرْجُلِكُمْ، وَلاَ تَعْصُوا فِي مَعْرُوفٍ، فَمَنْ وَفَى مِنْكُمْ فَأَجْرُهُ عَلَى اللَّهِ، وَمَنْ أَصَابَ مِنْ ذَلِكَ شَيْئًا فَعُوقِبَ فِي الدُّنْيَا فَهُوَ كَفَّارَةٌ لَهُ، وَمَنْ أَصَابَ مِنْ ذَلِكَ شَيْئًا ثُمَّ سَتَرَهُ اللَّهُ، فَهُوَ إِلَى اللَّهِ إِنْ شَاءَ عَفَا عَنْهُ، وَإِنْ شَاءَ عَاقَبَهُ ‏\"‏‏.‏ فَبَايَعْنَاهُ عَلَى ذَلِكَ‏.‏",
    "english": "Narrated 'Ubada bin As-Samit: who took part in the battle of Badr and was a Naqib (a person heading a group of six persons), on the night of Al-'Aqaba pledge: Allah's Apostle said while a group of his companions were around him, \"Swear allegiance to me for: 1. Not to join anything in worship along with Allah. 2. Not to steal. 3. Not to commit illegal sexual intercourse. 4. Not to kill your children. 5. Not to accuse an innocent person (to spread such an accusation among people). 6. Not to be disobedient (when ordered) to do good deed.\" The Prophet (ﷺ) added: \"Whoever among you fulfills his pledge will be rewarded by Allah. And whoever indulges in any one of them (except the ascription of partners to Allah) and gets the punishment in this world, that punishment will be an expiation for that sin. And if one indulges in any of them, and Allah conceals his sin, it is up to Him to forgive or punish him (in the Hereafter).\" 'Ubada bin As-Samit added: \"So we swore allegiance for these.\" (points to Allah's Apostle)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-19",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 19,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، عَنْ مَالِكٍ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَبْدِ اللَّهِ بْنِ عَبْدِ الرَّحْمَنِ بْنِ أَبِي صَعْصَعَةَ، عَنْ أَبِيهِ، عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، أَنَّهُ قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ يُوشِكُ أَنْ يَكُونَ خَيْرَ مَالِ الْمُسْلِمِ غَنَمٌ يَتْبَعُ بِهَا شَعَفَ الْجِبَالِ وَمَوَاقِعَ الْقَطْرِ، يَفِرُّ بِدِينِهِ مِنَ الْفِتَنِ ‏\"‏‏.‏",
    "english": "Narrated Abu Said Al-Khudri: Allah's Messenger (ﷺ) said, \"A time will soon come when the best property of a Muslim will be sheep which he will take on the top of mountains and the places of rainfall (valleys) so as to flee with his religion from afflictions",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-20",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 20,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ سَلاَمٍ، قَالَ أَخْبَرَنَا عَبْدَةُ، عَنْ هِشَامٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، قَالَتْ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِذَا أَمَرَهُمْ أَمَرَهُمْ مِنَ الأَعْمَالِ بِمَا يُطِيقُونَ قَالُوا إِنَّا لَسْنَا كَهَيْئَتِكَ يَا رَسُولَ اللَّهِ، إِنَّ اللَّهَ قَدْ غَفَرَ لَكَ مَا تَقَدَّمَ مِنْ ذَنْبِكَ وَمَا تَأَخَّرَ‏.‏ فَيَغْضَبُ حَتَّى يُعْرَفَ الْغَضَبُ فِي وَجْهِهِ ثُمَّ يَقُولُ ‏ \"‏ إِنَّ أَتْقَاكُمْ وَأَعْلَمَكُمْ بِاللَّهِ أَنَا ‏\"‏‏.‏",
    "english": "Narrated 'Aisha: Whenever Allah's Messenger (ﷺ) ordered the Muslims to do something, he used to order them deeds which were easy for them to do, (according to their strength and endurance). They said, \"O Allah's Messenger (ﷺ)! We are not like you. Allah has forgiven your past and future sins.\" So Allah's Apostle became angry and it was apparent on his face. He said, \"I am the most Allah fearing, and know Allah better than all of you do",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-21",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 21,
    "arabic": "حَدَّثَنَا سُلَيْمَانُ بْنُ حَرْبٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ قَتَادَةَ، عَنْ أَنَسٍ ـ رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاَوَةَ الإِيمَانِ مَنْ كَانَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَمَنْ أَ��َبَّ عَبْدًا لاَ يُحِبُّهُ إِلاَّ لِلَّهِ، وَمَنْ يَكْرَهُ أَنْ يَعُودَ فِي الْكُفْرِ بَعْدَ إِذْ أَنْقَذَهُ اللَّهُ، كَمَا يَكْرَهُ أَنْ يُلْقَى فِي النَّارِ ‏\"‏‏.‏",
    "english": "Narrated Anas: The Prophet (ﷺ) said, \"Whoever possesses the following three qualities will taste the sweetness of faith: 1. The one to whom Allah and His Apostle become dearer than anything else. 2. Who loves a person and he loves him only for Allah's sake. 3. Who hates to revert to disbelief (Atheism) after Allah has brought (saved) him out from it, as he hates to be thrown in fire",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-22",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 22,
    "arabic": "حَدَّثَنَا إِسْمَاعِيلُ، قَالَ حَدَّثَنِي مَالِكٌ، عَنْ عَمْرِو بْنِ يَحْيَى الْمَازِنِيِّ، عَنْ أَبِيهِ، عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، رضى الله عنه ـ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏\"‏ يَدْخُلُ أَهْلُ الْجَنَّةِ الْجَنَّةَ، وَأَهْلُ النَّارِ النَّارَ، ثُمَّ يَقُولُ اللَّهُ تَعَالَى أَخْرِجُوا مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ حَبَّةٍ مِنْ خَرْدَلٍ مِنْ إِيمَانٍ‏.‏ فَيُخْرَجُونَ مِنْهَا قَدِ اسْوَدُّوا فَيُلْقَوْنَ فِي نَهَرِ الْحَيَا ـ أَوِ الْحَيَاةِ، شَكَّ مَالِكٌ ـ فَيَنْبُتُونَ كَمَا تَنْبُتُ الْحِبَّةُ فِي جَانِبِ السَّيْلِ، أَلَمْ تَرَ أَنَّهَا تَخْرُجُ صَفْرَاءَ مُلْتَوِيَةً ‏\"‏‏.‏ قَالَ وُهَيْبٌ حَدَّثَنَا عَمْرٌو ‏\"‏ الْحَيَاةِ ‏\"‏‏.‏ وَقَالَ ‏\"‏ خَرْدَلٍ مِنْ خَيْرٍ ‏\"‏‏.‏",
    "english": "Narrated Abu Said Al-Khudri: The Prophet (ﷺ) said, \"When the people of Paradise will enter Paradise and the people of Hell will go to Hell, Allah will order those who have had faith equal to the weight of a grain of mustard seed to be taken out from Hell. So they will be taken out but (by then) they will be blackened (charred). Then they will be put in the river of Haya' (rain) or Hayat (life) (the Narrator is in doubt as to which is the right term), and they will revive like a grain that grows near the bank of a flood channel. Don't you see that it comes out yellow and twisted?",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-23",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 23,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عُبَيْدِ اللَّهِ، قَالَ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدٍ، عَنْ صَالِحٍ، عَنِ ابْنِ شِهَابٍ، عَنْ أَبِي أُمَامَةَ بْنِ سَهْلٍ، أَنَّهُ سَمِعَ أَبَا سَعِيدٍ الْخُدْرِيَّ، يَقُولُ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ بَيْنَا أَنَا نَائِمٌ رَأَيْتُ النَّاسَ يُعْرَضُونَ عَلَىَّ، وَعَلَيْهِمْ قُمُصٌ مِنْهَا مَا يَبْلُغُ الثُّدِيَّ، وَمِنْهَا مَا دُونَ ذَلِكَ، وَعُرِضَ عَلَىَّ عُمَرُ بْنُ الْخَطَّابِ وَعَلَيْهِ قَمِيصٌ يَجُرُّهُ ‏\"‏‏.‏ قَالُوا فَمَا أَوَّلْتَ ذَلِكَ يَا رَسُولَ اللَّهِ قَالَ ‏\"‏ الدِّينَ ‏\"‏‏.‏",
    "english": "Narrated Abu Said Al-Khudri: Allah's Messenger (ﷺ) said, \"While I was sleeping I saw (in a dream) some people wearing shirts of which some were reaching up to the breasts only while others were even shorter than that. Umar bin Al-Khattab was shown wearing a shirt that he was dragging.\" The people asked, \"How did you interpret it? (What is its interpretation) O Allah's Messenger (ﷺ)?\" He (the Prophet (ﷺ) ) replied, \"It is the Religion",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-24",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 24,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكُ بْنُ أَنَسٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَالِمِ بْنِ عَبْدِ اللَّهِ، عَنْ أَبِيهِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم مَرَّ عَلَى رَجُلٍ مِنَ الأَنْصَارِ وَهُوَ يَعِظُ أَخَاهُ فِي الْحَيَاءِ، فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ دَعْهُ فَإِنَّ الْحَيَاءَ مِنَ الإِيمَانِ ‏\"‏‏.‏",
    "english": "Narrated 'Abdullah (bin 'Umar): Once Allah's Messenger (ﷺ) passed by an Ansari (man) who was admonishing his brother regarding Haya'. On that Allah's Messenger (ﷺ) said, \"Leave him as Haya' is a part of faith.\" (See Hadith)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-25",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 25,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مُحَمَّدٍ الْمُسْنَدِيُّ، قَالَ حَدَّثَنَا أَبُو رَوْحٍ الْحَرَمِيُّ بْنُ عُمَارَةَ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ وَاقِدِ بْنِ مُحَمَّدٍ، قَالَ سَمِعْتُ أَبِي يُحَدِّثُ، عَنِ ابْنِ عُمَرَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلاَةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلاَّ بِحَقِّ الإِسْلاَمِ، وَحِسَابُهُمْ عَلَى اللَّهِ ‏\"‏‏.‏",
    "english": "Narrated Ibn 'Umar: Allah's Messenger (ﷺ) said: \"I have been ordered (by Allah) to fight against the people until they testify that none has the right to be worshipped but Allah and that Muhammad is Allah's Messenger (ﷺ), and offer the prayers perfectly and give the obligatory charity, so if they perform that, then they save their lives and property from me except for Islamic laws and then their reckoning (accounts) will be done by Allah",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-26",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 26,
    "arabic": "حَدَّثَنَا أَحْمَدُ بْنُ يُونُسَ، وَمُوسَى بْنُ إِسْمَاعِيلَ، قَالاَ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدٍ، قَالَ حَدَّثَنَا ابْنُ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم سُئِلَ أَىُّ الْعَمَلِ أَفْضَلُ فَقَالَ ‏\"‏ إِيمَانٌ بِاللَّهِ وَرَسُولِهِ ‏\"‏‏.‏ قِيلَ ثُمَّ مَاذَا قَالَ ‏\"‏ الْجِهَادُ فِي سَبِيلِ اللَّهِ ‏\"‏‏.‏ قِيلَ ثُمَّ مَاذَا قَالَ ‏\"‏ حَجٌّ مَبْرُورٌ ‏\"‏‏.‏",
    "english": "Narrated Abu Huraira: Allah's Messenger (ﷺ) was asked, \"What is the best deed?\" He replied, \"To believe in Allah and His Apostle (Muhammad). The questioner then asked, \"What is the next (in goodness)? He replied, \"To participate in Jihad (religious fighting) in Allah's Cause.\" The questioner again asked, \"What is the next (in goodness)?\" He replied, \"To perform Hajj (Pilgrim age to Mecca) 'Mubrur, (which is accepted by Allah and is performed with the intention of seeking Allah's pleasure only and not to show off and without committing a sin and in accordance with the traditions of the Prophet)",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-27",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 27,
    "arabic": "حَدَّثَنَا أَبُو الْيَمَانِ، قَالَ أَخْبَرَنَا شُعَيْبٌ، عَنِ الزُّهْرِيِّ، قَالَ أَخْبَرَنِي عَامِرُ بْنُ سَعْدِ بْنِ أَبِي وَقَّاصٍ، عَنْ سَعْدٍ، رضى الله عنه أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم أَعْطَى رَهْطًا وَسَعْدٌ جَالِسٌ، فَتَرَكَ رَسُولُ اللَّهِ صلى الله عليه وسلم رَجُلاً هُوَ أَعْجَبُهُمْ إِلَىَّ فَقُلْتُ يَا رَسُولَ اللَّهِ مَا لَكَ عَنْ فُلاَنٍ فَوَاللَّهِ إِنِّي لأَرَاهُ مُؤْمِنًا‏.‏ فَقَالَ ‏\"‏ أَوْ مُسْلِمًا ‏\"‏‏.‏ فَسَكَتُّ قَلِيلاً، ثُمَّ غَلَبَنِي مَا أَعْلَمُ مِنْهُ فَعُدْتُ لِمَقَالَتِي فَقُلْتُ مَا لَكَ عَنْ فُلاَنٍ فَوَاللَّهِ إِنِّي لأَرَاهُ مُؤْمِنًا فَقَالَ ‏\"‏ أَوْ مُسْلِمًا ‏\"‏‏.‏ ثُمَّ غَلَبَنِي مَا أَعْلَمُ مِنْهُ فَعُدْتُ لِمَقَالَتِي وَعَادَ رَسُولُ اللَّهِ صلى الله عليه وسلم ثُمَّ قَالَ ‏\"‏ يَا سَعْدُ، إِنِّي لأُعْطِي الرَّجُلَ وَغَيْرُهُ أَحَبُّ إِلَىَّ مِنْهُ، خَشْيَةَ أَنْ يَكُبَّهُ اللَّهُ فِي النَّارِ ‏\"‏‏.‏ وَرَوَاهُ يُونُسُ وَصَالِحٌ وَمَعْمَرٌ وَابْنُ أَخِي الزُّهْرِيِّ عَنِ الزُّهْرِيِّ‏.‏",
    "english": "Narrated Sa'd: Allah's Messenger (ﷺ) distributed (Zakat) amongst (a group of) people while I was sitting there but Allah's Messenger (ﷺ) left a man whom I thought the best of the lot. I asked, \"O Allah's Messenger (ﷺ)! Why have you left that person? By Allah I regard him as a faithful believer.\" The Prophet (ﷺ) commented: \"Or merely a Muslim.\" I remained quiet for a while, but could not help repeating my question because of what I knew about him. And then asked Allah's Messenger (ﷺ), \"Why have you left so and so? By Allah! He is a faithful believer.\" The Prophet (ﷺ) again said, \"Or merely a Muslim.\" And I could not help repeating my question because of what I knew about him. Then the Prophet (ﷺ) said, \"O Sa'd! I give to a person while another is dearer to me, for fear that he might be thrown on his face in the Fire by Allah",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-28",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 28,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، قَالَ حَدَّثَنَا اللَّيْثُ، عَنْ يَزِيدَ بْنِ أَبِي حَبِيبٍ، عَنْ أَبِي الْخَيْرِ، عَنْ عَبْدِ اللَّهِ بْنِ عَمْرٍو، أَنَّ رَجُلاً، سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم أَىُّ الإِسْلاَمِ خَيْرٌ قَالَ ‏ \"‏ تُطْعِمُ الطَّعَامَ، وَتَقْرَأُ السَّلاَمَ عَلَى مَنْ عَرَفْتَ وَمَنْ لَمْ تَعْرِفْ ‏\"‏‏.‏",
    "english": "Narrated 'Abdullah bin 'Amr: A person asked Allah's Messenger (ﷺ), \"What (sort of) deeds in or (what qualities of) Islam are good?\" He replied, \"To feed (the poor) and greet those whom you know and those whom you don't know",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-29",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 29,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، عَنْ عَطَاءِ بْنِ يَسَارٍ، عَنِ ابْنِ عَبَّاسٍ، قَالَ قَالَ النَّبِيُّ صلى الله عليه وسلم ‏\"‏ أُرِيتُ النَّارَ فَإِذَا أَكْثَرُ أَهْلِهَا النِّسَاءُ يَكْفُرْنَ ‏\"‏‏.‏ قِيلَ أَيَكْفُرْنَ بِاللَّهِ قَالَ ‏\"‏ يَكْفُرْنَ الْعَشِيرَ، وَيَكْفُرْنَ الإِحْسَانَ، لَوْ أَحْسَنْتَ إِلَى إِحْدَاهُنَّ الدَّهْرَ ثُمَّ رَأَتْ مِنْكَ شَيْئًا قَالَتْ مَا رَأَيْتُ مِنْكَ خَيْرًا قَطُّ ‏\"‏‏.‏",
    "english": "Narrated Ibn 'Abbas: The Prophet (ﷺ) said: \"I was shown the Hell-fire and that the majority of its dwellers were women who were ungrateful.\" It was asked, \"Do they disbelieve in Allah?\" (or are they ungrateful to Allah?) He replied, \"They are ungrateful to their husbands and are ungrateful for the favors and the good (charitable deeds) done to them. If you have always been good (benevolent) to one of them and then she sees something in you (not of her liking), she will say, 'I have never received any good from you",
    "grade": "Sahih"
  },
  {
    "id": "bukhari-30",
    "collection": "bukhari",
    "collectionName": "Sahih al-Bukhari",
    "hadithNumber": 30,
    "arabic": "حَدَّثَنَا سُلَيْمَانُ بْنُ حَرْبٍ، قَالَ حَدَّثَنَا شُعْبَةُ، عَنْ وَاصِلٍ الأَحْدَبِ، عَنِ الْمَعْرُورِ، قَالَ لَقِيتُ أَبَا ذَرٍّ بِالرَّبَذَةِ، وَعَلَيْهِ حُلَّةٌ، وَعَلَى غُلاَمِهِ حُلَّةٌ، فَسَأَلْتُهُ عَنْ ذَلِكَ، فَقَالَ إِنِّي سَابَبْتُ رَجُلاً، فَعَيَّرْتُهُ بِأُمِّهِ، فَقَالَ لِيَ النَّبِيُّ صلى الله عليه وسلم ‏ \"‏ يَا أَبَا ذَرٍّ أَعَيَّرْتَهُ بِأُمِّهِ إِنَّكَ امْرُؤٌ فِيكَ جَاهِلِيَّةٌ، إِخْوَانُكُمْ خَوَلُكُمْ، جَعَلَهُمُ اللَّهُ تَحْتَ أَيْدِيكُمْ، فَمَنْ كَانَ أَخُوهُ تَحْتَ يَدِهِ فَلْيُطْعِمْهُ مِمَّا يَأْكُلُ، وَلْيُلْبِسْهُ مِمَّا يَلْبَسُ، وَلاَ تُكَلِّفُوهُمْ مَا يَغْلِبُهُمْ، فَإِنْ كَلَّفْتُمُوهُمْ فَأَعِينُوهُمْ ‏\"‏‏.‏",
    "english": "Narrated Al-Ma'rur: At Ar-Rabadha I met Abu Dhar who was wearing a cloak, and his slave, too, was wearing a similar one. I asked about the reason for it. He replied, \"I abused a person by calling his mother with bad names.\" The Prophet said to me, 'O Abu Dhar! Did you abuse him by calling his mother with bad names You still have some characteristics of ignorance. Your slaves are your brothers and Allah has put them under your command. So whoever has a brother under his command should feed him of what he eats and dress him of what he wears. Do not ask them (slaves) to do things beyond their capacity (power) and if you do so, then help them",
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
    "arabic": "حَدَّثَنِي زُهَيْرُ بْنُ حَرْبٍ، حَدَّثَنَا جَرِيرٌ، عَنْ عُمَارَةَ، - وَهُوَ ابْنُ الْقَعْقَاعِ - عَنْ أَبِي زُرْعَةَ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ سَلُونِي ‏\"‏ فَهَابُوهُ أَنْ يَسْأَلُوهُ ‏.‏ فَجَاءَ رَجُلٌ فَجَلَسَ عِنْدَ رُكْبَتَيْهِ ‏.‏ فَقَالَ يَا رَسُولَ اللَّهِ مَا الإِسْلاَمُ قَالَ ‏\"‏ لاَ تُشْرِكُ بِاللَّهِ شَيْئًا وَتُقِيمُ الصَّلاَةَ وَتُؤْتِي الزَّكَاةَ وَتَصُومُ رَمَضَانَ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِيمَانُ قَالَ ‏\"‏ أَنْ تُؤْمِنَ بِاللَّهِ وَمَلاَئِكَتِهِ وَكِتَابِهِ وَلِقَائِهِ وَرُسُلِهِ وَتُؤْمِنَ بِالْبَعْثِ وَتُؤْمِنَ بِالْقَدَرِ كُلِّهِ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَا الإِحْسَانُ قَالَ ‏\"‏ أَنْ تَخْشَى اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنَّكَ إِنْ لاَ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ ‏\"‏ ‏.‏ قَالَ صَدَقْتَ ‏.‏ قَالَ يَا رَسُولَ اللَّهِ مَتَى تَقُومُ السَّاعَةُ قَالَ ‏\"‏ مَا الْمَسْئُولُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ وَسَأُحَدِّثُكَ عَنْ أَشْرَاطِهَا إِذَا رَأَيْتَ الْمَرْأَةَ تَلِدُ رَبَّهَا فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا رَأَيْتَ الْحُفَاةَ الْعُرَاةَ الصُّمَّ الْبُكْمَ مُلُوكَ الأَرْضِ فَذَاكَ مِنْ أَشْرَاطِهَا وَإِذَا رَأَيْتَ رِعَاءَ الْبَهْمِ يَتَطَاوَلُونَ فِي الْبُنْيَانِ فَذَاكَ مِنْ أَشْرَاطِهَا فِي خَمْسٍ مِنَ الْغَيْبِ لاَ يَعْلَمُهُنَّ إِلاَّ اللَّهُ ‏\"‏ ‏.‏ ثُمَّ قَرَأَ ‏{‏ إِنَّ اللَّهَ عِنْدَهُ عِلْمُ السَّاعَةِ وَيُنَزِّلُ الْغَيْثَ وَيَعْلَمُ مَا فِي الأَرْحَامِ وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا وَمَا تَدْرِي نَفْسٌ بِأَىِّ أَرْضٍ تَمُوتُ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ‏}‏ قَالَ ثُمَّ قَامَ الرَّج��لُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ رُدُّوهُ عَلَىَّ ‏\"‏ فَالْتُمِسَ فَلَمْ يَجِدُوهُ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ هَذَا جِبْرِيلُ أَرَادَ أَنْ تَعَلَّمُوا إِذْ لَمْ تَسْأَلُوا ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Abu Huraira that the Messenger of Allah (ﷺ) said:Ask me (about religious matters), but they (the Companions) were in awe of asking him. Then came a man, and sat near his knees and said: O Messenger of Allah, what is al-Islam? So he (the Holy Prophet) replied: [That] you do not associate anything with Allah, and establish the prayer, pay the alms (Zakat) and fast Ramadan. He said: You (have) told the truth. He said: Messenger of Allah, what is al-Iman (Faith)? He said: That you affirm your faith in Allah, His angels, His Books, His meeting, His Apostles, and that you believe in Resurrection and that you believe in Qadr (Divine Decree) in all its entirety. He (the inquirer) said: You have told the truth. He said: Messenger of Allah, what is al-Ihsan? Upon this he said: that you fear Allah as if you are seeing Him, and though you see Him not, verily He is seeing you. He (the inquirer) said: You (have) told the truth. He (the inquirer) said: When will the Hour (of Doom) occur? He said: The one who is being asked about it is no better informed than the inquirer and I will narrate some of its signs to you. When you see a [slave] woman giving birth to her master - then that is [one] of its signs. And when you see barefooted, naked, deaf and dumb (ignorant and foolish persons) as the rulers of the earth - then that is [one] of its signs. And when you see the shepherds of black (camels) exult in buildings - then that is [one] of its signs. The (Hour) is one of the five things of the unseen. No one knows them except Allah. Then (the Holy Prophet) recited (the folowing verse):\" Verily Allah! with Him alone is the knowledge of the Hour and He it is Who sends down the rain and knows that which is in the wombs. And no soul knows what it shall earn on the morrow and a soul knows not in what land it shall die. Verily Allah is Knowing, Aware.\" He (Abu Huraira) said: Then the person stood up (and made his way). Then the Messenger of Allah (ﷺ) said: Bring him back to me. He was searched for, but they could not find him. The Messenger of Allah (ﷺ) thereupon said: He was Gabriel and he wanted to teach you when you did not ask",
    "grade": "Sahih"
  },
  {
    "id": "muslim-100",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 100,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدِ بْنِ جَمِيلِ بْنِ طَرِيفِ بْنِ عَبْدِ اللَّهِ الثَّقَفِيُّ، عَنْ مَالِكِ بْنِ أَنَسٍ، - فِيمَا قُرِئَ عَلَيْهِ - عَنْ أَبِي سُهَيْلٍ، عَنْ أَبِيهِ، أَنَّهُ سَمِعَ طَلْحَةَ بْنَ عُبَيْدِ اللَّهِ، يَقُولُ جَاءَ رَجُلٌ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم مِنْ أَهْلِ نَجْدٍ ثَائِرُ الرَّأْسِ نَسْمَعُ دَوِيَّ صَوْتِهِ وَلاَ نَفْقَهُ مَا يَقُولُ حَتَّى دَنَا مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم فَإِذَا هُوَ يَسْأَلُ عَنِ الإِسْلاَمِ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ خَمْسُ صَلَوَاتٍ فِي الْيَوْمِ وَاللَّيْلَةِ ‏\"‏ ‏.‏ فَقَالَ هَلْ عَلَىَّ غَيْرُهُنَّ قَالَ ‏\"‏ لاَ ‏.‏ إِلاَّ أَنْ تَطَّوَّعَ وَصِيَامُ شَهْرِ رَمَضَانَ ‏\"‏ ‏.‏ فَقَالَ هَلْ عَلَىَّ غَيْرُهُ فَقَالَ ‏\"‏ لاَ ‏.‏ إِلاَّ أَنْ تَطَّوَّعَ ‏\"‏ ‏.‏ وَذَكَرَ لَهُ رَسُولُ اللَّهِ صلى ال��ه عليه وسلم الزَّكَاةَ فَقَالَ هَلْ عَلَىَّ غَيْرُهَا قَالَ ‏\"‏ لاَ ‏.‏ إِلاَّ أَنْ تَطَّوَّعَ ‏\"‏ قَالَ فَأَدْبَرَ الرَّجُلُ وَهُوَ يَقُولُ وَاللَّهِ لاَ أَزِيدُ عَلَى هَذَا وَلاَ أَنْقُصُ مِنْهُ ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ أَفْلَحَ إِنْ صَدَقَ ‏\"‏ ‏.‏",
    "english": "It is reported on the authority of Talha b. 'Ubaidullah that a person with dishevelled hair, one of the people of Nejd, came to the Messenger of Allah (ﷺ). We heard the humming of his voice but could not fully discern what he had been saying, till he came nigh to the Messenger of Allah (ﷺ). It was then (disclosed to us) that he was asking questions pertaining to Islam. The Messenger of Allah (ﷺ) said:Five prayers during the day and the night. (Upon this he said: Am I obliged to say any other (prayer) besides these? He (the Holy Prophet, ) said: No, but whatever you observe voluntarily, out of your own free will, and the fasts of Ramadan. The inquirer said: Am I obliged to do anything else besides this? He (the Holy Prophet) said: No, but whatever you do out of your own free will. And the Messenger of Allah told him about the Zakat (poor-rate). The inquirer said: Am I obliged to pay anything else besides this? He (the Holy Prophet) said: No, but whatever you pay voluntarily out of your own free will. The man turned back and was saying: I would neither make any addition to this, nor will decrease anything out of it. The Prophet remarked: He is successful, if he is true to what he affirms",
    "grade": "Sahih"
  },
  {
    "id": "muslim-101",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 101,
    "arabic": "حَدَّثَنِي يَحْيَى بْنُ أَيُّوبَ، وَقُتَيْبَةُ بْنُ سَعِيدٍ، جَمِيعًا عَنْ إِسْمَاعِيلَ بْنِ جَعْفَرٍ، عَنْ أَبِي سُهَيْلٍ، عَنْ أَبِيهِ، عَنْ طَلْحَةَ بْنِ عُبَيْدِ اللَّهِ، عَنِ النَّبِيِّ صلى الله عليه وسلم بِهَذَا الْحَدِيثِ نَحْوَ حَدِيثِ مَالِكٍ غَيْرَ أَنَّهُ قَالَ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ أَفْلَحَ وَأَبِيهِ إِنْ صَدَقَ ‏\"‏ ‏.‏ أَوْ ‏\"‏ دَخَلَ الْجَنَّةَ وَأَبِيهِ إِنْ صَدَقَ ‏\"‏ ‏.‏",
    "english": "Another hadith, the like of which has been narrated by Malik (b. Anas) (and mentioned above) is also reported by Talha b. 'Ubaidullah, with the only variation that the Prophet remarked:By his father, he shall succeed if he were true (to what he professed), or: By his father, he would enter heaven if he were true (to what he professed)",
    "grade": "Sahih"
  },
  {
    "id": "muslim-102",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 102,
    "arabic": "حَدَّثَنِي عَمْرُو بْنُ مُحَمَّدِ بْنِ بُكَيْرٍ النَّاقِدُ، حَدَّثَنَا هَاشِمُ بْنُ الْقَاسِمِ أَبُو النَّضْرِ، حَدَّثَنَا سُلَيْمَانُ بْنُ الْمُغِيرَةِ، عَنْ ثَابِتٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ نُهِينَا أَنْ نَسْأَلَ، رَسُولَ اللَّهِ صلى الله عليه وسلم عَنْ شَىْءٍ فَكَانَ يُعْجِبُنَا أَنْ يَجِيءَ الرَّجُلُ مِنْ أَهْلِ الْبَادِيَةِ الْعَاقِلُ فَيَسْأَلَهُ وَنَحْنُ نَسْمَعُ فَجَاءَ رَجُلٌ مِنْ أَهْلِ الْبَادِيَةِ فَقَالَ يَا مُحَمَّدُ أَتَانَا رَسُولُكَ فَزَعَمَ لَنَا أَنَّكَ تَزْعُمُ أَنَّ اللَّهَ أَرْسَلَكَ قَالَ ‏\"‏ صَدَقَ ‏\"‏ ‏.‏ قَالَ فَمَنْ خَلَقَ السَّمَاءَ قَالَ ‏\"‏ الل��َهُ ‏\"‏ ‏.‏ قَالَ فَمَنْ خَلَقَ الأَرْضَ قَالَ ‏\"‏ اللَّهُ ‏\"‏ ‏.‏ قَالَ فَمَنْ نَصَبَ هَذِهِ الْجِبَالَ وَجَعَلَ فِيهَا مَا جَعَلَ ‏.‏ قَالَ ‏\"‏ اللَّهُ ‏\"‏ ‏.‏ قَالَ فَبِالَّذِي خَلَقَ السَّمَاءَ وَخَلَقَ الأَرْضَ وَنَصَبَ هَذِهِ الْجِبَالَ آللَّهُ أَرْسَلَكَ قَالَ ‏\"‏ نَعَمْ ‏\"‏ ‏.‏ قَالَ وَزَعَمَ رَسُولُكَ أَنَّ عَلَيْنَا خَمْسَ صَلَوَاتٍ فِي يَوْمِنَا وَلَيْلَتِنَا ‏.‏ قَالَ ‏\"‏ صَدَقَ ‏\"‏ ‏.‏ قَالَ فَبِالَّذِي أَرْسَلَكَ آللَّهُ أَمْرَكَ بِهَذَا قَالَ ‏\"‏ نَعَمْ ‏\"‏ ‏.‏ قَالَ وَزَعَمَ رَسُولُكَ أَنَّ عَلَيْنَا زَكَاةً فِي أَمْوَالِنَا ‏.‏ قَالَ ‏\"‏ صَدَقَ ‏\"‏ ‏.‏ قَالَ فَبِالَّذِي أَرْسَلَكَ آللَّهُ أَمْرَكَ بِهَذَا قَالَ ‏\"‏ نَعَمْ ‏\"‏ ‏.‏ قَالَ وَزَعَمَ رَسُولُكَ أَنَّ عَلَيْنَا صَوْمَ شَهْرِ رَمَضَانَ فِي سَنَتِنَا ‏.‏ قَالَ ‏\"‏ صَدَقَ ‏\"‏ ‏.‏ قَالَ فَبِالَّذِي أَرْسَلَكَ آللَّهُ أَمَرَكَ بِهَذَا قَالَ ‏\"‏ نَعَمْ ‏\"‏ ‏.‏ قَالَ وَزَعَمَ رَسُولُكَ أَنَّ عَلَيْنَا حَجَّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلاً ‏.‏ قَالَ ‏\"‏ صَدَقَ ‏\"‏ ‏.‏ قَالَ ثُمَّ وَلَّى ‏.‏ قَالَ وَالَّذِي بَعَثَكَ بِالْحَقِّ لاَ أَزِيدُ عَلَيْهِنَّ وَلاَ أَنْقُصُ مِنْهُنَّ ‏.‏ فَقَالَ النَّبِيُّ صلى الله عليه وسلم ‏\"‏ لَئِنْ صَدَقَ لَيَدْخُلَنَّ الْجَنَّةَ ‏\"‏ ‏.‏",
    "english": "It is reported on the authority of Anas b. Malik that he said:We were forbidden that we should ask anything (without the genuine need) from the Holy Prophet. It, therefore, pleased us that an intelligent person from the dwellers of the desert should come and asked him (the Holy Prophet) and we should listen to it. A man from the dwellers of the desert came (to the Holy Prophet) and said: Muhammad, your messenger came to us and told us your assertion that verily Allah had sent you (as a prophet). He (the Holy Prophet) remarked: He told the truth. He (the bedouin) said: Who created the heaven? He (the Holy Prophet) replied: Allah. He (the bedouin again) said: Who created the earth? He (the Holy Prophet) replied: Allah. He (the bedouin again) said: Who raised these mountains and who created in them whatever is created there? He (the Holy Prophet) replied: Allah. Upon this he (the bedouin) remarked: By Him Who created the heaven and created the earth and raised mountains thereupon, has Allah (in fact) sent you? He (the Holy Prophet) said: Yes. He (the bedouin) said: Your messenger also told us that five prayers (had been made) obligatory for us during the day and the night. He (the Holy Prophet) remarked: He told you the truth. He (the bedouin) said: By Him Who sent you, is it Allah Who ordered you about this (i. e. prayers)? He (the Holy Prophet) said: Yes. He (the bedouin) said: Your messenger told us that Zakat had been made obligatory in our riches. He (the Holy Prophet) said. He has told the truth. He (the bedouin) said: By Him Who sent you (as a prophet), is it Allah Who ordered you about it (Zakat)? He (the Holy Prophet) said: Yes. He (the bedouin) said: Your messenger told us that it had been made obligatory for us to fast every year during the month of Ramadan. He (the Holy Prophet) said: He has told the truth. He (the bedouin) said: By Him Who sent you (as a prophet), is it Allah Who ordered you about it (the fasts of Ramadan)? He (the Holy Prophet) said: Yes. He (the bedouin) said: Your messenger also told us that pilgrimage (Hajj) to the House (of Ka'bah) had been made obligatory for him who is able to undertake the journey to it. He (the Holy Prophet) said: Yes. The narrator said that he (the bedouin) set off (at the conclusion of this answer, but at the time of his departure) remarked: 'By Him Who sent you with the Truth, I would neither make any addition to them nor would I diminish anything out of them. Upon this the Prophet remarked: If he were true (to what he said) he must enter Paradise",
    "grade": "Sahih"
  },
  {
    "id": "muslim-103",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 103,
    "arabic": "حَدَّثَنِي عَبْدُ اللَّهِ بْنُ هَاشِمٍ الْعَبْدِيُّ، حَدَّثَنَا بَهْزٌ، حَدَّثَنَا سُلَيْمَانُ بْنُ الْمُغِيرَةِ، عَنْ ثَابِتٍ، قَالَ قَالَ أَنَسٌ كُنَّا نُهِينَا فِي الْقُرْآنِ أَنْ نَسْأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم عَنْ شَىْءٍ ‏.‏ وَسَاقَ الْحَدِيثَ بِمِثْلِهِ ‏.‏",
    "english": "It is narrated on the authority of Thabit that Anas said:We were forbidden in the Holy Qur'an that we should ask about anything from the Messenger of Allah (ﷺ) and then Anas reported the hadith in similar words",
    "grade": "Sahih"
  },
  {
    "id": "muslim-104",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 104,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ، حَدَّثَنَا أَبِي، حَدَّثَنَا عَمْرُو بْنُ عُثْمَانَ، حَدَّثَنَا مُوسَى بْنُ طَلْحَةَ، قَالَ حَدَّثَنِي أَبُو أَيُّوبَ، أَنَّ أَعْرَابِيًّا، عَرَضَ لِرَسُولِ اللَّهِ صلى الله عليه وسلم وَهُوَ فِي سَفَرٍ ‏.‏ فَأَخَذَ بِخِطَامِ نَاقَتِهِ أَوْ بِزِمَامِهَا ثُمَّ قَالَ يَا رَسُولَ اللَّهِ - أَوْ يَا مُحَمَّدُ - أَخْبِرْنِي بِمَا يُقَرِّبُنِي مِنَ الْجَنَّةِ وَمَا يُبَاعِدُنِي مِنَ النَّارِ ‏.‏ قَالَ فَكَفَّ النَّبِيُّ صلى الله عليه وسلم ثُمَّ نَظَرَ فِي أَصْحَابِهِ ثُمَّ قَالَ ‏\"‏ لَقَدْ وُفِّقَ - أَوْ لَقَدْ هُدِيَ - قَالَ كَيْفَ قُلْتَ ‏\"‏ ‏.‏ قَالَ فَأَعَادَ ‏.‏ فَقَالَ النَّبِيُّ صلى الله عليه وسلم ‏\"‏ تَعْبُدُ اللَّهَ لاَ تُشْرِكُ بِهِ شَيْئًا وَتُقِيمُ الصَّلاَةَ وَتُؤْتِي الزَّكَاةَ وَتَصِلُ الرَّحِمَ دَعِ النَّاقَةَ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Abu Ayyub Ansari that once during the journey of the Prophet (may peace of Allah be upon him) a bedouin appeared before him and caught hold of the nosestring of his she-camel and then said, Messenger of Allah (or Muhammad), inform me about that which takes me near to Paradise and draws me away from the Fire (of Hell). He (the narrator) said:The Prophet (ﷺ) stopped for a while and cast a glance upon his companions and then said: He was afforded a good opportunity (or he had been guided well). He (the Holy Prophet) addressing the bedouin said: (Repeat) whatever you have uttered. He (the bedouin) repeated that. Upon this the Apostle (ﷺ) remarked: The deed which can draw you near to Paradise and take you away from Hell is, that you worship Allah and associate none with Him, and you establish prayer and pay Zakat, and do good to your kin. After having uttered these words, the Prophet asked the bedouin to release the nosestring of his she-camel",
    "grade": "Sahih"
  },
  {
    "id": "muslim-105",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 105,
    "arabic": "وَحَدَّثَنِي مُحَمَّدُ بْنُ حَاتِمٍ، وَع��بْدُ الرَّحْمَنِ بْنُ بِشْرٍ، قَالاَ حَدَّثَنَا بَهْزٌ، حَدَّثَنَا شُعْبَةُ، حَدَّثَنَا مُحَمَّدُ بْنُ عُثْمَانَ بْنِ عَبْدِ اللَّهِ بْنِ مَوْهَبٍ، وَأَبُوهُ، عُثْمَانُ أَنَّهُمَا سَمِعَا مُوسَى بْنَ طَلْحَةَ، يُحَدِّثُ عَنْ أَبِي أَيُّوبَ، عَنِ النَّبِيِّ صلى الله عليه وسلم بِمِثْلِ هَذَا الْحَدِيثِ ‏.‏",
    "english": "This hadith is transmitted by Muhammad b. Hatim on the authority of Abu Ayyub Ansari",
    "grade": "Sahih"
  },
  {
    "id": "muslim-106",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 106,
    "arabic": "حَدَّثَنَا يَحْيَى بْنُ يَحْيَى التَّمِيمِيُّ، أَخْبَرَنَا أَبُو الأَحْوَصِ، ح وَحَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا أَبُو الأَحْوَصِ، عَنْ أَبِي إِسْحَاقَ، عَنْ مُوسَى بْنِ طَلْحَةَ، عَنْ أَبِي أَيُّوبَ، قَالَ جَاءَ رَجُلٌ إِلَى النَّبِيِّ صلى الله عليه وسلم فَقَالَ دُلَّنِي عَلَى عَمَلٍ أَعْمَلُهُ يُدْنِينِي مِنَ الْجَنَّةِ وَيُبَاعِدُنِي مِنَ النَّارِ ‏.‏ قَالَ ‏\"‏ تَعْبُدُ اللَّهَ لاَ تُشْرِكُ بِهِ شَيْئًا وَتُقِيمُ الصَّلاَةَ وَتُؤْتِي الزَّكَاةَ وَتَصِلُ ذَا رَحِمِكَ ‏\"‏ فَلَمَّا أَدْبَرَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ إِنْ تَمَسَّكَ بِمَا أُمِرَ بِهِ دَخَلَ الْجَنَّةَ ‏\"‏ ‏.‏ وَفِي رِوَايَةِ ابْنِ أَبِي شَيْبَةَ ‏\"‏ إِنْ تَمَسَّكَ بِهِ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Abu Ayyub that a man came to the Prophet (ﷺ) and said:Direct me to a deed which draws me near to Paradise and takes me away from the Fire (of Hell). Upon this he (the Holy Prophet) said: You worship Allah and never associate anything with Him, establish prayer, and pay Zakat, and do good to your kin. When he turned his back, the Messenger of Allah (ﷺ) remarked: If he adheres to what he has been ordered to do, he would enter Paradise",
    "grade": "Sahih"
  },
  {
    "id": "muslim-107",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 107,
    "arabic": "وَحَدَّثَنِي أَبُو بَكْرِ بْنُ إِسْحَاقَ، حَدَّثَنَا عَفَّانُ، حَدَّثَنَا وُهَيْبٌ، حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنْ أَبِي زُرْعَةَ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ أَعْرَابِيًّا، جَاءَ إِلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللَّهِ دُلَّنِي عَلَى عَمَلٍ إِذَا عَمِلْتُهُ دَخَلْتُ الْجَنَّةَ ‏.‏ قَالَ ‏\"‏ تَعْبُدُ اللَّهَ لاَ تُشْرِكُ بِهِ شَيْئًا وَتُقِيمُ الصَّلاَةَ الْمَكْتُوبَةَ وَتُؤَدِّي الزَّكَاةَ الْمَفْرُوضَةَ وَتَصُومُ رَمَضَانَ ‏\"‏ ‏.‏ قَالَ وَالَّذِي نَفْسِي بِيَدِهِ لاَ أَزِيدُ عَلَى هَذَا شَيْئًا أَبَدًا وَلاَ أَنْقُصُ مِنْهُ ‏.‏ فَلَمَّا وَلَّى قَالَ النَّبِيُّ صلى الله عليه وسلم ‏\"‏ مَنْ سَرَّهُ أَنْ يَنْظُرَ إِلَى رَجُلٍ مِنْ أَهْلِ الْجَنَّةِ فَلْيَنْظُرْ إِلَى هَذَا ‏\"‏ ‏.‏",
    "english": "It is reported on the authority of Abu Huraira that a bedouin came to the Messenger of Allah (ﷺ) and said:Messenger of Allah, direct me to a deed by which I may be entitled to enter Paradise. Upon this he (the Holy Prophet) remarked: You worship Allah and never associate anything with Him, establish the obligatory prayer, and pay the Zakat which is incumbent upon you, and observe the fast of Ramadan. He (the bedouin) said: By Him in Whose hand is my life, I will never add anything to it, nor will I diminish anything from it. When he (the bedouin) turned his back, the Prophet (ﷺ) said: He who is pleased to see a man from the dwellers of Paradise should catch a glimpse of him",
    "grade": "Sahih"
  },
  {
    "id": "muslim-108",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 108,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، وَأَبُو كُرَيْبٍ - وَاللَّفْظُ لأَبِي كُرَيْبٍ - قَالاَ حَدَّثَنَا أَبُو مُعَاوِيَةَ، عَنِ الأَعْمَشِ، عَنْ أَبِي سُفْيَانَ، عَنْ جَابِرٍ، قَالَ أَتَى النَّبِيَّ صلى الله عليه وسلم النُّعْمَانُ بْنُ قَوْقَلٍ فَقَالَ يَا رَسُولَ اللَّهِ أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوبَةَ وَحَرَّمْتُ الْحَرَامَ وَأَحْلَلْتُ الْحَلاَلَ أَأَدْخُلُ الْجَنَّةَ فَقَالَ النَّبِيُّ صلى الله عليه وسلم ‏ \"‏ نَعَمْ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of Jabir that Nu'man b. Qaufal came to the Prophet (ﷺ) and said:Would I enter Paradise if I say the obligatory prayers and deny myself that which is forbidden and treat that as lawful what has been made permissible (by the Shari'ah)? The Prophet (ﷺ) replied in the affirmative",
    "grade": "Sahih"
  },
  {
    "id": "muslim-109",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 109,
    "arabic": "وَحَدَّثَنِي حَجَّاجُ بْنُ الشَّاعِرِ، وَالْقَاسِمُ بْنُ زَكَرِيَّاءَ، قَالاَ حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُوسَى، عَنْ شَيْبَانَ، عَنِ الأَعْمَشِ، عَنْ أَبِي صَالِحٍ، وَأَبِي، سُفْيَانَ عَنْ جَابِرٍ، قَالَ قَالَ النُّعْمَانُ بْنُ قَوْقَلٍ يَا رَسُولَ اللَّهِ ‏.‏ بِمِثْلِهِ ‏.‏ وَزَادَ فِيهِ وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا ‏.‏",
    "english": "A similar hadith is narrated on Jabir's authority in which the following words are added:I will do nothing more",
    "grade": "Sahih"
  },
  {
    "id": "muslim-110",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 110,
    "arabic": "وَحَدَّثَنِي سَلَمَةُ بْنُ شَبِيبٍ، حَدَّثَنَا الْحَسَنُ بْنُ أَعْيَنَ، حَدَّثَنَا مَعْقِلٌ، - وَهُوَ ابْنُ عُبَيْدِ اللَّهِ - عَنْ أَبِي الزُّبَيْرِ، عَنْ جَابِرٍ، أَنَّ رَجُلاً، سَأَلَ رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ أَرَأَيْتَ إِذَا صَلَّيْتُ الصَّلَوَاتِ الْمَكْتُوبَاتِ وَصُمْتُ رَمَضَانَ وَأَحْلَلْتُ الْحَلاَلَ وَحَرَّمْتُ الْحَرَامَ وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا أَأَدْخُلُ الْجَنَّةَ قَالَ ‏ \"‏ نَعَمْ ‏\"‏ ‏.‏ قَالَ وَاللَّهِ لاَ أَزِيدُ عَلَى ذَلِكَ شَيْئًا ‏.‏",
    "english": "It is narrated on the authority of Jabir that a man once said to the Messenger of Allah (ﷺ):Shall I enter Paradise in case I say the obligatory prayers, observe the (fasts) of Ramadan and treat that as lawful which has been made permissible (by the Shari'ah) and deny myself that what is forbidden, and make no addition to it? He (the Holy Prophet) replied in the affirmative. He (the inquirer) said: By Allah, I would add nothing to it",
    "grade": "Sahih"
  },
  {
    "id": "muslim-111",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 111,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ الْهَمْدَانِيُّ، حَدَّثَنَا أَبُو خَالِدٍ، - يَعْنِي سُلَيْمَانَ بْنَ حَيَّانَ الأَحْمَرَ - عَنْ أَبِي مَالِكٍ الأَشْجَعِيِّ، عَنْ سَعْدِ بْنِ عُبَيْدَةَ، عَنِ ابْنِ عُمَرَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ بُنِيَ الإِسْلاَمُ عَلَى خَمْسَةٍ عَلَى أَنْ يُوَحَّدَ اللَّهُ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَصِيَامِ رَمَضَانَ وَالْحَجِّ ‏\"‏ ‏.‏ فَقَالَ رَجُلٌ الْحَجِّ وَصِيَامِ رَمَضَانَ قَالَ لاَ ‏.‏ صِيَامِ رَمَضَانَ وَالْحَجِّ ‏.‏ هَكَذَا سَمِعْتُهُ مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم ‏.‏",
    "english": "It is narrated on the authority of ('Abdullah) son of Umar (may Allah be pleased with them) that the Prophet (may peace of Allah be upon him) said:(The superstructure of) al-Islam is raised on five (pillars), i. e. the oneness of Allah, the establishment of prayer, payment of Zakat, the, fast of Ramadan, Pilgrimage (to Mecca). A person said (to 'Abdullah b. Umar the narrator): Which of the two precedes the other-Pilgrimage or the fasts of Rarnadan? Upon this he (the narrator) replied: No (it is not the Pilgrimage first) but the fasts of Ramadan precede the Pilgrimage",
    "grade": "Sahih"
  },
  {
    "id": "muslim-112",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 112,
    "arabic": "وَحَدَّثَنَا سَهْلُ بْنُ عُثْمَانَ الْعَسْكَرِيُّ، حَدَّثَنَا يَحْيَى بْنُ زَكَرِيَّاءَ، حَدَّثَنَا سَعْدُ بْنُ طَارِقٍ، قَالَ حَدَّثَنِي سَعْدُ بْنُ عُبَيْدَةَ السُّلَمِيُّ، عَنِ ابْنِ عُمَرَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ عَلَى أَنْ يُعْبَدَ اللَّهُ وَيُكْفَرَ بِمَا دُونَهُ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَحَجِّ الْبَيْتِ وَصَوْمِ رَمَضَانَ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of ('Abdullah) son of 'Umar, that the Prophet (may peace of Allah be upon him) said:(The superstructure of) al-Islam is raised on five (pillars), i. e. Allah (alone) should be worshipped, and (all other gods) beside Him should be (categorically) denied. Establishment of prayer, the payment of Zakat, Pilgrimage to the House, and the fast of Ramadan (are the other obligatory acts besides the belief in the oneness of Allah and denial of all other gods)",
    "grade": "Sahih"
  },
  {
    "id": "muslim-113",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 113,
    "arabic": "حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ مُعَاذٍ، حَدَّثَنَا أَبِي، حَدَّثَنَا عَاصِمٌ، - وَهُوَ ابْنُ مُحَمَّدِ بْنِ زَيْدِ بْنِ عَبْدِ اللَّهِ بْنِ عُمَرَ - عَنْ أَبِيهِ، قَالَ قَالَ عَبْدُ اللَّهِ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَحَجِّ الْبَيْتِ وَصَوْمِ رَمَضَانَ ‏\"‏ ‏.‏",
    "english": "It is narrated on the authority of 'Abdullah son of 'Umar that the Messenger of Allah (ﷺ) said:(The superstructure of) al-Islam is raised on five (pillars), testifying (the fact) that there is no god but Allah, that Muhammad is His bondsman and messenger, and the establishment of prayer, payment of Zakat, Pilgrimage to the House (Ka'ba) and the fast of Ramadan",
    "grade": "Sahih"
  },
  {
    "id": "muslim-114",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 114,
    "arabic": "وَحَدَّثَنِي ابْنُ نُمَيْرٍ، حَدَّثَنَا أَبِي، حَدَّثَنَا حَنْظَلَةُ، قَالَ سَمِعْتُ عِكْرِمَةَ بْنَ خَالِدٍ، يُحَدِّثُ طَاوُسًا أَنَّ رَجُلاً، قَالَ لِعَبْدِ اللَّهِ بْنِ عُمَرَ أَلاَ تَغْزُو فَقَالَ إِنِّي سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ \"‏ إِنَّ الإِسْلاَمَ بُنِيَ عَلَى خَمْسٍ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَإِقَامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَصِيَامِ رَمَضَانَ وَحَجِّ الْبَيْتِ ‏\"‏ ‏.‏",
    "english": "It is reported on the authority of Ta'us that a man said to 'Abdullah son of 'Umar (may Allah be pleased with him). Why don't you carry out a military expedition? Upon which he replied:I heard the messenger of Allah (ﷺ) say: Verily, al-Islam is founded on five (pillars): testifying the fact that there is no god but Allah, establishment of prayer, payment of Zakat, fast of Ramadan and Pilgrimage to the House",
    "grade": "Sahih"
  },
  {
    "id": "muslim-115",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 115,
    "arabic": "حَدَّثَنَا خَلَفُ بْنُ هِشَامٍ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، عَنْ أَبِي جَمْرَةَ، قَالَ سَمِعْتُ ابْنَ عَبَّاسٍ، ح وَحَدَّثَنَا يَحْيَى بْنُ يَحْيَى، - وَاللَّفْظُ لَهُ - أَخْبَرَنَا عَبَّادُ بْنُ عَبَّادٍ، عَنْ أَبِي جَمْرَةَ، عَنِ ابْنِ عَبَّاسٍ، قَالَ قَدِمَ وَفْدُ عَبْدِ الْقَيْسِ عَلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالُوا يَا رَسُولَ اللَّهِ إِنَّا هَذَا الْحَىَّ مِنْ رَبِيعَةَ وَقَدْ حَالَتْ بَيْنَنَا وَبَيْنَكَ كُفَّارُ مُضَرَ فَلاَ نَخْلُصُ إِلَيْكَ إِلاَّ فِي شَهْرِ الْحَرَامِ فَمُرْنَا بِأَمْرٍ نَعْمَلُ بِهِ وَنَدْعُو إِلَيْهِ مَنْ وَرَاءَنَا ‏.‏ قَالَ ‏\"‏ آمُرُكُمْ بِأَرْبَعٍ وَأَنْهَاكُمْ عَنْ أَرْبَعٍ الإِيمَانِ بِاللَّهِ - ثُمَّ فَسَّرَهَا لَهُمْ فَقَالَ - شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِ��َامِ الصَّلاَةِ وَإِيتَاءِ الزَّكَاةِ وَأَنْ تُؤَدُّوا خُمُسَ مَا غَنِمْتُمْ وَأَنْهَاكُمْ عَنِ الدُّبَّاءِ وَالْحَنْتَمِ وَالنَّقِيرِ وَالْمُقَيَّرِ ‏\"‏ ‏.‏ زَادَ خَلَفٌ فِي رِوَايَتِهِ ‏\"‏ شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ ‏\"‏ ‏.‏ وَعَقَدَ وَاحِدَةً ‏.‏",
    "english": "It is narrated on the authority of Ibn 'Abbas that a delegation of Abdul Qais came to the Messenger of Allah (ﷺ) and said:Messenger of Allah, verily ours is a tribe of Rabi'a and there stand between you and us the unbelievers of Mudar and we find no freedom to come to you except in the sacred month. Direct us to an act which we should ourselves perform and invite those who live beside us. Upon this the Prophet remarked: I command you to do four things and prohibit you against four acts. (The four deeds which you are commanded to do are): Faith in Allah, and then he explained it for them and said: Testifying the fact. that there is no god but Allah, that Muhammad is the messenger of Allah, performance of prayer, payment of Zakat, that you pay Khums (one-fifth) of the booty fallen to your lot, and I prohibit you to use round gourd, wine jars, wooden pots or skins for wine. Khalaf b. Hisham has made this addition in his narration: Testifying the fact that there is no god but Allah, and then he with his finger pointed out the oneness of the Lord",
    "grade": "Sahih"
  },
  {
    "id": "muslim-116",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 116,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، وَمُحَمَّدُ بْنُ الْمُثَنَّى، وَمُحَمَّدُ بْنُ بَشَّارٍ، وَأَلْفَاظُهُمْ، مُتَقَارِبَةٌ - قَالَ أَبُو بَكْرٍ حَدَّثَنَا غُنْدَرٌ، عَنْ شُعْبَةَ، وَقَالَ الآخَرَانِ، حَدَّثَنَا مُحَمَّدُ بْنُ جَعْفَرٍ، حَدَّثَنَا شُعْبَةُ، - عَنْ أَبِي جَمْرَةَ، قَالَ كُنْتُ أُتَرْجِمُ بَيْنَ يَدَىِ ابْنِ عَبَّاسٍ وَبَيْنَ النَّاسِ فَأَتَتْهُ امْرَأَةٌ تَسْأَلُهُ عَنْ نَبِيذِ الْجَرِّ، فَقَالَ إِنَّ وَفْدَ عَبْدِ الْقَيْسِ أَتَوْا رَسُولَ اللَّهِ صلى الله عليه وسلم فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ مَنِ الْوَفْدُ أَوْ مَنِ الْقَوْمُ ‏\"‏ ‏.‏ قَالُوا رَبِيعَةُ ‏.‏ قَالَ ‏\"‏ مَرْحَبًا بِالْقَوْمِ أَوْ بِالْوَفْدِ غَيْرَ خَزَايَا وَلاَ النَّدَامَى ‏\"‏ ‏.‏ قَالَ فَقَالُوا يَا رَسُولَ اللَّهِ إِنَّا نَأْتِيكَ مِنْ شُقَّةٍ بَعِيدَةٍ وَإِنَّ بَيْنَنَا وَبَيْنَكَ هَذَا الْحَىَّ مِنْ كُفَّارِ مُضَرَ وَإِنَّا لاَ نَسْتَطِيعُ أَنْ نَأْتِيَكَ إِلاَّ فِي شَهْرِ الْحَرَامِ فَمُرْنَا بِأَمْرٍ فَصْلٍ نُخْبِرْ بِهِ مَنْ وَرَاءَنَا نَدْخُلُ بِهِ الْجَنَّةَ ‏.‏ قَالَ فَأَمَرَهُمْ بِأَرْبَعٍ وَنَهَاهُمْ عَنْ أَرْبَعٍ ‏.‏ قَالَ أَمَرَهُمْ بِالإِيمَانِ بِاللَّهِ وَحْدَهُ ‏.‏ وَقَالَ ‏\"‏ هَلْ تَدْرُونَ مَا الإِيمَانُ بِاللَّهِ ‏\"‏ ‏.‏ قَالُوا اللَّهُ وَرَسُولُهُ أَعْلَمُ ‏.‏ قَالَ ‏\"‏ شَهَادَةُ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ وَإِقَامُ الصَّلاَةِ وَإِيتَاءُ الزَّكَاةِ وَص��وْمُ رَمَضَانَ وَأَنْ تُؤَدُّوا خُمُسًا مِنَ الْمَغْنَمِ ‏\"‏ ‏.‏ وَنَهَاهُمْ عَنِ الدُّبَّاءِ وَالْحَنْتَمِ وَالْمُزَفَّتِ ‏.‏ قَالَ شُعْبَةُ وَرُبَّمَا قَالَ النَّقِيرِ ‏.‏ قَالَ شُعْبَةُ وَرُبَّمَا قَالَ الْمُقَيَّرِ ‏.‏ وَقَالَ ‏\"‏ احْفَظُوهُ وَأَخْبِرُوا بِهِ مِنْ وَرَائِكُمْ ‏\"‏ ‏.‏ وَقَالَ أَبُو بَكْرٍ فِي رِوَايَتِهِ ‏\"‏ مَنْ وَرَاءَكُمْ ‏\"‏ وَلَيْسَ فِي رِوَايَتِهِ الْمُقَيَّرِ ‏.‏",
    "english": "Abu Jamra reported:I was an interpreter between Ibn Abbas and the people, that a woman happened to come there and asked about nabidh or the pitcher of wine. He replied: A delegation of the people of 'Abdul-Qais came to the Messenger of Allah (ﷺ). He (the Holy Prophet) asked the delegation or the people (of the delegation about their identity). They replied that they belonged to the tribe of Rabi'a. He (the Holy Prophet) welcomed the people or the delegation which were neither humiliated nor put to shame. They (the members of the delegation) said: Messenger of Allah, we come to you from a far-off distance and there lives between you and us a tribe of the unbelievers of Mudar and, therefore, it is not possible for us to come to you except in the sacred months. Thus direct us to a clear command, about which we should inform people beside us and by which we may enter heaven. He (the Holy Prophet) replied: I command you to do four deeds and forbid you to do four (acts), and added: I direct you to affirm belief in Allah alone, and then asked them: Do you know what belief in Allah really implies? They said: Allah and His Messenger know best. The Prophet said: It implies testimony to the fact that there is no god but Allah, and that Muhammad is the messenger of Allah, establishment of prayer, payment of Zakat, fast of Ramadan, that you pay one-fifth of the booty (fallen to your lot) and I forbid you to use gourd, wine jar, or a receptacle for wine. Shu'ba sometimes narrated the word naqir (wooden pot) and sometimes narrated it as muqayyar. The Prophet also said: Keep it in your mind and inform those who have been left behind",
    "grade": "Sahih"
  },
  {
    "id": "muslim-117",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 117,
    "arabic": "وَحَدَّثَنِي عُبَيْدُ اللَّهِ بْنُ مُعَاذٍ، حَدَّثَنَا أَبِي ح، وَحَدَّثَنَا نَصْرُ بْنُ عَلِيٍّ الْجَهْضَمِيُّ، قَالَ أَخْبَرَنِي أَبِي قَالاَ، جَمِيعًا حَدَّثَنَا قُرَّةُ بْنُ خَالِدٍ، عَنْ أَبِي جَمْرَةَ، عَنِ ابْنِ عَبَّاسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم بِهَذَا الْحَدِيثِ نَحْوَ حَدِيثِ شُعْبَةَ ‏.‏ وَقَالَ ‏\"‏ أَنْهَاكُمْ عَمَّا يُنْبَذُ فِي الدُّبَّاءِ وَالنَّقِيرِ وَالْحَنْتَمِ وَالْمُزَفَّتِ ‏\"‏ ‏.‏ وَزَادَ ابْنُ مُعَاذٍ فِي حَدِيثِهِ عَنْ أَبِيهِ قَالَ وَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم لِلأَشَجِّ أَشَجِّ عَبْدِ الْقَيْسِ ‏\"‏ إِنَّ فِيكَ خَصْلَتَيْنِ يُحِبُّهُمَا اللَّهُ الْحِلْمُ وَالأَنَاةُ ‏\"‏ ‏.‏",
    "english": "There is another hadith narrated on the authority of Ibn Abbas (the contents of which are similar to the one) narrated by Shu'ba in which the Prophet (ﷺ) said:I forbid you to prepare nabidh in a gourd, hollowed block of wood, a varnished jar or receptacle. Ibn Mu'adh made this addition on the authority of his father that the Messenger of Allah said to Ashajj, of the tribe of 'Abdul-Qais: You possess two qualities which are liked by Allah: insight and deliberateness",
    "grade": "Sahih"
  },
  {
    "id": "muslim-118",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 118,
    "arabic": "حَدَّثَنَا يَحْيَى بْنُ أَيُّوبَ، حَدَّثَنَا ابْنُ عُلَيَّةَ، حَدَّثَنَا سَعِيدُ بْنُ أَبِي عَرُوبَةَ، عَنْ قَتَادَةَ، قَالَ حَدَّثَنَا مَنْ، لَقِيَ الْوَفْدَ الَّذِينَ قَدِمُوا عَلَى رَسُولِ اللَّهِ صلى الله عليه وسلم مِنْ عَبْدِ الْقَيْسِ ‏.‏ قَالَ سَعِيدٌ وَذَكَرَ قَتَادَةُ أَبَا نَضْرَةَ عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ فِي حَدِيثِهِ هَذَا ‏.‏ أَنَّ أُنَاسًا مِنْ عَبْدِ الْقَيْسِ قَدِمُوا عَلَى رَسُولِ اللَّهِ صلى الله عليه وسلم فَقَالُوا يَا نَبِيَّ اللَّهِ إِنَّا حَىٌّ مِنْ رَبِيعَةَ وَبَيْنَنَا وَبَيْنَكَ كُفَّارُ مُضَرَ وَلاَ نَقْدِرُ عَلَيْكَ إِلاَّ فِي أَشْهُرِ الْحُرُمِ فَمُرْنَا بِأَمْرٍ نَأْمُرُ بِهِ مَنْ وَرَاءَنَا وَنَدْخُلُ بِهِ الْجَنَّةَ إِذَا نَحْنُ أَخَذْنَا بِهِ ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ آمُرُكُمْ بِأَرْبَعٍ وَأَنْهَاكُمْ عَنْ أَرْبَعٍ اعْبُدُوا اللَّهَ وَلاَ تُشْرِكُوا بِهِ شَيْئًا وَأَقِيمُوا الصَّلاَةَ وَآتُوا الزَّكَاةَ وَصُومُوا رَمَضَانَ وَأَعْطُوا الْخُمُسَ مِنَ الْغَنَائِمِ وَأَنْهَاكُمْ عَنْ أَرْبَعٍ عَنِ الدُّبَّاءِ وَالْحَنْتَمِ وَالْمُزَفَّتِ وَالنَّقِيرِ ‏\"‏ ‏.‏ قَالُوا يَا نَبِيَّ اللَّهِ مَا عِلْمُكَ بِالنَّقِيرِ قَالَ ‏\"‏ بَلَى جِذْعٌ تَنْقُرُونَهُ فَتَقْذِفُونَ فِيهِ مِنَ الْقُطَيْعَاءِ - قَالَ سَعِيدٌ أَوْ قَالَ مِنَ التَّمْرِ - ثُمَّ تَصُبُّونَ فِيهِ مِنَ الْمَاءِ حَتَّى إِذَا سَكَنَ غَلَيَانُهُ شَرِبْتُمُوهُ حَتَّى إِنَّ أَحَدَكُمْ - أَوْ إِنَّ أَحَدَهُمْ - لَيَضْرِبُ ابْنَ عَمِّهِ بِالسَّيْفِ ‏\"‏ ‏.‏ قَالَ وَفِي الْقَوْمِ رَجُلٌ أَصَابَتْهُ جِرَاحَةٌ كَذَلِكَ ‏.‏ قَالَ وَكُنْتُ أَخْبَأُهَا حَيَاءً مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم فَقُلْتُ فَفِيمَ نَشْرَبُ يَا رَسُولَ اللَّهِ قَالَ ‏\"‏ فِي أَسْقِيَةِ الأَدَمِ الَّتِي يُلاَثُ عَلَى أَفْوَاهِهَا ‏\"‏ ‏.‏ قَالُوا يَا رَسُولَ اللَّهِ إِنَّ أَرْضَنَا كَثِيرَةُ الْجِرْذَانِ وَلاَ تَبْقَى بِهَا أَسْقِيَةُ الأَدَمِ ‏.‏ فَقَالَ نَبِيُّ اللَّهِ صلى الله عليه وسلم ‏\"‏ وَإِنْ أَكَلَتْهَا الْجِرْذَانُ وَإِنْ أَكَلَتْهَا الْجِرْذَانُ وَإِنْ أَكَلَتْهَا الْجِرْذَانُ ‏\"‏ ‏.‏ قَالَ وَقَالَ نَبِيُّ اللَّهِ صلى الله عليه وسلم لأَشَجِّ عَبْدِ الْقَيْسِ ‏\"‏ إِنَّ فِيكَ لَخَصْلَتَيْنِ يُحِبُّهُمَا اللَّهُ الْحِلْمُ وَالأَنَاةُ ‏\"‏ ‏.‏",
    "english": "It is reported on the authority of Qatada that one among the delegates of the 'Abdul-Qais tribe narrated this tradition to him. Sa'id said that Qatada had mentioned the name of Abu Nadra on the authority of Abu Sa'id Khudri who narrated this tradition:That people from the- tribe of 'Abdul-Qais came to the Messenger of Allah (ﷺ) and said: Messenger of Allah, we belong to the tribe of Rabi'a and there live between you and us the unbelievers of the Mudar tribe and we find it impossible to come to you except in the sacred months; direct us to a deed which we must communicate to those who have been left behind us and by doing which we may enter heaven. Upon this the Messenger of Allah (ﷺ) said: I enjoin upon you four (things) and forbid you to do four (things): worship Allah and associate none with Him, establish prayer, pay Zakat, and observe the fast of Ramadan, and pay the fifth part out of the booty. And I prohibit you from four (things): dry gourds, green-coloured jars, hollowed stumps of palm-trees, and receptacles. They (the members of the delegation) said: Do you know what al-naqir is? He replied: Yes, it is a stump which you hollow out and in which you throw small dates. Sa'id said: He (the Holy Prophet) used the word tamar (dates). (The Prophet then added): Then you sprinkle water over it and when its ebullition subsides, you drink it (and you are so intoxicated) that one amongst you, or one amongst them (the other members of your tribe, who were not present there) strikes his cousin with the sword. He (the narrator) said: There was a man amongst us who had sustained injury on this very account due to (intoxication), and he told that he tried to conceal it out of shame from the Messenger of Allah (ﷺ). I, however, inquired from the Messenger of Allah (it we discard those utensils which you have forbidden us to use), then what type of vessels should be used for drink? He (the Holy Prophet) replied: In the waterskin the mouths of which are tied (with a string). They (again) said: Prophet of Allah, our land abounds in rats and water-skins cannot remain preserved. The holy Prophet of Allah (ﷺ) said: (Drink in water-skins) even if these arenibbled by rats. And then (addressing) al-Ashajj of 'Abdul-Qais he said: Verily, you possess two such qualities which Allah loves: insight and deliberateness",
    "grade": "Sahih"
  },
  {
    "id": "muslim-119",
    "collection": "muslim",
    "collectionName": "Sahih Muslim",
    "hadithNumber": 119,
    "arabic": "حَدَّثَنِي مُحَمَّدُ بْنُ الْمُثَنَّى، وَابْنُ، بَشَّارٍ قَالاَ حَدَّثَنَا ابْنُ أَبِي عَدِيٍّ، عَنْ سَعِيدٍ، عَنْ قَتَادَةَ، قَالَ حَدَّثَنِي غَيْرُ، وَاحِدٍ، لَقِيَ ذَاكَ الْوَفْدَ ‏.‏ وَذَكَرَ أَبَا نَضْرَةَ عَنْ أَبِي سَعِيدٍ الْخُدْرِيِّ، أَنَّ وَفْدَ عَبْدِ الْقَيْسِ، لَمَّا قَدِمُوا عَلَى رَسُولِ اللَّهِ صلى الله عليه وسلم بِمِثْلِ حَدِيثِ ابْنِ عُلَيَّةَ غَيْرَ أَنَّ فِيهِ ‏ \"‏ وَتَذِيفُونَ فِيهِ مِنَ الْقُطَيْعَاءِ أَوِ التَّمْرِ وَالْمَاءِ ‏\"‏ ‏.‏ وَلَمْ يَقُلْ قَالَ سَعِيدٌ أَوْ قَالَ مِنَ التَّمْرِ ‏.‏",
    "english": "The above hadith has been mentioned with a different chain and slightly different wording",
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
    "arabic": "حَدَّثَنَا مُوسَى بْنُ إِسْمَاعِيلَ، حَدَّثَنَا حَمَّادٌ، أَخْبَرَنَا أَبُو التَّيَّاحِ، حَدَّثَنِي شَيْخٌ، قَالَ لَمَّا قَدِمَ عَبْدُ اللَّهِ بْنُ عَبَّاسٍ الْبَصْرَةَ فَكَانَ يُحَدَّثُ عَنْ أَبِي مُوسَى، فَكَتَبَ عَبْدُ اللَّهِ إِلَى أَبِي مُوسَى يَسْأَلُهُ عَنْ أَشْيَاءَ، فَكَتَبَ إِلَيْهِ أَبُو مُوسَى إِنِّي كُنْتُ مَعَ رَسُولِ اللَّهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ فَأَرَادَ أَنْ يَبُولَ فَأَتَى دَمِثًا فِي أَصْلِ جِدَارٍ فَبَالَ ثُمَّ قَالَ صلى الله عليه وسلم ‏ \"‏ إِذَا أَرَادَ أَحَدُكُمْ أ��نْ يَبُولَ فَلْيَرْتَدْ لِبَوْلِهِ مَوْضِعًا ‏\"‏ ‏.‏",
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
    "arabic": "حَدَّثَنَا مُسَدَّدُ بْنُ مُسَرْهَدٍ، حَدَّثَنَا أَبُو مُعَاوِيَةَ، عَنِ الأَعْمَشِ، عَنْ إ��بْرَاهِيمَ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ يَزِيدَ، عَنْ سَلْمَانَ، قَالَ قِيلَ لَهُ لَقَدْ عَلَّمَكُمْ نَبِيُّكُمْ كُلَّ شَىْءٍ حَتَّى الْخِرَاءَةَ ‏.‏ قَالَ أَجَلْ لَقَدْ نَهَانَا صلى الله عليه وسلم أَنْ نَسْتَقْبِلَ الْقِبْلَةَ بِغَائِطٍ أَوْ بَوْلٍ وَأَنْ لاَ نَسْتَنْجِيَ بِالْيَمِينِ وَأَنْ لاَ يَسْتَنْجِيَ أَحَدُنَا بِأَقَلَّ مِنْ ثَلاَثَةِ أَحْجَارٍ أَوْ يَسْتَنْجِيَ بِرَجِيعٍ أَوْ عَظْمٍ ‏.‏",
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
    "id": "abudawud-11",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 11,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ يَحْيَى بْنِ فَارِسٍ، حَدَّثَنَا صَفْوَانُ بْنُ عِيسَى، عَنِ الْحَسَنِ بْنِ ذَكْوَانَ، عَنْ مَرْوَانَ الأَصْفَرِ، قَالَ رَأَيْتُ ابْنَ عُمَرَ أَنَاخَ رَاحِلَتَهُ مُسْتَقْبِلَ الْقِبْلَةِ ثُمَّ جَلَسَ يَبُولُ إِلَيْهَا فَقُلْتُ يَا أَبَا عَبْدِ الرَّحْمَنِ أَلَيْسَ قَدْ نُهِيَ عَنْ هَذَا قَالَ بَلَى إِنَّمَا نُهِيَ عَنْ ذَلِكَ فِي الْفَضَاءِ فَإِذَا كَانَ بَيْنَكَ وَبَيْنَ الْقِبْلَةِ شَىْءٌ يَسْتُرُكَ فَلاَ بَأْسَ ‏.‏",
    "english": "Marwan al-Asfar said:I saw Ibn Umar make his camel kneel down facing the qiblah, then he sat down urinating in its direction. So I said: AbuAbdurRahman, has this not been forbidden? He replied: Why not, that was forbidden only in open country; but when there is something between you and the qiblah that conceals you , then there is no harm",
    "grade": "Hasan"
  },
  {
    "id": "abudawud-12",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 12,
    "arabic": "حَدَّثَنَا عَبْدُ اللَّهِ بْنُ مَسْلَمَةَ، عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، عَنْ مُحَمَّدِ بْنِ يَحْيَى بْنِ حَبَّانَ، عَنْ عَمِّهِ، وَاسِعِ بْنِ حَبَّانَ، عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، قَالَ لَقَدِ ارْتَقَيْتُ عَلَى ظَهْرِ الْبَيْتِ فَرَأَيْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم عَلَى لَبِنَتَيْنِ مُسْتَقْبِلَ بَيْتِ الْمَقْدِسِ لِحَاجَتِهِ",
    "english": "Narrated 'Abd Allaah b. 'Umar :I ascended the roof of the house and saw the Apostle of Allaah ( sal Allaahu alayhi wa sallam) sitting on two bricks facing Jerusalem (Bait al-Maqdis) for relieving himself",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-13",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 13,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا وَهْبُ بْنُ جَرِيرٍ، حَدَّثَنَا أَبِي قَالَ، سَمِعْتُ مُحَمَّدَ بْنَ إِسْحَاقَ، يُحَدِّثُ عَنْ أَبَانَ بْنِ صَالِحٍ، عَنْ مُجَاهِدٍ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ، قَالَ نَهَى نَبِيُّ اللَّهِ صلى الله عليه وسلم أَنْ نَسْتَقْبِلَ الْقِبْلَةَ بِبَوْلٍ فَرَأَيْتُهُ قَبْلَ أَنْ يُقْبَضَ بِعَامٍ يَسْتَقْبِلُهَا ‏.‏",
    "english": "Narrated Jabir ibn Abdullah: The Prophet of Allah (ﷺ) forbade us to face the qiblah at the time of making water. Then I saw him facing it (qiblah) urinating or easing himself one year before his death",
    "grade": "Hasan"
  },
  {
    "id": "abudawud-14",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 14,
    "arabic": "حَدَّثَنَا زُهَيْرُ بْنُ حَرْبٍ، حَدَّثَنَا وَكِيعٌ، عَنِ الأَعْمَشِ، عَنْ رَجُلٍ، عَنِ ابْنِ عُمَرَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا أَرَادَ حَاجَةً لاَ يَرْفَعُ ثَوْبَهُ حَتَّى يَدْنُوَ مِنَ الأَرْضِ ‏.‏ قَالَ أَبُو دَاوُدَ رَوَاهُ عَبْدُ السَّلاَمِ بْنُ حَرْبٍ عَنِ الأَعْمَشِ عَنْ أَنَسِ بْنِ مَالِكٍ وَهُوَ ضَعِيفٌ ‏.‏ قَالَ أَبُو عِيسَى الرَّمْلِيُّ حَدَّثَنَا أَحْمَدُ بْنُ الْوَلِيدِ حَدَّثَنَا عَمْرُو بْنُ عَوْنٍ أَخْبَرَنَا عَبْدُ السَّلاَمِ بِهِ ‏.‏",
    "english": "Narrated Abdullah ibn Umar: When the Prophet (ﷺ) wanted to relieve himself, he would not raise his garment, until he lowered himself near the ground. Abu DAwud said: This tradition has been transmitted by 'Abd al-Salam b. Harb on the authority of al-A'mash from Anas b. Malik. This chain of narrators is weak (because A'mash's hearing tradition from Anas b. Malik is not established)",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-15",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 15,
    "arabic": "حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ عُمَرَ بْنِ مَيْسَرَةَ، حَدَّثَنَا ابْنُ مَهْدِيٍّ، حَدَّثَنَا عِكْرِمَةُ بْنُ عَمَّارٍ، عَنْ يَحْيَى بْنِ أَبِي كَثِيرٍ، عَنْ هِلاَلِ بْنِ عِيَاضٍ، قَالَ حَدَّثَنِي أَبُو سَعِيدٍ، قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ \"‏ لاَ يَخْرُجُ الرَّجُلاَنِ يَضْرِبَانِ الْغَائِطَ كَاشِفَيْنِ عَنْ عَوْرَتِهِمَا يَتَحَدَّثَانِ فَإِنَّ اللَّهَ عَزَّ وَجَلَّ يَمْقُتُ عَلَى ذَلِكَ ‏\"‏ ‏.‏ قَالَ أَبُو دَاوُدَ هَذَا لَمْ يُسْنِدْهُ إِلاَّ عِكْرِمَةُ بْنُ عَمَّارٍ ‏.‏",
    "english": "Narrated AbuSa'id al-Khudri: I heard the Messenger of Allah (ﷺ) say: When two persons go together for relieving themselves uncovering their private parts and talking together, Allah, the Great and Majestic, becomes wrathful at this (action). Abu Dawud said: This tradition has been narrated only by 'Ikrimah b. 'Ammar",
    "grade": "Daif"
  },
  {
    "id": "abudawud-16",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 16,
    "arabic": "حَدَّثَنَا عُثْمَانُ، وَأَبُو بَكْرٍ ابْنَا أَبِي شَيْبَةَ قَالاَ حَدَّثَنَا عُمَرُ بْنُ سَعْدٍ، عَنْ سُفْيَانَ، عَنِ الضَّحَّاكِ بْنِ عُثْمَانَ، عَنْ نَافِعٍ، عَنِ ابْنِ عُمَرَ، قَالَ مَرَّ رَجُلٌ عَلَى النَّبِيِّ صلى الله عليه وسلم وَهُوَ يَبُولُ فَسَلَّمَ عَلَيْهِ فَلَمْ يَرُدَّ عَلَيْهِ ‏.‏ قَالَ أَبُو دَاوُدَ وَرُوِيَ عَنِ ابْنِ عُمَرَ وَغَيْرِهِ أَنَّ النَّبِيَّ صلى الله عليه وسلم تَيَمَّمَ ثُمَّ رَدَّ عَلَى الرَّجُلِ السَّلاَمَ ‏.‏",
    "english": "Narrated Ibn 'Umar : A man passed by the Prophet (sal Allaahu alayhi wa sallam ) while he was urinating, and saluted him. The Prophet (sal Allaahu alayhi wa sallam) did not return the salutation to him. Abu Dawud said : It is narrated on the authority of Ibn 'Umar that the Prophet (sal Allaahu alayhi wa sallam) performed tayammum, then he returned the salutation to the man",
    "grade": "Hasan"
  },
  {
    "id": "abudawud-17",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 17,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ الْمُثَنَّى، حَدَّثَنَا عَبْدُ الأَعْلَى، حَدَّثَنَا سَعِيدٌ، عَنْ قَتَادَةَ، عَنِ الْحَسَنِ، عَنْ حُضَيْنِ بْنِ الْمُنْذِرِ أَبِي سَاسَانَ، عَنِ الْمُهَاجِرِ بْنِ قُنْفُذٍ، أَنَّهُ أَتَى النَّبِيَّ صلى الله عليه وسلم وَهُوَ يَبُولُ فَسَلَّمَ عَلَيْهِ فَلَمْ يَرُدَّ عَلَيْهِ حَتَّى تَوَضَّأَ ثُمَّ اعْتَذَرَ إِلَيْهِ فَقَالَ ‏\"‏ إِنِّي كَرِهْتُ أَنْ أَذْكُرَ اللَّهَ عَزَّ وَجَلَّ إِلاَّ عَلَى طُهْرٍ ‏\"‏ ‏.‏ أَوْ قَالَ ‏\"‏ عَلَى طَهَارَةٍ ‏\"‏ ‏.‏",
    "english": "Narrated Muhajir ibn Qunfudh: Muhajir came to the Prophet (ﷺ) while he was urinating. He saluted him. The Prophet (ﷺ) did not return the salutation to him until he performed ablution. He then apologised to him, saying: I disliked remembering Allah except in the state of purification",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-18",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 18,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ الْعَلاَءِ، حَدَّثَنَا ابْنُ أَبِي زَائِدَةَ، عَنْ أَبِيهِ، عَنْ خَالِدِ بْنِ سَلَمَةَ، - يَعْنِي الْفَأْفَاءَ - عَنِ الْبَهِيِّ، عَنْ عُرْوَةَ، عَنْ عَائِشَةَ، قَالَتْ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم يَذْكُرُ اللَّهَ عَزَّ وَجَلَّ عَلَى كُلِّ أَحْيَانِهِ ‏.‏",
    "english": "Narrated A'ishah:The Apostle of Allaah ( sal Allaahu alayhi wa sallam ) used to remember Allaah, the Great and Majestic, at all moments",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-19",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 19,
    "arabic": "حَدَّثَنَا نَصْرُ بْنُ عَلِيٍّ، عَنْ أَبِي عَلِيٍّ الْحَنَفِيِّ، عَنْ هَمَّامٍ، عَنِ ابْنِ جُرَيْجٍ، عَنِ الزُّهْرِيِّ، عَنْ أَنَسٍ، قَالَ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا دَخَلَ الْخَلاَءَ وَضَعَ خَاتَمَهُ ‏.‏ قَالَ أَبُو دَاوُدَ هَذَا حَدِيثٌ مُنْكَرٌ وَإِنَّمَا يُعْرَفُ عَنِ ابْنِ جُرَيْجٍ عَنْ زِيَادِ بْنِ سَعْدٍ عَنِ الزُّهْرِيِّ عَنْ أَنَسٍ أَنَّ النَّبِيَّ صلى الله عليه وسلم اتَّخَذَ خَاتَمًا مِنْ وَرِقٍ ثُمَّ أَلْقَاهُ ‏.‏ وَالْوَهَمُ فِيهِ مِنْ هَمَّامٍ وَلَمْ يَرْوِهِ إِلاَّ هَمَّامٌ ‏.‏",
    "english": "Narrated Anas ibn Malik: When the Prophet (ﷺ) entered the privy, he removed his ring. Abu Dawud said: This is a munkar tradition, i.e. it contradicts the well-known version reported by reliable narrators. On the authority of Anas the well-known version says: The Prophet (ﷺ) had a silver ring made for him. Then he cast it off. The misunderstanding is on the part of Hammam (who is the narrator of the previous tradition mentioned in the text). This is transmitted only by Hammam",
    "grade": "Daif"
  },
  {
    "id": "abudawud-20",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 20,
    "arabic": "حَدَّثَنَا زُهَيْرُ بْنُ حَرْبٍ، وَهَنَّادُ بْنُ السَّرِيِّ، قَالاَ حَدَّثَنَا وَكِيعٌ، حَدَّثَنَا الأَعْمَشُ، قَالَ سَمِعْتُ مُجَاهِدًا، يُحَدِّثُ عَنْ طَاوُسٍ، عَنِ ابْنِ عَبَّاسٍ، قَالَ مَرَّ رَسُولُ اللَّهِ صلى الله عليه وسلم عَلَى قَبْرَيْنِ فَقَالَ ‏\"‏ إِنَّهُمَا يُعَذَّبَانِ وَمَا يُعَذَّبَانِ فِي كَبِيرٍ أَمَّا هَذَا فَكَانَ لاَ يَسْتَنْزِهُ مِنَ الْبَوْلِ وَأَمَّا هَذَا فَكَانَ يَمْشِي بِالنَّمِيمَةِ ‏\"‏ ‏.‏ ثُمَّ دَعَا بِعَسِيبٍ رَطْبٍ فَشَقَّهُ بِاثْنَيْنِ ثُمَّ غَرَسَ عَلَى هَذَا وَاحِدًا وَعَلَى هَذَا وَاحِدًا وَقَالَ ‏\"‏ لَعَلَّهُ يُخَفَّفُ عَنْهُمَا مَا لَمْ يَيْبَسَا ‏\"‏ ‏.‏ قَالَ هَنَّادٌ ‏\"‏ يَسْتَتِرُ ‏\"‏ ‏.‏ مَكَانَ ‏\"‏ يَسْتَنْزِهُ ‏\"‏ ‏.‏",
    "english": "Narrated Ibn 'Abbas : The Prophet (sal Allaahu alayhi wa sallam ) passed by two graves. He said : Both (the dead) are being punished, but they are not being punished for a major (sin). One did not safeguard himself from urine. The other carried tales. He then called for a fresh twig and split it into two parts and planted one part on each grave and said: Perhaps their punishment may be mitigated as long as the twigs remain fresh. Another version of Hannad has: \"One of them did not cover himself while urinating.\" This version does not have the words: \"He did not safeguard himself from urine",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-21",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 21,
    "arabic": "حَدَّثَنَا عُثْمَانُ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا جَرِيرٌ، عَنْ مَنْصُورٍ، عَنْ مُجَاهِدٍ، عَنِ ابْنِ عَبَّاسٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم بِمَعْنَاهُ قَالَ ‏\"‏ كَانَ لاَ يَسْتَتِرُ مِنْ بَوْلِهِ ‏\"‏ ‏.‏ وَقَالَ أَبُو مُعَاوِيَةَ ‏\"‏ يَسْتَنْزِهُ ‏\"‏ ‏.‏",
    "english": "Narrated Ibn 'Abbas: A tradition from the Prophet (sal Allaahu alayhi wa sallam ) conveying similar meaning. The version of Jarir has the wording : \"he did not cover himself while urinating.\" The version of Abu Mu'awiyah has the wording: \"he did not safeguard himself (from urine)",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-22",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 22,
    "arabic": "حَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا عَبْدُ الْوَاحِدِ بْنُ زِيَادٍ، حَدَّثَنَا الأَعْمَشُ، عَنْ زَيْدِ بْنِ وَهْبٍ، عَنْ عَبْدِ الرَّحْمَنِ ابْنِ حَسَنَةَ، قَالَ انْطَلَقْتُ أَنَا وَعَمْرُو بْنُ الْعَاصِ، إِلَى النَّبِيِّ صلى الله عليه وسلم فَخَرَجَ وَمَعَهُ دَرَقَةٌ ثُمَّ اسْتَتَرَ بِهَا ثُمَّ بَالَ فَقُلْنَا انْظُرُوا إِلَيْهِ يَبُولُ كَمَا تَبُولُ الْمَرْأَةُ ‏.‏ فَسَمِعَ ذَلِكَ فَقَالَ ‏\"‏ أَلَمْ تَعْلَمُوا مَا لَقِيَ صَاحِبُ بَنِي إِسْرَائِيلَ كَانُوا إِذَا أَصَابَهُمُ الْبَوْلُ قَطَعُوا مَا أَصَابَهُ الْبَوْلُ مِنْهُمْ فَنَهَاهُمْ فَعُذِّبَ فِي قَبْرِهِ ‏\"‏ ‏.‏ قَالَ أَبُو دَاوُدَ قَالَ مَنْصُورٌ عَنْ أَبِي وَائِلٍ عَنْ أَبِي مُوسَى فِي هَذَا الْحَدِيثِ قَالَ ‏\"‏ جِلْدَ أَحَدِهِمْ ‏\"‏ ‏.‏ وَقَالَ عَاصِمٌ عَنْ أَبِي وَائِلٍ عَنْ أَبِي مُوسَى عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏\"‏ جَسَدَ أَحَدِهِمْ ‏\"‏ ‏.‏",
    "english": "Narrated Amr ibn al-'As: AbdurRahman ibn Hasanah reported: I and Amr ibn al-'As went to the Prophet (ﷺ). He came out with a leather shield (in his hand). He covered himself with it and urinated. Then we said: Look at him. He is urinating as a woman does. The Prophet (ﷺ), heard this and said: Do you not know what befell a person from amongst Banu Isra'il (the children of Israel)? When urine fell on them, they would cut off the place where the urine fell; but he (that person) forbade them (to do so), and was punished in his grave. Abu Dawud said: One version of Abu Musa has the wording: \"he cut off his skin\". Another version of Abu Musa goes: \"he cut off (part of) his body",
    "grade": "Sahih Muquf"
  },
  {
    "id": "abudawud-23",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 23,
    "arabic": "حَدَّثَنَا حَفْصُ بْنُ عُمَرَ، وَمُسْلِمُ بْنُ إِبْرَاهِيمَ، قَالاَ حَدَّثَنَا شُعْبَةُ، ح وَحَدَّثَنَا مُسَدَّدٌ، حَدَّثَنَا أَبُو عَوَانَةَ، - وَهَذَا لَفْظُ حَفْصٍ - عَنْ سُلَيْمَانَ، عَنْ أَبِي وَائِلٍ، عَنْ حُذَيْفَةَ، قَالَ أَتَى رَسُولُ اللَّهِ صلى الله عليه وسلم سُبَاطَةَ قَوْمٍ فَبَالَ قَائِمًا ثُمَّ دَعَا بِمَاءٍ فَمَسَحَ عَلَى خُفَّيْهِ ‏.‏ قَالَ أَبُو دَاوُدَ قَالَ مُسَدَّدٌ قَالَ فَذَهَبْتُ أَتَبَاعَدُ فَدَعَانِي حَتَّى كُنْتُ عِنْدَ عَقِبِهِ ‏.‏",
    "english": "Narrated Hudhaifah : The Apostle of Allaah ( sal Allaahu alayhi wa sallam ) came to a midden of some people and urinated while standing. He then asked for water and wiped his shoes. Abu Dawud said: Musaddad, a narrator, reported: I went far away from him. He then called me and I reached just near his heals",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-24",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 24,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عِيسَى، حَدَّثَنَا حَجَّاجٌ، عَنِ ابْنِ جُرَيْجٍ، عَنْ حُكَيْمَةَ بِنْتِ أُمَيْمَةَ بِنْتِ رُقَيْقَةَ، عَنْ أُمِّهَا، أَنَّهَا قَالَتْ كَانَ لِلنَّبِيِّ صلى الله عليه وسلم قَدَحٌ مِنْ عَيْدَانٍ تَحْتَ سَرِيرِهِ يَبُولُ فِيهِ بِاللَّيْلِ ‏.‏",
    "english": "Narrated Umaymah daughter of Ruqayqah: The Prophet (ﷺ) had a wooden vessel under his bed in which he would urinate at night",
    "grade": "Hasan Sahih"
  },
  {
    "id": "abudawud-25",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 25,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، حَدَّثَنَا إِسْمَاعِيلُ بْنُ جَعْفَرٍ، عَنِ الْعَلاَءِ بْنِ عَبْدِ الرَّحْمَنِ، عَنْ أَبِيهِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏\"‏ اتَّقُوا اللاَّعِنَيْنِ ‏\"‏ ‏.‏ قَالُوا وَمَا اللاَّعِنَانِ يَا رَسُولَ اللَّهِ قَالَ ‏\"‏ الَّذِي يَتَخَلَّى فِي طَرِيقِ النَّاسِ أَوْ ظِلِّهِمْ ‏\"‏ ‏.‏",
    "english": "Narrated Abu Hurairah:The Prophet (sal Allaahu alayhi wa sallam ) as saying : Be on your guard against two things which provoke cursing. They (the hearers) said : Prophet of Allaah ( sal Allaahu alayhi wa sallam), what are these things which provoke cursing: easing in the watering places and on the thoroughfares, and in the shade (of the tree)(where they take shelter and rest)",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-26",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 26,
    "arabic": "حَدَّثَنَا إِسْحَاقُ بْنُ سُوَيْدٍ الرَّمْلِيُّ، وَعُمَرُ بْنُ الْخَطَّابِ أَبُو حَفْصٍ، وَحَدِيثُهُ، أَتَمُّ أَنَّ سَعِيدَ بْنَ الْحَكَمِ، حَدَّثَهُمْ قَالَ أَخْبَرَنَا نَافِعُ بْنُ يَزِيدَ، حَدَّثَنِي حَيْوَةُ بْنُ شُرَيْحٍ، أَنَّ أَبَا سَعِيدٍ الْحِمْيَرِيَّ، حَدَّثَهُ عَنْ مُعَاذِ بْنِ جَبَلٍ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ اتَّقُوا الْمَلاَعِنَ الثَّلاَثَ الْبَرَازَ فِي الْمَوَارِدِ وَقَارِعَةِ الطَّرِيقِ وَالظِّلِّ ‏\"‏ ‏.‏",
    "english": "Narrated Mu'adh ibn Jabal: The Messenger of Allah (ﷺ) said: Be on your guard against three things which provoke cursing: easing in the watering places and on the thoroughfares, and in the shade (of the tree)",
    "grade": "Hasan"
  },
  {
    "id": "abudawud-27",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 27,
    "arabic": "حَدَّثَنَا أَحْمَدُ بْنُ مُحَمَّدِ بْنِ حَنْبَلٍ، وَالْحَسَنُ بْنُ عَلِيٍّ، قَالاَ حَدَّثَنَا عَبْدُ الرَّزَّاقِ، قَالَ أَحْمَدُ حَدَّثَنَا مَعْمَرٌ، أَخْبَرَنِي أَشْعَثُ، وَقَالَ الْحَسَنُ، عَنْ أَشْعَثَ بْنِ عَبْدِ اللَّهِ، عَنِ الْحَسَنِ، عَنْ عَبْدِ اللَّهِ بْنِ مُغَفَّلٍ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ لاَ يَبُولَنَّ أَحَدُكُمْ فِي مُسْتَحَمِّهِ ثُمَّ يَغْتَسِلُ فِيهِ ‏\"‏ ‏.‏ قَالَ أَحْمَدُ ‏\"‏ ثُمَّ يَتَوَضَّأُ فِيهِ فَإِنَّ عَامَّةَ الْوَسْوَاسِ مِنْهُ ‏\"‏ ‏.‏",
    "english": "Narrated Abdullah ibn Mughaffal: The Messenger of Allah (ﷺ) said: No one of you should make water in his bath and then wash himself there (after urination). The version of Ahmad has: Then performs ablution there, for evil thoughts come from it",
    "grade": "Daif"
  },
  {
    "id": "abudawud-28",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 28,
    "arabic": "حَدَّثَنَا أَحْمَدُ بْنُ يُونُسَ، حَدَّثَنَا زُهَيْرٌ، عَنْ دَاوُدَ بْنِ عَبْدِ اللَّهِ، عَنْ حُمَيْدٍ الْحِمْيَرِيِّ، - وَهُوَ ابْنُ عَبْدِ الرَّحْمَنِ - قَالَ لَقِيتُ رَجُلاً صَحِبَ النَّبِيَّ صلى الله عليه وسلم كَمَا صَحِبَهُ أَبُو هُرَيْرَةَ قَالَ نَهَى رَسُولُ اللَّهِ صلى الله عليه وسلم أَنْ يَمْتَشِطَ أَحَدُنَا كُلَّ يَوْمٍ أَوْ يَبُولَ فِي مُغْتَسَلِهِ ‏.‏",
    "english": "Narrated A Man from the Companions: Humayd al-Himyari said: I met a man (Companion of the Prophet) who remained in the company of the Prophet (ﷺ) just as AbuHurayrah remained in his company. He then added: The Messenger of Allah (ﷺ) forbade that anyone amongst us should comb (his hair) every day or urinate in the place where he takes a bath",
    "grade": "Sahih"
  },
  {
    "id": "abudawud-29",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 29,
    "arabic": "حَدَّثَنَا عُبَيْدُ اللَّهِ بْنُ عُمَرَ بْنِ مَيْسَرَةَ، حَدَّثَنَا مُعَاذُ بْنُ هِشَامٍ، حَدَّثَنِي أَبِي، عَنْ قَتَادَةَ، عَنْ عَبْدِ اللَّهِ بْنِ سَرْجِسَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم نَهَى أَنْ يُبَالَ فِي الْجُحْرِ ‏.‏ قَالَ قَالُوا لِقَتَادَةَ مَا يُكْرَهُ مِنَ الْبَوْلِ فِي الْجُحْرِ قَالَ كَانَ يُقَالُ إِنَّهَا مَسَاكِنُ الْجِنِّ ‏.‏",
    "english": "Narrated Abdullah ibn Sarjis: The Prophet (ﷺ) prohibited to urinate in a hole. Qatadah (a narrator) was asked about the reason for the disapproval of urinating in a hole. He replied: It is said that these (holes) are the habitats of the jinn",
    "grade": "Daif"
  },
  {
    "id": "abudawud-30",
    "collection": "abudawud",
    "collectionName": "Sunan Abu Dawud",
    "hadithNumber": 30,
    "arabic": "حَدَّثَنَا عَمْرُو بْنُ مُحَمَّدٍ النَّاقِدُ، حَدَّثَنَا هَاشِمُ بْنُ الْقَاسِمِ، حَدَّثَنَا إِسْرَائِيلُ، عَنْ يُوسُفَ بْنِ أَبِي بُرْدَةَ، عَنْ أَبِيهِ، حَدَّثَتْنِي عَائِشَةُ، رضى الله عنها أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا خَرَجَ مِنَ الْغَائِطِ قَالَ ‏ \"‏ غُفْرَانَكَ ‏\"‏ ‏.‏",
    "english": "Narrated Aisha, Ummul Mu'minin: When the Prophet (ﷺ) came out of the privy, he used to say: \"Grant me Thy forgiveness",
    "grade": "Sahih"
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
    "arabic": "حَدَّثَنَا إِسْحَاقُ بْنُ مُوسَى الأَنْصَارِيُّ، حَدَّثَنَا مَعْنُ بْنُ عِيسَى الْقَزَّازُ، حَدَّثَنَا مَالِكُ بْنُ أَنَسٍ، ح وَحَدَّثَنَا قُتَيْبَةُ، عَنْ مَالِكٍ، عَنْ سُهَيْلِ بْنِ أَبِي صَالِحٍ، عَنْ أَبِيهِ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ إِذَا تَوَضَّأَ الْعَبْدُ الْمُسْلِمُ أَوِ الْمُؤْمِنُ فَغَسَلَ وَجْهَهُ خَرَجَتْ ��ِنْ وَجْهِهِ كُلُّ خَطِيئَةٍ نَظَرَ إِلَيْهَا بِعَيْنَيْهِ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ أَوْ نَحْوِ هَذَا وَإِذَا غَسَلَ يَدَيْهِ خَرَجَتْ مِنْ يَدَيْهِ كُلُّ خَطِيئَةٍ بَطَشَتْهَا يَدَاهُ مَعَ الْمَاءِ أَوْ مَعَ آخِرِ قَطْرِ الْمَاءِ حَتَّى يَخْرُجَ نَقِيًّا مِنَ الذُّنُوبِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ وَهُوَ حَدِيثُ مَالِكٍ عَنْ سُهَيْلٍ عَنْ أَبِيهِ عَنْ أَبِي هُرَيْرَةَ ‏.‏ وَأَبُو صَالِحٍ وَالِدُ سُهَيْلٍ هُوَ أَبُو صَالِحٍ السَّمَّانُ وَاسْمُهُ ذَكْوَانُ ‏.‏ وَأَبُو هُرَيْرَةَ اخْتُلِفَ فِي اسْمِهِ فَقَالُوا عَبْدُ شَمْسٍ وَقَالُوا عَبْدُ اللَّهِ بْنُ عَمْرٍو وَهَكَذَا قَالَ مُحَمَّدُ بْنُ إِسْمَاعِيلَ وَهُوَ الأَصَحُّ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عُثْمَانَ بْنِ عَفَّانَ وَثَوْبَانَ وَالصُّنَابِحِيِّ وَعَمْرِو بْنِ عَبَسَةَ وَسَلْمَانَ وَعَبْدِ اللَّهِ بْنِ عَمْرٍو ‏.‏ وَالصُّنَابِحِيُّ الَّذِي رَوَى عَنْ أَبِي بَكْرٍ الصِّدِّيقِ لَيْسَ لَهُ سَمَاعٌ مِنْ رَسُولِ اللَّهِ صلى الله عليه وسلم وَاسْمُهُ عَبْدُ الرَّحْمَنِ بْنُ عُسَيْلَةَ وَيُكْنَى أَبَا عَبْدِ اللَّهِ رَحَلَ إِلَى النَّبِيِّ صلى الله عليه وسلم فَقُبِضَ النَّبِيُّ صلى الله عليه وسلم وَهُوَ فِي الطَّرِيقِ وَقَدْ رَوَى عَنِ النَّبِيِّ صلى الله عليه وسلم أَحَادِيثَ ‏.‏ وَالصُّنَابِحُ بْنُ الأَعْسَرِ الأَحْمَسِيُّ صَاحِبُ النَّبِيِّ صلى الله عليه وسلم يُقَالُ لَهُ الصُّنَابِحِيُّ أَيْضًا وَإِنَّمَا حَدِيثُهُ قَالَ سَمِعْتُ النَّبِيَّ صلى الله عليه وسلم يَقُولُ ‏\"‏ إِنِّي مُكَاثِرٌ بِكُمُ الأُمَمَ فَلاَ تَقْتَتِلُنَّ بَعْدِي ‏\"‏ ‏.‏",
    "english": "Abu Hurairah narrated that :Allah's Messenger said: \"When a Muslim, or believer, performs Wudu', washing his face, every evil that he looked at with his eyes leaves with the water - or with the last drop of water, or an expression similar to that - and when he washes his hands, every evil he did with his hands leaves with the water - or with the last drop of water - until he becomes free of sin",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-3",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 3,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، وَهَنَّادٌ، وَمَحْمُودُ بْنُ غَيْلاَنَ، قَالُوا حَدَّثَنَا وَكِيعٌ، عَنْ سُفْيَانَ، ح وَحَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ مَهْدِيٍّ، حَدَّثَنَا سُفْيَانُ، عَنْ عَبْدِ اللَّهِ بْنِ مُحَمَّدِ بْنِ عَقِيلٍ، عَنْ مُحَمَّدِ ابْنِ الْحَنَفِيَّةِ، عَنْ عَلِيٍّ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ مِفْتَاحُ الصَّلاَةِ الطُّهُورُ وَتَحْرِيمُهَا التَّكْبِيرُ وَتَحْلِيلُهَا التَّسْلِيمُ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا الْحَد��يثُ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ وَأَحْسَنُ ‏.‏ وَعَبْدُ اللَّهِ بْنُ مُحَمَّدِ بْنِ عَقِيلٍ هُوَ صَدُوقٌ وَقَدْ تَكَلَّمَ فِيهِ بَعْضُ أَهْلِ الْعِلْمِ مِنْ قِبَلِ حِفْظِهِ ‏.‏ قَالَ أَبُو عِيسَى وَسَمِعْتُ مُحَمَّدَ بْنَ إِسْمَاعِيلَ يَقُولُ كَانَ أَحْمَدُ بْنُ حَنْبَلٍ وَإِسْحَاقُ بْنُ إِبْرَاهِيمَ وَالْحُمَيْدِيُّ يَحْتَجُّونَ بِحَدِيثِ عَبْدِ اللَّهِ بْنِ مُحَمَّدِ بْنِ عَقِيلٍ ‏.‏ قَالَ مُحَمَّدٌ وَهُوَ مُقَارِبُ الْحَدِيثِ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ جَابِرٍ وَأَبِي سَعِيدٍ ‏.‏",
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
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، وَهَنَّادٌ، قَالاَ حَدَّثَنَا وَكِيعٌ، عَنْ شُعْبَةَ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا دَخَلَ الْخَلاَءَ قَالَ ‏ \"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ قَالَ شُعْبَةُ وَقَدْ قَالَ مَرَّةً أُخْرَى أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبِيثِ أَوِ الْخُبُثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عَلِيٍّ وَزَيْدِ بْنِ أَرْقَمَ وَجَابِرٍ وَابْنِ مَسْعُودٍ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ أَنَسٍ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ وَأَحْسَنُ ‏.‏ وَحَدِيثُ زَيْدِ بْنِ أَرْقَمَ فِي إِسْنَادِهِ اضْطِرَابٌ رَوَى هِشَامٌ الدَّسْتَوَائِيُّ وَسَعِيدُ بْنُ أَبِي عَرُوبَةَ عَنْ قَتَادَةَ فَقَالَ سَعِيدٌ عَنِ الْقَاسِمِ بْنِ عَوْفٍ الشَّيْبَانِيِّ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَقَالَ هِشَامٌ الدَّسْتَوَائِيُّ عَنْ قَتَادَةَ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَرَوَاهُ شُعْبَةُ وَمَعْمَرٌ عَنْ قَتَادَةَ عَنِ النَّضْرِ بْنِ أَنَسٍ فَقَالَ شُعْبَةُ عَنْ زَيْدِ بْنِ أَرْقَمَ ‏.‏ وَقَالَ مَعْمَرٌ عَنِ النَّضْرِ بْنِ أَنَسٍ عَنْ أَبِيهِ عَنِ ��لنَّبِيِّ صلى الله عليه وسلم ‏.‏ قَالَ أَبُو عِيسَى سَأَلْتُ مُحَمَّدًا عَنْ هَذَا فَقَالَ يُحْتَمَلُ أَنْ يَكُونَ قَتَادَةُ رَوَى عَنْهُمَا جَمِيعًا ‏.‏",
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
    "id": "tirmidhi-11",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 11,
    "arabic": "حَدَّثَنَا هَنَّادٌ، حَدَّثَنَا عَبْدَةُ بْنُ سُلَيْمَانَ، عَنْ عُبَيْدِ اللَّهِ بْنِ عُمَرَ، عَنْ مُحَمَّدِ بْنِ يَحْيَى بْنِ حَبَّانَ، عَنْ عَمِّهِ، وَاسِعِ بْنِ حَبَّانَ، عَنِ ابْنِ عُمَرَ، قَالَ رَقِيتُ يَوْمًا عَلَى بَيْتِ حَفْصَةَ فَرَأَيْتُ النَّبِيَّ صلى الله عليه وسلم عَلَى حَاجَتِهِ مُسْتَقْبِلَ الشَّأْمِ مُسْتَدْبِرَ الْكَعْبَةِ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏",
    "english": "Ibn 'Umar said:\"One day I climbed on Hafsah's house, and I saw the Prophet relieving himself while facing Ash-Sham, with his back toward the Ka'bah",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-12",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 12,
    "arabic": "حَدَّثَنَا عَلِيُّ بْنُ حُجْرٍ، أَخْبَرَنَا شَرِيكٌ، عَنِ الْمِقْدَامِ بْنِ شُرَيْحٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، قَالَتْ مَنْ حَدَّثَكُمْ أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ يَبُولُ قَائِمًا فَلاَ تُصَدِّقُوهُ مَا كَانَ يَبُولُ إِلاَّ قَاعِدًا ‏.‏ قَالَ وَفِي الْبَابِ عَنْ عُمَرَ وَبُرَيْدَةَ وَعَبْدِ الرَّحْمَنِ بْنِ حَسَنَةَ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ عَائِشَةَ أَحْسَنُ شَيْءٍ فِي هَذَا الْبَابِ وَأَصَحُّ ‏.‏ وَحَدِيثُ عُمَرَ إِنَّمَا رُوِيَ مِنْ حَدِيثِ عَبْدِ الْكَرِيمِ بْنِ أَبِي الْمُخَارِقِ عَنْ نَافِعٍ عَنِ ابْنِ عُمَرَ عَنْ عُمَرَ قَالَ رَآنِي النَّبِيُّ صلى الله عليه وسلم وَأَنَا أَبُولُ قَائِمًا فَقَالَ ‏ \"‏ يَا عُمَرُ لاَ تَبُلْ قَائِمًا ‏\"‏ ‏.‏ فَمَا بُلْتُ قَائِمًا بَعْدُ ‏.‏ قَالَ أَبُو عِيسَى وَإِنَّمَا رَفَعَ هَذَا الْحَدِيثَ عَبْدُ الْكَرِيمِ بْنُ أَبِي الْمُخَارِقِ وَهُوَ ضَعِيفٌ عِنْدَ أَهْلِ الْحَدِيثِ ضَعَّفَهُ أَيُّوبُ السَّخْتِيَانِيُّ وَتَكَلَّمَ فِيهِ ‏.‏ وَرَوَى عُبَيْدُ اللَّهِ عَنْ نَافِعٍ عَنِ ابْنِ عُمَرَ قَالَ قَالَ عُمَرُ رضى الله عنه مَا بُلْتُ قَائِمًا مُنْذُ أَسْلَمْتُ ‏.‏ وَهَذَا أَصَحُّ مِنْ حَدِيثِ عَبْدِ الْكَرِيمِ وَحَدِيثُ بُرَيْدَةَ فِي هَذَا غَيْرُ مَحْفُوظٍ ‏.‏ وَمَعْنَى النَّهْىِ عَنِ الْبَوْلِ قَائِمًا عَلَى التَّأْدِيبِ لاَ عَلَى التَّحْرِيمِ ‏.‏ وَقَدْ رُوِيَ عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ قَالَ إِنَّ مِنَ الْجَفَاءِ أَنْ تَبُولَ وَأَنْتَ قَائِمٌ ‏.‏",
    "english": "Aishah said:\"Whoever narrated to you that the Prophet would urinate while standing; then do not believe him. He would not urinate except while squatting.\" [He said:] There are narrations on this topic from Umar, Buraidah, [and Abdur-Rahman bin Hasanah]",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-13",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 13,
    "arabic": "حَدَّثَنَا هَنَّادٌ، حَدَّثَنَا وَكِيعٌ، عَنِ الأَعْمَشِ، عَنْ أَبِي وَائِلٍ، عَنْ حُذَيْفَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم أَتَى سُبَاطَةَ قَوْمٍ فَبَالَ عَلَيْهَا قَائِمًا فَأَتَيْتُهُ بِوَضُوءٍ فَذَهَبْتُ لأَتَأَخَّرَ عَنْهُ فَدَعَانِي حَتَّى كُنْتُ عِنْدَ عَقِبَيْهِ فَتَوَضَّأَ وَمَسَحَ عَلَى خُفَّيْهِ ‏.‏ قَالَ أَبُو عِيسَى وَسَمِعْتُ الْجَارُودَ يَقُولُ سَمِعْتُ وَكِيعًا يُحَدِّثُ بِهَذَا الْحَدِيثِ عَنِ الأَعْمَشِ ‏.‏ ثُمَّ قَالَ وَكِيعٌ هَذَا أَصَحُّ حَدِيثٍ رُوِيَ عَنِ النَّبِيِّ صلى الله عليه وسلم فِي الْمَسْحِ ‏.‏ وَسَمِعْتُ أَبَا عَمَّارٍ الْحُسَيْنَ بْنَ حُرَيْثٍ يَقُولُ سَمِعْتُ وَكِيعًا فَذَكَرَ نَحْوَهُ ‏.‏ قَالَ أَبُو عِيسَى وَهَكَذَا رَوَى مَنْصُورٌ وَعُبَيْدَةُ الضَّبِّيُّ عَنْ أَبِي وَائِلٍ عَنْ حُذَيْفَةَ مِثْلَ رِوَايَةِ الأَعْمَشِ ‏.‏ وَرَوَى حَمَّادُ بْنُ أَبِي سُلَيْمَانَ وَعَاصِمُ بْنُ بَهْدَلَةَ عَنْ أَبِي وَائِلٍ عَنِ الْمُغِيرَةِ بْنِ شُعْبَةَ عَنِ النَّبِيِّ صلى الله عليه وسلم وَحَدِيثُ أَبِي وَائِلٍ عَنْ حُذَيْفَةَ أَصَحُّ ‏.‏ وَقَدْ رَخَّصَ قَوْمٌ مِنْ أَهْلِ الْعِلْمِ فِي الْبَوْلِ قَائِمًا ‏.‏ قَالَ أَبُو عِيسَى وَعَبِيدَةُ بْنُ عَمْرٍو السَّلْمَانِيُّ رَوَى عَنْهُ إِبْرَاهِيمُ النَّخَعِيُّ ‏.‏ وَعَبِيدَةُ مِنْ كِبَارِ التَّابِعِينَ يُرْوَى عَنْ عَبِيدَةَ أَنَّهُ قَالَ أَسْلَمْتُ قَبْلَ وَفَاةِ النَّبِيِّ صلى الله عليه وسلم بِسَنَتَيْنِ ‏.‏ وَعُبَيْدَةُ الضَّبِّيُّ صَاحِبُ إِبْرَاهِيمَ هُوَ عُبَيْدَةُ بْنُ مُعَتِّبٍ الضَّبِّيُّ وَيُكْنَى أَبَا عَبْدِ الْكَرِيمِ ‏.‏",
    "english": "Hudhaifah narrated:\"Allah's Messenger came to a waste area used by people, so he urinated on it while standing. I brought him the (water for) Wudu. Then I left to be away from him, but he called me until I was behind him. So he performed Wudu and wiped (Masaba) over his Khuff",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-14",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 14,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، حَدَّثَنَا عَبْدُ السَّلاَمِ بْنُ حَرْبٍ الْمُلاَئِيُّ، عَنِ الأَعْمَشِ، عَنْ أَنَسٍ، قَالَ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا أَرَادَ الْحَاجَةَ لَمْ يَرْفَعْ ثَوْبَهُ حَتَّى يَدْنُوَ مِنَ الأَرْضِ ‏.‏ قَالَ أَبُو عِيسَى هَكَذَا رَوَى مُحَمَّدُ بْنُ رَبِيعَةَ عَنِ الأَعْمَشِ عَنْ أَنَسٍ هَذَا الْحَدِيثَ ‏.‏ وَرَوَى وَكِيعٌ وَأَبُو يَحْيَى الْحِمَّانِيُّ عَنِ الأَعْمَشِ قَالَ قَالَ ابْنُ عُمَرَ كَانَ النَّبِيُّ صلى الله عليه وسلم إِذَا أَرَادَ الْحَاجَةَ لَمْ يَرْفَعْ ثَوْبَهُ حَتَّى يَدْنُوَ مِنَ الأَرْضِ ‏.‏ وَكِلاَ الْحَدِيثَيْنِ مُرْسَلٌ ‏.‏ وَيُقَالُ لَمْ يَسْمَعِ الأَعْمَشُ مِنْ أَنَسٍ وَلاَ مِنْ أَحَدٍ مِنْ أَصْحَابِ النَّبِيِّ صلى الله عليه وسلم وَقَدْ نَظَرَ إِلَى أَنَسِ بْنِ مَالِكٍ قَالَ رَأَيْتُهُ يُصَلِّي ‏.‏ فَذَكَرَ عَنْهُ حِكَايَةً فِي الصَّلاَةِ ‏.‏ وَالأَعْمَشُ اسْمُهُ سُلَيْمَانُ بْنُ مِهْرَانَ أَبُو مُحَمَّدٍ الْكَاهِلِيُّ وَهُوَ مَوْلًى لَهُمْ ‏.‏ قَالَ الأَعْمَشُ كَانَ أَبِي حَمِيلاً فَوَرَّثَهُ مَسْرُوقٌ ‏.‏",
    "english": "Anas, may Allah Most High be pleased with him, said:\"When the Prophet wanted to relieve himself, he would not raise his garment until he was close to the ground",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-15",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 15,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ أَبِي عُمَرَ الْمَكِّيُّ، حَدَّثَنَا سُفْيَانُ بْنُ عُيَيْنَةَ، عَنْ مَعْمَرٍ، عَنْ يَحْيَى بْنِ أَبِي كَثِيرٍ، عَنْ عَبْدِ اللَّهِ بْنِ أَبِي قَتَادَةَ، عَنْ أَبِيهِ، أَنَّ النَّبِيَّ صلى الله عليه وسلم نَهَى أَنْ يَمَسَّ الرَّجُلُ ذَكَرَهُ بِيَمِينِهِ ‏.‏ وَفِي هَذَا الْبَابِ عَنْ عَائِشَةَ وَسَلْمَانَ وَأَبِي هُرَيْرَةَ وَسَهْلِ بْنِ حُنَيْفٍ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ وَأَبُو قَتَادَةَ الأَنْصَارِيُّ اسْمُهُ الْحَارِثُ بْنُ رِبْعِيٍّ ‏.‏ وَالْعَمَلُ عَلَى هَذَا عِنْدَ عَامَّةِ أَهْلِ الْعِلْمِ كَرِهُوا الاِسْتِنْجَاءَ بِالْيَمِينِ ‏.‏",
    "english": "Abdullah bin Abu Qatadah narrated from his father:\"The Prophet prohibited that a man should touch his penis with his right hand",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-16",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 16,
    "arabic": "حَدَّثَنَا هَنَّادٌ، حَدَّثَنَا أَبُو مُعَاوِيَةَ، عَنِ الأَعْمَشِ، عَنْ إِبْرَاهِيمَ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ يَزِيدَ، قَالَ قِيلَ لِسَلْمَانَ قَدْ عَلَّمَكُمْ نَبِيُّكُمْ صلى الله عليه وسلم كُلَّ شَيْءٍ حَتَّى الْخِرَاءَةَ فَقَالَ سَلْمَانُ أَجَلْ نَهَانَا أَنْ نَسْتَقْبِلَ الْقِبْلَةَ بِغَائِطٍ أَوْ بَوْلٍ وَأَنْ نَسْتَنْجِيَ بِالْيَمِينِ أَوْ أَنْ يَسْتَنْجِيَ أَحَدُنَا بِأَقَلَّ مِنْ ثَلاَثَةِ أَحْجَارٍ أَوْ أَنْ نَسْتَنْجِيَ بِرَجِيعٍ أَوْ بِعَظْمٍ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عَائِشَةَ وَخُزَيْمَةَ بْنِ ثَابِتٍ وَجَابِرٍ وَخَلاَّدِ بْنِ السَّائِبِ عَنْ أَبِيهِ ‏.‏ قَالَ أَبُو عِيسَى وَحَدِيثُ سَلْمَانَ فِي هَذَا الْبَابِ حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ وَهُوَ قَوْلُ أَكْثَرِ أَهْلِ الْعِلْمِ مِنْ أَصْحَابِ النَّبِيِّ صلى الله عليه وسلم وَمَنْ بَعْدَهُمْ رَأَوْا أَنَّ الاِسْتِنْجَاءَ بِالْحِجَارَةِ يُجْزِئُ وَإِنْ لَمْ يَسْتَنْجِ بِالْمَاءِ إِذَا أَنْقَى أَثَرَ الْغَائِطِ وَالْبَوْلِ وَبِهِ يَقُولُ الثَّوْرِيُّ وَابْنُ الْمُبَارَكِ وَالشَّافِعِيُّ وَأَحْمَدُ وَإِسْحَاقُ ‏.‏",
    "english": "Abdur-Rahman bin Yazld said, :\"They said to Salman, 'Your Prophet taught you about everything, even defecating?' So Salman said, 'Yes. He prohibited us from facing the Qiblah when defecating and urinating, performing Istinja with the right hand, using less than three stones for Istinja, and using dung or bones for Istinja",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-17",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 17,
    "arabic": "حَدَّثَنَا هَنَّادٌ، وَقُتَيْبَةُ، قَالاَ حَدَّثَنَا وَكِيعٌ، عَنْ إِسْرَائِيلَ، عَنْ أَبِي إِسْحَاقَ، عَنْ أَبِي عُبَيْدَةَ، عَنْ عَبْدِ اللَّهِ، قَالَ خَرَجَ النَّبِيُّ صلى الله عليه وسلم لِحَاجَتِهِ فَقَالَ ‏\"‏ الْتَمِسْ لِي ثَلاَثَةَ أَحْجَارٍ ‏\"‏ ‏.‏ قَالَ فَأَتَيْتُهُ بِحَجَرَيْنِ وَرَوْثَةٍ فَأَخَذَ الْحَجَرَيْنِ وَأَلْقَى الرَّوْثَةَ وَقَالَ ‏\"‏ إِنَّهَا رِكْسٌ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى وَهَكَذَا رَوَى قَيْسُ بْنُ الرَّبِيعِ هَذَا الْحَدِيثَ عَنْ أَبِي إِسْحَاقَ عَنْ أَبِي عُبَيْدَةَ عَنْ عَبْدِ اللَّهِ نَحْوَ حَدِيثِ إِسْرَائِيلَ ‏.‏ وَرَوَى مَعْمَرٌ وَعَمَّارُ بْنُ رُزَيْقٍ عَنْ أَبِي إِسْحَاقَ عَنْ عَلْقَمَةَ عَنْ عَبْدِ اللَّهِ ‏.‏ وَرَوَى زُهَيْرٌ عَنْ أَبِي إِسْحَاقَ عَنْ عَبْدِ الرَّحْمَنِ بْنِ الأَسْوَدِ عَنْ أَبِيهِ الأَسْوَدِ بْنِ يَزِيدَ عَنْ عَبْدِ اللَّهِ ‏.‏ وَرَوَى زَكَرِيَّا بْنُ أَبِي زَائِدَةَ عَنْ أَبِي إِسْحَاقَ عَنْ عَبْدِ الرَّحْمَنِ بْنِ يَزِيدَ عَنِ الأَسْوَدِ بْنِ يَزِيدَ عَنْ عَبْدِ اللَّهِ ‏.‏ وَهَذَا حَدِيثٌ فِيهِ اضْطِرَابٌ ‏.‏ حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ الْعَبْدِيُّ حَدَّثَنَا مُحَمَّدُ بْنُ جَعْفَرٍ حَدَّثَنَا شُعْبَةُ عَنْ عَمْرِو بْنِ مُرَّةَ قَالَ سَأَلْتُ أَبَا عُبَيْدَةَ بْنَ عَبْدِ اللَّهِ هَلْ تَذْكُرُ مِنْ عَبْدِ اللَّهِ شَيْئًا قَالَ لاَ ‏.‏",
    "english": "Abdullah said:\"Allah's Messenger went out to relieve himself. So he said: 'Bring me tree stones.'\" He said, \"So I came with two stones and a piece of dung. So he took the two stones, and left the dung. He said: 'It is Riks (a degenerative or filthy thing)",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-18",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 18,
    "arabic": "حَدَّثَنَا هَنَّادٌ، حَدَّثَنَا حَفْصُ بْنُ غِيَاثٍ، عَنْ دَاوُدَ بْنِ أَبِي هِنْدٍ، عَنِ الشَّعْبِيِّ، عَنْ عَلْقَمَةَ، عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ لاَ تَسْتَنْجُوا بِالرَّوْثِ وَلاَ بِالْعِظَامِ فَإِنَّهُ زَادُ إِخْوَانِكُمْ مِنَ الْجِنِّ ‏\"‏ ‏.‏ وَفِي الْبَابِ عَنْ أَبِي هُرَيْرَةَ وَسَلْمَانَ وَجَابِرٍ وَابْنِ عُمَرَ ‏.‏ قَالَ أَبُو عِيسَى وَقَدْ رَوَى هَذَا الْحَدِيثَ إِسْمَاعِيلُ بْنُ إِبْرَاهِيمَ وَغَيْرُهُ عَنْ دَاوُدَ بْنِ أَبِي هِنْدٍ عَنِ الشَّعْبِيِّ عَنْ عَلْقَمَةَ عَنْ عَبْدِ اللَّهِ أَنَّهُ كَانَ مَعَ النَّبِيِّ صلى الله عليه وسلم لَيْلَةَ الْجِنِّ - الْحَدِيثَ بِطُولِهِ - فَقَالَ الشَّعْبِيُّ إِنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ ‏\"‏ لاَ تَسْتَنْجُوا بِالرَّوْثِ وَلاَ بِالْعِظَامِ فَإِنَّهُ زَادُ إِخْوَانِكُمْ مِنَ الْجِنِّ ‏\"‏ ‏.‏ وَكَأَنَّ رِوَايَةَ إِسْمَاعِيلَ أَصَحُّ مِنْ رِوَايَةِ حَفْصِ بْنِ غِيَاثٍ ‏.‏ وَالْعَمَلُ عَلَى هَذَا الْحَدِيثِ عِنْدَ أَهْلِ الْعِلْمِ ‏.‏ وَفِي الْبَابِ عَنْ جَابِرٍ وَابْنِ عُمَرَ رضى الله عنهما ‏.‏",
    "english": "Abdullah bin Mas'ud narrated that :Allah's Messenger said: \"Do not perform Istinja, with dung, nor with bones. For indeed it is provisions for your brothers among the Jinn",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-19",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 19,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ، وَمُحَمَّدُ بْنُ عَبْدِ الْمَلِكِ بْنِ أَبِي الشَّوَارِبِ الْبَصْرِيُّ، قَالاَ حَدَّثَنَا أَبُو عَوَانَةَ، عَنْ قَتَادَةَ، عَنْ مُعَاذَةَ، عَنْ عَائِشَةَ، قَالَتْ مُرْنَ أَزْوَاجَكُنَّ أَنْ يَسْتَطِيبُوا، بِالْمَاءِ فَإِنِّي أَسْتَحْيِيهِمْ فَإِنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم كَانَ يَفْعَلُهُ ‏\"‏ ‏.‏ وَفِي الْبَابِ عَنْ جَرِيرِ بْنِ عَبْدِ اللَّهِ الْبَجَلِيِّ وَأَنَسٍ وَأَبِي هُرَيْرَةَ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ وَعَلَيْهِ الْعَمَلُ عِنْدَ أَهْلِ الْعِلْمِ يَخْتَارُونَ الاِسْتِنْجَاءَ بِالْمَاءِ وَإِنْ كَانَ الاِسْتِنْجَاءُ بِالْحِجَارَةِ يُجْزِئُ عِنْدَهُمْ فَإِنَّهُمُ اسْتَحَبُّوا الاِسْتِنْجَاءَ بِالْمَاءِ وَرَأَوْهُ أَفْضَلَ ‏.‏ وَبِهِ يَقُولُ سُفْيَانُ الثَّوْرِيُّ وَابْنُ الْمُبَارَكِ وَالشَّافِعِيُّ وَأَحْمَدُ وَإِسْحَاقُ ‏.‏",
    "english": "Aishah said:\"Encourage your Husbands to clean themselves with water, for I am too shy of them, and Allah's Messenger would do that",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-20",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 20,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الْوَهَّابِ الثَّقَفِيُّ، عَنْ مُحَمَّدِ بْنِ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، عَنِ الْمُغِيرَةِ بْنِ شُعْبَةَ، قَالَ كُنْتُ مَعَ النَّبِيِّ صلى الله عليه وسلم فِي سَفَرٍ فَأَتَى النَّبِيُّ صلى الله عليه وسلم حَاجَتَهُ فَأَبْعَدَ فِي الْمَذْهَبِ ‏.‏ قَالَ وَفِي الْبَابِ عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي قُرَادٍ وَأَبِي قَتَادَةَ وَجَابِرٍ وَيَحْيَى بْنِ عُبَيْدٍ عَنْ أَبِيهِ وَأَبِي مُوسَى وَابْنِ عَبَّاسٍ وَبِلاَلِ بْنِ الْحَارِثِ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ وَيُرْوَى عَنِ النَّبِيِّ صلى الله عليه وسلم أَنَّهُ كَانَ يَرْتَادُ لِبَوْلِهِ مَكَانًا كَمَا يَرْتَادُ مَنْزِلاً ‏.‏ وَأَبُو سَلَمَةَ اسْمُهُ عَبْدُ اللَّهِ بْنُ عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ الزُّهْرِيُّ ‏.‏",
    "english": "Al-Mughirah bin Shu'bah said:I was with the Prophet on a journey. The Prophet had to relieve himself, so he went far away",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-21",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 21,
    "arabic": "حَدَّثَنَا عَلِيُّ بْنُ حُجْرٍ، وَأَحْمَدُ بْنُ مُحَمَّدِ بْنِ مُوسَى، مَرْدَوَيْهِ قَالاَ أَخْبَرَنَا عَبْدُ اللَّهِ بْنُ الْمُبَارَكِ، عَنْ مَعْمَرٍ، عَنْ أَشْعَثَ بْنِ عَبْدِ اللَّهِ، عَنِ الْحَسَنِ، عَنْ عَبْدِ اللَّهِ بْنِ مُغَفَّلٍ، أَنَّ النَّبِيَّ صلى الله عليه وسلم نَهَى أَنْ يَبُولَ الرَّجُلُ فِي مُسْتَحَمِّهِ ‏.‏ وَقَالَ ‏ \"‏ إِنَّ عَامَّةَ الْوَسْوَاسِ مِنْهُ ‏\"‏ ‏.‏ قَالَ وَفِي الْبَابِ عَنْ رَجُلٍ مِنْ أَصْحَابِ النَّبِيِّ صلى الله عليه وسلم ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ غَرِيبٌ لاَ نَعْرِفُهُ مَرْفُوعًا إِلاَّ مِنْ حَدِيثِ أَشْعَثَ بْنِ عَبْدِ اللَّهِ وَيُقَالُ لَهُ أَشْعَثُ الأَعْمَى ‏.‏ وَقَدْ كَرِهَ قَوْمٌ مِنْ أَهْلِ الْعِلْمِ الْبَوْلَ فِي الْمُغْتَسَلِ وَقَالُوا عَامَّةُ الْوَسْوَاسِ مِنْهُ ‏.‏ وَرَخَّصَ فِيهِ بَعْضُ أَهْلِ الْعِلْمِ مِنْهُمُ ابْنُ سِيرِينَ وَقِيلَ لَهُ إِنَّهُ يُقَالُ إِنَّ عَامَّةَ الْوَسْوَاسِ مِنْهُ فَقَالَ رَبُّنَا اللَّهُ لاَ شَرِيكَ لَهُ ‏.‏ وَقَالَ ابْنُ الْمُبَارَكِ قَدْ وُسِّعَ فِي الْبَوْلِ فِي الْمُغْتَسَلِ إِذَا جَرَى فِيهِ الْمَاءُ ‏.‏ قَالَ أَبُو عِيسَى حَدَّثَنَا بِذَلِكَ أَحْمَدُ بْنُ عَبْدَةَ الآمُلِيُّ عَنْ حِبَّانَ عَنْ عَبْدِ اللَّهِ بْنِ الْمُبَارَكِ ‏.‏",
    "english": "Abdullah bin Mughaffal narrated that :the Prophet prohibited that a man should urinate in his bathing area. And he said: \"It will only cause misgivings.\" [He said:] There are narrations on This topic from \"a man from among the Companions of the Prophet",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-22",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 22,
    "arabic": "حَدَّثَنَا أَبُو كُرَيْبٍ، حَدَّثَنَا عَبْدَةُ بْنُ سُلَيْمَانَ، عَنْ مُحَمَّدِ بْنِ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، عَنْ أَبِي هُرَيْرَةَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ لَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي لأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلاَةٍ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى وَقَدْ رَوَى هَذَا الْحَدِيثَ مُحَمَّدُ بْنُ إِسْحَاقَ عَنْ مُحَمَّدِ بْنِ إِبْرَاهِيمَ عَنْ أَبِي سَلَمَةَ عَنْ زَيْدِ بْنِ خَالِدٍ عَنِ النَّبِيِّ صلى الله عليه وسلم ‏.‏ وَحَدِيثُ أَبِي سَلَمَةَ عَنْ أَبِي هُرَيْرَةَ وَزَيْدِ بْنِ خَالِدٍ عَنِ النَّبِيِّ صلى الله عليه وسلم كِلاَهُمَا عِنْدِي صَحِيحٌ لأَنَّهُ قَدْ رُوِيَ مِنْ غَيْرِ وَجْهٍ عَنْ أَبِي هُرَيْرَةَ عَنِ النَّبِيِّ صلى الله عليه وسلم هَذَا الْحَدِيثُ ‏.‏ وَحَدِيثُ أَبِي هُرَيْرَةَ إِنَّمَا صَحَّ لأَنَّهُ قَدْ رُوِيَ مِنْ غَيْرِ وَجْهٍ ‏.‏ وَأَمَّا مُحَمَّدُ بْنُ إِسْمَاعِيلَ فَزَعَمَ أَنَّ حَدِيثَ أَبِي سَلَمَةَ عَنْ زَيْدِ بْنِ خَالِدٍ أَصَحُّ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ أَبِي بَكْرٍ الصِّدِّيقِ وَعَلِيٍّ وَعَائِشَةَ وَابْنِ عَبَّاسٍ وَحُذَيْفَةَ وَزَيْدِ بْنِ خَالِدٍ وَأَنَسٍ وَعَبْدِ اللَّهِ بْنِ عَمْرٍو وَابْنِ عُمَرَ وَأُمِّ حَبِيبَةَ وَأَبِي أُمَامَةَ وَأَبِي أَيُّوبَ وَتَمَّامِ بْنِ عَبَّاسٍ وَعَبْدِ اللَّهِ بْنِ حَنْظَلَةَ وَأُمِّ سَلَمَةَ وَوَاثِلَةَ بْنِ الأَسْقَعِ وَأَبِي مُوسَى ‏.‏",
    "english": "Abu Hurairah narrated that :Allah's Messenger said: \"If it were not that it would be difficult on my nation, then I would have ordered them to use the Siwak for each prayer",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-23",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 23,
    "arabic": "حَدَّثَنَا هَنَّادٌ، حَدَّثَنَا عَبْدَةُ بْنُ سُلَيْمَانَ، عَنْ مُحَمَّدِ بْنِ إِسْحَاقَ، عَنْ مُحَمَّدِ بْنِ إِبْرَاهِيمَ، عَنْ أَبِي سَلَمَةَ، عَنْ زَيْدِ بْنِ خَالِدٍ الْجُهَنِيِّ، قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏\"‏ لَوْلاَ أَنْ أَشُقَّ عَلَى أُمَّتِي لأَمَرْتُهُمْ بِالسِّوَاكِ عِنْدَ كُلِّ صَلاَةٍ وَلأَخَّرْتُ صَلاَةَ الْعِشَاءِ إِلَى ثُلُثِ اللَّيْلِ ‏\"‏ ‏.‏ قَالَ فَكَانَ زَيْدُ بْنُ خَالِدٍ يَشْهَدُ الصَّلَوَاتِ فِي الْمَسْجِدِ وَسِوَاكُهُ عَلَى أُذُنِهِ مَوْضِعَ الْقَلَمِ مِنْ أُذُنِ الْكَاتِبِ لاَ يَقُومُ إِلَى الصَّلاَةِ إِلاَّ اسْتَنَّ ثُمَّ رَدَّهُ إِلَى مَوْضِعِهِ ‏\"‏ ‏.‏ قَالَ أَبُو عِيسَى هَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏",
    "english": "Zaid bin Khalid Al-Juhani said :'I heard Allah's Messenger saying: 'If it were not that it would be difficult on my nation then, I would have ordered them to use the Siwak for each prayer and to delay the Isha prayer until the third of the night.'\"He [Abu Salamah, one of the narrators] said: Zaid bin Khalid wouId attend the prayer in the Masjid and his Siwak would be on his ear in the location of the pen on the ear of a writer. He would not get up to pray without cleaning his teeth, then returning it to its location",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-24",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 24,
    "arabic": "حَدَّثَنَا أَبُو الْوَلِيدِ، أَحْمَدُ بْنُ بَكَّارٍ الدِّمَشْقِيُّ - يُقَالُ هُوَ مِنْ وَلَدِ بُسْرِ بْنِ أَرْطَاةَ صَاحِبِ النَّبِيِّ صلى الله عليه وسلم حَدَّثَنَا الْوَلِيدُ بْنُ مُسْلِمٍ عَنِ الأَوْزَاعِيِّ عَنِ الزُّهْرِيِّ عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ وَأَبِي سَلَمَةَ عَنْ أَبِي هُرَيْرَةَ عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ إِذَا اسْتَيْقَظَ أَحَدُكُمْ مِنَ اللَّيْلِ فَلاَ يُدْخِلْ يَدَهُ فِي الإِنَاءِ حَتَّى يُفْرِغَ عَلَيْهَا مَرَّتَيْنِ أَوْ ثَلاَثًا فَإِنَّهُ لاَ يَدْرِي أَيْنَ بَاتَتْ يَدُهُ ‏\"‏ ‏.‏ وَفِي الْبَابِ عَنِ ابْنِ عُمَرَ وَجَابِرٍ وَعَائِشَةَ ‏.‏ قَالَ أَبُو عِيسَى وَهَذَا حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ قَالَ الشَّافِعِيُّ وَأُحِبُّ لِكُلِّ مَنِ اسْتَيْقَظَ مِنَ النَّوْمِ قَائِلَةً كَانَتْ أَوْ غَيْرَهَا أَنْ لاَ يُدْخِلَ يَدَهُ فِي وَضُوئِهِ حَتَّى يَغْسِلَهَا فَإِنْ أَدْخَلَ يَدَهُ قَبْلَ أَنْ يَغْسِلَهَا كَرِهْتُ ذَلِكَ لَهُ وَلَمْ يُفْسِدْ ذَلِكَ الْمَاءَ إِذَا لَمْ يَكُنْ عَلَى يَدِهِ نَجَاسَةٌ ‏.‏ وَقَالَ أَحْمَدُ بْنُ حَنْبَلٍ إِذَا اسْتَيْقَظَ مِنَ النَّوْمِ مِنَ اللَّيْلِ فَأَدْخَلَ يَدَهُ فِي وَضُوئِهِ قَبْلَ أَنْ يَغْسِلَهَا فَأَعْجَبُ إِلَىَّ أَنْ يُهَرِيقَ الْمَاءَ ‏.‏ وَقَالَ إِسْحَاقُ إِذَا اسْتَيْقَظَ مِنَ النَّوْمِ بِاللَّيْلِ أَوْ بِالنَّهَارِ فَلاَ يُدْخِلْ يَدَهُ فِي وَضُوئِهِ حَتَّى يَغْسِلَهَا ‏.‏",
    "english": "Abu Hurairah reported that the :Prophet said: \"When on of you awakens in the night, then let him not put his hand into the vessel until he has poured water on two times, or three times, for indeed he does not know where his hand has spent the night",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-25",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 25,
    "arabic": "حَدَّثَنَا نَصْرُ بْنُ عَلِيٍّ الْجَهْضَمِيُّ، وَبِشْرُ بْنُ مُعَاذٍ الْعَقَدِيُّ، قَالاَ حَدَّثَنَا بِشْرُ بْنُ الْمُفَضَّلِ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ حَرْمَلَةَ، عَنْ أَبِي ثِفَالٍ الْمُرِّيِّ، عَنْ رَبَاحِ بْنِ عَبْدِ الرَّحْمَنِ بْنِ أَبِي سُفْيَانَ بْنِ حُوَيْطِبٍ، عَنْ جَدَّتِهِ، عَنْ أَبِيهَا، قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ ‏ \"‏ لاَ وُضُوءَ لِمَنْ لَمْ يَذْكُرِ اسْمَ اللَّهِ عَلَيْهِ ‏\"‏ ‏.‏ قَالَ وَفِي الْبَابِ عَنْ عَائِشَةَ وَأَبِي سَعِيدٍ وَأَبِي هُرَيْرَةَ وَسَهْلِ بْنِ سَعْدٍ وَأَنَسٍ ‏.‏ قَالَ أَبُو عِيسَى قَالَ أَحْمَدُ بْنُ حَنْبَلٍ لاَ أَعْلَمُ فِي هَذَا الْبَابِ حَدِيثًا لَهُ إِسْنَادٌ جَيِّدٌ ‏.‏ وَقَالَ إِسْحَاقُ إِنْ تَرَكَ التَّسْمِيَةَ عَامِدًا أَعَادَ الْوُضُوءَ وَإِنْ كَانَ نَاسِيًا أَوْ مُتَأَوِّلاً أَجْزَأَهُ ‏.‏ قَالَ مُحَمَّدُ بْنُ إِسْمَاعِيلَ أَحْسَنُ شَيْءٍ فِي هَذَا الْبَابِ حَدِيثُ رَبَاحِ بْنِ عَبْدِ الرَّحْمَنِ ‏.‏ قَالَ أَبُو عِيسَى وَرَبَاحُ بْنُ عَبْدِ الرَّحْمَنِ عَنْ جَدَّتِهِ عَنْ أَبِيهَا ‏.‏ وَأَبُوهَا سَعِيدُ بْنُ زَيْدِ بْنِ عَمْرِو بْنِ نُفَيْلٍ ‏.‏ وَأَبُو ثِفَالٍ الْمُرِّيُّ اسْمُهُ ثُمَامَةُ بْنُ حُصَيْنٍ ‏.‏ وَرَبَاحُ بْنُ عَبْدِ الرَّحْمَنِ هُوَ أَبُو بَكْرِ بْنُ حُوَيْطِبٍ ‏.‏ مِنْهُمْ مَنْ رَوَى هَذَا الْحَدِيثَ فَقَالَ عَنْ أَبِي بَكْرِ بْنِ حُوَيْطِبٍ فَنَسَبَهُ إِلَى جَدِّهِ ‏.‏",
    "english": "Rabah bin Abdur-Rahman bin Abi Sufyan bin Huwaitib narrated from his grandmother, from her father; she said (that he said):\"I heard Allah's Messenger saying: there is no Wudu for one who does not mention Allah's Name over it",
    "grade": "Hasan"
  },
  {
    "id": "tirmidhi-26",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 26,
    "arabic": "حَدَّثَنَا الْحَسَنُ بْنُ عَلِيٍّ الْحُلْوَانِيُّ، حَدَّثَنَا يَزِيدُ بْنُ هَارُونَ، عَنْ يَزِيدَ بْنِ عِيَاضٍ، عَنْ أَبِي ثِفَالٍ الْمُرِّيِّ، عَنْ رَبَاحِ بْنِ عَبْدِ الرَّحْمَنِ بْنِ أَبِي سُفْيَانَ بْنِ حُوَيْطِبٍ، عَنْ جَدَّتِهِ بِنْتِ سَعِيدِ بْنِ زَيْدٍ، عَنْ أَبِيهَا، عَنِ النَّبِيِّ صلى الله عليه وسلم مِثْلَهُ ‏.‏",
    "english": "Rabah Bin Abdur-Rahman bin Abu Sufyan bin Huwaitib narrated :the same from his grandmother the daughter of Sa'eed bin Zaid, from her father, from the Prophet",
    "grade": "Hasan"
  },
  {
    "id": "tirmidhi-27",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 27,
    "arabic": "حَدَّثَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، وَجَرِيرٌ، عَنْ مَنْصُورٍ، عَنْ هِلاَلِ بْنِ يِسَافٍ، عَنْ سَلَمَةَ بْنِ قَيْسٍ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ إِذَا تَوَضَّأْتَ فَانْتَثِرْ وَإِذَا اسْتَجْمَرْتَ فَأَوْتِرْ ‏\"‏ ‏.‏ قَالَ وَفِي الْبَابِ عَنْ عُثْمَانَ وَلَقِيطِ بْنِ صَبِرَةَ ��َا��ْنِ عَبَّاسٍ وَالْمِقْدَامِ بْنِ مَعْدِيكَرِبَ وَوَائِلِ بْنِ حُجْرٍ وَأَبِي هُرَيْرَةَ ‏.‏ قَالَ أَبُو عِيسَى حَدِيثُ سَلَمَةَ بْنِ قَيْسٍ حَدِيثٌ حَسَنٌ صَحِيحٌ ‏.‏ وَاخْتَلَفَ أَهْلُ الْعِلْمِ فِيمَنْ تَرَكَ الْمَضْمَضَةَ وَالاِسْتِنْشَاقَ فَقَالَتْ طَائِفَةٌ مِنْهُمْ إِذَا تَرَكَهُمَا فِي الْوُضُوءِ حَتَّى صَلَّى أَعَادَ الصَّلاَةَ وَرَأَوْا ذَلِكَ فِي الْوُضُوءِ وَالْجَنَابَةِ سَوَاءً ‏.‏ وَبِهِ يَقُولُ ابْنُ أَبِي لَيْلَى وَعَبْدُ اللَّهِ بْنُ الْمُبَارَكِ وَأَحْمَدُ وَإِسْحَاقُ ‏.‏ وَقَالَ أَحْمَدُ الاِسْتِنْشَاقُ أَوْكَدُ مِنَ الْمَضْمَضَةِ ‏.‏ قَالَ أَبُو عِيسَى وَقَالَتْ طَائِفَةٌ مِنْ أَهْلِ الْعِلْمِ يُعِيدُ فِي الْجَنَابَةِ وَلاَ يُعِيدُ فِي الْوُضُوءِ وَهُوَ قَوْلُ سُفْيَانَ الثَّوْرِيِّ وَبَعْضِ أَهْلِ الْكُوفَةِ ‏.‏ وَقَالَتْ طَائِفَةٌ لاَ يُعِيدُ فِي الْوُضُوءِ وَلاَ فِي الْجَنَابَةِ لأَنَّهُمَا سُنَّةٌ مِنَ النَّبِيِّ صلى الله عليه وسلم فَلاَ تَجِبُ الإِعَادَةُ عَلَى مَنْ تَرَكَهُمَا فِي الْوُضُوءِ وَلاَ فِي الْجَنَابَةِ ‏.‏ وَهُوَ قَوْلُ مَالِكٍ وَالشَّافِعِيِّ فِي آخِرَةٍ ‏.‏",
    "english": "Salamah bin Qais narrated that :Allah's Messenger said: \"When you perform Wudu then sniff water in the nose and blow it out, and when you use small stones (to remove filth) then make it odd (numbered)",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-28",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 28,
    "arabic": "حَدَّثَنَا يَحْيَى بْنُ مُوسَى، حَدَّثَنَا إِبْرَاهِيمُ بْنُ مُوسَى الرَّازِيُّ، حَدَّثَنَا خَالِدُ بْنُ عَبْدِ اللَّهِ، عَنْ عَمْرِو بْنِ يَحْيَى، عَنْ أَبِيهِ، عَنْ عَبْدِ اللَّهِ بْنِ زَيْدٍ، قَالَ رَأَيْتُ النَّبِيَّ صلى الله عليه وسلم مَضْمَضَ وَاسْتَنْشَقَ مِنْ كَفٍّ وَاحِدٍ فَعَلَ ذَلِكَ ثَلاَثًا ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عَبْدِ اللَّهِ بْنِ عَبَّاسٍ ‏.‏ قَالَ أَبُو عِيسَى وَحَدِيثُ عَبْدِ اللَّهِ بْنِ زَيْدٍ حَسَنٌ غَرِيبٌ ‏.‏ وَقَدْ رَوَى مَالِكٌ وَابْنُ عُيَيْنَةَ وَغَيْرُ وَاحِدٍ هَذَا الْحَدِيثَ عَنْ عَمْرِو بْنِ يَحْيَى وَلَمْ يَذْكُرُوا هَذَا الْحَرْفَ أَنَّ النَّبِيَّ صلى الله عليه وسلم مَضْمَضَ وَاسْتَنْشَقَ مِنْ كَفٍّ وَاحِدٍ ‏.‏ وَإِنَّمَا ذَكَرَهُ خَالِدُ بْنُ عَبْدِ اللَّهِ ‏.‏ وَخَالِدُ بْنُ عَبْدِ اللَّهِ ثِقَةٌ حَافِظٌ عِنْدَ أَهْلِ الْحَدِيثِ ‏.‏ وَقَالَ بَعْضُ أَهْلِ الْعِلْمِ الْمَضْمَضَةُ وَالاِسْتِنْشَاقُ مِنْ كَفٍّ وَاحِدٍ يُجْزِئُ وَقَالَ بَعْضُهُمْ تَفْرِيقُهُمَا أَحَبُّ إِلَيْنَا ‏.‏ وَقَالَ الشَّافِعِيُّ إِنْ جَمَعَهُمَا فِي كَفٍّ وَاحِدٍ فَهُوَ جَائِزٌ وَإِنْ فَرَّقَهُمَا فَهُوَ أَحَبُّ إِلَيْنَا ‏.‏",
    "english": "Abdullah bin Zaid said:\"1 saw the Prophet rinse his mouth and sniff water in his nose using one hand, he did that thrice",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-29",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 29,
    "arabic": "حَدَّثَنَا ابْنُ أَبِي عُمَرَ، حَدَّثَنَا سُفْيَانُ بْنُ عُيَيْنَةَ، عَنْ عَبْدِ الْكَرِيمِ بْنِ أَبِي الْمُخَارِقِ أَبِي أُمَيَّةَ، عَنْ حَسَّانَ بْنِ بِلاَلٍ، قَالَ رَأَيْتُ عَمَّارَ بْنَ يَاسِرٍ تَوَضَّأَ فَخَلَّلَ لِحْيَتَهُ فَقِيلَ لَهُ أَوْ قَالَ فَقُلْتُ لَهُ أَتُخَلِّلُ لِحْيَتَكَ قَالَ وَمَا يَمْنَعُنِي وَلَقَدْ رَأَيْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يُخَلِّلُ لِحْيَتَهُ ‏.‏",
    "english": "Hassan bin Bilal said:\"1 saw Ammar bin Yasir performing Wudu, so he went through his beard (with his hand). It was said to him\" - or he said - \"1 said: 'You go through your beard?' He said: 'And what is there to prevent me? Indeed I saw Allah's Messenger going through his beard",
    "grade": "Sahih"
  },
  {
    "id": "tirmidhi-30",
    "collection": "tirmidhi",
    "collectionName": "Jami at-Tirmidhi",
    "hadithNumber": 30,
    "arabic": "حَدَّثَنَا ابْنُ أَبِي عُمَرَ، حَدَّثَنَا سُفْيَانُ بْنُ عُيَيْنَةَ، عَنْ سَعِيدِ بْنِ أَبِي عَرُوبَةَ، عَنْ قَتَادَةَ، عَنْ حَسَّانَ بْنِ بِلاَلٍ، عَنْ عَمَّارٍ، عَنِ النَّبِيِّ صلى الله عليه وسلم مِثْلَهُ ‏.‏ قَالَ أَبُو عِيسَى وَفِي الْبَابِ عَنْ عُثْمَانَ وَعَائِشَةَ وَأُمِّ سَلَمَةَ وَأَنَسٍ وَابْنِ أَبِي أَوْفَى وَأَبِي أَيُّوبَ ‏.‏ قَالَ أَبُو عِيسَى وَسَمِعْتُ إِسْحَاقَ بْنَ مَنْصُورٍ يَقُولُ قَالَ أَحْمَدُ بْنُ حَنْبَلٍ قَالَ ابْنُ عُيَيْنَةَ لَمْ يَسْمَعْ عَبْدُ الْكَرِيمِ مِنْ حَسَّانَ بْنِ بِلاَلٍ حَدِيثَ التَّخْلِيلِ ‏.‏ وَقَالَ مُحَمَّدُ بْنُ إِسْمَاعِيلَ أَصَحُّ شَيْءٍ فِي هَذَا الْبَابِ حَدِيثُ عَامِرِ بْنِ شَقِيقٍ عَنْ أَبِي وَائِلٍ عَنْ عُثْمَانَ ‏.‏ قَالَ أَبُو عِيسَى وَقَالَ بِهَذَا أَكْثَرُ أَهْلِ الْعِلْمِ مِنْ أَصْحَابِ النَّبِيِّ صلى الله عليه وسلم وَمَنْ بَعْدَهُمْ رَأَوْا تَخْلِيلَ اللِّحْيَةِ ‏.‏ وَبِهِ يَقُولُ الشَّافِعِيُّ ‏.‏ وَقَالَ أَحْمَدُ إِنْ سَهَا عَنْ تَخْلِيلِ اللِّحْيَةِ فَهُوَ جَائِزٌ ‏.‏ وَقَالَ إِسْحَاقُ إِنْ تَرَكَهُ نَاسِيًا أَوْ مُتَأَوِّلاً أَجْزَأَهُ وَإِنْ تَرَكَهُ عَامِدًا أَعَادَ ‏.‏",
    "english": "(In another narration) Ammar narrated :the same from the Prophet",
    "grade": "Daif"
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
    "id": "nasai-11",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 11,
    "arabic": "أَخْبَرَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ يَزِيدَ، قَالَ حَدَّثَنَا سُفْيَانُ، عَنِ الزُّهْرِيِّ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، عَنْ أَبِي هُرَيْرَةَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ خَمْسٌ مِنَ الْفِطْرَةِ الْخِتَانُ وَحَلْقُ الْعَانَةِ وَنَتْفُ الإِبْطِ وَتَقْلِيمُ الأَظْفَارِ وَأَخْذُ الشَّارِبِ ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Hurairah that the Prophet (ﷺ) said:\"The Fitrah are five: Circumcision, shaving the pubes, plucking the armpit hairs, clipping the nails and taking from the mustache",
    "grade": "Sahih"
  },
  {
    "id": "nasai-12",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 12,
    "arabic": "أَخْبَرَنَا الْحَارِثُ بْنُ مِسْكِينٍ، قِرَاءَةً عَلَيْهِ وَأَنَا أَسْمَعُ، عَنِ ابْنِ وَهْبٍ، عَنْ حَنْظَلَةَ بْنِ أَبِي سُفْيَانَ، عَنْ نَافِعٍ، عَنِ ابْنِ عُمَرَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ الْفِطْرَةُ قَصُّ الأَظْفَارِ وَأَخْذُ الشَّارِبِ وَحَلْقُ الْعَانَةِ ‏\"‏ ‏.‏",
    "english": "It was narrated from Ibn 'Umar that the Messenger of Allah (ﷺ) said:\"The deeds connected to the Fitrah are: Clipping the nails, removing the mustache and shaving the pubes",
    "grade": "Sahih"
  },
  {
    "id": "nasai-13",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 13,
    "arabic": "أَخْبَرَنَا عَلِيُّ بْنُ حُجْرٍ، قَالَ أَنْبَأَنَا عَبِيدَةُ بْنُ حُمَيْدٍ، عَنْ يُوسُفَ بْنِ صُهَيْبٍ، عَنْ حَبِيبِ بْنِ يَسَارٍ، عَنْ زَيْدِ بْنِ أَرْقَمَ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ مَنْ لَمْ يَأْخُذْ شَارِبَهُ فَلَيْسَ مِنَّا ‏\"‏ ‏.‏",
    "english": "It was narrated that Zaid bin Arqam said:\"The Messenger of Allah (ﷺ) said: 'Whoever does not trim his mustache, he is not from one of us",
    "grade": "Sahih"
  },
  {
    "id": "nasai-14",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 14,
    "arabic": "أَخْبَرَنَا قُتَيْبَةُ، قَالَ حَدَّثَنَا جَعْفَرٌ، - هُوَ ابْنُ سُلَيْمَانَ - عَنْ أَبِي عِمْرَانَ الْجَوْنِيِّ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ وَقَّتَ لَنَا رَسُولُ اللَّهِ صلى الله عليه وسلم فِي قَصِّ الشَّارِبِ وَتَقْلِيمِ الأَظْفَارِ وَحَلْقِ الْعَانَةِ وَنَتْفِ الإِبْطِ أَنْ لاَ نَتْرُكَ أَكْثَرَ مِنْ أَرْبَعِينَ يَوْمًا ‏.‏ وَقَالَ مَرَّةً أُخْرَى أَرْبَعِينَ لَيْلَةً ‏.‏",
    "english": "It was narrated that Anas bin Malik said:\"A time limit was set for us, by the Messenger of Allah (ﷺ), regarding trimming the mustache, clipping the nails and plucking the pubes; we were not to leave that for more than forty days,\" on one occasion he said: \"Forty nights",
    "grade": "Sahih"
  },
  {
    "id": "nasai-15",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 15,
    "arabic": "أَخْبَرَنَا عُبَيْدُ اللَّهِ بْنُ سَعِيدٍ، قَالَ حَدَّثَنَا يَحْيَى، - هُوَ ابْنُ سَعِيدٍ - عَنْ عُبَيْدِ اللَّهِ، أَخْبَرَنِي نَافِعٌ، عَنِ ابْنِ عُمَرَ، عَنِ النَّبِيِّ صلى الله عليه وسلم قَالَ ‏ \"‏ أَحْفُوا الشَّوَارِبَ وَأَعْفُوا اللِّحَى ‏\"‏ ‏.‏",
    "english": "It was narrated from Ibn 'Umar that the Prophet (ﷺ) said:\"Trim the mustache and let the beard grow",
    "grade": "Sahih"
  },
  {
    "id": "nasai-16",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 16,
    "arabic": "أَخْبَرَنَا عَمْرُو بْنُ عَلِيٍّ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، قَالَ حَدَّثَنَا أَبُو جَعْفَرٍ الْخَطْمِيُّ، عُمَيْرُ بْنُ يَزِيدَ قَالَ حَدَّثَنِي الْحَارِثُ بْنُ فُضَيْلٍ، وَعُمَارَةُ بْنُ خُزَيْمَةَ بْنِ ثَابِتٍ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي قُرَادٍ، قَالَ خَرَجْتُ مَعَ رَسُولِ اللَّهِ صلى الله عليه وسلم إِلَى الْخَلاَءِ وَكَانَ إِذَا أَرَادَ الْحَاجَةَ أَبْعَدَ ‏.‏",
    "english": "It was narrated that 'Abdur-Rahman bin Abi Qurad said:\"I went out with the Messenger of Allah (ﷺ) to an isolated area, and when he wanted to relieve himself he moved far away",
    "grade": "Sahih"
  },
  {
    "id": "nasai-17",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 17,
    "arabic": "أَخْبَرَنَا عَلِيُّ بْنُ حُجْرٍ، قَالَ أَنْبَأَنَا إِسْمَاعِيلُ، عَنْ مُحَمَّدِ بْنِ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، عَنِ الْمُغِيرَةِ بْنِ شُعْبَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا ذَهَبَ الْمَذْهَبَ أَبْعَدَ قَالَ فَذَهَبَ لِحَاجَتِهِ - وَهُوَ فِي بَعْضِ أَسْفَارِهِ - فَقَالَ ‏ \"‏ ائْتِنِي بِوَضُوءٍ ‏\"‏ ‏.‏ فَأَتَيْتُهُ بِوَضُوءٍ فَتَوَضَّأَ وَمَسَحَ عَلَى الْخُفَّيْنِ ‏.‏ قَالَ الشَّيْخُ إِسْمَاعِيلُ هُوَ ابْنُ جَعْفَرِ بْنِ أَبِي كَثِيرٍ الْقَارِئُ ‏.‏",
    "english": "It was narrated from Al-Mughirah bin Shu'bah that when the Prophet (ﷺ) would go away (to relieve himself) he would go far away. He went to relieve himself when he was on one of his journeys, and said:\"Bring me (water for) Wudu'.\" So I brought him (water for) Wudu', and he performed Wudu' and wiped over his Khuffs. The Shaikh [1] said: \"Isma'il (one of the narrators) is Ibn Ja'far bin Abi Kathir Al-Qari. [1] Meaning the author, and it appears that Ibn As-Sunni who heard the text, said this",
    "grade": "Hasan Sahih"
  },
  {
    "id": "nasai-18",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 18,
    "arabic": "أَخْبَرَنَا إِسْحَاقُ بْنُ إِبْرَاهِيمَ، قَالَ أَنْبَأَنَا عِيسَى بْنُ يُونُسَ، قَالَ أَنْبَأَنَا الأَعْمَشُ، عَنْ شَقِيقٍ، عَنْ حُذَيْفَةَ، قَالَ كُنْتُ أَمْشِي مَعَ رَسُولِ اللَّهِ صلى الله عليه وسلم فَانْتَهَى إِلَى سُبَاطَةِ قَوْمٍ فَبَالَ قَائِمًا فَتَنَحَّيْتُ عَنْهُ فَدَعَانِي وَكُنْتُ عِنْدَ عَقِبَيْهِ حَتَّى فَرَغَ ثُمَّ تَوَضَّأَ وَمَسَحَ عَلَى خُفَّيْهِ ‏.‏",
    "english": "It was narrated that Hudhaifah said:\"I was walking with the Messenger of Allah (ﷺ) and he came to some people's garbage dump and urinated while standing up. I turned to go away, but he called me back (to conceal him), and I was just behind him. Then when he had finished, he performed Wudu' and wiped over his Khuffs",
    "grade": "Sahih"
  },
  {
    "id": "nasai-19",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 19,
    "arabic": "أَخْبَرَنَا إِسْحَاقُ بْنُ إِبْرَاهِيمَ، قَالَ أَنْبَأَنَا إِسْمَاعِيلُ، عَنْ عَبْدِ الْعَزِيزِ بْنِ صُهَيْبٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، قَالَ كَانَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِذَا دَخَلَ الْخَلاَءَ قَالَ ‏ \"‏ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ ‏\"‏ ‏.‏",
    "english": "It was narrated that Anas bin Malik said:\"The Messenger of Allah (ﷺ) entered Al-Khala' (the toilet) and said: 'Allahumma inni a'uthu bika min al-khubuthi wal-khaba'ith (O Allah, I seek refuge with You from male and female devils).\"[1] [1] See Ma'alam As-Sunan by Al-Khattabi. And Al-Khala' is the area one relieves oneself in. It refers to outside or other than that, it should not be understood to mean toilet only",
    "grade": "Sahih"
  },
  {
    "id": "nasai-20",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 20,
    "arabic": "أَخْبَرَنَا مُحَمَّدُ بْنُ سَلَمَةَ، وَالْحَارِثُ بْنُ مِسْكِينٍ، قِرَاءَةً عَلَيْهِ وَأَنَا أَسْمَعُ، وَاللَّفْظُ، لَهُ عَنِ ابْنِ الْقَاسِمِ، قَالَ حَدَّثَنِي مَالِكٌ، عَنْ إِسْحَاقَ بْنِ عَبْدِ اللَّهِ بْنِ أَبِي طَلْحَةَ، عَنْ رَافِعِ بْنِ إِسْحَاقَ، أَنَّهُ سَمِعَ أَبَا أَيُّوبَ الأَنْصَارِيَّ، وَهُوَ بِمِصْرَ يَقُولُ وَاللَّهِ مَا أَدْرِي كَيْفَ أَصْنَعُ بِهَذِهِ الْكَرَايِيسِ وَقَدْ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ إِذَا ذَهَبَ أَحَدُكُمْ إِلَى الْغَائِطِ أَوِ الْبَوْلِ فَلاَ يَسْتَقْبِلِ الْقِبْلَةَ وَلاَ يَسْتَدْبِرْهَا ‏\"‏ ‏.‏",
    "english": "It was narrated from Rafi' bin Ishaq that he heard Abu Ayyub Al-Ansari say - when he was in Egypt:\"By Allah, I do not know what I should do with these Karais (toilets). The Messenger of Allah (ﷺ) said: 'When any one of you goes to defecate or urinate, let him not face toward the Qiblah, nor turn his back towards it",
    "grade": "Sahih"
  },
  {
    "id": "nasai-21",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 21,
    "arabic": "أَخْبَرَنَا مُحَمَّدُ بْنُ مَنْصُورٍ، قَالَ حَدَّثَنَا سُفْيَانُ، عَنِ الزُّهْرِيِّ، عَنْ عَطَاءِ بْنِ يَزِيدَ، عَنْ أَبِي أَيُّوبَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ ‏ \"‏ لاَ تَسْتَقْبِلُوا الْقِبْلَةَ وَلاَ تَسْتَدْبِرُوهَا لِغَائِطٍ أَوْ بَوْلٍ وَلَكِنْ شَرِّقُوا أَوْ غَرِّبُوا ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Ayyub that the Prophet (ﷺ) said:\"Do not face towards the Qiblah nor turn your backs toward it when defecating or urinating, rather face toward the east or the west",
    "grade": "Sahih"
  },
  {
    "id": "nasai-22",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 22,
    "arabic": "أَخْبَرَنَا يَعْقُوبُ بْنُ إِبْرَاهِيمَ، قَالَ أَنْبَأَنَا غُنْدَرٌ، قَالَ أَنْبَأَنَا مَعْمَرٌ، قَالَ أَنْبَأَنَا ابْنُ شِهَابٍ، عَنْ عَطَاءِ بْنِ يَزِيدَ، عَنْ أَبِي أَيُّوبَ الأَنْصَارِيِّ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ إِذَا أَتَى أَحَدُكُمُ الْغَائِطَ فَلاَ يَسْتَقْبِلِ الْقِبْلَةَ وَلَكِنْ لِيُشَرِّقْ أَوْ لِيُغَرِّبْ ‏\"‏ ‏.‏",
    "english": "It was narrated that Abu Ayyub Al-Ansari said:\"The Messenger of Allah (ﷺ) said: 'When any one of you goes to defecate, let him not face toward the Qiblah, rather let him face towards the east or the west",
    "grade": "Sahih"
  },
  {
    "id": "nasai-23",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 23,
    "arabic": "أَخْبَرَنَا قُتَيْبَةُ بْنُ سَعِيدٍ، عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، عَنْ مُحَمَّدِ بْنِ يَحْيَى بْنِ حَبَّانَ، عَنْ عَمِّهِ، وَاسِعِ بْنِ حَبَّانَ، عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، قَالَ لَقَدِ ارْتَقَيْتُ عَلَى ظَهْرِ بَيْتِنَا فَرَأَيْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم عَلَى لَبِنَتَيْنِ مُسْتَقْبِلَ بَيْتِ الْمَقْدِسِ لِحَاجَتِهِ ‏.‏",
    "english": "It was narrated that 'Abdullah bin 'Umar said:\"I climbed on the roof of our house and saw the Messenger of Allah (ﷺ) on two bricks, facing toward Bait Al-Maqdis (jerusalem), relieving himself",
    "grade": "Sahih"
  },
  {
    "id": "nasai-24",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 24,
    "arabic": "أَخْبَرَنَا يَحْيَى بْنُ دُرُسْتَ، قَالَ أَنْبَأَنَا أَبُو إِسْمَاعِيلَ، - وَهُوَ الْقَنَّادُ - قَالَ حَدَّثَنِي يَحْيَى بْنُ أَبِي كَثِيرٍ، أَنَّ عَبْدَ اللَّهِ بْنَ أَبِي قَتَادَةَ، حَدَّثَهُ عَنْ أَبِيهِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ إِذَا بَالَ أَحَدُكُمْ فَلاَ يَأْخُذْ ذَكَرَهُ بِيَمِينِهِ ‏\"‏ ‏.‏",
    "english": "It was narrated from 'Abdullah bin Abi Qatadah, from his father, that the Messenger of Allah (ﷺ said:\"When any one of you urinates, let him not hold his penis in his right hand)",
    "grade": "Sahih"
  },
  {
    "id": "nasai-25",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 25,
    "arabic": "أَخْبَرَنَا هَنَّادُ بْنُ السَّرِيِّ، عَنْ وَكِيعٍ، عَنْ هِشَامٍ، عَنْ يَحْيَى، - هُوَ ابْنُ أَبِي كَثِيرٍ - عَنْ عَبْدِ اللَّهِ بْنِ أَبِي قَتَادَةَ، عَنْ أَبِيهِ، قَالَ قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏ \"‏ إِذَا دَخَلَ أَحَدُكُمُ الْخَلاَءَ فَلاَ يَمَسَّ ذَكَرَهُ بِيَمِينِهِ ‏\"‏ ‏.‏",
    "english": "It was narrated from 'Abdullah bin Abi Qatadah that his father said:\"The Messenger of Allah (ﷺ) said: 'When any one of you enters Al-Khala' (the toilet), let him not touch his penis with his right hand",
    "grade": "Sahih"
  },
  {
    "id": "nasai-26",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 26,
    "arabic": "أَخْبَرَنَا مُؤَمَّلُ بْنُ هِشَامٍ، قَالَ أَنْبَأَنَا إِسْمَاعِيلُ، قَالَ أَخْبَرَنَا شُعْبَةُ، عَنْ سُلَيْمَانَ، عَنْ أَبِي وَائِلٍ، عَنْ حُذَيْفَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم أَتَى سُبَاطَةَ قَوْمٍ فَبَالَ قَائِمًا ‏.‏",
    "english": "It was narrated from Hudhifah that the Messenger of Allah (ﷺ)came to some people's garbage dump and urinated while standing",
    "grade": "Sahih"
  },
  {
    "id": "nasai-27",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 27,
    "arabic": "أَخْبَرَنَا مُحَمَّدُ بْنُ بَشَّارٍ، قَالَ أَنْبَأَنَا مُحَمَّدٌ، قَالَ أَنْبَأَنَا شُعْبَةُ، عَنْ مَنْصُورٍ، قَالَ سَمِعْتُ أَبَا وَائِلٍ، أَنَّ حُذَيْفَةَ، قَالَ إِنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم أَتَى سُبَاطَةَ قَوْمٍ فَبَالَ قَائِمًا ‏.‏",
    "english": "It was narrated that Mansur said:\"I heard Abu Wa'il (say) that Hudhaifah said: 'The Messenger of Allah (ﷺ) came to some people's garbage dump and urinated while standing",
    "grade": "Sahih"
  },
  {
    "id": "nasai-28",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 28,
    "arabic": "أَخْبَرَنَا سُلَيْمَانُ بْنُ عُبَيْدِ اللَّهِ، قَالَ أَنْبَأَنَا بَهْزٌ، قَالَ أَنْبَأَنَا شُعْبَةُ، عَنْ سُلَيْمَانَ، وَمَنْصُورٌ، عَنْ أَبِي وَائِلٍ، عَنْ حُذَيْفَةَ، أَنَّ النَّبِيَّ صلى الله عليه وسلم مَشَى إِلَى سُبَاطَةِ قَوْمٍ فَبَالَ قَائِمًا ‏.‏ قَالَ سُلَيْمَانُ فِي حَدِيثِهِ وَمَسَحَ عَلَى خُفَّيْهِ وَلَمْ يَذْكُرْ مَنْصُورٌ الْمَسْحَ ‏.‏",
    "english": "It was narrated from Hudhaifah that the Prophet (ﷺ) went to some people's garbage dump and urinated while standing. In his narration, Sulaiman bin 'Ubaidullah said:\"And he wiped over his Khuffs,\" but Mansur did not mention the wiping. [1] [1]Meaning, in this route, since Shu'bah narrated it from both Sulaiman and Mansur",
    "grade": "Sahih"
  },
  {
    "id": "nasai-29",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 29,
    "arabic": "أَخْبَرَنَا عَلِيُّ بْنُ حُجْرٍ، قَالَ أَنْبَأَنَا شَرِيكٌ، عَنِ الْمِقْدَامِ بْنِ شُرَيْحٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، قَالَتْ مَنْ حَدَّثَكُمْ أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم بَالَ قَائِمًا فَلاَ تُصَدِّقُوهُ مَا كَانَ يَبُولُ إِلاَّ جَالِسًا ‏.‏",
    "english": "It was narrated that 'Aishah said:\"Whoever tells you that the Messenger of Allah (ﷺ) urinated standing up, do not believe him, for he would not urinate except while squatting",
    "grade": "Sahih"
  },
  {
    "id": "nasai-30",
    "collection": "nasai",
    "collectionName": "Sunan an-Nasa'i",
    "hadithNumber": 30,
    "arabic": "أَخْبَرَنَا هَنَّادُ بْنُ السَّرِيِّ، عَنْ أَبِي مُعَاوِيَةَ، عَنِ الأَعْمَشِ، عَنْ زَيْدِ بْنِ وَهْبٍ، عَنْ عَبْدِ الرَّحْمَنِ ابْنِ حَسَنَةَ، قَالَ خَرَجَ عَلَيْنَا رَسُولُ اللَّهِ صلى الله عليه وسلم وَفِي يَدِهِ كَهَيْئَةِ الدَّرَقَةِ فَوَضَعَهَا ثُمَّ جَلَسَ خَلْفَهَا فَبَالَ إِلَيْهَا فَقَالَ بَعْضُ الْقَوْمِ انْظُرُوا يَبُولُ كَمَا تَبُولُ الْمَرْأَةُ فَسَمِعَهُ فَقَالَ ‏ \"‏ أَوَمَا عَلِمْتَ مَا أَصَابَ صَاحِبُ بَنِي إِسْرَائِيلَ كَانُوا إِذَا أَصَابَهُمْ شَىْءٌ مِنَ الْبَوْلِ قَرَضُوهُ بِالْمَقَارِيضِ فَنَهَاهُمْ صَاحِبُهُمْ فَعُذِّبَ فِي قَبْرِهِ ‏\"‏ ‏.‏",
    "english": "It was narrated that 'Abdur-Rahman bin Hasanah said:\"The Messenger of Allah (ﷺ) came out to us with a small leather shield in his hand. He put it down, then he sat behind it and urinated toward it. Some of the people said: 'Look, he is urinating like a woman.' He heard that and said: 'Do you not know what happened to the companion of the Children of Israel? If they got any urine on themselves they would clip that part of their garments off. Their companion told them not to do that and he was punished in his grave",
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
    "id": "ibnmajah-11",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 11,
    "arabic": "حَدَّثَنَا أَبُو سَعِيدٍ عَبْدُ اللَّهِ بْنُ سَعِيدٍ، حَدَّثَنَا أَبُو خَالِدٍ الأَحْمَرُ، قَالَ سَمِعْتُ مُجَالِدًا، يَذْكُرُ عَنِ الشَّعْبِيِّ، عَنْ جَابِرِ بْنِ عَبْدِ اللَّهِ، قَالَ كُنَّا عِنْدَ النَّبِيِّ ـ صلى الله عليه وسلم ـ فَخَطَّ خَطًّا وَخَطَّ خَطَّيْنِ عَنْ يَمِينِهِ وَخَطَّ خَطَّيْنِ عَنْ يَسَارِهِ ثُمَّ وَضَعَ يَدَهُ فِي الْخَطِّ الأَوْسَطِ فَقَالَ ‏\"‏ هَذَا سَبِيلُ اللَّهِ ‏\"‏ ‏.‏ ثُمَّ تَلاَ هَذِهِ الآيَةَ {وَأَنَّ هَذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ وَلاَ تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَنْ سَبِيلِهِ}‏ ‏.‏",
    "english": "Jabir bin 'Abdullah said that:We were with the Prophet (ﷺ), and he drew a line (in the sand), then he drew two lines to its right and two to its left. Then he put his hand on the middle line and said : 'This is the path of Allah. Then he recited the Verse: And verily, this (i.e. Allah's Commandments) is My straight path, so follow it and follow not (other) paths, for they will separate you from His path",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-12",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 12,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا زَيْدُ بْنُ الْحُبَابِ، عَنْ مُعَاوِيَةَ بْنِ صَالِحٍ، حَدَّثَنِي الْحَسَنُ بْنُ جَابِرٍ، عَنِ الْمِقْدَامِ بْنِ مَعْدِيكَرِبَ الْكِنْدِيِّ، أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ يُوشِكُ الرَّجُلُ مُتَّكِئًا عَلَى أَرِيكَتِهِ يُحَدَّثُ بِحَدِيثٍ مِنْ حَدِيثِي فَيَقُولُ بَيْنَنَا وَبَيْنَكُمْ كِتَابُ اللَّهِ عَزَّ وَجَلَّ فَمَا وَجَدْنَا فِيهِ مِنْ حَلاَلٍ اسْتَحْلَلْنَاهُ وَمَا وَجَدْنَا فِيهِ مِنْ حَرَامٍ حَرَّمْنَاهُ ‏.‏ أَلاَ وَإِنَّ مَا حَرَّمَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ مِثْلُ مَا حَرَّمَ اللَّهُ ‏\"‏ ‏.‏",
    "english": "Miqdam bin Ma'dikarib Al-Kindi narrated that:The Messenger of Allah (ﷺ) said: \"Soon there will come a time that a man will be reclining on his pillow, and when one of my Ahadith is narrated he will say: 'The Book of Allah is (sufficient) between us and you. Whatever it states is permissible, we will take as permissible, and whatever it states is forbidden, we will take as forbidden.' Verily, whatever the Messenger of Allah (ﷺ) has forbidden is like that which Allah has forbidden",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-13",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 13,
    "arabic": "حَدَّثَنَا نَصْرُ بْنُ عَلِيٍّ الْجَهْضَمِيُّ، حَدَّثَنَا سُفْيَانُ بْنُ عُيَيْنَةَ، فِي بَيْتِهِ أَنَا سَأَلْتُهُ، عَنْ سَالِمٍ أَبِي النَّضْرِ، ثُمَّ مَرَّ فِي الْحَدِيثِ قَالَ أَوْ زَيْدِ بْنِ أَسْلَمَ عَنْ عُبَيْدِ اللَّهِ بْنِ أَبِي رَافِعٍ عَنْ أَبِيهِ أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ لاَ أُلْفِيَنَّ أَحَدَكُمْ مُتَّكِئًا عَلَى أَرِيكَتِهِ يَأْتِيهِ الأَمْرُ مِمَّا أَمَرْتُ بِهِ أَوْ نَهَيْتُ عَنْهُ فَيَقُولُ لاَ أَدْرِي مَا وَجَدْنَا فِي كِتَابِ اللَّهِ اتَّبَعْنَاهُ ‏\"‏ ‏.‏",
    "english": "It was narrated from Ubaidullah bin Abu Rafi from his father, that:The Messenger of Allah (ﷺ) said: \"I do not want to find anyone of you reclining on his pillow, and when bad news comes to him of something that I have commanded or forbidden, he says, 'I do not know, whatever we find in the Book of Allah, we will follow",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-14",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 14,
    "arabic": "حَدَّثَنَا أَبُو مَرْوَانَ، مُحَمَّدُ بْنُ عُثْمَانَ الْعُثْمَانِيُّ حَدَّثَنَا إِبْرَاهِيمُ بْنُ سَعْدِ بْنِ إِبْرَاهِيمَ بْنِ عَبْدِ الرَّحْمَنِ بْنِ عَوْفٍ، عَنْ أَبِيهِ، عَنِ الْقَاسِمِ بْنِ مُحَمَّدٍ، عَنْ عَائِشَةَ، أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ ‏\"‏ ‏.‏",
    "english": "Aishah narrated that:The Messenger of Allah (ﷺ) said: \"Whoever innovates something in this matter of ours (i.e. Islam) that is not part of it, will have it rejected",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-15",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 15,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ رُمْحِ بْنِ الْمُهَاجِرِ الْمِصْرِيُّ، أَنْبَأَنَا اللَّيْثُ بْنُ سَعْدٍ، عَنِ ابْنِ شِهَابٍ، عَنْ عُرْوَةَ بْنِ الزُّبَيْرِ، أَنَّ عَبْدَ اللَّهِ بْنَ الزُّبَيْرِ، حَدَّثَهُ أَنَّ رَجُلاً مِنَ الأَنْصَارِ خَاصَمَ الزُّبَيْرَ عِنْدَ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ فِي شِرَاجِ الْحَرَّةِ الَّتِي يَسْقُونَ بِهَا النَّخْلَ فَقَالَ الأَنْصَارِيُّ سَرِّحِ الْمَاءَ يَمُرُّ ‏.‏ فَأَبَى عَلَيْهِ فَاخْتَصَمَا عِنْدَ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ فَقَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏\"‏ اسْقِ يَا زُبَيْرُ ثُمَّ أَرْسِلِ الْمَاءَ إِلَى جَارِكَ ‏\"‏ ‏.‏ فَغَضِبَ الأَنْصَارِيُّ فَقَالَ يَا رَسُولَ اللَّهِ أَنْ كَانَ ابْنَ عَمَّتِكَ فَتَلَوَّنَ وَجْهُ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ ثُمَّ قَالَ ‏\"‏ يَا زُبَيْرُ اسْقِ ثُمَّ احْبِسِ الْمَاءَ حَتَّى يَرْجِعَ إِلَى الْجَدْرِ ‏\"‏ ‏.‏ قَالَ فَقَالَ الزُّبَيْرُ وَاللَّهِ إِنِّي لأَحْسَبُ هَذِهِ الآيَةَ نَزَلَتْ فِي ذَلِكَ {فَلاَ وَرَبِّكَ لاَ يُؤْمِنُونَ حَتَّى يُحَكِّمُوكَ فِيمَا شَجَرَ بَيْنَهُمْ ثُمَّ لاَ يَجِدُوا فِي أَنْفُسِهِمْ حَرَجًا مِمَّا قَضَيْتَ وَيُسَلِّمُوا تَسْلِيمًا}‏ ‏.‏",
    "english": "It was narrated from Urwah bin Zubair that 'Abdullah bin Zubair told him that:A man from the Ansar had a dispute with Zubair in the presence of the Messenger of Allah (ﷺ) concerning a stream in the Harrah which they used to irrigate the date-palm trees. The Ansari said: \"Let the water flow\" but Zubair refused. So they referred that dispute to the Messenger of Allah (ﷺ) who said: \"Irrigate (your land), O Zubair., and then let the water flow to your neighbor.\" The Ansari became angry and said \"O Messenger of Allah, is it because he is your cousin?\" The face of the Messenger of Allah (ﷺ) changed color (because of anger) and he said: \"O Zubair, irrigate (your land) then block the water until it flows back to the walls around the date-palm trees.\" Zubair said: \"By Allah, I think that this verse was revealed concerning this matter. ' But no, by your Lord, they can have no Faith, until they make you (O Muhammad) judge in all disputes between them, and find in themselves no resistance against your decisions, and accept (them) with full submission",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-16",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 16,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ يَحْيَى النَّيْسَابُورِيُّ، حَدَّثَنَا عَبْدُ الرَّزَّاقِ، أَنْبَأَنَا مَعْمَرٌ، عَنِ الزُّهْرِيِّ، عَنْ سَالِمٍ، عَنِ ابْنِ عُمَرَ، أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ قَالَ ‏ \"‏ لاَ تَمْنَعُوا إِمَاءَ اللَّهِ أَنْ يُصَلِّينَ فِي الْمَسْجِدِ ‏\"‏ ‏.‏ فَقَالَ ابْنٌ لَهُ إِنَّا لَنَمْنَعُهُنَّ ‏.‏ فَقَالَ فَغَضِبَ غَضَبًا شَدِيدًا وَقَالَ إِنِّي أُحَدِّثُكَ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ وَإِنَّكَ تَقُولُ إِنَّا لَنَمْنَعُهُنَّ ‏.‏",
    "english": "It was narrated from Ibn Umar that:The Messenger of Allah (ﷺ) said:\" Do not prevent the female slaves of Allah from praying in the mosque.\" A son of his said: We will indeed prevent them!\" He got very angry and said: \"I tell you a Hadith from the Messenger of Allah (ﷺ) and you say, we will indeed prevent them?",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-17",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 17,
    "arabic": "حَدَّثَنَا أَحْمَدُ بْنُ ثَابِتٍ الْجَحْدَرِيُّ، وَأَبُو عُمَرَ حَفْصُ بْنُ عَمْرٍو قَالاَ حَدَّثَنَا عَبْدُ الْوَهَّابِ الثَّقَفِيُّ، حَدَّثَنَا أَيُّوبُ، عَنْ سَعِيدِ بْنِ جُبَيْرٍ، عَنْ عَبْدِ اللَّهِ بْنِ مُغَفَّلٍ، أَنَّهُ كَانَ جَالِسًا إِلَى جَنْبِهِ ابْنُ أَخٍ لَهُ فَخَذَفَ فَنَهَاهُ وَقَالَ إِنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ نَهَى عَنْهَا وَقَالَ ‏ \"‏ إِنَّهَا لاَ تَصِيدُ صَيْدًا وَلاَ تَنْكِي عَدُوًّا وَإِنَّهَا تَكْسِرُ السِّنَّ وَتَفْقَأُ الْعَيْنَ ‏\"‏ ‏.‏ قَالَ فَعَادَ ابْنُ أَخِيهِ يَخْذِفُ فَقَالَ أُحَدِّثُكَ أَنَّ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ نَهَى عَنْهَا ثُمَّ عُدْتَ تَخْذِفُ لاَ أُكَلِّمُكَ أَبَدًا ‏.‏",
    "english": "It was narrated from Sa'eed bin Jubair that :Abdullah bin Mughaffal was sitting beside a nephew of his, the nephew hurled a pebble and he told him not to do that, and he said: \"The Messenger of Allah (ﷺ) had forbidden that. He (the Prophet) said: 'It cannot be used for hunting and it cannot harm an enemy, but it may break a tooth or put an eye out.\" He said.\" His nephew hurled another pebble and he (\"Abdullah bin Mughaffal) said: 'I tell you that the Messenger of Allah forbade that (and you go hurl another pebble)? I will never speak to you again",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-18",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 18,
    "arabic": "حَدَّثَنَا هِشَامُ بْنُ عَمَّارٍ، حَدَّثَنَا يَحْيَى بْنُ حَمْزَةَ، حَدَّثَنِي بُرْدُ بْنُ سِنَانٍ، عَنْ إِسْحَاقَ بْنِ قَبِيصَةَ، عَنْ أَبِيهِ، أَنَّ عُبَادَةَ بْنَ الصَّامِتِ الأَنْصَارِيَّ النَّقِيبَ، صَاحِبَ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ غَزَا مَعَ مُعَاوِيَةَ أَرْضَ الرُّومِ فَنَظَرَ إِلَى النَّاسِ وَهُمْ يَتَبَايَعُونَ كِسَرَ الذَّهَبِ بِالدَّنَانِيرِ وَكِسَرَ الْفِضَّةِ بِالدَّرَاهِمِ فَقَالَ يَا أَيُّهَا النَّاسُ إِنَّكُمْ تَأْكُلُونَ الرِّبَا سَمِعْتُ رَسُولَ اللَّهِ ـ صلى الله عليه وسلم ـ يَقُولُ ‏ \"‏ لاَ تَبْتَاعُوا الذَّهَبَ بِالذَّهَبِ إِلاَّ مِثْلاً بِمِثْلٍ لاَ زِيَادَةَ بَيْنَهُمَا وَلاَ نَظِرَةَ ‏\"‏ ‏.‏ فَقَالَ لَهُ مُعَاوِيَةُ يَا أَبَا الْوَلِيدِ لاَ أَرَى الرِّبَا فِي هَذَا إِلاَّ مَا كَانَ مِنْ نَظِرَةٍ ‏.‏ فَقَالَ عُبَادَةُ أُحَدِّثُكَ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ وَتُحَدِّثُنِي عَنْ رَأْيِكَ لَئِنْ أَخْرَجَنِي اللَّهُ لاَ أُسَاكِنْكَ بِأَرْضٍ لَكَ عَلَىَّ فِيهَا إِمْرَةٌ ‏.‏ فَلَمَّا قَفَلَ لَحِقَ بِالْمَدِينَةِ فَقَالَ لَهُ عُمَرُ بْنُ الْخَطَّابِ مَا أَقْدَمَكَ يَا أَبَا الْوَلِيدِ فَقَصَّ عَلَيْهِ الْقِصَّةَ وَمَا قَالَ مِنْ مُسَاكَنَتِهِ فَقَالَ ارْجِعْ يَا أَبَا الْوَلِيدِ إِلَى أَرْضِكَ فَقَبَحَ اللَّهُ أَرْضًا لَسْتَ فِيهَا وَأَمْثَالُكَ ‏.‏ وَكَتَبَ إِلَى مُعَاوِيَةَ لاَ إِمْرَةَ لَكَ عَلَيْهِ وَاحْمِلِ النَّاسَ عَلَى مَا قَالَ فَإِنَّهُ هُوَ الأَمْرُ ‏.‏",
    "english": "It was narrated from Ishaq bin Qabisah from his father that :Ubadah bin Samit Al-Ansari, head of the army unit, the Companion of the Messenger of Allah (ﷺ), went on a military campaign with Mu'awiyah in the land of the Byzantines. He saw people trading pieces of gold for Dinar and pieces of silver for Dirham. He said: \"O people, you are consuming Riba (usury)! For I heard the Messenger of Allah (ﷺ) say: 'Do not sell gold for gold unless it is like for like; there should be no increase and no delay (between the two transactions).'\" Mu'awiyah said to him: \"O Abu Walid, I do not think there is any Riba involved in this , except in cases where there is a delay.\" 'Ubadah said to him: \"I tell you a Hadith from the Messenger of Allah (ﷺ) and you tell me your opinion! If Allah brings me back safely I will never live in a land in which you have authority over me.\" When he returned, he stayed in Al-Madinah, and 'Umar bin Khattab said to him: \"What brought you here, O Abu Walid?\" So he told him the story, and what he had said about not living in the same land as Mu'awiyah. 'Umar said: \"Go back to your land, O Abu Walid, for what a bad land is the land from where you and people like you are absent.\" Then he wrote to Mu'awiyah and said: \"You have no authority over him; make the people follow what he says , for he is right",
    "grade": "Sahih Hadith"
  },
  {
    "id": "ibnmajah-19",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 19,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ الْخَلاَّدِ الْبَاهِلِيُّ، حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنْ شُعْبَةَ، عَنِ ابْنِ عَجْلاَنَ، أَنْبَأَنَا عَوْنُ بْنُ عَبْدِ اللَّهِ، عَنْ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ، قَالَ إِذَا حَدَّثْتُكُمْ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ فَظُنُّوا بِرَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ الَّذِي هُوَ أَهْنَاهُ وَأَهْدَاهُ وَأَتْقَاهُ ‏.‏",
    "english": "Abdullah bin Mas'ud said:\"When I tell you of a Hadith from the Messenger of Alllah (ﷺ), then think of the Messenger of Allah (ﷺ) as being the best, the utmost rightly guided and the one with the utmost Taqwa (piety, righteousness)",
    "grade": "Daif"
  },
  {
    "id": "ibnmajah-20",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 20,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ، عَنْ شُعْبَةَ، عَنْ عَمْرِو بْنِ مُرَّةَ، عَنْ أَبِي الْبَخْتَرِيِّ، عَنْ أَبِي عَبْدِ الرَّحْمَنِ السُّلَمِيِّ، عَنْ عَلِيِّ بْنِ أَبِي طَالِبٍ، قَالَ إِذَا حَدَّثْتُكُمْ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ بِحَدِيثٍ فَظُنُّوا بِهِ الَّذِي هُوَ أَهْنَاهُ وَأَهْدَاهُ وَأَتْقَاهُ ‏.‏",
    "english": "It was narrated that Ali bin Abu Talib said :\"When I narrate a Hadith from the Messenger of Allah (ﷺ), to you, then think of him as being the best, the most rightly guided and the one with the utmost Taqwa (piety, righteousness)",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-21",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 21,
    "arabic": "حَدَّثَنَا عَلِيُّ بْنُ الْمُنْذِرِ، حَدَّثَنَا مُحَمَّدُ بْنُ الْفُضَيْلِ، حَدَّثَنَا الْمَقْبُرِيُّ، عَنْ جَدِّهِ، عَنْ أَبِي هُرَيْرَةَ، عَنِ النَّبِيِّ ـ صلى الله عليه وسلم ـ أَنَّهُ قَالَ ‏ \"‏ لاَ أَعْرِفَنَّ مَا يُحَدَّثُ أَحَدُكُمْ عَنِّي الْحَدِيثَ وَهُوَ مُتَّكِئٌ عَلَى أَرِيكَتِهِ فَيَقُولُ اقْرَأْ قُرْآنًا ‏.‏ مَا قِيلَ مِنْ قَوْلٍ حَسَنٍ فَأَنَا قُلْتُهُ ‏\"‏ ‏.‏",
    "english": "It was narrated from Abu Hurairah that :The Prophet said \"I do not want to hear of anyone of you who, upon hearing a Hadith narrated from me, says while reclining on his pillow: 'Recite Qur'an (to verify this Hadith).' (Here the Propher SAW said) Any excellent word that is said, it is I who have said it.\" [How can you reject what I have said?]",
    "grade": "Mawdu"
  },
  {
    "id": "ibnmajah-22",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 22,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبَّادِ بْنِ آدَمَ، حَدَّثَنَا أَبِي، عَنْ شُعْبَةَ، عَنْ مُحَمَّدِ بْنِ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، عَنْ أَبِي هُرَيْرَةَ، ح وَحَدَّثَنَا هَنَّادُ بْنُ السَّرِيِّ، حَدَّثَنَا عَبْدَةُ بْنُ سُلَيْمَانَ، حَدَّثَنَا مُحَمَّدُ بْنُ عَمْرٍو، عَنْ أَبِي سَلَمَةَ، أَنَّ أَبَا هُرَيْرَةَ، قَالَ لِرَجُلٍ يَا ابْنَ أَخِي إِذَا حَدَّثْتُكَ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ حَدِيثًا فَلاَ تَضْرِبْ لَهُ الأَمْثَالَ ‏.‏ قَالَ أَبُو الْحَسَنِ حَدَّثَنَا يَحْيَى بْنُ عَبْدِ اللَّهِ الْكَرَابِيسِيُّ، حَدَّثَنَا عَلِيُّ بْنُ الْجَعْدِ، عَنْ شُعْبَةَ، عَنْ عَمْرِو بْنِ مُرَّةَ، مِثْلَ حَدِيثِ عَلِيٍّ رضى الله تعالى عنه ‏.‏",
    "english": "It was narrated from Abu Salamah that :Abu Hurairah said to a man \"O son of my brother, when I narrate a Hadith of the Messenger of Allah (ﷺ), to you, then do not try to make any examples for it",
    "grade": "Hasan"
  },
  {
    "id": "ibnmajah-23",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 23,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا مُعَاذُ بْنُ مُعَاذٍ، عَنِ ابْنِ عَوْنٍ، حَدَّثَنَا مُسْلِمٌ الْبَطِينُ، عَنْ إِبْرَاهِيمَ التَّيْمِيِّ، عَنْ أَبِيهِ، عَنْ عَمْرِو بْنِ مَيْمُونٍ، قَالَ مَا أَخْطَأَنِي ابْنُ مَسْعُودٍ عَشِيَّةَ خَمِيسٍ إِلاَّ أَتَيْتُهُ فِيهِ قَالَ فَمَا سَمِعْتُهُ يَقُولُ لِشَىْءٍ قَطُّ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ فَلَمَّا كَانَ ذَاتَ عَشِيَّةٍ قَالَ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ - قَالَ فَنَكَسَ ‏.‏ قَالَ فَنَظَرْتُ إِلَيْهِ فَهُوَ قَائِمٌ مُحَلَّلَةً أَزْرَارُ قَمِيصِهِ قَدِ اغْرَوْرَقَتْ عَيْنَاهُ وَانْتَفَخَتْ أَوْدَاجُهُ قَالَ أَوْ دُونَ ذَلِكَ أَوْ فَوْقَ ذَلِكَ أَوْ قَرِيبًا مِنْ ذَلِكَ أَوْ شَبِيهًا بِذَلِكَ ‏.‏",
    "english": "Amr bin Maimun said :\"I used to visit Ibn Mas'ud every Thursday afternoon but he never uttered the words: 'The Messenger of Allah (ﷺ) said.' Then one evening, he said: 'The Messenger of Allah (ﷺ) said,' then he let his head hang down.\" He said: \"I looked at him and saw his shirt was unfastened; his eyes were filled with tears, and his veins were bulging out (with fear). He said:' Or more than that, or less than that, or close to that or something similar",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-24",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 24,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا مُعَاذُ بْنُ مُعَاذٍ، عَنِ ابْنِ عَوْنٍ، عَنْ مُحَمَّدِ بْنِ سِيرِينَ، قَالَ كَانَ أَنَسُ بْنُ مَالِكٍ إِذَا حَدَّثَ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ حَدِيثًا فَفَرَغَ مِنْهُ قَالَ أَوْ كَمَا قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏.‏",
    "english": "Muhammad bin Sirin said :\"Whenever Anas bin Malik finished narrating a Hadith from the Messenger of Allah (ﷺ), he would say, 'Or as the Messenger of Allah (ﷺ) said",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-25",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 25,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، حَدَّثَنَا غُنْدَرٌ، عَنْ شُعْبَةَ، ح وَحَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ بْنُ مَهْدِيٍّ، حَدَّثَنَا شُعْبَةُ، عَنْ عَمْرِو بْنِ مُرَّةَ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ أَبِي لَيْلَى، قَالَ قُلْنَا لِزَيْدِ بْنِ أَرْقَمَ حَدِّثْنَا عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ ‏.‏ قَالَ كَبِرْنَا وَنَسِينَا وَالْحَدِيثُ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ شَدِيدٌ ‏.‏",
    "english": "It was narrated that 'Abdur-Rahman bin Abi Laila said:We said to Zaid bin Arqam: 'Tell us a Hadith from the Messenger of Allah (ﷺ).' He said: 'We have grown old and have forgotten, and (narrating) Ahadith from the Messenger of Allah (ﷺ) is difficult (not a simple matter)",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-26",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 26,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ عَبْدِ اللَّهِ بْنِ نُمَيْرٍ، حَدَّثَنَا أَبُو النَّضْرِ، عَنْ شُعْبَةَ، عَنْ عَبْدِ اللَّهِ بْنِ أَبِي السَّفَرِ، قَالَ سَمِعْتُ الشَّعْبِيَّ، يَقُولُ جَالَسْتُ ابْنَ عُمَرَ سَنَةً فَمَا سَمِعْتُهُ يُحَدِّثُ، عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ شَيْئًا ‏.‏",
    "english": "It was narrated that 'Abdullah bin Abu Safar said:\"I heard Ash-Sha'bi saying: 'I sat with Ibn 'Umar for a year and I did not hear him narrate anything from the Messenger of Allah (ﷺ)",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-27",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 27,
    "arabic": "حَدَّثَنَا الْعَبَّاسُ بْنُ عَبْدِ الْعَظِيمِ الْعَنْبَرِيُّ، حَدَّثَنَا عَبْدُ الرَّزَّاقِ، أَنْبَأَنَا مَعْمَرٌ، عَنِ ابْنِ طَاوُسٍ، عَنْ أَبِيهِ، قَالَ سَمِعْتُ ابْنَ عَبَّاسٍ، يَقُولُ إِنَّمَا كُنَّا نَحْفَظُ الْحَدِيثَ وَالْحَدِيثُ يُحْفَظُ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ فَأَمَّا إِذَا رَكِبْتُمُ الصَّعْبَ وَالذَّلُولَ فَهَيْهَاتَ ‏.‏",
    "english": "It was narrated from Ibn Tawus that his father said:\"I heard Ibn 'Abbas saying: 'We used to memorize Ahadith, and Ahadith were memorized from the Messenger of Allah (ﷺ). But if you go to the extremes of either exaggeration or negligence (in narrating Ahadith), there is no way we can trust your Ahadith",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-28",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 28,
    "arabic": "حَدَّثَنَا أَحْمَدُ بْنُ عَبْدَةَ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، عَنْ مُجَالِدٍ، عَنِ الشَّعْبِيِّ، عَنْ قَرَظَةَ بْنِ كَعْبٍ، قَالَ بَعَثَنَا عُمَرُ بْنُ الْخَطَّابِ إِلَى الْكُوفَةِ وَشَيَّعَنَا فَمَشَى مَعَنَا إِلَى مَوْضِعٍ يُقَالُ لَهُ صِرَارٌ ‏.‏ فَقَالَ أَتَدْرُونَ لِمَ مَشَيْتُ مَعَكُمْ قَالَ قُلْنَا لِحَقِّ صُحْبَةِ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ وَلِحَقِّ الأَنْصَارِ ‏.‏ قَالَ لَكِنِّي مَشَيْتُ مَعَكُمْ لِحَدِيثٍ أَرَدْتُ أَنْ أُحَدِّثَكُمْ بِهِ فَأَرَدْتُ أَنْ تَحْفَظُوهُ لِمَمْشَاىَ مَعَكُمْ إِنَّكُمْ تَقْدُمُونَ عَلَى قَوْمٍ لِلْقُرْآنِ فِي صُدُورِهِمْ هَزِيزٌ كَهَزِ��زِ الْمِرْجَلِ فَإِذَا رَأَوْكُمْ مَدُّوا إِلَيْكُمْ أَعْنَاقَهُمْ وَقَالُوا أَصْحَابُ مُحَمَّدٍ ‏.‏ فَأَقِلُّوا الرِّوَايَةَ عَنْ رَسُولِ اللَّهِ ـ صلى الله عليه وسلم ـ ثُمَّ أَنَا شَرِيكُكُمْ ‏.‏",
    "english": "It was narrated that Qarazah bin Ka'b said:\"Umar bin Al-Khattab sent us to Kufah, and he accompanied us as far as a place called Sirar. He said: 'Do you know why I walked with you?' We said: 'Because of the rights of the Messenger of Allah (ﷺ) and because of the rights of the Ansar.' He said: 'No, rather it is because of words that I wanted to say to you. I wanted you to memorize it due to my walking with you. You are going to people in whose hearts the Qur'an bubbles like water in a copper cauldron. When they see you, they will look up at you, saying: \"The Companions of Muhammad!\" But do not recite many reports from the Messenger of Allah (ﷺ), then I will be your partner",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-29",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 29,
    "arabic": "حَدَّثَنَا مُحَمَّدُ بْنُ بَشَّارٍ، حَدَّثَنَا عَبْدُ الرَّحْمَنِ، حَدَّثَنَا حَمَّادُ بْنُ زَيْدٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، عَنِ السَّائِبِ بْنِ يَزِيدَ، قَالَ صَحِبْتُ سَعْدَ بْنَ مَالِكٍ مِنَ الْمَدِينَةِ إِلَى مَكَّةَ فَمَا سَمِعْتُهُ يُحَدِّثُ عَنِ النَّبِيِّ ـ صلى الله عليه وسلم ـ بِحَدِيثٍ وَاحِدٍ ‏.‏",
    "english": "It was narrated that Sa'ib bin Yazid said:\"I accompanied Sa'd bin Malik from Al-Madinah to Makkah and I did not hear him narrate a single Hadith from the Prophet (ﷺ)",
    "grade": "Sahih"
  },
  {
    "id": "ibnmajah-30",
    "collection": "ibnmajah",
    "collectionName": "Sunan Ibn Majah",
    "hadithNumber": 30,
    "arabic": "حَدَّثَنَا أَبُو بَكْرِ بْنُ أَبِي شَيْبَةَ، وَسُوَيْدُ بْنُ سَعِيدٍ، وَعَبْدُ اللَّهِ بْنُ عَامِرِ بْنِ زُرَارَةَ، وَإِسْمَاعِيلُ بْنُ مُوسَى، قَالُوا حَدَّثَنَا شَرِيكٌ، عَنْ سِمَاكٍ، عَنْ عَبْدِ الرَّحْمَنِ بْنِ عَبْدِ اللَّهِ بْنِ مَسْعُودٍ، عَنْ أَبِيهِ، قَالَ قَالَ رَسُولُ اللَّهِ ـ صلى الله عليه وسلم ـ ‏ \"‏ مَنْ كَذَبَ عَلَىَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ ‏\"‏ ‏.‏",
    "english": "It was narrated from 'Abdur-Rahman bin 'Abdullah bin Mas'ud that his father said:\"The Messenger of Allah (ﷺ) said: 'Whoever tells lies about me deliberately, let him take his place in Hell",
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
    "id": "malik-11",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 11,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنِ ابْنِ شِهَابٍ، عَنْ أَنَسِ بْنِ مَالِكٍ، أَنَّهُ قَالَ كُنَّا نُصَلِّي الْعَصْرَ ثُمَّ يَذْهَبُ الذَّاهِبُ إِلَى قُبَاءٍ فَيَأْتِيهِمْ وَالشَّمْسُ مُرْتَفِعَةٌ ‏.‏",
    "english": "Yahya related to me from Malik from Ibn Shihab that Anas ibn Malik said, \"We would pray asr and anyone who then went to Quba would arrive there while the sun was still high",
    "grade": "Sahih"
  },
  {
    "id": "malik-12",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 12,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ رَبِيعَةَ بْنِ أَبِي عَبْدِ الرَّحْمَنِ، عَنِ الْقَاسِمِ بْنِ مُحَمَّدٍ، أَنَّهُ قَالَ مَا أَدْرَكْتُ النَّاسَ إِلاَّ وَهُمْ يُصَلُّونَ الظُّهْرَ بِعَشِيٍّ ‏.‏",
    "english": "Yahya related to me from Malik from Rabia ibn Abi Abd ar-Rahman that al Qasim ibn Muhammad said, \"None of the companions that I met prayed dhuhr until well after noon,\"(i.e.until when the sun had lost its fierceness)",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-13",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 13,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ عَمِّهِ أَبِي سُهَيْلِ بْنِ مَالِكٍ، عَنْ أَبِيهِ، أَنَّهُ قَالَ كُنْتُ أَرَى طِنْفِسَةً لِعَقِيلِ بْنِ أَبِي طَالِبٍ يَوْمَ الْجُمُعَةِ تُطْرَحُ إِلَى جِدَارِ الْمَسْجِدِ الْغَرْبِيِّ فَإِذَا غَشِيَ الطِّنْفِسَةَ كُلَّهَا ظِلُّ الْجِدَارِ خَرَجَ عُمَرُ بْنُ الْخَطَّابِ وَصَلَّى الْجُمُعَةَ - قَالَ مَالِكٌ وَالِدُ أَبِي سُهَيْلٍ - ثُمَّ نَرْجِعُ بَعْدَ صَلاَةِ الْجُمُعَةِ فَنَقِيلُ قَائِلَةَ الضَّحَاءِ ‏.‏",
    "english": "Yahya related to me from Malik from his uncle Abu Suhayl ibn Malik that his father said, \"I used to see a carpet belonging to Aqil ibn Abi Talib spread out on the day of jumua up to the west wall of the mosque. When the shadow of the wall covered the whole carpet, Umar ibn al-Khattab would come out and pray the jumua prayer.\" Malik, Abu Suhayl's father, added, \"We would then return after the jumua prayer and take our midday sleep",
    "grade": "Maqtu Sahih"
  },
  {
    "id": "malik-14",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 14,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ عَمْرِو بْنِ يَحْيَى الْمَازِنِيِّ، عَنِ ابْنِ أَبِي سَلِيطٍ، أَنَّ عُثْمَانَ بْنَ عَفَّانَ، صَلَّى الْجُمُعَةَ بِالْمَدِينَةِ وَصَلَّى الْعَصْرَ بِمَلَلٍ ‏.‏ قَالَ مَالِكٌ وَذَلِكَ لِلتَّهْجِيرِ وَسُرْعَةِ السَّيْرِ ‏.‏",
    "english": "Yahya related to me from Malik from Amr ibn Yahya ibn Yahya al- Mazini from Ibn Abi Salit that Uthman ibn Affan prayed jumua in Madina and asr in Malal (a place seventeen miles from Madina). Malik commented, \"That was by praying jumua just past midday and then travelling fast",
    "grade": "Mauquf Hasan"
  },
  {
    "id": "malik-15",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 15,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنِ ابْنِ شِهَابٍ، عَنْ أَبِي سَلَمَةَ بْنِ عَبْدِ الرَّحْمَنِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ مَنْ أَدْرَكَ رَكْعَةً مِنَ الصَّلاَةِ فَقَدْ أَدْرَكَ الصَّلاَةَ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Ibn Shihab from Abu Salama ibn Abdar-Rahman from Abu Hurayra that the Messenger of Allah, may Allah bless him and grant him peace, said \"Whoever catches a raka of the prayer has caught the prayer",
    "grade": "Sahih"
  },
  {
    "id": "malik-16",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 16,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ نَافِعٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عُمَرَ بْنِ الْخَطَّابِ، كَانَ يَقُولُ إِذَا فَاتَتْكَ الرَّكْعَةُ فَقَدْ فَاتَتْكَ السَّجْدَةُ ‏.‏",
    "english": "Yahya related to me from Malik from Nafi that Abdullah ibn Umar ibn al-Khattab used to say, \"If the ruku has passed you by, so has the sajda",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-17",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 17,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، أَنَّهُ بَلَغَهُ أَنَّ عَبْدَ اللَّهِ بْنَ عُمَرَ، وَزَيْدَ بْنَ ثَابِتٍ، كَانَا يَقُولاَنِ مَنْ أَدْرَكَ الرَّكْعَةَ فَقَدْ أَدْرَكَ السَّجْدَةَ ‏.‏",
    "english": "Yahya related to me from Malik that he had heard that Abdullah ibn Umar and Zayd ibn Thabit used to say, \"Whoever catches the raka`ah has caught the sajda",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-18",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 18,
    "arabic": "وَحَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، أَنَّهُ بَلَغَهُ أَنَّ أَبَا هُرَيْرَةَ، كَانَ يَقُولُ مَنْ أَدْرَكَ الرَّكْعَةَ فَقَدْ أَدْرَكَ السَّجْدَةَ وَمَنْ فَاتَهُ قِرَاءَةُ أُمِّ الْقُرْآنِ فَقَدْ فَاتَهُ خَيْرٌ كَثِيرٌ ‏.‏",
    "english": "Yahya related to me from Malik that he had heard that Abu Hurayra used to say, \"Whoever catches the ruku has caught the sajda and whoever misses the recitation of the umm al-Qur'an has missed much good",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-19",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 19,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ نَافِعٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عُمَرَ، كَانَ يَقُولُ دُلُوكُ الشَّمْسِ مَيْلُهَا ‏.‏",
    "english": "Yahya related to me from Malik from Nafi that Abdullah ibn Umar used to say, \"Duluk ash-shams begins from when the sun passes the meridian",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-20",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 20,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ دَاوُدَ بْنِ الْحُصَيْنِ، قَالَ أَخْبَرَنِي مُخْبِرٌ، أَنَّ عَبْدَ اللَّهِ بْنَ عَبَّاسٍ، كَانَ يَقُولُ دُلُوكُ الشَّمْسِ إِذَا فَاءَ الْفَىْءُ وَغَسَقُ اللَّيْلِ اجْتِمَاعُ اللَّيْلِ وَظُلْمَتُهُ ‏.‏",
    "english": "Yahya related to me from Malik that Da'ud ibn al-Husayn said that someone had told him Abdullah ibn Abbas used to say, \"Duluk ash-shams begins from when the sun passes the meridian. Ghasaq al-layl is the gathering of the night and its darkness",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-21",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 21,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ نَافِعٍ، عَنْ عَبْدِ اللَّهِ بْنِ عُمَرَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ الَّذِي تَفُوتُهُ صَلاَةُ الْعَصْرِ كَأَنَّمَا وُتِرَ أَهْلَهُ وَمَالَهُ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Nafi from Abdullah ibn Umar that the Messenger of Allah, may Allah bless him and grant him peace, said, \"If someone misses the asr prayer it is as if he has suffered a great misfortune in his family and wealth",
    "grade": "Sahih"
  },
  {
    "id": "malik-22",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 22,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، أَنَّ عُمَرَ بْنَ الْخَطَّابِ، انْصَرَفَ مِنْ صَلاَةِ الْعَصْرِ فَلَقِيَ رَجُلاً لَمْ يَشْهَدِ الْعَصْرَ فَقَالَ عُمَرُ مَا حَبَسَكَ عَنْ صَلاَةِ الْعَصْرِ فَذَكَرَ لَهُ الرَّجُلُ عُذْرًا فَقَالَ عُمَرُ طَفَّفْتَ ‏.‏ قَالَ يَحْيَى قَالَ مَالِكٌ وَيُقَالُ لِكُلِّ شَىْءٍ وَفَاءٌ وَتَطْفِيفٌ ‏.‏",
    "english": "Yahya related to me from Malik from Yahya ibn Said that once Umar ibn al-Khattab left after doing the asr prayer and met a man who had not been there. Umar asked him what had kept him from the prayer and eventhough the man gave a good reason, Umar said, \"You have given yourself short measure.\" Yahya added that Malik commented, \"It is said that everything has a short measure and a full measure",
    "grade": "Mauquf Daif"
  },
  {
    "id": "malik-23",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 23,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ يَحْيَى بْنِ سَعِيدٍ، أَنَّهُ كَانَ يَقُولُ إِنَّ الْمُصَلِّيَ لَيُصَلِّي الصَّلاَةَ وَمَا فَاتَهُ وَقْتُهَا وَلَمَا فَاتَهُ مِنْ وَقْتِهَا أَعْظَمُ - أَوْ أَفْضَلُ - مِنْ أَهْلِهِ وَمَالِهِ ‏.‏ قَالَ يَحْيَى قَالَ مَالِكٌ مَنْ أَدْرَكَ الْوَقْتَ وَهُوَ فِي سَفَرٍ فَأَخَّرَ الصَّلاَةَ سَاهِيًا أَوْ نَاسِيًا حَتَّى قَدِمَ عَلَى أَهْلِهِ أَنَّهُ إِنْ كَانَ قَدِمَ عَلَى أَهْلِهِ وَهُوَ فِي الْوَقْتِ فَلْيُصَلِّ صَلاَةَ الْمُقِيمِ وَإِنْ كَانَ قَدْ قَدِمَ وَقَدْ ذَهَبَ الْوَقْتُ فَلْيُصَلِّ صَلاَةَ الْمُسَافِرِ لأَنَّهُ إِنَّمَا يَقْضِي مِثْلَ الَّذِي كَانَ عَلَيْهِ ‏.‏ قَالَ مَالِكٌ وَهَذَا الأَمْرُ هُوَ الَّذِي أَدْرَكْتُ عَلَيْهِ النَّاسَ وَأَهْلَ الْعِلْمِ بِبَلَدِنَا ‏.‏ وَقَالَ مَالِكٌ الشَّفَقُ الْحُمْرَةُ الَّتِي فِي الْمَغْرِبِ فَإِذَا ذَهَبَتِ الْحُمْرَةُ فَقَدْ وَجَبَتْ صَلاَةُ الْعِشَاءِ وَخَرَجْتَ مِنْ وَقْتِ الْمَغْرِبِ ‏.‏",
    "english": "Yahya related to me from Malik thatYahya ibn Said used to say, \"Even if someone manages to pray before the time of the prayer has passed, the time that has passed him by is more important, or better, than his family and wealth.\" Yahya said that Malik said, \"If the time for a prayer comes and a traveller delays a prayer through neglect or forgetfulness until he reaches his family, he should do that prayer in full if he arrives within the time. But if he arrives when the time has past, he should do the travelling prayer. That way he only repays what he owes.\" Malik said, \"This is what I have found the people and men of knowledge doing in our community.\" Malik explained that shafaq was the redness in the sky after the sun had set, and said, \"When the redness has gone then the isha prayer is due and you have left the time of maghrib",
    "grade": "Maqtu Sahih"
  },
  {
    "id": "malik-24",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 24,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ نَافِعٍ، أَنَّ عَبْدَ اللَّهِ بْنَ عُمَرَ، أُغْمِيَ عَلَيْهِ فَذَهَبَ عَقْلُهُ فَلَمْ يَقْضِ الصَّلاَةَ ‏.‏ قَالَ مَالِكٌ وَذَلِكَ فِيمَا نَرَى - وَاللَّهُ أَعْلَمُ - أَنَّ الْوَقْتَ قَدْ ذَهَبَ فَأَمَّا مَنْ أَفَاقَ فِي الْوَقْتِ فَإِنَّهُ يُصَلِّي ‏.‏",
    "english": "Yahya related to me from Malik from Nafi that one time Abdullah ibn Umar fainted and lost his senses and he did not make up the prayer. Malik commented, \"We consider that that was because, and Allah knows best, the time had passed. Someone who recovers within the time has to pray",
    "grade": "Mauquf Sahih"
  },
  {
    "id": "malik-25",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 25,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم حِينَ قَفَلَ مِنْ خَيْبَرَ أَسْرَى حَتَّى إِذَا كَانَ مِنْ آخِرِ اللَّيْلِ عَرَّسَ وَقَالَ لِبِلاَلٍ ‏\"‏ اكْلأْلَنَا الصُّبْحَ ‏\"‏ ‏.‏ وَنَامَ رَسُولُ اللَّهِ صلى الله عليه وسلم وَأَصْحَابُهُ وَكَلأَ بِلاَلٌ مَا قُدِّرَ لَهُ ثُمَّ اسْتَنَدَ إِلَى رَاحِلَتِهِ وَهُوَ مُقَابِلُ الْفَجْرِ فَغَلَبَتْهُ عَيْنَاهُ فَلَمْ يَسْتَيْقِظْ رَسُولُ اللَّهِ صلى الله عليه وسلم وَلاَ بِلاَلٌ وَلاَ أَحَدٌ مِنَ الرَّكْبِ حَتَّى ضَرَبَتْهُمُ الشَّمْسُ فَفَزِعَ رَسُولُ اللَّهِ صلى الله عليه وسلم فَقَالَ بِلاَلٌ يَا رَسُولَ اللَّهِ أَخَذَ بِنَفْسِي الَّذِي أَخَذَ بِنَفْسِكَ ‏.‏ فَقَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم ‏\"‏ اقْتَادُوا ‏\"‏ ‏.‏ فَبَعَثُوا رَوَاحِلَهُمْ وَاقْتَادُوا شَيْئًا ثُمَّ أَمَرَ رَسُولُ اللَّهِ صلى الله عليه وسلم بِلاَلاً فَأَقَامَ الصَّلاَةَ فَصَلَّى بِهِمْ رَسُولُ اللَّهِ صلى الله عليه وسلم الصُّبْحَ ثُمَّ قَالَ حِينَ قَضَى الصَّلاَةَ ‏\"‏ مَنْ نَسِيَ الصَّلاَةَ فَلْيُصَلِّهَا إِذَا ذَكَرَهَا فَإِنَّ اللَّهَ تَبَارَكَ وَتَعَالَى يَقُولُ فِي كِتَابِهِ ‏{‏أَقِمِ الصَّلاَةَ لِذِكْرِي ‏}‏ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Ibn Shihab from Said ibn al- Musayyab that the Messenger of Allah, may Allah bless him and grant him peace, travelled by night on the way back from Khaybar.Towards the end of the night he stopped for a rest and told Bilal to stay awake to keep watch for the subh prayer. The Messenger of Allah, may Allah bless him and grant him peace, and his companions slept. Bilal stayed on guard as long as was decreed for him and then he leant against his riding camel facing the direction of the dawn and sleep overcame him and neither he nor the Messenger of Allah nor any of the party woke up until the sun's rays had struck them. The Messenger of Allah, may Allah bless him and grant him peace, was alarmed. Bilal excused himself, saying, \"Messenger of Allah! The One who took your self was the One who took myself. \"The Messenger of Allah, may Allah bless him and grant him peace, ordered the party to move on and so they roused thei r mounts and rode on a short distance. The Messenger of Allah, may Allah bless him and grant him peace, ordered Bilal to give the iqama and then led them in the subh prayer. When he had finished he said, \"Anyone who forgets a prayer should pray it when he remembers. Allah theBlessed and Exalted says in His book, 'Establish the prayer to remember Me",
    "grade": "Sahih"
  },
  {
    "id": "malik-26",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 26,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، أَنَّهُ قَالَ عَرَّسَ رَسُولُ اللَّهِ صلى الله عليه وسلم لَيْلَةً بِطَرِيقِ مَكَّةَ وَوَكَّلَ بِلاَلاً أَنْ يُوقِظَهُمْ لِلصَّلاَةِ فَرَقَدَ بِلاَلٌ وَرَقَدُوا حَتَّى اسْتَيْقَظُوا وَقَدْ طَلَعَتْ عَلَيْهِمُ الشَّمْسُ فَاسْتَيْقَظَ الْقَوْمُ وَقَدْ فَزِعُوا فَأَمَرَهُمْ رَسُولُ اللَّهِ صلى الله عليه وسلم أَنْ يَرْكَبُوا حَتَّى يَخْرُجُوا مِنْ ذَلِكَ الْوَادِي وَقَالَ ‏\"‏ إِنَّ هَذَا وَادٍ بِهِ شَيْطَانٌ ‏\"‏ ‏.‏ فَرَكِبُوا حَتَّى خَرَجُوا مِنْ ذَلِكَ الْوَادِي ثُمَّ أَمَرَهُمْ رَسُولُ اللَّهِ صلى الله عليه وسلم أَنْ يَنْزِلُوا وَأَنْ يَتَوَضَّئُوا وَأَمَرَ بِلاَلاً أَنْ يُنَادِيَ بِالصَّلاَةِ أَوْ يُقِيمَ فَصَلَّى رَسُولُ اللَّهِ صلى الله عليه وسلم بِالنَّاسِ ثُمَّ انْصَرَفَ إِلَيْهِمْ وَقَدْ رَأَى مِنْ فَزَعِهِمْ فَقَالَ ‏\"‏ يَا أَيُّهَا النَّاسُ إِنَّ اللَّهَ قَبَضَ أَرْوَاحَنَا وَلَوْ شَاءَ لَرَدَّهَا إِلَيْنَا فِي حِينٍ غَيْرِ هَذَا فَإِذَا رَقَدَ أَحَدُكُمْ عَنِ الصَّلاَةِ أَوْ نَسِيَهَا ثُمَّ فَزِعَ إِلَيْهَا فَلْيُصَلِّهَا كَمَا كَانَ يُصَلِّيهَا فِي وَقْتِهَا ‏\"‏ ‏.‏ ثُمَّ الْتَفَتَ رَسُولُ اللَّهِ صلى الله عليه وسلم إِلَى أَبِي بَكْرٍ فَقَالَ ‏\"‏ إِنَّ الشَّيْطَانَ أَتَى بِلاَلاً وَهُوَ قَائِمٌ يُصَلِّي فَأَضْجَعَهُ فَلَمْ يَزَلْ يُهَدِّئُهُ كَمَا يُهَدَّأُ الصَّبِيُّ حَتَّى نَامَ ‏\"‏ ‏.‏ ثُمَّ دَعَا رَسُولُ اللَّهِ صلى الله عليه وسلم بِلاَلاً فَأَخْبَرَ بِلاَلٌ رَسُولَ اللَّهِ صلى الله عليه وسلم مِثْلَ الَّذِي أَخْبَرَ رَسُولُ اللَّهِ صلى الله عليه وسلم أَبَا بَكْرٍ فَقَالَ أَبُو بَكْرٍ أَشْهَدُ أَنَّكَ رَسُولُ اللَّهِ ‏.‏",
    "english": "Yahya related to me from Malik that Zayd ibn Aslam said, \"The Messenger of Allah, may Allah bless him and grant him peace, stopped for a rest one night on the way to Makka and appointed Bilal to wake them up for the prayer. Bilal slept and everyone else slept and none of them woke up until the sun had risen. When they did wake up they were all alarmed. The Messenger of Allah, may Allah bless him and grant him peace, ordered them to ride out of the valley, saying that there was a shaytan in it. So they rode out of the valley and the Messenger of Allah, may Allah bless him and grant him peace, ordered them to dismount and do wudu and he told Bilal either to call the prayer or to give the iqama. The Messenger of Allah, may Allah bless him and grant him peace, then led them in the prayer. Noticing their uneasiness, he went to them and said, 'O people! Allah seized our spirits (arwah) and if He had wished He would have returned them to us at a time other than this. So if you sleep through the time for a prayer or forget it and then are anxious about it, pray it as if you were praying it in its time.' The Messenger of Allah, may Allah bless him and grant him peace, turned to Abu Bakr and said, 'Shaytan came to Bilal when he was standing in prayer and made him lie down and lulled him to sleep like a small boy.' The Messenger of Allah, may Allah bless him and grant him peace, then called Bilal and told him the same as he had told Abu Bakr. Abu Bakr declared, 'I bear witness that you are the Messenger of Allah",
    "grade": "Hasan Lighairihi"
  },
  {
    "id": "malik-27",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 27,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنْ زَيْدِ بْنِ أَسْلَمَ، عَنْ عَطَاءِ بْنِ يَسَارٍ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏\"‏ إِنَّ شِدَّةَ الْحَرِّ مِنْ فَيْحِ جَهَنَّمَ فَإِذَا اشْتَدَّ الْحَرُّ فَأَبْرِدُوا عَنِ الصَّلاَةِ ‏\"‏ ‏.‏ وَقَالَ ‏\"‏ اشْتَكَتِ النَّارُ إِلَى رَبِّهَا فَقَالَتْ يَا رَبِّ أَكَلَ بَعْضِي بَعْضًا ‏.‏ فَأَذِنَ لَهَا بِنَفَسَيْنِ فِي كُلِّ عَامٍ نَفَسٍ فِي الشِّتَاءِ وَنَفَسٍ فِي الصَّيْفِ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Zayd ibn Aslam from Ata ibn Yasar that the Messenger of Allah, may Allah bless him and grant him peace, said, \"Scorching heat is a part of the blast of Jahannam. So, when the heat is fierce, delay the prayer until it gets cooler.\" He added in explanation, \"The Fire complained to its Lord and said, 'My Lord, part of me has eaten another part,' so He allowed it two breaths in every year, a breath in winter and a breath in summer",
    "grade": "Sahih Lighairihi"
  },
  {
    "id": "malik-28",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 28,
    "arabic": "وَحَدَّثَنَا مَالِكٌ، عَنْ عَبْدِ اللَّهِ بْنِ يَزِيدَ، مَوْلَى الأَسْوَدِ بْنِ سُفْيَانَ عَنْ أَبِي سَلَمَةَ بْنِ عَبْدِ الرَّحْمَنِ، وَعَنْ مُحَمَّدِ بْنِ عَبْدِ الرَّحْمَنِ بْنِ ثَوْبَانَ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏\"‏ إِذَا اشْتَدَّ الْحَرُّ فَأَبْرِدُوا عَنِ الصَّلاَةِ فَإِنَّ شِدَّةَ الْحَرِّ مِنْ فَيْحِ جَهَنَّمَ ‏\"‏ ‏.‏ وَذَكَرَ ‏\"‏ أَنَّ النَّارَ اشْتَكَتْ إِلَى رَبِّهَا فَأَذِنَ لَهَا فِي كُلِّ عَامٍ بِنَفَسَيْنِ نَفَسٍ فِي الشِّتَاءِ وَنَفَسٍ فِي الصَّيْفِ ‏\"‏ ‏.‏",
    "english": "Malik related to us from Abdullah ibn Yazid the mawla of al-Aswad ibn Sufyan, from Abu Salama ibn Abd ar-Rahman from Muhammad ibn Abd ar-Rahman ibn Thawban from Abu Hurayra that the Messenger of Allah, may Allah bless him and grant him peace, said, \"When the heat is fierce delay the prayer until it gets cooler, for scorching heat is a part of the blast of Jahannam.\" He added, \"The Fire complained to its Lord, so He allowed it two breaths in each year, a breath in winter and a breath in summer",
    "grade": "Sahih"
  },
  {
    "id": "malik-29",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 29,
    "arabic": "وَحَدَّثَنِي عَنْ مَالِكٍ، عَنْ أَبِي الزِّنَادِ، عَنِ الأَعْرَجِ، عَنْ أَبِي هُرَيْرَةَ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ إِذَا اشْتَدَّ الْحَرُّ فَأَبْرِدُوا عَنِ الصَّلاَةِ فَإِنَّ شِدَّةَ الْحَرِّ مِنْ فَيْحِ جَهَنَّمَ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Abu'z Zinad from al-Araj from Abu Hurayra that the Messenger of Allah, may Allah bless him and grant him peace, said, \"When the heat is fierce, wait until it gets cooler before you do the prayer, for scorching heat is from the blast of Jahannam",
    "grade": "Sahih"
  },
  {
    "id": "malik-30",
    "collection": "malik",
    "collectionName": "Muwatta Malik",
    "hadithNumber": 30,
    "arabic": "حَدَّثَنِي يَحْيَى، عَنْ مَالِكٍ، عَنِ ابْنِ شِهَابٍ، عَنْ سَعِيدِ بْنِ الْمُسَيَّبِ، أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ ‏ \"‏ مَنْ أَكَلَ مِنْ هَذِهِ الشَّجَرَةِ فَلاَ يَقْرُبْ مَسَاجِدَنَا يُؤْذِينَا بِرِيحِ الثُّومِ ‏\"‏ ‏.‏",
    "english": "Yahya related to me from Malik from Ibn Shihab from Said ibn al- Musayyab that the Messenger of Allah, may Allah bless him and grant him peace, said, \"Anyone who eats this plant should not come near our mosques. The smell of the garlic will offend us",
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
    "arabic": "عَنْ أَبِي عَبْدِ اللَّهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللَّهُ عَنْهُمَا، قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: إنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا أُمُورٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيرٌ مِنْ النَّاسِ، فَمَنْ اتَّقَى الشُّبُهَاتِ فَقْد اسْتَبْرَأَ لِدِينِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوشِكُ أَنْ يَرْتَعَ فِيهِ، أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللَّهِ مَحَارِمُهُ، أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ .<br>[رَوَاهُ الْبُخَارِيُّ]، [وَمُسْلِمٌ]",
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
    "arabic": "عَنْ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا، أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لَا إلَهَ إلَّا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَيُقِيمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ؛ فَإِذَا فَعَلُوا ذَلِكَ عَصَمُوا مِنِّي دِمَاءَهُمْ وَأَمْوَالَهُمْ إلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللَّهِ تَعَالَى .<br>[رَوَاهُ الْبُخَارِيُّ] ،[وَمُسْلِمٌ]",
    "english": "On the authority of Abdullah ibn Umar (ra): The Messenger of Allah (ﷺ) said, \"I have been ordered to fight against the people until they testify that there is none worthy of worship except Allah and that Muhammad is the Messenger of Allah, and until they establish the salah and pay the zakat. And if they do that then they will have gained protection from me for their lives and property, unless [they commit acts that are punishable] in Islam, and their reckoning will be with Allah.\" [Bukhari & Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-9",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 9,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِينَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ .<br>[رَوَاهُ الْبُخَارِيُّ] ،[وَمُسْلِمٌ]",
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
    "id": "nawawi-11",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 11,
    "arabic": "عَنْ أَبِي مُحَمَّدٍ الْحَسَنِ بْنِ عَلِيِّ بْنِ أَبِي طَالِبٍ سِبْطِ رَسُولِ اللَّهِ صلى الله عليه و سلم وَرَيْحَانَتِهِ رَضِيَ اللَّهُ عَنْهُمَا، قَالَ: حَفِظْت مِنْ رَسُولِ اللَّهِ صلى الله عليه و سلم دَعْ مَا يُرِيبُك إلَى مَا لَا يُرِيبُك . رَوَاهُ التِّرْمِذِيُّ [رقم:2520]، [وَالنَّسَائِيّ] وَقَالَ التِّرْمِذِيُّ: حَدِيثٌ حَسَنٌ صَحِيحٌ",
    "english": "On the authority of Abu Muhammad al-Hasan ibn Ali ibn Abee Talib (may Allah be pleased with him), the grandson of the Messenger of Allah (peace and blessings of Allah be upon him), and the one much loved by him, who said: I memorised from the Messenger of Allah (peace and blessings of Allah be upon him): “Leave that which makes you doubt for that which does not make you doubt.” [At-Tirmidhi] [An-Nasai] At-Tirmidhi said that it was a good and sound (hasan saheeh) hadeeth",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-12",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 12,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم مِنْ حُسْنِ إسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ . حَدِيثٌ حَسَنٌ، رَوَاهُ التِّرْمِذِيُّ [رقم: 2318] ، ابن ماجه [رقم:]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Part of the perfection of one’s Islam is his leaving that which does not concern him.” A hasan (good) hadeeth which was related by at-Tirmidhi and others in this fashion",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-13",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 13,
    "arabic": "عَنْ أَبِي حَمْزَةَ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ خَادِمِ رَسُولِ اللَّهِ صلى الله عليه و سلم عَنْ النَّبِيِّ صلى الله عليه و سلم قَالَ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ . رَوَاهُ الْبُخَارِيُّ [رقم:13]، وَمُسْلِمٌ [رقم:45].<br>[رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Abu Hamzah Anas bin Malik (may Allah be pleased with him) — the servant of the Messenger of Allah (peace and blessings of Allah be upon him) — that the Prophet (peace and blessings of Allah be upon him) said: None of you [truly] believes until he loves for his brother that which he loves for himself. [Al-Bukhari] [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-14",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 14,
    "arabic": "عَنْ ابْنِ مَسْعُودٍ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ [ يشهد أن لا إله إلا الله، وأني رسول الله] إلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِي، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِينِهِ الْمُفَارِقُ لِلْجَمَاعَةِ .<br>[رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Ibn Masood (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “It is not permissible to spill the blood of a Muslim except in three [instances]: the married person who commits adultery, a life for a life, and the one who forsakes his religion and separates from the community.” [Al-Bukhari] [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-15",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 15,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: مَنْ كَانَ يُؤْمِنُ بِاَللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاَللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاَللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ .<br>[رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: Let him who believes in Allah and the Last Day speak good, or keep silent; and let him who believes in Allah and the Last Day be generous to his neighbour; and let him who believes in Allah and the Last Day be generous to his guest. [Al-Bukhari] [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-16",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 16,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صلى الله عليه و سلم أَوْصِنِي. قَالَ: لَا تَغْضَبْ، فَرَدَّدَ مِرَارًا، قَالَ: لَا تَغْضَبْ\" .<br>[رَوَاهُ الْبُخَارِيُّ]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him): A man said to the Prophet (peace and blessings of Allah be upon him), “Counsel me,” so he (peace and blessings of Allah be upon him) said, “Do not become angry.” The man repeated [his request for counsel] several times, and [each time] he (peace and blessings of Allah be upon him) said, “Do not become angry.” [Al-Bukhari]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-17",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 17,
    "arabic": "عَنْ أَبِي يَعْلَى شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللهُ عَنْهُ عَنْ رَسُولِ اللَّهِ صلى الله عليه و سلم قَالَ: إنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Ya’la Shaddad bin Aws (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: Verily Allah has prescribed ihsan (proficiency, perfection) in all things. So if you kill then kill well; and if you slaughter, then slaughter well. Let each one of you sharpen his blade and let him spare suffering to the animal he slaughters.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-18",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 18,
    "arabic": "عَنْ أَبِي ذَرٍّ جُنْدَبِ بْنِ جُنَادَةَ، وَأَبِي عَبْدِ الرَّحْمَنِ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنْ رَسُولِ اللَّهِ صلى الله عليه و سلم قَالَ: اتَّقِ اللَّهَ حَيْثُمَا كُنْت، وَأَتْبِعْ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقْ النَّاسَ بِخُلُقٍ حَسَنٍ . رَوَاهُ التِّرْمِذِيُّ [رقم:1987] وَقَالَ: حَدِيثٌ حَسَنٌ، وَفِي بَعْضِ النُّسَخِ: حَسَنٌ صَحِيحٌ",
    "english": "On the authority of Abu Dharr Jundub ibn Junadah, and Abu Abdur-Rahman Muadh bin Jabal (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: Have taqwa (fear) of Allah wherever you may be, and follow up a bad deed with a good deed which will wipe it out, and behave well towards the people. It was related by at-Tirmidhi, who said it was a hasan (good) hadeeth, and in some copies it is stated to be a hasan saheeh hadeeth",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-19",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 19,
    "arabic": "عَنْ عَبْدِ اللَّهِ بْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: \"كُنْت خَلْفَ رَسُولِ اللَّهِ صلى الله عليه و سلم يَوْمًا، فَقَالَ: يَا غُلَامِ! إنِّي أُعَلِّمُك كَلِمَاتٍ: احْفَظْ اللَّهَ يَحْفَظْك، احْفَظْ اللَّهَ تَجِدْهُ تُجَاهَك، إذَا سَأَلْت فَاسْأَلْ اللَّهَ، وَإِذَا اسْتَعَنْت فَاسْتَعِنْ بِاَللَّهِ، وَاعْلَمْ أَنَّ الْأُمَّةَ لَوْ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوك بِشَيْءٍ لَمْ يَنْفَعُوك إلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَك، وَإِنْ اجْتَمَعُوا عَلَى أَنْ يَضُرُّوك بِشَيْءٍ لَمْ يَضُرُّوك إلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ عَلَيْك؛ رُفِعَتْ الْأَقْلَامُ، وَجَفَّتْ الصُّحُفُ\" . رَوَاهُ التِّرْمِذِيُّ [رقم:2516] وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ. وَفِي رِوَايَةِ غَيْرِ التِّرْمِذِيِّ: \"احْفَظْ اللَّهَ تَجِدْهُ أمامك، تَعَرَّفْ إلَى اللَّهِ فِي الرَّخَاءِ يَعْرِفُك فِي الشِّدَّةِ، وَاعْلَمْ أَنَّ مَا أَخْطَأَك لَمْ يَكُنْ لِيُصِيبَك، وَمَا أَصَابَك لَمْ يَكُنْ لِيُخْطِئَك، وَاعْلَمْ أَنَّ النَّصْرَ مَعَ الصَّبْرِ، وَأَنْ الْفَرَجَ مَعَ الْكَرْبِ، وَأَنَّ مَعَ الْعُسْرِ يُسْرًا",
    "english": "On the authority of Abu Abbas Abdullah bin Abbas (may Allah be pleased with him) who said: One day I was behind the Prophet (peace and blessings of Allah be upon him) [riding on the same mount] and he said, “O young man, I shall teach you some words [of advice]: Be mindful of Allah and Allah will protect you. Be mindful of Allah and you will find Him in front of you. If you ask, then ask Allah [alone]; and if you seek help, then seek help from Allah [alone]. And know that if the nation were to gather together to benefit you with anything, they would not benefit you except with what Allah had already prescribed for you. And if they were to gather together to harm you with anything, they would not harm you except with what Allah had already prescribed against you. The pens have been lifted and the pages have dried.” It was related by at-Tirmidhi, who said it was a good and sound hadeeth. Another narration, other than that of Tirmidhi, reads: Be mindful of Allah, and you will find Him in front of you. Recognize and acknowledge Allah in times of ease and prosperity, and He will remember you in times of adversity. And know that what has passed you by [and you have failed to attain] was not going to befall you, and what has befallen you was not going to pass you by. And know that victory comes with patience, relief with affliction, and hardship with ease",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-20",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 20,
    "arabic": "عَنْ أَبِي مَسْعُودٍ عُقْبَةَ بْنِ عَمْرٍو الْأَنْصَارِيِّ الْبَدْرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم إنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْت .<br>[رَوَاهُ الْبُخَارِيُّ]",
    "english": "On the authority of Abu Masood Uqbah bin ’Amr al-Ansaree al-Badree (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Verily, from what was learnt by the people from the speech of the earliest prophecy is: If you feel no shame, then do as you wish.” [Al-Bukhari]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-21",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 21,
    "arabic": "عَنْ أَبِي عَمْرٍو وَقِيلَ: أَبِي عَمْرَةَ سُفْيَانَ بْنِ عَبْدِ اللَّهِ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْت: يَا رَسُولَ اللَّهِ! قُلْ لِي فِي الْإِسْلَامِ قَوْلًا لَا أَسْأَلُ عَنْهُ أَحَدًا غَيْرَك؛ قَالَ: قُلْ: آمَنْت بِاَللَّهِ ثُمَّ اسْتَقِمْ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu `Amr — and he is also called Abu `Amrah — Sufyan bin Abdullah ath- Thaqafee (may Allah be pleased with him) who said: I said, \"O Messenger of Allah, tell me something about al-Islam which I can ask of no one but you.\" He (peace and blessings of Allah be upon him) said, \"Say I believe in Allah — and then be steadfast.\" [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-22",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 22,
    "arabic": "عَنْ أَبِي عَبْدِ اللَّهِ جَابِرِ بْنِ عَبْدِ اللَّهِ الْأَنْصَارِيِّ رَضِيَ اللَّهُ عَنْهُمَا: أَنَّ رَجُلًا سَأَلَ رَسُولَ اللَّهِ صلى الله عليه و سلم فَقَالَ: أَرَأَيْت إذَا صَلَّيْت الْمَكْتُوبَاتِ، وَصُمْت رَمَضَانَ، وَأَحْلَلْت الْحَلَالَ، وَحَرَّمْت الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا؛ أَأَدْخُلُ الْجَنَّةَ؟ قَالَ: نَعَمْ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Abdullah Jabir bin Abdullah al-Ansaree (may Allah be pleased with him) that: A man questioned the Messenger of Allah (peace and blessings of Allah be upon him) and said, “Do you think that if I perform the obligatory prayers, fast in Ramadhan, treat as lawful that which is halal, and treat as forbidden that which is haram, and do not increase upon that [in voluntary good deeds], then I shall enter Paradise?” He (peace and blessings of Allah be upon him) replied, “Yes.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-23",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 23,
    "arabic": "عَنْ أَبِي مَالِكٍ الْحَارِثِ بْنِ عَاصِمٍ الْأَشْعَرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم الطَّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ -أَوْ: تَمْلَأُ- مَا بَيْنَ السَّمَاءِ وَالْأَرْضِ، وَالصَّلَاةُ نُورٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَك أَوْ عَلَيْك، كُلُّ النَّاسِ يَغْدُو، فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوبِقُهَا . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Malik al-Harith bin Asim al-Asharee (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Purity is half of iman (faith). ‘Al-hamdu lillah (praise be to Allah)’ fills the scales, and ‘subhan-Allah (how far is Allah from every imperfection) and ‘Al-hamdulillah (praise be to Allah)’ fill that which is between heaven and earth. And the salah (prayer) is a light, and charity is a proof, and patience is illumination, and the Qur’an is a proof either for you or against you. Every person starts his day as a vendor of his soul, either freeing it or causing its ruin.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-24",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 24,
    "arabic": "عَنْ أَبِي ذَرٍّ الْغِفَارِيِّ رَضِيَ اللهُ عَنْهُ عَنْ النَّبِيِّ صلى الله عليه و سلم فِيمَا يَرْوِيهِ عَنْ رَبِّهِ تَبَارَكَ وَتَعَالَى، أَنَّهُ قَالَ: يَا عِبَادِي: إنِّي حَرَّمْت الظُّلْمَ عَلَى نَفْسِي، وَجَعَلْته بَيْنَكُمْ مُحَرَّمًا؛ فَلَا تَظَالَمُوا. يَا عِبَادِي! كُلُّكُمْ ضَالٌّ إلَّا مَنْ هَدَيْته، فَاسْتَهْدُونِي أَهْدِكُمْ. يَا عِبَادِي! كُلُّكُمْ جَائِعٌ إلَّا مَنْ أَطْعَمْته، فَاسْتَطْعِمُونِي أُطْعِمْكُمْ. يَا عِبَادِي! كُلُّكُمْ عَارٍ إلَّا مَنْ كَسَوْته، فَاسْتَكْسُونِي أَكْسُكُمْ. يَا عِبَادِي! إنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ، وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا؛ فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ. يَا عِبَادِي! إنَّكُمْ لَنْ تَبْلُغُوا ضُرِّي فَتَضُرُّونِي، وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي. يَا عِبَادِي! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا. يَا عِبَادِي! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا. يَا عِبَادِي! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ، فَسَأَلُونِي، فَأَعْطَيْت كُلَّ وَاحِدٍ مَسْأَلَته، مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إذَا أُدْخِلَ الْبَحْرَ. يَا عِبَادِي! إنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ، ثُمَّ أُوَفِّيكُمْ إيَّاهَا؛ فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدْ اللَّهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلَا يَلُومَن إلَّا نَفْسَهُ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Dharr al-Ghifaree (may Allah be pleased with him) from the Prophet (peace and blessings of Allah be upon him) from his Lord, that He said: O My servants! I have forbidden dhulm (oppression) for Myself, and I have made it forbidden amongst you, so do not oppress one another. O My servants, all of you are astray except those whom I have guided, so seek guidance from Me and I shall guide you. O My servants, all of you are hungry except those whom I have fed, so seek food from Me and I shall feed you. O My servants, all of you are naked except those whom I have clothed, so seek clothing from Me and I shall clothe you. O My servants, you commit sins by day and by night, and I forgive all sins, so seek forgiveness from Me and I shall forgive you. O My servants, you will not attain harming Me so as to harm Me, and you will not attain benefiting Me so as to benefit Me. O My servants, if the first of you and the last of you, and the humans of you and the jinn of you, were all as pious as the most pious heart of any individual amongst you, then this would not increase My Kingdom an iota. O My servants, if the first of you and the last of you, and the humans of you and the jinn of you, were all as wicked as the most wicked heart of any individual amongst you, then this would not decrease My Kingdom an iota. O My servants, if the first of you and the last of you, and the humans of you and the jinn of you, were all to stand together in one place and ask of Me, and I were to give everyone what he requested, then that would not decrease what I Possess, except what is decreased of the ocean when a needle is dipped into it. O My servants, it is but your deeds that I account for you, and then recompense you for. So he who finds good, let him praise Allah, and he who finds other than that, let him blame no one but himself. [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-25",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 25,
    "arabic": "عَنْ أَبِي ذَرٍّ رَضِيَ اللهُ عَنْهُ أَيْضًا، أَنَّ نَاسًا مِنْ أَصْحَابِ رَسُولِ اللَّهِ صلى الله عليه و سلم قَالُوا لِلنَّبِيِّ صلى الله عليه و سلم يَا رَسُولَ اللَّهِ ذَهَبَ أَهْلُ الدُّثُورِ بِالْأُجُورِ؛ يُصَلُّونَ كَمَا نُصَلِّي، وَيَصُومُونَ كَمَا نَصُومُ، وَيَتَصَدَّقُونَ بِفُضُولِ أَمْوَالِهِمْ. قَالَ: أَوَلَيْسَ قَدْ جَعَلَ اللَّهُ لَكُمْ مَا تَصَّدَّقُونَ؟ إنَّ بِكُلِّ تَسْبِيحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيلَةٍ صَدَقَةً، وَأَمْرٌ بِمَعْرُوفٍ صَدَقَةٌ، وَنَهْيٌ عَنْ مُنْكَرٍ صَدَقَةٌ، وَفِي بُضْعِ أَحَدِكُمْ صَدَقَةٌ. قَالُوا: يَا رَسُولَ اللَّهِ أَيَأْتِي أَحَدُنَا شَهْوَتَهُ وَيَكُونُ لَهُ فِيهَا أَجْرٌ؟ قَالَ: أَرَأَيْتُمْ لَوْ وَضَعَهَا فِي حَرَامٍ أَكَانَ عَلَيْهِ وِزْرٌ؟ فَكَذَلِكَ إذَا وَضَعَهَا فِي الْحَلَالِ، كَانَ لَهُ أَجْرٌ . [رَوَاهُ مُسْلِمٌ]",
    "english": "Also on the authority of Abu Dharr (may Allah be pleased with him): Some people from amongst the Companions of the Messenger of Allah (peace and blessings of Allah be upon him) said to the Prophet (peace and blessings of Allah be upon him), \"O Messenger of Allah, the affluent have made off with the rewards; they pray as we pray, they fast as we fast, and they give [much] in charity by virtue of their wealth.\" He (peace and blessings of Allah be upon him) said, \"Has not Allah made things for you to give in charity? Truly every tasbeehah [saying: 'subhan-Allah'] is a charity, and every takbeerah [saying: 'Allahu akbar'] is a charity, and every tahmeedah [saying: 'al-hamdu lillah'] is a charity, and every tahleelah [saying: 'laa ilaha illAllah'] is a charity. And commanding the good is a charity, and forbidding an evil is a charity, and in the bud`i [sexual act] of each one of you there is a charity.\" They said, \"O Messenger of Allah, when one of us fulfils his carnal desire will he have some reward for that?\" He (peace and blessings of Allah be upon him) said, \"Do you not see that if he were to act upon it [his desire] in an unlawful manner then he would be deserving of punishment? Likewise, if he were to act upon it in a lawful manner then he will be deserving of a reward.\" [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-26",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 26,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم كُلُّ سُلَامَى مِنْ النَّاسِ عَلَيْهِ صَدَقَةٌ، كُلَّ يَوْمٍ تَطْلُعُ فِيهِ الشَّمْسُ تَعْدِلُ بَيْنَ اثْنَيْنِ صَدَقَةٌ، وَتُعِينُ الرَّجُلَ فِي دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَبِكُلِّ خُطْوَةٍ تَمْشِيهَا إلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيطُ الْأَذَى عَنْ الطَّرِيقِ صَدَقَةٌ .<br>[رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Every joint of a person must perform a charity each day that the sun rises: to judge justly between two people is a charity. To help a man with his mount, lifting him onto it or hoisting up his belongings onto it, is a charity. And the good word is a charity. And every step that you take towards the prayer is a charity, and removing a harmful object from the road is a charity.” [Al-Bukhari] [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-27",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 27,
    "arabic": "عَنْ النَّوَّاسِ بْنِ سَمْعَانَ رَضِيَ اللهُ عَنْهُ عَنْ النَّبِيِّ صلى الله عليه و سلم قَالَ: \"الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِي صَدْرِك، وَكَرِهْت أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ\" رَوَاهُ مُسْلِمٌ [رَوَاهُ مُسْلِمٌ]. وَعَنْ وَابِصَةَ بْنِ مَعْبَدٍ رَضِيَ اللهُ عَنْهُ قَالَ: أَتَيْت رَسُولَ اللَّهِ صلى الله عليه و سلم فَقَالَ: \"جِئْتَ تَسْأَلُ عَنْ الْبِرِّ؟ قُلْت: نَعَمْ. فقَالَ: استفت قلبك، الْبِرُّ مَا اطْمَأَنَّتْ إلَيْهِ النَّفْسُ، وَاطْمَأَنَّ إلَيْهِ الْقَلْبُ، وَالْإِثْمُ مَا حَاكَ فِي النَّفْسِ وَتَرَدَّدَ فِي الصَّدْرِ، وَإِنْ أَفْتَاك النَّاسُ وَأَفْتَوْك\" . حَدِيثٌ حَسَنٌ، رَوَيْنَاهُ في مُسْنَدَي الْإِمَامَيْنِ أَحْمَدَ بْنِ حَنْبَلٍ [رقم:4/227]، وَالدَّارِمِيّ [2/246] بِإِسْنَادٍ حَسَنٍ",
    "english": "On the authority of an-Nawas bin Sam’an (may Allah be pleased with him), that the Prophet (peace and blessings of Allah be upon him) said: Righteousness is in good character, and wrongdoing is that which wavers in your soul, and which you dislike people finding out about. [Muslim] And on the authority of Wabisah bin Ma’bad (may Allah be pleased with him) who said: I came to the Messenger of Allah (peace and blessings of Allah be upon him) and he (peace and blessings of Allah be upon him) said, “You have come to ask about righteousness.” I said, “Yes.” He (peace and blessings of Allah be upon him) said, “Consult your heart. Righteousness is that about which the soul feels at ease and the heart feels tranquil. And wrongdoing is that which wavers in the soul and causes uneasiness in the breast, even though people have repeatedly given their legal opinion [in its favour].” A good hadeeth transmitted from the musnads of the two imams, Ahmed bin Hambal and Al- Darimi, with a good chain of authorities",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-28",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 28,
    "arabic": "عَنْ أَبِي نَجِيحٍ الْعِرْبَاضِ بْنِ سَارِيَةَ رَضِيَ اللهُ عَنْهُ قَالَ: وَعَظَنَا رَسُولُ اللَّهِ صلى الله عليه و سلم مَوْعِظَةً وَجِلَتْ مِنْهَا الْقُلُوبُ، وَذَرَفَتْ مِنْهَا الْعُيُونُ، فَقُلْنَا: يَا رَسُولَ اللَّهِ! كَأَنَّهَا مَوْعِظَةُ مُوَدِّعٍ فَأَوْصِنَا، قَالَ: أُوصِيكُمْ بِتَقْوَى اللَّهِ، وَالسَّمْعِ وَالطَّاعَةِ وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ، فَإِنَّهُ مَنْ يَعِشْ مِنْكُمْ فَسَيَرَى اخْتِلَافًا كَثِيرًا، فَعَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيينَ، عَضُّوا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُورِ؛ فَإِنَّ كُلَّ بِدْعَةٍ ضَلَالَةٌ . [رَوَاهُ أَبُو دَاوُدَ]، وَاَلتِّرْمِذِيُّ [رقم:266] وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ",
    "english": "On the authority of Abu Najeeh al-’Irbaad ibn Saariyah (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) gave us a sermon by which our hearts were filled with fear and tears came to our eyes. So we said, “O Messenger of Allah! It is as though this is a farewell sermon, so counsel us.” He (peace and blessings of Allah be upon him) said, “I counsel you to have taqwa (fear) of Allah, and to listen and obey [your leader], even if a slave were to become your ameer. Verily he among you who lives long will see great controversy, so you must keep to my Sunnah and to the Sunnah of the Khulafa ar-Rashideen (the rightly guided caliphs), those who guide to the right way. Cling to it stubbornly [literally: with your molar teeth]. Beware of newly invented matters [in the religion], for verily every bidah (innovation) is misguidance.” [Abu Dawud] It was related by at-Tirmidhi, who said that it was a good and sound hadeeth",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-29",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 29,
    "arabic": "عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْت يَا رَسُولَ اللَّهِ! أَخْبِرْنِي بِعَمَلٍ يُدْخِلُنِي الْجَنَّةَ وَيُبَاعِدْنِي مِنْ النَّارِ، قَالَ: \"لَقَدْ سَأَلْت عَنْ عَظِيمٍ، وَإِنَّهُ لَيَسِيرٌ عَلَى مَنْ يَسَّرَهُ اللَّهُ عَلَيْهِ: تَعْبُدُ اللَّهَ لَا تُشْرِكْ بِهِ شَيْئًا، وَتُقِيمُ الصَّلَاةَ، وَتُؤْتِي الزَّكَاةَ، وَتَصُومُ رَمَضَانَ، وَتَحُجُّ الْبَيْتَ، ثُمَّ قَالَ: أَلَا أَدُلُّك عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ فِي جَوْفِ اللَّيْلِ، ثُمَّ تَلَا: \" تَتَجَافَى جُنُوبُهُمْ عَنِ الْمَضَاجِعِ \" حَتَّى بَلَغَ \"يَعْمَلُونَ\"،[ 32 سورة السجدة / الأيتان : 16 و 17 ] ثُمَّ قَالَ: أَلَا أُخْبِرُك بِرَأْسِ الْأَمْرِ وَعَمُودِهِ وَذُرْوَةِ سَنَامِهِ؟ قُلْت: بَلَى يَا رَسُولَ اللَّهِ. قَالَ: رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُودُهُ الصَّلَاةُ، وَذُرْوَةُ سَنَامِهِ الْجِهَادُ، ثُمَّ قَالَ: أَلَا أُخْبِرُك بِمَلَاكِ ذَلِكَ كُلِّهِ؟ فقُلْت: بَلَى يَا رَسُولَ اللَّهِ ! فَأَخَذَ بِلِسَانِهِ وَقَالَ: كُفَّ عَلَيْك هَذَا. قُلْت: يَا نَبِيَّ اللَّهِ وَإِنَّا لَمُؤَاخَذُونَ بِمَا نَتَكَلَّمُ بِهِ؟ فَقَالَ: ثَكِلَتْك أُمُّك وَهَلْ يَكُبُّ النَّاسَ عَلَى وُجُوهِهِمْ -أَوْ قَالَ عَلَى مَنَاخِرِهِمْ- إلَّا حَصَائِدُ أَلْسِنَتِهِمْ؟!\" . رَوَاهُ التِّرْمِذِيُّ [رقم:2616] وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ",
    "english": "On the authority of Muadh bin Jabal (may Allah be pleased with him) who said: I said, “O Messenger of Allah, tell me of an act which will take me into Paradise and will keep me away from the Hellfire.” He (peace and blessings of Allah be upon him) said, “You have asked me about a great matter, yet it is easy for him for whom Allah makes it easy: worship Allah, without associating any partners with Him; establish the prayer; pay the zakat; fast in Ramadhan; and make the pilgrimage to the House.” Then he (peace and blessings of Allah be upon him) said, “Shall I not guide you towards the means of goodness? Fasting is a shield; charity wipes away sin as water extinguishes fire; and the praying of a man in the depths of the night.” Then he (peace and blessings of Allah be upon him) recited: “[Those] who forsake their beds, to invoke their Lord in fear and hope, and they spend (charity in Allah’s cause) out of what We have bestowed on them. No person knows what is kept hidden for them of joy as a reward for what they used to do.” [as-Sajdah, 16-17] Then he (peace and blessings of Allah be upon him) said, “Shall I not inform you of the head of the matter, its pillar and its peak?” I said, “Yes, O Messenger of Allah.” He (peace and blessings of Allah be upon him) said, “The head of the matter is Islam, its pillar is the prayer and its peak is jihad.” Then he (peace and blessings of Allah be upon him) said, “Shall I not tell you of the foundation of all of that?” I said, “Yes, O Messenger of Allah.” So he took hold of his tongue and said, “Restrain this.” I said, “O Prophet (ﷺ) of Allah, will we be taken to account for what we say with it?” He (peace and blessings of Allah be upon him) said, “May your mother be bereaved of you, O Muadh! Is there anything that throws people into the Hellfire upon their faces — or: on their noses — except the harvests of their tongues?” It was related by at-Tirmidhi, who said it was a good and sound hadeeth",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-30",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 30,
    "arabic": "عَنْ أَبِي ثَعْلَبَةَ الْخُشَنِيِّ جُرْثُومِ بن نَاشِر رَضِيَ اللهُ عَنْهُ عَنْ رَسُولِ اللَّهِ صلى الله عليه و سلم قَال: \"إنَّ اللَّهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوهَا، وَحَدَّ حُدُودًا فَلَا تَعْتَدُوهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوا عَنْهَا\". حَدِيثٌ حَسَنٌ، رَوَاهُ الدَّارَقُطْنِيّ ْ\"في سننه\" [4/184]، وَغَيْرُهُ",
    "english": "On the authority of Abu Tha’labah al-Kushanee — Jurthoom bin Nashir (may Allah be pleased with him) — that the Messenger of Allah (peace and blessings of Allah be upon him) said: Verily Allah ta’ala has laid down religious obligations (fara’id), so do not neglect them; and He has set limits, so do not overstep them; and He has forbidden some things, so do not violate them; and He has remained silent about some things, out of compassion for you, not forgetfulness — so do not seek after them. A hasan hadeeth narrated by ad-Daraqutnee and others",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-31",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 31,
    "arabic": "عَنْ أَبِي الْعَبَّاسِ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيّ رَضِيَ اللهُ عَنْهُ قَالَ: جَاءَ رَجُلٌ إلَى النَّبِيِّ صلى الله عليه و سلم فَقَالَ: يَا رَسُولَ اللهِ! دُلَّنِي عَلَى عَمَلٍ إذَا عَمِلْتُهُ أَحَبَّنِي اللهُ وَأَحَبَّنِي النَّاسُ؛ فَقَالَ: ازْهَدْ فِي الدُّنْيَا يُحِبَّك اللهُ، وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّك النَّاسُ . حديث حسن، رَوَاهُ ابْنُ مَاجَهْ [رقم:4102]، وَغَيْرُهُ بِأَسَانِيدَ حَسَنَةٍ",
    "english": "On the authority of Abu al-’Abbas Sahl bin Sa’ad as-Sa’idee (may Allah be pleased with him) who said: A man came to the Prophet (peace and blessings of Allah be upon him) and said, “O Messenger of Allah, direct me to an act which, if I do it, [will cause] Allah to love me and the people to love me.” So he (peace and blessings of Allah be upon him) said, “Renounce the world and Allah will love you, and renounce what the people possess and the people will love you.” A hasan hadeeth related by Ibn Majah and others with good chains of authorities",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-32",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 32,
    "arabic": "عَنْ أَبِي سَعِيدٍ سَعْدِ بْنِ مَالِكِ بْنِ سِنَانٍ الْخُدْرِيّ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: \" لَا ضَرَرَ وَلَا ضِرَارَ\" . حَدِيثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَهْ [راجع رقم:2341]، وَالدَّارَقُطْنِيّ [رقم:4/228]، وَغَيْرُهُمَا مُسْنَدًا. وَرَوَاهُ مَالِكٌ [2/746] فِي \"الْمُوَطَّإِ\" عَنْ عَمْرِو بْنِ يَحْيَى عَنْ أَبِيهِ عَنْ النَّبِيِّ صلى الله عليه و سلم مُرْسَلًا، فَأَسْقَطَ أَبَا سَعِيدٍ، وَلَهُ طُرُقٌ يُقَوِّي بَعْضُهَا بَعْضًا",
    "english": "On the authority of Abu Sa’eed al-Khudree (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: There should be neither harming (darar) nor reciprocating harm (dirar). A hasan hadeeth related by Ibn Majah, ad-Daraqutnee and others as a musnad hadeeth. It was also related by Malik in al-Muwatta in mursal form from Amr bin Yahya, from his father from the Prophet (peace and blessings of Allah be upon him), but leaving Abu Sa’eed from the chain. And it has other chains of narrations that strengthen one another",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-33",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 33,
    "arabic": "عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: \"لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ لَادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، لَكِنَّ الْبَيِّنَةَ عَلَى الْمُدَّعِي، وَالْيَمِينَ عَلَى مَنْ أَنْكَرَ\" . حَدِيثٌ حَسَنٌ، رَوَاهُ الْبَيْهَقِيّ [في\"السنن\" 10/252]، وَغَيْرُهُ هَكَذَا، وَبَعْضُهُ فِي \"الصَّحِيحَيْنِ",
    "english": "On the authority of Ibn Abbas (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: Were people to be given everything that they claimed, men would [unjustly] claim the wealth and lives of [other] people. But, the onus of proof is upon the claimant, and the taking of an oath is upon him who denies. A hasan hadeeth narrated by al-Baihaqee and others in this form, and part of it is in the two Saheehs",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-34",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 34,
    "arabic": "عَنْ أَبِي سَعِيدٍ الْخُدْرِيّ رَضِيَ اللهُ عَنْهُ قَالَ سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيمَانِ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Sa`eed al-Khudree (may Allah be pleased with him) who said: I heard the Messenger of Allah (ﷺ) say, “Whosoever of you sees an evil, let him change it with his hand; and if he is not able to do so, then [let him change it] with his tongue; and if he is not able to do so, then with his heart — and that is the weakest of faith.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-35",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 35,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم لَا تَحَاسَدُوا، وَلَا تَنَاجَشُوا، وَلَا تَبَاغَضُوا، وَلَا تَدَابَرُوا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُونُوا عِبَادَ اللَّهِ إخْوَانًا، الْمُسْلِمُ أَخُو الْمُسْلِمِ، لَا يَظْلِمُهُ، وَلَا يَخْذُلُهُ، وَلَا يَكْذِبُهُ، وَلَا يَحْقِرُهُ، التَّقْوَى هَاهُنَا، وَيُشِيرُ إلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ، بِحَسْبِ امْرِئٍ مِنْ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ، كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ: دَمُهُ وَمَالُهُ وَعِرْضُهُ . [رَوَاهُ مُسْلِمٌ]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Do not envy one another, and do not inflate prices for one another, and do not hate one another, and do not turn away from one another, and do not undercut one another in trade, but [rather] be slaves of Allah and brothers [amongst yourselves]. A Muslim is the brother of a Muslim: he does not oppress him, nor does he fail him, nor does he lie to him, nor does he hold him in contempt. Taqwa (piety) is right here [and he pointed to his chest three times]. It is evil enough for a man to hold his brother Muslim in contempt. The whole of a Muslim is inviolable for another Muslim: his blood, his property, and his honour.” [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-36",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 36,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ عَنْ النَّبِيِّ صلى الله عليه و سلم قَالَ: مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ، يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِما سَتَرَهُ اللهُ فِي الدُّنْيَا وَالْآخِرَةِ ، وَاَللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ، وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إلَى الْجَنَّةِ، وَمَا اجْتَمَعَ قَوْمٌ فِي بَيْتٍ مِنْ بُيُوتِ اللَّهِ يَتْلُونَ كِتَابَ اللَّهِ، وَيَتَدَارَسُونَهُ فِيمَا بَيْنَهُمْ؛ إلَّا نَزَلَتْ عَلَيْهِمْ السَّكِينَةُ، وَغَشِيَتْهُمْ الرَّحْمَةُ، وَ حَفَّتهُمُ المَلاَئِكَة، وَذَكَرَهُمْ اللَّهُ فِيمَنْ عِنْدَهُ، وَمَنْ أَبَطْأَ بِهِ عَمَلُهُ لَمْ يُسْرِعْ بِهِ نَسَبُهُ . [رَوَاهُ مُسْلِمٌ] بهذا اللفظ",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), that the Prophet (peace and blessings of Allah be upon him) said: Whoever removes a worldly grief from a believer, Allah will remove from him one of the griefs of the Day of Resurrection. And whoever alleviates the need of a needy person, Allah will alleviate his needs in this world and the Hereafter. Whoever shields [or hides the misdeeds of] a Muslim, Allah will shield him in this world and the Hereafter. And Allah will aid His slave so long as he aids his brother. And whoever follows a path to seek knowledge therein, Allah will make easy for him a path to Paradise. No people gather together in one of the Houses of Allah, reciting the Book of Allah and studying it among themselves, except that sakeenah (tranquility) descends upon them, and mercy envelops them, and the angels surround them, and Allah mentions them amongst those who are with Him. And whoever is slowed down by his actions, will not be hastened forward by his lineage. Related by [Muslim] in these words",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-37",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 37,
    "arabic": "عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا عَنْ رَسُولِ اللَّهِ صلى الله عليه و سلم فِيمَا يَرْوِيهِ عَنْ رَبِّهِ تَبَارَكَ وَتَعَالَى، قَالَ: \"إنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ، ثُمَّ بَيَّنَ ذَلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إلَى سَبْعِمِائَةِ ضِعْفٍ إلَى أَضْعَافٍ كَثِيرَةٍ، وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللَّهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً\".<br>[رَوَاهُ الْبُخَارِيُّ] ، [وَمُسْلِمٌ]، في \"صحيحيهما\" بهذه الحروف",
    "english": "On the authority of Ibn Abbas (may Allah be pleased with him), from the Messenger of Allah (peace and blessings of Allah be upon him), from what he has related from his Lord: Verily Allah ta’ala has written down the good deeds and the evil deeds, and then explained it [by saying]: “Whosoever intended to perform a good deed, but did not do it, then Allah writes it down with Himself as a complete good deed. And if he intended to perform it and then did perform it, then Allah writes it down with Himself as from ten good deeds up to seven hundred times, up to many times multiplied. And if he intended to perform an evil deed, but did not do it, then Allah writes it down with Himself as a complete good deed. And if he intended it [i.e., the evil deed] and then performed it, then Allah writes it down as one evil deed.” [Al-Bukhari] [Muslim]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-38",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 38,
    "arabic": "عَنْ أَبِي هُرَيْرَة رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُول اللَّهِ صلى الله عليه و سلم إنَّ اللَّهَ تَعَالَى قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقْد آذَنْتهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إلَيَّ مِمَّا افْتَرَضْتُهُ عَلَيْهِ، وَلَا يَزَالُ عَبْدِي يَتَقَرَّبُ إلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْت سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَلَئِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنْ اسْتَعَاذَنِي لَأُعِيذَنَّهُ . [رَوَاهُ الْبُخَارِيُّ]",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “Verily Allah ta’ala has said: ‘Whosoever shows enmity to a wali (friend) of Mine, then I have declared war against him. And My servant does not draw near to Me with anything more loved to Me than the religious duties I have obligated upon him. And My servant continues to draw near to me with nafil (supererogatory) deeds until I Love him. When I Love him, I am his hearing with which he hears, and his sight with which he sees, and his hand with which he strikes, and his foot with which he walks. Were he to ask [something] of Me, I would surely give it to him; and were he to seek refuge with Me, I would surely grant him refuge.’ ” [Al-Bukhari]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-39",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 39,
    "arabic": "عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صلى الله عليه و سلم قَالَ: \"إنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ\" . حَدِيثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَهْ [رقم:2045]، وَالْبَيْهَقِيّ [\"السنن]",
    "english": "On the authority of Ibn Abbas (may Allah be pleased with him), that the Messenger of Allah (peace and blessings of Allah be upon him) said: Verily Allah has pardoned [or been lenient with] for me my ummah: their mistakes, their forgetfulness, and that which they have been forced to do under duress. A hasan hadeeth related by Ibn Majah, and al-Bayhaqee and others",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-40",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 40,
    "arabic": "عَنْ ابْن عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَخَذَ رَسُولُ اللَّهِ صلى الله عليه و سلم بِمَنْكِبِي، وَقَالَ: كُنْ فِي الدُّنْيَا كَأَنَّك غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ . وَكَانَ ابْنُ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا يَقُولُ: إذَا أَمْسَيْتَ فَلَا تَنْتَظِرْ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرْ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِك لِمَرَضِك، وَمِنْ حَيَاتِك لِمَوْتِك. [رَوَاهُ الْبُخَارِيُّ]",
    "english": "On the authority of Abdullah ibn Umar (may Allah be pleased with him), who said: The Messenger of Allah (peace and blessings of Allah be upon him) took me by the shoulder and said, “Be in this world as though you were a stranger or a wayfarer.” And Ibn Umar (may Allah be pleased with him) used to say, “In the evening do not expect [to live until] the morning, and in the morning do not expect [to live until] the evening. Take [advantage of] your health before times of sickness, and [take advantage of] your life before your death.” [Al-Bukhari]",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-41",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 41,
    "arabic": "عَنْ أَبِي مُحَمَّدٍ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا، قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه و سلم \"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ\". حَدِيثٌ حَسَنٌ صَحِيحٌ، رَوَيْنَاهُ فِي كِتَابِ \"الْحُجَّةِ\" بِإِسْنَادٍ صَحِيحٍ",
    "english": "On the authority of Abu Muhammad Abdullah bin ’Amr bin al-’Aas (may Allah be pleased with him) who said: The Messenger of Allah (peace and blessings of Allah be upon him) said, “None of you [truly] believes until his desires are subservient to that which I have brought.” [Imam an-Nawawi says:] We have related it in Kitab al-Hujjah with a saheeh chain of narrators",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "nawawi-42",
    "collection": "nawawi",
    "collectionName": "Nawawi's 40 Hadith",
    "hadithNumber": 42,
    "arabic": "عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْت رَسُولَ اللَّهِ صلى الله عليه و سلم يَقُولُ: قَالَ اللَّهُ تَعَالَى: يَا ابْنَ آدَمَ! إِنَّكَ مَا دَعَوْتنِي وَرَجَوْتنِي غَفَرْتُ لَك عَلَى مَا كَانَ مِنْك وَلَا أُبَالِي، يَا ابْنَ آدَمَ! لَوْ بَلَغَتْ ذُنُوبُك عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتنِي غَفَرْتُ لَك، يَا ابْنَ آدَمَ! إنَّك لَوْ أتَيْتنِي بِقُرَابِ الْأَرْضِ خَطَايَا ثُمَّ لَقِيتنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُك بِقُرَابِهَا مَغْفِرَةً . رَوَاه�� التِّرْمِذِيُّ [رقم:3540]، وَقَالَ: حَدِيثٌ حَسَنٌ صَحِيحٌ",
    "english": "On the authority of Anas (may Allah be pleased with him) who said: I heard the Messenger of Allah (peace and blessings of Allah be upon him) say, “Allah the Almighty has said: ‘O Son of Adam, as long as you invoke Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O Son of Adam, were your sins to reach the clouds of the sky and you then asked forgiveness from Me, I would forgive you. O Son of Adam, were you to come to Me with sins nearly as great as the Earth, and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great as it [too].’ ” It was related by at-Tirmidhi, who said that it was a hasan hadeeth",
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
    "arabic": "عَنْ زَيْدِ بْنِ خَالِدٍ الْجُهَنِيِّ، رَضِيَ اللَّهُ عَنْهُ قَالَ: \"صَلَّى لَنَا رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ صَلَاةَ الصُّبْحِ بِالْحُدَيْبِيَةِ، عَلَى إِثْرِ سَمَاءٍ (1) كَانَتْ مِنْ اللَّيْلَةِ، فَلَمَّا انْصَرَفَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ أَقْبَلَ عَلَى النَّاسِ، فَقَالَ لَهُمْ: \"هَلْ تَدْرُونَ مَاذَا قَالَ رَبُّكُمْ؟ قَالُوا: اللَّهُ وَرَسُولُهُ أَعْلَمُ، قَالَ: أَصْبَحَ مِنْ عِبَادِي مُؤْمِنٌ بِي وَكَافِرٌ، فَأَمَّا مَنْ قَالَ: مُطِرْنَا بِفَضْلِ اللَّهِ وَرَحْمَتِهِ، فَذَلِكَ مُؤْمِنٌ بِي، كَافِرٌ بِالْكَوْكَبِ، وَأَمَّا مَنْ قَالَ: مُطِرْنَا بِنَوْءِ(1) كَذَا وَكَذَا، فَذَلِكَ كَافِرٌ بِي، مُؤْمِنٌ بِالْكَوْكَبِ\"<br>رواه البخاري (وكذلك مالك والنسائي)",
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
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: قَالَ اللَّهُ تَبَارَكَ وَتَعَالَى: أَنَا أَغْنَى الشُّرَكَاءِ عَنْ الشِّرْكِ؛ مَنْ عَمِلَ عَمَلًا أَشْرَكَ مَعِي غَيْرِي(1)، تَرَكْتُهُ وَشِرْكَهُ .<br>رواه مسلم (وكذلك ابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (glorified and exalted be He) said: I am so self-sufficient that I am in no need of having an associate. Thus he who does an action for someone else's sake as well as Mine will have that action renounced by Me to him whom he associated with Me. It was related by Muslim (also by Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-6",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 6,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ أَوَّلَ النَّاسِ يُقْضَى يَوْمَ الْقِيَامَةِ عَلَيْهِ رَجُلٌ اسْتُشْهِدَ، فَأُتِيَ بِهِ فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ قَاتَلْتُ فِيكَ حَتَّى اسْتُشْهِدْتُ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ قَاتَلْتَ لِأَنْ يُقَالَ: جَرِيءٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ فَسُحِبَ عَلَى وَجْهِهِ حَتَّى أُلْقِيَ فِي النَّارِ. وَرَجُلٌ تَعَلَّمَ الْعِلْمَ وَعَلَّمَهُ وَقَرَأَ الْقُرْآنَ، فَأُتِيَ بِهِ، فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ: تَعَلَّمْتُ الْعِلْمَ وَعَلَّمْتُهُ، وَقَرَأْتُ فِيكَ الْقُرْآنَ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ تَعَلَّمْتَ الْعِلْمَ لِيُقَالَ: عَالِمٌ، وَقَرَأْتَ الْقُرْآنَ لِيُقَالَ: هُوَ قَارِئٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ، فَسُحِبَ عَلَى وَجْهِهِ حَتَّى أُلْقِيَ فِي النَّارِ. وَرَجُلٌ وَسَّعَ اللَّهُ عَلَيْهِ، وَأَعْطَاهُ مِنْ أَصْنَافِ الْمَالِ كُلِّهِ، فَأُتِيَ بِهِ، فَعَرَّفَهُ نِعَمَهُ فَعَرَفَهَا، قَالَ: فَمَا عَمِلْتَ فِيهَا؟ قَالَ: مَا تَرَكْتُ مِنْ سَبِيلٍ تُحِبُّ أَنْ يُنْفَقَ فِيهَا إِلَّا أَنْفَقْتُ فِيهَا لَكَ، قَالَ: كَذَبْتَ، وَلَكِنَّكَ فَعَلْتَ لِيُقَالَ: هُوَ جَوَادٌ، فَقَدْ قِيلَ، ثُمَّ أُمِرَ بِهِ فَسُحِبَ عَلَى وَجْهِهِ، ثُمَّ أُلْقِيَ فِي النَّارِ .<br>رواه مسلم (وكذلك الترمذي والنسائي)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said: I heard the Messenger of Allah (ﷺ) say: The first of people against whom judgment will be pronounced on the Day of Resurrection will be a man who died a martyr. He will be brought and Allah will make known to him His favours and he will recognize them. [ The Almighty] will say: And what did you do about them? He will say: I fought for you until I died a martyr. He will say: You have lied - you did but fight that it might be said [of you]: He is courageous. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. [Another] will be a man who has studied [religious] knowledge and has taught it and who used to recite the Quran. He will be brought and Allah will make known to him His favours and he will recognize them. [The Almighty] will say: And what did you do about them? He will say: I studied [religious] knowledge and I taught it and I recited the Quran for Your sake. He will say: You have lied - you did but study [religious] knowledge that it might be said [of you]: He is learned. And you recited the Quran that it might be said [of you]: He is a reciter. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. [Another] will be a man whom Allah had made rich and to whom He had given all kinds of wealth. He will be brought and Allah will make known to him His favours and he will recognize them. [The Almighty] will say: And what did you do about them? He will say: I left no path [untrodden] in which You like money to be spent without spending in it for Your sake. He will say: You have lied - you did but do so that it might be said [of you]: He is open-handed. And so it was said. Then he will be ordered to be dragged along on his face until he is cast into Hell-fire. It was related by Muslim (also by at-Tirmidhi and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-7",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 7,
    "arabic": "عَنْ عُقْبَةَ بْنِ عَامِرٍ، رَضِيَ اللَّهُ عَنْهُ، قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: يَعْجَبُ رَبُّكَ مِنْ رَاعِي غَنَمٍ، فِي رَأْسِ شَظِيَّةِ الْجَبَلِ(1)، يُؤَذِّنُ بِالصَّلَاةِ وَيُصَلِّي، فَيَقُولُ اللَّهُ، عَزَّ وَجَلَّ: انْظُرُوا إِلَى عَبْدِي هَذَا، يُؤَذِّنُ وَيُقِيمُ الصَّلَاةَ، يَخَافُ مِنِّي، قَدْ غَفَرْتُ لِعَبْدِي، وَأَدْخَلْتُهُ الْجَنَّةَ .<br>رواه النسائي بسند صحيح",
    "english": "On the authority of Uqbah ibn Amir (may Allah be pleased with him), who said: I heard the messenger of Allah (ﷺ) say: Your Lord delights at a shepherd who, on the peak of a mountain crag, gives the call to prayer and prays. Then Allah (glorified and exalted be He) say: Look at this servant of Mine, he gives the call to prayer and performs the prayers; he is in awe of Me. I have forgiven My servant [his sins] and have admitted him to Paradise. It was related by an-Nasa'i with a good chain of authorities",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-8",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 8,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: مَنْ صَلَّى صَلَاةً لَمْ يَقْرَأْ فِيهَا بِأُمِّ الْقُرْآنِ، فَهِيَ خِدَاجٌ(1) ثَلَاثًا، غَيْرَ تَمَامٍ، فَقِيلَ لِأَبِي هُرَيْرَةَ: إِنَّا نَكُونُ وَرَاءَ الْإِمَامِ، فَقَالَ: اقْرَأْ بِهَا فِي نَفْسِكَ، فَإِنِّي سَمِعْتُ النبي صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: قَالَ اللَّهُ عَزَّ وَجَلَّ: قَسَمْتُ الصَّلَاةَ بَيْنِي وَبَيْنَ عَبْدِي نِصْفَيْنِ، وَلِعَبْدِي مَا سَأَلَ، فَإِذَا قَالَ الْعَبْدُ:{ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ } قَالَ اللَّهُ عَزَّ وَجَلَّ: حَمِدَنِي عَبْدِي، وَإِذَا قَالَ:{ الرَّحْمَنِ الرَّحِيمِ } قَالَ اللَّهُ عَزَّ وَجَلَّ: أَثْنَى عَلَيَّ عَبْدِي، وَإِذَا قَالَ:{ مَالِكِ يَوْمِ الدِّينِ } قَالَ اللَّهُ: مَجَّدَنِي عَبْدِي - وَقَالَ مَرَّةً: فَوَّضَ إِلَيَّ عَبْدِي، فَإِذَا قَالَ:{ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ } قَالَ: هَذَا بَيْنِي وَبَيْنَ عَبْدِي وَلِعَبْدِي مَا سَأَلَ، فَإِذَا قَالَ:{ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ } قَالَ: هَذَا لِعَبْدِي وَلِعَبْدِي مَا سَأَلَ .<br>رواه مسلم (وكذلك مالك والترمذي وأبو داود والنسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: A prayer performed by someone who has not recited the Essence of the Quran (1) during it is deficient (and he repeated the word three times), incomplete. Someone said to Abu Hurayrah: [Even though] we are behind the imam? (2) He said: Recite it to yourself, for I have heard the Prophet (may the blessings and peace of Allah be up on him) say: Allah (mighty and sublime be He), had said: I have divided prayer between Myself and My servant into two halves, and My servant shall have what he has asked for. When the servant says: Al-hamdu lillahi rabbi l-alamin (3), Allah (mighty and sublime be He) says: My servant has praised Me. And when he says: Ar-rahmani r-rahim (4), Allah (mighty and sublime be He) says: My servant has extolled Me, and when he says: Maliki yawmi d-din (5), Allah says: My servant has glorified Me - and on one occasion He said: My servant has submitted to My power. And when he says: Iyyaka na budu wa iyyaka nasta in (6), He says: This is between Me and My servant, and My servant shall have what he has asked for. And when he says: Ihdina s-sirata l- mustaqim, siratal ladhina an amta alayhim ghayril-maghdubi alayhim wa la d-dallin (7), He says: This is for My servant, and My servant shall have what he has asked for. (1) Surat al-Fatihah, the first surah (chapter) of the Qur'an. (2) i.e. standing behind the imam (leader) listening to him reciting al-Fatihah. (3) \"Praise be to Allah, Lord of the Worlds.\" (4) \"The Merciful, the Compassionate\". (5) \"Master of the Day of Judgement\". (6) \"It is You we worship and it is You we ask for help\". (7) \"Guide us to the straight path, the path of those upon whom You have bestowed favors, not of those against whom You are angry, nor of those who are astray\". It was related by Muslim (also by Malik, at-Tirmidhi, Abu-Dawud, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-9",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 9,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ أَوَّلَ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ مِنْ عَمَلِهِ صَلَاتُهُ. فَإِنْ صَلُحَتْ فَقَدْ أَفْلَحَ وَأَنْجَحَ، وَإِنْ فَسَدَتْ فَقَدْ خَابَ وَخَسِرَ، فَإِنْ انْتَقَصَ مِنْ فَرِيضَتِهِ شَيْءٌ، قَالَ الرَّبُّ عَزَّ وَجَلَّ: انْظُرُوا هَلْ لِعَبْدِي مِنْ تَطَوُّعٍ فَيُكَمَّلَ بِهَا مَا انْتَقَصَ مِنْ الْفَرِيضَةِ، ثُمَّ يَكُونُ سَائِرُ عَمَلِهِ عَلَى ذَلِكَ .<br>رواه الترمذي(1) وكذلك أبو داود والنسائي وابن ماجه وأحمد",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (mighty and sublime be He) says: The first of his actions for which a servant of Allah will be held accountable on the Day of Resurrection will be his prayers. If they are in order, then he will have prospered and succeeded: and if they are wanting, then he will have failed and lost. If there is something defective in his obligatory prayers, the Lord (glorified and exalted be He) will say: See if My servant has any supererogatory prayers with which may be completed that which was defective in his obligatory prayers. Then the rest of his actions will be judged in like fashion. It was related by at-Tirmidhi (also by Abu Dawud, an-Nasa'i, Ibn Majah and Ahmad)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-10",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 10,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: يَقُولُ اللَّهُ عَزَّ وَجَلَّ: الصَّوْمُ لِي، وَأَنَا أَجْزِي بِهِ، يَدَعُ شَهْوَتَهُ وَأَكْلَهُ وَشُرْبَهُ مِنْ أَجْلِي، وَالصَّوْمُ جُنَّةٌ(1)، وَلِلصَّائِمِ فَرْحَتَانِ: فَرْحَةٌ حِينَ يُفْطِرُ، وَفَرْحَةٌ حِينَ يَلْقَى رَبَّهُ، وَلَخُلُوفُ(2) فَمِ الصَّائِمِ أَطْيَبُ عِنْدَ اللَّهِ مِنْ رِيحِ الْمِسْكِ .<br>رواه البخاري (وكذلك مسلم ومالك والترمذي النسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (mighty and sublime be He) says: Fasting is Mine and it is I who give reward for it. [A man] gives up his sexual passion, his food and his drink for my sake. Fasting is like a shield, and he who fasts has two joys: a joy when he breaks his fast and a joy when he meets his Lord. The change in the breath of the mouth of him who fasts is better in Allah's estimation than the smell of musk. It was related by al-Bukhari (also by Muslim, Malik, at-Tirmidhi, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-11",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 11,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: قَالَ اللَّهُ: أَنْفِقْ يَا ابْنَ آدَمَ، أُنْفِقْ عَلَيْكَ",
    "english": "On the authority of Abu Harayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (mighty and sublime be He) said: Spend (on charity), O son of Adam, and I shall spend on you. It was related by al-Bukhari (also by Muslim)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-12",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 12,
    "arabic": "عَنْ أَبِي مَسْعُودٍ الْأَنْصَارِيِّ، رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: حُوسِبَ رَجُلٌ مِمَّنْ كَانَ قَبْلَكُمْ، فَلَمْ يُوجَدْ لَهُ مِنْ الْخَيْرِ شَيْءٌ، إِلَّا أَنَّهُ كَانَ يُخَالِطُ(1) النَّاسَ، وَكَانَ مُوسِرًا، فَكَانَ يَأْمُرُ غِلْمَانَهُ أَنْ يَتَجَاوَزُوا عَنْ الْمُعْسِرِ، قَالَ (2) قَالَ اللَّهُ : نَحْنُ أَحَقُّ بِذَلِكَ مِنْكَ، تَجَاوَزُوا عَنْهُ رواه مسلم (وكذلك البخاري والنسائي)",
    "english": "On the authority of Abu Mas'ud al-Ansari (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: A man from among those who were before you was called to account. Nothing in the way of good was found for him except that he used to have dealings with people and, being well-to-do, he would order his servants to let off the man in straitened circumstances [from repaying his debt]. He (the Prophet (ﷺ) ﷺ) said that Allah said: We are worthier than you of that (of being so generous). Let him off. It was related by Muslim (also by al-Bukhari and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-13",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 13,
    "arabic": "عَنْ عَدِيَّ بْنَ حَاتِمٍ رَضِيَ اللَّهُ عَنْهُ يَقُولُ: كُنْتُ عِنْدَ رَسُولِ اللَّهِ، صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فَجَاءَهُ رَجُلَانِ: أَحَدُهُمَا يَشْكُو الْعَيْلَةَ(1)، وَالْآخَرُ يَشْكُو قَطْعَ السَّبِيلِ(2)، فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: أَمَّا قَطْعُ السَّبِيلِ فَإِنَّهُ لَا يَأْتِي عَلَيْكَ إِلَّا قَلِيلٌ، حَتَّى تَخْرُجَ الْعِيرُ إِلَى مَكَّةَ بِغَيْرِ خَفِيرٍ. وَأَمَّا الْعَيْلَةُ، فَإِنَّ السَّاعَةَ لَا تَقُومُ حَتَّى يَطُوفَ أَحَدُكُمْ بِصَدَقَتِهِ، لَا يَجِدُ مَنْ يَقْبَلُهَا مِنْهُ، ثُمَّ لَيَقِفَنَّ أَحَدُكُمْ بَيْنَ يَدَيْ اللَّهِ، لَيْسَ بَيْنَهُ وَبَيْنَهُ حِجَابٌ وَلَا تَرْجُمَانٌ يُتَرْجِمُ لَهُ، ثُمَّ لَيَقُولَنَّ لَهُ: أَلَمْ أُوتِكَ مَالًا؟ فَلَيَقُولَنَّ: بَلَى، ثُمَّ لَيَقُولَنَّ: أَلَمْ أُرْسِلْ إِلَيْكَ رَسُولًا؟ فَلَيَقُولَنَّ: بَلَى، فَيَنْظُرُ عَنْ يَمِينِهِ، فَلَا يَرَى إِلَّا النَّارَ، ثُمَّ يَنْظُرُ عَنْ شِمَالِهِ، فَلَا يَرَى إِلَّا النَّارَ، فَلْيَتَّقِيَنَّ أَحَدُكُمْ النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ، فَإِنْ لَمْ يَجِدْ فَبِكَلِمَةٍ طَيِّبَةٍ .<br>رواه البخاري",
    "english": "On the authority of Adiyy ibn Hatim (may Allah be pleased with him), who said: I was with the Messenger of Allah (ﷺ) and there came to him two men: one of them was complaining of penury (being very poor), while the other was complaining of brigandry (robbery). The Messenger of Allah (ﷺ) said: As for brigandry, it will be but a short time before a caravan will [be able to] go out of Mecca without a guard. As for penury, the Hour (Day of Judgement) will not arrive before one of you takes his charity around without finding anyone to accept it from him. Then (1) one of you will surely stand before Allah, there being no screen between Him and him, nor an interpreter to translate for him. Then He will say to him: Did I not bring you wealth? And he will say: Yes. Then He will say: Did I not send to you a messenger? And he will say: Yes. And he will look to his right and will see nothing but Hell-fire, then he will look to his left and will see nothing but Hell-fire, so let each of you protect himself against Hell-fire, be it with even half a date - and if he finds it not, then with a kind word. (1) i.e. at the time of the Hour. It was related by al-Bukhari",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-14",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 14,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ لِلَّهِ تَبَارَكَ وَتَعَالَى مَلَائِكَةً سَيَّارَةً فُضُلًا(1)، يَتَتَبَّعُونَ مَجَالِسَ الذِّكْرِ، فَإِذَا وَجَدُوا مَجْلِسًا فِيهِ ذِكْرٌ، قَعَدُوا مَعَهُمْ، وَحَفَّ بَعْضُهُمْ بَعْضًا بِأَجْنِحَتِهِمْ، حَتَّى يَمْلَأُوا مَا بَيْنَهُمْ وَبَيْنَ السَّمَاءِ الدُّنْيَا، فَإِذَااْنْصَرَفُوا عَرَجُوا وَصَعِدُوا إِلَى السَّمَاءِ، قَالَ (2) : فَيَسْأَلُهُمْ اللَّهُ عَزَّ وَجَلَّ وَهُوَ أَعْلَمُ بِهِمْ: مِنْ أَيْنَ جِئْتُمْ؟ فَيَقُولُونَ: جِئْنَا مِنْ عِنْدِ عِبَادٍ لَكَ فِي الْأَرْضِ، يُسَبِّحُونَكَ وَيُكَبِّرُونَكَ وَيُهَلِّلُونَكَ وَيَحْمَدُونَكَ وَيَسْأَلُونَكَ، قَالَ: وَمَا يَسْأَلُونِي؟ قَالُوا يَسْأَلُونَكَ جَنَّتَكَ، قَالَ: وَهَلْ رَأَوْا جَنَّتِي؟ قَالُوا: لَا أَيْ رَبِّ، قَالَ: فَكَيْفَ لَوْ رَأَوْا جَنَّتِي! قَالُوا: وَيَسْتَجِيرُونَكَ، قَالَ: وَمِمَّ يَسْتَجِيرُونَي؟ قَالُوا: مِنْ نَارِكَ يَا رَبِّ، قَالَ: وَهَلْ رَأَوْا نَارِي؟ قَالُوا: لَا، قَالَ: فَكَيْفَ لَوْ رَأَوْا نَارِي! قَالُوا: وَيَسْتَغْفِرُونَكَ، قَالَ (1) فَيَقُولُ: قَدْ غَفَرْتُ لَهُمْ، وأَعْطَيْتُهُمْ مَا سَأَلُوا، وَأَجَرْتُهُمْ مِمَّا اسْتَجَارُوا، قَالَ(1) يَقُولُونَ: رَبِّ فِيهِمْ فُلَانٌ، عَبْدٌ خَطَّاءٌ إِنَّمَا مَرَّ فَجَلَسَ مَعَهُمْ، قَالَ(1): فَيَقُولُ: وَلَهُ غَفَرْتُ؛ هُمْ الْقَوْمُ، لَا يَشْقَى بِهِمْ جَلِيسُهُمْ رواه مسلم وكذلك البخاري والترمذي والنسائي",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) from the Prophet (ﷺ), who said: Allah (glorified and exalted be He) has supernumerary angels who rove about seeking out gatherings in which Allah's name is being invoked: they sit with them and fold their wings round each other, filling that which is between them and between the lowest heaven. When [the people in the gathering] depart, [the angels] ascend and rise up to heaven. He (the Prophet (ﷺ)) said: Then Allah (mighty and sublime be He) asks them - [though] He is most knowing about them: From where have you come? And they say: We have come from some servants of Yours on Earth: they were glorifying You (Subhana llah), exalting you (Allahu akbar), witnessing that there is no god but You (La ilaha illa llah), praising You (Al-Hamdu lillah), and asking [favours] of You. He says: And what do they ask of Me? They say: They ask of You Your Paradise. He says: And have they seen My Paradise? They say: No, O Lord. He says: And how would it be were they to have seen My Paradise! They say: And they ask protection of You. He says: From what do they ask protection of Me? They say: From Your Hell-fire, O Lord. He says: And have they seen My Hell-fire? They say: NO. He says: And how would it be were they to have seen My Hell-fire: They say: And they ask for Your forgiveness. He (the Prophet (ﷺ)) said: Then He says: I have forgiven them and I have bestowed upon them what they have asked for, and I have granted them sanctuary from that from which they asked protection. He (the Prophet (ﷺ) ﷺ) said: They say: O Lord, among them is So-and-so, a much sinning servant, who was merely passing by and sat down with them. He (the Prophet (ﷺ) ﷺ) said: And He says: And to him [too] I have given forgiveness: he who sits with such people shall not suffer. It was related by Muslim (also by al-Bukhari, at-Tirmidhi, and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-15",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 15,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ النَّبِيُّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : يَقُولُ اللَّهُ تَعَالَى: أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ، ذَكَرْتُهُ فِي نَفْسِي، وَإِنْ ذَكَرَنِي فِي مَلَإٍ، ذَكَرْتُهُ فِي مَلَإٍ خَيْرٍ مِنْهُمْ، وَإِنْ تَقَرَّبَ إِلَيَّ بِشِبْرٍ، تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا، وَإِنْ تَقَرَّبَ إِلَيَّ ذِرَاعًا، تَقَرَّبْتُ إِلَيْهِ بَاعًا(1) وَإِنْ أَتَانِي يَمْشِي، أَتَيْتُهُ هَرْوَلَةً رواه البخاري (وكذلك مسلم والترمذي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Prophet (ﷺ) said: Allah the Almighty said: I am as My servant thinks I am (1). I am with him when he makes mention of Me. If he makes mention of Me to himself, I make mention of him to Myself; and if he makes mention of Me in an assembly, I make mention of him in an assembly better than it. And if he draws near to Me an arm's length, I draw near to him a cubit, and if he draws near to Me a cubit, I draw near to him a fathom. And if he comes to Me walking, I go to him at speed. (1) Another possible rendering of the Arabic is: \"I am as My servant expects Me to be\". The meaning is that forgiveness and acceptance of repentance by the Almighty is subject to His servant truly believing that He is forgiving and merciful. However, not to accompany such belief with right action would be to mock the Almighty. It was related by al-Buhkari (also by Muslim, at-Tirmidhi and Ibn-Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-16",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 16,
    "arabic": "عَنْ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، فِيمَا يَرْوِي عَنْ رَبِّهِ عَزَّ وَجَلَّ، قَالَ: إِنَّ اللَّهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ، ثُمَّ بَيَّنَ ذَلِكَ: فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا، كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً، فَإِنْ هُوَ هَمَّ بِهَا فَعَمِلَهَا، كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ، إِلَى سَبْعِمِائَةِ ضِعْفٍ، إِلَى أَضْعَافٍ كَثِيرَةٍ، وَمَنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا، كَتَبَهَا اللَّهُ لَهُ عِنْدَهُ حَسَنَةً كَامِلَةً، فَإِنْ هُوَ هَمَّ بِهَا فَعَمِلَهَا، كَتَبَهَا اللَّهُ سَيِّئَةً وَاحِدَةً .<br>رواه البخاري ومسلم",
    "english": "On the authority of son of Abbas (may Allah be pleased with them both), from the Messenger of Allah (ﷺ), among the sayings he related from his Lord (glorified and exalted be He) is that He said: Allah has written down the good deeds and the bad ones. Then He explained it [by saying that] he who has intended a good deed and has not done it, Allah writes it down with Himself as a full good deed, but if he has intended it and has done it, Allah writes it down with Himself as from ten good deeds to seven hundred times, or many times over. But if he has intended a bad deed and has not done it, Allah writes it down with Himself as a full good deed, but if he has intended it and has done it, Allah writes it down as one bad deed. It was related by al-Bukhari and Muslim",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-17",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 17,
    "arabic": "عَنْ أَبِي ذَرٍّ الْغِفَارِيِّ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ فِيمَا يَرْوِيهِ عَنْ رَبِّهِ عَزَّ وَجَلَّ أَنَّهُ قَالَ: يَا عِبَادِي: إِنِّي حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِي وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا فَلَا تَظَالَمُوا. يَا عِبَادِي: كُلُّكُمْ ضَالٌّ إِلَّا مَنْ هَدَيْتُهُ فَاسْتَهْدُونِي أَهْدِكُمْ، يَا عِبَادِي: كُلُّكُمْ جَائِعٌ إِلَّا مَنْ أَطْعَمْتُهُ فَاسْتَطْعِمُونِي أُطْعِمْكُمْ، يَا عِبَادِي: كُلُّكُمْ عَارٍ إِلَّا مَنْ كَسَوْتُهُ فَاسْتَكْسُونِي أَكْسُكُمْ، يَا عِبَادِي: إِنَّكُمْ تُخْطِئُونَ بِاللَّيْلِ وَالنَّهَارِ، وَأَنَا أَغْفِرُ الذُّنُوبَ جَمِيعًا، فَاسْتَغْفِرُونِي أَغْفِرْ لَكُمْ. يَا عِبَادِي: إِنَّكُمْ لَنْ تَبْلُغُوا ضَرِّي فَتَضُرُّونِي، وَلَنْ تَبْلُغُوا نَفْعِي فَتَنْفَعُونِي، يَا عِبَادِي: لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ مَا زَادَ ذَلِكَ فِي مُلْكِي شَيْئًا، يَا عِبَادِي: لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ مَا نَقَصَ ذَلِكَ مِنْ مُلْكِي شَيْئًا، يَا عِبَادِي: لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوا فِي صَعِيدٍ وَاحِدٍ فَسَأَلُونِي، فَأَعْطَيْتُ كُلَّ وَاحِدٍ مَسْأَلَتَهُ، مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِي إِلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ. يَا عِبَادِي: إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيهَا لَكُمْ، ثُمَّ أُوَفِّيكُمْ إِيَّاهَا، فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدْ اللَّهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلَا يَلُومَنَّ إِلَّا نَفْسَهُ .<br>رواه مسلم (وكذلك الترمذي وابن ماجه)",
    "english": "On the authority of Abu Dharr al-Ghifari (may Allah be pleased with him) from the Prophet (ﷺ) is that among the sayings he relates from his Lord (may He be glorified) is that He said: O My servants, I have forbidden oppression for Myself and have made it forbidden amongst you, so do not oppress one another. O My servants, all of you are astray except for those I have guided, so seek guidance of Me and I shall guide you, O My servants, all of you are hungry except for those I have fed, so seek food of Me and I shall feed you. O My servants, all of you are naked except for those I have clothed, so seek clothing of Me and I shall clothe you. O My servants, you sin by night and by day, and I forgive all sins, so seek forgiveness of Me and I shall forgive you. O My servants, you will not attain harming Me so as to harm Me, and will not attain benefitting Me so as to benefit Me. O My servants, were the first of you and the last of you, the human of you and the jinn of you to be as pious as the most pious heart of any one man of you, that would not increase My kingdom in anything. O My servants, were the first of you and the last of you, the human of you and the jinn of you to be as wicked as the most wicked heart of any one man of you, that would not decrease My kingdom in anything. O My servants, were the first of you and the last of you, the human of you and the jinn of you to rise up in one place and make a request of Me, and were I to give everyone what he requested, that would not decrease what I have, any more that a needle decreases the sea if put into it. O My servants, it is but your deeds that I reckon up for you and then recompense you for, so let him who finds good, praise Allah, and let him who finds other than that, blame no one but himself. It was related by Muslim (also by at-Tirmidhi and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-18",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 18,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ عَزَّ وَجَلَّ يَقُولُ يَوْمَ الْقِيَامَةِ: يَا ابْنَ آدَمَ، مَرِضْتُ فَلَمْ تَعُدْنِي(1) قَالَ: يَا رَبِّ كَيْفَ أَعُودُكَ وَأَنْتَ رَبُّ الْعَالَمِينَ؟ قَالَ: أَمَا عَلِمْتَ أَنَّ عَبْدِي فُلَانًا مَرِضَ فَلَمْ تَعُدْهُ؟ أَمَا عَلِمْتَ أَنَّكَ لَوْ عُدْتَهُ لَوَجَدْتَنِي عِنْدَهُ. يَا ابْنَ آدَمَ: اسْتَطْعَمْتُكَ فَلَمْ تُطْعِمْنِي، قَالَ: يَا رَبِّ وَكَيْفَ أُطْعِمُكَ وَأَنْتَ رَبُّ الْعَالَمِينَ؟ قَالَ: أَمَا عَلِمْتَ أَنَّهُ اسْتَطْعَمَكَ عَبْدِي فُلَانٌ فَلَمْ تُطْعِمْهُ؟ أَمَا عَلِمْتَ أَنَّكَ لَوْ أَطْعَمْتَهُ لَوَجَدْتَ ذَلِكَ عِنْدِي. يَا ابْنَ آدَمَ: اسْتَسْقَيْتُكَ فَلَمْ تَسْقِنِي، قَالَ: يَا رَبِّ كَيْفَ أَسْقِيكَ وَأَنْتَ رَبُّ الْعَالَمِينَ؟ قَالَ اسْتَسْقَاكَ عَبْدِي فُلَانٌ فَلَمْ تَسْقِهِ، أَمَا إِنَّكَ لَوْ سَقَيْتَهُ لَوَجَدْتَ ذَلِكَ عِنْدِي رواه مسلم",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) will say on the Day of Resurrection: O son of Adam, I fell ill and you visited Me not. He will say: O Lord, and how should I visit You when You are the Lord of the worlds? He will say: Did you not know that My servant So-and-so had fallen ill and you visited him not? Did you not know that had you visited him you would have found Me with him? O son of Adam, I asked you for food and you fed Me not. He will say: O Lord, and how should I feed You when You are the Lord of the worlds? He will say: Did you not know that My servant So-and-so asked you for food and you fed him not? Did you not know that had you fed him you would surely have found that (the reward for doing so) with Me? O son of Adam, I asked you to give Me to drink and you gave Me not to drink. He will say: O Lord, how should I give You to drink when You are the Lord of the worlds? He will say: My servant So-and-so asked you to give him to drink and you gave him not to drink. Had you given him to drink you would have surely found that with Me. It was related by Muslim",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-19",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 19,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: قَالَ اللَّهُ عَزَّ وَجَلَّ: الْكِبْرِيَاءُ رِدَائِي، وَالْعَظَمَةُ إِزَارِي، فَمَنْ نَازَعَنِي وَاحِدًا مِنْهُمَا، قَذَفْتُهُ فِي النَّارِ .<br>رواه أبو داود(وكذلك ابن ماجه وأحمد) بأسانيد صحيحة",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) said: Pride is my cloak and greatness My robe, and he who competes with Me in respect of either of them I shall cast into Hell-fire. It was related by Abu Dawud (also by Ibn Majah and Ahmad) with sound chains of authority. This Hadith also appears in Muslim in another version",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-20",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 20,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ ،أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: تُفْتَحُ أَبْوَابُ الْجَنَّةِ يَوْمَ الِاثْنَيْنِ، وَيَوْمَ الْخَمِيسِ، فَيُغْفَرُ لِكُلِّ عَبْدٍ لَا يُشْرِكُ بِاللَّهِ شَيْئًا، إِلَّا رَجُلًا كَانَتْ بَيْنَهُ وَبَيْنَ أَخِيهِ شَحْنَاءُ، فَيُقَالُ: (1) أَنْظِرُوا (2) هَذَيْنِ حَتَّى يَصْطَلِحَا، أَنْظِرُوا هَذَيْنِ حَتَّى يَصْطَلِحَا، أَنْظِرُوا هَذَيْنِ حَتَّى يَصْطَلِحَا رواه مسلم (وكذلك مالك وأبو داود)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: The gates of Paradise will be opened on Mondays and on Thursdays, and every servant [of Allah] who associates nothing with Allah will be forgiven, except for the man who has a grudge against his brother. [About them] it will be said: Delay these two until they are reconciled; delay these two until they are reconciled. It was related by Muslim (also by Malik and Abu Dawud)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-21",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 21,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ، عَنْ النَّبِيِّ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: قَالَ اللَّهُ تَعَالَى: ثَلَاثَةٌ أَنَا خَصْمُهُمْ يَوْمَ الْقِيَامَةِ: رَجُلٌ أَعْطَى بِي ثُمَّ غَدَرَ (1)، وَرَجُلٌ بَاعَ حُرًّا فَأَكَلَ ثَمَنَهُ، وَرَجُلٌ اسْتَأْجَرَ أَجِيرًا فَاسْتَوْفَى مِنْهُ وَلَمْ يُعْطِهِ أَجْرَهُ رواه البخاري (وكذلك ابن ماجه وأحمد)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said that Allah the Almighty said: There are three (1) whose adversary I shall be on the Day of Resurrection: a man who has given his word by Me and has broken it; a man who has sold a free man (2) and has consumed the price; and a man who has hired a workman, has exacted his due in full from him and has not given him his wage. (1) i.e. types of men. (2) i.e. a man who has made a slave of another and has sold him. It was related by al-Bukhari (also by Ibn Majah and Ahmad ibn Hanbal)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-22",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 22,
    "arabic": "عَنْ أَبِي سَعِيدٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَا يَحْقِرْ أَحَدُكُمْ نَفْسَهُ، قَالُوا: يَا رَسُولَ اللَّهِ كَيْفَ يَحْقِرُ أَحَدُنَا نَفْسَهُ؟ قَالَ: يَرَى أَمْرَ الِلَّهِ عَلَيْهِ فِيهِ مَقَالٌ، ثُمَّ لَا يَقُولُ فِيهِ، فَيَقُولُ اللَّهُ عَزَّ وَجَلَّ لَهُ يَوْمَ الْقِيَامَةِ: مَا مَنَعَكَ أَنْ تَقُولَ فِي كَذَا وَكَذَا؟ فَيَقُولُ: خَشْيَةُ النَّاسِ، فَيَقُولُ: فَإِيَّايَ كُنْتَ أَحَقَّ أَنْ تَخْشَى رواه ابن ماجه بسند صحيح",
    "english": "On the authority of Abu Sa'id (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Let not any one of you belittle himself. They said: O Messenger of Allah, how can any one of us belittle himself? He said: He finds a matter concerning Allah about which he should say something, and he does not say [it], so Allah (mighty and sublime be He) says to him on the Day of Resurrection: What prevented you from saying something about such-and-such and such-and-such? He say: [It was] out of fear of people. Then He says: Rather it is I whom you should more properly fear. It was related by Ibn Majah with a sound chain of authorities",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-23",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 23,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ : إِنَّ اللَّهَ تَبَارَكَ وَتَعَالَى يَقُولُ يَوْمَ الْقِيَامَةِ: أَيْنَ الْمُتَحَابُّونَ بجَلَالِي؟ الْيَوْمَ أُظِلُّهُمْ فِي ظِلِّي يَوْمَ لَا ظِلَّ إِلَّا ظِلِّي رواه البخاري (وكذلك مالك)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah will say on the Day of Resurrection: Where are those who love one another through My glory? Today I shall give them shade in My shade, it being a day when there is no shade but My shade. It was related by al-Bukhari (also by Malik)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-24",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 24,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ إِذَا أَحَبَّ عَبْدًا دَعَا جِبْرِيلَ، فَقَالَ: إِنِّي أُحِبُّ فُلَانًا فَأَحِبَّهُ، قَالَ: فَيُحِبُّهُ جِبْرِيلُ، ثُمَّ يُنَادِي فِي السَّمَاءِ فَيَقُولُ: إِنَّ اللَّهَ يُحِبُّ فُلَانًا فَأَحِبُّوهُ، فَيُحِبُّهُ أَهْلُ السَّمَاءِ، قَالَ: ثُمَّ يُوضَعُ لَهُ الْقَبُولُ فِي الْأَرْضِ. وَإِذَا اللَّهُ أَبْغَضَ عَبْدًا، دَعَا جِبْرِيلَ فَيَقُولُ: إِنِّي أُبْغِضُ فُلَانًا فَأَبْغِضْهُ، فَيُبْغِضُهُ جِبْرِيلُ ثُمَّ يُنَادِي فِي أَهْلِ السَّمَاءِ: إِنَّ اللَّهَ يُبْغِضُ فُلَانًا فَأَبْغِضُوهُ، قَالَ: فَيُبْغِضُونَهُ، ثُمَّ تُوضَعُ لَهُ الْبَغْضَاءُ فِي الْأَرْضِ .<br>رواه مسلم (وكذلك البخاري ومالك والترمذي)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: If Allah has loved a servant [of His] He calls Gabriel (on whom be peace) and says: I love So-and-so, therefore love him. He (the Prophet (ﷺ) ﷺ) said: So Gabriel loves him. Then he (Gabriel) calls out in heaven, saying: Allah loves So-and-so, therefore love him. And the inhabitants of heaven love him. He (the Prophet (ﷺ) ﷺ) said: Then acceptance is established for him on earth. And if Allah has abhorred a servant [of His], He calls Gabriel and says: I abhor So-and-so, therefore abhor him. So Gabriel abhors him. Then Gabriel calls out to the inhabitants of heaven: Allah abhors So-and-so, therefore abhor him. He (the Prophet (ﷺ) ﷺ) said: So they abhor him, and abhorrence is established for him on earth. It was related by Muslim (also by al-Bukhari, Malik, and at-Tirmidhi)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-25",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 25,
    "arabic": "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ عَزَّ وَجَلَّ قَالَ: مَنْ عَادَى لِي وَلِيًّا، فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُ عَلَيْهِ، وَمَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ، كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطِشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَإِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنْ اسْتَعَاذَنِي لَأُعِيذَنَّهُ، وَمَا تَرَدَّدْتُ عَنْ شَيْءٍ أَنَا فَاعِلُهُ تَرَدُّدِي عَنْ نَفْسِ عَبْدِي الْمُؤْمِنِ، يَكْرَهُ الْمَوْتَ وَأَنَا أَكْرَهُ مَسَاءَتَهُ رواه البخاري",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) said: Whosoever shows enmity to someone devoted to Me, I shall be at war with him. My servant draws not near to Me with anything more loved by Me than the religious duties I have enjoined upon him, and My servant continues to draw near to Me with supererogatory works so that I shall love him. When I love him I am his hearing with which he hears, his seeing with which he sees, his hand with which he strikes and his foot with which he walks. Were he to ask [something] of Me, I would surely give it to him, and were he to ask Me for refuge, I would surely grant him it. I do not hesitate about anything as much as I hesitate about [seizing] the soul of My faithful servant: he hates death and I hate hurting him. It was related by al-Bukhari",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-26",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 26,
    "arabic": "عَنْ أَبي أُمامةَ رَضِيَ اللهُ عَنْهُ عَن النَّبِيّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ<br>قَالَ اللهُ عَزَّ وَجَلَّ : إِنَّ أَغْبَطَ أَوْلِيَائي عِنْدِي لَمُوْمِنُ خَفِيفُ الخَاذِ ذُو حَظِّ مِنَ الصَّلاةِ أَحْسَنَ عِبَادَتَ رَبِّهِ وَ أَطَاعَهُ فِي السَّرِّ وَ كَانَ غَامِضًا فِي النَّاسِ لا يُشارُ إِلَيْهِ بِالأَصابِعِ وَ كَانَ رِزْقُهُ كفافًا فَصَبَرَ عَلى ذَلِكَ ثُمَّ نَفَضَ بِيَدِهِ ثُمَّ قَالَ : عُجِّلَتْ مَنِيَّتُهُ قَلَّتْ بَواكِيهِ قَلَّ تُرَاثُهُ<br>رواه الترمذي (وكذالك أحمد و ابن ماجه) وإسنَاده حسن",
    "english": "On the authority of Abu Umamah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) said: Truly of those devoted to Me the one I most favor is a believer who is of meager means and much given to prayer, who has been particular in the worship of his Lord and has obeyed Him inwardly[1], who was obscure among people and not pointed out, and whose sustenance was just sufficient to provide for him yet he bore this patiently. Then the Prophet (ﷺ) shook his hand and said: Death will have come early to him, his mourners will have been few, his estate scant. [1] i.e. he has not been ostentatious in his obedience. It was related by at-Tirmidhi (also by Ahmad ibn Hanbal and Ibn Majah). Its chain of authorities is sound",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-27",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 27,
    "arabic": "عَنْ مَسْرُوقٍ . قَالَ : سَأَلْنَا ـ أَوْ سَأَلْتُ عَبْدَاللهِ (أَيْ ابْنَ مَسْعُودٍ ) عَنْ هَذِهِ الايةِ :<br>: ولَا تَحْسَبَنَّ الَّذِينَ قُتِلُوا في سَبِيلِ اللهِ أَمْواتاً بَلْ أَحْياءُ عِنْدَ رَبِّهِمْ يُرْزَقُونَ )) ـ قَالَ : أَمَا إِنَّا قَدْ سَأَلْنَا عَنْ ذَلِكَ ، فَقَالَ))<br>أَرْواحُهُمْ في جَوْفِ طَيْرٍ خُضْرٍ ، لَهَا قَنَادِيلُ مُعَلَّقَةٌ بِالعَرْشِ ، تَسْرَحُ مِنَ الجَنَّةِ حَيْثُ شَاءَتْ ، ثُمَّ َ تَأْوِي إِلي تِلْكَ القَنَادِيلِ ، فَأَطَّلَعَ إِلَيْهِمْ رَبُّهُمْ اطِّلَاعَةً فَقَالَ : هَلْ تَشْتَهُونَ شَيْئاً ؟ قَالُوا : أَيَّ شَيْءٍ نَشْتَهِي ، وَ نَحْنُ نَسْرَحُ مِنَ الجَنَّةِ حَيْثُ شِئْنا ؟ فَفَعَلَ ذَلِكَ بِهِمْ ثَلَاثََ مَرَّاتٍ ، فَلَمَّا رَأَوْا أَنَّهُمْ لَنْ يُتْرَكُوا مِنْ أَنْ يُسْأَلُوا ، قَالُوا : يَا رَبِّ ، نُرِيْدُ أَنْ تَرُدَّ أَرْوَاحَنَا في أَجْسَادِنَا ؛ حَتَّى نُقْتَلَ في سَبِيلِكَ مَرَّةً أُخْرَي . فَلَمَّا رَأَى أَنْ لَيْسَ لَهُمْ حَاجَةٌ تُرِكُوا .<br>(رواهُ مسلم (وكذلك الترمذي والنسائي وابن ماجه)",
    "english": "On the authority of Masruq, who said: We asked Abdullah (i.e. Ibn Masud) about this verse: And do not regard those who have been killed in the cause of Allah as dead, rather are they alive with their Lord, being provided for (Quran 3:169). He said: We asked about that and the Prophet (ﷺ) said: Their souls are in the insides of green birds having lanterns suspended from the Throne, roaming freely in Paradise where they please, then taking shelter in those lanterns. So their Lord cast a glance at them (1) and said: Do you wish for anything? They said: What shall we wish for when we roam freely in Paradise where we please? And thus did He do to them three times. When they say that they would not be spared from being asked [again], they said: O Lord, we would like for You to put back our souls into our bodies so that we might fight for Your sake once again. And when He saw that they were not in need of anything they were let be. (1) i.e. at those who had been killed in the cause of Allah. It was related by Muslim (also by at-Tirmidhi, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-28",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 28,
    "arabic": "عَنْ جُنْدُبٍ بِن عَبْدِاللهِ رَضِيَ اللهُ عَنْهُ قَالَ : رَسُولُ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ كَانَ فِيمَنْ كَانَ قَبْلَكُمْ رَجُلٌ بِهِ جُرْحٌ فَجَزِعَ فَأَخَذَ سِكِّينًا فَحَزَّ بِهَا يَدَهُ فَمَا رقَأَ الدَّمُ حَتَّى ماتَ قَالَ اللهُ تَعَالَى : بَادَرَنِي عَبْدِي بِنَفْسِهِ حَرَّمْتُ عَلَيْهِ الجَنَّةَ<br>رواه البخاري",
    "english": "On the authority of Jundub ibn Abdullah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: There was amongst those before you a man who had a wound. He was in [such] anguish that he took a knife and made with it a cut in his hand, and the blood did not cease to flow till he died. Allah the Almighty said: My servant has himself forestalled Me; I have forbidden him Paradise. It was related by al-Bukhari",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-29",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 29,
    "arabic": "عَنْ أبي هرَيرَةَ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُولَ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ يَقُولُ اللهُ تَعَالَى : مَا لِعَبْدِي المُؤْمِنِ عِنْدِي جَزَاءٌ، إِذا قَبَضْتُ صَفِيَّهُ، مِنْ أَهلِ الدُّنْيَا، ثُمَّ احْتَسبَهُ، إِلَّا الجَنَّةَ<br>رواه البخاري",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) says: My faithful servant's reward from Me, if I have taken to Me his best friend from amongst the inhabitants of the world and he has then borne it patiently for My sake, shall be nothing less than Paradise. It was related by al-Bukhari",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-30",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 30,
    "arabic": "عَنْ أَبي هُرَيْرَةَ ، رَضِيَ اللهُ عَنْهُ ، أَنَّ رَسُولَ اللهِ ، صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، قَالَ<br>. قَالَ اللهُ عَزَّ وَجَلَّ : إِذا أَحَبَّ عَبْدِي لِقَائي ، أَحْبَبْتُ لِقَاءَهُ ، وإِذا كَرِهَ لِقَائي ، كَرِهْتُ لِقَاءَهُ<br>.رواه البخاري و مالك<br>و في رواية مسلم ، توضح معنى الحديث :<br>: عَنْ عَائِشَةَ ، رَضِيَ اللهُ عَنْهَا ، قَالَتْ : قَالَ رَسُولُ اللهِ ، صَلَّى اللهُ عَلَيْهِ وسَلَّمَ<br>مَنْ أَحَبَّ لِقَاءَ اللهِ ، أَحَبَّ اللهُ لِقَاءَهُ ، وَ مَنْ كَرِهَ لِقَاءَ اللهِ ، كَرِهَ اللهُ لِقَاءَهُ . فَقُلْتُ : يَا نَبِيَّ اللهِ ، أَكَراهِيةَ المَوْتِ ؟ فَكُلُّنَا نَكْرَهُ المَوْتَ . قَالَ لَيْسَ كَذَلِكَ ، وَلَكِنَّ المُؤْمِنَ إذا بُشِّرَ بِرَحْمةِ اللهِ وَ رِضْوَانِهِ وَجَنَّتِهِ ، أَحَبَّ لِقَاءَ اللهِ ، فَأَحَبَّ اللهُ لِقَاءَهُ ، وَإِنَّ الكَافِرَ إِذا بُشِّرَ بِعَذَابِ اللهِ وَسَخَطِهِ ، كَرِهَ لِقَاءَاللهِ ، وَكَرِهَ اللهُ لِقاءَهُ",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah (mighty and sublime be He) said: If My servant likes to meet Me, I like to meet him; and if he dislikes to meet Me, I dislike to meet him. Prophetic explanation of this Sacred Hadith: He who likes to meet Allah, Allah likes to meet him; and he who dislikes to meet Allah, Allah dislikes to meet him. Aishah (may Allah be pleased with her) said: O Prophet (ﷺ) of Allah, is it because of the dislike of death, for all of us dislike death? The Prophet (ﷺ) said: It is not so, but rather it is that when the believer is given news of Allah's mercy, His approval and His Paradise, he likes to meet Allah and Allah likes to meet him; but when the unbeliever is given news of Allah's punishment and His displeasure, he dislikes to meet Allah and Allah dislikes to meet him. It was related by al-Bukhari and Malik. The Prophetic version is related by Muslim",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-31",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 31,
    "arabic": "عَنْ جُنْدُبٍ رَضِيَ اللهُ عَنْهُ : أَنَّ رَسُولَ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ حَدَّثَ (أَنْ رجُلاً قال : واللهِ لا يَغْفِرُ اللهُ لِفُلانٍ وإِنَّ اللهَ تَعَالَى قَالَ : مَنْ ذَا الَّذِي يَتَأَلَّى عَلَيَّ أَنْ لا أَغْفِرَ لِفُلان،فَإِنِّي قَدْ غَفَرْتُ لِفُلانٍ، وأَحْبَطْتُ عَمَلَكَ (أَوْ كَمَا قَال<br>رواه مسلم",
    "english": "On the authority of Jundub (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) related: A man said: By Allah, Allah will not forgive So-and-so. At this Allah the Almighty said: Who is he who swears by Me that I will not forgive So-and-so? Verily I have forgiven So-and-so and have nullified your [own good] deeds (1) (or as he said [it]). (1) A similar Hadith, which is given by Abu Dawud, indicates that the person referred to was a goldly man whose previous good deeds were brought to nought through presuming to declare that Allah would not forgive someone's bad deeds. It was related by Muslim",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-32",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 32,
    "arabic": "عَنْ أَبي هُرَيْرَةَ ، رَضِيَ اللهُ عَنْهُ ، عَنِ النَّبَيِّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، قَالَ : أَسْرَفَ رَجُلٌ عَلي نَفْسِهِ ، فَلَمَّا حَضَرَهُ المَوْتُ أَوْصَى بَنِيه ، فَقَالَ : إِذَا أَنَا مِتُّ فَأَحْرِقُوني ، ثُمَّ اسْحَقُوني ، ثُمَّ أَذْرُوني في البَحْرِ فَوَاللهِ لَئِنْ قَدَرَ عَلَيَّ رَبِّي لَيُعَذَّبَنِّي عَذَاباً ، مَا عَذَّبَهُ أَحَداً ، فَفَعَلُوا ذَلِكَ بِهِ . فَقَالَ لِلْأَرْضِ : أَدِّي مَا أَخَذْتِ ، فَإِذا هُوَ قَائِمٌ ، فَقَالَ لَهُ : مَا حَمَلَكَ عَلَي مَا صَنَعْتَ ؟ قَالَ : خَشْيَتُكَ يَا رَبِّ ، أَوْ مَخَافَتُكَ . فَغَفَرَ لَهُ بِذَلِكَ . رواهُ مسلم (وكذلك البخاري والنسائي وابن ماجه)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: A man sinned greatly against himself, and when death came to him he charged his sons, saying: When I have died, burn me, then crush me and scatter [my ashes] into the sea, for, by Allah, if my Lord takes possession of me, He will punish me in a manner in which He has punished no one [else]. So they did that to him. Then He said to the earth: Produce what you have taken-and there he was! And He said to him: What induced you to do what you did? He said: Being afraid of You, O my Lord (or he said: Being frightened of You) and because of that He forgave him. It was related by Muslim (also by al-Bukhari, an-Nasa'i and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-33",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 33,
    "arabic": "عَنْ أَبي هُرَيْرَةَ ، رَضِيَ اللهُ عَنْهُ ، عَنِ النَّبَيِّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، فِيما يَحْكِي عَنْ رَبِّهِ عَزَّ وَجَلَّ ، قَالَ : أَذْنَبَ عَبْدٌ ذَنْبًا ، فَقَالَ : اللَّهُمَّ اغْفِرْ لِي ذَنْبي . فَقَالَ تَبَارَكَ وَتَعَالى : أَذْنَبَ عَبْدِي ذَنْبًا ، فَعَلِمَ أنَّ لَهُ رَبّاً ، يَغْفِرُ الذَّنْبَ ، وَيَأْخُذُ بِهِ . ثُمَّ عَادَ فَأَذْنَبَ ، فَقَالَ : أَيّ رَبِّ ، اغْفِرْ لِي ذَنْبِِي ، فَقَالَ تَبَارَكَ وتَعَالى : عَبْدِي أَذْنَبَ ذَنْباً . فَعَلِمَ أَنَّ لَهُ رَبّاً يَغْفِرُ الذَّنْبَ ، ويَأْخُذُ بِهِ . ثُمَّ عَادَ فَأَذْنَبَ ، فَقَالَ : أَيّ رَبِّ ، اغْفِرْ لِي ذَنْبِي : فَقَالَ تَبَارَكَ وَتَعَالَى : أَذْنَبَ عَبْدِي ذَنْباً ، فَعَلِمَ أَنَّ لَهُ رَبّاً ، يَغْفِرُ الذَّنْبَ ، ويَأْخُذُ بالذَّنْبِ . اعْمَلْ مَا شِئْتَ ، فَقَدْ غَفَرْتُ لَكَ . رواهُ مسلم (وكذلك البخاري)",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him) that the Prophet (ﷺ), from among the things he reports from his Lord (mighty and sublime be He), is that he said: A servant [of Allah's] committed a sin and said: O Allah, forgive me my sin. And He (glorified and exalted be He) said: My servant has committed a sin and has known that he has a Lord who forgives sins and punishes for them. Then he sinned again and said: O Lord, forgive me my sin. And He (glorified and exalted be He) said: My servant has committed a sin and has known that he has a Lord who forgives sins and punishes for them. Then he sinned again and said: O Lord, forgive me my sin. And He (glorified and exalted be He) said: My servant has committed a sin and has known that he has a Lord who forgives sins and punishes for sins. Do what you wish, for I have forgiven you. It was related by Muslim (also by al-Bukhari)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-34",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 34,
    "arabic": "عَنْ أَنَسٍ رَضِيَ اللهُ عَنْهُ ، قَالَ : سَمِعْتُ رَسُولَ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، يَقُولُ : قَالَ اللهُ تَعَالَى : يَا ابْنَ ادَمَ ، إِنَّكَ مَا دَعَوْتََنِي وَرَجَوْتَنِي ، غَفَرْتُ لَكَ عَلَى مَا كَانَ مِنْكَ وَلَا أُبالِي . يا ابْنَ ادَمَ :لَوْ بَلَغَتْ ذُنُوبُكَ عَنانَ السَّماءِ ثُم َّ اسْتَغْفَرْتَني ، غَفَرْتُ لَكَ . يَا ابْنَ ادَمَ : إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الأَرْضِ خَطَايا ثُمَّ لَقِيتَني لَا تُشْرِكُ بِي شَيْأً ، لَأَتيْتُكَ بِقُرَابِها مَغْفِرَةً رواهُ الترمذي (وكذلك أحمد) وسنده حسن",
    "english": "On the authority of Anas (may Allah be pleased with him), who said: I heard the Messenger of Allah (ﷺ) say: Allah the Almighty said: O son of Adam, so long as you call upon Me and ask of Me, I shall forgive you for what you have done, and I shall not mind. O son of Adam, were your sins to reach the clouds of the sky and were you then to ask forgiveness of Me, I would forgive you. O son of Adam, were you to come to Me with sins nearly as great as the earth and were you then to face Me, ascribing no partner to Me, I would bring you forgiveness nearly as great as it. It was related by at-Tirmidhi (also by Ahmad ibn Hanbal). Its chain of authorities is sound",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-35",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 35,
    "arabic": "عَنْ أَبي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ أَنَّ رَسُولَ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ يَتنزَّلُ رَبُّنَا ، تَبَارَكَ وَتَعَالَى ، كُلَّ لَيْلَةٍ إلي سَمَاءِ الدُّنْيا ، حينَ يَبْقَى ثُلُثُ اللَّيْلِ الاخِرُ ، فَيَقُولُ مَنْ يَدْعُوني فأَسْتَجِيبَ لَه ؟ مَنْ يَسْأَلُني فَأُعْطِيَهُ ؟ مَنْ يَسْتَغْفِرُني فَأَغْفِرَلَهُ ؟ رواه البخاري (وكذلك مسلم ومالك والترمذي و أبو داود)<br>وفي رواية لمسلم زيادة:<br>فَلا يَزالُ كذَلِك حَتَى يُضِيءَ الفَجْرُ",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Our Lord (glorified and exalted be He) descends each night to the earth's sky when there remains the final third of the night, and He says: Who is saying a prayer to Me that I may answer it? Who is asking something of Me that I may give it him? Who is asking forgiveness of Me that I may forgive him? It was related by al-Bukhari (also by Muslim, Malik, at-Tirmidhi and Abu Dawud). In a version by Muslim the Hadith ends with the words: And thus He continues till [the light of] dawn shines",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-36",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 36,
    "arabic": "عَنْ أَنَسٍ ، رَضِيَ اللهُ عَنْهُ ، عَنِ النَّبِيِّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، قَالَ<br>يَجْتَمِعُ المُؤْمِنُونَ يَوْمَ القِيَامَةِ فَيَقُولُونَ : لَوِ اسْتَشْفَعْنَا إلى رَبِّنَا ، فَيَأْتُونَ ادَمَ ، فَيَقُولُونَ : أَنْتَ أَبو النَّاسِ ، خَلَقَكَ اللهُ بِيَدِهِ ، وَأَسْجَدَ لَكَ مَلائِكَتَهُ ، وَعَلَّمَكَ أَسْماءَ كُلِّ شَيْءٍ ، فاشْفَعْ لَنا عِنْدَ رَبِّكَ ، حَتَّى يُرِيحَنا مِنْ مَكَانِنا هَذا ، فَيَقُولُ : لَسْتُ هُنَاكُمْ ـ وَيَذْكُرُ ذَنْبَهُ ، فَيَسْتَحْيي ـ ائْتُوا نُوحاً ؛ فَإِنَّهُ أَوَّلُ رَسُولٍ بَعَثَهُ اللهُ إِلي أَهْلِ الأَرْض ، فَيَأْتُونَهُ ، فَيَقُولُ : لَسْتُ هُنَاكُمْ ـ ويَذْكُرُ سُؤالَهُ رَبَّهُ مَا لَيْسَ لَهُ بِهِ عِلْمٌ ، فَيَسْتَحْيي ـ فَيَقُولُ : اؤْتُوا خَلِيلَ الرَّحْمنِ ، فَيَأْتُونَهُ ، فَيَقُولُ : لَسْتُ هُنَاكُم ، اؤْتُوا موسى ، عَبْداً كَلَّمَهُ اللهُ ، و أَعْطَاهُ التَّوْرَاةَ . فَيَأْتُونَهُ ، فَيَقُولُ : لَسْتُ هُنَاكُمْ ـ وَيَذْكُرُ قَتْلَ النَّفْسِ بِغَيْرِ نَفْسٍ ، فَيَسْتَحْيي مِنْ رَبِّهِ ـ فَيَقُولُ : اؤْتُوا عِيسَى ، عَبْدَ اللهِ وَرَسُولَهُ ، وَكَلِمَةَ اللهِ وَرُوحَهُ . فَيَأْتُونَهُ ، فَيَقُولُ : لَسْتُ هُنَاكُمْ ، اؤْتُوا مُحَمَّداً ، ـ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ـ عَبْداً غَفَرَ اللهُ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ وَمَا تَأَخَّرَ ، فَيَأْتُونَنِي ، فَأَنْطَلِقُ حَتَّي أَسْتَأْذِنَ عَلَي رَبِّي فَيُؤْذَنُ . فإذا رَأَيْتُ رَبِّي وَقَعْتُ سَاجداً ، فَيَدَعُني مَا شَاءَ اللهُ ، ثُمَّ يُقَالُ : ارْفَعْ رَأْسَكَ ، وسَلْ تُعْطَهُ ، وَقُلْ يُسْمَعْ ، واشْفَعْ تُشَفَّعْ . فَأَرْفَعُ رَأْسي ، فَأَحْمَدُهُ بِتَحْمِيدٍ يُعَلِّمُنِيهِ ، ثُمَّ أَشْفَعُ ، فَيحُدُّ لي حَدّاً ، فَأُدْخِلُهُمْ الجَنَّةَ . ثُمَّ أَعُودُ إِلَيْهِ ، فإِذا رَأَيْتُ رَبِّي ( فَأَقَعُ ساجداً ) مِثْلَهُ ، ثُمَّ أَشْفَعُ فَيَحُدُّ لِي حَدّاً ، فَأُدْخِلُهُمُ الجَنَّةَ . ثُمَّ أَعُودُ الثالِثةَ ، ثُمَّ أَعُودُ الرَّابعة ، فَأقُولُ : مَا بَقِي في النَّارِ إِلَّا مَنْ حَبَسَهُ القُرْانُ ، ووَجَبَ عَلَيْهِ الخُلُودُ<br>رواه البخاري ( وكذلك مسلم والترمذي وابن ماجه ) و في رواية أخرى للبخاري زيادة هي<br>قَالَ النَّبِيُّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ ، يَخْرُجُ مِنَ النَّارِ مَنْ قَالَ : لَا إِلهَ إِلَّا اللهُ ، وكَانَ فِي قَلْبِهِ مِنَ الخَيْرِ مَا يَزِنُ شَعِيرةً ، ثُمَّ يَخْرُجُ مِنَ النَّارِ مَنْ قَالَ : لَا إِلهَ إِلَّا اللهُ ، وكَانَ فِي قَلْبِهِ مِنَ الخَيْرِ مَا يَزِنُ بُرَّةً ، ثُمَّ يَخْرُجُ مِنَ النَّارِ مَنْ قَالَ : لَا إِلهَ إِلَّا اللهُ ، وكَانَ فِي قَلْبِهِ مَا يَزِنُ مِنَ الخَيْرِ ذَرَّةً",
    "english": "On the authority of Anas (may Allah be pleased with him) from the Prophet (ﷺ), who said: The believers will gather together on the Day of Resurrection and will say: Should we not ask [someone] to intercede for us with our Lord? So they will come to Adam and will say: You are the Father of mankind; Allah created you with His hand, He made His angels bow down to you and He taught you the names of everything, so intercede for us with your Lord so that He may give us relief form this place where we are. And he will say: I am not in a position [to do that] - and he will mention his wrongdoing and will feel ashamed and will say: Go to Noah, for he is the first messenger that Allah sent to the inhabitants of the earth. So they will come to him and he will say: I am not in a position [to do that] - and he will mention his having requested something of his Lord about which he had no [proper] knowledge (Quran 11:45-46), and he will feel ashamed and will say: Go to the Friend of the Merciful (Abraham). So they will come to him and he will say: I am not in a position [to do that]. Go to Moses, a servant to whom Allah talked and to whom He gave the Torah. So they will come to him and he will say: I am not in a position [to do that] - and he will mention the taking of a life other that for a life (Quran 28:15-16), and he will feel ashamed in the sight of his Lord and will say: Go to Jesus, Allah's servant and messenger, Allah's word and spirit. So they will come to him and he will say: I am not in a position [to do that]. Go to Muhammad (ﷺ), a servant to whom Allah has forgiven all his wrongdoing, past and future. So they will come to me and I shall set forth to ask permission to come to my Lord, and permission will be given, and when I shall see my Lord I shall prostrate myself. He will leave me thus for such time as it pleases Him, and then it will be said [to me]: Raise your head. Ask and it will be granted. Speak and it will be heard. Intercede and your intercession will be accepted. So I shall raise my head and praise Him with a form of praise that He will teach me. Then I shall intercede and He will set me a limit [as to the number of people], so I shall admit them into Paradise. Then I shall return to Him, and when I shall see my Lord [I shall bow down] as before. Then I shall intercede and He will set me a limit [as to the number of people]. So I shall admit them into Paradise. Then I shall return for a third time, then a fourth, and I shall say: There remains in Hell-fire only those whom the Qur'an has confined and who must be there for eternity. There shall come out of Hell-fire he who has said: There is no god but Allah and who has in his heart goodness weighing a barley-corn; then there shall come out of Hell-fire he who has said: There is no god but Allah and who has in his heart goodness weighing a grain of wheat; then there shall come out of Hell-fire he who has said: There is no god but Allah and who has in his heart goodness weighing an atom. It was related by al-Bukhari (also by Muslim, at-Tirmidhi, and Ibn Majah)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-37",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 37,
    "arabic": "عَنْ أَبي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ : قَالَ رَسُولَ اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ اللهُ أَعْدَدْتُ لِعِبَادي الصَّالِحِينَ مَا لَا عَيْنٌ رَأَت وَ لَا أُذُنٌ سَمِعَتْ وَلَا خَطَرَ عَلَى قَلْبِ بَشَرٍ فاقْرأُوا إنْ شِئْتُمْ : فَلَا تَعْلَمُ نَفْسٌ مَّا أُخْفِيَ لَهُمْ مِنْ قُرَّةِ أَعْيُنٍ رواه البخاري و مسلم والترمذي وابن ماجه",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah said: I have prepared for My righteous servants what no eye has seen and no ear has heard, not has it occurred to human heart. Thus recite if you wish (1): And no soul knows what joy for them (the inhabitants of Paradise) has been kept hidden (Quran 32:17). (1) The words \"Thus recite if you wish\" are those of Abu Harayrah. It was related by al-Bukhari, Muslim, at-Tirmidhi and Ibn Majah",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-38",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 38,
    "arabic": "عَنْ أَبي هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ عَنْ رَسُول اللهِ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ لَمَّا خَلَقَ اللهُ الجَنَّةَ وَالنَّارَ أَرْسَلَ جِبْرِيْلَ إلى الجنَّةِ فَقَالَ انْظُرْ إِلَيْهَا وَإلى مَا أَعْدَدْتُ لأهْلِهَا فِيْهَا . قَالَ: فَجَاءَهَا وَنَظَرَ إِلَيْهَا وَ إِلى مَا أَعَدَّاللهُ لأهْلِهَا فِيْهَا. قَالَ: فَرَجَعَ إِلَيْهِ قَالَ: فَوَعِزَّتِكَ لَا يَسْمَعُ بِهَا أَحَدٌ إِلَّا دَخَلَهَا فَأَمَرَ بِهَا فَحُفَّتْ بِالمَكَارِهِ فَقَالَ: ارْجِعْ إِلَيْهَا ، فَانْظُرْ إِلى مَا أَعْدَدْتُ لأَهْلِهَا فِيْهَا ، قَالَ: فَرَجَعَ إِلَيْهَا ، فإِذا هِيَ قَدْ حُفَّتْ بِالمَكَارِهِ ، فَرَجَعَ إِلَيْهِ ، فَقَالَ: وَعِزَّتِكَ لَقَدْ خِفْتُ أَنْ لَا يَدْخُلَهَا أَحَدٌ قَالَ: اذْهَبْ إِلى النَّارِ فَانْظُرْ إِليْها ، وإلى مَا أَعْدَدْتُ لأَهْلِها فِيْهَا . فإذا هِي يَرْكَبُ بَعْضُهَا بَعْضًا ، فَرَجَعَ إِلَيْهِ ، فَقَالَ: وَ عِزَّتِكَ لَا يَسْمَعُ بِهَا أحَدٌ فَيَدْخُلَهَا . فَأَمَر بِها فَحُفَّتْ بِالشَّهَوَاتِ ، فَقَالَ: ارْجِعْ إِلَيْهَا ، فَرَجَعَ إلَيْهَا ، فَقَالَ: وَ عِزَّتِكَ لَقَدْ خَشِيتُ أنْ لَا يَنْجُوَ مِنْهَا أَحَدٌ إِلَّا دَخَلَهَا رواه الترمذي و قال حديث حسن صحيح و كذلك أبو داود والنسائي",
    "english": "On the authority of Abu Hurayrah (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: When Allah created Paradise and Hell-fire, He sent Gabriel to Paradise, saying: Look at it and at what I have prepared therein for its inhabitants. The Prophet (ﷺ) said: So he came to it and looked at it and at what Allah had prepared therein for its inhabitants. The Prophet (ﷺ) said: So he returned to Him and said: By your glory, no one hears of it without entering it. So He ordered that it be encompassed by forms of hardship, and He said: Return to it and look at what I have prepared therein for its inhabitants. The Prophet (ﷺ) said: So he returned to it and found that it was encompassed by forms of hardship (1). Then he returned to Him and said: By Your glory, I fear that no one will enter it. He said: Go to Hell-fire and look at it and what I have prepared therein for its inhabitants, and he found that it was in layers, one above the other. Then he returned to Him and said: By Your glory, no one who hears of it will enter it. So He ordered that it be encompassed by lusts. Then He said: Return to it. And he returned to it and said: By Your glory, I am frightened that no one will escape from entering it. (1) The Arabic word used here is \"makarih\", the literal meaning of which is \"things that are disliked\". In this context it refers to forms of religious discipline that man usually finds onerous. It was related by Tirmidhi, who said that it was a good and sound Hadith (also by Abu Dawud and an-Nasa'i)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-39",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 39,
    "arabic": "عَنْ أَبي سَعيدٍ الْخُدْريّ رَضِيَ اللهُ عَنْهُ عَن النَّبِيّ صَلَّى الله عَلَيْهِ وَ سَلَّمَ قَالَ : احْتَجَّتِ الجَنَّةُ والنَّارُ فَقَالتِ النَّارُ : فِيَّ الجَبَّارونَ والمُتكَبَّرونَ وَقَالتِ الجَنَّةُ : فِيّ ضُعَفاءُ النَّاسِ ومساكينُهُمْ فَقَضَى اللهُ بَيْنَهُما : إِنَّكِ الجَنَّةُ رَحْمَتِي أَرْحَمُ بِكِ مَنْ أَشاءُ، وإنكِ النارُ عذابي ، أُعَذِبُ بِكِ من أشاءُ ، وَلِكلَيْكُما عَلَيَّ مِلْؤُها (رواه مسلم (وكذلك البخاري والترمذي)",
    "english": "On the authority of Abu Sa'id al-Khudri (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Paradise and Hell-fire disputed together, and Hell-fire said: In me are the mighty and the haughty. Paradise said: In me are the weak and the poor. So Allah judged between them, [saying]: You are Paradise, My mercy; through you I show mercy to those I wish. And you are Hell-fire, My punishment; through you I punish those I wish, and it is incumbent upon Me that each of you shall have its fill. It was related by Muslim (also by al-Bukhari and at-Tirmidhi)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "qudsi-40",
    "collection": "qudsi",
    "collectionName": "40 Hadith Qudsi",
    "hadithNumber": 40,
    "arabic": "عَنْ أبي سَعِيدٍ الخُدّريّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ النَّبِىُّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ<br>إنَّ اللهَ يَقُولُ لأَهْلِ الجَنَّةِ : يَا أهْلَ الجَنَّةِ . فَيَقُولُون : لَبَّيْكَ رَبَّنا وسَعْدَيْكَ ، والخَيْرُ في يَدَيْكَ. فَيَقُولُ : هَلْ رَضِيتُم ؟ فَيَقُولُونَ : وَما لَنا لَا نَرْضَىى يَا رَبّ ، وَقَدْ أَعْطَيْتَنا مَا لمْ تُعْطِ أَحَداً مِنْ خَلْقِكَ . فَيَقُولُ : أَلا أُعْطِيكُمْ أَفْضَلَ مِنْ ذَلِك ؟ فَيَقُولُونَ : يَا رَبّ وأيُّ شيءٍ أَفْضَلُ مِنْ ذَلِك ؟ فَيَقُولُ : أٌحِلُّ عَلَيْكُمْ رِضْواني ، فَلا أَسْخَطُ عَلَيْكُمْ بَعْدَهُ أَبداً<br>رواه البخاري (وكذلك مسلم والترمذي)",
    "english": "On the authority of Abu Sa'id al-Khudri (may Allah be pleased with him), who said that the Messenger of Allah (ﷺ) said: Allah will say to the inhabitants of Paradise: O inhabitants of Paradise! They will say: O our Lord, we present ourselves and are at Your pleasure, and goodness rests in Your hands. Then He will say: Are you contented? And they will say: And how should we not be contented, O Lord, when You have given to us that which You have given to no one else of Your creation? Then He will say: Would you not like Me to give you something better than that? And they will say: O Lord and what thing is better than that? And He will say: I shall cause My favour to descend upon you and thereafter shall never be displeased with you. It was related by al-Bukhari (also by Muslim and at-Tirmidhi)",
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
  },
  {
    "id": "dehlawi-11",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 11,
    "arabic": "لَا یَحِلُّ لِمُؤمِنٍ اَنْ یَّجُهْرَ أخَاهُ فَوقَ ثَلَاثَةِ أیَّامٍ",
    "english": "It is unlawful for a believer to sever relations with his brother for more than three days",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-12",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 12,
    "arabic": "لَیْسَ مِنَّا مَنْ غَشَّنَا",
    "english": "He is not one of us who cheats us",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-13",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 13,
    "arabic": "مَا قَلَّ وَكَفَى خَيْرٌ مِمَّا كَثُرَ وَأَلْهَى",
    "english": "A little that suffices is better than an abundance that distracts",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-14",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 14,
    "arabic": "الرَّاجِعُ فِيْ هِبَتِهِ کَالرَّاجِعِ فِيْ قَیْئِهِ",
    "english": "Someone who takes back his gift is like someone who eats his vomit",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-15",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 15,
    "arabic": "الْبَلَاءُ مُوَکِّلٌ بِالْمَنْطِقِ",
    "english": "Affliction comes from (loose) talk",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-16",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 16,
    "arabic": "النَّاسُ کَأسْنَانِ الْمُشْطِ",
    "english": "People are like the teeth of a comb",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-17",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 17,
    "arabic": "الْغِنَى غِنَى النَّفْسِ",
    "english": "Richness lies in the richness of the soul",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-18",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 18,
    "arabic": "الْسَّعِیْدُ مَنْ وُّعِظَ بِغَیْرِهِ",
    "english": "The felicitous person takes lessons from (the actions of) others",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-19",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 19,
    "arabic": "وَ إِنَّ مِنَ الشِّعْرِ لَحِکْمَةً وَاِنَّ مِنَ الْبَیَانِ لَسِحْرًا",
    "english": "Indeed, in poetry there is wisdom and in eloquence there is magic",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-20",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 20,
    "arabic": "عَفْوُ الْمُلُوْكِ إِبْقَاءٌ لِلْمُلْكِ",
    "english": "The king’s pardon preserves the kingdom",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-21",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 21,
    "arabic": "اَلْمَرْءُ مَعَ مَنْ أَحَبَّ",
    "english": "A man will be with whom he loves",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-22",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 22,
    "arabic": "مَا هَلَكَ إمْرُؤٌ عَرَفَ قَدْرَهُ",
    "english": "A man who knows his worth will not be ruined",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-23",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 23,
    "arabic": "اَلْوَلَدُ لِلْفِرَاشِ وَ لِلْعَاهِرِ الْحَجَرُ",
    "english": "The child belongs to the bed and stoning is for the adulterer",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-24",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 24,
    "arabic": "الْیَدُ الْعُلْیَا خَیْرٌ مِّنَ الْیَدِ السُّفْلَی",
    "english": "The upper hand is superior to the lower hand",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-25",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 25,
    "arabic": "لَا شَکَرَ اللهَ مَنْ لَّا یَشْکُرُ النَّاسَ",
    "english": "He does not thank Allah who does not thank people",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-26",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 26,
    "arabic": "حُبُّكَ الشَّيْءَ یُعْمِيْ وَ یُصِمُّ",
    "english": "Your love of something can blind and deafen (you)",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-27",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 27,
    "arabic": "جُبِلَتِ الْقُلُوبُ عَلی حُبَّ مَنْ اَحْسَنَ اِلَیْهَا وَ بُغْضِ مَنْ اَسَاءَ اِلَیْهَا",
    "english": "Hearts are predisposed to love someone who does them good and detest someone who does them harm",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-28",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 28,
    "arabic": "الْتَّائِبُ مِنَ الذَّنْبِ کَمَنْ لَا ذَنْبَ لَهُ",
    "english": "One who repents from sin is like someone without sin",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-29",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 29,
    "arabic": "الشَّاهِدُ یَرَی مَا لَا یَرَاهُ الْغَائِبُ",
    "english": "The person who actually witnesses an (event) sees that which one who is absent does not",
    "grade": "Hasan/Sahih"
  },
  {
    "id": "dehlawi-30",
    "collection": "dehlawi",
    "collectionName": "Shah Waliullah's 40 Hadith",
    "hadithNumber": 30,
    "arabic": "اِذا جَاءَکُمْ کَرِیْمُ قَوْمٍ فَاَکْرِمُوهُ",
    "english": "If the nobleman of a people comes to you, honour him",
    "grade": "Hasan/Sahih"
  }
];
