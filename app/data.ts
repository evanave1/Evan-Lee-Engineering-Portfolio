export type ProjectImage = {
  src: string
  alt: string
  label: string
}

export type Project = {
  slug: string
  id: string
  period: string
  title: string
  type: string
  problem: string
  execution: string
  result: string
  tools: string[]
  heroImage: ProjectImage
  gallery: ProjectImage[]
  overview: string
  approach: string[]
  deliverables: string[]
  sourcePage: string
}
export type TimelineItem = {
  period: string
  title: string
  organization: string
  detail: string
  tag: string
}


export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const specialThanks = [
  'A special thank you to Mr. Michael Collins for making my high school journey possible!',
  'Thank you to Mr. Michael Daugherty Sanders for always encouraging us engineering students.',
  'Thank you to Mrs. Lisa Garcia for unwavering support during and afterschool.',
]

export const specialThanksImages = [
  { src: '/about-support-01.jpg', alt: 'Evan H Lee with a mentor at a school event.' },
  { src: '/about-support-02.jpg', alt: 'Evan H Lee with engineering teammates and a mentor.' },
  { src: '/about-support-03.jpg', alt: 'Evan H Lee with a student group.' },
]


export const skillGroups = [
  {
    label: 'CAD / Simulation',
    items: ['Fusion 360', 'Onshape', 'COMSOL', 'MATLAB simulation'],
  },
  {
    label: 'Languages',
    items: ['Python', 'C++', 'Spanish'],
  },
  {
    label: 'Hardware / Prototyping',
    items: ['Raspberry Pi + PCB', '3D-printed enclosures', 'Balsa + foam fabrication'],
  },
  {
    label: 'Communication',
    items: ['Google Slides', 'PowerPoint', 'ProCreate', 'Photoshop', 'Lumion'],
  },
]

