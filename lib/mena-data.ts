export interface Division {
  ar: string;
  en: string;
  centersAr: string[];
  centersEn: string[];
}

export interface Country {
  code: string;
  nameEn: string;
  nameAr: string;
  countryInAr: string;
  countryInEn: string;
  divisions: Record<string, Division>;
}

export const MENA_COUNTRIES: Record<string, Country> = {
  egypt: {
    code: "egypt",
    nameEn: "Egypt",
    nameAr: "مصر",
    countryInAr: "مصر",
    countryInEn: "Egypt",
    divisions: {
      cairo: {
        ar: "القاهرة",
        en: "Cairo",
        centersAr: ["القاهرة", "حلوان", "المعادي", "مدينة نصر", "مصر الجديدة", "الزمالك", "التبين", "المقطم", "العبور"],
        centersEn: ["Cairo", "Helwan", "Maadi", "Nasr City", "Heliopolis", "Zamalek", "Tebbin", "Mokattam", "Obour"],
      },
      giza: {
        ar: "الجيزة",
        en: "Giza",
        centersAr: ["الجيزة", "6 أكتوبر", "الشيخ زايد", "أوسيم", "كرداسة", "أبو النمرس", "الحوامدية", "البدرشين", "العياط", "الصف", "أطفيح", "الواحات البحرية"],
        centersEn: ["Giza", "6th of October", "Sheikh Zayed", "Oseem", "Kerdasa", "Abu Al Numrus", "Al Hawamdia", "Al Badrashin", "Al Ayat", "Al Saff", "Atfih", "Bahariya Oasis"],
      },
      alexandria: {
        ar: "الإسكندرية",
        en: "Alexandria",
        centersAr: ["الإسكندرية", "برج العرب", "العامرية", "المنتزه", "شرق", "وسط", "غرب", "الجمرك", "العجمي"],
        centersEn: ["Alexandria", "Borg El Arab", "Al Amreya", "Al Montaza", "East", "Middle", "West", "Al Gomrok", "Al Agamy"],
      },
      qalyubia: {
        ar: "القليوبية",
        en: "Qalyubia",
        centersAr: ["بنها", "قليوب", "شبرا الخيمة", "الخانكة", "طوخ", "كفر شكر", "قها", "العبور", "شبين القناطر"],
        centersEn: ["Banha", "Qalyub", "Shubra El Kheima", "El Khanka", "Toukh", "Kafr Shukr", "Qaha", "Obour", "Shebin El Qanater"],
      },
      gharbia: {
        ar: "الغربية",
        en: "Gharbia",
        centersAr: ["طنطا", "المحلة الكبرى", "زفتى", "السنطة", "كفر الزيات", "بسيون", "قطور", "سمنود"],
        centersEn: ["Tanta", "El Mahalla El Kubra", "Zefta", "El Santa", "Kafr El Zayat", "Basyoun", "Qutur", "Samannud"],
      },
      dakahlia: {
        ar: "الدقهلية",
        en: "Dakahlia",
        centersAr: ["المنصورة", "ميت غمر", "طلخا", "بلقاس", "أجا", "الجمالية", "دكرنس", "شربين", "منية النصر", "السنبلاوين", "نبروه", "تمي الأمديد", "المنزلة", "المطرية"],
        centersEn: ["Mansoura", "Mit Ghamr", "Talkha", "Belqas", "Aga", "El Gamalya", "Dekernes", "Sherbin", "Menyet El Nasr", "El Senbellawein", "Nabroh", "Tami El Amdeed", "El Manzala", "El Matareya"],
      },
      sharqia: {
        ar: "الشرقية",
        en: "Sharqia",
        centersAr: ["الزقازيق", "بلبيس", "منيا القمح", "أبو حماد", "فاقوس", "أبو كبير", "كفر صقر", "الحسينية", "ديرب نجم", "ههيا", "الإبراهيمية", "مشتول السوق", "العاشر من رمضان", "الصالحية الجديدة"],
        centersEn: ["Zagazig", "Belbeis", "Minya El Qamh", "Abu Hammad", "Faqous", "Abu Kabir", "Kafr Saqr", "El Husseinya", "Deirb Negm", "Hehya", "El Ibrahimiya", "Mashtoul El Souq", "10th of Ramadan", "New Salheya"],
      },
      monufia: {
        ar: "المنوفية",
        en: "Monufia",
        centersAr: ["شبين الكوم", "منوف", "أشمون", "الباجور", "قويسنا", "بركة السبع", "تلا", "السادات", "الشهداء"],
        centersEn: ["Shebin El Kom", "Menouf", "Ashmoun", "El Bagour", "Quesna", "Berket El Sabaa", "Tala", "Sadat City", "El Shohada"],
      },
      beheira: {
        ar: "البحيرة",
        en: "Beheira",
        centersAr: ["دمنهور", "كفر الدوار", "رشيد", "إدكو", "أبو حمص", "المحمودية", "أبو المطامير", "حوش عيسى", "شبراخيت", "إيتاي البارود", "كوم حمادة", "بدر", "وادي النطرون"],
        centersEn: ["Damanhur", "Kafr El Dawwar", "Rashid", "Edku", "Abu Homs", "El Mahmoudeya", "Abu El Matamir", "Housh Eissa", "Shubrakhit", "Etay El Baroud", "Kom Hamada", "Badr", "Wadi El Natrun"],
      },
      kafrElSheikh: {
        ar: "كفر الشيخ",
        en: "Kafr El Sheikh",
        centersAr: ["كفر الشيخ", "دسوق", "فوه", "مطوبس", "قلين", "سيدي سالم", "الرياض", "الحامول", "بيلا", "بلطيم"],
        centersEn: ["Kafr El Sheikh", "Desouk", "Fowa", "Metoubes", "Qallin", "Sidi Salem", "El Riyad", "El Hamool", "Beila", "Baltim"],
      },
      damietta: {
        ar: "دمياط",
        en: "Damietta",
        centersAr: ["دمياط", "فارسكور", "الزرقا", "كفر سعد", "رأس البر", "عزبة البرج"],
        centersEn: ["Damietta", "Faraskur", "El Zarqa", "Kafr Saad", "Ras El Bar", "Ezbet El Borg"],
      },
      portSaid: {
        ar: "بورسعيد",
        en: "Port Said",
        centersAr: ["بورسعيد", "بورفؤاد"],
        centersEn: ["Port Said", "Port Fouad"],
      },
      ismailia: {
        ar: "الإسماعيلية",
        en: "Ismailia",
        centersAr: ["الإسماعيلية", "القنطرة شرق", "القنطرة غرب", "فايد", "التل الكبير", "أبو صوير", "القصاصين"],
        centersEn: ["Ismailia", "El Qantara East", "El Qantara West", "Fayed", "Tal El Kabeer", "Abu Sweir", "El Qassaseen"],
      },
      suez: {
        ar: "السويس",
        en: "Suez",
        centersAr: ["السويس", "الجناين", "عتاقة", "فيصل"],
        centersEn: ["Suez", "El Ganayen", "Ataka", "Faisal"],
      },
      northSinai: {
        ar: "شمال سيناء",
        en: "North Sinai",
        centersAr: ["العريش", "رفح", "بئر العبد", "الشيخ زويد", "نخل", "الحسنة"],
        centersEn: ["Arish", "Rafah", "Bir El Abd", "Sheikh Zuweid", "Nakhl", "El Hasana"],
      },
      southSinai: {
        ar: "جنوب سيناء",
        en: "South Sinai",
        centersAr: ["شرم الشيخ", "دهب", "نويبع", "طابا", "سانت كاترين", "أبو رديس", "أبو زنيمة", "رأس سدر", "طور سيناء"],
        centersEn: ["Sharm El Sheikh", "Dahab", "Nuweiba", "Taba", "Saint Catherine", "Abu Rudeis", "Abu Zenima", "Ras Sedr", "El Tor"],
      },
      beniSuef: {
        ar: "بني سويف",
        en: "Beni Suef",
        centersAr: ["بني سويف", "الواسطى", "ناصر", "إهناسيا", "ببا", "الفشن", "سمسطا"],
        centersEn: ["Beni Suef", "El Wasta", "Nasser", "Ehnasia", "Beba", "El Fashn", "Samasta"],
      },
      faiyum: {
        ar: "الفيوم",
        en: "Faiyum",
        centersAr: ["الفيوم", "سنورس", "طامية", "إطسا", "يوسف الصديق", "أبشواي"],
        centersEn: ["Faiyum", "Sinnuris", "Tamiya", "Itsa", "Yusuf El Sadeeq", "Ebsheway"],
      },
      minya: {
        ar: "المنيا",
        en: "Minya",
        centersAr: ["المنيا", "سمالوط", "مطاي", "بني مزار", "مغاغة", "العدوة", "أبو قرقاص", "ملوي", "دير مواس"],
        centersEn: ["Minya", "Samalut", "Matai", "Beni Mazar", "Maghagha", "El Adwa", "Abu Qurqas", "Mallawi", "Deir Mawas"],
      },
      asyut: {
        ar: "أسيوط",
        en: "Asyut",
        centersAr: ["أسيوط", "ديروط", "القوصية", "منفلوط", "أبنوب", "الفتح", "أبو تيج", "الغنايم", "صدفا", "ساحل سليم", "البداري"],
        centersEn: ["Asyut", "Dairut", "El Qusiya", "Manfalut", "Abnub", "El Fath", "Abu Teeg", "El Ghanayem", "Sadfa", "Sahel Salim", "El Badari"],
      },
      sohag: {
        ar: "سوهاج",
        en: "Sohag",
        centersAr: ["سوهاج", "أخميم", "البلينا", "الجرجا", "دار السلام", "جهينة", "ساقلتة", "طما", "طهطا", "المراغة", "المنشاة", "الكوثر"],
        centersEn: ["Sohag", "Akhmim", "El Balyana", "El Girga", "Dar El Salam", "Guhayna", "Saqolta", "Tama", "Tahta", "El Maragha", "El Monshaa", "El Kawthar"],
      },
      qena: {
        ar: "قنا",
        en: "Qena",
        centersAr: ["قنا", "أبو تشت", "فرشوط", "نجع حمادي", "دشنا", "الوقف", "قفط", "قوص", "نقادة"],
        centersEn: ["Qena", "Abu Tesht", "Farshout", "Nag Hammadi", "Dishna", "El Waqf", "Qift", "Qus", "Naqada"],
      },
      luxor: {
        ar: "الأقصر",
        en: "Luxor",
        centersAr: ["الأقصر", "القرنة", "أرمنت", "إسنا", "الطود", "الزينية", "البياضية"],
        centersEn: ["Luxor", "El Qurna", "Armant", "Esna", "El Tod", "El Zeneya", "El Bayadeya"],
      },
      aswan: {
        ar: "أسوان",
        en: "Aswan",
        centersAr: ["أسوان", "دراو", "كوم أمبو", "نصر النوبة", "إدفو", "كلابشة"],
        centersEn: ["Aswan", "Daraw", "Kom Ombo", "Nasr El Nuba", "Edfu", "Kalabsha"],
      },
      redSea: {
        ar: "البحر الأحمر",
        en: "Red Sea",
        centersAr: ["الغردقة", "سفاجا", "القصير", "مرسى علم", "رأس غارب", "الشلاتين", "حلايب"],
        centersEn: ["Hurghada", "Safaga", "El Quseir", "Marsa Alam", "Ras Gharib", "Shalateen", "Halayeb"],
      },
      newValley: {
        ar: "الوادي الجديد",
        en: "New Valley",
        centersAr: ["الخارجة", "الداخلة", "باريس", "الفرافرة", "بلاط"],
        centersEn: ["El Kharga", "El Dakhla", "Paris", "El Farafra", "Balat"],
      },
    },
  },

  saudiArabia: {
    code: "saudiArabia",
    nameEn: "Saudi Arabia",
    nameAr: "السعودية",
    countryInAr: "السعودية",
    countryInEn: "Saudi Arabia",
    divisions: {
      riyadh: {
        ar: "منطقة الرياض",
        en: "Riyadh",
        centersAr: ["الرياض", "الدرعية", "الخرج", "الدوادمي", "المجمعة", "شقراء", "الزلفي", "وادي الدواسر", "الأفلاج", "حوطة بني تميم"],
        centersEn: ["Riyadh", "Diriyah", "Al Kharj", "Dawadmi", "Al Majmaah", "Shaqra", "Al Zulfi", "Wadi Ad-Dawasir", "Al Aflaj", "Hotat Bani Tamim"],
      },
      makkah: {
        ar: "منطقة مكة المكرمة",
        en: "Makkah",
        centersAr: ["مكة المكرمة", "جدة", "الطائف", "رابغ", "خليص", "الجموم", "الليث", "القنفذة", "الكامل", "تربة"],
        centersEn: ["Makkah", "Jeddah", "Taif", "Rabigh", "Khulais", "Al Jumum", "Al Lith", "Al Qunfudhah", "Al Kamil", "Turubah"],
      },
      madinah: {
        ar: "منطقة المدينة المنورة",
        en: "Madinah",
        centersAr: ["المدينة المنورة", "ينبع", "العلا", "بدر", "خيبر", "المهد", "الحناكية"],
        centersEn: ["Madinah", "Yanbu", "Al Ula", "Badr", "Khaybar", "Al Mahd", "Al Hanakiyah"],
      },
      easternProvince: {
        ar: "المنطقة الشرقية",
        en: "Eastern Province",
        centersAr: ["الدمام", "الخبر", "الظهران", "الأحساء", "الجبيل", "القطيف", "حفر الباطن", "الخفجي", "بقيق", "رأس تنورة", "النعيرية"],
        centersEn: ["Dammam", "Khobar", "Dhahran", "Al Ahsa", "Jubail", "Qatif", "Hafar Al Batin", "Khafji", "Buqayq", "Ras Tanura", "Nairyah"],
      },
      asir: {
        ar: "منطقة عسير",
        en: "Asir",
        centersAr: ["أبها", "خميس مشيط", "بيشة", "النماص", "محايل عسير", "تثليث", "ظهران الجنوب", "سراة عبيدة", "رجال ألمع"],
        centersEn: ["Abha", "Khamis Mushait", "Bisha", "Al Namas", "Muhayil Asir", "Tathlith", "Dhahran Al Janub", "Sarat Abidah", "Rijal Almaa"],
      },
      qassim: {
        ar: "منطقة القصيم",
        en: "Qassim",
        centersAr: ["بريدة", "عنيزة", "الرس", "المذنب", "البكيرية", "البدائع", "رياض الخبراء", "عقلة الصقور"],
        centersEn: ["Buraidah", "Unaizah", "Ar Rass", "Al Mithnab", "Al Bukayriyah", "Al Badayea", "Riyadh Al Khabra", "Uqlat Al Suqour"],
      },
      hail: {
        ar: "منطقة حائل",
        en: "Ha'il",
        centersAr: ["حائل", "بقعاء", "الغزالة", "الشنان", "موقق", "السليمي"],
        centersEn: ["Hail", "Baqaa", "Al Ghazalah", "Ash Shinan", "Mawqaq", "As Sulaimi"],
      },
      tabuk: {
        ar: "منطقة تبوك",
        en: "Tabuk",
        centersAr: ["تبوك", "الوجه", "ضباء", "أملج", "تيماء", "حقل", "البدع"],
        centersEn: ["Tabuk", "Al Wajh", "Duba", "Umluj", "Tayma", "Haql", "Al Bad'"],
      },
      northernBorders: {
        ar: "منطقة الحدود الشمالية",
        en: "Northern Borders",
        centersAr: ["عرعر", "رفحاء", "طريف", "العويقيلة"],
        centersEn: ["Arar", "Rafha", "Turaif", "Al Uwayqilah"],
      },
      jazan: {
        ar: "منطقة جازان",
        en: "Jazan",
        centersAr: ["جازان", "صبيا", "أبو عريش", "صامطة", "الدرب", "بيش", "فرسان", "الحرث", "الريث", "الداير"],
        centersEn: ["Jazan", "Sabya", "Abu Arish", "Samtah", "Ad Darb", "Baish", "Farasan", "Al Harith", "Ar Rayth", "Ad Dayer"],
      },
      najran: {
        ar: "منطقة نجران",
        en: "Najran",
        centersAr: ["نجران", "شرورة", "حبونا", "بدر الجنوب", "يدمة", "خباش", "ثار"],
        centersEn: ["Najran", "Sharurah", "Habuna", "Badr Al Janub", "Yadamah", "Khubash", "Thar"],
      },
      alBahah: {
        ar: "منطقة الباحة",
        en: "Al Bahah",
        centersAr: ["الباحة", "بلجرشي", "المندق", "المخواة", "قلوة", "العقيق", "الحجرة"],
        centersEn: ["Al Bahah", "Baljurashi", "Al Mandaq", "Al Mikhwah", "Qilwah", "Al Aqiq", "Al Hujrah"],
      },
      jouf: {
        ar: "منطقة الجوف",
        en: "Al Jouf",
        centersAr: ["سكاكا", "دومة الجندل", "القريات", "طبرجل"],
        centersEn: ["Sakaka", "Dumat Al Jandal", "Qurayyat", "Tabarjal"],
      },
    },
  },

  uae: {
    code: "uae",
    nameEn: "United Arab Emirates",
    nameAr: "الإمارات",
    countryInAr: "الإمارات",
    countryInEn: "UAE",
    divisions: {
      dubai: {
        ar: "دبي",
        en: "Dubai",
        centersAr: ["دبي", "ديرة", "بر دبي", "الجميرا", "مرسى دبي", "وسط مدينة دبي", "الخوانيج", "الورقاء", "حتا", "البرشاء"],
        centersEn: ["Dubai", "Deira", "Bur Dubai", "Jumeirah", "Dubai Marina", "Downtown Dubai", "Al Khawaneej", "Al Warqa", "Hatta", "Al Barsha"],
      },
      abuDhabi: {
        ar: "أبوظبي",
        en: "Abu Dhabi",
        centersAr: ["أبوظبي", "العين", "الظفرة", "مدينة زايد", "الرويس", "مدينة خليفة", "مدينة محمد بن زايد", "ياس", "السعديات"],
        centersEn: ["Abu Dhabi", "Al Ain", "Al Dhafra", "Zayed City", "Ruwais", "Khalifa City", "Mohammed Bin Zayed City", "Yas", "Saadiyat"],
      },
      sharjah: {
        ar: "الشارقة",
        en: "Sharjah",
        centersAr: ["الشارقة", "خورفكان", "كلباء", "الذيد", "دبا الحصن", "مليحة"],
        centersEn: ["Sharjah", "Khorfakkan", "Kalba", "Al Dhaid", "Dibba Al-Hisn", "Maleha"],
      },
      ajman: {
        ar: "عجمان",
        en: "Ajman",
        centersAr: ["عجمان", "مصفوت", "المنامة"],
        centersEn: ["Ajman", "Masfout", "Manama"],
      },
      ummAlQuwain: {
        ar: "أم القيوين",
        en: "Umm Al Quwain",
        centersAr: ["أم القيوين", "فلج المعلا"],
        centersEn: ["Umm Al Quwain", "Falaj Al Mualla"],
      },
      rasAlKhaimah: {
        ar: "رأس الخيمة",
        en: "Ras Al Khaimah",
        centersAr: ["رأس الخيمة", "الجزيرة الحمراء", "الرمس", "خت", "شعم"],
        centersEn: ["Ras Al Khaimah", "Al Jazirah Al Hamra", "Al Rams", "Khatt", "Shaam"],
      },
      fujairah: {
        ar: "الفجيرة",
        en: "Fujairah",
        centersAr: ["الفجيرة", "دبا الفجيرة", "مسافي", "قدفع", "البدية"],
        centersEn: ["Fujairah", "Dibba Al-Fujairah", "Masafi", "Qidfa", "Al Bidyah"],
      },
    },
  },

  kuwait: {
    code: "kuwait",
    nameEn: "Kuwait",
    nameAr: "الكويت",
    countryInAr: "الكويت",
    countryInEn: "Kuwait",
    divisions: {
      capital: {
        ar: "العاصمة",
        en: "Capital",
        centersAr: ["مدينة الكويت", "الشويخ", "الشامية", "الفيحاء", "المنصورية", "الدسمة", "بنيد القار", "كيفان", "الروضة", "قرطبة", "اليرموك"],
        centersEn: ["Kuwait City", "Shuwaikh", "Shamiya", "Faiha", "Mansouriya", "Dasma", "Bnaid Al Qar", "Kaifan", "Rawda", "Qortuba", "Yarmouk"],
      },
      hawalli: {
        ar: "حولي",
        en: "Hawalli",
        centersAr: ["حولي", "السالمية", "الجابرية", "بيان", "مشرف", "سلوى", "الرميثية", "شعب البحري"],
        centersEn: ["Hawalli", "Salmiya", "Jabriya", "Bayan", "Mishref", "Salwa", "Rumaithiya", "Shaab"],
      },
      farwaniya: {
        ar: "الفروانية",
        en: "Farwaniya",
        centersAr: ["الفروانية", "خيطان", "العمرية", "الأندلس", "جليب الشيوخ", "الرقعي", "الرحاب", "العارضية"],
        centersEn: ["Farwaniya", "Khaitan", "Omariya", "Andalous", "Jleeb Al Shuyoukh", "Riqqa", "Rehab", "Ardhiya"],
      },
      mubarakAlKabeer: {
        ar: "مبارك الكبير",
        en: "Mubarak Al-Kabeer",
        centersAr: ["مبارك الكبير", "أبو فطيرة", "المسايل", "العدان", "القصور", "القرين", "صباح السالم", "صبحان"],
        centersEn: ["Mubarak Al Kabeer", "Abu Ftaira", "Masayel", "Adan", "Qusor", "Qurain", "Sabah Al Salem", "Sabhan"],
      },
      ahmadi: {
        ar: "الأحمدي",
        en: "Ahmadi",
        centersAr: ["الأحمدي", "الفحيحيل", "المهبولة", "المنقف", "أبو حليفة", "الفنطاس", "المسيلة", "الوفرة", "الخيران", "الظهر", "هدية"],
        centersEn: ["Ahmadi", "Fahaheel", "Mahboula", "Mangaf", "Abu Halifa", "Fintas", "Messila", "Wafra", "Khiran", "Dhaher", "Hadiya"],
      },
      jahra: {
        ar: "الجهراء",
        en: "Jahra",
        centersAr: ["الجهراء", "النعيم", "الواحة", "القصر", "تيماء", "الصليبية", "أمغرة", "العبدلي"],
        centersEn: ["Jahra", "Naeem", "Waha", "Qasr", "Taima", "Sulaibiya", "Amghara", "Abdali"],
      },
    },
  },

  qatar: {
    code: "qatar",
    nameEn: "Qatar",
    nameAr: "قطر",
    countryInAr: "قطر",
    countryInEn: "Qatar",
    divisions: {
      doha: {
        ar: "الدوحة",
        en: "Doha",
        centersAr: ["الدوحة", "الخليج الغربي", "اللؤلؤة", "الوعب", "الدفنة", "المنصورة", "بن محمود", "نجمة", "المرقاب"],
        centersEn: ["Doha", "West Bay", "The Pearl", "Al Waab", "Al Dafna", "Al Mansoura", "Bin Mahmoud", "Najma", "Mirqab"],
      },
      alRayyan: {
        ar: "الريان",
        en: "Al Rayyan",
        centersAr: ["الريان", "معيذر", "الغرافة", "الدحيل", "روضة الحمامة", "أم صلال محمد", "أبو هامور", "لوسيل"],
        centersEn: ["Al Rayyan", "Muaither", "Gharrafa", "Duhail", "Rawdat Al Hamama", "Umm Salal Mohammed", "Abu Hamour", "Lusail"],
      },
      alWakrah: {
        ar: "الوكرة",
        en: "Al Wakrah",
        centersAr: ["الوكرة", "الوكير", "مسيعيد", "المشاف"],
        centersEn: ["Al Wakrah", "Al Wukair", "Mesaieed", "Al Mashaf"],
      },
      alKhor: {
        ar: "الخور",
        en: "Al Khor",
        centersAr: ["الخور", "الذخيرة", "راس لفان"],
        centersEn: ["Al Khor", "Al Dhakhira", "Ras Laffan"],
      },
      alShamal: {
        ar: "الشمال",
        en: "Al Shamal",
        centersAr: ["الرويس", "مدينة الشمال", "أبو ظلوف"],
        centersEn: ["Al Ruwais", "Madinat Ash Shamal", "Abu Dhalouf"],
      },
      ummSalal: {
        ar: "أم صلال",
        en: "Umm Salal",
        centersAr: ["أم صلال علي", "أم صلال محمد"],
        centersEn: ["Umm Salal Ali", "Umm Salal Mohammed"],
      },
      alDaayen: {
        ar: "الضعاين",
        en: "Al Daayen",
        centersAr: ["الخيسة", "لبيب", "روضة الحمامة"],
        centersEn: ["Al Kheesa", "Leabaib", "Rawdat Al Hamama"],
      },
      alShahaniya: {
        ar: "الشحانية",
        en: "Al Shahaniya",
        centersAr: ["الشحانية", "دخان", "أم باب"],
        centersEn: ["Al Shahaniya", "Dukhan", "Umm Bab"],
      },
    },
  },

  bahrain: {
    code: "bahrain",
    nameEn: "Bahrain",
    nameAr: "البحرين",
    countryInAr: "البحرين",
    countryInEn: "Bahrain",
    divisions: {
      capital: {
        ar: "العاصمة",
        en: "Capital",
        centersAr: ["المنامة", "الجفير", "السيف", "العدلية", "أم الحصم", "الحورة", "القضيبية", "السنابس"],
        centersEn: ["Manama", "Juffair", "Seef", "Adliya", "Umm Al Hassam", "Hoora", "Qudaibiya", "Sanabis"],
      },
      muharraq: {
        ar: "المحرق",
        en: "Muharraq",
        centersAr: ["المحرق", "الحد", "عراد", "البسيتين", "الدير", "قلالي", "سماهيج", "الحالة"],
        centersEn: ["Muharraq", "Hidd", "Arad", "Busaiteen", "Diyar", "Galali", "Samaheej", "Halat"],
      },
      northern: {
        ar: "الشمالية",
        en: "Northern",
        centersAr: ["مدينة حمد", "البديع", "الجنبية", "كرزكان", "الشاخورة", "بني جمرة", "الدراز", "الديه", "مقابة", "المرخ"],
        centersEn: ["Hamad Town", "Budaiya", "Janabiya", "Karzakan", "Shakhura", "Bani Jamra", "Diraz", "Diyah", "Muqaba", "Markh"],
      },
      southern: {
        ar: "الجنوبية",
        en: "Southern",
        centersAr: ["الرفاع", "عوالي", "الزلاق", "الجسرة", "دار كليب", "عسكر", "جو", "الحنينية", "الرفاع الشرقي", "الرفاع الغربي"],
        centersEn: ["Riffa", "Awali", "Zallaq", "Jasra", "Dar Kulaib", "Askar", "Jaww", "Hunainiya", "East Riffa", "West Riffa"],
      },
    },
  },

  oman: {
    code: "oman",
    nameEn: "Oman",
    nameAr: "عُمان",
    countryInAr: "سلطنة عُمان",
    countryInEn: "Oman",
    divisions: {
      muscat: {
        ar: "مسقط",
        en: "Muscat",
        centersAr: ["مسقط", "مطرح", "بوشر", "السيب", "العامرات", "قريات"],
        centersEn: ["Muscat", "Mutrah", "Bawshar", "Seeb", "Al Amerat", "Quriyat"],
      },
      dhofar: {
        ar: "ظفار",
        en: "Dhofar",
        centersAr: ["صلالة", "طاقة", "مرباط", "ثمريت", "سدح", "شليم", "رخيوت", "المزيونة", "ضلكوت"],
        centersEn: ["Salalah", "Taqah", "Mirbat", "Thumrait", "Sadah", "Shalim", "Rakhyut", "Al Mazyona", "Dhalkut"],
      },
      musandam: {
        ar: "مسندم",
        en: "Musandam",
        centersAr: ["خصب", "بخا", "دبا البيعة", "مدحاء"],
        centersEn: ["Khasab", "Bukha", "Dibba Al Baya", "Madha"],
      },
      buraimi: {
        ar: "البريمي",
        en: "Al Buraimi",
        centersAr: ["البريمي", "محضة", "السنينة"],
        centersEn: ["Al Buraimi", "Mahdah", "As Sunaynah"],
      },
      dakhiliyah: {
        ar: "الداخلية",
        en: "Ad Dakhiliyah",
        centersAr: ["نزوى", "بهلاء", "منح", "أدم", "إزكي", "سمائل", "الحمراء", "بدبد"],
        centersEn: ["Nizwa", "Bahla", "Manah", "Adam", "Izki", "Sumail", "Al Hamra", "Bidbid"],
      },
      batinahNorth: {
        ar: "شمال الباطنة",
        en: "Al Batinah North",
        centersAr: ["صحار", "شناص", "لوى", "صحم", "الخابورة", "السويق"],
        centersEn: ["Sohar", "Shinas", "Liwa", "Saham", "Al Khaburah", "As Suwaiq"],
      },
      batinahSouth: {
        ar: "جنوب الباطنة",
        en: "Al Batinah South",
        centersAr: ["الرستاق", "بركاء", "المصنعة", "نخل", "وادي المعاول", "العوابي"],
        centersEn: ["Rustaq", "Barka", "Al Musanaah", "Nakhal", "Wadi Al Maawil", "Al Awabi"],
      },
      sharqiyahNorth: {
        ar: "شمال الشرقية",
        en: "Ash Sharqiyah North",
        centersAr: ["إبراء", "المضيبي", "بدية", "القابل", "دماء والطائيين", "وادي بني خالد"],
        centersEn: ["Ibra", "Al Mudhaibi", "Bidiyah", "Al Qabil", "Dima Wa Ta'iyeen", "Wadi Bani Khalid"],
      },
      sharqiyahSouth: {
        ar: "جنوب الشرقية",
        en: "Ash Sharqiyah South",
        centersAr: ["صور", "الكامل والوافي", "جعلان بني بو علي", "جعلان بني بو حسن", "مصيرة"],
        centersEn: ["Sur", "Al Kamil Wal Wafi", "Jalan Bani Bu Ali", "Jalan Bani Bu Hassan", "Masirah"],
      },
      dhahirah: {
        ar: "الظاهرة",
        en: "Ad Dhahirah",
        centersAr: ["عبري", "ينقل", "ضنك"],
        centersEn: ["Ibri", "Yanqul", "Dhank"],
      },
      wusta: {
        ar: "الوسطى",
        en: "Al Wusta",
        centersAr: ["هيماء", "محوت", "الدقم", "الجازر"],
        centersEn: ["Haima", "Mahout", "Duqm", "Al Jazir"],
      },
    },
  },

  jordan: {
    code: "jordan",
    nameEn: "Jordan",
    nameAr: "الأردن",
    countryInAr: "الأردن",
    countryInEn: "Jordan",
    divisions: {
      amman: {
        ar: "عمّان",
        en: "Amman",
        centersAr: ["عمّان", "الجيزة", "ناعور", "سحاب", "الموقر", "مادبا", "الجبيهة", "صويلح", "مرج الحمام", "أبو نصير", "شفا بدران"],
        centersEn: ["Amman", "Al Jizah", "Naour", "Sahab", "Al Muwaqqar", "Madaba", "Jubaiha", "Sweileh", "Marj Al Hamam", "Abu Nsair", "Shafa Badran"],
      },
      zarqa: {
        ar: "الزرقاء",
        en: "Zarqa",
        centersAr: ["الزرقاء", "الرصيفة", "الأزرق", "الهاشمية", "بيرين"],
        centersEn: ["Zarqa", "Russeifa", "Azraq", "Al Hashemiya", "Beerain"],
      },
      irbid: {
        ar: "إربد",
        en: "Irbid",
        centersAr: ["إربد", "الرمثا", "بني كنانة", "الطيبة", "الوسطية", "المزار الشمالي", "الأغوار الشمالية", "الكورة", "بني عبيد"],
        centersEn: ["Irbid", "Ramtha", "Bani Kinanah", "Taybeh", "Wusteyeh", "Northern Mazar", "Northern Aghwar", "Kurah", "Bani Ubaid"],
      },
      balqa: {
        ar: "البلقاء",
        en: "Balqa",
        centersAr: ["السلط", "دير علا", "الشونة الجنوبية", "عين الباشا", "ماحص والفحيص"],
        centersEn: ["Salt", "Deir Alla", "Southern Shuna", "Ain Al Basha", "Mahes and Fuheis"],
      },
      karak: {
        ar: "الكرك",
        en: "Karak",
        centersAr: ["الكرك", "المزار الجنوبي", "القصر", "عي", "فقوع", "الأغوار الجنوبية", "غور الصافي"],
        centersEn: ["Karak", "Southern Mazar", "Qasr", "Ay", "Faqqu", "Southern Aghwar", "Ghor Al Safi"],
      },
      maan: {
        ar: "معان",
        en: "Ma'an",
        centersAr: ["معان", "البتراء", "الشوبك", "الحسينية"],
        centersEn: ["Ma'an", "Petra", "Shobak", "Al Husseiniyah"],
      },
      madaba: {
        ar: "مادبا",
        en: "Madaba",
        centersAr: ["مادبا", "ذيبان", "ماعين"],
        centersEn: ["Madaba", "Dhiban", "Ma'in"],
      },
      ajloun: {
        ar: "عجلون",
        en: "Ajloun",
        centersAr: ["عجلون", "كفرنجة"],
        centersEn: ["Ajloun", "Kufranjah"],
      },
      jerash: {
        ar: "جرش",
        en: "Jerash",
        centersAr: ["جرش", "برما"],
        centersEn: ["Jerash", "Burma"],
      },
      mafraq: {
        ar: "المفرق",
        en: "Mafraq",
        centersAr: ["المفرق", "الرويشد", "البادية الشمالية الشرقية", "البادية الشمالية الغربية"],
        centersEn: ["Mafraq", "Ruwaished", "Northeast Badia", "Northwest Badia"],
      },
      aqaba: {
        ar: "العقبة",
        en: "Aqaba",
        centersAr: ["العقبة", "القويرة", "وادي عربة"],
        centersEn: ["Aqaba", "Quweira", "Wadi Araba"],
      },
      tafilah: {
        ar: "الطفيلة",
        en: "Tafilah",
        centersAr: ["الطفيلة", "بصيرا", "الحسا"],
        centersEn: ["Tafilah", "Busaira", "Al Hasa"],
      },
    },
  },

  lebanon: {
    code: "lebanon",
    nameEn: "Lebanon",
    nameAr: "لبنان",
    countryInAr: "لبنان",
    countryInEn: "Lebanon",
    divisions: {
      beirut: {
        ar: "بيروت",
        en: "Beirut",
        centersAr: ["بيروت", "الأشرفية", "الحمرا", "فردان", "بدارو", "الروشة", "الطريق الجديدة", "المزرعة", "الرميل"],
        centersEn: ["Beirut", "Achrafieh", "Hamra", "Verdun", "Badaro", "Raouche", "Tarik Jdideh", "Mazraa", "Rmeil"],
      },
      mountLebanon: {
        ar: "جبل لبنان",
        en: "Mount Lebanon",
        centersAr: ["جونية", "بعبدا", "المتن", "كسروان", "عاليه", "الشوف", "جبيل", "برمانا", "بيت مري", "ذوق مكايل"],
        centersEn: ["Jounieh", "Baabda", "Matn", "Keserwan", "Aley", "Chouf", "Byblos", "Broumana", "Beit Mery", "Zouk Mikael"],
      },
      north: {
        ar: "الشمال",
        en: "North",
        centersAr: ["طرابلس", "زغرتا", "بشري", "الكورة", "البترون", "المنية", "الضنية"],
        centersEn: ["Tripoli", "Zgharta", "Bcharre", "Koura", "Batroun", "Minieh", "Danniyeh"],
      },
      akkar: {
        ar: "عكار",
        en: "Akkar",
        centersAr: ["حلبا", "القبيات", "العبدة", "برقايل", "بينو"],
        centersEn: ["Halba", "Al Qoubaiyat", "Abdeh", "Berqayel", "Bino"],
      },
      beqaa: {
        ar: "البقاع",
        en: "Beqaa",
        centersAr: ["زحلة", "شتورا", "المرج", "بر إلياس", "قب الياس", "رياق"],
        centersEn: ["Zahle", "Chtaura", "Marj", "Bar Elias", "Qob Elias", "Rayak"],
      },
      baalbekHermel: {
        ar: "بعلبك-الهرمل",
        en: "Baalbek-Hermel",
        centersAr: ["بعلبك", "الهرمل", "دير الأحمر", "عرسال"],
        centersEn: ["Baalbek", "Hermel", "Deir El Ahmar", "Arsal"],
      },
      south: {
        ar: "الجنوب",
        en: "South",
        centersAr: ["صيدا", "صور", "جزين"],
        centersEn: ["Saida", "Tyre", "Jezzine"],
      },
      nabatieh: {
        ar: "النبطية",
        en: "Nabatieh",
        centersAr: ["النبطية", "مرجعيون", "بنت جبيل", "حاصبيا"],
        centersEn: ["Nabatieh", "Marjeyoun", "Bint Jbeil", "Hasbaya"],
      },
    },
  },

  iraq: {
    code: "iraq",
    nameEn: "Iraq",
    nameAr: "العراق",
    countryInAr: "العراق",
    countryInEn: "Iraq",
    divisions: {
      baghdad: {
        ar: "بغداد",
        en: "Baghdad",
        centersAr: ["بغداد", "الكرخ", "الرصافة", "الأعظمية", "الكاظمية", "المنصور", "الكرادة", "مدينة الصدر", "الدورة", "أبو غريب"],
        centersEn: ["Baghdad", "Karkh", "Rusafa", "Adhamiyah", "Kadhimiyah", "Mansour", "Karrada", "Sadr City", "Dora", "Abu Ghraib"],
      },
      basra: {
        ar: "البصرة",
        en: "Basra",
        centersAr: ["البصرة", "الزبير", "أم قصر", "الفاو", "شط العرب", "أبو الخصيب", "المدينة", "القرنة"],
        centersEn: ["Basra", "Zubair", "Umm Qasr", "Al Faw", "Shatt Al Arab", "Abu Al Khaseeb", "Al Madinah", "Al Qurna"],
      },
      nineveh: {
        ar: "نينوى",
        en: "Nineveh",
        centersAr: ["الموصل", "تلعفر", "سنجار", "الحمدانية", "الشيخان", "بعشيقة"],
        centersEn: ["Mosul", "Tal Afar", "Sinjar", "Hamdaniya", "Shekhan", "Bashiqa"],
      },
      anbar: {
        ar: "الأنبار",
        en: "Anbar",
        centersAr: ["الرمادي", "الفلوجة", "هيت", "حديثة", "عانه", "راوة", "القائم", "الرطبة"],
        centersEn: ["Ramadi", "Fallujah", "Heet", "Haditha", "Anah", "Rawa", "Al Qaim", "Rutba"],
      },
      erbil: {
        ar: "أربيل",
        en: "Erbil",
        centersAr: ["أربيل", "شقلاوة", "سوران", "كويسنجق", "مخمور", "خبات", "جومان"],
        centersEn: ["Erbil", "Shaqlawa", "Soran", "Koya", "Makhmur", "Khabat", "Choman"],
      },
      sulaymaniyah: {
        ar: "السليمانية",
        en: "Sulaymaniyah",
        centersAr: ["السليمانية", "حلبجة", "رانية", "دربنديخان", "بنجوين", "كلار", "شهرزور"],
        centersEn: ["Sulaymaniyah", "Halabja", "Ranya", "Darbandikhan", "Penjwen", "Kalar", "Sharazoor"],
      },
      duhok: {
        ar: "دهوك",
        en: "Duhok",
        centersAr: ["دهوك", "زاخو", "سميل", "العمادية", "عقرة", "شيخان"],
        centersEn: ["Duhok", "Zakho", "Sumel", "Amadiyah", "Aqrah", "Shekhan"],
      },
      kirkuk: {
        ar: "كركوك",
        en: "Kirkuk",
        centersAr: ["كركوك", "الحويجة", "داقوق", "دبس"],
        centersEn: ["Kirkuk", "Hawija", "Daquq", "Dibs"],
      },
      diyala: {
        ar: "ديالى",
        en: "Diyala",
        centersAr: ["بعقوبة", "المقدادية", "الخالص", "خانقين", "بلدروز", "كفري"],
        centersEn: ["Baqubah", "Muqdadiyah", "Khalis", "Khanaqin", "Baladruz", "Kifri"],
      },
      salahAlDin: {
        ar: "صلاح الدين",
        en: "Salah Al-Din",
        centersAr: ["تكريت", "سامراء", "الدجيل", "بلد", "بيجي", "الشرقاط", "الطوز"],
        centersEn: ["Tikrit", "Samarra", "Dujail", "Balad", "Baiji", "Sharqat", "Tuz"],
      },
      babil: {
        ar: "بابل",
        en: "Babil",
        centersAr: ["الحلة", "المسيب", "الهاشمية", "المحاويل"],
        centersEn: ["Hillah", "Mussayab", "Hashimiyah", "Mahaweel"],
      },
      karbala: {
        ar: "كربلاء",
        en: "Karbala",
        centersAr: ["كربلاء", "عين التمر", "الهندية"],
        centersEn: ["Karbala", "Ain Al Tamer", "Hindiya"],
      },
      najaf: {
        ar: "النجف",
        en: "Najaf",
        centersAr: ["النجف", "الكوفة", "المناذرة"],
        centersEn: ["Najaf", "Kufa", "Manathira"],
      },
      wasit: {
        ar: "واسط",
        en: "Wasit",
        centersAr: ["الكوت", "الصويرة", "النعمانية", "بدرة", "العزيزية", "الحي"],
        centersEn: ["Kut", "Suwaira", "Numaniyah", "Badra", "Aziziyah", "Hai"],
      },
      maysan: {
        ar: "ميسان",
        en: "Maysan",
        centersAr: ["العمارة", "قلعة صالح", "علي الغربي", "الميمونة", "المجر الكبير", "الكحلاء"],
        centersEn: ["Amara", "Qalat Saleh", "Ali Al Gharbi", "Maimouna", "Majar Al Kabir", "Kahla"],
      },
      dhiQar: {
        ar: "ذي قار",
        en: "Dhi Qar",
        centersAr: ["الناصرية", "الرفاعي", "الشطرة", "سوق الشيوخ", "الجبايش"],
        centersEn: ["Nasiriyah", "Rifai", "Shatra", "Suq Al Shuyukh", "Chibayish"],
      },
      qadisiyyah: {
        ar: "القادسية",
        en: "Al-Qadisiyyah",
        centersAr: ["الديوانية", "عفك", "الشامية", "الحمزة"],
        centersEn: ["Diwaniyah", "Afak", "Shamiya", "Hamza"],
      },
      muthanna: {
        ar: "المثنى",
        en: "Al-Muthanna",
        centersAr: ["السماوة", "الرميثة", "الخضر", "السلمان"],
        centersEn: ["Samawah", "Rumaitha", "Khidr", "Salman"],
      },
    },
  },

  syria: {
    code: "syria",
    nameEn: "Syria",
    nameAr: "سوريا",
    countryInAr: "سوريا",
    countryInEn: "Syria",
    divisions: {
      damascus: {
        ar: "دمشق",
        en: "Damascus",
        centersAr: ["دمشق", "المزة", "أبو رمانة", "الميدان", "الشعلان", "المهاجرين", "باب توما", "الصالحية"],
        centersEn: ["Damascus", "Mezzeh", "Abu Rummaneh", "Midan", "Shaalan", "Muhajireen", "Bab Touma", "Salihiyah"],
      },
      rifDimashq: {
        ar: "ريف دمشق",
        en: "Rif Dimashq",
        centersAr: ["دوما", "حرستا", "التل", "قدسيا", "جرمانا", "صحنايا", "الزبداني", "يبرود", "النبك", "دير عطية"],
        centersEn: ["Douma", "Harasta", "Tell", "Qudsaya", "Jaramana", "Sahnaya", "Zabadani", "Yabroud", "Nabk", "Deir Atiyah"],
      },
      aleppo: {
        ar: "حلب",
        en: "Aleppo",
        centersAr: ["حلب", "منبج", "الباب", "أعزاز", "عفرين", "جرابلس", "السفيرة", "دير حافر"],
        centersEn: ["Aleppo", "Manbij", "Al Bab", "Azaz", "Afrin", "Jarabulus", "Safira", "Deir Hafer"],
      },
      homs: {
        ar: "حمص",
        en: "Homs",
        centersAr: ["حمص", "تدمر", "الرستن", "تلبيسة", "القصير", "المخرم", "تلكلخ"],
        centersEn: ["Homs", "Palmyra", "Rastan", "Talbiseh", "Qusayr", "Mukharram", "Tell Kalakh"],
      },
      hama: {
        ar: "حماة",
        en: "Hama",
        centersAr: ["حماة", "مصياف", "السقيلبية", "محردة", "سلمية", "كفرزيتا"],
        centersEn: ["Hama", "Masyaf", "Suqaylabiyah", "Mhardeh", "Salamiyah", "Kafr Zita"],
      },
      latakia: {
        ar: "اللاذقية",
        en: "Latakia",
        centersAr: ["اللاذقية", "جبلة", "الحفة", "القرداحة"],
        centersEn: ["Latakia", "Jableh", "Al Haffa", "Qardaha"],
      },
      tartus: {
        ar: "طرطوس",
        en: "Tartus",
        centersAr: ["طرطوس", "بانياس", "صافيتا", "الدريكيش", "الشيخ بدر"],
        centersEn: ["Tartus", "Baniyas", "Safita", "Duraykish", "Sheikh Badr"],
      },
      idlib: {
        ar: "إدلب",
        en: "Idlib",
        centersAr: ["إدلب", "معرة النعمان", "أريحا", "جسر الشغور", "سرمين", "خان شيخون"],
        centersEn: ["Idlib", "Maarat Al Numan", "Ariha", "Jisr Al Shughur", "Sarmin", "Khan Sheikhoun"],
      },
      daraa: {
        ar: "درعا",
        en: "Daraa",
        centersAr: ["درعا", "الصنمين", "إزرع", "طفس", "بصرى الشام"],
        centersEn: ["Daraa", "Sanamayn", "Izra", "Tafas", "Bosra"],
      },
      suwayda: {
        ar: "السويداء",
        en: "As-Suwayda",
        centersAr: ["السويداء", "صلخد", "شهبا"],
        centersEn: ["Suwayda", "Salkhad", "Shahba"],
      },
      quneitra: {
        ar: "القنيطرة",
        en: "Quneitra",
        centersAr: ["القنيطرة", "خان أرنبة", "فيق"],
        centersEn: ["Quneitra", "Khan Arnabeh", "Fiq"],
      },
      raqqa: {
        ar: "الرقة",
        en: "Raqqa",
        centersAr: ["الرقة", "الطبقة", "تل أبيض"],
        centersEn: ["Raqqa", "Tabqa", "Tell Abyad"],
      },
      hasakah: {
        ar: "الحسكة",
        en: "Hasakah",
        centersAr: ["الحسكة", "القامشلي", "المالكية", "رأس العين", "عامودا"],
        centersEn: ["Hasakah", "Qamishli", "Malikiyah", "Ras Al Ain", "Amuda"],
      },
      deirEzZor: {
        ar: "دير الزور",
        en: "Deir ez-Zor",
        centersAr: ["دير الزور", "الميادين", "البوكمال"],
        centersEn: ["Deir ez-Zor", "Mayadin", "Al Bukamal"],
      },
    },
  },

  palestine: {
    code: "palestine",
    nameEn: "Palestine",
    nameAr: "فلسطين",
    countryInAr: "فلسطين",
    countryInEn: "Palestine",
    divisions: {
      jerusalem: {
        ar: "القدس",
        en: "Jerusalem",
        centersAr: ["القدس", "أبو ديس", "العيزرية", "شعفاط", "بيت حنينا", "بيت صفافا", "سلوان"],
        centersEn: ["Jerusalem", "Abu Dis", "Al Eizariya", "Shuafat", "Beit Hanina", "Beit Safafa", "Silwan"],
      },
      ramallah: {
        ar: "رام الله والبيرة",
        en: "Ramallah and Al-Bireh",
        centersAr: ["رام الله", "البيرة", "بيرزيت", "سلواد", "بيت لقيا", "دير دبوان"],
        centersEn: ["Ramallah", "Al-Bireh", "Birzeit", "Silwad", "Beit Liqya", "Deir Dibwan"],
      },
      nablus: {
        ar: "نابلس",
        en: "Nablus",
        centersAr: ["نابلس", "بيتا", "حوارة", "عصيرة الشمالية", "بلاطة", "عقربا"],
        centersEn: ["Nablus", "Beita", "Huwara", "Asira Al Shamaliyah", "Balata", "Aqraba"],
      },
      bethlehem: {
        ar: "بيت لحم",
        en: "Bethlehem",
        centersAr: ["بيت لحم", "بيت جالا", "بيت ساحور", "الخضر", "الدهيشة"],
        centersEn: ["Bethlehem", "Beit Jala", "Beit Sahour", "Al Khader", "Dheisheh"],
      },
      hebron: {
        ar: "الخليل",
        en: "Hebron",
        centersAr: ["الخليل", "دورا", "يطا", "بني نعيم", "الظاهرية", "حلحول", "إذنا"],
        centersEn: ["Hebron", "Dura", "Yatta", "Bani Naim", "Al Dhahiriya", "Halhul", "Idhna"],
      },
      gaza: {
        ar: "غزة",
        en: "Gaza",
        centersAr: ["مدينة غزة", "الرمال", "الشجاعية", "الزيتون", "التفاح", "الصبرة"],
        centersEn: ["Gaza City", "Rimal", "Shujaiya", "Zeitoun", "Tuffah", "Sabra"],
      },
      jenin: {
        ar: "جنين",
        en: "Jenin",
        centersAr: ["جنين", "قباطية", "يعبد", "طوباس", "سيلة الحارثية"],
        centersEn: ["Jenin", "Qabatiya", "Yabad", "Tubas", "Silat Al Harthiya"],
      },
      tulkarm: {
        ar: "طولكرم",
        en: "Tulkarm",
        centersAr: ["طولكرم", "عنبتا", "بلعا", "بيت ليد"],
        centersEn: ["Tulkarm", "Anabta", "Bal'a", "Beit Lid"],
      },
      qalqilya: {
        ar: "قلقيلية",
        en: "Qalqilya",
        centersAr: ["قلقيلية", "جيوس", "عزون"],
        centersEn: ["Qalqilya", "Jayyous", "Azzun"],
      },
      salfit: {
        ar: "سلفيت",
        en: "Salfit",
        centersAr: ["سلفيت", "بديا", "عزون عتمة"],
        centersEn: ["Salfit", "Biddya", "Azzun Atma"],
      },
      jericho: {
        ar: "أريحا",
        en: "Jericho",
        centersAr: ["أريحا", "العوجا", "الجفتلك"],
        centersEn: ["Jericho", "Al Auja", "Al Jiftlik"],
      },
      northGaza: {
        ar: "شمال غزة",
        en: "North Gaza",
        centersAr: ["جباليا", "بيت لاهيا", "بيت حانون"],
        centersEn: ["Jabalia", "Beit Lahia", "Beit Hanoun"],
      },
      khanYunis: {
        ar: "خان يونس",
        en: "Khan Yunis",
        centersAr: ["خان يونس", "بني سهيلا", "عبسان"],
        centersEn: ["Khan Yunis", "Bani Suhaila", "Abasan"],
      },
      deirAlBalah: {
        ar: "دير البلح",
        en: "Deir al-Balah",
        centersAr: ["دير البلح", "المغازي", "النصيرات", "البريج"],
        centersEn: ["Deir al-Balah", "Maghazi", "Nuseirat", "Bureij"],
      },
      rafah: {
        ar: "رفح",
        en: "Rafah",
        centersAr: ["رفح", "الشوكة"],
        centersEn: ["Rafah", "Al Shouka"],
      },
    },
  },

  yemen: {
    code: "yemen",
    nameEn: "Yemen",
    nameAr: "اليمن",
    countryInAr: "اليمن",
    countryInEn: "Yemen",
    divisions: {
      sanaa: {
        ar: "صنعاء",
        en: "Sanaa",
        centersAr: ["صنعاء", "بني حشيش", "بني مطر", "همدان", "أرحب", "خولان"],
        centersEn: ["Sanaa", "Bani Hushaish", "Bani Matar", "Hamdan", "Arhab", "Khawlan"],
      },
      aden: {
        ar: "عدن",
        en: "Aden",
        centersAr: ["عدن", "التواهي", "المعلا", "كريتر", "خور مكسر", "الشيخ عثمان", "المنصورة", "دار سعد", "البريقة"],
        centersEn: ["Aden", "Tawahi", "Mualla", "Crater", "Khor Maksar", "Sheikh Othman", "Mansoura", "Dar Saad", "Buraiqeh"],
      },
      hodeidah: {
        ar: "الحديدة",
        en: "Hodeidah",
        centersAr: ["الحديدة", "زبيد", "باجل", "بيت الفقيه", "الحوك", "المراوعة"],
        centersEn: ["Hodeidah", "Zabid", "Bajil", "Bayt Al Faqih", "Al Hawk", "Marawah"],
      },
      taiz: {
        ar: "تعز",
        en: "Taiz",
        centersAr: ["تعز", "التربة", "المخا", "الحوبان", "شرعب الرونة"],
        centersEn: ["Taiz", "Turbah", "Mocha", "Al Hawban", "Sharab Al Rawnah"],
      },
      ibb: {
        ar: "إب",
        en: "Ibb",
        centersAr: ["إب", "جبلة", "يريم", "ذي السفال"],
        centersEn: ["Ibb", "Jibla", "Yarim", "Dhi Al Sufal"],
      },
      hadramaut: {
        ar: "حضرموت",
        en: "Hadramaut",
        centersAr: ["المكلا", "سيئون", "تريم", "الشحر", "الديس الشرقية", "قعوطة"],
        centersEn: ["Mukalla", "Seiyun", "Tarim", "Al Shihr", "Al Dis Al Sharqia", "Qaoutah"],
      },
      marib: {
        ar: "مأرب",
        en: "Marib",
        centersAr: ["مأرب", "حريب", "مدغل"],
        centersEn: ["Marib", "Harib", "Madghal"],
      },
      dhamar: {
        ar: "ذمار",
        en: "Dhamar",
        centersAr: ["ذمار", "معبر", "عنس", "وصاب العالي", "وصاب السافل"],
        centersEn: ["Dhamar", "Ma'bar", "Ans", "Wusab Al Ali", "Wusab Al Safil"],
      },
      hajjah: {
        ar: "حجة",
        en: "Hajjah",
        centersAr: ["حجة", "عبس", "المحابشة", "الشغادرة", "حرض"],
        centersEn: ["Hajjah", "Abs", "Al Mahabishah", "Al Shaghadirah", "Haradh"],
      },
      amanahAsimah: {
        ar: "أمانة العاصمة",
        en: "Amanat Al Asimah",
        centersAr: ["صنعاء القديمة", "شعوب", "الوحدة", "السبعين", "معين", "بني الحارث"],
        centersEn: ["Old Sanaa", "Shuub", "Wahdah", "Sabain", "Ma'in", "Bani Al Harith"],
      },
    },
  },

  libya: {
    code: "libya",
    nameEn: "Libya",
    nameAr: "ليبيا",
    countryInAr: "ليبيا",
    countryInEn: "Libya",
    divisions: {
      tripoli: {
        ar: "طرابلس",
        en: "Tripoli",
        centersAr: ["طرابلس", "تاجوراء", "قصر بن غشير", "جنزور", "سوق الجمعة", "أبو سليم"],
        centersEn: ["Tripoli", "Tajura", "Qasr Ben Ghashir", "Janzur", "Souq Al Juma", "Abu Salim"],
      },
      benghazi: {
        ar: "بنغازي",
        en: "Benghazi",
        centersAr: ["بنغازي", "قنفودة", "توكرة", "بنينا"],
        centersEn: ["Benghazi", "Ganfouda", "Tocra", "Benina"],
      },
      misrata: {
        ar: "مصراتة",
        en: "Misrata",
        centersAr: ["مصراتة", "زليتن", "الخمس", "سوق الخميس", "تاورغاء"],
        centersEn: ["Misrata", "Zliten", "Al Khums", "Souq Al Khamis", "Tawergha"],
      },
      zawiya: {
        ar: "الزاوية",
        en: "Zawiya",
        centersAr: ["الزاوية", "صرمان", "صبراتة", "بئر الغنم"],
        centersEn: ["Zawiya", "Sorman", "Sabratha", "Bir Al Ghanam"],
      },
      sebha: {
        ar: "سبها",
        en: "Sebha",
        centersAr: ["سبها", "براك", "مرزق", "أوباري", "غات"],
        centersEn: ["Sebha", "Brak", "Murzuq", "Ubari", "Ghat"],
      },
      sirte: {
        ar: "سرت",
        en: "Sirte",
        centersAr: ["سرت", "أبو قرين", "الجفرة", "هون"],
        centersEn: ["Sirte", "Abu Qurain", "Al Jufra", "Hun"],
      },
      alBayda: {
        ar: "البيضاء",
        en: "Al Bayda",
        centersAr: ["البيضاء", "شحات", "الأبيار", "المرج"],
        centersEn: ["Al Bayda", "Shahhat", "Al Abyar", "Al Marj"],
      },
      tobruk: {
        ar: "طبرق",
        en: "Tobruk",
        centersAr: ["طبرق", "أمساعد", "البردي"],
        centersEn: ["Tobruk", "Musaid", "Bardia"],
      },
      derna: {
        ar: "درنة",
        en: "Derna",
        centersAr: ["درنة", "القبة", "أم الرزم"],
        centersEn: ["Derna", "Al Qubbah", "Umm Al Razam"],
      },
      nalut: {
        ar: "نالوت",
        en: "Nalut",
        centersAr: ["نالوت", "غدامس", "درج", "كاباو"],
        centersEn: ["Nalut", "Ghadames", "Derj", "Kabaw"],
      },
    },
  },

  tunisia: {
    code: "tunisia",
    nameEn: "Tunisia",
    nameAr: "تونس",
    countryInAr: "تونس",
    countryInEn: "Tunisia",
    divisions: {
      tunis: {
        ar: "تونس",
        en: "Tunis",
        centersAr: ["تونس", "المدينة", "باب البحر", "لافايات", "المنزه", "الجمهورية"],
        centersEn: ["Tunis", "Medina", "Bab El Bahr", "Lafayette", "Menzah", "Republic"],
      },
      ariana: {
        ar: "أريانة",
        en: "Ariana",
        centersAr: ["أريانة", "رواد", "المنيهلة", "قلعة الأندلس", "سكرة"],
        centersEn: ["Ariana", "Raoued", "Mnihla", "Kalaat El Andalous", "Soukra"],
      },
      benArous: {
        ar: "بن عروس",
        en: "Ben Arous",
        centersAr: ["بن عروس", "المروج", "حمام الأنف", "رادس", "المحمدية"],
        centersEn: ["Ben Arous", "Mourouj", "Hammam Lif", "Rades", "Mohamedia"],
      },
      manouba: {
        ar: "منوبة",
        en: "Manouba",
        centersAr: ["منوبة", "دوار هيشر", "طبربة", "بطاطية"],
        centersEn: ["Manouba", "Douar Hicher", "Tebourba", "Bataïtia"],
      },
      nabeul: {
        ar: "نابل",
        en: "Nabeul",
        centersAr: ["نابل", "الحمامات", "قربة", "منزل تميم", "سليمان", "دار شعبان"],
        centersEn: ["Nabeul", "Hammamet", "Korba", "Menzel Temime", "Soliman", "Dar Chaabane"],
      },
      bizerte: {
        ar: "بنزرت",
        en: "Bizerte",
        centersAr: ["بنزرت", "منزل بورقيبة", "ماطر", "رأس الجبل", "غار الملح"],
        centersEn: ["Bizerte", "Menzel Bourguiba", "Mateur", "Ras Jebel", "Ghar El Melh"],
      },
      beja: {
        ar: "باجة",
        en: "Beja",
        centersAr: ["باجة", "مجاز الباب", "نفزة", "طبرقة"],
        centersEn: ["Beja", "Medjez El Bab", "Nefza", "Tabarka"],
      },
      jendouba: {
        ar: "جندوبة",
        en: "Jendouba",
        centersAr: ["جندوبة", "طبرقة", "غار الدماء", "بوسالم", "عين دراهم"],
        centersEn: ["Jendouba", "Tabarka", "Ghardimaou", "Bou Salem", "Ain Draham"],
      },
      kef: {
        ar: "الكاف",
        en: "Kef",
        centersAr: ["الكاف", "تاجروين", "دهماني", "نبر"],
        centersEn: ["Kef", "Tajerouine", "Dahmani", "Nebeur"],
      },
      siliana: {
        ar: "سليانة",
        en: "Siliana",
        centersAr: ["سليانة", "قعفور", "بوعرادة"],
        centersEn: ["Siliana", "Gaafour", "Bou Arada"],
      },
      sousse: {
        ar: "سوسة",
        en: "Sousse",
        centersAr: ["سوسة", "المنستير", "القصيبة والثريات", "الوردانين", "أكودة"],
        centersEn: ["Sousse", "Monastir", "Ksibet", "Ouardanine", "Akouda"],
      },
      monastir: {
        ar: "المنستير",
        en: "Monastir",
        centersAr: ["المنستير", "قصر هلال", "المكنين", "بنبلة", "خنيس"],
        centersEn: ["Monastir", "Ksar Hellal", "Moknine", "Bembla", "Khenis"],
      },
      mahdia: {
        ar: "المهدية",
        en: "Mahdia",
        centersAr: ["المهدية", "قصور الساف", "شربان", "السواسي"],
        centersEn: ["Mahdia", "Ksour Essef", "Chorbane", "Souassi"],
      },
      sfax: {
        ar: "صفاقس",
        en: "Sfax",
        centersAr: ["صفاقس", "طينة", "المحرس", "جبنيانة", "الحنشة"],
        centersEn: ["Sfax", "Thyna", "Mahres", "Jebeniana", "Hencha"],
      },
      kairouan: {
        ar: "القيروان",
        en: "Kairouan",
        centersAr: ["القيروان", "حاجب العيون", "الشبيكة", "بوحجلة", "السبيخة"],
        centersEn: ["Kairouan", "Hajeb El Ayoun", "Chebika", "Bouhajla", "Sbikha"],
      },
      kasserine: {
        ar: "القصرين",
        en: "Kasserine",
        centersAr: ["القصرين", "سبيبة", "تالة", "فوسانة"],
        centersEn: ["Kasserine", "Sbiba", "Thala", "Foussana"],
      },
      sidiBouzid: {
        ar: "سيدي بوزيد",
        en: "Sidi Bouzid",
        centersAr: ["سيدي بوزيد", "بئر الحفي", "المكناسي", "الرقاب"],
        centersEn: ["Sidi Bouzid", "Bir El Hafey", "Meknassy", "Regueb"],
      },
      gabes: {
        ar: "قابس",
        en: "Gabes",
        centersAr: ["قابس", "مطماطة", "الحامة", "مارث"],
        centersEn: ["Gabes", "Matmata", "Hamma", "Mareth"],
      },
      medenine: {
        ar: "مدنين",
        en: "Medenine",
        centersAr: ["مدنين", "جربة", "زرزيس", "بن قردان"],
        centersEn: ["Medenine", "Djerba", "Zarzis", "Ben Gardane"],
      },
      tataouine: {
        ar: "تطاوين",
        en: "Tataouine",
        centersAr: ["تطاوين", "غمراسن", "الصمار", "الذهيبة"],
        centersEn: ["Tataouine", "Ghomrassen", "Smar", "Dhehiba"],
      },
      gafsa: {
        ar: "قفصة",
        en: "Gafsa",
        centersAr: ["قفصة", "المتلوي", "الرديف", "المظيلة"],
        centersEn: ["Gafsa", "Metlaoui", "Redeyef", "Mdhilla"],
      },
      tozeur: {
        ar: "توزر",
        en: "Tozeur",
        centersAr: ["توزر", "نفطة", "دقاش"],
        centersEn: ["Tozeur", "Nefta", "Degache"],
      },
      kebili: {
        ar: "قبلي",
        en: "Kebili",
        centersAr: ["قبلي", "دوز", "سوق الأحد", "الفوار"],
        centersEn: ["Kebili", "Douz", "Souk Lahad", "Faouar"],
      },
      zaghouan: {
        ar: "زغوان",
        en: "Zaghouan",
        centersAr: ["زغوان", "الزريبة", "بئر مشارقة", "الفحص"],
        centersEn: ["Zaghouan", "Zriba", "Bir Mcherga", "Fahs"],
      },
    },
  },

  algeria: {
    code: "algeria",
    nameEn: "Algeria",
    nameAr: "الجزائر",
    countryInAr: "الجزائر",
    countryInEn: "Algeria",
    divisions: {
      algiers: {
        ar: "الجزائر العاصمة",
        en: "Algiers",
        centersAr: ["الجزائر", "باب الوادي", "بئر مراد رايس", "حسين داي", "بوزريعة", "الحراش", "براقي", "الشراقة"],
        centersEn: ["Algiers", "Bab El Oued", "Bir Mourad Rais", "Hussein Dey", "Bouzareah", "El Harrach", "Baraki", "Cheraga"],
      },
      oran: {
        ar: "وهران",
        en: "Oran",
        centersAr: ["وهران", "بئر الجير", "السانيا", "أرزيو", "بطيوة", "عين الترك"],
        centersEn: ["Oran", "Bir El Djir", "Es Senia", "Arzew", "Bethioua", "Ain El Turk"],
      },
      constantine: {
        ar: "قسنطينة",
        en: "Constantine",
        centersAr: ["قسنطينة", "الخروب", "حامة بوزيان", "زيغود يوسف", "عين عبيد"],
        centersEn: ["Constantine", "El Khroub", "Hamma Bouziane", "Zighoud Youcef", "Ain Abid"],
      },
      annaba: {
        ar: "عنابة",
        en: "Annaba",
        centersAr: ["عنابة", "البوني", "سيدي عمار", "شط عبد", "الحجار"],
        centersEn: ["Annaba", "El Bouni", "Sidi Ammar", "Chetaïbi", "El Hadjar"],
      },
      blida: {
        ar: "البليدة",
        en: "Blida",
        centersAr: ["البليدة", "بوفاريك", "بني مراد", "بوعرفة"],
        centersEn: ["Blida", "Boufarik", "Beni Mered", "Bouarfa"],
      },
      batna: {
        ar: "باتنة",
        en: "Batna",
        centersAr: ["باتنة", "أريس", "بريكة", "نقاوس", "مروانة"],
        centersEn: ["Batna", "Arris", "Barika", "N'Gaous", "Merouana"],
      },
      djelfa: {
        ar: "الجلفة",
        en: "Djelfa",
        centersAr: ["الجلفة", "حاسي بحبح", "مسعد", "عين وسارة"],
        centersEn: ["Djelfa", "Hassi Bahbah", "Messad", "Ain Ouessara"],
      },
      setif: {
        ar: "سطيف",
        en: "Sétif",
        centersAr: ["سطيف", "العلمة", "عين ولمان", "بوقاعة", "عين آزال"],
        centersEn: ["Sétif", "El Eulma", "Ain Oulmene", "Bougaa", "Ain Azel"],
      },
      biskra: {
        ar: "بسكرة",
        en: "Biskra",
        centersAr: ["بسكرة", "أوماش", "طولقة", "سيدي عقبة"],
        centersEn: ["Biskra", "Oumache", "Tolga", "Sidi Okba"],
      },
      tebessa: {
        ar: "تبسة",
        en: "Tébessa",
        centersAr: ["تبسة", "الشريعة", "بير العاتر", "الونزة"],
        centersEn: ["Tébessa", "Chéria", "Bir El Ater", "El Aouinet"],
      },
      bejaia: {
        ar: "بجاية",
        en: "Béjaïa",
        centersAr: ["بجاية", "أقبو", "خراطة", "أميزور"],
        centersEn: ["Béjaïa", "Akbou", "Kherrata", "Amizour"],
      },
      tiaret: {
        ar: "تيارت",
        en: "Tiaret",
        centersAr: ["تيارت", "قصر الشلالة", "فرندة", "السوقر"],
        centersEn: ["Tiaret", "Ksar Chellala", "Frenda", "Sougueur"],
      },
      tiziOuzou: {
        ar: "تيزي وزو",
        en: "Tizi Ouzou",
        centersAr: ["تيزي وزو", "أزفون", "ذراع الميزان", "بوغني"],
        centersEn: ["Tizi Ouzou", "Azeffoun", "Draa El Mizan", "Boghni"],
      },
      chlef: {
        ar: "الشلف",
        en: "Chlef",
        centersAr: ["الشلف", "تنس", "أولاد فارس", "الأبيض مجاجة"],
        centersEn: ["Chlef", "Ténès", "Ouled Fares", "El Abadia"],
      },
      skikda: {
        ar: "سكيكدة",
        en: "Skikda",
        centersAr: ["سكيكدة", "عزابة", "القل", "تمالوس"],
        centersEn: ["Skikda", "Azzaba", "Collo", "Tamalous"],
      },
      mostaganem: {
        ar: "مستغانم",
        en: "Mostaganem",
        centersAr: ["مستغانم", "عين نويصي", "بوقيراط", "سيدي علي"],
        centersEn: ["Mostaganem", "Ain Nouissy", "Bouguirat", "Sidi Ali"],
      },
      medea: {
        ar: "المدية",
        en: "Medea",
        centersAr: ["المدية", "بني سليمان", "عزيز", "قصر البخاري"],
        centersEn: ["Medea", "Beni Slimane", "Aziz", "Ksar El Boukhari"],
      },
      ouargla: {
        ar: "ورقلة",
        en: "Ouargla",
        centersAr: ["ورقلة", "حاسي مسعود", "تقرت"],
        centersEn: ["Ouargla", "Hassi Messaoud", "Touggourt"],
      },
      ghardaia: {
        ar: "غرداية",
        en: "Ghardaïa",
        centersAr: ["غرداية", "متليلي", "بريان", "زلفانة"],
        centersEn: ["Ghardaïa", "Metlili", "Berriane", "Zelfana"],
      },
      tlemcen: {
        ar: "تلمسان",
        en: "Tlemcen",
        centersAr: ["تلمسان", "المنصورة", "شتوان", "مغنية"],
        centersEn: ["Tlemcen", "Mansourah", "Chetouane", "Maghnia"],
      },
      mascara: {
        ar: "معسكر",
        en: "Mascara",
        centersAr: ["معسكر", "تيغنيف", "سيق"],
        centersEn: ["Mascara", "Tighennif", "Sig"],
      },
      bouira: {
        ar: "البويرة",
        en: "Bouira",
        centersAr: ["البويرة", "لخضرية", "المعمورة", "سور الغزلان"],
        centersEn: ["Bouira", "Lakhdaria", "M'Chedallah", "Sour El Ghozlane"],
      },
      boumerdes: {
        ar: "بومرداس",
        en: "Boumerdes",
        centersAr: ["بومرداس", "بغلية", "دلس", "ثنية"],
        centersEn: ["Boumerdes", "Beghlia", "Dellys", "Thenia"],
      },
    },
  },

  morocco: {
    code: "morocco",
    nameEn: "Morocco",
    nameAr: "المغرب",
    countryInAr: "المغرب",
    countryInEn: "Morocco",
    divisions: {
      casablancaSettat: {
        ar: "الدار البيضاء-سطات",
        en: "Casablanca-Settat",
        centersAr: ["الدار البيضاء", "المحمدية", "سطات", "الجديدة", "برشيد", "بن سليمان", "أزمور", "سيدي بنور"],
        centersEn: ["Casablanca", "Mohammedia", "Settat", "El Jadida", "Berrechid", "Ben Slimane", "Azemmour", "Sidi Bennour"],
      },
      rabatSaleKenitra: {
        ar: "الرباط-سلا-القنيطرة",
        en: "Rabat-Salé-Kénitra",
        centersAr: ["الرباط", "سلا", "القنيطرة", "تمارة", "الصخيرات", "الخميسات", "سيدي قاسم", "سيدي سليمان"],
        centersEn: ["Rabat", "Salé", "Kenitra", "Temara", "Skhirat", "Khemisset", "Sidi Kacem", "Sidi Slimane"],
      },
      marrakechSafi: {
        ar: "مراكش-آسفي",
        en: "Marrakech-Safi",
        centersAr: ["مراكش", "آسفي", "الصويرة", "قلعة السراغنة", "الشيشاوة", "اليوسفية", "الرحامنة"],
        centersEn: ["Marrakech", "Safi", "Essaouira", "Kalaat Sraghna", "Chichaoua", "Youssoufia", "Rhamna"],
      },
      fesMeknes: {
        ar: "فاس-مكناس",
        en: "Fès-Meknès",
        centersAr: ["فاس", "مكناس", "تازة", "صفرو", "مولاي يعقوب", "الحاجب", "بولمان", "إفران"],
        centersEn: ["Fes", "Meknes", "Taza", "Sefrou", "Moulay Yacoub", "Hajeb", "Boulemane", "Ifrane"],
      },
      tangierTetouan: {
        ar: "طنجة-تطوان-الحسيمة",
        en: "Tangier-Tétouan-Al Hoceima",
        centersAr: ["طنجة", "تطوان", "الحسيمة", "شفشاون", "العرائش", "المضيق", "الفنيدق", "القصر الكبير"],
        centersEn: ["Tangier", "Tétouan", "Al Hoceima", "Chefchaouen", "Larache", "M'diq", "Fnideq", "Ksar El Kebir"],
      },
      soussMassa: {
        ar: "سوس-ماسة",
        en: "Souss-Massa",
        centersAr: ["أكادير", "إنزكان", "تارودانت", "تزنيت", "شتوكة أيت باها", "طاطا"],
        centersEn: ["Agadir", "Inezgane", "Taroudant", "Tiznit", "Chtouka Ait Baha", "Tata"],
      },
      beniMellalKhenifra: {
        ar: "بني ملال-خنيفرة",
        en: "Béni Mellal-Khénifra",
        centersAr: ["بني ملال", "خنيفرة", "خريبكة", "الفقيه بن صالح", "أزيلال"],
        centersEn: ["Beni Mellal", "Khenifra", "Khouribga", "Fquih Ben Salah", "Azilal"],
      },
      oriental: {
        ar: "الشرق",
        en: "Oriental",
        centersAr: ["وجدة", "الناظور", "بركان", "تاوريرت", "جرادة", "الدريوش", "فجيج"],
        centersEn: ["Oujda", "Nador", "Berkane", "Taourirt", "Jerada", "Driouch", "Figuig"],
      },
      draaTafilalet: {
        ar: "درعة-تافيلالت",
        en: "Drâa-Tafilalet",
        centersAr: ["الرشيدية", "ورزازات", "زاكورة", "تنغير", "ميدلت"],
        centersEn: ["Errachidia", "Ouarzazate", "Zagora", "Tinghir", "Midelt"],
      },
      guelmimOuedNoun: {
        ar: "كلميم-واد نون",
        en: "Guelmim-Oued Noun",
        centersAr: ["كلميم", "سيدي إفني", "طانطان", "أسا الزاك"],
        centersEn: ["Guelmim", "Sidi Ifni", "Tan-Tan", "Assa-Zag"],
      },
      laayouneSakiaElHamra: {
        ar: "العيون-الساقية الحمراء",
        en: "Laâyoune-Sakia El Hamra",
        centersAr: ["العيون", "بوجدور", "طرفاية", "السمارة"],
        centersEn: ["Laayoune", "Boujdour", "Tarfaya", "Es Semara"],
      },
      dakhlaOuedEdDahab: {
        ar: "الداخلة-وادي الذهب",
        en: "Dakhla-Oued Ed-Dahab",
        centersAr: ["الداخلة", "أوسرد"],
        centersEn: ["Dakhla", "Aousserd"],
      },
    },
  },

  sudan: {
    code: "sudan",
    nameEn: "Sudan",
    nameAr: "السودان",
    countryInAr: "السودان",
    countryInEn: "Sudan",
    divisions: {
      khartoum: {
        ar: "الخرطوم",
        en: "Khartoum",
        centersAr: ["الخرطوم", "الخرطوم بحري", "أم درمان", "شرق النيل", "جبل أولياء", "كرري"],
        centersEn: ["Khartoum", "Khartoum North", "Omdurman", "East Nile", "Jebel Awlia", "Karari"],
      },
      gezira: {
        ar: "الجزيرة",
        en: "Gezira",
        centersAr: ["ود مدني", "الحصاحيصا", "المناقل", "الكاملين", "أم القرى"],
        centersEn: ["Wad Madani", "Hasaheisa", "Managil", "Kamlin", "Umm Al Qura"],
      },
      redSea: {
        ar: "البحر الأحمر",
        en: "Red Sea",
        centersAr: ["بورتسودان", "سواكن", "دنقناب", "طوكر"],
        centersEn: ["Port Sudan", "Suakin", "Dungunab", "Tokar"],
      },
      kassala: {
        ar: "كسلا",
        en: "Kassala",
        centersAr: ["كسلا", "خشم القربة", "أروما", "همشكوريب"],
        centersEn: ["Kassala", "Khashm El Girba", "Aroma", "Hameshkoreib"],
      },
      gedaref: {
        ar: "القضارف",
        en: "Gedaref",
        centersAr: ["القضارف", "الفاو", "دوكا", "القريشة"],
        centersEn: ["Gedaref", "Al Faw", "Doka", "Qureisha"],
      },
      whiteNile: {
        ar: "النيل الأبيض",
        en: "White Nile",
        centersAr: ["ربك", "كوستي", "الدويم", "تندلتي"],
        centersEn: ["Rabak", "Kosti", "Ed Dueim", "Tendelti"],
      },
      blueNile: {
        ar: "النيل الأزرق",
        en: "Blue Nile",
        centersAr: ["الدمازين", "الروصيرص", "قيسان", "التضامن"],
        centersEn: ["Ed Damazin", "Roseires", "Geissan", "Tadamon"],
      },
      sennar: {
        ar: "سنار",
        en: "Sennar",
        centersAr: ["سنجة", "سنار", "الدندر", "أبو حجار"],
        centersEn: ["Sinja", "Sennar", "Dinder", "Abu Hujar"],
      },
      northern: {
        ar: "الشمالية",
        en: "Northern",
        centersAr: ["دنقلا", "مروي", "كريمة", "حلفا", "الدبة"],
        centersEn: ["Dongola", "Merowe", "Karima", "Halfa", "Ed Debba"],
      },
      riverNile: {
        ar: "نهر النيل",
        en: "River Nile",
        centersAr: ["الدامر", "عطبرة", "شندي", "بربر", "أبو حمد"],
        centersEn: ["Ed Damer", "Atbara", "Shendi", "Berber", "Abu Hamad"],
      },
      northKordofan: {
        ar: "شمال كردفان",
        en: "North Kordofan",
        centersAr: ["الأبيض", "بارا", "أم روابة", "الرهد"],
        centersEn: ["El Obeid", "Bara", "Umm Ruwaba", "Er Rahad"],
      },
      southKordofan: {
        ar: "جنوب كردفان",
        en: "South Kordofan",
        centersAr: ["كادقلي", "الدلنج", "أبو جبيهة", "رشاد"],
        centersEn: ["Kadugli", "Dilling", "Abu Jubaiha", "Rashad"],
      },
      westKordofan: {
        ar: "غرب كردفان",
        en: "West Kordofan",
        centersAr: ["الفولة", "بابنوسة", "المجلد", "لقاوة"],
        centersEn: ["El Fula", "Babanusa", "Muglad", "Lagawa"],
      },
      northDarfur: {
        ar: "شمال دارفور",
        en: "North Darfur",
        centersAr: ["الفاشر", "كتم", "مليط", "كبكابية", "أم كدادة"],
        centersEn: ["El Fasher", "Kutum", "Mellit", "Kebkabiya", "Umm Kaddada"],
      },
      southDarfur: {
        ar: "جنوب دارفور",
        en: "South Darfur",
        centersAr: ["نيالا", "قريضة", "كاس", "برام", "شعيرية"],
        centersEn: ["Nyala", "Gereida", "Kass", "Buram", "Shearia"],
      },
      westDarfur: {
        ar: "غرب دارفور",
        en: "West Darfur",
        centersAr: ["الجنينة", "كرينك", "هبيلا", "فوربرنقا"],
        centersEn: ["El Geneina", "Kereneik", "Habila", "Forobaranga"],
      },
      centralDarfur: {
        ar: "وسط دارفور",
        en: "Central Darfur",
        centersAr: ["زالنجي", "وادي صالح", "أم دخن", "بندسي"],
        centersEn: ["Zalingei", "Wadi Salih", "Umm Dukhun", "Bendisi"],
      },
      eastDarfur: {
        ar: "شرق دارفور",
        en: "East Darfur",
        centersAr: ["الضعين", "عديلة", "أبو كارنكا", "أبو جابرة"],
        centersEn: ["Ed Daein", "Adilla", "Abu Karinka", "Abu Jabra"],
      },
    },
  },
};

export type CountryKey = keyof typeof MENA_COUNTRIES;

export function getCountry(key: string): Country | undefined {
  return MENA_COUNTRIES[key];
}

export function centerListForDivision(
  countryKey: string,
  divisionKey: string,
  locale: "en" | "ar",
): string[] {
  const c = MENA_COUNTRIES[countryKey];
  if (!c) return [];
  const d = c.divisions[divisionKey];
  if (!d) return [];
  return locale === "ar" ? d.centersAr : d.centersEn;
}

export function divisionLabel(
  countryKey: string,
  divisionKey: string,
  locale: "en" | "ar",
): string {
  const d = MENA_COUNTRIES[countryKey]?.divisions[divisionKey];
  if (!d) return divisionKey;
  return locale === "ar" ? d.ar : d.en;
}
