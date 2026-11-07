// tervitustekst iga keele jaoks \ welcome text for each language
var DEMO_TEXTS = {
  
ru: "Добро пожаловать в Songstrike\nЗдесь ты печатаешь текст любимой песни на скорость\nВставь ссылку на клип с ютуба и нажми найти текст\nИли добавь свою песню и начинай печатать",
en: "Welcome to Songstrike\nHere you type the lyrics of your favorite song for speed\nPaste a YouTube link and press find lyrics\nOr add your own song and start typing",
fr: "Bienvenue sur Songstrike\nIci tu tapes les paroles de ta chanson préférée le plus vite possible\nColle un lien YouTube et appuie sur trouver les paroles\nOu ajoute ta propre chanson et commence à taper",
es: "Bienvenido a Songstrike\nAquí escribes la letra de tu canción favorita lo más rápido posible\nPega un enlace de YouTube y pulsa buscar la letra\nO añade tu propia canción y empieza a escribir",
de: "Willkommen bei Songstrike\nHier tippst du den Text deines Lieblingssongs so schnell wie möglich\nFüge einen YouTube-Link ein und klicke auf Songtext suchen\nOder füge deinen eigenen Song hinzu und fang an zu tippen",
it: "Benvenuto su Songstrike\nQui digiti il testo della tua canzone preferita il più velocemente possibile\nIncolla un link di YouTube e premi trova il testo\nOppure aggiungi la tua canzone e inizia a scrivere",
et: "Tere tulemast Songstrike'i\nSiin trükid oma lemmiklaulu sõnu nii kiiresti kui suudad\nKleebi YouTube'i link ja vajuta otsi sõnad\nVõi lisa oma laul ja hakka trükkima",
lt: "Sveiki atvykę į Songstrike\nČia kuo greičiau rašai mėgstamos dainos žodžius\nĮklijuok YouTube nuorodą ir spausk rasti žodžius\nArba pridėk savo dainą ir pradėk rašyti",
fi: "Tervetuloa Songstrikeen\nTäällä kirjoitat lempikappaleesi sanoja niin nopeasti kuin pystyt\nLiitä YouTube-linkki ja paina hae sanat\nTai lisää oma kappale ja aloita kirjoittaminen",
};


