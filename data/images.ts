/**
 * Central image registry. Every photo on the site is defined here once —
 * visually verified Unsplash imagery with descriptive alt text.
 * Swap any entry for brand photography without touching page code.
 */

export interface ImageAsset {
  src: string;
  alt: string;
}

/** Build an Unsplash CDN URL at a sensible source size. */
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

/* ------------------------------------------------------------------ */
/* Brand & section imagery                                             */
/* ------------------------------------------------------------------ */

export const images = {
  hero: {
    src: u("1570129477492-45c003edd2be", 2000),
    alt: "A well-kept suburban family home with a healthy green lawn — the kind of property GreenShield protects every day",
  },
  technicianSpraying: {
    src: u("1674485135526-b5a686b33dfe"),
    alt: "Licensed pest control technician in protective coveralls applying a targeted exterior treatment",
  },
  handshake: {
    src: u("1521791136064-7986c2920216"),
    alt: "GreenShield technician shaking hands with a homeowner after completing a service visit",
  },
  team: {
    src: u("1522071820081-009f0129c71c"),
    alt: "The GreenShield office and dispatch team collaborating at the Austin headquarters",
  },
  family: {
    src: u("1511895426328-dc8714191300"),
    alt: "A family enjoying time together outdoors, free from pest worries",
  },
  homeInspection: {
    src: u("1581578731548-c64695cc6952"),
    alt: "Technician carefully inspecting and treating window frames inside a customer's home",
  },
  serviceVan: {
    src: u("1558803116-b443d28fa878"),
    alt: "GreenShield service van stocked with professional treatment equipment, parked on a customer's street",
  },
  yardSprinkler: {
    src: u("1541955193702-9ca03b1bb11a"),
    alt: "Backyard treatment misting across a lawn and trees during a scheduled yard service",
  },
  sprayGun: {
    src: u("1747659629851-a92bd71149f6"),
    alt: "Professional-grade application equipment used for precise crack-and-crevice treatments",
  },
  mapAustin: {
    src: u("1524661135-423995f22d0b"),
    alt: "Map illustrating the GreenShield service coverage area across the Austin metro",
  },
} satisfies Record<string, ImageAsset>;

/* ------------------------------------------------------------------ */
/* Service page imagery (one per service slug)                         */
/* ------------------------------------------------------------------ */

export const serviceImages: Record<string, ImageAsset> = {
  "ant-control": {
    src: u("1536427824649-fbf2e4a33d40"),
    alt: "Close-up of a black ant foraging — the scouts that lead entire colonies into homes",
  },
  "cockroach-control": {
    src: u("1759379077720-b099c6cf2f71"),
    alt: "A cockroach crawling across a textured concrete surface near a home's foundation",
  },
  "rodent-control": {
    src: u("1540366244940-9dce0a570312"),
    alt: "A roof rat traveling along a tree branch — the elevated route rats use to reach rooflines",
  },
  "termite-control": {
    src: u("1769977453410-02f774fb8fef"),
    alt: "Close-up of termite damage inside structural wood, showing hollowed galleries",
  },
  "mosquito-control": {
    src: u("1698566445612-b6e552371334"),
    alt: "Macro photograph of a mosquito — the disease vector our barrier treatments target",
  },
  "bed-bug-control": {
    src: u("1505693416388-ac5ce068fe85"),
    alt: "A clean, restful bedroom — what your room feels like again after professional bed bug elimination",
  },
  "spider-control": {
    src: u("1544717455-4cf7ad978978"),
    alt: "An orb-weaver spider at the center of its web outside a home",
  },
  "fly-control": {
    src: u("1638820842410-dbe10a8a61f0"),
    alt: "Flies eliminated after a targeted source-reduction treatment",
  },
  "flea-control": {
    src: u("1548199973-03cce0bbc87b"),
    alt: "Two happy dogs running through a treated, flea-free yard",
  },
  "tick-control": {
    src: u("1441974231531-c6227db76b6e"),
    alt: "A shaded forest edge with tall vegetation — classic tick questing habitat beside a lawn",
  },
  "wasp-removal": {
    src: u("1755039022246-d7e7f58b54c7"),
    alt: "A paper wasp nest hanging from a tree branch before professional removal",
  },
  "bee-removal": {
    src: u("1569393875125-38ebacc5288d"),
    alt: "A bee specialist carefully handling a honeycomb frame during a live colony relocation",
  },
  "silverfish-control": {
    src: u("1481627834876-b7833e8f5570"),
    alt: "Shelves of books and stored paper — the materials silverfish feed on in humid spaces",
  },
  "wildlife-control": {
    src: u("1497752531616-c3afd9760a11"),
    alt: "A young raccoon in the grass — humanely evicted and relocated, never harmed",
  },
  "snake-removal": {
    src: u("1531386151447-fd76ad50012f"),
    alt: "A snake raised alert in the grass — exactly the encounter to leave to a trained handler",
  },
  "bird-control": {
    src: u("1444464666168-49d633b86797"),
    alt: "A bird perched on a branch — deterred humanely from nesting in vents and ledges",
  },
  "seasonal-pest-control": {
    src: u("1477414348463-c0eb7f1359b6"),
    alt: "Leaves shifting from green to red across the seasons — the cycle our treatment calendar follows",
  },
  "preventive-pest-control": {
    src: u("1747659629851-a92bd71149f6"),
    alt: "Professional applicator performing a scheduled preventive barrier treatment",
  },
};

