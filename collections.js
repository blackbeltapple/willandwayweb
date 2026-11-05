/*
  will&way collections
  ====================
  This is the only file you need to edit to change collection text.

  For each collection:
    slug        – the web address and the image folder name (lowercase, no spaces)
                  e.g. "haze" → willandway.co.uk/portfolio/haze
                                 images in /images/collections/haze/
    name        – the name shown on the site
    summary     – short text shown on the main portfolio page
    description – longer text shown on the collection's own page.
                  Each item in the list [ ... ] becomes its own paragraph.
    specs       – the "specifications" bullet points. Each item is one bullet.
                  Leave it as specs: [] to hide the list.

  Images (no code needed):
    Put photos in /images/collections/<slug>/ (.jpeg also works for any of them):
      cover.jpg  – the cover on the main portfolio page, and always shown
                   first on the collection page. Replace it to change the cover.
      1.jpg, 2.jpg, 3.jpg ...  – the rest of the photos. Numbers must have no
                   gaps. To add a photo, just upload the next number.
                   They're shown highest number first, so new photos appear
                   straight after the cover.

  The order collections appear here is the order they appear on the site.
*/

const COLLECTIONS = [
  {
    slug: "haze",
    name: "haze",
    summary: "Layered glazes that reveal new colours, with a soft, semi-matte finish.",
    description: [
      "The haze range is built around a core set of glazes that reveal new colours when layered together. Applied by hand through dipping, pouring, and brushing, each piece shares the same soft, semi-matte finish."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "A core set of natural, muted glazes applied in careful sequence",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "double-denim",
    name: "double denim",
    summary: "Layered glazes in shades from stonewashed to dark indigo.",
    description: [
      "Inspired by the versatility and timelessness of denim, this range uses layered glazes in shades from stonewashed to dark indigo. Applied over textured surfaces and sometimes a reactive slip, the glazes break and pool to recreate the worn, distressed character of well-loved denim."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Denim glazes are applied, sometimes using a reactive slip base",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "ember",
    name: "ember",
    summary: "Deep rusts, ochres and burnt siennas inspired by autumn's warmth.",
    description: [
      "Ember takes its inspiration from autumn's warmth – the deep rusts, ochres, and burnt siennas that feel both earthy and alive. These colours are layered to create a glowing, ember-like quality, with tones that shift from copper to terracotta as the glazes interact over textured surfaces."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Ember glazes are applied by dipping or brushing",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "prism",
    name: "prism",
    summary: "Bright rainbow glazes over a clean white base.",
    description: [
      "The prism collection celebrates pure, vivid colour. Bright glazes in rainbow hues are applied over a clean white base, creating bold, graphic pieces with a fresh, contemporary feel. Each colour sits flat and true, allowing the simple forms to carry the vibrant palette without distraction."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Primary underglazes are applied, finished with a clear glaze to give the smooth gloss texture and make them food-safe",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "inky",
    name: "inky",
    summary: "Deep indigo drips and dots over a classic Bristol glaze.",
    description: [
      "Inky pairs deep indigo blue with a classic Bristol glaze in a playful, graphic way. The blue appears as drips that trail down the white surface and dots scattered across the glaze – sometimes precise, sometimes loose and organic. These simple marks create a sense of movement and spontaneity, giving each piece its own character while maintaining the collection's clean, contemporary feel."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Pieces are first dipped into a Bristol glaze, then a cobalt carbonate suspension is applied using dripping, running, and splattering techniques",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "treacle",
    name: "treacle",
    summary: "Black stoneware clay fired to a deep, warm brown.",
    description: [
      "Treacle celebrates the rich, dark tones of black stoneware clay. When fired, the clay transforms into a deep, warm brown – the colour of dark treacle or bitter chocolate. Left unglazed or glazed selectively, these pieces reveal the natural beauty of the clay body itself, with a depth and warmth that feels both earthy and refined."
    ],
    specs: [
      "Made from a finely grogged black clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Glazes are applied – still experimenting!",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "heath",
    name: "heath",
    summary: "The greens, browns, frosted whites and pebble beiges of the moors.",
    description: [
      "The heath collection draws on the subtle, earthy tones of moorland landscapes – deep greens, warm browns, frosted whites, and soft pebble beiges. Glazes range from glossy to matte, creating pieces with varied surface textures that echo the natural contrasts found in the wild. Each colour works quietly alongside the others, building a palette that feels grounded and cohesive."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "Iterations of shaping, drying, and refining",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Moorland-inspired glazes are applied by dipping, pouring and brushing techniques",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "kirinuki",
    name: "kirinuki",
    summary: "Carved from solid blocks of clay, with oxides settled into the grooves.",
    description: [
      "The kirinuki collection is inspired by the Japanese carving technique of the same name – hollowing and shaping each piece from a solid block of clay. The carved surfaces are treated with metal oxides that are wiped away, leaving colour only in the textured grooves and recesses.",
      "A clear glaze is then applied, preserving these trace lines and shadows. The collection includes carved chawan tea bowls and sculptural forms, each revealing the marks of the making process."
    ],
    specs: [
      "Made from solid blocks of smooth-textured and flecked stoneware clay body",
      "The inner space is carved from the solid block",
      "The external texture is created by carving the solid clay",
      "Finally a foot ring is carved into the piece",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Oxides are applied to bisque-ware, then finished with a clear glaze",
      "Final firing to 1210°C"
    ]
  },
  {
    slug: "studio",
    name: "studio",
    summary: "Experiments, tangents and one-offs from the workshop.",
    description: [
      "The studio collection brings together diverse explorations from the workshop – pieces that chart different techniques, ideas, and creative tangents over the years.",
      "It includes sgraffito trays, sculptural totems, representations of local monuments, burnished vessels, experimental pinch pots, a caterpillar jug, ceramic colanders, and even framed fragments of broken pottery. Each piece tells its own story, whether it's a technical experiment, a playful diversion, or a conceptual exploration. This is where the unexpected lives."
    ],
    specs: [
      "A variety of clay bodies, techniques and glazes are used in this collection"
    ]
  },
  {
    slug: "verdigris",
    name: "verdigris",
    summary: "Copper oxide in carved lines beneath a simple white glaze.",
    description: [
      "The verdigris collection takes its name from the distinctive blue-green patina that forms on copper. Copper carbonate is painted onto textured surfaces – sometimes naturally occurring, sometimes carved as deliberate ridges and valleys – then wiped away.",
      "The oxide settles into the low points, creating linear patterns that are sealed beneath a simple white glaze. The result is functional ware with an organic, almost geological quality, where every line and groove is accentuated by the soft turquoise-green of copper."
    ],
    specs: [
      "Made from a flecked stoneware clay body and hand-built using the slab technique",
      "For some of the pieces, multiple clay slabs have textures applied and are then built up into the final design. Textures are derived from foliage, rollers and everyday household items",
      "The bisque firing transforms the clay into a durable, porous form that's ready to accept the glazes",
      "Pieces are first dipped into a Bristol glaze, then a copper carbonate suspension is applied using dripping, running, and splattering techniques",
      "Final firing to 1210°C"
    ]
  }
];
