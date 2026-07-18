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
// file under assets/projects/). `group` puts it under a heading on the tech-tiles section;
// `extra` lists course/assignment mentions that intentionally have no project of their own.

var TECH = {
  html: { label: 'HTML', icon: 'https://skillicons.dev/icons?i=html', group: 'lang', extra: ['IS-114'] },
  css: { label: 'CSS', icon: 'https://skillicons.dev/icons?i=css', group: 'lang', extra: ['IS-114'] },
  js: { label: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js', group: 'lang', extra: ['IS-202'] },
  java: { label: 'Java', icon: 'https://skillicons.dev/icons?i=java', group: 'lang', extra: ['IS-110'] },
  python: { label: 'Python', icon: 'https://skillicons.dev/icons?i=python', group: 'lang', extra: ['IS-211'] },
  php: { label: 'PHP', icon: 'https://skillicons.dev/icons?i=php', group: 'lang', extra: ['IS-115'] },
  kotlin: { label: 'Kotlin', icon: 'https://skillicons.dev/icons?i=kotlin', group: 'lang' },
  typescript: { label: 'TypeScript', icon: 'https://skillicons.dev/icons?i=typescript', group: 'lang' },
  csharp: { label: 'C#', icon: 'https://skillicons.dev/icons?i=cs', group: 'lang' },
  react: { label: 'React', icon: 'https://skillicons.dev/icons?i=react', group: 'framework' },
  dotnet: { label: '.NET', icon: 'https://skillicons.dev/icons?i=dotnet', group: 'framework' },
  springboot: { label: 'Spring Boot', icon: 'https://skillicons.dev/icons?i=spring', group: 'framework' },
  tensorflow: { label: 'TensorFlow', icon: 'https://skillicons.dev/icons?i=tensorflow', group: 'framework' },
  tailwind: { label: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind', group: 'framework' },
  postgresql: { label: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres', group: 'database', extra: ['IS-309'] },
  postgis: { label: 'PostGIS', icon: 'assets/projects/postgis.png', group: 'database' },
  mysql: { label: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql', group: 'database' },
  supabase: { label: 'Supabase', icon: 'https://skillicons.dev/icons?i=supabase', group: 'database' },
  git: { label: 'Git', icon: 'https://skillicons.dev/icons?i=git', group: 'tool', extra: ['IS-114'] },
  figma: { label: 'Figma', icon: 'https://skillicons.dev/icons?i=figma', group: 'tool', extra: ['IS-104', 'LA i IS-104', 'IS-112'] },
  qgis: { label: 'QGIS', icon: 'assets/projects/qgis.png', group: 'tool' },
  docker: { label: 'Docker', icon: 'https://skillicons.dev/icons?i=docker', group: 'tool', extra: ['IS-105'] },
  kubernetes: { label: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes', group: 'tool' },
  azure: { label: 'Azure', icon: 'https://skillicons.dev/icons?i=azure', group: 'tool' },
  wordpress: { label: 'WordPress', icon: 'https://skillicons.dev/icons?i=wordpress', group: 'tool' },
  arcgis: { label: 'ArcGIS', icon: 'assets/projects/arcgis.png', group: 'tool' },
  claudedesign: { label: 'Claude design', nm: 'Claude-design', icon: 'assets/projects/claude-design.png', group: 'tool' }
};

var SKILL_GROUPS = [
  { key: 'lang', heading: 'Språk' },
  { key: 'framework', heading: 'Rammeverk &amp; biblioteker' },
  { key: 'database', heading: 'Databaser' },
  { key: 'tool', heading: 'Verktøy &amp; plattformer' }
];

var PROJECTS = [
  {
    id: 'geodata2026', title: 'Geodata sommerprosjekt 2026', school: false,
    teaser: 'Automatisk sykronisering og statussjekker for kartlag for Norsk luftambulansen.',
    category: 'Jobb', year: 'Sommer 2026', yearSort: 2026.5, rating: 4,
    tech: ['python', 'react', 'kubernetes', 'docker', 'figma', 'azure', 'typescript', 'git', 'arcgis', 'html', 'css'],
    description: ['Automatisk sykronisering og statussjekker for kartlag for Norsk luftambulansen.']
  },
  {
    id: 'padel', title: 'Padel-turnering', school: false,
    teaser: 'Egen versjon av en padel-turnering programmert i Python.',
    category: 'Sommerprosjekt', year: 'Sommer 2025', yearSort: 2025.5, rating: 2,
    tech: ['html', 'css', 'python'],
    description: ['Dette sommerprosjektet gikk ut på å lage et Python-program for å håndtere logikken til en padel-turnering. Vi i NITO-studentene Kristiansand arrangerer turneringer i padel, og for å slippe å betale for en trener eller en app for å håndtere en turnering, kan vi like gjerne kode en selv.'],
    links: [{ label: 'Kildekode ↗', href: 'https://github.com/simholmen/padelpython', external: true }]
  },
  {
    id: 'react-portfolio', title: 'Portfolio med React', school: false,
    teaser: 'Min gamle portefølje bygd med HTML, CSS, JavaScript og React for å vise frem arbeidet mitt.',
    category: 'Sommerprosjekt', year: 'Sommer 2025', yearSort: 2025.5, rating: 1,
    tech: ['html', 'css', 'js', 'react'],
    description: ['Dette sommerprosjektet gikk ut på å lage en portefølje for å vise frem arbeidet jeg har gjort gjennom studiet. Porteføljen ble laget med HTML, CSS, JavaScript og React som et eksempel på hva jeg kan.'],
    links: [{ label: 'Kildekode ↗', href: 'https://github.com/simholmen/portfolio', external: true }]
  },
  {
    id: 'gis-ki', title: 'Semesterprosjekt innen GIS og KI', school: true,
    teaser: 'GIS og KI kombinert for å finne raskeste rute til beredskapstjenester.',
    category: 'Semesterprosjekt (IS-218)', year: 'Vår 2025', yearSort: 2025.3, rating: 5,
    tech: ['postgresql', 'python', 'react', 'supabase', 'docker', 'qgis', 'postgis', 'git'],
    description: [
      'Semesterprosjektet i IS-218 gikk ut på å lage en løsning som kombinerer GIS og KI innenfor klima/miljø eller samfunnsberedskap. Gruppen min valgte å fokusere på hvorvidt Kristiansand er godt nok dekket av beredskapstjenester som politi, brann og helse. Dette ble gjort ved å kombinere GIS og KI, og utvikle et verktøy for å finne den raskeste ruten til nærmeste beredskapstjeneste, ved bruk av luftlinje, veier og vårt eget verktøy.',
      'Verktøyet ble laget ved å bruke en KI-modell for å analysere og markere ut alle bygninger i Kristiansand gjennom flyfoto. Deretter ble det laget et kartgrunnlag for å finne den raskeste ruten fra et punkt til et annet uten å gå gjennom bygninger.'
    ],
    grade: 'A',
    learned: ['Bruk av QGIS for å bearbeide GIS-data', 'Trening og bruk av KI', 'Integrering av PostGIS for lagring og behandling av spatial data', 'Python for backend', 'Ulike karttjenester som Leaflet'],
    links: [
      { label: 'Se demo på YouTube ↗', href: 'https://youtu.be/qYw4H6qkzm0', external: true },
      { label: 'Kildekode ↗', href: 'https://github.com/simholmen/IS218-gruppe5-oppgave5', external: true },
      { label: '↓ Last ned rapport (PDF)', href: 'assets/pdf/IS218.pdf', download: true, className: 'pd-download' }
    ],
    featured: {
      order: 2, idxLabel: '02 — Semesterprosjekt (IS-218)',
      headline: 'Semesterprosjekt innen GIS og KI',
      blurb: 'En løsning som kombinerer GIS og KI for samfunnsberedskap. Gruppen min undersøkte om Kristiansand er godt nok dekket av beredskapstjenester, og utviklet et verktøy som finner den raskeste ruten til nærmeste politi, brann og helse — basert på en KI-modell som markerer bygninger fra flyfoto.',
      media: {
        type: 'gallery', pages: [
          [{ type: 'photo', src: 'assets/projects/shortestpath.png', alt: 'Bildedemo' }],
          [{ type: 'photo', src: 'assets/projects/gis-presentasjon.jpg', alt: 'Presentasjon av GIS- og KI-prosjektet' }],
          [{ type: 'photo', src: 'assets/projects/bygninger.png', alt: 'Bygninger markert av AI' }],
        ]
      }
    }
  },
  {
    id: 'kartverket', title: 'Semesterprosjekt for Kartverket', school: true,
    teaser: 'Crowdsourcing-løsning for Kartverket på tvers av tre emner.',
    category: 'Semesterprosjekt (IS-200/201/202)', year: 'Høst 2024', yearSort: 2024.7, rating: 4,
    tech: ['html', 'css', 'tailwind', 'csharp', 'dotnet', 'git', 'figma'],
    description: [
      'Semesterprosjektet høsten 2024 handlet om å utvikle en crowdsourcing-løsning for Kartverket. Målet var å komme med ideer til hvordan Kartverket kan forbedre sin eksisterende løsning.',
      'Prosjektet gikk på tvers av tre emner — IS-200, IS-201 og IS-202 — hvor hvert emne fokuserte på ulike deler av prosjektet. IS-200 fokuserte på frontend-utvikling, IS-201 på database og IS-202 på backend.'
    ],
    grade: 'B',
    learned: ['Forståelse av .NET-rammeverket', 'Bruk av MariaDB for databasehåndtering', 'Bruk av Tailwind CSS for frontend-design'],
    links: [{ label: 'Kildekode ↗', href: 'https://github.com/jenshaak/KartverketGruppe5', external: true }]
  },
  {
    id: 'new-portfolio', title: 'Ny portefølje', school: false,
    teaser: 'Denne porteføljen — bygd fra bunnen med HTML, CSS og JavaScript.',
    category: 'Personlig', year: 'Sommer 2026', yearSort: 2026.5, rating: 2,
    tech: ['html', 'css', 'js', 'claudedesign'],
    description: ['Denne nettsiden, designet og kodet fra bunnen av. Fokus på ren typografi, en interaktiv reise-seksjon med animert rute, og et sorterbart prosjektarkiv.'],
    learned: ['Avansert CSS og layout', 'Interaktivitet med vanilla JavaScript'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
  {
    id: 'bachelor', title: 'Bachelorprosjektet', school: true,
    teaser: 'Kildesorteringsapp med gamifisering og maskinlæring.',
    category: 'Bacheloroppgave', year: 'Vår 2026', yearSort: 2026.3, rating: 5,
    tech: ['kotlin', 'tensorflow', 'springboot', 'postgresql', 'git', 'figma', 'docker', 'kubernetes', 'azure'],
    description: ['Bacheloroppgaven: en mobilapp som hjelper folk å kildesortere riktig. Brukeren tar bilde av en gjenstand, en ML-modell gjenkjenner materialet, og poeng og nivåer motiverer til å sortere mer over tid.'],
    grade: 'A',
    learned: ['Maskinlæring i praksis', 'Mobilutvikling med Kotlin', 'Backend med Spring Boot'],
    links: [
      { label: 'Se demo på YouTube ↗', href: 'https://youtube.com/shorts/AtxuFNZmr1o', external: true, prefixPlay: true },
      { label: 'Video av prosessen ↗', href: 'https://youtu.be/b1CCtJAA7Gk', external: true, prefixPlay: true }
    ],
    featured: {
      order: 1, idxLabel: '01 — Bachelor-prosjekt',
      headline: 'Kildesorteringsapp med gamifisering og maskinlæring',
      blurb: 'En mobilapp som hjelper folk å kildesortere riktig. Brukeren tar bilde av en gjenstand, og en maskinlæringsmodell gjenkjenner materialet og foreslår riktig avfallstype. Gamifisering med poeng, nivåer og utfordringer motiverer til å sortere mer over tid.',
      media: {
        type: 'gallery', pages: [
          [{ src: 'assets/projects/reviver-login.png', alt: 'Reviver — innlogging' }, { src: 'assets/projects/reviver-quiz.png', alt: 'Reviver — gjett avfallstype' }],
          [{ src: 'assets/projects/reviver-result.png', alt: 'Reviver — resultat med treffsikkerhet' }, { src: 'assets/projects/reviver-level.png', alt: 'Reviver — nivå og streak' }],
          [{ src: 'assets/projects/reviver-leaderboard.png', alt: 'Reviver — leaderboard' }, { src: 'assets/projects/reviver-profile.png', alt: 'Reviver — profil' }]
        ]
      }
    }
  },
  {
    id: 'algard', title: 'Kartprosjekt med Ålgård turstilag', school: false,
    teaser: 'Digital kartlegging av turstier for Ålgård turstilag.',
    category: 'Samarbeidsprosjekt', year: '2026', yearSort: 2026, rating: 3,
    tech: ['html', 'css', 'js', 'postgresql', 'postgis', 'git', 'react'],
    description: ['Et kartprosjekt i samarbeid med Ålgård turstilag for å kartlegge og presentere turstier digitalt, med fokus på GIS og en brukervennlig visning av kartdata.'],
    learned: ['Arbeid med kartdata og GIS', 'Samarbeid med ekstern organisasjon'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }],
    featured: {
      order: 3, idxLabel: '03 — Samarbeidsprosjekt',
      headline: 'Kartprosjekt med Ålgård turstilag',
      blurb: 'Et kartprosjekt i samarbeid med Ålgård turstilag for å kartlegge og presentere turstier digitalt, med fokus på GIS og en brukervennlig visning av kartdata.',
      media: { type: 'placeholder', label: 'skjermbilde av prosjekt' }
    }
  },
  {
    id: 'gjesdal', title: 'Praksis hos Gjesdal IL', school: true,
    teaser: 'Praksisprosjekt med IT- og utviklingsoppgaver for idrettslaget.',
    category: 'Praksis', year: 'Høst 2025', yearSort: 2025.7, rating: 1,
    tech: ['html', 'css', 'php', 'wordpress'],
    description: ['Praksisopphold hos Gjesdal IL der jeg bidro med IT- og utviklingsoppgaver for idrettslaget, og fikk erfaring med å løse reelle behov for en organisasjon.'],
    learned: ['Reelle oppgaver for en organisasjon', 'Samarbeid og kommunikasjon'],
    links: [{ label: 'Mer info ↗', href: '#', external: true }]
  },
  {
    id: 'brawlstars', title: 'BrawlStarsNorge wiki', school: false,
    teaser: 'Mitt første egne nettprosjekt — en wiki om Brawl Stars.',
    category: 'Hobbyprosjekt', year: 'Sommer 2024', yearSort: 2024.5, rating: 2,
    tech: ['html', 'css', 'js', 'python'],
    description: ['En wiki-nettside om Brawl Stars for et norsk community, med informasjon om spillet. Mitt aller første egne nettprosjekt, bygd med HTML, CSS og JavaScript.'],
    learned: ['Grunnleggende webutvikling', 'Hvordan hente data fra API', 'Konfigurering av domene', 'Dynamiske markdown-filer'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
  {
    id: 'gruppe-cv', title: 'Gruppe-CV', school: true,
    teaser: 'Felles CV-nettside som presenterer en gruppes erfaring.',
    category: 'Skoleprosjekt', year: 'Høst 2025', yearSort: 2025.7, rating: 1,
    tech: ['html', 'css', 'js'],
    description: ['En felles CV-nettside for en gruppe, som presenterer medlemmenes erfaring og ferdigheter på en oversiktlig måte.'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
  {
    id: 'database', title: 'Databaseprosjekt', school: true,
    teaser: 'Datamodellering og relasjonsdatabase fra ER-modell til spørringer.',
    category: 'Skoleprosjekt', year: 'Vår 2025', yearSort: 2025.3, rating: 1,
    tech: ['postgresql'],
    description: ['Et prosjekt med fokus på datamodellering og relasjonsdatabaser — fra ER-modell og normalisering til ferdige SQL-spørringer.'],
    learned: ['Datamodellering og normalisering', 'SQL og spørringer'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
  {
    id: 'php-prosjekt', title: 'PHP-prosjekt', school: true,
    teaser: 'Dynamisk webprosjekt bygd med PHP og en database.',
    category: 'Skoleprosjekt', year: 'Høst 2025', yearSort: 2025.7, rating: 2,
    tech: ['html', 'css', 'php', 'mysql', 'git'],
    description: ['Et webprosjekt bygd med PHP, med dynamisk innhold og kobling mot en relasjonsdatabase.'],
    learned: ['Server-side utvikling med PHP', 'Kobling mot database'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
  {
    id: 'gruppecv', title: 'Bachelorgruppe CV', school: true,
    teaser: 'Felles CV-netttside for å bachelorgruppen.',
    category: 'Personlig', year: 'Sommer 2026', yearSort: 2025.9, rating: 1,
    tech: ['html', 'css', 'js'],
    description: ['Lagde en gruppe-CV som en del av emnet IS-310. Dette var for å vise frem erfaringene vi har gjort så langt i studiet, foor å skaffe oss en bedrift å skrive bachelorprosjektet hos.'],
    links: [{ label: 'Kildekode ↗', href: '#', external: true }]
  },
];
