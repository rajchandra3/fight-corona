const variables = {
    "AVAILABLE_LANGUAGES": {
        hindi: {
            name: 'HINDI',
            label: 'हिंदी',
            iso_name: 'hi'
        },
        english: {
            name: 'ENGLISH',
            label: 'English',
            iso_name: 'en'
        },
        bengali: {
            name: 'BENGALI',
            label: 'বাংলা',
            iso_name: 'bn'
        },
        tamil: {
            name: 'TAMIL',
            label: 'தமிழ்',
            iso_name: 'ta'
        },
        telgue: {
            name: 'TELGUE',
            label: 'తెలుగు',
            iso_name: 'te'
        },
        punjabi: {
            name: 'PUNJABI',
            label: 'ਪੰਜਾਬੀ',
            iso_name: 'pa'
        },
        marathi: {
            name: 'MARATHI',
            label: 'मराठी',
            iso_name: 'ma'
        },
        malayalam: {
            name: 'MALAYALAM',
            label: 'മലയാളം',
            iso_name: 'ml'
        },
        urdu: {
            name: 'URDU',
            label: 'اردو',
            iso_name: 'ur'
        }
    },
    "TITLE": {
        HINDI: "कोरोनावायरस जागरूकता अभियान",
        ENGLISH: "Coronavirus Awareness Campaign",
        BENGALI: "করোনাভাইরাস সচেতনতা প্রচারণা",
        TAMIL: "கொரோனா வைரஸ் விழிப்புணர்வு பிரச்சாரம்",
        TELGUE: "కరోనావైరస్ అవగాహన ప్రచారం",
        PUNJABI: "ਕੋਰੋਨਾਵਾਇਰਸ ਜਾਗਰੂਕਤਾ ਅਭਿਆਨ",
        MARATHI: "कोरोनाव्हायरस जागरूकता अभियान",
        MALAYALAM: "കൊറോണ വൈറസ് ബോധവൽക്കരണ കാമ്പെയ്‌ൻ",
        URDU: "کورونا وائرس سے آگاہی مہم"
    },
    "DESCRIPTION": {
        HINDI: "कोरोनावायरस एक घातक बीमारी है और डब्ल्यूएचओ द्वारा एक महामारी घोषित की जाती है। हमारा कर्तव्य है कि कोरोनावायरस के बारे में जागरूकता की देखभाल करें ताकि महामारी को जल्द से जल्द रोका जा सके। यह वेबसाइट अपनी क्षेत्रीय भाषाओं में महामारी के बारे में लाइव अपडेट प्रदान करेगी।",
        ENGLISH: "Coronavirus is a deadly disease and is declared an epidemic by WHO. It is our duty to create awareness about coronaviruses so that the epidemic is prevented as soon as possible. This website will provide live updates about the epidemic in its regional languages.",
        BENGALI: "করোনোভাইরাস একটি মারাত্মক রোগ এবং ডাব্লুএইচও দ্বারা একটি মহামারী হিসাবে ঘোষণা করা হয়েছে। করোনাভাইরাস সম্পর্কে সচেতনতা তৈরি করা আমাদের কর্তব্য যাতে মহামারীটি যত তাড়াতাড়ি সম্ভব প্রতিরোধ করা হয়। এই ওয়েবসাইটটি এর আঞ্চলিক ভাষায় মহামারী সম্পর্কে লাইভ আপডেট সরবরাহ করবে।",
        TAMIL: "கொரோனோவைரஸ் ஒரு கொடிய நோய் மற்றும் WHO ஆல் ஒரு தொற்றுநோயாக அறிவிக்கப்படுகிறது. கொரோனா வைரஸ்கள் குறித்த விழிப்புணர்வை ஏற்படுத்துவது நமது கடமையாகும், இதனால் தொற்றுநோய் விரைவில் தடுக்கப்படுகிறது. இந்த வலைத்தளம் அதன் பிராந்திய மொழிகளில் தொற்றுநோய் பற்றிய நேரடி புதுப்பிப்புகளை வழங்கும்.",
        TELGUE: "కరోనోవైరస్ ఒక ప్రాణాంతక వ్యాధి మరియు దీనిని WHO ఒక అంటువ్యాధిగా ప్రకటించింది. కరోనావైరస్ల గురించి అవగాహన కల్పించడం మన కర్తవ్యం, తద్వారా అంటువ్యాధి వీలైనంత త్వరగా నివారించబడుతుంది. ఈ వెబ్‌సైట్ దాని ప్రాంతీయ భాషలలో అంటువ్యాధి గురించి ప్రత్యక్ష నవీకరణలను అందిస్తుంది.",
        PUNJABI: "ਕੋਰੋਨਾਵਾਇਰਸ ਇੱਕ ਘਾਤਕ ਬਿਮਾਰੀ ਹੈ ਅਤੇ WHO ਦੁਆਰਾ ਇੱਕ ਮਹਾਂਮਾਰੀ ਘੋਸ਼ਿਤ ਕੀਤੀ ਗਈ ਹੈ. ਕੋਰੋਨਵਾਇਰਸ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਪੈਦਾ ਕਰਨਾ ਸਾਡਾ ਫਰਜ਼ ਬਣਦਾ ਹੈ ਤਾਂ ਜੋ ਮਹਾਂਮਾਰੀ ਨੂੰ ਜਲਦੀ ਤੋਂ ਜਲਦੀ ਰੋਕਿਆ ਜਾ ਸਕੇ. ਇਹ ਵੈਬਸਾਈਟ ਆਪਣੀਆਂ ਖੇਤਰੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਮਹਾਂਮਾਰੀ ਬਾਰੇ ਲਾਈਵ ਅਪਡੇਟਾਂ ਪ੍ਰਦਾਨ ਕਰੇਗੀ.",
        MARATHI: "कोरोनाव्हायरस हा एक प्राणघातक रोग आहे आणि डब्ल्यूएचओने एक साथीचा रोग जाहीर केला आहे. कोरोनाव्हायरस बद्दल जागरूकता निर्माण करणे आपले कर्तव्य आहे जेणेकरुन साथीचा रोग लवकरात लवकर रोखता येईल. ही वेबसाइट त्याच्या प्रादेशिक भाषांमध्ये साथीच्या विषयी लाइव्ह अद्यतने प्रदान करेल.",
        MALAYALAM: "കൊറോണ വൈറസ് ഒരു മാരകമായ രോഗമാണ്, ഇത് ലോകാരോഗ്യ സംഘടന ഒരു പകർച്ചവ്യാധിയായി പ്രഖ്യാപിച്ചിരിക്കുന്നു. കൊറോണ വൈറസുകളെക്കുറിച്ച് അവബോധം സൃഷ്ടിക്കേണ്ടത് നമ്മുടെ കടമയാണ്, അതിനാൽ പകർച്ചവ്യാധി എത്രയും വേഗം തടയാം. ഈ വെബ്‌സൈറ്റ് അതിന്റെ പ്രാദേശിക ഭാഷകളിൽ പകർച്ചവ്യാധിയെക്കുറിച്ചുള്ള തത്സമയ വിവരങ്ങൾ നൽകുന്നു.",
        URDU: "کورونا وائرس ایک مہلک بیماری ہے اور اسے ڈبلیو ایچ او نے ایک وبا قرار دیا ہے۔ ہمارا فرض ہے کہ ہم کورونا وائرس کے بارے میں شعور پیدا کریں تاکہ وبا کو جلد سے جلد روک لیا جاسکے۔ یہ ویب سائٹ اپنی علاقائی زبانوں میں وبا کے بارے میں رواں تازہ ترین معلومات فراہم کرے گی۔"
    },
    "SUB_TITLE": {
        HINDI: "(भारत पर केंद्रित)",
        ENGLISH: "(Focused on India)",
        BENGALI: "(ভারতকে কেন্দ্র করে)",
        TAMIL: "(இந்தியா மீது கவனம் செலுத்தியது)",
        TELGUE: "భారతదేశంపై దృష్టి పెట్టారు",
        PUNJABI: "ਭਾਰਤ 'ਤੇ ਕੇਂਦਰਤ",
        MARATHI: "(भारतावर केंद्रित)",
        MALAYALAM: "(പ്രധാനമായി ഇന്ത്യക്ക് വേണ്ടി)",
        URDU: "(ہندوستان پر توجہ مرکوز)"
    },
    LANGUAGE: {
        HINDI: "भाषा",
        ENGLISH: "Language",
        BENGALI: "ভাষা",
        TAMIL: "மொழி",
        TELGUE: "భాషా",
        PUNJABI: "ਭਾਸ਼ਾ",
        MARATHI: "भाषा",
        MALAYALAM: "ഭാഷ",
        URDU: "زبان"
    },
    INDIAN_STATS_TABLE: {
        STATE: {
            HINDI: "राज्य",
            ENGLISH: "State",
            BENGALI: "রাষ্ট্র",
            TAMIL: "நிலை",
            TELGUE: "రాష్ట్రం",
            PUNJABI: "ਰਾਜ",
            MARATHI: "राज्य",
            MALAYALAM: "സംസ്ഥാനം",
            URDU: "حالت"
        },
        INDIANS: {
            HINDI: "भारतीय",
            ENGLISH: "Indian",
            BENGALI: "ভারতীয়",
            TAMIL: "இந்தியன்",
            TELGUE: "భారత",
            PUNJABI: "ਭਾਰਤੀ",
            MARATHI: "भारतीय",
            MALAYALAM: "ഇന്ത്യക്കാർ",
            URDU: "ہندوستانی"
        },
        FOREIGNERS: {
            HINDI: "विदेशी",
            ENGLISH: "Foreigners",
            BENGALI: "বিদেশীদের",
            TAMIL: "வெளிநாட்டினர்",
            TELGUE: "విదేశీయులు",
            PUNJABI: "ਵਿਦੇਸ਼ੀ",
            MARATHI: "परदेशी",
            MALAYALAM: "വിദേശികൾ",
            URDU: "غیر ملکیوں"
        },
        DEATHS: {
            HINDI: "मृत्यु",
            ENGLISH: "Deaths",
            BENGALI: "মৃত্যু",
            TAMIL: "இறப்புகள்",
            TELGUE: "మరణాలు",
            PUNJABI: "ਮੌਤ",
            MARATHI: "मृत्यू",
            MALAYALAM: "മരണങ്ങൾ",
            URDU: "اموات"
        }
    },
    "GLOBAL_STATUS_HEADLINE": {
        HINDI: "विश्व भर में महामारी की स्थिति",
        ENGLISH: "Worldwide Epidemic Updates",
        BENGALI: "বিশ্বব্যাপী মহামারী আপডেট",
        TAMIL: "உலகளாவிய தொற்றுநோய் புதுப்பிப்புகள்",
        TELGUE: "ప్రపంచవ్యాప్త అంటువ్యాధి నవీకరణలు",
        PUNJABI: "ਵਿਸ਼ਵਵਿਆਪੀ ਮਹਾਮਾਰੀ ਦੇ ਅਪਡੇਟਸ",
        MARATHI: "जगभरातील साथीचे अद्यतने",
        MALAYALAM: "ലോകമെമ്പാടുമുള്ള പകർച്ചവ്യാധി വിവരങ്ങൾ",
        URDU: "دنیا بھر میں وبا کی تازہ ترین خبریں"
    },
    "GLOBAL_STATUS_TOTAL_NEW_CASES": {
        HINDI: "आज कुल नए मामले",
        ENGLISH: "total new cases today",
        BENGALI: "আজ মোট নতুন মামলা",
        TAMIL: "இன்று மொத்த புதிய வழக்குகள்",
        TELGUE: "ఈ రోజు మొత్తం కొత్త కేసులు",
        PUNJABI: "ਅੱਜ ਕੁੱਲ ਨਵੇਂ ਕੇਸ",
        MARATHI: "आज एकूण नवीन प्रकरणे",
        MALAYALAM: "ഇന്നത്തെ പുതിയ കേസുകൾ",
        URDU: "آج کل نئے مقدمات"
    },
    "GLOBAL_STATUS_TOTAL_NEW_DEATHS": {
        HINDI: "आज कुल नई मौतें",
        ENGLISH: "new deaths today",
        BENGALI: "আজ নতুন মৃত্যু",
        TAMIL: "இன்று புதிய மரணங்கள்",
        TELGUE: "ఈ రోజు కొత్త మరణాలు",
        PUNJABI: "ਅੱਜ ਨਵੀਂ ਮੌਤ",
        MARATHI: "आज नवीन मृत्यू",
        MALAYALAM: "ഇന്നത്തെ പുതിയ മരണങ്ങൾ",
        URDU: "آج نئی اموات"
    },
    "GLOBAL_STATUS_TOTAL_DEATHS": {
        HINDI: "अब तक कुल मौतें",
        ENGLISH: "total deaths",
        BENGALI: "মোট মৃত্যু",
        TAMIL: "மொத்த இறப்புகள்",
        TELGUE: "మొత్తం మరణాలు",
        PUNJABI: "ਕੁੱਲ ਮੌਤ",
        MARATHI: "एकूण मृत्यू",
        MALAYALAM: "ആകെ മരണങ്ങൾ",
        URDU: "کل اموات"
    },
    "GLOBAL_STATUS_TOTAL_SERIOUS": {
        HINDI: "कुल गंभीर मामले",
        ENGLISH: "total serious cases",
        BENGALI: "মোট গুরুতর মামলা",
        TAMIL: "மொத்த தீவிர வழக்குகள்",
        TELGUE: "మొత్తం తీవ్రమైన కేసులు",
        PUNJABI: "ਕੁੱਲ ਗੰਭੀਰ ਮਾਮਲੇ",
        MARATHI: "एकूण गंभीर प्रकरणे",
        MALAYALAM: "ആകെ ഗുരുതരമായ കേസുകൾ",
        URDU: "کل سنگین مقدمات"
    },
    "GLOBAL_STATUS_TOTAL_CASES": {
        HINDI: "अब तक कुल मामले",
        ENGLISH: "total cases",
        BENGALI: "মোট মামলা",
        TAMIL: "மொத்த வழக்குகள்",
        TELGUE: "మొత్తం కేసులు",
        PUNJABI: "ਕੁੱਲ ਕੇਸ",
        MARATHI: "एकूण प्रकरणे",
        MALAYALAM: "ആകെ കേസുകൾ",
        URDU: "کل معاملات"
    },
    "GLOBAL_STATUS_TOTAL_ACTIVE": {
        HINDI: "कुल सक्रिय मामले",
        ENGLISH: "total active cases",
        BENGALI: "মোট সক্রিয় কেস",
        TAMIL: "மொத்த செயலில் உள்ள வழக்குகள்",
        TELGUE: "మొత్తం క్రియాశీల కేసులు",
        PUNJABI: "ਕੁੱਲ ਕਿਰਿਆਸ਼ੀਲ ਮਾਮਲੇ",
        MARATHI: "एकूण सक्रिय प्रकरणे",
        MALAYALAM: "ആകെ സജീവമായ കേസുകൾ",
        URDU: "کل فعال معاملات"
    },
    "GLOBAL_STATUS_TOTAL_RECOVERED": {
        HINDI: "कुल स्वस्थ हो चुके मरीज",
        ENGLISH: "total recovered",
        BENGALI: "মোট পুনরুদ্ধার",
        TAMIL: "மொத்தம் மீட்கப்பட்டது",
        TELGUE: "మొత్తం కోలుకుంది",
        PUNJABI: "ਕੁੱਲ ਬਰਾਮਦ",
        MARATHI: "एकूण वसूल",
        MALAYALAM: "ആകെ ഭേദപ്പെട്ട കേസുകൾ",
        URDU: "کل بازیافت"
    },
    "GLOBAL_STATUS_TOTAL_UNRESOLVED": {
        HINDI: "कुल अनसुलझे मामले",
        ENGLISH: "total unresolved",
        BENGALI: "মোট অমীমাংসিত",
        TAMIL: "மொத்தம் தீர்க்கப்படாதது",
        TELGUE: "మొత్తం పరిష్కరించబడలేదు",
        PUNJABI: "ਕੁੱਲ ਅਣਸੁਲਝਿਆ",
        MARATHI: "एकूण निराकरण न केलेले",
        MALAYALAM: "ആകെ പരിഹരിക്കപ്പെടാത്ത കേസുകൾ",
        URDU: "کل حل طلب"
    },
    "COUNTRY_STATUS_HEADLINE": {
        HINDI: "देश भर में महामारी की स्थिति",
        ENGLISH: "Country Wide Pandemic Updates",
        BENGALI: "কান্ট্রি ওয়াইড মহামারী আপডেট",
        TAMIL: "நாடு முழுவதும் தொற்றுநோய் புதுப்பிப்புகள்",
        TELGUE: "కంట్రీ వైడ్ పాండమిక్ నవీకరణలు",
        PUNJABI: "ਦੇਸ਼ ਵਿਆਪੀ ਮਹਾਂਮਾਰੀ ਸੰਬੰਧੀ ਅਪਡੇਟਾਂ",
        MARATHI: "देशव्यापी साथीचा रोग सर्व देशभर असलेल्या अद्यतने",
        MALAYALAM: "രാജ്യവാപകമായ പകർച്ചവ്യാധി വിവരങ്ങൾ",
        URDU: "کنٹری وائڈ وبائی امور"
    },
    "COUNTRY_STATUS_NEW_CASES": {
        HINDI: "आज कुल नए मामले",
        ENGLISH: "new cases today",
        BENGALI: "আজ নতুন মামলা",
        TAMIL: "இன்று புதிய வழக்குகள்",
        TELGUE: "ఈ రోజు కొత్త కేసులు",
        PUNJABI: "ਅੱਜ ਨਵੇਂ ਕੇਸ",
        MARATHI: "आज नवीन प्रकरणे",
        MALAYALAM: "ഇന്നത്തെ പുതിയ കേസുകൾ",
        URDU: "آج کل اموات"
    },
    "COUNTRY_STATUS_NEW_DEATHS": {
        HINDI: "आज कुल नई मौतें",
        ENGLISH: "total deaths today",
        BENGALI: "আজ মোট মৃত্যু",
        TAMIL: "இன்று மொத்த இறப்புகள்",
        TELGUE: "ఈ రోజు మొత్తం మరణాలు",
        PUNJABI: "ਕੁੱਲ ਮੌਤ ਅੱਜ",
        MARATHI: "आज एकूण मृत्यू",
        MALAYALAM: "ഇന്നത്തെ പുതിയ മരണങ്ങൾ",
        URDU: "آج کل اموات"
    },
    "COUNTRY_STATUS_TOTAL_DEATHS": {
        HINDI: "अब तक कुल मौतें",
        ENGLISH: "total deaths",
        BENGALI: "মোট মৃত্যু",
        TAMIL: "மொத்த இறப்புகள்",
        TELGUE: "మొత్తం మరణాలు",
        PUNJABI: "ਕੁੱਲ ਮੌਤ",
        MARATHI: "एकूण मृत्यू",
        MALAYALAM: "ആകെ മരണങ്ങൾ",
        URDU: "کل اموات"
    },
    "COUNTRY_STATUS_TOTAL_SERIOUS": {
        HINDI: "कुल गंभीर मामले",
        ENGLISH: "total serious cases",
        BENGALI: "মোট গুরুতর মামলা",
        TAMIL: "மொத்த தீவிர வழக்குகள்",
        TELGUE: "మొత్తం తీవ్రమైన కేసులు",
        PUNJABI: "ਕੁੱਲ ਗੰਭੀਰ ਮਾਮਲੇ",
        MARATHI: "एकूण गंभीर प्रकरणे",
        MALAYALAM: "ആകെ ഗുരുതരമായ കേസുകൾ",
        URDU: "کل سنگین مقدمات"
    },
    "COUNTRY_STATUS_TOTAL_CASES": {
        HINDI: "अब तक कुल मामले",
        ENGLISH: "total cases",
        BENGALI: "মোট মামলা",
        TAMIL: "மொத்த வழக்குகள்",
        TELGUE: "మొత్తం కేసులు",
        PUNJABI: "ਕੁੱਲ ਕੇਸ",
        MARATHI: "एकूण प्रकरणे",
        MALAYALAM: "ആകെ കേസുകൾ",
        URDU: "حل معاملات"
    },
    "COUNTRY_STATUS_TOTAL_ACTIVE": {
        HINDI: "कुल सक्रिय मामले",
        ENGLISH: "total active cases",
        BENGALI: "মোট সক্রিয় কেস",
        TAMIL: "மொத்த செயலில் உள்ள வழக்குகள்",
        TELGUE: "మొత్తం క్రియాశీల కేసులు",
        PUNJABI: "ਕੁੱਲ ਕਿਰਿਆਸ਼ੀਲ ਮਾਮਲੇ",
        MARATHI: "एकूण सक्रिय प्रकरणे",
        MALAYALAM: "ആകെ സജീവ കേസുകൾ",
        URDU: "کل حل طلب معاملات"
    },
    "COUNTRY_STATUS_TOTAL_RECOVERED": {
        HINDI: "कुल स्वस्थ हो चुके मरीज",
        ENGLISH: "total recovered cases",
        BENGALI: "মোট পুনরুদ্ধার মামলা",
        TAMIL: "மொத்த மீட்கப்பட்ட வழக்குகள்",
        TELGUE: "మొత్తం కోలుకున్న కేసులు",
        PUNJABI: "ਕੁੱਲ ਬਰਾਮਦ ਕੇਸ",
        MARATHI: "एकूण वसूल प्रकरणे",
        MALAYALAM: "ആകെ ഭേദപ്പെട്ട കേസുകൾ",
        URDU: "کل حل طلب معاملات"
    },
    "COUNTRY_STATUS_TOTAL_UNRESOLVED": {
        HINDI: "कुल अनसुलझे मामले",
        ENGLISH: "total unresolved cases",
        BENGALI: "মোট অমীমাংসিত কেস",
        TAMIL: "தீர்க்கப்படாத மொத்த வழக்குகள்",
        TELGUE: "మొత్తం పరిష్కరించని కేసులు",
        PUNJABI: "ਕੁੱਲ ਅਣਸੁਲਝੇ ਕੇਸ",
        MARATHI: "एकूण निराकरण न केलेली प्रकरणे",
        MALAYALAM: "മൊത്തം അസുഖം ഭേദപ്പെട്ട കേസുകൾ",
        URDU: "کل حل طلب معاملات"
    },
    "COUNTRY_TIMELINE_HEADLINE": {
        HINDI: "देशभर में महामारी का दैनिक घटनाक्रम",
        ENGLISH: "Countrywide pandemic spread timeline",
        BENGALI: "দেশব্যাপী মহামারী ছড়িয়ে টাইমলাইন",
        TAMIL: "நாடு தழுவிய தொற்றுநோய் பரவல் காலவரிசை",
        TELGUE: "దేశవ్యాప్తంగా మహమ్మారి వ్యాప్తి కాలక్రమం",
        PUNJABI: "ਦੇਸ਼ ਵਿਆਪੀ ਮਹਾਂਮਾਰੀ ਫੈਲਣ ਦੀ ਟਾਈਮਲਾਈਨ",
        MARATHI: "देशव्यापी साथीच्या रोगाचा प्रसार टाइमलाइन",
        MALAYALAM: "രാജ്യവാപകമായി പടരുന്നതിന്റെ സമയരേഖ",
        URDU: "ملک بھر میں وبائی امراض پھیلانے کی ٹائم لائن"
    },
    "CHART": {
        TITLE: {
            HINDI: "यह भारत में कोरोनावायरस के प्रसार की घटनाक्रम है।",
            ENGLISH: "This is a timeline to show the spread of Coronavirus in India",
            BENGALI: "এটি ভারতে করোনাভাইরাস ছড়িয়ে দেওয়ার সময়সীমা",
            TAMIL: "இந்தியாவில் கொரோனா வைரஸ் பரவுவதைக் காட்ட இது ஒரு காலவரிசை",
            TELGUE: "భారతదేశంలో కరోనావైరస్ యొక్క వ్యాప్తిని చూపించడానికి ఇది ఒక కాలక్రమం",
            PUNJABI: "ਇਹ ਭਾਰਤ ਵਿੱਚ ਕੋਰੋਨਾਵਾਇਰਸ ਦੇ ਫੈਲਣ ਨੂੰ ਦਰਸਾਉਣ ਲਈ ਇੱਕ ਸਮਾਂ ਰੇਖਾ ਹੈ",
            MARATHI: "कोरोनाव्हायरसचा प्रसार भारतात दर्शविण्याची ही टाइमलाइन आहे",
            MALAYALAM: "ഇന്ത്യയിൽ കൊറോണ വൈറസിന്റെ വ്യാപനത്തിന്റെ വികാസമാണിത്.",
            URDU: "یہ ہندوستان میں کورونا وائرس کے پھیلاؤ کو ظاہر کرنے کے لئے ایک ٹائم لائن ہے"
        },
        SOURCE: {
            HINDI: "",
            ENGLISH: "",
            BENGALI: "",
            TAMIL: "",
            TELGUE: "",
            PUNJABI: "",
            MARATHI: "",
            MALAYALAM: "",
            URDU: ""
        },
        SERIES_NAME: {
            HINDI: "संक्रमित मामले",
            ENGLISH: "Infected cases",
            BENGALI: "সংক্রামিত মামলা",
            TAMIL: "பாதிக்கப்பட்ட வழக்குகள்",
            TELGUE: "సోకిన కేసులు",
            PUNJABI: "ਸੰਕਰਮਿਤ ਕੇਸ",
            MARATHI: "संक्रमित प्रकरणे",
            MALAYALAM: "രോഗം ബാധിച്ച കേസുകൾ",
            URDU: "متاثرہ معاملات"
        },
        DESCRIPTION: {
            HINDI: "यह चार्ट दर्शाता है कि भारत में संक्रमित लोगों की गिनती में रुझान बढ़ा है।",
            ENGLISH: "This chart shows the trend in infected people count has increased in India.",
            BENGALI: "এই চার্টটি দেখায় যে ভারতে সংক্রামিত মানুষের সংখ্যা কত বৃদ্ধি পেয়েছে।",
            TAMIL: "இந்த விளக்கப்படம் இந்தியாவில் பாதிக்கப்பட்டவர்களின் எண்ணிக்கை அதிகரித்துள்ளது என்பதைக் காட்டுகிறது.",
            TELGUE: "ఈ చార్ట్ భారతదేశంలో సోకిన వారి సంఖ్య పెరిగినట్లు చూపిస్తుంది.",
            PUNJABI: "ਇਹ ਚਾਰਟ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਸੰਕਰਮਿਤ ਲੋਕਾਂ ਦੀ ਗਿਣਤੀ ਭਾਰਤ ਵਿੱਚ ਵੱਧ ਗਈ ਹੈ।",
            MARATHI: "हा चार्ट दर्शवितो की संक्रमित लोकांची संख्या भारतात वाढली आहे.",
            MALAYALAM: "ഇന്ത്യയിൽ രോഗബാധിതരുടെ എണ്ണത്തിൽ ഒരു പ്രവണതയുണ്ടെന്ന് ഈ ചാർട്ട് കാണിക്കുന്നു.",
            URDU: "اس چارٹ سے معلوم ہوتا ہے کہ بھارت میں متاثرہ افراد کی تعداد میں اضافہ ہوا ہے۔"
        }
    },
    "GOV_LINK_TEXT": {
        HINDI: "भारत सरकार द्वारा जारी की गई पूरी जानकारी पढ़ने के लिए यहां क्लिक करें।",
        ENGLISH: "Click below to read the complete information released by the Government of India.",
        BENGALI: "ভারত সরকার প্রকাশিত সম্পূর্ণ তথ্য পড়তে এখানে ক্লিক করুন।",
        TAMIL: "இந்திய அரசு வெளியிட்டுள்ள முழுமையான தகவல்களைப் படிக்க கீழே கிளிக் செய்க.",
        TELGUE: "భారత ప్రభుత్వం విడుదల చేసిన పూర్తి సమాచారాన్ని చదవడానికి క్రింద క్లిక్ చేయండి.",
        PUNJABI: "ਭਾਰਤ ਸਰਕਾਰ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤੀ ਗਈ ਪੂਰੀ ਜਾਣਕਾਰੀ ਨੂੰ ਪੜ੍ਹਨ ਲਈ ਹੇਠਾਂ ਕਲਿੱਕ ਕਰੋ.",
        MARATHI: "भारत सरकारने जाहीर केलेली संपूर्ण माहिती वाचण्यासाठी खाली क्लिक करा.",
        MALAYALAM: "ഇന്ത്യാ ഗവൺമെന്റ് പുറത്തുവിട്ട സമ്പൂർണ്ണ വിവരങ്ങൾ വായിക്കാൻ ഇവിടെ ക്ലിക്ക് ചെയ്യുക.",
        URDU: "حکومت ہند کی جاری کردہ مکمل معلومات کو پڑھنے کے لئے نیچے کلک کریں۔"
    },
    "COUNTRY": {
        HINDI: "देश",
        ENGLISH: "country",
        BENGALI: "দেশ",
        TAMIL: "நாடு",
        TELGUE: "దేశంలో",
        PUNJABI: "ਦੇਸ਼",
        MARATHI: "देश",
        MALAYALAM: "രാജ്യം",
        URDU: "ملک"
    },
    "TOTAL_CASES": {
        HINDI: "कुल मामले",
        ENGLISH: "total cases",
        BENGALI: "মোট মামলা",
        TAMIL: "மொத்த வழக்குகள்",
        TELGUE: "మొత్తం కేసు",
        PUNJABI: "ਕੁੱਲ ਕੇਸ",
        MARATHI: "एकूण प्रकरणे",
        MALAYALAM: "ആകെ കേസുകൾ",
        URDU: "کل مقدمات"
    },
    "TOTAL_CASES_TODAY": {
        HINDI: "आज के मामले",
        ENGLISH: "cases today",
        BENGALI: "মামলা আজ",
        TAMIL: "வழக்குகள் இன்று",
        TELGUE: "నేడు కేసులు",
        PUNJABI: "ਕੇਸ ਅੱਜ",
        MARATHI: "आज खटले",
        MALAYALAM: "ഇന്നത്തെ കേസുകൾ",
        URDU: "آج مقدمات"
    },
    "TOTAL_DEATHS": {
        HINDI: "कुल मौतें",
        ENGLISH: "total deaths",
        BENGALI: "মোট মৃত্যু",
        TAMIL: "மொத்த இறப்புகள்",
        TELGUE: "మొత్తం మరణం",
        PUNJABI: "ਕੁੱਲ ਮੌਤ",
        MARATHI: "एकूण मृत्यू",
        MALAYALAM: "മൊത്തം മരണങ്ങൾ",
        URDU: "کل اموات"
    },
    "TAKE_CARE_STAY_SAFE": {
        HINDI: "ध्यान रखें, सुरक्षित रहें",
        ENGLISH: "Take care, Stay safe",
        BENGALI: "যত্ন নিন, নিরাপদে থাকুন",
        TAMIL: "கவனமாக இருங்கள், பாதுகாப்பாக இருங்கள்",
        TELGUE: "జాగ్రత్తగా ఉండండి, సురక్షితంగా ఉండండి",
        PUNJABI: "ਖਿਆਲ ਰੱਖੋ, ਸੁਰੱਖਿਅਤ ਰਹੋ",
        MARATHI: "काळजी घ्या, सुरक्षित रहा",
        MALAYALAM: "ശ്രദ്ധിക്കുക, സുരക്ഷിതരായി ഇരിക്കുക",
        URDU: "خیال رکھیں ، محفوظ رہیں"
    },
    "GITHUB_CTA_TEXT": {
        HINDI: "GitHub",
        ENGLISH: "GitHub",
        BENGALI: "GitHub",
        TAMIL: "GitHub",
        TELGUE: "GitHub",
        PUNJABI: "GitHub",
        MARATHI: "GitHub",
        MALAYALAM: "GitHub",
        URDU: "GitHub"
    },
    "SHARE_CTA_TEXT": {
        HINDI: "दोस्तों और परिवार के साथ साझा करें",
        ENGLISH: "Share with friends & family",
        BENGALI: "বন্ধুদের এবং পরিবারের সাথে ভাগ করুন",
        TAMIL: "நண்பர்கள் மற்றும் குடும்பத்தினருடன் பகிரவும்",
        TELGUE: "స్నేహితులు & కుటుంబ సభ్యులతో భాగస్వామ్యం చేయండి",
        PUNJABI: "ਦੋਸਤਾਂ ਅਤੇ ਪਰਿਵਾਰ ਨਾਲ ਸਾਂਝਾ ਕਰੋ",
        MARATHI: "मित्र आणि कुटुंबासह सामायिक करा",
        MALAYALAM: "സുഹൃത്തുക്കളുമായും കുടുംബവുമായും പങ്കിടുക",
        URDU: "دوستوں اور کنبہ کے ساتھ اشتراک کریں"
    },
    SAHRE_DESCRIPTION: {
        HINDI: `आज के भारतीय आँकड़े -> मृत्यु: <total_deaths_in_india>, मामले: <total_cases_in_india> कोरोनावायरस पर नए अपडेट प्राप्त करें, लाइव आँकड़े देखें और इस घातक निराशा के बारे में सूचित रहें। दुनिया भर में <total_cases_in_world> से अधिक लोग प्रभावित हैं, सावधानी बरतकर खुद को बचाएं।`,
        ENGLISH: `Today's Indian stats -> Death: <total_deaths_in_india>, Cases:<total_cases_in_india> . Get new updates on coronavirus, see live stats and stay informed about this deadly desease. More than <total_cases_in_world> people around the world are affected, save yourself by taking precautions.`,
        BENGALI: `আজকের ভারতীয় পরিসংখ্যান -> মৃত্যু: <total_deaths_in_india>, মামলা: <total_cases_in_india>। করোনাভাইরাস সম্পর্কে নতুন আপডেট পান, সরাসরি পরিসংখ্যান দেখুন এবং এই মারাত্মক ডিজেজ সম্পর্কে অবহিত থাকুন। বিশ্বজুড়ে <total_cases_in_world> এরও বেশি লোক আক্রান্ত হয়েছে, সাবধানতা অবলম্বন করে নিজেকে বাঁচান`,
        TAMIL: `இன்றைய இந்திய புள்ளிவிவரங்கள் -> மரணம்: <total_deaths_in_india>, வழக்குகள்: <total_cases_in_india>. கொரோனா வைரஸைப் பற்றிய புதிய புதுப்பிப்புகளைப் பெறுங்கள், நேரடி புள்ளிவிவரங்களைப் பார்க்கவும், இந்த கொடிய இறப்பு பற்றித் தெரிவிக்கவும். உலகெங்கிலும் <total_cases_in_world> க்கும் மேற்பட்டோர் பாதிக்கப்பட்டுள்ளனர், முன்னெச்சரிக்கைகள் எடுத்து உங்களை காப்பாற்றுங்கள்.`,
        TELGUE: `నేటి భారతీయ గణాంకాలు -> మరణం: <total_deaths_in_india>, కేసులు: <total_cases_in_india>. కరోనావైరస్ గురించి కొత్త నవీకరణలను పొందండి, ప్రత్యక్ష గణాంకాలను చూడండి మరియు ఈ ఘోరమైన డీసీజ్ గురించి తెలియజేయండి. ప్రపంచవ్యాప్తంగా <total_cases_in_world> మందికి పైగా ప్రజలు ప్రభావితమయ్యారు, జాగ్రత్తలు తీసుకోవడం ద్వారా మిమ్మల్ని మీరు రక్షించుకోండి.`,
        PUNJABI: `ਅੱਜ ਦੇ ਭਾਰਤੀ ਅੰਕੜੇ -> ਮੌਤ: <total_deaths_in_india>, ਕੇਸ: <total_cases_in_india>. ਕੋਰੋਨਾਵਾਇਰਸ 'ਤੇ ਨਵੇਂ ਅਪਡੇਟਾਂ ਪ੍ਰਾਪਤ ਕਰੋ, ਲਾਈਵ ਅੰਕੜੇ ਵੇਖੋ ਅਤੇ ਇਸ ਘਾਤਕ ਡੀਸੀਜ਼ ਬਾਰੇ ਜਾਣੂ ਕਰੋ. ਦੁਨੀਆ ਭਰ ਦੇ <total_cases_in_world> ਤੋਂ ਵੱਧ ਲੋਕ ਪ੍ਰਭਾਵਿਤ ਹਨ, ਸਾਵਧਾਨੀ ਵਰਤ ਕੇ ਆਪਣੇ ਆਪ ਨੂੰ ਬਚਾਓ.`,
        MARATHI: "आजचे भारतीय आकडेवारी -> मृत्यूः <total_deaths_in_india>, प्रकरणे: <total_cases_in_india>. कोरोनाव्हायरसवर नवीन अद्यतने मिळवा, थेट आकडेवारी पहा आणि या प्राणघातक श्वसनासनाविषयी माहिती रहा. जगभरातील <total_cases_in_world> पेक्षा जास्त लोक प्रभावित झाले आहेत, खबरदारी घेत स्वत: ला वाचवा.",
        MALAYALAM: "ഇന്നത്തെ ഇന്ത്യൻ സ്ഥിതിവിവരക്കണക്കുകൾ -> മരണം: <total_deaths_in_india>, കേസുകൾ: <total_cases_in_india> കൊറോണ വൈറസിനെക്കുറിച്ച് പുതിയ വിവരങ്ങൾ നേടുക, തത്സമയ സ്ഥിതിവിവരക്കണക്കുകൾ കാണുക, ഈ മാരകമായ അസുഖത്തെ കുറിച്ച് അറിയിക്കുക. ലോകമെമ്പാടുമുള്ള <total_cases_in_world> ൽ കൂടുതൽ ആളുകളെ ബാധിക്കുന്നു, സ്വയം പരിരക്ഷിക്കാൻ ശ്രദ്ധിക്കുക.",
        URDU: "آج کے ہندوستانی اعدادوشمار -> موت: <total_deaths_in_india>, مقدمات:<total_cases_in_india> . کورونا وائرس کے بارے میں نئی ​​تازہ ترین معلومات حاصل کریں ، رواں اعدادوشمار دیکھیں اور اس جان لیوا بیماری سے آگاہ رہیں۔ سے زیادہ <total_cases_in_world> دنیا بھر کے لوگ متاثر ہیں ، احتیاطی تدابیر اختیار کرکے اپنے آپ کو بچائیں."
    },
    iss: {
        HINDI: "भारतीय राज्यों का रुझान",
        ENGLISH: "Indian States Summary",
        BENGALI: "ভারতীয় রাজ্যের সংক্ষিপ্তসার",
        TAMIL: "இந்திய மாநிலங்களின் சுருக்கம்",
        TELGUE: "భారతీయ రాష్ట్రాల సారాంశం",
        PUNJABI: "ਭਾਰਤੀ ਸਟੇਟ ਸੰਖੇਪ",
        MARATHI: "भारतीय राज्ये सारांश",
        MALAYALAM: "ഇന്ത്യൻ സംസ്ഥാനങ്ങളുടെ സംഗ്രഹം",
        URDU: "ہندوستانی ریاستوں کے رجحانات"
    },
    is: {
        HINDI: "भारतीय रुझान",
        ENGLISH: "Indian Summary",
        BENGALI: "ভারতীয় সংক্ষিপ্তসার",
        TAMIL: "இந்திய சுருக்கம்",
        TELGUE: "భారతీయ సారాంశం",
        PUNJABI: "ਭਾਰਤੀ ਸੰਖੇਪ",
        MARATHI: "भारतीय सारांश",
        MALAYALAM: "ഇന്ത്യൻ സംഗ്രഹം",
        URDU: "ہندوستانی رجحانات"
    },
    gs: {
        HINDI: "वैश्विक रुझान",
        ENGLISH: "Global Summary",
        BENGALI: "গ্লোবাল সারসংক্ষেপ",
        TAMIL: "உலகளாவிய சுருக்கம்",
        TELGUE: "గ్లోబల్ సారాంశం",
        PUNJABI: "ਗਲੋਬਲ ਸੰਖੇਪ",
        MARATHI: "जागतिक सारांश",
        MALAYALAM: "ആഗോള സംഗ്രഹം",
        URDU: "عالمی رجحانات"
    },
    it: {
        HINDI: "दैनिक भारतीय मामलों का रुझावन",
        ENGLISH: "Indian Timeline",
        BENGALI: "ভারতীয় সময়রেখা",
        TAMIL: "இந்திய காலவரிசை",
        TELGUE: "భారతీయ కాలక్రమం",
        PUNJABI: "ਭਾਰਤੀ ਟਾਈਮਲਾਈਨ",
        MARATHI: "भारतीय टाइमलाइन",
        MALAYALAM: "ഇന്ത്യൻ സമയരേഖ",
        URDU: "ہندوستانی ٹائم لائن"
    },
    gtac: {
        HINDI: "वैश्विक शीर्ष प्रभावित देश",
        ENGLISH: "Global Top Affected Countries",
        BENGALI: "গ্লোবাল শীর্ষ প্রভাবিত দেশ",
        TAMIL: "உலகளாவிய சிறந்த பாதிக்கப்பட்ட நாடுகள்",
        TELGUE: "గ్లోబల్ టాప్ ప్రభావిత దేశాలు",
        PUNJABI: "ਗਲੋਬਲ ਪ੍ਰਮੁੱਖ ਪ੍ਰਭਾਵਿਤ ਦੇਸ਼",
        MARATHI: "ग्लोबल टॉप प्रभावित देश",
        MALAYALAM: "ആഗോളതലത്തിൽ ഏറ്റവും കൂടുതൽ ബാധിക്കപെട്ട രാജ്യങ്ങൾ",
        URDU: "عالمی سطح پر متاثرہ ممالک"
    },
    gg: {
        HINDI: "सरकारी दिशानिर्देश",
        ENGLISH: "Government Guidelines",
        BENGALI: "সরকারী নির্দেশিকা",
        TAMIL: "அரசாங்க வழிகாட்டுதல்கள்",
        TELGUE: "ప్రభుత్వ మార్గదర్శకాలు",
        PUNJABI: "ਸਰਕਾਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼",
        MARATHI: "शासकीय मार्गदर्शक तत्त्वे",
        MALAYALAM: "സർക്കാരിന്റെ നിർദേശങ്ങൾ",
        URDU: "حکومت کے رہنما خطوط"
    },
    st: {
        HINDI: "लक्ष्य साझा करें",
        ENGLISH: "Share Target",
        BENGALI: "শেয়ার লক্ষ্য",
        TAMIL: "பகிர் இலக்கு",
        TELGUE: "షేర్ టార్గెట్",
        PUNJABI: "ਟਾਰਗੇਟ ਸਾਂਝਾ ਕਰੋ",
        MARATHI: "लक्ष्य सामायिक करा",
        MALAYALAM: "ലക്ഷ്യം പങ്കിടുക",
        URDU: "شیئر ٹارگٹ"
    },
    ss: {
        HINDI: "कुछ कहें!",
        ENGLISH: "Say Something!",
        BENGALI: "কিছু বল!",
        TAMIL: "ஏதாவது கூறுங்கள்!",
        TELGUE: "ఏదైనా చెప్పు!",
        PUNJABI: "ਕੁੱਝ ਕਹੋ!",
        MARATHI: "काहीतरी बोला!",
        MALAYALAM: "എന്തെങ്കിലും പറയുക ",
        URDU: "کچھ بولیں"
    },
    news: {
        HINDI: "समाचार",
        ENGLISH: "News",
        BENGALI: "খবর",
        TAMIL: "செய்தி",
        TELGUE: "వార్తలు",
        PUNJABI: "ਖ਼ਬਰਾਂ",
        MARATHI: "बातमी",
        MALAYALAM: "വാർത്ത",
        URDU: "خبریں"
    },
    donate: {
        HINDI: "डोनेट करें",
        ENGLISH: "Donate",
        BENGALI: "দান করা",
        TAMIL: "நன்கொடை",
        TELGUE: "దానం",
        PUNJABI: "ਦਾਨ ਕਰੋ",
        MARATHI: "दान करा",
        MALAYALAM: "സംഭാവനചെയ്യുക",
        URDU: "عطیہ کریں"
    },
    district_page_cta:{
        HINDI: "अपने जिले के बारे में अपडेट देखने के लिए यहां क्लिक करें",
        ENGLISH: "Click here to see updates about your district",
        BENGALI: "আপনার জেলা সম্পর্কে আপডেট দেখতে এখানে ক্লিক করুন",
        TAMIL: "உங்கள் மாவட்டத்தைப் பற்றிய புதுப்பிப்புகளைக் காண இங்கே கிளிக் செய்க",
        TELGUE: "మీ జిల్లా గురించి నవీకరణలను చూడటానికి ఇక్కడ క్లిక్ చేయండి",
        PUNJABI: "ਆਪਣੇ ਜ਼ਿਲ੍ਹੇ ਬਾਰੇ ਅਪਡੇਟਸ ਦੇਖਣ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ",
        MARATHI: "आपल्या जिल्ह्याविषयी अद्यतने पाहण्यासाठी येथे क्लिक करा",
        MALAYALAM: "നിങ്ങളുടെ ജില്ലയെക്കുറിച്ചുള്ള അപ്‌ഡേറ്റുകൾ കാണുന്നതിന് ഇവിടെ ക്ലിക്കുചെയ്യുക",
        URDU: "اپنے ضلع کے بارے میں اپ ڈیٹس دیکھنے کے لئے یہاں کلک کریں"
    },
}

export default variables;