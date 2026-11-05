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

  Images (no code needed):
    Put photos in /images/collections/<slug>/ named 1.jpg, 2.jpg, 3.jpg ...
    (.jpeg also works). Numbers must have no gaps. 1.jpg is also the cover
    image on the main portfolio page. To add a photo, just upload the next number.

  The order collections appear here is the order they appear on the site.
*/

const COLLECTIONS = [
  {
    slug: "haze",
    name: "haze",
    summary: "Layered glazes that reveal new colours, with a soft, semi-matte finish.",
    description: [
      "The haze range is built around a core set of glazes that reveal new colours when layered together. Applied by hand through dipping, pouring, and brushing, each piece shares the same soft, semi-matte finish."
    ]
  },
  {
    slug: "double-denim",
    name: "double denim",
    summary: "Layered glazes in shades from stonewashed to dark indigo.",
    description: [
      "Inspired by the versatility and timelessness of denim, this range uses layered glazes in shades from stonewashed to dark indigo."
    ]
  },
  {
    slug: "ember",
    name: "ember",
    summary: "Deep rusts, ochres and burnt siennas inspired by autumn's warmth.",
    description: [
      "Ember takes its inspiration from autumn's warmth – the deep rusts, ochres, and burnt siennas that feel both earthy and alive."
    ]
  },
  {
    slug: "prism",
    name: "prism",
    summary: "Bright rainbow glazes over a clean white base.",
    description: [
      "The prism collection celebrates pure, vivid colour. Bright glazes in rainbow hues are applied over a clean white base, creating bold, graphic pieces with a fresh, contemporary feel."
    ]
  },
  {
    slug: "inky",
    name: "inky",
    summary: "Deep indigo drips and dots over a classic Bristol glaze.",
    description: [
      "Inky pairs deep indigo blue with a classic Bristol glaze in a playful, graphic way. The blue appears as drips that trail down the white surface and dots scattered across the glaze – sometimes precise, sometimes loose and organic."
    ]
  },
  {
    slug: "treacle",
    name: "treacle",
    summary: "Black stoneware clay fired to a deep, warm brown.",
    description: [
      "Treacle celebrates the rich, dark tones of black stoneware clay. When fired, the clay transforms into a deep, warm brown – the colour of dark treacle or bitter chocolate."
    ]
  },
  {
    slug: "heath",
    name: "heath",
    summary: "The greens, browns, frosted whites and pebble beiges of the moors.",
    description: [
      "The Heath collection draws on the subtle, earthy tones of moorland landscapes – deep greens, warm browns, frosted whites, and soft pebble beiges. Glazes range from glossy to matte, creating pieces with varied surface textures that echo the natural contrasts found in the wild."
    ]
  },
  {
    slug: "kirinuki",
    name: "kirinuki",
    summary: "Carved from solid blocks of clay, with oxides settled into the grooves.",
    description: [
      "A collection inspired by the Japanese carving technique of the same name – hollowing and shaping each piece from a solid block of clay. The carved surfaces are treated with metal oxides that are wiped away, leaving colour only in the textured grooves and recesses."
    ]
  },
  {
    slug: "studio",
    name: "studio",
    summary: "Experiments, tangents and one-offs from the workshop.",
    description: [
      "This collection brings together diverse explorations from the workshop – pieces that chart different techniques, ideas, and creative tangents over the years.",
      "It includes sgraffito trays, sculptural totems, representations of local monuments, burnished vessels, experimental pinch pots, a caterpillar jug, ceramic colanders, and even framed fragments of broken pottery. Each piece tells its own story, whether it's a technical experiment, a playful diversion, or a conceptual exploration. This is where the unexpected lives."
    ]
  },
  {
    slug: "verdigris",
    name: "verdigris",
    summary: "Copper oxide in carved lines beneath a simple white glaze.",
    description: [
      "The verdigris collection takes its name from the distinctive blue-green patina that forms on copper. Copper carbonate is painted onto textured surfaces – sometimes naturally occurring, sometimes carved as deliberate ridges and valleys – then wiped away.",
      "The oxide settles into the low points, creating linear patterns that are sealed beneath a simple white glaze. The result is functional ware with an organic, almost geological quality, where every line and groove is accentuated by the soft turquoise-green of copper."
    ]
  }
];