var I18N = {
  ru: {
    punct: ", знаки",
    punct_t: "Знаки препинания нужно печатать",
    caps: "Aa заглавные",
    caps_t: "Заглавные буквы нужно печатать",
    paste: "✎ Своя песня",
    theme: "Светлая / тёмная тема",
    lang: "Язык сайта",
    lang_btn: "Язык",
    find: "🔍 Найти текст",
    searching: "Ищу текст…",
    pick: "Нашлось несколько вариантов, выбери нужный:",
    notfound:
      "Текст не найден. Поправь запрос в поле поиска (исполнитель и песня) и нажми ещё раз, или вставь текст сам через «Своя песня».",
    need: "Сначала вставь ссылку на ютуб.",
    neterr: "Не получилось связаться с базой текстов. Проверь интернет и попробуй ещё раз.",
    found: "Готово: текст песни загружен, можно печатать.",
    src: "Тексты ищутся в открытой базе LRCLIB.",
    ph_q: "Исполнитель и песня, например: Кино Группа крови",
    notitle:
      "Не получилось узнать название видео. Напиши исполнителя и песню в поле поиска и нажми кнопку ещё раз.",
    home: "Начать заново с новой песней",
    toolbar: "Настройки",
    paste_head: "Своя песня",
    ph_title: "Название, например: Кино — Группа крови",
    ph_yt: "Ссылка на клип с ютуба (можно не вставлять)",
    ph_text: "Вставь сюда текст песни. Каждая строчка с новой строки.",
    go: "Печатать этот текст",
    cancel: "Отмена",
    novideo: "Вставь справа ссылку на клип с ютуба, и видео появится здесь",
    ph_yturl: "Ссылка на ютуб: https://youtu.be/…",
    load: "Загрузить",
    s: "с",
    rate: "Скорость песни",
    auto: "Автопауза, если не печатаю",
    auto_t: "Через сколько секунд ставить паузу",
    paused: "Пауза: продолжи печатать, и песня пойдёт дальше",
    cpm: "зн/мин",
    acc: "% точность",
    words: "слов",
    typing: "Текст для печати. Нажми и начинай печатать",
    blur: "Нажми сюда или на любую клавишу, чтобы продолжить",
    restart: "↻ Заново",
    hint: "Таймер стартует с первой буквы. Пробел переводит к следующему слову, даже если в слове ошибка: она подчеркнётся и попадёт в счёт ошибок. Строчки разделены пробелом. Буквы «е» и «ё» считаются одинаковыми.",
    r_speed: "скорость",
    r_cpm: "знаков в минуту",
    r_acc: "точность",
    r_wpm: "слов/мин",
    r_time: "время",
    r_err: "ошибок",
    r_chars: "символов",
    best_new: "Новый рекорд! Было {b} зн/мин",
    best_first: "Первый рекорд на этой песне!",
    best_is: "Твой рекорд на этой песне: {b} зн/мин",
    foot: "Рекорды и последний текст хранятся только в этом браузере.",
    custom: "Свой текст",
    demo: "Пример: «Ой, мороз, мороз» (народная)",
    chart: "Скорость по ходу песни",
    input: "Поле ввода",
    ytaria: "Ссылка на видео с ютуба",
  },
  en: {
    punct: ", punctuation",
    punct_t: "Punctuation must be typed",
    caps: "Aa capitals",
    caps_t: "Capital letters must be typed",
    paste: "✎ My song",
    theme: "Light / dark theme",
    lang: "Site language",
    lang_btn: "Language",
    find: "🔍 Find lyrics",
    searching: "Searching…",
    pick: "Several matches found, pick one:",
    notfound:
      "Lyrics not found. Fix the search (artist and song) and press again, or paste them yourself via “My song”.",
    need: "Paste a YouTube link first.",
    neterr: "Couldn't reach the lyrics database. Check your connection and try again.",
    found: "Done: the lyrics are loaded, start typing.",
    src: "Lyrics come from the open LRCLIB database.",
    ph_q: "Artist and song, e.g. Queen Bohemian Rhapsody",
    notitle:
      "Couldn't get the video title. Type the artist and song in the search field and press the button again.",
    home: "Start over with a new song",
    toolbar: "Settings",
    paste_head: "My song",
    ph_title: "Title, e.g. Queen — Bohemian Rhapsody",
    ph_yt: "YouTube video link (optional)",
    ph_text: "Paste the lyrics here, each line on a new line.",
    go: "Type this text",
    cancel: "Cancel",
    novideo: "Paste a YouTube link on the right and the video will appear here",
    ph_yturl: "YouTube link: https://youtu.be/…",
    load: "Load",
    s: "s",
    rate: "Song speed",
    auto: "Auto-pause when I stop typing",
    auto_t: "Pause after how many seconds",
    paused: "Paused: keep typing and the song will continue",
    cpm: "cpm",
    acc: "% accuracy",
    words: "words",
    typing: "Text to type. Click and start typing",
    blur: "Click here or press any key to continue",
    restart: "↻ Restart",
    hint: "The timer starts with the first letter. Space moves to the next word even if the word has a mistake: it gets underlined and counts as an error. Lines are joined by a space.",
    r_speed: "speed",
    r_cpm: "characters per minute",
    r_acc: "accuracy",
    r_wpm: "wpm",
    r_time: "time",
    r_err: "errors",
    r_chars: "characters",
    best_new: "New record! Previous: {b} cpm",
    best_first: "First record for this song!",
    best_is: "Your record for this song: {b} cpm",
    foot: "Records and your last text are stored only in this browser.",
    custom: "My text",
    demo: "Example: “Oi, moroz, moroz” (Russian folk song)",
    chart: "Speed over the song",
    input: "Input field",
    ytaria: "YouTube video link",
  },
  fr: {
    punct: ", ponctuation",
    punct_t: "La ponctuation doit être tapée",
    caps: "Aa majuscules",
    caps_t: "Les majuscules doivent être tapées",
    paste: "✎ Ma chanson",
    theme: "Thème clair / sombre",
    lang: "Langue du site",
    lang_btn: "Langue",
    find: "🔍 Trouver les paroles",
    searching: "Recherche…",
    pick: "Plusieurs résultats, choisis le bon :",
    notfound:
      "Paroles introuvables. Corrige la recherche (artiste et chanson) et réessaie, ou colle-les via « Ma chanson ».",
    need: "Colle d'abord un lien YouTube.",
    neterr: "Impossible de joindre la base de paroles. Vérifie ta connexion et réessaie.",
    found: "C'est fait : les paroles sont chargées, tu peux taper.",
    src: "Les paroles viennent de la base ouverte LRCLIB.",
    ph_q: "Artiste et chanson, par ex. Stromae Alors on danse",
    notitle:
      "Impossible d'obtenir le titre de la vidéo. Écris l'artiste et la chanson dans le champ de recherche et appuie de nouveau sur le bouton.",
    home: "Recommencer avec une nouvelle chanson",
    toolbar: "Réglages",
    paste_head: "Ma chanson",
    ph_title: "Titre, par ex. Stromae — Alors on danse",
    ph_yt: "Lien de la vidéo YouTube (facultatif)",
    ph_text: "Colle ici les paroles, un vers par ligne.",
    go: "Taper ce texte",
    cancel: "Annuler",
    novideo: "Colle un lien YouTube à droite et la vidéo apparaîtra ici",
    ph_yturl: "Lien YouTube : https://youtu.be/…",
    load: "Charger",
    s: "s",
    rate: "Vitesse de la chanson",
    auto: "Pause auto si je ne tape plus",
    auto_t: "Pause après combien de secondes",
    paused: "Pause : continue à taper et la chanson reprendra",
    cpm: "car/min",
    acc: "% précision",
    words: "mots",
    typing: "Texte à taper. Clique et commence à taper",
    blur: "Clique ici ou appuie sur une touche pour continuer",
    restart: "↻ Recommencer",
    hint: "Le chrono démarre à la première lettre. L'espace passe au mot suivant même si le mot contient une faute : elle est soulignée et comptée comme erreur. Les lignes sont séparées par un espace.",
    r_speed: "vitesse",
    r_cpm: "caractères par minute",
    r_acc: "précision",
    r_wpm: "mots/min",
    r_time: "temps",
    r_err: "erreurs",
    r_chars: "caractères",
    best_new: "Nouveau record ! Avant : {b} car/min",
    best_first: "Premier record sur cette chanson !",
    best_is: "Ton record sur cette chanson : {b} car/min",
    foot: "Les records et ton dernier texte sont enregistrés uniquement dans ce navigateur.",
    custom: "Mon texte",
    demo: "Exemple : « Oï, moroz, moroz » (chanson populaire russe)",
    chart: "Vitesse au fil de la chanson",
    input: "Champ de saisie",
    ytaria: "Lien de la vidéo YouTube",
  },
  es: {
    punct: ", signos",
    punct_t: "Hay que escribir los signos de puntuación",
    caps: "Aa mayúsculas",
    caps_t: "Hay que escribir las mayúsculas",
    paste: "✎ Mi canción",
    theme: "Tema claro / oscuro",
    lang: "Idioma del sitio",
    lang_btn: "Idioma",
    find: "🔍 Buscar la letra",
    searching: "Buscando…",
    pick: "Varios resultados, elige uno:",
    notfound:
      "No se encontró la letra. Corrige la búsqueda (artista y canción) y vuelve a pulsar, o pégala en «Mi canción».",
    need: "Primero pega un enlace de YouTube.",
    neterr: "No se pudo conectar con la base de letras. Revisa tu conexión y vuelve a intentarlo.",
    found: "Listo: la letra está cargada, ya puedes escribir.",
    src: "Las letras vienen de la base abierta LRCLIB.",
    ph_q: "Artista y canción, p. ej. Rosalía Malamente",
    notitle:
      "No se pudo obtener el título del vídeo. Escribe el artista y la canción en el campo de búsqueda y pulsa el botón otra vez.",
    home: "Empezar de nuevo con otra canción",
    toolbar: "Ajustes",
    paste_head: "Mi canción",
    ph_title: "Título, p. ej. Rosalía — Malamente",
    ph_yt: "Enlace del vídeo de YouTube (opcional)",
    ph_text: "Pega aquí la letra, cada verso en una línea.",
    go: "Escribir este texto",
    cancel: "Cancelar",
    novideo: "Pega un enlace de YouTube a la derecha y el vídeo aparecerá aquí",
    ph_yturl: "Enlace de YouTube: https://youtu.be/…",
    load: "Cargar",
    s: "s",
    rate: "Velocidad de la canción",
    auto: "Pausa automática si dejo de escribir",
    auto_t: "Pausar tras cuántos segundos",
    paused: "Pausa: sigue escribiendo y la canción continuará",
    cpm: "car/min",
    acc: "% precisión",
    words: "palabras",
    typing: "Texto para escribir. Haz clic y empieza a escribir",
    blur: "Haz clic aquí o pulsa cualquier tecla para continuar",
    restart: "↻ Reiniciar",
    hint: "El cronómetro empieza con la primera letra. El espacio pasa a la siguiente palabra aunque tenga un error: se subraya y cuenta como error. Las líneas se separan con un espacio.",
    r_speed: "velocidad",
    r_cpm: "caracteres por minuto",
    r_acc: "precisión",
    r_wpm: "palabras/min",
    r_time: "tiempo",
    r_err: "errores",
    r_chars: "caracteres",
    best_new: "¡Nuevo récord! Antes: {b} car/min",
    best_first: "¡Primer récord en esta canción!",
    best_is: "Tu récord en esta canción: {b} car/min",
    foot: "Los récords y tu último texto se guardan solo en este navegador.",
    custom: "Mi texto",
    demo: "Ejemplo: «Oi, moroz, moroz» (canción popular rusa)",
    chart: "Velocidad a lo largo de la canción",
    input: "Campo de texto",
    ytaria: "Enlace del vídeo de YouTube",
  },
  de: {
    punct: ", Satzzeichen",
    punct_t: "Satzzeichen müssen getippt werden",
    caps: "Aa Großbuchstaben",
    caps_t: "Großbuchstaben müssen getippt werden",
    paste: "✎ Eigener Song",
    theme: "Helles / dunkles Design",
    lang: "Sprache der Seite",
    lang_btn: "Sprache",
    find: "🔍 Songtext suchen",
    searching: "Suche…",
    pick: "Mehrere Treffer, wähle einen:",
    notfound:
      "Kein Songtext gefunden. Korrigiere die Suche (Künstler und Song) und klicke erneut oder füge ihn über „Eigener Song“ ein.",
    need: "Füge zuerst einen YouTube-Link ein.",
    neterr:
      "Die Songtext-Datenbank ist nicht erreichbar. Prüfe deine Verbindung und versuche es erneut.",
    found: "Fertig: Der Songtext ist geladen, du kannst tippen.",
    src: "Die Songtexte stammen aus der offenen Datenbank LRCLIB.",
    ph_q: "Künstler und Song, z. B. Rammstein Sonne",
    notitle:
      "Der Videotitel konnte nicht ermittelt werden. Gib Künstler und Song ins Suchfeld ein und klicke erneut.",
    home: "Neu anfangen mit einem neuen Song",
    toolbar: "Einstellungen",
    paste_head: "Eigener Song",
    ph_title: "Titel, z. B. Rammstein — Sonne",
    ph_yt: "Link zum YouTube-Video (optional)",
    ph_text: "Füge hier den Songtext ein, jede Zeile in eine neue Zeile.",
    go: "Diesen Text tippen",
    cancel: "Abbrechen",
    novideo: "Füge rechts einen YouTube-Link ein, dann erscheint hier das Video",
    ph_yturl: "YouTube-Link: https://youtu.be/…",
    load: "Laden",
    s: "s",
    rate: "Liedtempo",
    auto: "Auto-Pause, wenn ich nicht tippe",
    auto_t: "Pause nach wie vielen Sekunden",
    paused: "Pause: Tippe weiter, dann läuft das Lied weiter",
    cpm: "Z/min",
    acc: "% Genauigkeit",
    words: "Wörter",
    typing: "Text zum Tippen. Klicke und fang an zu tippen",
    blur: "Klicke hier oder drücke eine Taste, um weiterzumachen",
    restart: "↻ Neu starten",
    hint: "Der Timer startet mit dem ersten Buchstaben. Die Leertaste springt zum nächsten Wort, auch wenn es einen Fehler hat: Er wird unterstrichen und als Fehler gezählt. Zeilen werden durch ein Leerzeichen getrennt.",
    r_speed: "Tempo",
    r_cpm: "Zeichen pro Minute",
    r_acc: "Genauigkeit",
    r_wpm: "Wörter/min",
    r_time: "Zeit",
    r_err: "Fehler",
    r_chars: "Zeichen",
    best_new: "Neuer Rekord! Vorher: {b} Z/min",
    best_first: "Erster Rekord für dieses Lied!",
    best_is: "Dein Rekord für dieses Lied: {b} Z/min",
    foot: "Rekorde und dein letzter Text werden nur in diesem Browser gespeichert.",
    custom: "Mein Text",
    demo: "Beispiel: „Oi, moros, moros“ (russisches Volkslied)",
    chart: "Tempo im Verlauf des Liedes",
    input: "Eingabefeld",
    ytaria: "Link zum YouTube-Video",
  },
  it: {
    punct: ", punteggiatura",
    punct_t: "La punteggiatura va digitata",
    caps: "Aa maiuscole",
    caps_t: "Le maiuscole vanno digitate",
    paste: "✎ La mia canzone",
    theme: "Tema chiaro / scuro",
    lang: "Lingua del sito",
    lang_btn: "Lingua",
    find: "🔍 Trova il testo",
    searching: "Cerco…",
    pick: "Più risultati, scegline uno:",
    notfound:
      "Testo non trovato. Correggi la ricerca (artista e canzone) e riprova, oppure incollalo tramite «La mia canzone».",
    need: "Prima incolla un link YouTube.",
    neterr: "Impossibile raggiungere il database dei testi. Controlla la connessione e riprova.",
    found: "Fatto: il testo è caricato, puoi scrivere.",
    src: "I testi provengono dal database aperto LRCLIB.",
    ph_q: "Artista e canzone, es. Måneskin Zitti e buoni",
    notitle:
      "Impossibile ottenere il titolo del video. Scrivi artista e canzone nel campo di ricerca e premi di nuovo il pulsante.",
    home: "Ricomincia con una nuova canzone",
    toolbar: "Impostazioni",
    paste_head: "La mia canzone",
    ph_title: "Titolo, es. Måneskin — Zitti e buoni",
    ph_yt: "Link al video di YouTube (facoltativo)",
    ph_text: "Incolla qui il testo, ogni verso su una nuova riga.",
    go: "Digita questo testo",
    cancel: "Annulla",
    novideo: "Incolla un link di YouTube a destra e il video apparirà qui",
    ph_yturl: "Link YouTube: https://youtu.be/…",
    load: "Carica",
    s: "s",
    rate: "Velocità della canzone",
    auto: "Pausa automatica se smetto di scrivere",
    auto_t: "Pausa dopo quanti secondi",
    paused: "Pausa: continua a scrivere e la canzone riprenderà",
    cpm: "car/min",
    acc: "% precisione",
    words: "parole",
    typing: "Testo da digitare. Clicca e inizia a scrivere",
    blur: "Clicca qui o premi un tasto per continuare",
    restart: "↻ Ricomincia",
    hint: "Il timer parte dalla prima lettera. Lo spazio passa alla parola successiva anche se c'è un errore: viene sottolineato e conteggiato. Le righe sono separate da uno spazio.",
    r_speed: "velocità",
    r_cpm: "caratteri al minuto",
    r_acc: "precisione",
    r_wpm: "parole/min",
    r_time: "tempo",
    r_err: "errori",
    r_chars: "caratteri",
    best_new: "Nuovo record! Prima: {b} car/min",
    best_first: "Primo record per questa canzone!",
    best_is: "Il tuo record per questa canzone: {b} car/min",
    foot: "I record e il tuo ultimo testo sono salvati solo in questo browser.",
    custom: "Il mio testo",
    demo: "Esempio: «Oj, moroz, moroz» (canzone popolare russa)",
    chart: "Velocità durante la canzone",
    input: "Campo di testo",
    ytaria: "Link al video di YouTube",
  },
  et: {
    punct: ", kirjavahemärgid",
    punct_t: "Kirjavahemärgid tuleb sisestada",
    caps: "Aa suurtähed",
    caps_t: "Suurtähed tuleb sisestada",
    paste: "✎ Oma laul",
    theme: "Hele / tume teema",
    lang: "Saidi keel",
    lang_btn: "Keel",
    find: "🔍 Otsi sõnad",
    searching: "Otsin…",
    pick: "Leiti mitu vastet, vali õige:",
    notfound:
      "Sõnu ei leitud. Paranda otsingut (esitaja ja laul) ja vajuta uuesti või kleebi sõnad „Oma laul“ kaudu.",
    need: "Kleebi kõigepealt YouTube'i link.",
    neterr: "Sõnade andmebaasiga ei saanud ühendust. Kontrolli internetti ja proovi uuesti.",
    found: "Valmis: laulusõnad on laaditud, võid trükkida.",
    src: "Sõnad tulevad avatud andmebaasist LRCLIB.",
    ph_q: "Esitaja ja laul, nt Ewert and The Two Dragons Good Man Down",
    notitle:
      "Video pealkirja ei õnnestunud saada. Kirjuta esitaja ja laul otsinguvälja ning vajuta nuppu uuesti.",
    home: "Alusta uuesti uue lauluga",
    toolbar: "Seaded",
    paste_head: "Oma laul",
    ph_title: "Pealkiri, nt Ewert and The Two Dragons — Good Man Down",
    ph_yt: "YouTube'i video link (pole kohustuslik)",
    ph_text: "Kleebi siia laulusõnad, iga rida eraldi reale.",
    go: "Trüki see tekst",
    cancel: "Tühista",
    novideo: "Kleebi paremale YouTube'i link ja video ilmub siia",
    ph_yturl: "YouTube'i link: https://youtu.be/…",
    load: "Laadi",
    s: "s",
    rate: "Laulu kiirus",
    auto: "Automaatne paus, kui ma ei trüki",
    auto_t: "Paus mitme sekundi pärast",
    paused: "Paus: jätka trükkimist ja laul läheb edasi",
    cpm: "tm/min",
    acc: "% täpsus",
    words: "sõna",
    typing: "Trükitav tekst. Klõpsa ja hakka trükkima",
    blur: "Jätkamiseks klõpsa siia või vajuta suvalist klahvi",
    restart: "↻ Uuesti",
    hint: "Taimer käivitub esimese tähega. Tühik viib järgmise sõna juurde ka siis, kui sõnas on viga: see joonitakse alla ja läheb vigade hulka. Read on eraldatud tühikuga.",
    r_speed: "kiirus",
    r_cpm: "tähemärki minutis",
    r_acc: "täpsus",
    r_wpm: "sõna/min",
    r_time: "aeg",
    r_err: "vigu",
    r_chars: "tähemärki",
    best_new: "Uus rekord! Enne: {b} tm/min",
    best_first: "Esimene rekord selle lauluga!",
    best_is: "Sinu rekord selle lauluga: {b} tm/min",
    foot: "Rekordid ja viimane tekst salvestatakse ainult selles brauseris.",
    custom: "Minu tekst",
    demo: "Näide: „Oi, moroz, moroz“ (vene rahvalaul)",
    chart: "Kiirus laulu jooksul",
    input: "Sisestusväli",
    ytaria: "YouTube'i video link",
  },
  lt: {
    punct: ", skyrybos ženklai",
    punct_t: "Reikia rašyti skyrybos ženklus",
    caps: "Aa didžiosios",
    caps_t: "Reikia rašyti didžiąsias raides",
    paste: "✎ Mano daina",
    theme: "Šviesi / tamsi tema",
    lang: "Svetainės kalba",
    lang_btn: "Kalba",
    find: "🔍 Rasti žodžius",
    searching: "Ieškau…",
    pick: "Rasti keli variantai, pasirink:",
    notfound:
      "Žodžių nerasta. Pataisyk paiešką (atlikėjas ir daina) ir spausk dar kartą arba įklijuok per „Mano daina“.",
    need: "Pirmiausia įklijuok YouTube nuorodą.",
    neterr: "Nepavyko prisijungti prie žodžių bazės. Patikrink internetą ir bandyk dar kartą.",
    found: "Atlikta: žodžiai įkelti, gali rašyti.",
    src: "Žodžiai imami iš atviros LRCLIB bazės.",
    ph_q: "Atlikėjas ir daina, pvz. Andrius Mamontovas Laisvė",
    notitle:
      "Nepavyko gauti vaizdo įrašo pavadinimo. Įrašyk atlikėją ir dainą į paieškos lauką ir spausk mygtuką dar kartą.",
    home: "Pradėti iš naujo su nauja daina",
    toolbar: "Nustatymai",
    paste_head: "Mano daina",
    ph_title: "Pavadinimas, pvz. Andrius Mamontovas — Laisvė",
    ph_yt: "YouTube vaizdo įrašo nuoroda (nebūtina)",
    ph_text: "Įklijuok čia dainos žodžius, kiekvieną eilutę naujoje eilutėje.",
    go: "Rašyti šį tekstą",
    cancel: "Atšaukti",
    novideo: "Įklijuok YouTube nuorodą dešinėje ir vaizdo įrašas atsiras čia",
    ph_yturl: "YouTube nuoroda: https://youtu.be/…",
    load: "Įkelti",
    s: "s",
    rate: "Dainos greitis",
    auto: "Automatinė pauzė, kai nerašau",
    auto_t: "Pauzė po kiek sekundžių",
    paused: "Pauzė: rašyk toliau ir daina tęsis",
    cpm: "ž/min",
    acc: "% tikslumas",
    words: "žodžių",
    typing: "Tekstas rašymui. Spustelėk ir pradėk rašyti",
    blur: "Spustelėk čia arba paspausk bet kurį klavišą, kad tęstum",
    restart: "↻ Iš naujo",
    hint: "Laikmatis pradeda skaičiuoti nuo pirmos raidės. Tarpas perkelia į kitą žodį, net jei žodyje yra klaida: ji pabraukiama ir įskaičiuojama į klaidas. Eilutės atskiriamos tarpu.",
    r_speed: "greitis",
    r_cpm: "ženklų per minutę",
    r_acc: "tikslumas",
    r_wpm: "žodž./min",
    r_time: "laikas",
    r_err: "klaidos",
    r_chars: "ženklai",
    best_new: "Naujas rekordas! Buvo {b} ž/min",
    best_first: "Pirmas rekordas šiai dainai!",
    best_is: "Tavo rekordas šiai dainai: {b} ž/min",
    foot: "Rekordai ir paskutinis tekstas saugomi tik šioje naršyklėje.",
    custom: "Mano tekstas",
    demo: "Pavyzdys: „Oi, moroz, moroz“ (rusų liaudies daina)",
    chart: "Greitis dainos metu",
    input: "Įvesties laukas",
    ytaria: "YouTube vaizdo įrašo nuoroda",
  },
  fi: {
    punct: ", välimerkit",
    punct_t: "Välimerkit pitää kirjoittaa",
    caps: "Aa isot kirjaimet",
    caps_t: "Isot kirjaimet pitää kirjoittaa",
    paste: "✎ Oma kappale",
    theme: "Vaalea / tumma teema",
    lang: "Sivuston kieli",
    lang_btn: "Kieli",
    find: "🔍 Hae sanat",
    searching: "Haetaan…",
    pick: "Useita osumia, valitse oikea:",
    notfound:
      "Sanoja ei löytynyt. Korjaa haku (esittäjä ja kappale) ja paina uudelleen tai liitä sanat kohdasta ”Oma kappale”.",
    need: "Liitä ensin YouTube-linkki.",
    neterr: "Sanatietokantaan ei saatu yhteyttä. Tarkista yhteys ja yritä uudelleen.",
    found: "Valmis: sanat on ladattu, voit kirjoittaa.",
    src: "Sanat haetaan avoimesta LRCLIB-tietokannasta.",
    ph_q: "Esittäjä ja kappale, esim. Käärijä Cha Cha Cha",
    notitle:
      "Videon nimeä ei saatu. Kirjoita esittäjä ja kappale hakukenttään ja paina painiketta uudelleen.",
    home: "Aloita alusta uudella kappaleella",
    toolbar: "Asetukset",
    paste_head: "Oma kappale",
    ph_title: "Nimi, esim. Käärijä — Cha Cha Cha",
    ph_yt: "YouTube-videon linkki (vapaaehtoinen)",
    ph_text: "Liitä sanat tähän, jokainen säe omalle rivilleen.",
    go: "Kirjoita tämä teksti",
    cancel: "Peruuta",
    novideo: "Liitä YouTube-linkki oikealle, niin video näkyy tässä",
    ph_yturl: "YouTube-linkki: https://youtu.be/…",
    load: "Lataa",
    s: "s",
    rate: "Kappaleen nopeus",
    auto: "Automaattinen tauko, kun en kirjoita",
    auto_t: "Tauko kuinka monen sekunnin jälkeen",
    paused: "Tauko: jatka kirjoittamista, niin kappale jatkuu",
    cpm: "mrk/min",
    acc: "% tarkkuus",
    words: "sanaa",
    typing: "Kirjoitettava teksti. Napsauta ja aloita kirjoittaminen",
    blur: "Jatka napsauttamalla tästä tai painamalla mitä tahansa näppäintä",
    restart: "↻ Alusta",
    hint: "Ajastin käynnistyy ensimmäisestä kirjaimesta. Välilyönti siirtää seuraavaan sanaan, vaikka sanassa olisi virhe: se alleviivataan ja lasketaan virheeksi. Rivit erotetaan välilyönnillä.",
    r_speed: "nopeus",
    r_cpm: "merkkiä minuutissa",
    r_acc: "tarkkuus",
    r_wpm: "sanaa/min",
    r_time: "aika",
    r_err: "virheet",
    r_chars: "merkit",
    best_new: "Uusi ennätys! Aiempi: {b} mrk/min",
    best_first: "Ensimmäinen ennätys tällä kappaleella!",
    best_is: "Ennätyksesi tällä kappaleella: {b} mrk/min",
    foot: "Ennätykset ja viimeisin teksti tallennetaan vain tähän selaimeen.",
    custom: "Oma teksti",
    demo: "Esimerkki: ”Oi, moroz, moroz” (venäläinen kansanlaulu)",
    chart: "Nopeus kappaleen aikana",
    input: "Syöttökenttä",
    ytaria: "YouTube-videon linkki",
  },
};