export const projects: Project[] = [
  {
    slug: 'firesight-ar-scba-mask',
    id: '01',
    period: '2024 — 2025',
    title: '“FireSight AR” SCBA Firefighter Mask',
    type: 'Engineering Design & Development',
    problem: 'Coordinated long-term project addressing defined problem statement',
    execution: 'Brainstormed using sketches and decision matrixes. Fusion360 & OnShape modeling led to the functioning prototype.',
    result: 'Functioning Prototype (Spring 2025)',
    tools: ['Fusion360', 'OnShape', 'ProCreate', 'Photoshop', 'Python IDE'],
    heroImage: {
      src: '/scba-16-cutout.png',
      alt: 'FireSight AR mask CAD model shown in an isometric view.',
      label: 'Hand Design & CAD (Fall 2024)',
    },
    gallery: [
      {
        src: '/scba-08-cutout.png',
        alt: 'FireSight AR mask CAD side view.',
        label: '01 / Hand Design & CAD (Fall 2024)',
      },
      {
        src: '/scba-10-cutout.png',
        alt: 'FireSight AR mask CAD front view with AES housing.',
        label: '02 / Fusion360 & OnShape modeling',
      },
      {
        src: '/scba-12-cutout.png',
        alt: 'FireSight AR mask CAD isometric view.',
        label: '03 / Functioning Prototype (Spring 2025)',
      },
      {
        src: '/scba-16-cutout.png',
        alt: 'FireSight AR mask CAD assembly shown from an angled view.',
        label: '04 / 3D printed housing of Raspberry Pi & PCB assembly',
      },
    ],
    overview: '"FireSight AR" SCBA Firefighter Mask (2024 - 2025). Experience with Fusion360, OnShape, ProCreate, Photoshop, Python IDE.',
    approach: [
      'Brainstormed using sketches and decision matrixes',
      'Fusion360 & OnShape modeling',
      '3D printed housing of Raspberry Pi & PCB assembly',
    ],
    deliverables: ['Hand Design & CAD (Fall 2024)', 'Functioning Prototype (Spring 2025)', '3D printed Raspberry Pi + PCB housing'],
    sourcePage: 'https://jhu.digication.com/evanlee/my-courses',
  },
  {
    slug: 'optimized-muffler-geometry',
    id: '02',
    period: '2024 — 2026',
    title: 'A Novel Muffler Configuration Using Optimized Internal Geometry to Address Muffler Problems and Urban Noise Pollution',
    type: 'COMSOL (MATLAB-Based) Project (2024 - 2026)',
    problem: 'Coordinated long-term project addressing defined problem statement',
    execution: 'Defined & achieved success based on industry standard design criteria. Graph-based data visualization and scientific research presentation experience.',
    result: 'Earned NOAA Award for environmental engineering solution',
    tools: ['Google Slides', 'Fusion 360', 'COMSOL'],
    heroImage: {
      src: '/reference-muffler-benchmark-original.png',
      alt: 'Transparent muffler geometry rendered for simulation benchmarking.',
      label: 'Final Solution Benchmarking (Winter 2025)',
    },
    gallery: [
      {
        src: '/reference-muffler-cad-original.png',
        alt: 'Muffler CAD geometry with optimized internal arrows.',
        label: '01 / Final Prototyping CAD (Fall 2024)',
      },
      {
        src: '/reference-muffler-benchmark-original.png',
        alt: 'Transparent muffler geometry prepared for simulation.',
        label: '02 / Fusion360 & OnShape modeling transferred to COMSOL',
      },
      {
        src: '/reference-muffler-comsol.png',
        alt: 'COMSOL graph showing transmission loss across frequency.',
        label: '03 / Final Solution Benchmarking (Winter 2025)',
      },
      {
        src: '/reference-muffler-poster.png',
        alt: 'Graph-based muffler simulation result prepared for presentation.',
        label: '04 / Final Poster Presentation (Spring 2026)',
      },
    ],
    overview: 'A Novel Muffler Configuration Using Optimized Internal Geometry to Address Muffler Problems and Urban Noise Pollution. COMSOL (MATLAB-Based) Project (2024 - 2026).',
    approach: [
      'Coordinated long-term project addressing defined problem statement',
      'Defined & achieved success based on industry standard design criteria',
      'Graph-based data visualization and scientific research presentation experience',
      'Earned NOAA Award for environmental engineering solution',
    ],
    deliverables: ['Final Prototyping CAD (Fall 2024)', 'Final Solution Benchmarking (Winter 2025)', 'Final Poster Presentation (Spring 2026)'],
    sourcePage: 'https://jhu.digication.com/evanlee/novel-muffler',
  },
  {
    slug: 'ied-cea-design-archive',
    id: '03',
    period: '2022 — 2024',
    title: 'Introduction to Engineering Design (IED) & Civil Engineering and Architecture (CEA)',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'Introductory high school engineering courses (2022 - 2024)',
    execution: 'Experience with CAD design process, hand sketching, physical prototyping. Developed woodworking skills, foam-based modeling, Lumion rendering. Exposure to engineering process & engineering teamwork.',
    result: 'Six project outputs',
    tools: ['OnShape', 'SketchUp', 'Lumion', 'Physical prototyping'],
    heroImage: {
      src: '/reference-ied-ucsd-01-cutout.png',
      alt: 'UCSD model built with balsa wood and foam.',
      label: 'Balsa wood and foam carved',
    },
    gallery: [
      {
        src: '/reference-ied-r2d2-01-cutout.png',
        alt: 'R2D2 isometric CAD model.',
        label: '01 / R2D2 / OnShape modeling',
      },
      {
        src: '/reference-ied-christmas-01-cutout.png',
        alt: 'Christmas project model.',
        label: '02 / Christmas Project / OnShape modeling',
      },
      {
        src: '/reference-ied-toy-car-01-cutout.png',
        alt: 'Reverse-engineered toy car project.',
        label: '03 / Reverse Engineering Toy Car Project / OnShape modeling',
      },
      {
        src: '/reference-ied-sketches-01-source.png',
        alt: 'Hand-drawn engineering sketch.',
        label: '04 / Assorted Sketches / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-ucsd-01-cutout.png',
        alt: 'UCSD model built with balsa wood and foam.',
        label: '05 / UCSD Model / Balsa wood and foam carved',
      },
      {
        src: '/reference-ied-centraleres-01-cutout.png',
        alt: 'Centraleres Tower architectural rendering.',
        label: '06 / Centraleres Tower / Lumion rendering, physical prototyping, SketchUp modeling',
      },
    ],
    overview: 'Introduction to Engineering Design (IED) & Civil Engineering and Architecture (CEA). Introductory high school engineering courses (2022 - 2024).',
    approach: [
      'Experience with CAD design process, hand sketching, physical prototyping',
      'Developed woodworking skills, foam-based modeling, Lumion rendering',
      'Exposure to engineering process & engineering teamwork',
    ],
    deliverables: ['R2D2', 'Christmas Project', 'Reverse Engineering Toy Car Project', 'Assorted Sketches', 'UCSD Model', 'Centraleres Tower'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
]
export const iedSubprojects: Project[] = [
  {
    slug: 'ied-r2d2',
    id: '03A',
    period: '2022 — 2024',
    title: 'R2D2',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'R2D2',
    execution: 'OnShape modeling',
    result: 'R2D2',
    tools: ['OnShape modeling'],
    heroImage: {
      src: '/reference-ied-r2d2-01-cutout.png',
      alt: 'R2D2 isometric CAD model.',
      label: 'OnShape modeling',
    },
    gallery: [
      {
        src: '/reference-ied-r2d2-01-cutout.png',
        alt: 'R2D2 isometric CAD model.',
        label: '01 / OnShape modeling',
      },
      {
        src: '/reference-ied-r2d2-02-cutout.png',
        alt: 'R2D2 rear CAD view.',
        label: '02 / OnShape modeling',
      },
      {
        src: '/reference-ied-r2d2-03-cutout.png',
        alt: 'R2D2 front CAD view.',
        label: '03 / OnShape modeling',
      },
      {
        src: '/reference-ied-r2d2-04-cutout.png',
        alt: 'R2D2 side CAD view.',
        label: '04 / OnShape modeling',
      },
    ],
    overview: 'R2D2. OnShape modeling.',
    approach: ['OnShape modeling'],
    deliverables: ['R2D2'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
  {
    slug: 'ied-christmas-project',
    id: '03B',
    period: '2022 — 2024',
    title: 'Christmas Project',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'Christmas Project',
    execution: 'OnShape modeling',
    result: 'Christmas Project',
    tools: ['OnShape modeling'],
    heroImage: {
      src: '/reference-ied-christmas-01-cutout.png',
      alt: 'Christmas project model.',
      label: 'OnShape modeling',
    },
    gallery: [
      {
        src: '/reference-ied-christmas-01-cutout.png',
        alt: 'Christmas project model.',
        label: '01 / OnShape modeling',
      },
      {
        src: '/reference-ied-christmas-02-cutout.png',
        alt: 'Christmas project character model.',
        label: '02 / OnShape modeling',
      },
      {
        src: '/reference-ied-christmas-03-cutout.png',
        alt: 'Christmas project CAD assembly.',
        label: '03 / OnShape modeling',
      },
      {
        src: '/reference-ied-christmas-04-cutout.png',
        alt: 'Christmas project CAD detail.',
        label: '04 / OnShape modeling',
      },
    ],
    overview: 'Christmas Project. OnShape modeling.',
    approach: ['OnShape modeling'],
    deliverables: ['Christmas Project'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
  {
    slug: 'ied-reverse-engineering-toy-car',
    id: '03C',
    period: '2022 — 2024',
    title: 'Reverse Engineering Toy Car Project',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'Reverse Engineering Toy Car Project',
    execution: 'OnShape modeling',
    result: 'Reverse Engineering Toy Car Project',
    tools: ['OnShape modeling'],
    heroImage: {
      src: '/reference-ied-toy-car-01-cutout.png',
      alt: 'Reverse-engineered toy car project.',
      label: 'OnShape modeling',
    },
    gallery: [
      {
        src: '/reference-ied-toy-car-01-cutout.png',
        alt: 'Reverse-engineered toy car project.',
        label: '01 / OnShape modeling',
      },
      {
        src: '/reference-ied-toy-car-02-cutout.png',
        alt: 'Reverse-engineered toy car CAD assembly.',
        label: '02 / OnShape modeling',
      },
      {
        src: '/reference-ied-toy-car-03-cutout.png',
        alt: 'Reverse-engineered toy car component study.',
        label: '03 / OnShape modeling',
      },
      {
        src: '/reference-ied-toy-car-04-cutout.png',
        alt: 'Reverse-engineered toy car CAD detail.',
        label: '04 / OnShape modeling',
      },
    ],
    overview: 'Reverse Engineering Toy Car Project. OnShape modeling.',
    approach: ['OnShape modeling'],
    deliverables: ['Reverse Engineering Toy Car Project'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
  {
    slug: 'ied-assorted-sketches',
    id: '03D',
    period: '2022 — 2024',
    title: 'Assorted Sketches',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'Assorted Sketches',
    execution: 'Handdrawn, ProCreate',
    result: 'Assorted Sketches',
    tools: ['Handdrawn, ProCreate'],
    heroImage: {
      src: '/reference-ied-sketches-01-source.png',
      alt: 'Hand-drawn engineering sketch.',
      label: 'Handdrawn, ProCreate',
    },
    gallery: [
      {
        src: '/reference-ied-sketches-01-source.png',
        alt: 'Hand-drawn engineering sketch.',
        label: '01 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-02-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '02 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-03-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '03 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-04-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '04 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-05-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '05 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-06-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '06 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-07-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '07 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-08-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '08 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-09-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '09 / Handdrawn, ProCreate',
      },
      {
        src: '/reference-ied-sketches-10-source.png',
        alt: 'Hand-drawn engineering sketch study.',
        label: '10 / Handdrawn, ProCreate',
      },
    ],
    overview: 'Assorted Sketches. Handdrawn, ProCreate.',
    approach: ['Handdrawn, ProCreate'],
    deliverables: ['Assorted Sketches'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
  {
    slug: 'ied-ucsd-model',
    id: '03E',
    period: '2022 — 2024',
    title: 'UCSD Model',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'UCSD Model',
    execution: 'Balsa wood and foam carved',
    result: 'UCSD Model',
    tools: ['Balsa wood and foam carved'],
    heroImage: {
      src: '/reference-ied-ucsd-01-cutout.png',
      alt: 'UCSD model built with balsa wood and foam.',
      label: 'Balsa wood and foam carved',
    },
    gallery: [
      {
        src: '/reference-ied-ucsd-01-cutout.png',
        alt: 'UCSD model built with balsa wood and foam.',
        label: '01 / Balsa wood and foam carved',
      },
      {
        src: '/reference-ied-ucsd-02-cutout.png',
        alt: 'UCSD model shown from a second angle.',
        label: '02 / Balsa wood and foam carved',
      },
    ],
    overview: 'UCSD Model. Balsa wood and foam carved.',
    approach: ['Balsa wood and foam carved'],
    deliverables: ['UCSD Model'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
  {
    slug: 'ied-centraleres-tower',
    id: '03F',
    period: '2022 — 2024',
    title: 'Centraleres Tower',
    type: 'Introductory high school engineering courses (2022 - 2024)',
    problem: 'Custom skyscraper project based on real New York land plot',
    execution: 'Lumion rendering, physical prototyping, SketchUp modeling',
    result: 'Centraleres Tower',
    tools: ['Lumion rendering, physical prototyping, SketchUp modeling'],
    heroImage: {
      src: '/reference-ied-centraleres-01-cutout.png',
      alt: 'Centraleres Tower architectural rendering.',
      label: 'Lumion rendering, physical prototyping, SketchUp modeling',
    },
    gallery: [
      {
        src: '/reference-ied-centraleres-01-cutout.png',
        alt: 'Centraleres Tower architectural rendering.',
        label: '01 / Lumion rendering, physical prototyping, SketchUp modeling',
      },
      {
        src: '/reference-ied-centraleres-02-cutout.png',
        alt: 'Centraleres Tower architectural model.',
        label: '02 / Lumion rendering, physical prototyping, SketchUp modeling',
      },
      {
        src: '/reference-ied-centraleres-03-cutout.png',
        alt: 'Centraleres Tower architectural model.',
        label: '03 / Lumion rendering, physical prototyping, SketchUp modeling',
      },
      {
        src: '/reference-ied-centraleres-04-cutout.png',
        alt: 'Centraleres Tower architectural study.',
        label: '04 / Lumion rendering, physical prototyping, SketchUp modeling',
      },
    ],
    overview: 'Centraleres Tower. Custom skyscraper project based on real New York land plot. Lumion rendering, physical prototyping, SketchUp modeling.',
    approach: ['Custom skyscraper project based on real New York land plot', 'Lumion rendering, physical prototyping, SketchUp modeling'],
    deliverables: ['Centraleres Tower'],
    sourcePage: 'https://jhu.digication.com/evanlee/ied',
  },
]

export const allProjects: Project[] = [...projects, ...iedSubprojects]


export const education: TimelineItem[] = [
  {
    period: '2026 — 2030',
    title: 'Biomedical Engineering',
    organization: 'Johns Hopkins Whiting School of Engineering · Baltimore, MD',
    detail: 'Biomedical engineering major. Current interests include aural technology, hearing loss regeneration, genetic treatments, and accessible hearing.',
    tag: 'Education',
  },
  {
    period: 'May 2024 — 2026',
    title: 'Dual Enrollment',
    organization: 'Chaffey College · Rancho Cucamonga, CA',
    detail: 'Studying Python, C++, and Spanish.',
    tag: 'Education',
  },
  {
    period: 'May — June 2024',
    title: 'BE-BOAT',
    organization: 'UCSD · San Diego, CA',
    detail: 'Biomedical engineering course analyzing biomaterials.',
    tag: 'Education',
  },
  {
    period: 'Class of 2026',
    title: 'Ruben S. Ayala High School',
    organization: 'Chino Hills, CA',
    detail: 'Rank 3 / 615. GPA 4.0. PLTW Engineering Pathway alumni.',
    tag: 'Education',
  },
]

export const workExperience: TimelineItem[] = [
  {
    period: 'Summers 2024 — 2026',
    title: 'Cashier & Cook',
    organization: 'Wings & Bowls · Claremont, CA',
    detail: 'Coordinated in-person and online orders. Worked in the kitchen as a cook, preparing food orders. Settled payments and online orders. Cleaned the restaurant during closing shifts and locked up.',
    tag: 'Work',
  },
  {
    period: 'Aug. 2022 — Oct. 2026',
    title: 'Private Tutor',
    organization: 'Ayala High School · Chino Hills, CA',
    detail: 'Created curriculum to prepare students from elementary to AP levels. Maintained responsive communication with parents and used progress checks to track student improvement over time.',
    tag: 'Work',
  },
]

export const jhuExtracurriculars: TimelineItem[] = [
  {
    period: '2026 — Present',
    title: 'Medical Technology Network Speaker Committee',
    organization: 'Johns Hopkins · Baltimore, MD',
    detail: 'Student-run organization focused on medical device development, professional networking, and support for biomedical research.',
    tag: 'JHU extracurricular',
  },
  {
    period: 'Aug. 2026 — Present',
    title: 'Tissue Morpho & Mechanics Lab',
    organization: 'Research Associate under Professor Shinuo Weng · Johns Hopkins University',
    detail: 'Developing a novel PDMS membrane stretcher to test the mechanical effects on convergent extension of Xenopus cells. Learning bio-resin-based printing and SolidWorks.',
    tag: 'JHU extracurricular',
  },
]

export const californiaActivities: TimelineItem[] = [
  {
    period: 'July 2024 — June 2026',
    title: 'Founder & President',
    organization: 'Ayala Engineering Society · Chino Hills, CA',
    detail: 'Established a club based on the need for engineering competition guidance for Ayala students. Organized four teams to SIMSEF regionals and one to CSEF in 2024.',
    tag: 'Leadership',
  },
  {
    period: 'Aug. 2024 — Jan. 2026',
    title: 'Independent Research Team',
    organization: 'Novel Muffler Configuration · Ayala High School · Chino Hills, CA',
    detail: 'Examined standard muffler acoustical and airflow failures and designed on industry standards. Derived a final model that decreased noise output by 64.38% and improved airflow by 36.78%.',
    tag: 'Research',
  },
  {
    period: 'Aug. 2024 — May 2025',
    title: 'Mentee under Professor Robert Crocket',
    organization: 'Cal Poly San Luis Obispo · Ayala High School · Chino Hills, CA',
    detail: 'Designed a research project involving occupational therapy applied to special needs education. Determined with ANOVA and Friedman’s Method that data was statistically relevant.',
    tag: 'Research',
  },
  {
    period: 'Aug. 2024 — June 2026',
    title: 'Treasurer & President',
    organization: 'Science Olympiad · Chino Hills, CA',
    detail: 'Managed and coordinated board meetings. Oversaw bookkeeping and fundraising, selected members for competition, and mentored students in engineering events.',
    tag: 'Leadership',
  },
  {
    period: 'Oct. 2024 — June 2026',
    title: 'Shift Leader & Core Volunteer',
    organization: 'Pomona Valley Hospital · Pomona, CA',
    detail: 'Trained volunteers and managed Friday shifts. Kept volunteers accountable, maintained nurse satisfaction with volunteer performance, and coordinated volunteer social events.',
    tag: 'Service',
  },
  {
    period: 'Aug. 2022 — May 2026',
    title: 'Team Captain',
    organization: 'Varsity Tennis · Ayala High School · Chino Hills, CA',
    detail: 'Competed in singles, coordinated team practice, and held teammates accountable for participation. Won the USTA Boys 16 & Up Singles tournament in 2024.',
    tag: 'Athletics',
  },
]

export const awards = [
  { value: 'NOAA', label: 'Pulse for the Planet Award · 2025' },
  { value: 'Top 1%', label: 'Ayala High School class · rank 3 / 615' },
  { value: '36 / 36', label: 'ACT and STEM ACT' },
]
