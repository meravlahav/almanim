// זכויות – כולל סכומים (amount), תנאים (eligibility) ותאריך עדכון (asOf)
// ---------------------------------------------------------------
// איך מעדכנים: משנים רק את הטקסט שבין המירכאות "..." ושומרים.
// לא למחוק פסיקים, מירכאות או סוגריים. מירכאות בתוך טקסט נכתבות כך: \"
// אחרי שינוי סכום – לעדכן גם את "asOf" של אותו פריט (ואת asOf בקובץ site.js).
// ---------------------------------------------------------------
window.DATA_rights = [
  {
    "id": "R09",
    "priority": 1,
    "title": "גמלת תלויים (תאונת עבודה)",
    "summary": "קצבה חודשית כשהפטירה הוכרה כתאונת עבודה – כולל תאונה בדרך לעבודה או ממנה.",
    "eligibility": "בני המשפחה של הנפטר – בן או בת הזוג והילדים.",
    "amount": "אחוז מקצבת נכות מלאה, לפי ההכנסה של הנפטר.",
    "howToApply": "תביעה במחלקת נפגעי עבודה בביטוח לאומי.",
    "deadline": "מומלץ להגיש תוך שנה מיום הפטירה.",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/גמלת_תלויים_לבני_משפחה_של_נפטר_מפגיעה_בעבודה",
    "sourceUrl": "https://www.kolzchut.org.il/he/גמלת_תלויים_לבני_משפחה_של_נפטר_מפגיעה_בעבודה",
    "categories": [
      "work",
      "road"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R19",
    "priority": 1,
    "title": "תגמול והטבות ממשרד הביטחון",
    "summary": "תגמול חודשי והטבות לאלמנות ואלמנים של חללי צה\"ל וכוחות הביטחון.",
    "eligibility": "בני ובנות זוג, כולל ידועים בציבור, של חללים שהוכרו.",
    "amount": "תגמול חודשי – למשל 10,267 ₪ בלי ילדים (מתחת לגיל 60), 12,995 ₪ עם ילד אחד (מ-1.2.2026). ועוד הטבות: השתתפות בהוצאות אבל 8,795 ₪, מענק אזכרה שנתי 1,109 ₪, מענק בר/בת מצווה ליתום 10,978 ₪.",
    "howToApply": "דרך עובד/ת הרווחה במחוז, או במרכז השירות 03-7776700.",
    "deadline": "",
    "note": "במקרה של זכאות גם לקצבת שאירים מביטוח לאומי – צריך לבחור באחת מהן.",
    "officialUrl": "https://mishpahot-hantzaha.mod.gov.il/benefits/widows",
    "sourceUrl": "https://mishpahot-hantzaha.mod.gov.il/benefits/widows",
    "categories": [
      "war"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R20",
    "priority": 1,
    "title": "תגמול והטבות לחללי פעולות איבה",
    "summary": "תגמול חודשי, שיקום ומענקים מאגף נפגעי פעולות איבה בביטוח לאומי.",
    "eligibility": "אלמנות ואלמנים, כולל ידועים בציבור, של מי שהוכרו כחללי פעולת איבה.",
    "amount": "לפי מספר הילדים. לפי טבלת ביטוח לאומי (בתוקף מ-1.1.2025): 10,525 ₪ בלי ילדים, 12,995 ₪ עם ילד אחד. מענק בר/בת מצווה ליתום 10,978 ₪.",
    "howToApply": "תביעה במחלקת נפגעי פעולות איבה בסניף ביטוח לאומי.",
    "deadline": "להגיש תוך 12 חודשים. אפשר לקבל רטרואקטיבית עד 12 חודשים.",
    "note": "מ-2026 נוספו הטבות, למשל תוספת בשנת האבל הראשונה. נישואים מחדש לא מפסיקים את התגמול. במקרה של זכאות גם לקצבת שאירים – צריך לבחור באחת מהן.",
    "officialUrl": "https://www.btl.gov.il/benefits/Victims_of_Hostilities/תגמולים%20למשפחות%20הנספים%20בפעולות%20איבה/Pages/תגמולים%20חודשיים%20לאלמן%20אלמנה.aspx",
    "sourceUrl": "https://www.btl.gov.il/benefits/Victims_of_Hostilities/תגמולים%20למשפחות%20הנספים%20בפעולות%20איבה/Pages/תגמולים%20חודשיים%20לאלמן%20אלמנה.aspx",
    "categories": [
      "terror"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R21",
    "priority": 1,
    "title": "פיצויים בתאונת דרכים",
    "summary": "פיצויים מביטוח החובה של הרכב, או מקרנית כשאין ביטוח.",
    "eligibility": "בן או בת הזוג והילדים (תביעת תלויים), וגם היורשים (תביעת עיזבון).",
    "amount": "לפי פסק דין או הסכם.",
    "howToApply": "מומלץ לפנות לעורך דין לנזיקין. שכר הטרחה בתאונות דרכים מוגבל בחוק.",
    "deadline": "עד 7 שנים מיום התאונה.",
    "note": "אם התאונה הייתה בדרך לעבודה או ממנה, ייתכן שמגיעה גם גמלת תלויים מביטוח לאומי.",
    "officialUrl": "https://www.kolzchut.org.il/he/תביעה_לקבלת_פיצויים_בגין_נזקי_גוף_בתאונת_דרכים",
    "sourceUrl": "https://www.kolzchut.org.il/he/תביעה_לקבלת_פיצויים_בגין_נזקי_גוף_בתאונת_דרכים",
    "categories": [
      "road"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R22",
    "priority": 1,
    "title": "מרכזי סיוע למשפחות שכולות",
    "summary": "ליווי, טיפול וקבוצות תמיכה מטעם משרד הרווחה.",
    "eligibility": "בני משפחה קרובים של מי שנהרג בתאונת דרכים, התאבד או נרצח.",
    "amount": "",
    "howToApply": "פונים ישירות למרכזי הסיוע (מופעלים על ידי בשביל החיים ומרכז אלה).",
    "deadline": "",
    "note": "טיפול זוגי ומשפחתי אפשר לקבל גם בתחנות לטיפול משפחתי ברשות, במחיר סמלי.",
    "officialUrl": "https://www.gov.il/he/Departments/DynamicCollectors/molsa-bereaved-families-spacial-support-center",
    "sourceUrl": "https://www.kolzchut.org.il/he/מרכזי_סיוע_למשפחות_שכולות_בעקבות_תאונת_דרכים,_עבירת_המתה_או_התאבדות",
    "categories": [
      "road",
      "suicide",
      "murder"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [
      {
        "type": "local",
        "label": "לפי אזור מגורים",
        "text": "המרכזים פועלים באזורים שונים בארץ, וטיפול משפחתי ניתן גם בתחנות לטיפול משפחתי ברשות המקומית."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R25",
    "priority": 1,
    "title": "סיוע לבני משפחה של נרצחים",
    "summary": "השתתפות בהוצאות האבל, סיוע משפטי וטיפול – באישור ועדת זכאות.",
    "eligibility": "בני משפחה מדרגה ראשונה של מי שנרצח בישראל, אם היה תושב ישראל ולא היה מעורב בהליך פלילי.",
    "amount": "השתתפות בהוצאות האבל הראשונות, סיוע וייצוג משפטי, טיפול וליווי.",
    "howToApply": "טופס מקוון 'בקשה לקבלת סיוע'. תשובה תוך 30 יום. לשאלות: מוקד משרד הרווחה 118.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/ועדת_זכאות_לנפגעי_עבירות_המתה",
    "sourceUrl": "https://www.kolzchut.org.il/he/ועדת_זכאות_לנפגעי_עבירות_המתה",
    "categories": [
      "murder"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R01",
    "priority": 2,
    "title": "קצבת שאירים",
    "summary": "קצבה חודשית מביטוח לאומי לך ולילדים.",
    "eligibility": "עם ילדים – בכל גיל. בלי ילדים – מגיל 40 (לגבר שהתאלמן ואין לו ילדים – הזכאות תלויה בהכנסה). כולל ידועים בציבור ובני זוג מאותו מין.",
    "amount": "עם ילד אחד 2,700 ₪ · עם שני ילדים 3,562 ₪ · כל ילד נוסף 862 ₪ · בלי ילדים 1,381 ₪ (גיל 40–50) או 1,838 ₪ (מגיל 50). בנוסף תוספת ותק.",
    "howToApply": "טופס תביעה T410 – באתר ביטוח לאומי, בסניף או בסריקה. בדרך כלל הטופס נשלח הביתה.",
    "deadline": "להגיש תוך 12 חודשים. אפשר לקבל רטרואקטיבית עד 12 חודשים בלבד.",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/pages/default.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/קצבת_שאירים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R03",
    "priority": 2,
    "title": "מענק פטירה",
    "summary": "מענק חד-פעמי, אם בן או בת הזוג קיבלו קצבה מביטוח לאומי.",
    "eligibility": "בן או בת זוג של מי שקיבל ביום הפטירה קצבה מביטוח לאומי – למשל נכות, אזרח ותיק או הבטחת הכנסה.",
    "amount": "10,514 ₪",
    "howToApply": "בדרך כלל משולם אוטומטית. אם לא הגיע – פונים לסניף ביטוח לאומי.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/מענק_פטירה_לשאירים",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_פטירה_לשאירים",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R26",
    "priority": 2,
    "title": "פיצויי פיטורים לשאירים",
    "summary": "אם בן או בת הזוג היו שכירים – מגיעים לך פיצויי פיטורים מהמעסיק.",
    "eligibility": "בן/בת הזוג (כולל ידועים בציבור) וילדים שהנפטר פרנס. בתנאי שעבד לפחות שנה אצל אותו מעסיק.",
    "amount": "לפי השכר והוותק. פטור ממס עד תקרה: שתי המשכורות האחרונות כפול שנות העבודה, עד 27,500 ₪ לכל שנה.",
    "howToApply": "להודיע למעסיק. המעסיק ממלא טופס 161. אם הסכום מעל התקרה – צריך אישור מרשות המסים.",
    "deadline": "",
    "note": "הפיצויים לא חלק מהעיזבון: לא צריך צו ירושה, וחובות של הנפטר לא מקוזזים מהם.",
    "officialUrl": "https://www.kolzchut.org.il/he/פיצויי_פיטורים_לשאירים_של_עובד_שנפטר",
    "sourceUrl": "https://www.kolzchut.org.il/he/פיצויי_פיטורים_לשאירים_של_עובד_שנפטר",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R27",
    "priority": 2,
    "title": "תוספת השלמת הכנסה לקצבת שאירים",
    "summary": "תוספת חודשית לקצבת השאירים, בהתאם להכנסה.",
    "eligibility": "מקבלי קצבת שאירים שעומדים במבחן הכנסות ורכוש: קצבת השאירים וההכנסות האחרות מתחת לתקרה שנקבעה, ובלי רכב ששוויו מעל 65,343 ₪ (יש חריגים). מתחת לגיל פרישה – צריך גם להירשם בלשכת התעסוקה (יש פטורים, למשל להורה יחיד לילד מתחת לגיל 2).",
    "amount": "משתנה לפי ההכנסה וההרכב המשפחתי.",
    "howToApply": "תביעה לתוספת השלמת הכנסה בביטוח לאומי – באתר, בסניף או במוקד הטלפוני.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/t.hvtachat.hachnasa/Pages/%d7%aa%d7%a0%d7%90%d7%99%d7%94%d7%96%d7%9b%d7%90%d7%95%d7%aa%d7%9c%d7%aa%d7%95%d7%a1%d7%a4%d7%aa%d7%94%d7%a9%d7%9c%d7%9e%d7%aa%d7%94%d7%9b%d7%a0%d7%a1%d7%94.aspx",
    "sourceUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/t.hvtachat.hachnasa/Pages/%d7%aa%d7%a0%d7%90%d7%99%d7%94%d7%96%d7%9b%d7%90%d7%95%d7%aa%d7%9c%d7%aa%d7%95%d7%a1%d7%a4%d7%aa%d7%94%d7%a9%d7%9c%d7%9e%d7%aa%d7%94%d7%9b%d7%a0%d7%a1%d7%94.aspx",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [
      {
        "type": "income",
        "label": "תלוי בהכנסה",
        "text": "הזכאות תלויה בהכנסה וברכוש, לפי מבחן של ביטוח לאומי."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R02",
    "priority": 2.5,
    "title": "מענק שאירים",
    "summary": "מענק חד-פעמי כשאין זכאות לקצבה חודשית.",
    "eligibility": "אלמנה או אלמן מתחת לגיל 40, בלי ילדים.",
    "amount": "36 קצבאות חודשיות.",
    "howToApply": "באותה תביעה של קצבת שאירים (T410).",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/Pages/מענק%20שאירים.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_שאירים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "noKidsOnly",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R04",
    "priority": 3,
    "title": "דמי מחיה ליתומים",
    "summary": "תשלום חודשי ליתומים שלומדים, מכיתה ט' ועד גיל 20.",
    "eligibility": "יתום/ה מתחת לגיל 20 שסיים/ה 8 שנות לימוד ולומד/ת לפחות 24 שעות בשבוע. משולם להורה – רק אם ההכנסה החודשית של ההורה והילד יחד נמוכה מ-15,696 ₪ (ועוד 964 ₪ לכל ילד נוסף). קצבאות ביטוח לאומי והכנסה של הילד מעבודה לא נספרות.",
    "amount": "683 ₪ לחודש כשההורה מקבל קצבת שאירים עם תוספת לילד; אחרת 946 ₪.",
    "howToApply": "טופס תביעה לדמי מחיה, עם אישור לימודים ואישורי הכנסה.",
    "deadline": "מגישים מחדש לפני כל שנת לימודים.",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/shiuraihakizba/Pages/dmi-micya1.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/דמי_מחיה_ליתומים_(שאירים)",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 13,
    "childAgeMax": 20,
    "flags": [
      {
        "type": "income",
        "label": "תלוי בהכנסה",
        "text": "הזכאות תלויה בהכנסה של ההורה והילד יחד."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R05",
    "priority": 3,
    "title": "מענק בר/בת מצווה ליתום",
    "summary": "מענק חד-פעמי בגיל מצוות.",
    "eligibility": "בת בגיל 12, בן בגיל 13.",
    "amount": "7,009 ₪",
    "howToApply": "בדרך כלל משולם אוטומטית. אם לא הגיע – פונים לסניף.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/מענק_בר_מצווה_למקבלי_קצבת_שאירים",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_בר_מצווה_למקבלי_קצבת_שאירים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 12,
    "childAgeMax": 13,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R06",
    "priority": 3,
    "title": "מענק לימודים",
    "summary": "מענק שנתי לכל ילד בגיל בית ספר.",
    "eligibility": "הורה עצמאי (גם אלמן/ה) בלי בן/בת זוג. ילדים שנולדו בשנים 2009–2020.",
    "amount": "1,204 ₪ לכל ילד",
    "howToApply": "בפעם הראשונה מגישים תביעה; אחר כך משולם אוטומטית.",
    "deadline": "משולם באוגוסט.",
    "note": "הסכום והשנים נכונים לשנת הלימודים שהתחילה בספטמבר 2026.",
    "officialUrl": "https://www.btl.gov.il/benefits/children/מענק%20לימודים/Pages/תנאי%20זכאות.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_לימודים",
    "categories": [
      "all"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 5,
    "childAgeMax": 17,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R11",
    "priority": 3,
    "title": "נקודות זיכוי במס הכנסה",
    "summary": "פחות מס הכנסה להורים עובדים שמגדלים ילדים.",
    "eligibility": "הורה עובד/ת לילדים עד גיל 18. אלמן/ה מקבל/ת גם נקודה נוספת כ'הורה אחד'.",
    "amount": "כל נקודת זיכוי חוסכת 242 ₪ בחודש.",
    "howToApply": "לעדכן את טופס 101 אצל המעסיק. את מספר הנקודות המדויק בודקים בסימולטור של רשות המסים. מה שלא נוצל – אפשר לקבל בהחזר מס עד 6 שנים אחורה.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/נקודות_זיכוי_ממס_הכנסה",
    "sourceUrl": "https://www.kolzchut.org.il/he/נקודות_זיכוי_ממס_הכנסה_ל%22הורה_אחד%22_עבור_גידול_ילדיו",
    "categories": [
      "all"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 0,
    "childAgeMax": 18,
    "flags": [
      {
        "type": "work",
        "label": "למי שעובד/ת",
        "text": "נקודות זיכוי מקטינות את מס ההכנסה, ולכן מועילות רק כשיש הכנסה ממשכורת או מעבודה."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R14",
    "priority": 3,
    "title": "מענק לילדים מכספי עיזבונות",
    "summary": "מענק לצורכי לימודים ופנאי של הילדים, דרך העובד/ת הסוציאלי/ת.",
    "eligibility": "ילדים שאחד מהוריהם נפטר, עד גיל 18 (19 אם לומדים), שזקוקים לסיוע כלכלי לפי המלצת העובד/ת הסוציאלי/ת, כשאין מקור אחר למימון.",
    "amount": "",
    "howToApply": "פונים למחלקה לשירותים חברתיים. העובד/ת הסוציאלי/ת מגיש/ה את הבקשה.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/מענקי_סיוע_לילדים_ונערים_יתומים_או_נטושים",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענקי_סיוע_לילדים_ונערים_יתומים_או_נטושים",
    "categories": [
      "all"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 0,
    "childAgeMax": 18,
    "flags": [
      {
        "type": "income",
        "label": "תלוי בהכנסה",
        "text": "ניתן לפי המצב הכלכלי של המשפחה, בהמלצת העובד/ת הסוציאלי/ת."
      },
      {
        "type": "local",
        "label": "דרך הרשות המקומית",
        "text": "מגישים דרך המחלקה לשירותים חברתיים ברשות המקומית."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R08",
    "priority": 4,
    "title": "שיקום מקצועי ומימון לימודים",
    "summary": "מימון לימודים או הכשרה, וליווי בחזרה לעבודה.",
    "eligibility": "אלמנות ואלמנים שהוכרו בביטוח לאומי, לפי תנאי זכאות.",
    "amount": "מימון לימודים וציוד, ודמי שיקום בזמן הלימודים.",
    "howToApply": "תביעה לשיקום מקצועי (טופס T270), ואחריה פגישה עם עובד/ת שיקום. כדאי להגיש לפני ההרשמה ללימודים.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Vocational_Rehabilitation/Pages/default.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/שיקום_מקצועי_וסיוע_בלימודים_לאלמנות_ולאלמנים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R10",
    "priority": 4,
    "title": "50% הנחה בתחבורה ציבורית",
    "summary": "חצי מחיר באוטובוס, ברכבת וברכבת הקלה.",
    "eligibility": "מקבלי קצבת שאירים.",
    "amount": "50% על נסיעה בודדת ועל חופשי חודשי.",
    "howToApply": "לטעון פרופיל 'זכאי ביטוח לאומי' ברב-קו או באפליקציה: תעודה מזהה, אישור קצבה ותמונה.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/הנחה_בתחבורה_הציבורית_למקבלי_קצבת_שאירים",
    "sourceUrl": "https://www.kolzchut.org.il/he/הנחה_בתחבורה_הציבורית_למקבלי_קצבת_שאירים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R12",
    "priority": 4,
    "title": "מענק עבודה",
    "summary": "תוספת הכנסה מרשות המסים לעובדים, בהתאם לגובה השכר.",
    "eligibility": "עובדים מגיל 21 עם ילדים (בלי ילדים – מגיל 55), בהכנסה חודשית ממוצעת בטווח שנקבע. להורה יחיד הטווח רחב יותר.",
    "amount": "עד כ-4,000 ₪ בשנה; להורה יחיד 150% מהמענק הבסיסי.",
    "howToApply": "בקשה מקוונת באתר רשות המסים.",
    "deadline": "על שנת המס 2025 – עד סוף 2027.",
    "note": "",
    "officialUrl": "https://www.gov.il/he/service/submitting-an-online-claim-for-job-grant",
    "sourceUrl": "https://www.gov.il/he/service/submitting-an-online-claim-for-job-grant",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [
      {
        "type": "income",
        "label": "תלוי בהכנסה",
        "text": "הזכאות והסכום תלויים בגובה ההכנסה מעבודה."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R13",
    "priority": 4,
    "title": "הנחה בארנונה",
    "summary": "הנחה בארנונה ברשות המקומית.",
    "eligibility": "הורה יחיד לילד עד גיל 18 (עד 21 בשירות). גובה ההנחה נקבע בכל רשות מקומית. בנוסף, לכולם: הנחה לפי מבחן הכנסות, או בוועדת הנחות כשהמצב הכלכלי הורע (עד 70%).",
    "amount": "עד 20% להורה יחיד – לפי החלטת הרשות; עד 70% לפי מבחן הכנסות או מצוקה.",
    "howToApply": "טופס בקשה במחלקת הגבייה של הרשות. כדאי לבדוק מה נהוג בעיר שלך.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.kolzchut.org.il/he/הנחה_בארנונה_למשפחה_חד_הורית",
    "sourceUrl": "https://www.kolzchut.org.il/he/הנחה_בארנונה_למשפחה_חד_הורית",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [
      {
        "type": "local",
        "label": "תלוי ברשות המקומית",
        "text": "כל רשות מקומית קובעת את גובה ההנחה, ולכן הוא שונה בין ערים."
      },
      {
        "type": "income",
        "label": "תלוי בהכנסה",
        "text": "מעבר להנחה להורה יחיד, אפשר לקבל הנחה נוספת לפי הכנסה."
      }
    ],
    "asOf": "12.10.2026"
  },
  {
    "id": "R07",
    "priority": 5,
    "title": "מענק נישואין",
    "summary": "מענק למקבלי קצבת שאירים שנישאו מחדש.",
    "eligibility": "מקבלי קצבת שאירים שנישאו שוב. הקצבה החודשית שלך נפסקת (יש חריגים).",
    "amount": "36 קצבאות: מחצית אחרי הנישואין, ומחצית בתום שנתיים.",
    "howToApply": "טופס עדכון מצב משפחתי לביטוח לאומי.",
    "deadline": "",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/Pages/מענק%20נישואין.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_נישואין_למקבלי_קצבת_שאירים",
    "categories": [
      "cancer",
      "illness",
      "road",
      "work",
      "accident",
      "suicide",
      "murder",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  },
  {
    "id": "R23",
    "priority": 6,
    "title": "ערעור על החלטה של ביטוח לאומי",
    "summary": "אם תביעה נדחתה – אפשר לערער.",
    "eligibility": "כשלא מסכימים עם החלטה של ביטוח לאומי.",
    "amount": "",
    "howToApply": "בקשה לוועדת תביעות, או ערעור לבית הדין לעבודה. אפשר לבדוק זכאות לייצוג בסיוע המשפטי.",
    "deadline": "תוך 12 חודשים מההחלטה.",
    "note": "",
    "officialUrl": "https://www.btl.gov.il/benefits/ערעור%20על%20החלטות%20המוסד%20לביטוח%20לאומי/Pages/בתי%20הדין%20האזוריים%20לעבודה.aspx",
    "sourceUrl": "https://www.kolzchut.org.il/he/מענק_שאירים",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "flags": [],
    "asOf": "12.10.2026"
  }
];