(function () {
  var $ = function (id) { // lühike getElementById \ short getElementById
    return document.getElementById(id);
  };
  var inner = $("inner"), // teksti kast \ text box
    textBox = $("text"),
    caret = $("caret"),
    hidden = $("hidden"), // peidetud väli kuhu trükime \ hidden input we type into
    typing = $("typing");
  var opts = { punct: false, caps: false }; // seaded: märgid ja suured \ settings: punctuation and caps
  var custom = null; // oma laul \ own song
  var bestMsg = null; // rekordi teade \ record message
  var S = null; // kogu mängu olek \ whole game state

  function store(k, v) { // localStorage abi \ localStorage helper
    try {
      if (v === undefined) return localStorage.getItem(k); // loeme \ read
      localStorage.setItem(k, v); // salvestame \ save
    } catch (e) {
      return null;
    }
  }
  try {
    var o = JSON.parse(store("opts") || "{}"); // vanad seaded \ old settings
    opts.punct = !!o.punct;
    opts.caps = !!o.caps;
  } catch (e) {}
   try {
    localStorage.removeItem("song"); // uus külastus -> laul ära \ new visit -> forget song
  } catch (e) {}

  // ---- keel \ language
  var LANG = store("lang"); // salvestatud keel \ saved language
  if (!I18N[LANG]) {
    LANG = "ru"; // vaikimisi vene \ default russian
    try {
      var nl = (navigator.language || "").slice(0, 2).toLowerCase(); // brauseri keel \ browser language
      if (I18N[nl]) LANG = nl;
    } catch (e) {}
  }
  // tõlge võtme järgi \ translation by key
  function t(k, b) {
    var v = (I18N[LANG] && I18N[LANG][k]) || I18N.ru[k] || k;
    return b === undefined ? v : v.replace("{b}", b);
  }
  function songTitle(song) { // laulu nimi ülal \ song title on top
    return song.demo ? "" : song.title || t("custom");
  }
  // rekordi tekst \ record text
  function showBest() {
    if (!bestMsg) {
      $("rBest").textContent = "";
      return;
    }
    $("rBest").textContent =
      bestMsg.k === "best_new" && !bestMsg.b ? t("best_first") : t(bestMsg.k, bestMsg.b);
  }
  // kogu sait valitud keelde \ whole site to chosen language
  function applyLang() {
    document.documentElement.lang = LANG; // html lang \ html lang
    document.querySelectorAll("[data-i18n]").forEach(function (el) { // tekstid \ texts
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) { // placeholderid \ placeholders
      el.placeholder = t(el.getAttribute("data-i18n-ph"));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) { // vihjed \ tooltips
      el.title = t(el.getAttribute("data-i18n-title"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { // aria sildid \ aria labels
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });
    var as = $("pAutoSec"); // autopausi sekundid \ autopause seconds
    if (as)
      for (var i = 0; i < as.options.length; i++)
        as.options[i].textContent = as.options[i].value + " " + t("s");
    document.querySelectorAll("#langMenu [data-l]").forEach(function (b) { // linnuke valitud keelele \ checkmark on chosen language
      b.setAttribute("aria-current", b.getAttribute("data-l") === LANG ? "true" : "false");
    });
    if (S) $("songLabel").textContent = songTitle(S.song);
    if (typeof autoPaused !== "undefined" && autoPaused && $("pNote"))
      $("pNote").textContent = t("paused");
    showBest();
    if (typeof lyrState !== "undefined" && lyrState) lyrShow(lyrState);
  }

  // kui vaja, võtame märgid ja suured tähed ära \ remove punctuation and caps if needed
  function prep(t) {
    if (!opts.caps) t = t.toLowerCase(); // väikesed tähed \ lowercase
    if (!opts.punct) t = t.replace(/[^\p{L}\p{N}\s'-]/gu, "").replace(/(^|\s)[-']+(?=\s|$)/g, "$1"); // märgid välja \ remove punctuation
    return t;
  }
  // е ja ё on sama täht \ е and ё are the same letter
  function eqChar(a, b) {
    if (a === b) return true;
    var m = { ё: "е", Ё: "Е" }; // ё -> е \ ё -> е
    return (m[a] || a) === (m[b] || b);
  }
  // sekundid -> m:ss \ seconds -> m:ss
  function fmt(sec) {
    sec = Math.floor(sec);
    return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
  }

  // oma laul või näidis \ own song or demo
  function currentSong() {
    if (custom) return custom; // kui oma on \ if own exists
    return { demo: true, title: "", text: DEMO_TEXTS[LANG] || DEMO_TEXTS.ru, yt: "" };
  }

  // teeme tekstist sõnad ja joonistame \ split text into words and draw
  function build() {
    bestMsg = null; // vana rekordi teade ära \ clear old record msg
    var song = currentSong();
    var lines = song.text // read \ lines
      .split(/\r?\n/)
      .map(function (l) {
        return prep(l).trim().replace(/\s+/g, " ");
      })
      .filter(function (l) {
        return l && !/^\[.*\]$/.test(l); // [Chorus] jms välja \ drop [Chorus] etc
      });
    var words = []; // kõik sõnad \ all words
    lines.forEach(function (l, li) {
      l.split(" ").forEach(function (w, wi, arr) {
        if (w) words.push({ t: w, typed: "", lineEnd: wi === arr.length - 1 }); // sõna + kas rea lõpp \ word + is line end
      });
    });
    S = { // uus olek \ new state
      song: song,
      words: words,
      wi: 0,
      start: 0,
      end: 0,
      keys: 0,
      errs: 0,
      timeline: [],
      running: false,
      done: false,
    };
    inner.innerHTML = ""; // tühjendame \ clear
    words.forEach(function (w, i) {
      var el = document.createElement("span"); // iga sõna span \ span per word
      el.className = "word";
      w.el = el;
      renderWord(i);
      inner.appendChild(el);
      if (w.lineEnd && i < words.length - 1) { // rea vahe \ line break
        var br = document.createElement("span");
        br.className = "br";
        inner.appendChild(br);
      }
    });
    inner.style.transform = "translateY(0)"; // kerime üles \ scroll to top
    $("songLabel").textContent = songTitle(song);
    if (song.yt !== undefined && song.yt !== $("ytUrl").value) { // uus video? \ new video?
      $("ytUrl").value = song.yt || "";
      loadVideo(song.yt);
    } else if (yt && ytReady) { // sama video algusesse \ same video to start
      yt.seekTo(0, true);
      yt.pauseVideo();
    }
    autoPaused = false;
    $("pNote").textContent = "";
    $("result").hidden = true; // tulemused peitu \ hide results
    hidden.value = "";
    typing.classList.remove("active");
    updateCounters(); // numbrid nulli \ reset numbers
    requestAnimationFrame(placeCaret);
  }

  // värvime tähed: õige, vale, lisa \ color letters: right, wrong, extra
  function renderWord(i) {
    var w = S.words[i],
      html = "";
    var n = Math.max(w.t.length, w.typed.length); // mitu tähte joonistada \ how many letters to draw
    for (var k = 0; k < n; k++) {
      var tc = w.t[k],
        yc = w.typed[k];
      var esc = function (c) {
        return c === "<" ? "&lt;" : c === "&" ? "&amp;" : c;
      };
      if (tc === undefined) html += '<span class="l extra">' + esc(yc) + "</span>"; // liigne täht \ extra letter
      else if (yc === undefined) html += '<span class="l">' + esc(tc) + "</span>"; // veel trükkimata \ not typed yet
      else html += '<span class="l ' + (eqChar(yc, tc) ? "ok" : "no") + '">' + esc(tc) + "</span>"; // õige või vale \ right or wrong
    }
    w.el.innerHTML = html;
    var wrong = i < S.wi && !wordOk(w); // läbitud ja vale \ passed and wrong
    w.el.classList.toggle("err", wrong);
  }
  // sõna nulli \ reset word
  function resetWord(w) {
    w.typed = "";
    w.miss = 0;
    hidden.value = "";
    renderWord(S.wi);
    w.el.classList.remove("shake");
    void w.el.offsetWidth; // animatsioon uuesti \ restart animation
    w.el.classList.add("shake");
  }
  // kas sõna on täpselt õige \ is the word exactly right
  function wordOk(w) {
    if (w.typed.length !== w.t.length) return false; // pikkus erineb \ length differs
    for (var k = 0; k < w.t.length; k++) if (!eqChar(w.typed[k], w.t[k])) return false;
    return true;
  }

  // kursor õigesse kohta \ caret to right place
  function placeCaret() {
    if (!S || !S.words.length) return; // pole teksti \ no text
    var w = S.words[Math.min(S.wi, S.words.length - 1)];
    var letters = w.el.querySelectorAll(".l");
    var pos = Math.min(w.typed.length, letters.length); // mitmes täht \ which letter
    var boxR = textBox.getBoundingClientRect();
    var r;
    var left;
    if (pos < letters.length) { // tähe ette \ before the letter
      r = letters[pos].getBoundingClientRect();
      left = r.left;
    } else {
      r = (letters[letters.length - 1] || w.el).getBoundingClientRect(); // sõna lõppu \ end of word
      left = r.right;
    }
    // kerime nii et aktiivne rida on 1. või 2. \ scroll so active line is 1st or 2nd
    var lineH = parseFloat(getComputedStyle(textBox).lineHeight);
    var wTop = w.el.offsetTop;
    var shift = Math.max(0, wTop - lineH); // kui palju kerida \ how much to scroll
    inner.style.transform = "translateY(" + -shift + "px)";
    caret.style.height = lineH * 0.62 + "px";
    caret.style.left = left - boxR.left + "px"; // x \ x
    caret.style.top = wTop - shift + lineH * 0.19 + "px"; // y \ y
  }

  // kiirus ja täpsus jooksvalt \ live speed and accuracy
  function liveStats() {
    var now = S.done ? S.end : performance.now();
    var mins = S.running || S.done ? (now - S.start) / 60000 : 0; // minutid \ minutes
    var correct = 0;
    for (var i = 0; i < S.wi; i++) if (wordOk(S.words[i])) correct += S.words[i].t.length + 1; // õiged sõnad + tühik \ right words + space
    var cur = S.words[S.wi];
    if (cur)
      for (var k = 0; k < cur.typed.length && k < cur.t.length; k++)
        if (eqChar(cur.typed[k], cur.t[k])) correct++;
    var cpm = mins > 0.01 ? Math.round(correct / mins) : 0; // tähemärki minutis \ chars per minute
    var acc = S.keys ? Math.max(0, Math.round((1 - S.errs / S.keys) * 100)) : 100; // täpsus % \ accuracy %
    return { cpm: cpm, wpm: Math.round(cpm / 5), acc: acc, mins: mins, correct: correct };
  }
  // numbrid üles \ update numbers
  function updateCounters() {
    var st = liveStats();
    $("cWpm").textContent = st.cpm;
    $("cAcc").textContent = st.acc;
    $("cProg").textContent = Math.min(S.wi, S.words.length) + "/" + S.words.length; // sõnad x/y \ words x/y
  }

  var ticker = null; // sekundi taimer \ second timer
  // taimer käima \ start timer
  function begin() {
    S.running = true;
    S.start = performance.now(); // algusaeg \ start time
    typing.classList.add("active");
    clearInterval(ticker);
    ticker = setInterval(function () {
      if (!S.running) return;
      updateCounters();
      S.timeline.push(liveStats().cpm); // graafiku punkt \ chart point
    }, 1000);
  }

  // lõpp: tulemused ja rekord \ end: results and record
  function finish() {
    S.running = false;
    S.done = true;
    S.end = performance.now(); // lõpuaeg \ end time
    clearInterval(ticker); // taimer seis \ stop timer
    S.timeline.push(liveStats().cpm);
    updateCounters();
    var st = liveStats();
    $("rCpm").textContent = st.cpm;
    $("rAcc").textContent = st.acc + "%";
    $("rWpm").textContent = st.wpm;
    $("rTime").textContent = fmt((S.end - S.start) / 1000); // aeg \ time
    $("rErr").textContent = S.errs;
    $("rChars").textContent = st.correct;
    drawChart(S.timeline);
    var key = // rekordi võti: laul + seaded \ record key: song + settings
      "best:" +
      (S.song.demo ? "demo" : S.song.title || "custom:" + S.song.text.slice(0, 40)) +
      ":" +
      (opts.punct ? 1 : 0) +
      (opts.caps ? 1 : 0);
    var best = parseInt(store(key) || "0", 10); // vana rekord \ old record
    if (st.cpm > best) { // uus rekord \ new record
      store(key, String(st.cpm));
      bestMsg = { k: "best_new", b: best };
    } else bestMsg = { k: "best_is", b: best };
    showBest();
    $("result").hidden = false; // näitame tulemusi \ show results
    typing.classList.remove("active");
  }

  // kiiruse graafik \ speed chart
  function drawChart(data) {
    var svg = $("chart");
    var W = 600,
      H = 150,
      P = 18;
    if (data.length < 2) data = [data[0] || 0, data[0] || 0];
    var max = Math.max.apply(null, data.concat([50])); // suurim väärtus \ max value
    max = Math.ceil(max / 50) * 50;
    var x = function (i) { // x koordinaat \ x coordinate
      return P + (i / (data.length - 1)) * (W - 2 * P);
    };
    var y = function (v) { // y koordinaat \ y coordinate
      return H - P - (v / max) * (H - 2 * P);
    };
    var pts = data
      .map(function (v, i) {
        return x(i).toFixed(1) + "," + y(v).toFixed(1);
      })
      .join(" ");
    var area = // värvitud ala \ filled area
      "M" +
      x(0) +
      "," +
      (H - P) +
      " L" +
      pts.replace(/ /g, " L") +
      " L" +
      x(data.length - 1) +
      "," +
      (H - P) +
      " Z";
    var grid = ""; // abijooned \ grid lines
    [0, 0.5, 1].forEach(function (f) {
      var gy = y(max * f);
      grid +=
        '<line x1="' +
        P +
        '" x2="' +
        (W - P) +
        '" y1="' +
        gy +
        '" y2="' +
        gy +
        '" stroke="var(--line)" stroke-width="1"/>';
      grid +=
        '<text x="' +
        (P + 2) +
        '" y="' +
        (gy - 4) +
        '" fill="var(--sub)" font-size="11" font-family="JetBrains Mono, monospace">' +
        Math.round(max * f) +
        "</text>";
    });
    var last = data[data.length - 1];
    svg.innerHTML = // joonistame \ draw
      grid +
      '<path d="' +
      area +
      '" fill="var(--accent)" fill-opacity=".12"/>' +
      '<polyline points="' +
      pts +
      '" fill="none" stroke="var(--accent)" stroke-width="2" vector-effect="non-scaling-stroke"/>' +
      '<circle cx="' +
      x(data.length - 1) +
      '" cy="' +
      y(last) +
      '" r="4" fill="var(--accent)"/>';
  }

  // ---- youtube mängija \ youtube player
  var yt = null, // mängija \ player
    ytReady = false,
    pendingId = null,
    lastType = 0, // viimane klahv \ last keypress
    autoPaused = false;
  // lingist video id \ video id from link
  function ytId(url) {
    if (!url) return null;
    var m = url.match(/(?:youtu\.be\/|v=|\/shorts\/|\/embed\/|\/live\/)([A-Za-z0-9_-]{11})/); // id lingist \ id from link
    if (m) return m[1];
    return /^[A-Za-z0-9_-]{11}$/.test(url.trim()) ? url.trim() : null;
  }
  // laeme video mängijasse \ load video into player
  function loadVideo(url) {
    var id = ytId(url);
    $("noVideo").hidden = !!id; // tekst "pane link" \ "paste link" text
    if (!id) {
      if (yt && ytReady) yt.stopVideo();
      return;
    }
    if (!window.YT || !YT.Player) { // api pole veel laetud \ api not loaded yet
      pendingId = id;
      return;
    }
    if (!yt) {
      yt = new YT.Player("yt", { // esimene kord \ first time
        videoId: id,
        playerVars: { rel: 0, playsinline: 1, modestbranding: 1 },
        events: {
          onReady: function () {
            ytReady = true;
            applyRate();
          },
        },
      });
    } else if (ytReady) {
      yt.cueVideoById(id); // vahetame video \ switch video
      applyRate();
    } else pendingId = id;
  }
  window.onYouTubeIframeAPIReady = function () { // api valmis \ api ready
    if (pendingId) {
      var id = pendingId;
      pendingId = null;
      loadVideo("https://youtu.be/" + id);
    }
  };
  function playing() { // kas mängib \ is playing
    return yt && ytReady && yt.getPlayerState && yt.getPlayerState() === 1;
  }
  function play() { // mängi \ play
    if (yt && ytReady) yt.playVideo();
  }
  function pauseV() { // paus \ pause
    if (yt && ytReady) yt.pauseVideo();
  }
  function togglePlay() { // play / paus \ play / pause
    if (playing()) pauseV();
    else {
      autoPaused = false;
      $("pNote").textContent = "";
      play();
    }
  }
  function seek(d) { // +-5 sek \ +-5 sec
    if (yt && ytReady) yt.seekTo(Math.max(0, yt.getCurrentTime() + d), true);
  }
  function applyRate() { // kiirus \ speed
    if (yt && ytReady) yt.setPlaybackRate(parseFloat($("pRate").value));
  }
  function stepRate(dir) { // kiirus üles/alla \ speed up/down
    var sel = $("pRate");
    var i = sel.selectedIndex + dir;
    if (i >= 0 && i < sel.options.length) {
      sel.selectedIndex = i;
      applyRate();
    }
  }
  $("ytLoad").addEventListener("click", function () { // nupp laadi \ load button
    loadVideo($("ytUrl").value);
    focusInput();
  });
  $("ytUrl").addEventListener("keydown", function (e) { // enter lingi väljas \ enter in link field
    if (e.key === "Enter") {
      e.preventDefault();
      loadVideo($("ytUrl").value);
      focusInput();
    }
  });
  $("pPlay").addEventListener("click", function () { // play nupp \ play button
    togglePlay();
    focusInput();
  });
  $("pBack").addEventListener("click", function () { // -5 nupp \ -5 button
    seek(-5);
    focusInput();
  });
  $("pFwd").addEventListener("click", function () { // +5 nupp \ +5 button
    seek(5);
    focusInput();
  });
  $("pRate").addEventListener("change", function () {
    applyRate();
    focusInput();
  });
  setInterval(function () { // autopaus \ autopause
    if (!$("pAuto").checked || !S || !S.running || !playing()) return;
    var sec = parseFloat($("pAutoSec").value);
    if (performance.now() - lastType > sec * 1000) { // ei trüki enam \ stopped typing
      pauseV();
      autoPaused = true;
      $("pNote").textContent = t("paused");
    }
  }, 250);
  function onTyped() { // trükiti -> laul edasi \ typed -> song goes on
    lastType = performance.now();
    if (autoPaused) {
      autoPaused = false;
      $("pNote").textContent = "";
      play();
    }
  }
  function playerKeys(e) { // ctrl kiirklahvid \ ctrl hotkeys
    if (!(e.ctrlKey || e.metaKey) || e.altKey) return false;
    if (e.key === "Enter") {
      togglePlay();
    } else if (e.key === "ArrowLeft") {
      seek(-5);
    } else if (e.key === "ArrowRight") {
      seek(5);
    } else if (e.key === "ArrowUp") {
      stepRate(1);
    } else if (e.key === "ArrowDown") {
      stepRate(-1);
    } else return false;
    e.preventDefault();
    return true;
  }

  // ---- sisestus \ input
  hidden.addEventListener("input", function () { // iga täht \ every letter
    if (!S || S.done) { // mäng läbi \ game over
      hidden.value = "";
      return;
    }
    var w = S.words[S.wi]; // praegune sõna \ current word
    var v = hidden.value;
    onTyped();
    if (!S.running && v.trim()) { // esimene täht -> start \ first letter -> start
      begin();
      if (!playing()) play();
    }
    if (v.indexOf(" ") !== -1) { // tühik \ space
      var before = v.split(" ")[0];
      if (!before && !w.typed) {
        hidden.value = "";
        return;
      } // alguse tühik ignoreerime \ ignore leading space
      w.typed = before || w.typed;
      S.keys++;
      if (!wordOk(w)) S.errs++; // viga loeme, sõna alla joon, läheme edasi \ count error, underline, go next
      S.wi++; // järgmine sõna \ next word
      renderWord(S.wi - 1);
      hidden.value = "";
      if (S.wi >= S.words.length) { // tekst läbi \ text done
        finish();
        placeCaret();
        return;
      }
      renderWord(S.wi);
    } else {
      if (v.length > w.typed.length) { // uued tähed \ new letters
        for (var k = w.typed.length; k < v.length; k++) {
          S.keys++;
          if (!(k < w.t.length && eqChar(v[k], w.t[k]))) { // vale täht \ wrong letter
            S.errs++;
            w.miss = (w.miss || 0) + 1;
          }
        }
      }
      w.typed = v;
      try {
        hidden.setSelectionRange(v.length, v.length); // kursor lõppu \ cursor to end
      } catch (e) {}
      renderWord(S.wi);
      if (S.wi === S.words.length - 1 && wordOk(w)) { // viimane sõna õige -> lõpp \ last word right -> end
        S.wi++;
        renderWord(S.wi - 1);
        finish();
      }
    }
    updateCounters();
    placeCaret();
  });
  hidden.addEventListener("keydown", function (e) { // klahvid väljas \ keys in field
    if (playerKeys(e)) return;
    if (isRestart(e)) {
      e.preventDefault();
      build();
      focusInput();
    }
  });

  function isRestart(e) { // ctrl + r \ ctrl + r
    return (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey && e.code === "KeyR";
  }
  // fookus peidetud väljale \ focus hidden field
  function focusInput() {
    hidden.focus({ preventScroll: true });
    $("blur").hidden = true;
  }
  typing.addEventListener("click", focusInput); // klikk tekstile \ click on text
  hidden.addEventListener("blur", function () { // fookus läks ära -> hägu \ focus lost -> blur
    setTimeout(function () {
      if (document.activeElement !== hidden && $("pastePanel").hidden && !S.done)
        $("blur").hidden = false;
    }, 120);
  });
  document.addEventListener("keydown", function (e) { // klahvid mujal \ keys elsewhere
    var tag = (document.activeElement && document.activeElement.tagName) || "";
    if (/INPUT|TEXTAREA|SELECT/.test(tag) && document.activeElement !== hidden) return;
    if (document.activeElement === hidden) return;
    if (playerKeys(e)) return;
    if (isRestart(e)) {
      e.preventDefault();
      build();
      focusInput();
      return;
    }
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) focusInput(); // suvaline täht -> tagasi \ any letter -> back
  });
  window.addEventListener("resize", function () { // akna suurus \ window size
    if (S) placeCaret();
  });

  // ---- tööriistariba \ toolbar
  // nupud = seaded \ buttons = settings
  function syncOpts() {
    $("optPunct").setAttribute("aria-pressed", opts.punct);
    $("optCaps").setAttribute("aria-pressed", opts.caps);
    store("opts", JSON.stringify(opts));
  }
  $("optPunct").addEventListener("click", function () { // märgid sisse/välja \ punctuation on/off
    opts.punct = !opts.punct;
    syncOpts();
    build();
    focusInput();
  });
  $("optCaps").addEventListener("click", function () { // suured sisse/välja \ caps on/off
    opts.caps = !opts.caps;
    syncOpts();
    build();
    focusInput();
  });
  $("pasteToggle").addEventListener("click", function () { // oma laulu paneel \ own song panel
    var p = $("pastePanel");
    p.hidden = !p.hidden;
    if (!p.hidden) {
      if (custom && !$("pasteText").value) { // eelmine laul tagasi \ previous song back
        $("pasteTitle").value = custom.title;
        $("pasteYt").value = custom.yt;
        $("pasteText").value = custom.text;
      }
      $("pasteText").focus();
    }
  });
  $("pasteCancel").addEventListener("click", function () { // tühista \ cancel
    $("pastePanel").hidden = true;
    focusInput();
  });
  $("pasteGo").addEventListener("click", function () { // trüki see tekst \ type this text
    var txt = $("pasteText").value.trim();
    if (!txt) { // tühi \ empty
      $("pasteText").focus();
      return;
    }
    custom = { title: $("pasteTitle").value.trim(), text: txt, yt: $("pasteYt").value.trim() };
    store("song", JSON.stringify(custom)); // meelde \ remember
    $("pastePanel").hidden = true;
    build();
    focusInput();
  });

  // ---- sõnade otsing: video nimi youtubest + LRCLIB baas \ lyrics search: video title + LRCLIB
  var lyrState = null; // otsingu staatus \ search status
  function lyrShow(k) { // staatuse tekst \ status text
    lyrState = k;
    $("lyrStatus").textContent = k ? t(k) + (k === "found" ? " " + t("src") : "") : "";
  }
  // video nimest prügi välja \ clean junk from video title
  function cleanTitle(title, author) {
    var x = title || "";
    x = x.replace(
      /[\(\[][^\)\]]*(official|video|clip|lyric|audio|visuali[sz]er|hd|4k|mv|remaster|live|клип|премьера|текст|видео)[^\)\]]*[\)\]]/gi,
      "",
    );
    x = x.replace(/\[[^\]]*\]|【[^】]*】/g, " "); // [...] välja \ remove [...]
    x = x.replace(/\([^)]*\b(19|20)\d\d\b[^)]*\)/g, " "); // (1988) välja \ remove (1988)
    x = x.replace(/\s[-–—,]?\s*(19|20)\d\d\s*$/, "");
    x = x.replace(/\s*[|｜].*$/, ""); // | järel välja \ cut after |
    x = x.replace(/\b(official\s+(music\s+)?video|lyrics?\s+video|official\s+audio)\b/gi, "");
    x = x.replace(/\s*(ft\.?|feat\.?)\s.*$/i, ""); // feat välja \ remove feat
    x = x
      .replace(/["«»“”]/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!/\s[-–—]\s/.test(x) && author) // pole kriipsu -> kanal ette \ no dash -> add channel
      x =
        author
          .replace(/\s*-\s*Topic$/i, "")
          .replace(/VEVO$/i, "")
          .trim() +
        " - " +
        x;
    return x;
  }
  // fetch + json \ fetch + json
  function getJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(r.status); // viga \ error
      return r.json();
    });
  }
  // video nimi: mängijast või oembedist \ video title from player or oembed
  function videoTitle(link) {
    var u = encodeURIComponent(link);
    try {
      var d0 = yt && ytReady && yt.getVideoData ? yt.getVideoData() : null; // mängijast \ from player
      if (d0 && d0.title && d0.video_id === ytId(link))
        return Promise.resolve(cleanTitle(d0.title, d0.author));
    } catch (e) {}
    return getJSON("https://www.youtube.com/oembed?format=json&url=" + u) // oembed \ oembed
      .catch(function () {
        return getJSON("https://noembed.com/embed?url=" + u); // varuvariant \ fallback
      })
      .then(function (d) {
        if (!d || !d.title) throw new Error("no title");
        return cleanTitle(d.title, d.author_name);
      });
  }
  // leitud sõnad käiku \ use found lyrics
  function useLyr(r) {
    var link = $("ytUrl").value.trim();
    custom = { title: r.artistName + " — " + r.trackName, text: r.plainLyrics.trim(), yt: link }; // uus laul \ new song
    store("song", JSON.stringify(custom));
    $("pasteTitle").value = custom.title;
    $("pasteYt").value = link;
    $("pasteText").value = custom.text;
    $("lyrList").innerHTML = "";
    loadVideo(link);
    build();
    lyrShow("found");
    focusInput();
  }
  // küsime LRCLIB-ist \ ask LRCLIB
  function lrcQuery(q) {
    return getJSON("https://lrclib.net/api/search?q=" + encodeURIComponent(q)).then(
      function (list) {
        var seen = {}; // kordused \ duplicates
        return (list || [])
          .filter(function (r) {
            if (r.instrumental || !r.plainLyrics) return false; // ilma sõnadeta välja \ drop no-lyrics
            var k = (r.artistName + "|" + r.trackName).toLowerCase();
            if (seen[k]) return false;
            seen[k] = 1;
            return true;
          })
          .slice(0, 6); // max 6 \ max 6
      },
    );
  }
  // otsime sõnu \ search lyrics
  function searchLyr(q) {
    // mitu katset: nagu on, ilma kriipsuta, ainult laulu nimi \ several tries: as is, no dash, song name only
    var tries = [],
      plain = q.replace(/\s+[-–—]\s+/g, " ").trim(),
      parts = q.split(/\s+[-–—]\s+/);
    var noBr = plain
      .replace(/[\(\[【][^\)\]】]*[\)\]】]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    [
      q,
      plain,
      noBr,
      parts.length > 1
        ? parts
            .slice(1)
            .join(" ")
            .replace(/[\(\[【][^\)\]】]*[\)\]】]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
        : "",
    ].forEach(function (x) {
      if (x && tries.indexOf(x) < 0) tries.push(x);
    });
    var i = 0;
    function next() { // järgmine katse \ next try
      if (i >= tries.length) {
        lyrShow("notfound");
        return;
      }
      return lrcQuery(tries[i++]).then(function (list) {
        if (!list.length) return next(); // tühi -> järgmine \ empty -> next
        if (list.length === 1) { // üks -> kohe \ one -> right away
          useLyr(list[0]);
          return;
        }
        lyrShow("pick"); // vali ise \ pick yourself
        list.forEach(function (r) {
          var b = document.createElement("button");
          b.type = "button";
          b.textContent = r.artistName + " — " + r.trackName;
          if (r.albumName) {
            var sm = document.createElement("small");
            sm.textContent = r.albumName;
            b.appendChild(sm);
          }
          b.addEventListener("click", function () {
            useLyr(r);
          });
          $("lyrList").appendChild(b);
        });
      });
    }
    return next();
  }
  $("findLyr").addEventListener("click", function () { // otsi nupp \ find button
    var link = $("ytUrl").value.trim(),
      q = $("lyrQ").value.trim();
    $("lyrList").innerHTML = "";
    if (!link && !q) { // pole midagi \ nothing given
      lyrShow("need");
      $("ytUrl").focus();
      return;
    }
    lyrShow("searching");
    $("findLyr").disabled = true; // nupp lukku \ lock button
    var getQ = q // päring: väljast või videost \ query: from field or video
      ? Promise.resolve(q)
      : videoTitle(link).then(
          function (x) {
            $("lyrQ").value = x;
            return x;
          },
          function () {
            throw "notitle";
          },
        );
    getQ
      .then(searchLyr)
      .catch(function (e) {
        lyrShow(e === "notitle" ? "notitle" : "neterr");
        if (e === "notitle") $("lyrQ").focus();
      })
      .then(function () {
        $("findLyr").disabled = false; // nupp lahti \ unlock button
      });
  });
  $("ytUrl").addEventListener("input", function () { // uus link -> päring tühjaks \ new link -> clear query
    $("lyrQ").value = "";
  });
  $("lyrQ").addEventListener("keydown", function (e) { // enter otsib \ enter searches
    if (e.key === "Enter") $("findLyr").click();
  });

  // ---- logo klikk: kõik nullime (keel, teema, seaded, rekordid jäävad) \ logo click: reset all (language, theme, settings, records stay)
  // kõik algusesse \ everything to start
  function resetAll() {
    custom = null;
    try {
      localStorage.removeItem("song"); // laul mälust ära \ forget song
    } catch (e) {}
    ["pasteTitle", "pasteYt", "pasteText", "ytUrl", "lyrQ"].forEach(function (id) { // väljad tühjaks \ clear fields
      if ($(id)) $(id).value = "";
    });
    $("pastePanel").hidden = true;
    if ($("lyrList")) {
      $("lyrList").innerHTML = "";
      lyrShow(null);
    }
    if ($("noVideo")) loadVideo(""); // video ära \ remove video
    $("result").hidden = true;
    build();
    window.scrollTo(0, 0);
    if ($("ytUrl")) $("ytUrl").focus();
    else focusInput();
  }
  $("logo").addEventListener("click", resetAll); // logo klikk \ logo click
  $("logo").addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      resetAll();
    }
  });
  $("restart").addEventListener("click", function () { // uuesti nupp \ restart button
    build();
    focusInput();
  });

  // ---- teema \ theme
  var MOON = // kuu ikoon \ moon icon
    '<svg width="26" height="26" viewBox="0 0 52 52" aria-hidden="true"><path d="M34 8a19 19 0 1 0 10 32A21 21 0 0 1 34 8z" style="fill:var(--fg)"/><path d="M40 10l1.5 3.5L45 15l-3.5 1.5L40 20l-1.5-3.5L35 15l3.5-1.5z" style="fill:var(--accent)"/><circle cx="46" cy="26" r="1.8" style="fill:var(--accent)"/></svg>';
  var SUN = // päikese ikoon \ sun icon
    '<svg width="26" height="26" viewBox="0 0 52 52" aria-hidden="true"><circle cx="26" cy="26" r="10" style="fill:var(--accent)"/><g style="stroke:var(--fg)" stroke-width="3.4" stroke-linecap="round"><path d="M26 4v6M26 42v6M4 26h6M42 26h6M10.4 10.4l4.3 4.3M37.3 37.3l4.3 4.3M10.4 41.6l4.3-4.3M37.3 14.7l4.3-4.3"/></g></svg>';
  // hele või tume \ light or dark
  function setTheme(dark) {
    document.documentElement.classList.toggle("st-dark", dark);
    $("themeBtn").innerHTML = dark ? SUN : MOON;
    $("themeBtn").setAttribute("aria-pressed", dark ? "true" : "false");
    if (S && S.done) drawChart(S.timeline);
  }
  var savedTheme = store("theme"); // salvestatud teema \ saved theme
  var sysDark = false;
  try {
    sysDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // süsteemi teema \ system theme
  } catch (e) {}
  setTheme(savedTheme ? savedTheme === "dark" : sysDark);
  // heledaks: uus teema kasvab ikoonist, tumedaks: vana tõmbub ikooni \ to light: new grows from icon, to dark: old shrinks into icon
  // teema vahetus animatsiooniga \ theme switch with animation
  function switchTheme(dark, btn) {
    var root = document.documentElement;
    var reduce = false;
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {}
    if (!document.startViewTransition || reduce) { // animatsiooni pole -> lihtsalt vaheta \ no animation -> just switch
      setTheme(dark);
      return;
    }
    var icon = btn.querySelector("svg") || btn;
    var r = icon.getBoundingClientRect();
    var x = r.left + r.width / 2, // ikooni keskpunkt \ icon center
      y = r.top + r.height / 2;
    var R = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)); // ringi raadius \ circle radius
    var toLight = !dark;
    root.classList.add(toLight ? "vt-expand" : "vt-shrink");
    var t;
    try {
      t = document.startViewTransition(function () {
        setTheme(dark);
      });
    } catch (e) {
      root.classList.remove("vt-expand", "vt-shrink");
      setTheme(dark);
      return;
    }
    t.ready
      .then(function () {
        var zero = "circle(0px at " + x + "px " + y + "px)";
        var full = "circle(" + R + "px at " + x + "px " + y + "px)";
        root.animate(
          { clipPath: toLight ? [zero, full] : [full, zero] },
          {
            duration: 420, // kiirus ms \ speed ms
            easing: "linear",
            fill: "forwards",
            pseudoElement: toLight ? "::view-transition-new(root)" : "::view-transition-old(root)",
          },
        );
      })
      .catch(function () {});
    t.finished.then(
      function () {
        root.classList.remove("vt-expand", "vt-shrink");
      },
      function () {
        root.classList.remove("vt-expand", "vt-shrink");
      },
    );
  }
  $("themeBtn").addEventListener("click", function () { // teema nupp \ theme button
    var dark = !document.documentElement.classList.contains("st-dark");
    switchTheme(dark, $("themeBtn"));
    store("theme", dark ? "dark" : "light");
    focusInput();
  });

  function langMenu(open) { // keele menüü lahti/kinni \ language menu open/close
    $("langMenu").hidden = !open;
    $("langBtn").setAttribute("aria-expanded", open ? "true" : "false");
  }
  $("langBtn").addEventListener("click", function (e) {
    e.stopPropagation();
    langMenu($("langMenu").hidden);
  });
  $("langMenu").addEventListener("click", function (e) { // keele valik \ pick language
    var b = e.target.closest("[data-l]");
    if (!b) return;
    e.stopPropagation();
    LANG = b.getAttribute("data-l");
    store("lang", LANG);
    applyLang();
    if (!custom) build(); // tervitus uues keeles \ welcome text in new language
    langMenu(false);
    placeCaret();
    focusInput();
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".lang-wrap")) langMenu(false); // klikk mujal -> kinni \ click outside -> close
  });
  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key === "Escape" && !$("langMenu").hidden) { // esc -> kinni \ esc -> close
        langMenu(false);
        $("langBtn").focus();
      }
    },
    true,
  );

  applyLang(); // start: keel \ start: language
  syncOpts();
  build();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeCaret); // fondid laetud -> kursor \ fonts loaded -> caret
})();