// מה לעשות ומתי – הפעולות
// ---------------------------------------------------------------
// איך מעדכנים: משנים רק את הטקסט שבין המירכאות "..." ושומרים.
// לא למחוק פסיקים, מירכאות או סוגריים. מירכאות בתוך טקסט נכתבות כך: \"
// אחרי שינוי סכום – לעדכן גם את "asOf" של אותו פריט (ואת asOf בקובץ site.js).
// ---------------------------------------------------------------
window.DATA_tasks = [
  {
    "id": "T01",
    "stage": "firstDays",
    "title": "לפתוח תיקייה מסודרת",
    "condition": "",
    "what": "לשמור כל מסמך של הנפטר, מקורות וצילומים. לתעד שיחות עם גופים רשמיים: שם, תאריך ומה נאמר.",
    "withWhom": "",
    "documents": "",
    "link": "",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T02",
    "stage": "firstDays",
    "title": "לבקש מסמכים רפואיים",
    "condition": "",
    "what": "לבקש מבית החולים או מקופת החולים סיכום מחלה או אשפוז, ואם צריך את התיק הרפואי. נדרש לביטוח המשכנתא ולביטוחים פרטיים. בדרך כלל צריך להוכיח שמדובר ביורשים: צו ירושה, או תצהיר מאומת בידי עורך דין. ההעתקה בתשלום לפי מחירון משרד הבריאות.",
    "withWhom": "בית חולים / קופת חולים",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/עיון_ברשומה_רפואית_של_נפטר",
    "goTab": "",
    "timing": "",
    "categories": [
      "cancer",
      "illness",
      "sudden"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T03",
    "stage": "firstDays",
    "title": "לוודא קבלת תעודת פטירה",
    "condition": "",
    "what": "נשלחת בדואר בחינם, בדרך כלל תוך כמה ימי עבודה. אפשר גם להוריד עותק חתום דיגיטלית באזור האישי ב-my.gov.il (לקרובים מדרגה ראשונה).",
    "withWhom": "רשות האוכלוסין (*3450)",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/הוצאת_תעודת_פטירה",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T04",
    "stage": "firstDays",
    "title": "לוודא קבלת ספח ת\"ז מעודכן",
    "condition": "",
    "what": "נשלח בדואר עם המצב האישי החדש. אם לא הגיע – פנייה לרשות האוכלוסין.",
    "withWhom": "רשות האוכלוסין",
    "documents": "",
    "link": "https://www.gov.il/he/service/id_stub_following_personal_changes",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T05",
    "stage": "firstDays",
    "title": "לטפל בחשבון הבנק",
    "condition": "",
    "what": "לבדוק אם יש בחשבון המשותף סעיף 'אריכות ימים'. לוודא שהוראות קבע חיוניות ממשיכות, ולבטל כרטיסי אשראי והוראות קבע מיותרות של הנפטר.",
    "withWhom": "סניף הבנק",
    "documents": "ת\"ז, תעודת פטירה",
    "link": "",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T26",
    "stage": "firstDays",
    "title": "קשר עם משרד הביטחון וארגון אלמנות ויתומי צה\"ל",
    "condition": "",
    "what": "נציגי הרווחה של משרד הביטחון במחוז יוצרים קשר באופן יזום. מרכז השירות: 03-7776700.",
    "withWhom": "משרד הביטחון – אגף משפחות",
    "documents": "",
    "link": "https://mishpahot-hantzaha.mod.gov.il/benefits/widows",
    "goTab": "",
    "timing": "",
    "categories": [
      "war"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T27",
    "stage": "firstDays",
    "title": "הכרה כנפגעי פעולת איבה",
    "condition": "",
    "what": "תביעה במחלקת נפגעי פעולות איבה בביטוח לאומי; פנייה לארגון נפגעי פעולות האיבה.",
    "withWhom": "ביטוח לאומי",
    "documents": "",
    "link": "https://www.btl.gov.il/benefits/Victims_of_Hostilities/תגמולים%20למשפחות%20הנספים%20בפעולות%20איבה/Pages/תגמולים%20חודשיים%20לאלמן%20אלמנה.aspx",
    "goTab": "",
    "timing": "",
    "categories": [
      "terror"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T31",
    "stage": "firstDays",
    "title": "לפנות למרכז סיוע למשפחות שכולות",
    "condition": "",
    "what": "מרכזי הסיוע של משרד הרווחה (דרך בשביל החיים ומרכז אלה) נותנים ליווי, טיפול וקבוצות תמיכה. ברצח – אפשר לבקש גם סיוע משפטי והשתתפות בהוצאות האבל, דרך ועדת הזכאות.",
    "withWhom": "מרכז סיוע אזורי",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/מרכזי_סיוע_למשפחות_שכולות_בעקבות_תאונת_דרכים,_עבירת_המתה_או_התאבדות",
    "goTab": "",
    "timing": "",
    "categories": [
      "road",
      "suicide",
      "murder"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T06",
    "stage": "firstMonth",
    "title": "להגיש תביעה לקצבת שאירים",
    "condition": "",
    "what": "טופס T410. כולל גם מענק פטירה ומענק שאירים.",
    "withWhom": "ביטוח לאומי",
    "documents": "ת\"ז, תעודת פטירה, פרטי בנק, אישורי הכנסה (אלמנים; אלמנות עם ילדים 14–20), דו\"ח משטרה בתאונה",
    "link": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/pages/default.aspx",
    "goTab": "",
    "timing": "",
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
    "asOf": "12.10.2026"
  },
  {
    "id": "T07",
    "stage": "firstMonth",
    "title": "להגיש בקשה לצו ירושה / צו קיום צוואה",
    "condition": "",
    "what": "לחפש אם יש צוואה. להגיש לרשם לענייני ירושה – מקוון 507 ₪ + 66 ₪ פרסום. הצו ניתן בדרך כלל תוך כ-50 יום, ורוב המשימות הכספיות תלויות בו.",
    "withWhom": "הרשם לענייני ירושה (*2416)",
    "documents": "תעודת פטירה, צוואה מקורית אם יש, ת\"ז",
    "link": "https://www.gov.il/he/service/inheritance_order",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T08",
    "stage": "firstMonth",
    "title": "לאתר כספים של הנפטר",
    "condition": "",
    "what": "באתר 'הר הכסף' בוחרים 'חיפוש כספים על שם קרוב שנפטר'. צריך ת\"ז ותאריך פטירה. רואים באילו גופים יש כספים, לא כמה.",
    "withWhom": "אתרים ממשלתיים",
    "documents": "ת\"ז שלך, ת\"ז הנפטר ותאריך הפטירה",
    "link": "https://itur.mof.gov.il",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T09",
    "stage": "firstMonth",
    "title": "להודיע למעסיק של הנפטר",
    "condition": "אם בן או בת הזוג היו שכירים",
    "what": "לבקש פיצויי פיטורים לשאירים (מגיעים אם עבד לפחות שנה), משכורת אחרונה, פדיון חופשה, הבראה, ביטוח קבוצתי וקרן השתלמות. המעסיק ממלא טופס 161. הפיצויים לא חלק מהעיזבון – לא צריך צו ירושה, וחובות הנפטר לא מקוזזים מהם.",
    "withWhom": "מחלקת שכר",
    "documents": "תעודת פטירה; בהמשך צו ירושה",
    "link": "https://www.kolzchut.org.il/he/פיצויי_פיטורים_לשאירים_של_עובד_שנפטר",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T10",
    "stage": "firstMonth",
    "title": "לעדכן את המעסיק שלך",
    "condition": "אם יש הכנסה מעבודה",
    "what": "עדכון טופס 101 לקבלת נקודות זיכוי; לברר ימי חופשה וימי מחלה.",
    "withWhom": "המעסיק שלך",
    "documents": "ספח ת\"ז מעודכן",
    "link": "https://www.kolzchut.org.il/he/נקודות_זיכוי_ממס_הכנסה",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T11",
    "stage": "firstMonth",
    "title": "לפנות לפנסיה של הנפטר",
    "condition": "אם היה חיסכון פנסיוני",
    "what": "קצבת שאירים מקרן הפנסיה – לרוב לפי הרכיב הביטוחי. מומלץ ליווי של יועץ פנסיוני.",
    "withWhom": "קרן הפנסיה / ביטוח מנהלים",
    "documents": "תעודת פטירה, צו ירושה, ת\"ז המוטבים, פרטי בנק",
    "link": "https://itur.mof.gov.il",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T12",
    "stage": "firstMonth",
    "title": "לממש ביטוח משכנתא",
    "condition": "אם יש משכנתא",
    "what": "לפנות למבטח של המשכנתא (לא תמיד הבנק). לפי החוק אפשר לבקש דחייה של תשלומי המשכנתא עד 12 חודשים, בלי ריבית פיגורים – מציגים תעודת פטירה למלווה. אם יש ביטוח חיים למשכנתא, המבטח אמור לכסות את ההלוואה.",
    "withWhom": "חברת הביטוח של המשכנתא",
    "documents": "תעודת פטירה עם סיבת מוות, צו ירושה, ויתור סודיות רפואית",
    "link": "https://protocol.co.il/postponement-mortgage-payments-death/",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T13",
    "stage": "firstMonth",
    "title": "לבדוק ביטוחים פרטיים",
    "condition": "",
    "what": "ביטוח חיים, בריאות, סיעוד, תאונות אישיות. לבטל ביטוחים שאינם נחוצים.",
    "withWhom": "חברות ביטוח",
    "documents": "פוליסה, תעודת פטירה, צו ירושה",
    "link": "https://itur.mof.gov.il",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T14",
    "stage": "firstMonth",
    "title": "לפתוח תיק במחלקה לשירותים חברתיים",
    "condition": "",
    "what": "פגישת היכרות עם עובד/ת סוציאלי/ת. דרכם אפשר לבקש מענק לילדים מכספי עיזבונות, הפניה לטיפול רגשי ושירותים נוספים ברשות.",
    "withWhom": "הרשות המקומית",
    "documents": "ת\"ז וספח, תעודת פטירה",
    "link": "https://www.gov.il/he/departments/dynamiccollectors/molsa-social-departmentsd-list?skip=0",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T15",
    "stage": "firstMonth",
    "title": "להוסיף הנחה ברב-קו",
    "condition": "",
    "what": "פרופיל 'זכאי ביטוח לאומי' – 50% הנחה.",
    "withWhom": "רב-קו / אפליקציית תשלום",
    "documents": "תעודה מזהה, אישור קצבה, תמונה",
    "link": "https://www.kolzchut.org.il/he/הנחה_בתחבורה_הציבורית_למקבלי_קצבת_שאירים",
    "goTab": "",
    "timing": "",
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
    "asOf": "12.10.2026"
  },
  {
    "id": "T16",
    "stage": "firstMonth",
    "title": "לבקש הנחה בארנונה",
    "condition": "",
    "what": "טופס בקשת הנחה ברשות המקומית.",
    "withWhom": "הרשות המקומית",
    "documents": "ת\"ז וספח, תעודת פטירה",
    "link": "https://www.kolzchut.org.il/he/הנחה_בארנונה_למשפחה_חד_הורית",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T17",
    "stage": "firstMonth",
    "title": "להסדיר את הרכב",
    "condition": "אם יש רכב על שם הנפטר",
    "what": "עד הצו: רישיון רכב זמני לשנה במשרד הרישוי (בתור). העברת בעלות – רק עם צו ירושה. לבדוק שביטוח הרכב מכסה את הנוהג/ת.",
    "withWhom": "משרד הרישוי",
    "documents": "תעודת פטירה, ת\"ז; בהמשך צו ירושה",
    "link": "https://www.gov.il/he/service/modification_registration_vehicle_following_death",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T25",
    "stage": "firstMonth",
    "title": "טיפול ותמיכה רגשית",
    "condition": "",
    "what": "לברר אם יש עמותה שמציעה טיפול רגשי, ליווי או קבוצת תמיכה – הרבה עמותות נותנות אותם בלי עלות או במחיר סמלי, גם לילדים (ברשימת 'ארגונים ועמותות'). בנוסף: טיפול מסובסד בקופת חולים; לילדים – שירות פסיכולוגי (שפ\"ח) דרך יועצת בית הספר; והמחלקה לשירותים חברתיים ברשות. כדאי לבחור מטפל/ת עם ניסיון באבל. אפשר להתחיל בכל שלב – גם אחרי שנים.",
    "withWhom": "עמותות / קופ\"ח / שפ\"ח / רווחה",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/טיפול_פסיכותרפי",
    "goTab": "orgs",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T28",
    "stage": "firstMonth",
    "title": "ייעוץ משפטי לתביעת פיצויים",
    "condition": "",
    "what": "פגישה עם עו\"ד נזיקין לגבי תביעת תלויים ועיזבון; פנייה למרכז סיוע למשפחות שכולות.",
    "withWhom": "עו\"ד / מרכז סיוע",
    "documents": "דו\"ח משטרה, תעודת פטירה",
    "link": "https://www.kolzchut.org.il/he/תביעה_לקבלת_פיצויים_בגין_נזקי_גוף_בתאונת_דרכים",
    "goTab": "",
    "timing": "",
    "categories": [
      "road"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T30",
    "stage": "firstMonth",
    "title": "להגיש תביעה לגמלת תלויים",
    "condition": "אם הפטירה הייתה בעבודה או בדרך אליה",
    "what": "אם הפטירה הייתה בזמן העבודה, או בתאונה בדרך לעבודה או ממנה: תביעה לגמלת תלויים במחלקת נפגעי עבודה בביטוח לאומי. מומלץ להגיש תוך שנה.",
    "withWhom": "ביטוח לאומי – נפגעי עבודה",
    "documents": "תעודת פטירה, אישורי העסקה ושכר של הנפטר, דו\"ח על האירוע",
    "link": "https://www.kolzchut.org.il/he/גמלת_תלויים_לבני_משפחה_של_נפטר_מפגיעה_בעבודה",
    "goTab": "",
    "timing": "",
    "categories": [
      "work",
      "road"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T18",
    "stage": "firstThreeMonths",
    "title": "להשלים את ענייני הירושה",
    "condition": "",
    "what": "להציג את הצו בבנק ולגרוע את הנפטר מהחשבון; למשוך כספים מקופות (לשקול השלכות מס עם יועץ).",
    "withWhom": "בנק, קופות",
    "documents": "צו ירושה",
    "link": "https://www.kolzchut.org.il/he/הגשת_בקשה_מקוונת_לקבלת_צו_ירושה",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T19",
    "stage": "firstThreeMonths",
    "title": "לבדוק מצב מס של הנפטר",
    "condition": "",
    "what": "לדווח לרשות המסים על היורשים או על מנהל העיזבון (טופס 2805), ולבדוק החזרי מס או חובות פתוחים של הנפטר. מומלץ להיעזר ברואה חשבון.",
    "withWhom": "רשות המסים (*4954)",
    "documents": "ת\"ז, תעודת פטירה, צו ירושה",
    "link": "https://www.gov.il/he/service/itc2805",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T20",
    "stage": "firstThreeMonths",
    "title": "לבדוק שיקום מקצועי",
    "condition": "",
    "what": "תביעה לשיקום מקצועי בביטוח לאומי.",
    "withWhom": "ביטוח לאומי – אגף שיקום",
    "documents": "",
    "link": "https://www.btl.gov.il/benefits/Vocational_Rehabilitation/Pages/default.aspx",
    "goTab": "",
    "timing": "",
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
    "asOf": "12.10.2026"
  },
  {
    "id": "T21",
    "stage": "firstYear",
    "title": "להגיש מענק לימודים (פעם ראשונה)",
    "condition": "",
    "what": "תביעה בשנה הראשונה; אחר כך אוטומטי באוגוסט.",
    "withWhom": "ביטוח לאומי",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/מענק_לימודים",
    "goTab": "",
    "timing": "יולי (לפני מענק אוגוסט)",
    "categories": [
      "all"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 5,
    "childAgeMax": 17,
    "asOf": "12.10.2026"
  },
  {
    "id": "T22",
    "stage": "ongoing",
    "title": "להגיש דמי מחיה",
    "condition": "",
    "what": "לא אוטומטי: לפני כל שנת לימודים ביטוח לאומי שולח טופס. ממלאים ומחזירים אותו עם אישור לימודים ואישורי הכנסה, כל עוד הילד/ה לומד/ת.",
    "withWhom": "ביטוח לאומי",
    "documents": "אישור לימודים, אישורי הכנסה",
    "link": "https://www.kolzchut.org.il/he/דמי_מחיה_ליתומים_(שאירים)",
    "goTab": "",
    "timing": "יולי–אוגוסט (לפני שנת הלימודים)",
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
    "asOf": "12.10.2026"
  },
  {
    "id": "T23",
    "stage": "ongoing",
    "title": "להגיש מענק עבודה",
    "condition": "אם יש הכנסה מעבודה",
    "what": "בקשה מקוונת – כל שנה מחדש, על השנה הקודמת. אפשר להגיש גם על שנתיים אחורה.",
    "withWhom": "רשות המסים",
    "documents": "",
    "link": "https://www.gov.il/he/service/submitting-an-online-claim-for-job-grant",
    "goTab": "",
    "timing": "מאי–יוני (אחרי דיווחי המעסיק)",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T24",
    "stage": "ongoing",
    "title": "לעדכן את ביטוח לאומי בשינויים",
    "condition": "",
    "what": "ילד שמגיע ל-18 ולומד/משרת – לשלוח אישור; נישואים מחדש – טופס עדכון מצב משפחתי.",
    "withWhom": "ביטוח לאומי",
    "documents": "אישורי לימודים/שירות",
    "link": "https://www.btl.gov.il/benefits/Survivors_%20Insurance/pages/default.aspx",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T29",
    "stage": "ongoing",
    "title": "ילד/ה מגיע/ה לגיל 18",
    "condition": "",
    "what": "לשלוח לביטוח לאומי אישור – בלימודים בתיכון הקצבה עבורו/ה יכולה להמשיך עד גיל 20, ובשירות צבאי סדיר או לאומי עד גיל 24.",
    "withWhom": "ביטוח לאומי",
    "documents": "אישור לימודים / שירות",
    "link": "https://www.btl.gov.il/Audience/yeladim/yetomim/Pages/niftarMemachla.aspx",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "childInRange",
    "childAgeMin": 17,
    "childAgeMax": 18,
    "asOf": "12.10.2026"
  },
  {
    "id": "T32",
    "stage": "ongoing",
    "title": "למלא טופס 101 – כל שנה",
    "condition": "אם יש הכנסה מעבודה",
    "what": "בתחילת כל שנת מס (ינואר), תוך 7 ימים מתחילת עבודה חדשה, ובכל שינוי בנסיבות (למשל מעבר דירה או נישואים). לסמן בטופס נקודת זיכוי כ'הורה אחד' ונקודות על הילדים.",
    "withWhom": "המעסיק שלך",
    "documents": "ספח ת\"ז מעודכן",
    "link": "https://www.kolzchut.org.il/he/טופס_101",
    "goTab": "",
    "timing": "ינואר, ובכל החלפת עבודה",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T33",
    "stage": "ongoing",
    "title": "הנחה בארנונה – במעבר דירה ובכל שנה",
    "condition": "",
    "what": "ההנחה נקבעת בכל רשות מקומית. במעבר דירה מגישים בקשה מחדש ברשות של הדירה החדשה. כדאי לברר ברשות אם צריך לחדש את הבקשה כל שנה. כדי לקבל את ההנחה צריך לשלם את הארנונה עד 31 בדצמבר.",
    "withWhom": "הרשות המקומית",
    "documents": "ת\"ז וספח",
    "link": "https://www.kolzchut.org.il/he/הנחה_בארנונה_למשפחה_שבראשה_הורה_עצמאי_(הורה_יחיד)",
    "goTab": "",
    "timing": "בכל מעבר דירה",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T34",
    "stage": "ongoing",
    "title": "לוודא שלא נשארו כספים או ביטוחים שלא מומשו",
    "condition": "",
    "what": "גם אחרי שנים כדאי לבדוק: לחפש שוב ב'הר הכסף' כספים וביטוחי חיים על שם הנפטר. לבדוק מול כל חברת ביטוח שהייתה קשורה אליו אם יש פוליסות שלא מומשו. אם היה לו ביטוח סיעודי והוא נזקק לסיעוד בתקופת המחלה – ייתכן שאפשר לתבוע תגמולים גם עכשיו, רטרואקטיבית. יש מגבלת זמן של 3 עד 5 שנים מהיום שנזקק לסיעוד, לפי מועד רכישת הפוליסה. כדאי להתייעץ עם יועץ ביטוח או עורך דין.",
    "withWhom": "הר הכסף, חברות הביטוח",
    "documents": "ת\"ז הנפטר, תעודת פטירה, צו ירושה",
    "link": "https://itur.mof.gov.il",
    "goTab": "",
    "timing": "פעם בשנה כדאי לבדוק",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T35",
    "stage": "ongoing",
    "title": "לעשות תיאום מס",
    "condition": "אם יש לך משכורת וגם קצבה",
    "what": "כשיש יותר ממקור הכנסה אחד שחייב במס – למשל משכורת וגם קצבת שאירים מקרן הפנסיה של הנפטר – צריך תיאום מס, כדי שלא ינוכה מס ביתר. עושים אונליין באזור האישי באתר רשות המסים, ומעבירים את האישור למעסיק ולקרן הפנסיה. התיאום תקף לשנת המס הנוכחית בלבד. לגבי קצבאות מביטוח לאומי – כדאי לברר ברשות המסים אם צריך לכלול אותן.",
    "withWhom": "רשות המסים (*4954)",
    "documents": "תלושי שכר ותלוש קצבה",
    "link": "https://www.gov.il/he/service/tax-coordination-online",
    "goTab": "",
    "timing": "כשמתחילה הקצבה, ואחר כך כל שנה בינואר",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T36",
    "stage": "ongoing",
    "title": "לערוך צוואה",
    "condition": "",
    "what": "אחרי הפטירה כדאי לערוך צוואה חדשה, או לעדכן צוואה קיימת: מי יורש, ומה הרצון שלך לגבי הילדים. אם שני ההורים נפטרו, בית המשפט ממנה אפוטרופוס לילדים ומעדיף בן משפחה – עורך דין יכול לייעץ איך לבטא בצוואה את הרצון שלך. אפשר להפקיד צוואה אצל הרשם לענייני ירושה.",
    "withWhom": "עורך דין / הרשם לענייני ירושה",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/אפוטרופסות_על_ילדים",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  },
  {
    "id": "T37",
    "stage": "ongoing",
    "title": "זוגיות חדשה – מה כדאי לדעת",
    "condition": "אם יש זוגיות חדשה",
    "what": "נישואים מחדש מפסיקים בדרך כלל את קצבת השאירים מביטוח לאומי (יש חריגים), ומזכים במענק נישואין. גם מגורים משותפים בלי נישואים עלולים להשפיע – כדאי לברר מראש בביטוח לאומי (*6050). לאלמנות ולאלמנים של חללי צה\"ל ונפגעי איבה יש כללים אחרים – כדאי לברר בגוף המטפל. כדי לשמור על הרכוש ועל הירושה של הילדים, אפשר לערוך הסכם ממון או הסכם חיים משותפים – מומלץ עם עורך דין.",
    "withWhom": "ביטוח לאומי / עורך דין",
    "documents": "",
    "link": "https://www.kolzchut.org.il/he/קצבת_שאירים_לאלמנות_ואלמנים_שנישאו_מחדש",
    "goTab": "",
    "timing": "",
    "categories": [
      "all"
    ],
    "kidsRule": "any",
    "childAgeMin": null,
    "childAgeMax": null,
    "asOf": "12.10.2026"
  }
];
