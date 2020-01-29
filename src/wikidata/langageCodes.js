const langCodes = [
  ["aar", "aa", "Afar"],
  ["abk", "ab", "Abkhazian"],
  ["ace", "", "Achinese"],
  ["ach", "", "Acoli"],
  ["ada", "", "Adangme"],
  ["ady", "", "Adyghe; Adygei"],
  ["afa", "", "Afro-Asiatic languages"],
  ["afh", "", "Afrihili"],
  ["afr", "af", "Afrikaans"],
  ["ain", "", "Ainu"],
  ["aka", "ak", "Akan"],
  ["akk", "", "Akkadian"],
  ["alb", "sq", "Albanian"],
  ["ale", "", "Aleut"],
  ["alg", "", "Algonquian languages"],
  ["alt", "", "Southern Altai"],
  ["amh", "am", "Amharic"],
  ["ang", "", "English, Old (ca.450-1100)"],
  ["anp", "", "Angika"],
  ["apa", "", "Apache languages"],
  ["ara", "ar", "Arabic"],
  ["arc", "", "Official Aramaic (700-300 BCE); Imperial Aramaic (700-300 BCE)"],
  ["arg", "an", "Aragonese"],
  ["arm", "hy", "Armenian"],
  ["arn", "", "Mapudungun; Mapuche"],
  ["arp", "", "Arapaho"],
  ["art", "", "Artificial languages"],
  ["arw", "", "Arawak"],
  ["asm", "as", "Assamese"],
  ["ast", "", "Asturian; Bable; Leonese; Asturleonese"],
  ["ath", "", "Athapascan languages"],
  ["aus", "", "Australian languages"],
  ["ava", "av", "Avaric"],
  ["ave", "ae", "Avestan"],
  ["awa", "", "Awadhi"],
  ["aym", "ay", "Aymara"],
  ["aze", "az", "Azerbaijani"],
  ["bad", "", "Banda languages"],
  ["bai", "", "Bamileke languages"],
  ["bak", "ba", "Bashkir"],
  ["bal", "", "Baluchi"],
  ["bam", "bm", "Bambara"],
  ["ban", "", "Balinese"],
  ["baq", "eu", "Basque"],
  ["bas", "", "Basa"],
  ["bat", "", "Baltic languages"],
  ["bej", "", "Beja; Bedawiyet"],
  ["bel", "be", "Belarusian"],
  ["bem", "", "Bemba"],
  ["ben", "bn", "Bengali"],
  ["ber", "", "Berber languages"],
  ["bho", "", "Bhojpuri"],
  ["bih", "bh", "Bihari languages"],
  ["bik", "", "Bikol"],
  ["bin", "", "Bini; Edo"],
  ["bis", "bi", "Bislama"],
  ["bla", "", "Siksika"],
  ["bnt", "", "Bantu (Other)"],
  ["bos", "bs", "Bosnian"],
  ["bra", "", "Braj"],
  ["bre", "br", "Breton"],
  ["btk", "", "Batak languages"],
  ["bua", "", "Buriat"],
  ["bug", "", "Buginese"],
  ["bul", "bg", "Bulgarian"],
  ["bur", "my", "Burmese"],
  ["byn", "", "Blin; Bilin"],
  ["cad", "", "Caddo"],
  ["cai", "", "Central American Indian languages"],
  ["car", "", "Galibi Carib"],
  ["cat", "ca", "Catalan; Valencian"],
  ["cau", "", "Caucasian languages"],
  ["ceb", "", "Cebuano"],
  ["cel", "", "Celtic languages"],
  ["cha", "ch", "Chamorro"],
  ["chb", "", "Chibcha"],
  ["che", "ce", "Chechen"],
  ["chg", "", "Chagatai"],
  ["chi", "zh", "Chinese"],
  ["chk", "", "Chuukese"],
  ["chm", "", "Mari"],
  ["chn", "", "Chinook jargon"],
  ["cho", "", "Choctaw"],
  ["chp", "", "Chipewyan; Dene Suline"],
  ["chr", "", "Cherokee"],
  ["chu", "cu", "Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic"],
  ["chv", "cv", "Chuvash"],
  ["chy", "", "Cheyenne"],
  ["cmc", "", "Chamic languages"],
  ["cop", "", "Coptic"],
  ["cor", "kw", "Cornish"],
  ["cos", "co", "Corsican"],
  ["cpe", "", "Creoles and pidgins, English based"],
  ["cpf", "", "Creoles and pidgins, French-based "],
  ["cpp", "", "Creoles and pidgins, Portuguese-based "],
  ["cre", "cr", "Cree"],
  ["crh", "", "Crimean Tatar; Crimean Turkish"],
  ["crp", "", "Creoles and pidgins "],
  ["csb", "", "Kashubian"],
  ["cus", "", "Cushitic languages"],
  ["cze", "cs", "Czech"],
  ["dak", "", "Dakota"],
  ["dan", "da", "Danish"],
  ["dar", "", "Dargwa"],
  ["day", "", "Land Dayak languages"],
  ["del", "", "Delaware"],
  ["den", "", "Slave (Athapascan)"],
  ["dgr", "", "Dogrib"],
  ["din", "", "Dinka"],
  ["div", "dv", "Divehi; Dhivehi; Maldivian"],
  ["doi", "", "Dogri"],
  ["dra", "", "Dravidian languages"],
  ["dsb", "", "Lower Sorbian"],
  ["dua", "", "Duala"],
  ["dum", "", "Dutch, Middle (ca.1050-1350)"],
  ["dut", "nl", "Dutch; Flemish"],
  ["dyu", "", "Dyula"],
  ["dzo", "dz", "Dzongkha"],
  ["efi", "", "Efik"],
  ["egy", "", "Egyptian (Ancient)"],
  ["eka", "", "Ekajuk"],
  ["elx", "", "Elamite"],
  ["eng", "en", "English"],
  ["enm", "", "English, Middle (1100-1500)"],
  ["epo", "eo", "Esperanto"],
  ["est", "et", "Estonian"],
  ["ewe", "ee", "Ewe"],
  ["ewo", "", "Ewondo"],
  ["fan", "", "Fang"],
  ["fao", "fo", "Faroese"],
  ["fat", "", "Fanti"],
  ["fij", "fj", "Fijian"],
  ["fil", "", "Filipino; Pilipino"],
  ["fin", "fi", "Finnish"],
  ["fiu", "", "Finno-Ugrian languages"],
  ["fon", "", "Fon"],
  ["fre", "fr", "French"],
  ["frm", "", "French, Middle (ca.1400-1600)"],
  ["fro", "", "French, Old (842-ca.1400)"],
  ["frr", "", "Northern Frisian"],
  ["frs", "", "Eastern Frisian"],
  ["fry", "fy", "Western Frisian"],
  ["ful", "ff", "Fulah"],
  ["fur", "", "Friulian"],
  ["gaa", "", "Ga"],
  ["gay", "", "Gayo"],
  ["gba", "", "Gbaya"],
  ["gem", "", "Germanic languages"],
  ["geo", "ka", "Georgian"],
  ["ger", "de", "German"],
  ["gez", "", "Geez"],
  ["gil", "", "Gilbertese"],
  ["gla", "gd", "Gaelic; Scottish Gaelic"],
  ["gle", "ga", "Irish"],
  ["glg", "gl", "Galician"],
  ["glv", "gv", "Manx"],
  ["gmh", "", "German, Middle High (ca.1050-1500)"],
  ["goh", "", "German, Old High (ca.750-1050)"],
  ["gon", "", "Gondi"],
  ["gor", "", "Gorontalo"],
  ["got", "", "Gothic"],
  ["grb", "", "Grebo"],
  ["grc", "", "Greek, Ancient (to 1453)"],
  ["gre", "el", "Greek, Modern (1453-)"],
  ["grn", "gn", "Guarani"],
  ["gsw", "", "Swiss German; Alemannic; Alsatian"],
  ["guj", "gu", "Gujarati"],
  ["gwi", "", "Gwich'in"],
  ["hai", "", "Haida"],
  ["hat", "ht", "Haitian; Haitian Creole"],
  ["hau", "ha", "Hausa"],
  ["haw", "", "Hawaiian"],
  ["heb", "he", "Hebrew"],
  ["her", "hz", "Herero"],
  ["hil", "", "Hiligaynon"],
  ["him", "", "Himachali languages; Western Pahari languages"],
  ["hin", "hi", "Hindi"],
  ["hit", "", "Hittite"],
  ["hmn", "", "Hmong; Mong"],
  ["hmo", "ho", "Hiri Motu"],
  ["hrv", "hr", "Croatian"],
  ["hsb", "", "Upper Sorbian"],
  ["hun", "hu", "Hungarian"],
  ["hup", "", "Hupa"],
  ["iba", "", "Iban"],
  ["ibo", "ig", "Igbo"],
  ["ice", "is", "Icelandic"],
  ["ido", "io", "Ido"],
  ["iii", "ii", "Sichuan Yi; Nuosu"],
  ["ijo", "", "Ijo languages"],
  ["iku", "iu", "Inuktitut"],
  ["ile", "ie", "Interlingue; Occidental"],
  ["ilo", "", "Iloko"],
  ["ina", "ia", "Interlingua (International Auxiliary Language Association)"],
  ["inc", "", "Indic languages"],
  ["ind", "id", "Indonesian"],
  ["ine", "", "Indo-European languages"],
  ["inh", "", "Ingush"],
  ["ipk", "ik", "Inupiaq"],
  ["ira", "", "Iranian languages"],
  ["iro", "", "Iroquoian languages"],
  ["ita", "it", "Italian"],
  ["jav", "jv", "Javanese"],
  ["jbo", "", "Lojban"],
  ["jpn", "ja", "Japanese"],
  ["jpr", "", "Judeo-Persian"],
  ["jrb", "", "Judeo-Arabic"],
  ["kaa", "", "Kara-Kalpak"],
  ["kab", "", "Kabyle"],
  ["kac", "", "Kachin; Jingpho"],
  ["kal", "kl", "Kalaallisut; Greenlandic"],
  ["kam", "", "Kamba"],
  ["kan", "kn", "Kannada"],
  ["kar", "", "Karen languages"],
  ["kas", "ks", "Kashmiri"],
  ["kau", "kr", "Kanuri"],
  ["kaw", "", "Kawi"],
  ["kaz", "kk", "Kazakh"],
  ["kbd", "", "Kabardian"],
  ["kha", "", "Khasi"],
  ["khi", "", "Khoisan languages"],
  ["khm", "km", "Central Khmer"],
  ["kho", "", "Khotanese; Sakan"],
  ["kik", "ki", "Kikuyu; Gikuyu"],
  ["kin", "rw", "Kinyarwanda"],
  ["kir", "ky", "Kirghiz; Kyrgyz"],
  ["kmb", "", "Kimbundu"],
  ["kok", "", "Konkani"],
  ["kom", "kv", "Komi"],
  ["kon", "kg", "Kongo"],
  ["kor", "ko", "Korean"],
  ["kos", "", "Kosraean"],
  ["kpe", "", "Kpelle"],
  ["krc", "", "Karachay-Balkar"],
  ["krl", "", "Karelian"],
  ["kro", "", "Kru languages"],
  ["kru", "", "Kurukh"],
  ["kua", "kj", "Kuanyama; Kwanyama"],
  ["kum", "", "Kumyk"],
  ["kur", "ku", "Kurdish"],
  ["kut", "", "Kutenai"],
  ["lad", "", "Ladino"],
  ["lah", "", "Lahnda"],
  ["lam", "", "Lamba"],
  ["lao", "lo", "Lao"],
  ["lat", "la", "Latin"],
  ["lav", "lv", "Latvian"],
  ["lez", "", "Lezghian"],
  ["lim", "li", "Limburgan; Limburger; Limburgish"],
  ["lin", "ln", "Lingala"],
  ["lit", "lt", "Lithuanian"],
  ["lol", "", "Mongo"],
  ["loz", "", "Lozi"],
  ["ltz", "lb", "Luxembourgish; Letzeburgesch"],
  ["lua", "", "Luba-Lulua"],
  ["lub", "lu", "Luba-Katanga"],
  ["lug", "lg", "Ganda"],
  ["lui", "", "Luiseno"],
  ["lun", "", "Lunda"],
  ["luo", "", "Luo (Kenya and Tanzania)"],
  ["lus", "", "Lushai"],
  ["mac", "mk", "Macedonian"],
  ["mad", "", "Madurese"],
  ["mag", "", "Magahi"],
  ["mah", "mh", "Marshallese"],
  ["mai", "", "Maithili"],
  ["mak", "", "Makasar"],
  ["mal", "ml", "Malayalam"],
  ["man", "", "Mandingo"],
  ["mao", "mi", "Maori"],
  ["map", "", "Austronesian languages"],
  ["mar", "mr", "Marathi"],
  ["mas", "", "Masai"],
  ["may", "ms", "Malay"],
  ["mdf", "", "Moksha"],
  ["mdr", "", "Mandar"],
  ["men", "", "Mende"],
  ["mga", "", "Irish, Middle (900-1200)"],
  ["mic", "", "Mi'kmaq; Micmac"],
  ["min", "", "Minangkabau"],
  ["mis", "", "Uncoded languages"],
  ["mkh", "", "Mon-Khmer languages"],
  ["mlg", "mg", "Malagasy"],
  ["mlt", "mt", "Maltese"],
  ["mnc", "", "Manchu"],
  ["mni", "", "Manipuri"],
  ["mno", "", "Manobo languages"],
  ["moh", "", "Mohawk"],
  ["mon", "mn", "Mongolian"],
  ["mos", "", "Mossi"],
  ["mul", "", "Multiple languages"],
  ["mun", "", "Munda languages"],
  ["mus", "", "Creek"],
  ["mwl", "", "Mirandese"],
  ["mwr", "", "Marwari"],
  ["myn", "", "Mayan languages"],
  ["myv", "", "Erzya"],
  ["nah", "", "Nahuatl languages"],
  ["nai", "", "North American Indian languages"],
  ["nap", "", "Neapolitan"],
  ["nau", "na", "Nauru"],
  ["nav", "nv", "Navajo; Navaho"],
  ["nbl", "nr", "Ndebele, South; South Ndebele"],
  ["nde", "nd", "Ndebele, North; North Ndebele"],
  ["ndo", "ng", "Ndonga"],
  ["nds", "", "Low German; Low Saxon; German, Low; Saxon, Low"],
  ["nep", "ne", "Nepali"],
  ["new", "", "Nepal Bhasa; Newari"],
  ["nia", "", "Nias"],
  ["nic", "", "Niger-Kordofanian languages"],
  ["niu", "", "Niuean"],
  ["nno", "nn", "Norwegian Nynorsk; Nynorsk, Norwegian"],
  ["nob", "nb", "Bokmål, Norwegian; Norwegian Bokmål"],
  ["nog", "", "Nogai"],
  ["non", "", "Norse, Old"],
  ["nor", "no", "Norwegian"],
  ["nqo", "", "N'Ko"],
  ["nso", "", "Pedi; Sepedi; Northern Sotho"],
  ["nub", "", "Nubian languages"],
  ["nwc", "", "Classical Newari; Old Newari; Classical Nepal Bhasa"],
  ["nya", "ny", "Chichewa; Chewa; Nyanja"],
  ["nym", "", "Nyamwezi"],
  ["nyn", "", "Nyankole"],
  ["nyo", "", "Nyoro"],
  ["nzi", "", "Nzima"],
  ["oci", "oc", "Occitan (post 1500); Provençal"],
  ["oji", "oj", "Ojibwa"],
  ["ori", "or", "Oriya"],
  ["orm", "om", "Oromo"],
  ["osa", "", "Osage"],
  ["oss", "os", "Ossetian; Ossetic"],
  ["ota", "", "Turkish, Ottoman (1500-1928)"],
  ["oto", "", "Otomian languages"],
  ["paa", "", "Papuan languages"],
  ["pag", "", "Pangasinan"],
  ["pal", "", "Pahlavi"],
  ["pam", "", "Pampanga; Kapampangan"],
  ["pan", "pa", "Panjabi; Punjabi"],
  ["pap", "", "Papiamento"],
  ["pau", "", "Palauan"],
  ["peo", "", "Persian, Old (ca.600-400 B.C.)"],
  ["per", "fa", "Persian"],
  ["phi", "", "Philippine languages"],
  ["phn", "", "Phoenician"],
  ["pli", "pi", "Pali"],
  ["pol", "pl", "Polish"],
  ["pon", "", "Pohnpeian"],
  ["por", "pt", "Portuguese"],
  ["pra", "", "Prakrit languages"],
  ["pro", "", "Provençal, Old (to 1500)"],
  ["pus", "ps", "Pushto; Pashto"],
  ["qaa-qtz", "", "Reserved for local use"],
  ["que", "qu", "Quechua"],
  ["raj", "", "Rajasthani"],
  ["rap", "", "Rapanui"],
  ["rar", "", "Rarotongan; Cook Islands Maori"],
  ["roa", "", "Romance languages"],
  ["roh", "rm", "Romansh"],
  ["rom", "", "Romany"],
  ["rum", "ro", "Romanian; Moldavian; Moldovan"],
  ["run", "rn", "Rundi"],
  ["rup", "", "Aromanian; Arumanian; Macedo-Romanian"],
  ["rus", "ru", "Russian"],
  ["sad", "", "Sandawe"],
  ["sag", "sg", "Sango"],
  ["sah", "", "Yakut"],
  ["sai", "", "South American Indian (Other)"],
  ["sal", "", "Salishan languages"],
  ["sam", "", "Samaritan Aramaic"],
  ["san", "sa", "Sanskrit"],
  ["sas", "", "Sasak"],
  ["sat", "", "Santali"],
  ["scn", "", "Sicilian"],
  ["sco", "", "Scots"],
  ["sel", "", "Selkup"],
  ["sem", "", "Semitic languages"],
  ["sga", "", "Irish, Old (to 900)"],
  ["sgn", "", "Sign Languages"],
  ["shn", "", "Shan"],
  ["sid", "", "Sidamo"],
  ["sin", "si", "Sinhala; Sinhalese"],
  ["sio", "", "Siouan languages"],
  ["sit", "", "Sino-Tibetan languages"],
  ["sla", "", "Slavic languages"],
  ["slo", "sk", "Slovak"],
  ["slv", "sl", "Slovenian"],
  ["sma", "", "Southern Sami"],
  ["sme", "se", "Northern Sami"],
  ["smi", "", "Sami languages"],
  ["smj", "", "Lule Sami"],
  ["smn", "", "Inari Sami"],
  ["smo", "sm", "Samoan"],
  ["sms", "", "Skolt Sami"],
  ["sna", "sn", "Shona"],
  ["snd", "sd", "Sindhi"],
  ["snk", "", "Soninke"],
  ["sog", "", "Sogdian"],
  ["som", "so", "Somali"],
  ["son", "", "Songhai languages"],
  ["sot", "st", "Sotho, Southern"],
  ["spa", "es", "Spanish; Castilian"],
  ["srd", "sc", "Sardinian"],
  ["srn", "", "Sranan Tongo"],
  ["srp", "sr", "Serbian"],
  ["srr", "", "Serer"],
  ["ssa", "", "Nilo-Saharan languages"],
  ["ssw", "ss", "Swati"],
  ["suk", "", "Sukuma"],
  ["sun", "su", "Sundanese"],
  ["sus", "", "Susu"],
  ["sux", "", "Sumerian"],
  ["swa", "sw", "Swahili"],
  ["swe", "sv", "Swedish"],
  ["syc", "", "Classical Syriac"],
  ["syr", "", "Syriac"],
  ["tah", "ty", "Tahitian"],
  ["tai", "", "Tai languages"],
  ["tam", "ta", "Tamil"],
  ["tat", "tt", "Tatar"],
  ["tel", "te", "Telugu"],
  ["tem", "", "Timne"],
  ["ter", "", "Tereno"],
  ["tet", "", "Tetum"],
  ["tgk", "tg", "Tajik"],
  ["tgl", "tl", "Tagalog"],
  ["tha", "th", "Thai"],
  ["tib", "bo", "Tibetan"],
  ["tig", "", "Tigre"],
  ["tir", "ti", "Tigrinya"],
  ["tiv", "", "Tiv"],
  ["tkl", "", "Tokelau"],
  ["tlh", "", "Klingon; tlhIngan-Hol"],
  ["tli", "", "Tlingit"],
  ["tmh", "", "Tamashek"],
  ["tog", "", "Tonga (Nyasa)"],
  ["ton", "to", "Tonga (Tonga Islands)"],
  ["tpi", "", "Tok Pisin"],
  ["tsi", "", "Tsimshian"],
  ["tsn", "tn", "Tswana"],
  ["tso", "ts", "Tsonga"],
  ["tuk", "tk", "Turkmen"],
  ["tum", "", "Tumbuka"],
  ["tup", "", "Tupi languages"],
  ["tur", "tr", "Turkish"],
  ["tut", "", "Altaic languages"],
  ["tvl", "", "Tuvalu"],
  ["twi", "tw", "Twi"],
  ["tyv", "", "Tuvinian"],
  ["udm", "", "Udmurt"],
  ["uga", "", "Ugaritic"],
  ["uig", "ug", "Uighur; Uyghur"],
  ["ukr", "uk", "Ukrainian"],
  ["umb", "", "Umbundu"],
  ["und", "", "Undetermined"],
  ["urd", "ur", "Urdu"],
  ["uzb", "uz", "Uzbek"],
  ["vai", "", "Vai"],
  ["ven", "ve", "Venda"],
  ["vie", "vi", "Vietnamese"],
  ["vol", "vo", "Volapük"],
  ["vot", "", "Votic"],
  ["wak", "", "Wakashan languages"],
  ["wal", "", "Walamo"],
  ["war", "", "Waray"],
  ["was", "", "Washo"],
  ["wel", "cy", "Welsh"],
  ["wen", "", "Sorbian languages"],
  ["wln", "wa", "Walloon"],
  ["wol", "wo", "Wolof"],
  ["xal", "", "Kalmyk; Oirat"],
  ["xho", "xh", "Xhosa"],
  ["yao", "", "Yao"],
  ["yap", "", "Yapese"],
  ["yid", "yi", "Yiddish"],
  ["yor", "yo", "Yoruba"],
  ["ypk", "", "Yupik languages"],
  ["zap", "", "Zapotec"],
  ["zbl", "", "Blissymbols; Blissymbolics; Bliss"],
  ["zen", "", "Zenaga"],
  ["zgh", "", "Standard Moroccan Tamazight"],
  ["zha", "za", "Zhuang; Chuang"],
  ["znd", "", "Zande languages"],
  ["zul", "zu", "Zulu"],
  ["zun", "", "Zuni"],
  ["zxx", "", "No linguistic content; Not applicable"],
  ["zza", "", "Zaza; Dimili; Dimli; Kirdki; Kirmanjki; Zazaki"]
]
export default langCodes;