// Project + technology data for the portfolio.
// Loaded before script.js (see index.html) so its render logic can use these globals.
//
// To add a project: append an object to PROJECTS below. `tech` is a list of TECH keys —
// script.js derives every tech-icon row (feat card, archive row, archive detail, and the
// "brukt i" tooltip on the tech tiles) from this one array, so you only edit it here.
// Set `featured` only on projects that should also show up as a big card in "Utvalgte
// prosjekter" (order controls left-to-right position there).
//
// To add a technology: add a key to TECH with a label + icon (skillicons.dev, or a local
// file under assets/tech/). `group` puts it under a heading on the tech-tiles section;
// `extra` lists course/assignment mentions that intentionally have no project of their own.

var TECH = {
  html: { label: 'HTML', icon: 'https://skillicons.dev/icons?i=html', group: 'lang', extra: ['IS-114'] },
  css: { label: 'CSS', icon: 'https://skillicons.dev/icons?i=css', group: 'lang', extra: ['IS-114'] },
  js: { label: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', group: 'lang' },
  java: { label: 'Java', icon: 'https://skillicons.dev/icons?i=java', group: 'lang', extra: ['IS-110'] },
  python: { label: 'Python', icon: 'https://skillicons.dev/icons?i=python', group: 'lang', extra: ['IS-211'] },
  php: { label: 'PHP', icon: 'https://skillicons.dev/icons?i=php', group: 'lang' },
  kotlin: { label: 'Kotlin', icon: 'https://skillicons.dev/icons?i=kotlin', group: 'lang', extra: ['Jobb hos Reviver'] },
  typescript: { label: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript', group: 'lang' },
  csharp: { label: 'C#', icon: 'https://skillicons.dev/icons?i=cs', group: 'lang' },
  react: { label: 'React', icon: 'https://skillicons.dev/icons?i=react', group: 'framework' },
  dotnet: { label: '.NET', icon: 'https://skillicons.dev/icons?i=dotnet', group: 'framework' },
  springboot: { label: 'Spring Boot', icon: 'https://skillicons.dev/icons?i=spring', group: 'framework', extra: ['Jobb hos Reviver'] },
  tensorflow: { label: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow', group: 'framework' },
  tailwind: { label: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', group: 'framework' },
  postgresql: { label: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres', group: 'database' },
  postgis: { label: 'PostGIS', icon: 'assets/tech/postgis.png', group: 'database' },
  mysql: { label: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', group: 'database' },
  supabase: { label: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase', group: 'database' },
  git: { label: 'Git', icon: 'https://skillicons.dev/icons?i=git', group: 'tool', extra: ['IS-114', 'Jobb hos Reviver'] },
  figma: { label: 'Figma', icon: 'https://skillicons.dev/icons?i=figma', group: 'tool', extra: ['IS-104', 'LA i IS-104', 'IS-112'] },
  qgis: { label: 'QGIS', icon: 'assets/tech/qgis.png', group: 'tool' },
  docker: { label: 'Docker', icon: 'https://skillicons.dev/icons?i=docker', group: 'tool', extra: ['IS-105'] },
  kubernetes: { label: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes', group: 'tool', extra: ['Jobb hos Reviver'] },
  azure: { label: 'Azure', icon: 'https://skillicons.dev/icons?i=azure', group: 'tool', extra: ['Jobb hos Reviver']},
  wordpress: { label: 'WordPress', icon: 'https://skillicons.dev/icons?i=wordpress', group: 'tool' },
  arcgis: { label: 'ArcGIS', icon: 'assets/tech/arcgis.png', group: 'tool' },
  claudedesign: { label: 'Claude design', nm: 'Claude-design', icon: 'assets/tech/claude-design.png', group: 'tool' },
  swift: { label: 'Swift', icon: 'https://skillicons.dev/icons?i=swift', group: 'lang', extra: ['Jobb hos Reviver'] },
  googlecloud: {label: 'Google Cloud', icon: 'https://skillicons.dev/icons?i=gcp', group: 'tool', extra: ['Jobb hos Reviver'] }
};

var SKILL_GROUPS = [
  { key: 'lang', heading: 'Språk' },
  { key: 'framework', heading: 'Rammeverk &amp; biblioteker' },
  { key: 'database', heading: 'Databaser' },
  { key: 'tool', heading: 'Verktøy &amp; plattformer' }
];

// Ordered newest-first by yearSort (matches the archive's default date sort).
var PROJECTS = [
  {
    id: 'geodata2026', title: 'Geodata sommerprosjekt 2026', school: false,
    teaser: 'Automatisk sykronisering og statussjekker for kartlag for Norsk luftambulansen.',
    category: 'Jobb', year: 'Sommer 2026', yearSort: 2026.5, rating: 5,
    tech: ['python', 'react', 'kubernetes', 'docker', 'figma', 'azure', 'typescript', 'git', 'arcgis', 'html', 'css'],
    description: [
      'Sommerjobb hos Geodata sommeren 2026, som en av seks sommerstudenter valgt blant over 300 søkere — eneste student fra IT og informasjonssystemer ved UiA i kullet. Vi jobbet som en tverrfaglig studentgruppe jobbet med et prosjekt for Norsk Luftambulanse Teknologi, organisert som smidig utvikling med daglige standups, sprint planning og retrospektiv.',

      'Hovedleveransen var et statusdashboard som overvåker kartlag og datakilder i Norsk Luftambulanses operative kartløsninger. Løsningen sjekker automatisk at datakildene er tilgjengelige og oppdaterte, og varsler når noe feiler — for eksempel ved å sjekke at kartlaget for hjertestartere faktisk viser hjertestartere rundt Ullevål stadion. Løsningen omfatter også jevnlige synkroniseringsjobber fra eksterne kilder.',

      'Jeg jobbet blant annet med React, TypeScript, ArcGIS Maps SDK for JavaScript, Python, FastAPI, ArcGIS API for Python, Docker, Kubernetes og ArgoCD, med kode og utrulling håndtert gjennom Azure DevOps og moderne CI/CD. Gjennom sommeren ble jeg også godt kjent med Esri-teknologi generelt.'
    ],
    media: {
      type: 'gallery', pages: [
        [{ type: 'photo', src: 'assets/projects/geodata2026/varde1.png', alt: 'Hjemmeside for Varde' }],
        [{ type: 'photo', src: 'assets/projects/geodata2026/varde2.png', alt: 'Viser norgeskart' }],
        [{ type: 'photo', src: 'assets/projects/geodata2026/varde3.png', alt: 'Hjertestarter detalside' }],
        [{ type: 'photo', src: 'assets/projects/geodata2026/varde4.png', alt: 'Hjertestarter detalside med historikk' }],
        [{ type: 'photo', src: 'assets/projects/geodata2026/varde5.png', alt: 'Feil i historie' }],
      ]
    },
    featured: {
      order: 2, idxLabel: '02 — Geodata sommerprosjekt 2026',
      headline: 'Statusdashboard for Norsk luftambulanse',
      blurb: 'Et statusdashboard for Norsk Luftambulanse Teknologi som overvåker kartlag og datakilder i deres operative kartløsninger. Løsningen sjekker automatisk at datakildene er tilgjengelige og oppdaterte, og blir varslet når noe feiler. Løsningen omfatter også jevnlige synkroniseringsjobber fra eksterne kilder.'
    }
  },
  {
    id: 'new-portfolio', title: 'Ny portefølje', school: false,
    teaser: 'Denne porteføljen — bygd fra bunnen med HTML, CSS og JavaScript.',
    category: 'Personlig', year: 'Sommer 2026', yearSort: 2026.5, rating: 2,
    tech: ['html', 'css', 'js', 'claudedesign'],
    description: ['Dette prosjektet er denne porteføljen. Jeg likte ikke min gamle, og ville ha et nytt design og ha mulighet til å lettere legge til nye prosjekter og ferdigheter. Derfor lagde jeg denne, hvor jeg lett kan legge til teknologier og prosjekter i en fil, som blir brukt på ny flere steder.'],
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/personal-portfolio', external: true },
      { label: 'Nettside', href: 'https://simholmen.github.io/personal-portfolio/', external: true }
    ]
  },
  {
    id: 'bachelor', title: 'Bachelorprosjektet', school: true,
    teaser: 'Kildesorteringsapp med gamifisering og maskinlæring.',
    category: 'Bacheloroppgave', year: 'Vår 2026', yearSort: 2026.3, rating: 5,
    tech: ['kotlin', 'tensorflow', 'springboot', 'postgresql', 'git', 'figma', 'docker', 'kubernetes', 'azure'],
    description: [
      'Bacheloroppgave (IS-314) ved UiA, levert våren 2026 av en gruppe på seks, med Reviver AS som ekstern oppdragsgiver og produkteier. Målet var å utvikle en mobilapplikasjon som bruker kunstig intelligens til å gjenkjenne og klassifisere avfall fra bilder, for å gjøre kildesortering enklere og motivere til bedre sorteringsvaner gjennom gamifisering. Prosjektet ble gjennomført med Kanban som styringsmetodikk, i tett dialog med oppdragsgiver og veileder gjennom hele semesteret.',

      'Løsningen er bygd som en delvis mikrotjenestearkitektur: en Kotlin Multiplatform-app for iOS og Android autentiserer brukere via Auth0 og snakker med en Spring Boot-tjeneste som håndterer profil, venner, poeng og utfordringer. Bilder sendes videre til en egen klassifiseringstjeneste, som lagrer bildet i Azure Blob Storage og videresender det til en dedikert TensorFlow-modell for selve bildeklassifiseringen. Alt kjører på Kubernetes i Azure, og et felles bibliotek holder kommunikasjon og datamodeller konsistente på tvers av tjenestene. Appen har gamifiseringselementer som poeng, streaks, venneutfordringer og leaderboard for å holde på brukerengasjementet.',

      'Prosjektet ble vurdert som svært vellykket av både gruppen og oppdragsgiver, og oppgaven fikk toppkarakter A.'
    ],
    grade: 'A',
    links: [
      { label: 'Se demo på YouTube', href: 'https://youtube.com/shorts/AtxuFNZmr1o', external: true, prefixPlay: true },
      { label: 'Video av prosessen', href: 'https://youtu.be/b1CCtJAA7Gk', external: true, prefixPlay: true },
      { label: 'Last ned rapport (PDF)', href: 'assets/projects/bachelor/rapport.pdf', download: true, className: 'pd-download' }
    ],
    media: {
      type: 'gallery', pages: [
        [{ src: 'assets/projects/bachelor/reviver-login.png', alt: 'Reviver — innlogging' }, { src: 'assets/projects/bachelor/reviver-quiz.png', alt: 'Reviver — gjett avfallstype' }],
        [{ src: 'assets/projects/bachelor/reviver-result.png', alt: 'Reviver — resultat med treffsikkerhet' }, { src: 'assets/projects/bachelor/reviver-level.png', alt: 'Reviver — nivå og streak' }],
        [{ src: 'assets/projects/bachelor/reviver-leaderboard.png', alt: 'Reviver — leaderboard' }, { src: 'assets/projects/bachelor/reviver-profile.png', alt: 'Reviver — profil' }]
      ]
    },
    featured: {
      order: 1, idxLabel: '01 — Bachelor-prosjekt',
      headline: 'Kildesorteringsapp med gamifisering og maskinlæring',
      blurb: 'En mobilapp som hjelper folk å kildesortere riktig. Brukeren tar bilde av en gjenstand, og en maskinlæringsmodell gjenkjenner materialet og foreslår riktig avfallstype. Gamifisering med poeng, nivåer og utfordringer motiverer til å sortere mer over tid.'
    }
  },
  {
    id: 'algard', title: 'Kartprosjekt med Ålgård turstilag', school: false,
    teaser: 'Digital kartlegging av turstier for Ålgård turstilag.',
    category: 'Samarbeidsprosjekt', year: '2026', yearSort: 2026, rating: 3,
    tech: ['html', 'css', 'js', 'postgresql', 'postgis', 'git', 'react', 'supabase'],
    description: ['Et kartprosjekt i samarbeid med Ålgård turstilag for å kartlegge og presentere turstiene deres digitalt — en demoversjon som viser hvordan et fremtidig kartverktøy for laget kan se ut. Løsningen er bygd med React, Leaflet og react-leaflet for selve kartvisningen, med turstidata lagret som GeoJSON i Supabase. Kartet har en enkel visningsmodus for besøkende, med geolokasjon som viser brukerens egen posisjon, og en egen admin-modus med tegneverktøy for å opprette og redigere turstier direkte i kartet.',
      'Dette er et prosjekt jeg enda jobber med, og er derfor ikke ferdig. Nettsiden er bare en demo versjon av noe av det som er laget så langt.'
    ],
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/turstilag', external: true },
      { label: 'Nettside', href: 'https://turstilag.vercel.app', external: true }
    ],
  },
  {
    id: 'gjesdal', title: 'Praksis hos Gjesdal IL', school: true,
    teaser: 'Praksisprosjekt med IT- og utviklingsoppgaver for idrettslaget.',
    category: 'Praksis', year: 'Høst 2025', yearSort: 2025.7, rating: 1,
    tech: ['html', 'css', 'php', 'wordpress'],
    description: ['Praksisopphold hos Gjesdal Idrettslag høsten 2025, som en del av emnet IS-302. Oppgaven var å komme med et forslag til en ny og forbedret hjemmeside for klubben, og praksisen ble dokumentert underveis gjennom en egen nettside med statusoppdateringer, dagbok og en avsluttende refleksjon. Forslaget til ny nettside ble utviklet gjennom skissing og wireframing fram til en oppdatert design- og navigasjonsstruktur, som en konkret leveranse tilbake til klubben.'],
    links: [{ label: 'Mer info', href: 'https://github.com/simholmen/praksisnettside', external: true }]
  },
  {
    id: 'php-prosjekt', title: 'PHP-prosjekt', school: true,
    teaser: 'Dynamisk webprosjekt bygd med PHP og en database.',
    category: 'Skoleprosjekt (IS-115)', year: 'Høst 2025', yearSort: 2025.7, rating: 2,
    tech: ['php', 'mysql', 'git'],
    description: ['Et skoleprosjekt (IS-115) der jeg og en medstudent bygde en "mat-chatbot" i PHP. En enkel MVC-struktur med egne controllers, models, services og views. Boten henter oppskrifter fra TheMealDB sitt API, og støtter kommandoer som å vise kategorier, hente en tilfeldig rett, eller vise retter fra et gitt land, i tillegg til brukerregistrering/innlogging og en historikkside som viser tidligere spørringer. Brukere og spørringslogg lagres i en egen MySQL-database.'],
    grade: 'C',
    links: [{ label: 'Kildekode', href: 'https://github.com/Larskyd/chatbot', external: true }],
    media: {
      type: 'gallery', pages: [
        [{ type: 'photo', src: 'assets/projects/php/matchatbot.png', alt: 'Chatbot interface' }],
      ]
    },
    
  },
  {
    id: 'gruppecv', title: 'Bachelorgruppe CV', school: true,
    teaser: 'Felles CV-netttside for å bachelorgruppen.',
    category: 'Skoleprosjekt', year: 'Høst 2025', yearSort: 2025.7, rating: 1,
    tech: ['html', 'css', 'js'],
    description: ['Lagde en felles gruppe-CV-nettside, "GitCommitted", som en del av emnet IS-310, sammen med de fem andre jeg senere skrev bacheloroppgaven med. Siden viser frem gruppens tidligere semesterprosjekter — blant annet Kartverket-prosjektet og GIS/KI-prosjektet, med tilhørende karakterer — og en samlet oversikt over teknologiene vi har erfaring med, fra frontend og backend til databaser og verktøy. Målet var å bruke siden til å skaffe oss en ekstern oppdragsgiver å skrive bacheloroppgaven for, noe som endte med at Reviver AS ble oppdragsgiver.'],
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/gruppecv', external: true },
      { label: 'Nettside', href: 'https://simholmen.github.io/gruppecv/', external: true }
    ]
  },
  {
    id: 'padel', title: 'Padel-turnering', school: false,
    teaser: 'Egen versjon av en padel-turnering programmert i Python.',
    category: 'Sommerprosjekt', year: 'Sommer 2025', yearSort: 2025.5, rating: 2,
    tech: ['html', 'css', 'python'],
    description: ['Dette sommerprosjektet gikk ut på å lage et Python-program for å håndtere logikken til en padel-turnering i amerikaner-format. Vi i NITO-studentene Kristiansand arrangerer turneringer i padel, og for å slippe å betale for en app eller et verktøy for å håndtere en turnering, kan vi like gjerne kode en selv. Programmet er bygd rundt egne Player- og Tournament-klasser: spiller 1 og 3 møter spiller 2 og 4 hver runde, og etter hver runde sorteres spillerne på nytt basert på poeng før de neste lagene settes sammen. Ved oddetall antall spillere håndteres det med walkover, og resultatene kan vises fortløpende eller når turneringen er ferdig.',
      'Det som var veldig kult med dette prosjektet var at jeg fikk brukt det jeg lærte på skolen til å gjøre noe gøy, og jeg har også fått testet den flere ganger når jeg har arrangert turneringer. Jeg har også fått gode tilbakemeldinger på formatet, men håper å oppdatere UI og frontend i fremtiden.'
    ],
    links: [{ label: 'Kildekode', href: 'https://github.com/simholmen/padelpython', external: true }],
    media: {
      type: 'gallery', pages: [
        [{ type: 'photo', src: 'assets/personal/sommer2025-padel.jpg', alt: 'Padel-turnering' }],
      ]
    },
  },
  {
    id: 'react-portfolio', title: 'Portfolio med React', school: false,
    teaser: 'Min gamle portefølje bygd med HTML, CSS, JavaScript og React for å vise frem arbeidet mitt.',
    category: 'Sommerprosjekt', year: 'Sommer 2025', yearSort: 2025.5, rating: 1,
    tech: ['html', 'css', 'js', 'react'],
    description: ['Min første "ordentlige" portefølje, bygd med React og Vite for å vise frem prosjektene og ferdighetene mine som IT-student. Siden var delt opp i egne komponenter for hero, prosjekter, ferdigheter og kontaktinfo, med en interaktiv tidslinje over prosjektene mine, en visuell oversikt over teknologier via skillicons.dev, og en nedlastbar CV rett fra siden. Den ble senere erstattet av den nye porteføljen, på grunn av at jeg ønsket et mer moderne design og lettere måte å legge til nye prosjekter og ferdigheter på.'],
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/portfolio', external: true },
      { label: 'Nettside', href: 'https://portfolioreact-simholmens-projects.vercel.app/', external: true }
    ],
  },
  {
    id: 'gis-ki', title: 'AI drevet rutevalg i en krisesituasjon', school: true,
    teaser: 'GIS og KI kombinert for å finne raskeste rute til beredskapstjenester.',
    category: 'Semesterprosjekt (IS-218)', year: 'Vår 2025', yearSort: 2025.3, rating: 5,
    tech: ['postgresql', 'python', 'react', 'supabase', 'docker', 'qgis', 'postgis', 'git'],
    description: [
      'Semesterprosjekt (mappeinnlevering) i IS-218 "Geografiske informasjonssystemer, KI og IoT" ved UiA, våren 2025, løst i en gruppe på seks. Oppgaven var å bygge en løsning som kombinerer GIS og KI innenfor samfunnsberedskap, og gruppen min valgte å undersøke hvor godt Kristiansand er dekket av beredskapstjenester som politi, brann og helse, og hvordan dekningen kan bli bedre i en krisesituasjon der normal infrastruktur svikter.',

      'Løsningen er en kartapplikasjon bygd i React og Leaflet, med en Python/Flask-backend som kjører QGIS-funksjonalitet, og PostgreSQL/PostGIS via Supabase for lagring av over 110 000 geometrilinjer. Nødetatsdata ble hentet fra GeoNorge og OverpassTurbo/OSM, mens OpenRouteService ble brukt til å beregne faktisk kjøre-/gangavstand langs eksisterende veinett. I tillegg trente vi opp en AI-modell på flyfoto for å kjenne igjen bygninger, og brukte resultatet til å generere et eget navigasjonsnett utenom veinettet — slik at appen også kan foreslå snarveier over plener og åpne områder dersom vanlige ruter er blokkert. Dette var den mest spennende delen av prosjektet, der vi fikk teste en kreativ løsning.',

      'Prosjektet ble presentert på en expo med tilbakemelding fra medstudenter og veiledere, og et foreslått ruteforslag ble testet fysisk i felt for å sjekke at det holdt mål i praksis. Innleveringen fikk toppkarakter A.'
    ],
    grade: 'A',
    links: [
      { label: 'Se demo på YouTube', href: 'https://youtu.be/qYw4H6qkzm0', external: true, prefixPlay: true },
      { label: 'Kildekode', href: 'https://github.com/simholmen/IS218-gruppe5-oppgave5', external: true },
      { label: 'Last ned rapport (PDF)', href: 'assets/projects/gis-ki/IS218.pdf', download: true, className: 'pd-download' }
    ],
    media: {
      type: 'gallery', pages: [
        [{ type: 'photo', src: 'assets/projects/gis-ki/shortestpath.png', alt: 'Bildedemo' }],
        [{ type: 'photo', src: 'assets/projects/gis-ki/gis-presentasjon.jpg', alt: 'Presentasjon av GIS- og KI-prosjektet' }],
        [{ type: 'photo', src: 'assets/projects/gis-ki/bygninger.png', alt: 'Bygninger markert av AI' }],
      ]
    },
    featured: {
      order: 3, idxLabel: '03 — Semesterprosjekt (IS-218)',
      headline: 'AI drevet rutevalg i en krisesituasjon',
      blurb: 'En løsning som kombinerer GIS og KI for samfunnsberedskap. Gruppen min undersøkte om Kristiansand er godt nok dekket av beredskapstjenester, og utviklet et verktøy som finner den raskeste ruten til nærmeste politi, brann og helse — basert på en KI-modell som markerer bygninger fra flyfoto.'
    }
  },
  {
    id: 'database', title: 'Databaseprosjekt', school: true,
    teaser: 'Datamodellering og relasjonsdatabase fra ER-modell til spørringer.',
    category: 'Skoleprosjekt', year: 'Vår 2025', yearSort: 2025.3, rating: 1,
    tech: ['postgresql'],
    description: [
      'Oppgave 2 i IS-309 "Videregående databasesystemer" ved UiA, løst i en gruppe på fire, med en PostgreSQL-database for en bysykkelordning (bcycle) som utgangspunkt. Prosjektet lærte oss mye om spesielt PostgreSQL, selv om det var et simpelt prosjekt.',

      'Oppgaven gikk ut på å implementere lagrede prosedyrer for kjernefunksjonalitet som å opprette sykler, stasjoner, kontoer og medlemskap, en funksjon for å justere priser for inflasjon, samt både rad- og setningsnivå-triggere for å logge endringer i medlemskap. Hver prosedyre validerer input og returnerer tydelige feilmeldinger ved ugyldige verdier, som manglende felt, ugyldig status eller duplikate e-postadresser. I tillegg analyserte gruppen fysisk lagringsbruk og spørringsytelse med og uten indeksering, og satte opp rollebasert tilgangskontroll — egne databaseroller for henholdsvis lesetilgang, kontoadministrasjon, økonomi og sykkeldrift, hver med kun de rettighetene rollen faktisk trenger.',
    ],
    grade: 'A',
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/IS309-assignment2', external: true },
      { label: 'Last ned rapport (PDF)', href: 'assets/projects/is309/is309.pdf', download: true, className: 'pd-download' }]
  },
  {
    id: 'kartverket', title: 'Semesterprosjekt for Kartverket', school: true,
    teaser: 'Crowdsourcing-løsning for Kartverket på tvers av tre emner.',
    category: 'Semesterprosjekt (IS-200/201/202)', year: 'Høst 2024', yearSort: 2024.7, rating: 4,
    tech: ['html', 'css', 'tailwind', 'csharp', 'dotnet', 'git', 'figma'],
    description: [
      'Semesterprosjektet høsten 2024 handlet om å utvikle en crowdsourcing-løsning for Kartverket, basert på deres eksisterende «rett i kartet»-funksjon der innbyggere kan melde inn feil og mangler i kartgrunnlaget, som manglende turstier, veier eller stedsnavn. Målet var et enklere og mer brukervennlig verktøy, både for innbyggere som melder inn endringer og for saksbehandlere hos Kartverket som skal behandle innmeldingene.',

      'Prosjektet gikk på tvers av tre emner — IS-200, IS-201 og IS-202 — hvor hvert emne fokuserte på ulike deler av prosjektet. IS-200 fokuserte på analyse, design og prosjektgjennomføring, IS-201 på database og IS-202 på utvikling. I IS-200 kartla gruppen behovet gjennom en rich picture og en FACTOR-analyse, og landet på en MVC-arkitektur. Løsningen ble bygget gjennom fem Scrum-sprinter med jevnlig kontakt med saksbehandlere hos Kartverket, som underveis kom med nye ønsker og justeringer gruppen måtte tilpasse seg.'
    ],
    grade: 'B',
    links: [
      { label: 'Kildekode', href: 'https://github.com/jenshaak/KartverketGruppe5', external: true },
      { label: 'Last ned rapport (PDF)', href: 'assets/projects/kartverket3semester/is200rapport.pdf', download: true, className: 'pd-download' },
      { label: 'Demo video', href: 'https://youtu.be/5uAk3vGHf2s', external: true, prefixPlay: true }
    ]
  },
  {
    id: 'brawlstars', title: 'BrawlStarsNorge wiki', school: false,
    teaser: 'Mitt første egne nettprosjekt — en wiki om Brawl Stars.',
    category: 'Hobbyprosjekt', year: 'Sommer 2024', yearSort: 2024.5, rating: 3,
    tech: ['html', 'css', 'js', 'python', 'googlecloud'],
    description: [
      'Mitt aller første egne prosjekt. Startet som en enkel HTML/CSS-side, men ble etter hvert bygget om til å bruke Jekyll for å generere sider dynamisk — spillerprofiler og klubbsider opprettes automatisk ut fra en mal med Jekyll',

      'I tillegg har jeg laget flere Python-skript som henter spillerdata fra Brawl Stars sitt offisielle API, blant annet kamplogger, vinn/tap-statistikk og turneringsresultat. Skriptene kjøres jevnlig via en lokal cron-jobb og lagrer resultatet som JSON- og YAML-filer, som Jekyll deretter bruker til å rendre statistikksidene. Oppdaterte filer blir automatisk committet og pushet til GitHub via en GitHub Actions-workflow, slik at siden alltid viser fersk statistikk uten at jeg må gjøre noe manuelt.',

      'Jeg har ikke gjort så mye på prosjektet på en stund, men planen videre for prosjektet er å kjøre cron-jobbene på en server, og vise enda kulere statistikk for hver spiller som ingen andre nettsider gjør. Jeg har prøvd meg litt på dette med en VM på Google Cloud, men ble sittende fast etter limitation fra APIet og free tier VMs'
    ],
    links: [
      { label: 'Kildekode', href: 'https://github.com/simholmen/BrawlStarsNorgeWiki', external: true },
      { label: 'Nettside', href: 'https://brawlstarsnorge.com', external: true }
    ]
  },
];