/* ------------------------------------------------------------------ */
/* Blog featured images (one per post slug)                            */
/* ------------------------------------------------------------------ */

export const blogImages: Record<string, ImageAsset> = {
  "how-to-know-if-you-have-termites": {
    src: u("1769977453410-02f774fb8fef"),
    alt: "Termite-damaged wood showing the hollowed galleries hidden beneath the surface",
  },
  "why-rodents-enter-homes-in-winter": {
    src: u("1540366244940-9dce0a570312"),
    alt: "A roof rat on a branch near a home — the elevated highway rodents use in winter",
  },
  "bed-bug-warning-signs-after-travel": {
    src: u("1436491865332-7a61a109cc05"),
    alt: "An airplane wing at sunrise — travel is the number one way bed bugs reach homes",
  },
  "how-to-prevent-mosquitoes-in-your-yard": {
    src: u("1439066615861-d1af74d74000"),
    alt: "Still lake water beside a dock — standing water like this is where mosquitoes breed",
  },
  "how-often-should-a-business-schedule-pest-control": {
    src: u("1517248135467-4c7edcad34c4"),
    alt: "A well-kept restaurant dining room — the environment commercial pest programs protect",
  },
  "why-pests-return-after-diy-treatment": {
    src: u("1747659629851-a92bd71149f6"),
    alt: "A consumer spray bottle in use — effective on contact, powerless against the colony",
  },
  "what-to-do-before-a-pest-control-visit": {
    src: u("1556911220-bff31c812dba"),
    alt: "A tidy kitchen with clear counters, prepared ahead of a scheduled pest control visit",
  },
  "signs-of-a-cockroach-infestation": {
    src: u("1567479403609-5711aa5e0ef6"),
    alt: "A cockroach on wood — by the time one is visible in daylight, more are hiding nearby",
  },
};

/* ------------------------------------------------------------------ */
/* Service-area (city) imagery                                         */
/* ------------------------------------------------------------------ */

