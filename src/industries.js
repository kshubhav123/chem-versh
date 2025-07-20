import {
  Beaker,
  BrickWall,
  Hexagon,
  PaintRoller,
  Shirt,
  Sprout,
  Syringe,
} from "lucide-react";

const industryData = [
  {
    id: 1,
    icon: <BrickWall />,
    industryName: "Construction Admixture",
    lightText: "Enhancing concrete performance from foundation to finish",
    industryDescription:
      "We supply high performance raw materials for admixtures, sourced from trusted global manufacturers to enhance the strength, workability, and durability of concrete. Whether the requirement is for slump retention, early strength gain, or improved flow, our products help construction professionals meet technical and project-specific demands with confidence.",
    industryImage: "industriesPic/construction.png",
    featuredProducts: [
      { name: "SNF", image: "products/SodiumImage.png", id: "1" },
      { name: "SLS", image: "products/SodiumLigno.png", id: "2" },
      { name: "HPEG 2400", image: "products/Hydroxy.png", id: "3" },
      { name: "Crude Naphthalene", image: "products/crudeNap.png", id: "5" },
      { name: "Sodium Gluconate", image: "products/sodiumGlu.png", id: "6" },
      { name: "Acrylic Acid", image: "products/acrylicA.png", id: "7" },
      { name: "PCE", image: "products/polycarbo.png", id: "8" },
      { name: "Quick Lime", image: "products/quickLime.png", id: "9" },
      { name: "2 HEA", image: "products/hydroxyethyl.png", id: "11" },
      { name: "SMF", image: "products/sulfonated.png", id: "13" },
    ],
  },
  {
    id: 2,
    icon: <Beaker />,
    industryName: "Dyes & Intermediates",
    lightText: "Reliable chemical bases for vibrant, lasting color",
    industryDescription:
      "Our dyes intermediates support stable formulation, deep coloration, and high dispersion in textile, ink, and pigment applications. Our range includes refined and crude naphthalene derivatives ideal for large-scale dye manufacturing.",
    industryImage: "industriesPic/dyes.png",
    featuredProducts: [
      { name: "SNF", image: "products/SodiumImage.png", id: "1" },
      {
        name: "Refined Naphthalene",
        image: "products/refinedNap.png",
        id: "4",
      },
      { name: "Crude Naphthalene", image: "products/crudeNap.png", id: "5" },
      { name: "Quick Lime", image: "products/quickLime.png", id: "9" },
    ],
  },
  {
    id: 3,
    icon: <Shirt />,
    industryName: "Textile",
    lightText:
      "Chemicals that add strength, softness, and stability to fabrics",
    industryDescription:
      "Our textile-grade dispersants and carriers ensure uniform dyeing, reduced wastage, and improved fabric texture. From preparation to finishing, our inputs boost process control and quality output in fabric production.",
    industryImage: "industriesPic/textTile.png",
    featuredProducts: [
      { name: "SNF", image: "products/SodiumImage.png", id: "1" },
      { name: "Crude Naphthalene", image: "products/crudeNap.png", id: "5" },
      { name: "Acrylic Acid", image: "products/acrylicA.png", id: "7" },
    ],
  },
  {
    id: 4,
    icon: <Sprout />,
    industryName: "Agrochemicals",
    lightText:
      "Delivering dispersion and stability for smarter crop protection",
    industryDescription:
      "Our additives enhance the performance of agrochemical formulations through improved solubility, dispersion, and active ingredient stability. We serve both bulk formulation and specialty pesticide markets.",
    industryImage: "industriesPic/agrochemical.png",
    featuredProducts: [
      { name: "SNF", image: "products/SodiumImage.png", id: "1" },
      { name: "SLS", image: "products/SodiumLigno.png", id: "2" },
      {
        name: "Refined Naphthalene",
        image: "products/refinedNap.png",
        id: "4",
      },
      { name: "Crude Naphthalene", image: "products/crudeNap.png", id: "5" },
      { name: "Lactose Monohydrate", image: "products/Lactose.png", id: "10" },
    ],
  },
  {
    id: 5,
    icon: <Hexagon />,
    industryName: "Ceramics",
    lightText: "Strengthening structure and shaping performance",
    industryDescription:
      "Our ceramic additives increase green strength, reduce water demand, and enhance moldability during the forming process. Used in tiles, sanitaryware, and advanced ceramics manufacturing.",
    industryImage: "industriesPic/cereminc.png",
    featuredProducts: [
      { name: "SLS", image: "products/SodiumLigno.png", id: "2" },
      { name: "STPP", image: "products/sodiumtripo.png", id: "12" },
      { name: "SMF", image: "products/sulfonated.png", id: "13" },
    ],
  },
  {
    id: 6,
    icon: <PaintRoller />,
    industryName: "Paints",
    lightText: "Chemical consistency for flawless finish",
    industryDescription:
      "Our range supports viscosity control, dispersion, and film formation in industrial and decorative paint formulations. Each product helps you achieve high coverage, durability, and smooth aesthetics.",
    industryImage: "industriesPic/paint.png",
    featuredProducts: [
      { name: "Acrylic Acid", image: "products/acrylicA.png", id: "7" },
      { name: "2 HEA", image: "products/hydroxyethyl.png", id: "11" },
      { name: "STPP", image: "products/sodiumtripo.png", id: "12" },
    ],
  },
  {
    id: 7,
    icon: <Syringe />,
    industryName: "Pharmaceuticals",
    lightText: "Purity and safety you can formulate with",
    industryDescription:
      "From excipients to fermentation agents, we supply pharma-grade raw materials that meet international safety standards. Suitable for tablets and supplements.",
    industryImage: "industriesPic/pharma.png",
    featuredProducts: [
      { name: "Sodium Gluconate", image: "products/sodiumGlu.png", id: "6" },
      { name: "Lactose Monohydrate", image: "products/Lactose.png", id: "10" },
    ],
  },
];

export default industryData;
