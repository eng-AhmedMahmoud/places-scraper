export const EGYPT_GOVERNORATES: Record<string, { ar: string; centersAr: string[]; centersEn: string[] }> = {
  cairo: {
    ar: "القاهرة",
    centersAr: ["القاهرة", "حلوان", "المعادي", "مدينة نصر", "مصر الجديدة", "الزمالك", "التبين", "المقطم", "العبور"],
    centersEn: ["Cairo", "Helwan", "Maadi", "Nasr City", "Heliopolis", "Zamalek", "Tebbin", "Mokattam", "Obour"],
  },
  giza: {
    ar: "الجيزة",
    centersAr: ["الجيزة", "6 أكتوبر", "الشيخ زايد", "أوسيم", "كرداسة", "أبو النمرس", "الحوامدية", "البدرشين", "العياط", "الصف", "أطفيح", "الواحات البحرية"],
    centersEn: ["Giza", "6th of October", "Sheikh Zayed", "Oseem", "Kerdasa", "Abu Al Numrus", "Al Hawamdia", "Al Badrashin", "Al Ayat", "Al Saff", "Atfih", "Bahariya Oasis"],
  },
  alexandria: {
    ar: "الإسكندرية",
    centersAr: ["الإسكندرية", "برج العرب", "العامرية", "المنتزه", "شرق", "وسط", "غرب", "الجمرك", "العجمي"],
    centersEn: ["Alexandria", "Borg El Arab", "Al Amreya", "Al Montaza", "East", "Middle", "West", "Al Gomrok", "Al Agamy"],
  },
  qalyubia: {
    ar: "القليوبية",
    centersAr: ["بنها", "قليوب", "شبرا الخيمة", "الخانكة", "طوخ", "كفر شكر", "قها", "العبور", "شبين القناطر"],
    centersEn: ["Banha", "Qalyub", "Shubra El Kheima", "El Khanka", "Toukh", "Kafr Shukr", "Qaha", "Obour", "Shebin El Qanater"],
  },
  gharbia: {
    ar: "الغربية",
    centersAr: ["طنطا", "المحلة الكبرى", "زفتى", "السنطة", "كفر الزيات", "بسيون", "قطور", "سمنود"],
    centersEn: ["Tanta", "El Mahalla El Kubra", "Zefta", "El Santa", "Kafr El Zayat", "Basyoun", "Qutur", "Samannud"],
  },
  dakahlia: {
    ar: "الدقهلية",
    centersAr: ["المنصورة", "ميت غمر", "طلخا", "بلقاس", "أجا", "الجمالية", "دكرنس", "شربين", "منية النصر", "السنبلاوين", "نبروه", "تمي الأمديد", "المنزلة", "المطرية"],
    centersEn: ["Mansoura", "Mit Ghamr", "Talkha", "Belqas", "Aga", "El Gamalya", "Dekernes", "Sherbin", "Menyet El Nasr", "El Senbellawein", "Nabroh", "Tami El Amdeed", "El Manzala", "El Matareya"],
  },
  sharqia: {
    ar: "الشرقية",
    centersAr: ["الزقازيق", "بلبيس", "منيا القمح", "أبو حماد", "فاقوس", "أبو كبير", "كفر صقر", "الحسينية", "ديرب نجم", "ههيا", "الإبراهيمية", "مشتول السوق", "العاشر من رمضان", "الصالحية الجديدة"],
    centersEn: ["Zagazig", "Belbeis", "Minya El Qamh", "Abu Hammad", "Faqous", "Abu Kabir", "Kafr Saqr", "El Husseinya", "Deirb Negm", "Hehya", "El Ibrahimiya", "Mashtoul El Souq", "10th of Ramadan", "New Salheya"],
  },
  monufia: {
    ar: "المنوفية",
    centersAr: ["شبين الكوم", "منوف", "أشمون", "الباجور", "قويسنا", "بركة السبع", "تلا", "السادات", "الشهداء"],
    centersEn: ["Shebin El Kom", "Menouf", "Ashmoun", "El Bagour", "Quesna", "Berket El Sabaa", "Tala", "Sadat City", "El Shohada"],
  },
  beheira: {
    ar: "البحيرة",
    centersAr: ["دمنهور", "كفر الدوار", "رشيد", "إدكو", "أبو حمص", "المحمودية", "أبو المطامير", "حوش عيسى", "شبراخيت", "إيتاي البارود", "كوم حمادة", "بدر", "وادي النطرون"],
    centersEn: ["Damanhur", "Kafr El Dawwar", "Rashid", "Edku", "Abu Homs", "El Mahmoudeya", "Abu El Matamir", "Housh Eissa", "Shubrakhit", "Etay El Baroud", "Kom Hamada", "Badr", "Wadi El Natrun"],
  },
  kafrElSheikh: {
    ar: "كفر الشيخ",
    centersAr: ["كفر الشيخ", "دسوق", "فوه", "مطوبس", "قلين", "سيدي سالم", "الرياض", "الحامول", "بيلا", "بلطيم"],
    centersEn: ["Kafr El Sheikh", "Desouk", "Fowa", "Metoubes", "Qallin", "Sidi Salem", "El Riyad", "El Hamool", "Beila", "Baltim"],
  },
  damietta: {
    ar: "دمياط",
    centersAr: ["دمياط", "فارسكور", "الزرقا", "كفر سعد", "رأس البر", "عزبة البرج"],
    centersEn: ["Damietta", "Faraskur", "El Zarqa", "Kafr Saad", "Ras El Bar", "Ezbet El Borg"],
  },
  portSaid: {
    ar: "بورسعيد",
    centersAr: ["بورسعيد", "بورفؤاد"],
    centersEn: ["Port Said", "Port Fouad"],
  },
  ismailia: {
    ar: "الإسماعيلية",
    centersAr: ["الإسماعيلية", "القنطرة شرق", "القنطرة غرب", "فايد", "التل الكبير", "أبو صوير", "القصاصين"],
    centersEn: ["Ismailia", "El Qantara East", "El Qantara West", "Fayed", "Tal El Kabeer", "Abu Sweir", "El Qassaseen"],
  },
  suez: {
    ar: "السويس",
    centersAr: ["السويس", "الجناين", "عتاقة", "فيصل"],
    centersEn: ["Suez", "El Ganayen", "Ataka", "Faisal"],
  },
  northSinai: {
    ar: "شمال سيناء",
    centersAr: ["العريش", "رفح", "بئر العبد", "الشيخ زويد", "نخل", "الحسنة"],
    centersEn: ["Arish", "Rafah", "Bir El Abd", "Sheikh Zuweid", "Nakhl", "El Hasana"],
  },
  southSinai: {
    ar: "جنوب سيناء",
    centersAr: ["شرم الشيخ", "دهب", "نويبع", "طابا", "سانت كاترين", "أبو رديس", "أبو زنيمة", "رأس سدر", "طور سيناء"],
    centersEn: ["Sharm El Sheikh", "Dahab", "Nuweiba", "Taba", "Saint Catherine", "Abu Rudeis", "Abu Zenima", "Ras Sedr", "El Tor"],
  },
  beniSuef: {
    ar: "بني سويف",
    centersAr: ["بني سويف", "الواسطى", "ناصر", "إهناسيا", "ببا", "الفشن", "سمسطا"],
    centersEn: ["Beni Suef", "El Wasta", "Nasser", "Ehnasia", "Beba", "El Fashn", "Samasta"],
  },
  faiyum: {
    ar: "الفيوم",
    centersAr: ["الفيوم", "سنورس", "طامية", "إطسا", "يوسف الصديق", "أبشواي"],
    centersEn: ["Faiyum", "Sinnuris", "Tamiya", "Itsa", "Yusuf El Sadeeq", "Ebsheway"],
  },
  minya: {
    ar: "المنيا",
    centersAr: ["المنيا", "سمالوط", "مطاي", "بني مزار", "مغاغة", "العدوة", "أبو قرقاص", "ملوي", "دير مواس"],
    centersEn: ["Minya", "Samalut", "Matai", "Beni Mazar", "Maghagha", "El Adwa", "Abu Qurqas", "Mallawi", "Deir Mawas"],
  },
  asyut: {
    ar: "أسيوط",
    centersAr: ["أسيوط", "ديروط", "القوصية", "منفلوط", "أبنوب", "الفتح", "أبو تيج", "الغنايم", "صدفا", "ساحل سليم", "البداري"],
    centersEn: ["Asyut", "Dairut", "El Qusiya", "Manfalut", "Abnub", "El Fath", "Abu Teeg", "El Ghanayem", "Sadfa", "Sahel Salim", "El Badari"],
  },
  sohag: {
    ar: "سوهاج",
    centersAr: ["سوهاج", "أخميم", "البلينا", "الجرجا", "دار السلام", "جهينة", "ساقلتة", "طما", "طهطا", "المراغة", "المنشاة", "الكوثر"],
    centersEn: ["Sohag", "Akhmim", "El Balyana", "El Girga", "Dar El Salam", "Guhayna", "Saqolta", "Tama", "Tahta", "El Maragha", "El Monshaa", "El Kawthar"],
  },
  qena: {
    ar: "قنا",
    centersAr: ["قنا", "أبو تشت", "فرشوط", "نجع حمادي", "دشنا", "الوقف", "قفط", "قوص", "نقادة"],
    centersEn: ["Qena", "Abu Tesht", "Farshout", "Nag Hammadi", "Dishna", "El Waqf", "Qift", "Qus", "Naqada"],
  },
  luxor: {
    ar: "الأقصر",
    centersAr: ["الأقصر", "القرنة", "أرمنت", "إسنا", "الطود", "الزينية", "البياضية"],
    centersEn: ["Luxor", "El Qurna", "Armant", "Esna", "El Tod", "El Zeneya", "El Bayadeya"],
  },
  aswan: {
    ar: "أسوان",
    centersAr: ["أسوان", "دراو", "كوم أمبو", "نصر النوبة", "إدفو", "كلابشة"],
    centersEn: ["Aswan", "Daraw", "Kom Ombo", "Nasr El Nuba", "Edfu", "Kalabsha"],
  },
  redSea: {
    ar: "البحر الأحمر",
    centersAr: ["الغردقة", "سفاجا", "القصير", "مرسى علم", "رأس غارب", "الشلاتين", "حلايب"],
    centersEn: ["Hurghada", "Safaga", "El Quseir", "Marsa Alam", "Ras Gharib", "Shalateen", "Halayeb"],
  },
  newValley: {
    ar: "الوادي الجديد",
    centersAr: ["الخارجة", "الداخلة", "باريس", "الفرافرة", "بلاط"],
    centersEn: ["El Kharga", "El Dakhla", "Paris", "El Farafra", "Balat"],
  },
};

export type GovernorateKey = keyof typeof EGYPT_GOVERNORATES;

export function centerListForKey(key: string, locale: "en" | "ar"): string[] {
  const g = EGYPT_GOVERNORATES[key];
  if (!g) return [];
  return locale === "ar" ? g.centersAr : g.centersEn;
}