export const cityImages: Record<string, ImageAsset> = {
  austin: {
    src: u("1531218150217-54595bc2b934"),
    alt: "The Austin, Texas skyline at dusk over Lady Bird Lake",
  },
  "round-rock": {
    src: u("1600596542815-ffad4c1539a9"),
    alt: "A modern suburban home typical of Round Rock's newer neighborhoods",
  },
  "cedar-park": {
    src: u("1600566753190-17f0baa2a6c3"),
    alt: "A contemporary Hill Country home in a Cedar Park neighborhood",
  },
  georgetown: {
    src: u("1564013799919-ab600027ffc6"),
    alt: "A stately brick home with mature landscaping, characteristic of Georgetown",
  },
  pflugerville: {
    src: u("1500382017468-9049fed747ef"),
    alt: "Blackland prairie farmland at sunrise on the edge of Pflugerville's growing subdivisions",
  },
  lakeway: {
    src: u("1600585154340-be6161a56a0c"),
    alt: "A luxury Lake Travis area home at dusk in the Lakeway hills",
  },
};

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export const galleryImages: { image: ImageAsset; label: string; category: string }[] = [
  {
    image: images.technicianSpraying,
    label: "Exterior barrier treatment",
    category: "Team in the Field",
  },
  {
    image: images.yardSprinkler,
    label: "Backyard mosquito & yard service",
    category: "Mosquito Control",
  },
  {
    image: {
      src: u("1562123404-528b41e573a0"),
      alt: "Insect-damaged wood documented during a termite inspection",
    },
    label: "Termite damage found on inspection",
    category: "Termite Protection",
  },
  {
    image: serviceImages["wildlife-control"],
    label: "Humane raccoon relocation",
    category: "Wildlife Removal",
  },
  {
    image: {
      src: u("1620331548806-4460cef9155f"),
      alt: "A honey bee colony clustered on comb during a live-relocation extraction",
    },
    label: "Live honey bee relocation",
    category: "Bee Relocation",
  },
  {
    image: {
      src: u("1517248135467-4c7edcad34c4"),
      alt: "A spotless restaurant dining room protected by a commercial monitoring program",
    },
    label: "Commercial restaurant program",
    category: "Commercial Service",
  },
  {
    image: {
      src: u("1558904541-efa843a96f01"),
      alt: "A lush, healthy backyard lawn after fire ant elimination and yard treatment",
    },
    label: "Backyard reclaimed from fire ants",
    category: "Yard Treatment",
  },
  {
    image: {
      src: u("1752852381113-7d93abc9d7ea"),
      alt: "A clean attic with fresh insulation and skylights after rodent exclusion and restoration",
    },
    label: "Attic restoration after exclusion",
    category: "Attic Restoration",
  },
  {
    image: images.serviceVan,
    label: "Stocked and ready — the GreenShield fleet",
    category: "Team in the Field",
  },
];

/* ------------------------------------------------------------------ */
/* Before / after comparison pairs                                     */
/* ------------------------------------------------------------------ */

export const beforeAfterProjects: {
  title: string;
  location: string;
  before: ImageAsset;
  after: ImageAsset;
}[] = [
  {
    title: "Wasp Nest at the Eaves — Removed & Deterred",
    location: "Barton Hills, Austin",
    before: {
      src: u("1755039022246-d7e7f58b54c7"),
      alt: "An active paper wasp nest hanging beside the home before removal",
    },
    after: {
      src: u("1600585154526-990dced4db0d"),
      alt: "Clean, treated rooflines and eaves after professional wasp nest removal",
    },
  },
  {
    title: "Fire Ant Yard — Mound Elimination",
    location: "Georgetown",
    before: {
      src: u("1416879595882-3373a0480b5b"),
      alt: "Disturbed soil and mound activity in the yard before fire ant treatment",
    },
    after: {
      src: u("1558904541-efa843a96f01"),
      alt: "A healthy, mound-free green lawn after professional fire ant treatment",
    },
  },
  {
    title: "Termite Damage — Treated & Restored",
    location: "Round Rock",
    before: {
      src: u("1562123404-528b41e573a0"),
      alt: "Structural wood riddled with insect damage before termite treatment",
    },
    after: {
      src: u("1752852381113-7d93abc9d7ea"),
      alt: "Sound, restored structural wood and fresh insulation after treatment and repair",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Customer avatars (testimonials, keyed by customer name)             */
/* ------------------------------------------------------------------ */

export const avatarImages: Record<string, ImageAsset> = {
  "Sarah Mitchell": { src: u("1494790108377-be9c29b29330", 256), alt: "Portrait of Sarah Mitchell" },
  "James Rodriguez": { src: u("1507003211169-0a1dd7228f2d", 256), alt: "Portrait of James Rodriguez" },
  "Emily Chen": { src: u("1438761681033-6461ffad8d80", 256), alt: "Portrait of Emily Chen" },
  "Marcus Thompson": { src: u("1500648767791-00dcc994a43e", 256), alt: "Portrait of Marcus Thompson" },
  "Linda Foster": { src: u("1544005313-94ddf0286df2", 256), alt: "Portrait of Linda Foster" },
  "David Nguyen": { src: u("1472099645785-5658abf4ff4e", 256), alt: "Portrait of David Nguyen" },
  "Rachel Alvarez": { src: u("1534528741775-53994a69daeb", 256), alt: "Portrait of Rachel Alvarez" },
  "Tom Bradley": { src: u("1552058544-f2b08422138a", 256), alt: "Portrait of Tom Bradley" },
  "Angela Park": { src: u("1580489944761-15a19d654956", 256), alt: "Portrait of Angela Park" },
};
