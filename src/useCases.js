const productsUseCase = [
  {
    productid: 11,
    productname: "2-Hydroxyethyl Acrylate",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value":
              "Colorless to light yellow Transparent liquid without Mechanical impurities",
            "Test Results": "Same",
          },
          {
            Items: "Monoester, w%, ≥",
            "Standard Value": "93.0",
            "Test Results": "93.28",
          },
          {
            Items: "Purity, w%,≥",
            "Standard Value": "98.0",
            "Test Results": "98.80",
          },
          {
            Items: "Colour Hazen , ≤",
            "Standard Value": "25",
            "Test Results": "15",
          },
          {
            Items: "Water Content",
            "Standard Value": "≤ 0.20",
            "Test Results": "0.08",
          },
          {
            Items: "Acidity (as acrylic acid)",
            "Standard Value": "0.20",
            "Test Results": "0.03",
          },
          {
            Items: "(MEHQ), mg/kg",
            "Standard Value": "250±50",
            "Test Results": "261",
          },
        ],
      },
    ],
  },
  {
    productid: 7,
    productname: "Acrylic Acid",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Transparent Liquid",
            "Test Results": "Transparent Liquid",
          },
          {
            Items: "Purity %",
            "Standard Value": "≥99.5",
            "Test Results": "99.71",
          },
          {
            Items: "Color (Pt-Co)",
            "Standard Value": "≤15",
            "Test Results": "8",
          },
          {
            Items: "Water Content %",
            "Standard Value": "≤0.1",
            "Test Results": "0.061",
          },
          {
            Items: "Acetic Acid %",
            "Standard Value": "≤0.1",
            "Test Results": "0.058",
          },
          {
            Items: "MEHQ ppm",
            "Standard Value": "200±20",
            "Test Results": "203.4",
          },
        ],
      },
    ],
  },
  {
    productid: 5,
    productname: "Crude Naphthalene (UAE)",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Greyish Pink / Solid In Flakes Form",
            "Test Results": "Ok",
          },
          {
            Items: "Crystallization Temperature",
            "Standard Value": "BS5962",
            "Test Results": "78.75",
          },
          {
            Items: "Purity GC",
            "Standard Value": "97.00",
            "Test Results": "",
          },
          {
            Items: "Moister ASTM D95",
            "Standard Value": "",
            "Test Results": "0.02",
          },
          {
            Items: "Nonvolatile Matter BS5962",
            "Standard Value": "",
            "Test Results": "0.002",
          },
          {
            Items: "Total Sulphur BS5962",
            "Standard Value": "",
            "Test Results": "0.03",
          },
          {
            Items: "Ash Content",
            "Standard Value": "-",
            "Test Results": "0.02",
          },
          {
            Items: "Thio Naphthalene GC",
            "Standard Value": "",
            "Test Results": "1.8",
          },
          {
            Items: "Methyl Naphthalene GC",
            "Standard Value": "",
            "Test Results": "0.04",
          },
        ],
      },
    ],
  },
  {
    productid: 4,
    productname: "Refined Naphthalene",
    variants: [
      {
        variantname: "Refined Pure Naphthalene (UAE)",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "White Flakes / Crystal Powder",
            "Test Results": "Ok",
          },
          {
            Items: "Crystallization Temperature (°C) - BS5962",
            "Standard Value": "-",
            "Test Results": "80.15",
          },
          {
            Items: "Purity By GC (%)",
            "Standard Value": "-",
            "Test Results": "99.99",
          },
          {
            Items: "Thio Naphthalene (%)",
            "Standard Value": "-",
            "Test Results": "0.002",
          },
          {
            Items: "Methyl Naphthalene (%)",
            "Standard Value": "-",
            "Test Results": "0.03",
          },
        ],
      },
      {
        variantname: "High Purity Naphthalene (Indonesia)",
        variantTable: [
          {
            Items: "Type / Colour - Visual",
            "Standard Value": "White",
            "Test Results": "White",
          },
          {
            Items: "Freezing Point °C – Test Tube (KS M1708)",
            "Standard Value": "79.50 min",
            "Test Results": "79.5",
          },
          {
            Items: "Purity By GC %",
            "Standard Value": "99.00 min",
            "Test Results": "99.0",
          },
        ],
      },
    ],
  },
  {
    productid: 10,
    productname: "Lactose Edible Grade",
    variants: [
      {
        variantname: "200 MESH",
        variantTable: [
          {
            PARAMETER: "Protein",
            "UNIT OF MEASURE": "%",
            METHOD: "Kjeidahi",
            RESULTS: "<0.3",
          },
          {
            PARAMETER: "Lactose Monohydrate",
            "UNIT OF MEASURE": "%",
            METHOD: "By difference",
            RESULTS: ">99.3",
          },
          {
            PARAMETER: "Free Moisture",
            "UNIT OF MEASURE": "%",
            METHOD: "Gravimetric",
            RESULTS: "<5",
          },
          {
            PARAMETER: "Ash",
            "UNIT OF MEASURE": "%",
            METHOD: "600°C/5hrs",
            RESULTS: "0.175",
          },
          {
            PARAMETER: "pH",
            "UNIT OF MEASURE": "5%TS",
            METHOD: "",
            RESULTS: "6.35",
          },
          {
            PARAMETER: "Sediment",
            "UNIT OF MEASURE": "/50g",
            METHOD: "Niro Atomiser",
            RESULTS: "A",
          },
          {
            PARAMETER: "Foreign Matter",
            "UNIT OF MEASURE": "/50g",
            METHOD: "Niro Atomiser",
            RESULTS: "Not detected",
          },
          {
            PARAMETER: "Aerobic Plate Count",
            "UNIT OF MEASURE": "Cfu/g",
            METHOD: "IDF 1008",
            RESULTS: "<10",
          },
          {
            PARAMETER: "Coliforms",
            "UNIT OF MEASURE": "/g",
            METHOD: "IDF170A/LST-MUG",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "E.Coli",
            "UNIT OF MEASURE": "/g",
            METHOD: "IDF170A/LST-MUG",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "Salmonella",
            "UNIT OF MEASURE": "/750g",
            METHOD: "Detection FOA",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "Yeast Count",
            "UNIT OF MEASURE": "Cfu/g",
            METHOD: "IDF-948",
            RESULTS: "<10",
          },
          {
            PARAMETER: "Mould Count",
            "UNIT OF MEASURE": "Cfu/g",
            METHOD: "IDF-948",
            RESULTS: "<10",
          },
          {
            PARAMETER: "Coag Pos Staph",
            "UNIT OF MEASURE": "/g",
            METHOD: "Detection IDFGDC",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "Enterobacteriaceae",
            "UNIT OF MEASURE": "Cfu/g",
            METHOD: "USP",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "Listeria Monocytogenes",
            "UNIT OF MEASURE": "/25g",
            METHOD: "Detection FDA",
            RESULTS: "Negative",
          },
          {
            PARAMETER: "Sulfite Reducing clostridia",
            "UNIT OF MEASURE": "/g",
            METHOD: "S112 886/g",
            RESULTS: "<10",
          },
        ],
      },
    ],
  },
  {
    productid: 2,
    productname: "Sodium Lignosulphonates",
    variants: [
      {
        variantname: "Technical Powder (Vyborg)",
        variantTable: [
          {
            Items: "Appearance",
            "Test Results": "Powder",
          },
          {
            Items: "Color",
            "Test Results": "From Light Brown To Dark Brown",
          },
          {
            Items: "Mass fraction of dry substances%",
            "Test Results": "96.0%",
          },
          {
            Items: "Mass fraction of basic substances, %",
            "Test Results": "70.7%",
          },
          {
            Items: "PH Value",
            "Test Results": "5.0%",
          },
          {
            Items: "Ash content, relating to mass of dry substances, %",
            "Test Results": "18.9%",
          },
          {
            Items: "Mass fraction of reducing substances",
            "Test Results": "7.5%",
          },
        ],
      },
      {
        variantname: "China",
        variantTable: [
          {
            Items: "Appearance",
            "Test Results": "Dark Brown Powder",
          },
          {
            Items: "PH Value",
            "Test Results": "7.8",
          },
          {
            Items: "Moisture",
            "Test Results": "4.2%",
          },
          {
            Items: "Lignin Content",
            "Test Results": "52%",
          },
          {
            Items: "Water Insoluble Matter",
            "Test Results": "1.80%",
          },
          {
            Items: "Dry Matter",
            "Test Results": "95%",
          },
          {
            Items: "Total Reducing Matter",
            "Test Results": "5.40%",
          },
        ],
      },
      {
        variantname: "Lativa",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Reddish Brown Powder",
            "Test Results": "Meets Requirement",
          },
          {
            Items: "Ligno Sulphonate Content",
            "Standard Value": "50-60%",
            "Test Results": "59%",
          },
          {
            Items: "PH Velue",
            "Standard Value": "7-9",
            "Test Results": "7.4",
          },
          {
            Items: "Water Reducing Rate",
            "Standard Value": "8-12%",
            "Test Results": "12.2%",
          },
          {
            Items: "Reduzate Content",
            "Standard Value": "< 8%",
            "Test Results": "7%",
          },
          {
            Items: "Water Insoluble",
            "Standard Value": "< 1.5%",
            "Test Results": "0.1%",
          },
          {
            Items: "Water Content",
            "Standard Value": "< 5%",
            "Test Results": "2%",
          },
          {
            Items: "120 Mesh Sieve Residue",
            "Standard Value": "≤ 4%",
            "Test Results": "3.1%",
          },
          {
            Items: "Inorganic Salt Content (NASO4)",
            "Standard Value": "< 10%",
            "Test Results": "7.1%",
          },
        ],
      },
      {
        variantname: "Russia",
        variantTable: [
          {
            Items: "Outward Appearance",
            "Test Results": "Powder",
          },
          {
            Items: "Color",
            "Test Results": "Light-Yellow",
          },
          {
            Items: "Active Substance %, Not Less",
            "Test Results": "58.0%",
          },
          {
            Items: "Mass Fraction Of Dry Substance,% Not Less",
            "Test Results": "92.0%",
          },
          {
            Items: "Hydrogen Ion Value – PH, Not Less",
            "Test Results": "4.6",
          },
          {
            Items:
              "Limit of durables of dried up samples by the stretching, Mpa not less",
            "Test Results": "0.6",
          },
        ],
      },
    ],
  },
  {
    productid: 8,
    productname: "Polycarboxylate Ether",
    variants: [
      {
        variantname: "PCE-50% Korea",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Golden Yellow to Redish Brown",
            "Test Results": "Matching",
          },
          {
            Items: "PH Value",
            "Standard Value": "5.6 – 6.0",
            "Test Results": "5.60",
          },
          {
            Items: "Specific Gravity",
            "Standard Value": "1.09 ± 0.02",
            "Test Results": "1.086",
          },
          {
            Items: "Solid Contents",
            "Standard Value": "Mini 50",
            "Test Results": "50.20",
          },
        ],
      },
    ],
  },
  {
    productid: 9,
    productname: "Quick Lime Powder",
    variants: [
      {
        variantname: "Quick Lime Powder",
        variantTable: [
          {
            Items: "Material",
            "Standard Value": "Quick Lime Powder",
            "Test Results": "Same",
          },
          {
            Items: "Specific Density (gm/cm³)",
            "Standard Value": "3.35",
            "Test Results": "3.35",
          },
          {
            Items: "CaO (%)",
            "Standard Value": ">90",
            "Test Results": ">90",
          },
          {
            Items: "Mesh",
            "Standard Value": "200",
            "Test Results": "170",
          },
          {
            Items: "Reactivity (min)",
            "Standard Value": "15",
            "Test Results": "48-52°C",
          },
        ],
      },
    ],
  },
  {
    productid: 13,
    productname: "SMF Powder",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "white free flowing powder",
            "Test Results": "white free flowing powder",
          },
          {
            Items: "PH (10% solution in water)",
            "Standard Value": "7 – 9",
            "Test Results": "8.5",
          },
          {
            Items: "Moisture cont 5 ± 2 %",
            "Standard Value": "5 ± 2 %",
            "Test Results": "5.24",
          },
          {
            Items: "Bulk Density",
            "Standard Value": "550 ± 200",
            "Test Results": "615",
          },
        ],
      },
    ],
  },
  {
    productid: 6,
    productname: "Sodium Gluconate",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "White Crystalline Powder",
            "Test Results": "White Crystalline Powder",
          },
          {
            Items: "Assay %",
            "Standard Value": "98.0 % min",
            "Test Results": "99.92%",
          },
          {
            Items: "Loss On Dry %",
            "Standard Value": "0.5 %",
            "Test Results": "0.04%",
          },
          {
            Items: "Reducing Substances %",
            "Standard Value": "0.5 % max",
            "Test Results": "0.30%",
          },
          {
            Items: "PH Value",
            "Standard Value": "6.5 – 7.8",
            "Test Results": "7.10",
          },
          {
            Items: "Sulfate %",
            "Standard Value": "0.02 max",
            "Test Results": "0.004",
          },
          {
            Items: "Chloride %",
            "Standard Value": "0.02 max",
            "Test Results": "0.003",
          },
        ],
      },
    ],
  },
  {
    productid: 1,
    productname: "Sodium Naphthalene Sulphonate Formaldehyde",
    variants: [
      {
        variantname: "SNF-A",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Brown Powder",
            "Test Results": "Meets Requirement",
          },
          {
            Items: "PH Value",
            "Standard Value": "7 – 9",
            "Test Results": "8",
          },
          {
            Items: "Solid Contents (%)",
            "Standard Value": "94% min",
            "Test Results": "95.2%",
          },
          {
            Items: "Na₂SO₄ Content (%)",
            "Standard Value": "5% max",
            "Test Results": "3.5%",
          },
        ],
      },
      {
        variantname: "SNF-B",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Yellow Brown Powder",
            "Test Results": "Meets Requirement",
          },
          {
            Items: "PH Value",
            "Standard Value": "7 – 9",
            "Test Results": "7.6",
          },
          {
            Items: "Solid Contents (%)",
            "Standard Value": "92% min",
            "Test Results": "95%",
          },
          {
            Items: "Content Of Cl (ppm)",
            "Standard Value": "200 ppm",
            "Test Results": "110 ppm",
          },
          {
            Items: "Na₂SO₄ Content (%)",
            "Standard Value": "10% max",
            "Test Results": "9.60%",
          },
        ],
      },
      {
        variantname: "SNF-C 1",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Yellow Brown Powder",
            "Test Results": "Meets Requirement",
          },
          {
            Items: "PH Value",
            "Standard Value": "7 – 9",
            "Test Results": "8.25",
          },
          {
            Items: "Solid Contents (%)",
            "Standard Value": "92% min",
            "Test Results": "93.10%",
          },
          {
            Items: "Na₂SO₄ Content (%)",
            "Standard Value": "18% max",
            "Test Results": "17.25%",
          },
          {
            Items: "Origin",
            "Standard Value": "",
            "Test Results": "South Korea",
          },
        ],
      },
      {
        variantname: "SNF-C 2",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Yellow Brown Powder",
            "Test Results": "Meets Requirement",
          },
          {
            Items: "PH Value",
            "Standard Value": "7 – 9",
            "Test Results": "8.25",
          },
          {
            Items: "Solid Contents (%)",
            "Standard Value": "92% min",
            "Test Results": "93.10%",
          },
          {
            Items: "Na₂SO₄ Content (%)",
            "Standard Value": "25% max",
            "Test Results": "23%",
          },
          {
            Items: "Origin",
            "Standard Value": "",
            "Test Results": "South Korea",
          },
        ],
      },

      {
        variantname: "SNF-LIQUID-43%",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "Brown Colour Liquid",
            "Test Results": "Brown Colour Liquid",
          },
          {
            Items: "PH Of 10% Solution",
            "Standard Value": "7 – 8.5",
            "Test Results": "8.45",
          },
          {
            Items: "Solid Content %W/W",
            "Standard Value": "45 ± 3",
            "Test Results": "1.240",
          },
          {
            Items: "Specific Gravity @30°C",
            "Standard Value": "1.1 – 1.250",
            "Test Results": "1.240",
          },
          {
            Items: "Salt Content As Na₂SO₄",
            "Standard Value": "< 5%",
            "Test Results": "4.85",
          },
          {
            Items: "Free Formaldehyde",
            "Standard Value": "Less Than 150 ppm",
            "Test Results": "N.D",
          },
          {
            Items: "Filter Test",
            "Standard Value": "Filter Paper Should Be Clear, No Staining",
            "Test Results": "OK",
          },
          {
            Items: "Viscosity @30°C By B4 Cup",
            "Standard Value": "20 ± 5",
            "Test Results": "21",
          },
          {
            Items: "Quinoline Content",
            "Standard Value": "150 PPM",
            "Test Results": "N.D",
          },
        ],
      },
    ],
  },
  {
    productid: 12,
    productname: "Sodium Tripolyphosphate",
    variants: [
      {
        variantname: "Standard",
        variantTable: [
          {
            Items: "Color & Appearance",
            "Standard Value":
              "Free flowing, non-lumpy, fine smooth white powder, free from visible impurities",
            "Test Results":
              "Free flowing, non-lumpy, fine smooth white powder, free from visible impurities & grits",
            "Analitical Method": "",
          },
          {
            Items: "P₂O₅ content",
            "Standard Value": "56.0 minimum - 57.0 maximum",
            "Test Results": "56.2",
            "Analitical Method": "ISO 3357",
          },
          {
            Items: "Residue on a 500 micron sieve, %",
            "Standard Value": "0.3 maximum",
            "Test Results": "0.3",
            "Analitical Method": "",
          },
          {
            Items: "Residue on a 150 micron sieve, %",
            "Standard Value": "15 maximum",
            "Test Results": "15",
            "Analitical Method": "",
          },
          {
            Items: "Residue on a 75 micron sieve, %",
            "Standard Value": "50 maximum",
            "Test Results": "50",
            "Analitical Method": "",
          },
          {
            Items: "Bulk Density, kg/m³",
            "Standard Value": "700 minimum - 1100 maximum",
            "Test Results": "1100",
            "Analitical Method": "",
          },
          {
            Items: "Whiteness (Reflectance R460) %",
            "Standard Value": "80 minimum",
            "Test Results": "84",
            "Analitical Method": "",
          },
          {
            Items:
              "Sodium Tripolyphosphate (Na₅P₃O₁₀) content (as % of total phosphate)",
            "Standard Value": "90 minimum",
            "Test Results": "93",
            "Analitical Method": "ISO 3000",
          },
          {
            Items: "Phase (Form)",
            "Standard Value": "16 minimum - 28 maximum",
            "Test Results": "24",
            "Analitical Method": "UMA 5681",
          },
          {
            Items: "Cobalt content, as Co, mg/kg",
            "Standard Value": "5 maximum",
            "Test Results": "5",
            "Analitical Method": "",
          },
          {
            Items: "Chromium content, as Cr, mg/kg",
            "Standard Value": "5 maximum",
            "Test Results": "5",
            "Analitical Method": "",
          },
          {
            Items: "Nickel content, as Ni, mg/kg",
            "Standard Value": "5 maximum",
            "Test Results": "5",
            "Analitical Method": "",
          },
          {
            Items: "Iron content as Fe, mg/kg",
            "Standard Value": "260 maximum",
            "Test Results": "250",
            "Analitical Method": "",
          },
          {
            Items: "PH (1.0% in distilled water @ 25°C)",
            "Standard Value": "9.4 minimum – 10.2 maximum",
            "Test Results": "9.8",
            "Analitical Method": "",
          },
          {
            Items: "Water Insoluble",
            "Standard Value": "0.10 maximum",
            "Test Results": "0.10",
            "Analitical Method": "",
          },
        ],
      },
    ],
  },
  {
    productid: 3,
    productname: "HPEG 2400",
    variants: [
      {
        variantname: "Polyethylene Glycol",
        variantTable: [
          {
            Items: "Appearance",
            "Standard Value": "White",
            "Test Results": "OK",
          },
          {
            Items: "Molecular Weight (LC Method)",
            "Standard Value": "2200-2600",
            "Test Results": "2398",
          },
          {
            Items: "Hydroxyl Value (ASTM D 4252, mg KOH/g)",
            "Standard Value": "21.6-25.5",
            "Test Results": "22.60",
          },
          {
            Items: "pH (ISO 4316)",
            "Standard Value": "5.5-7.5",
            "Test Results": "6.90",
          },
          {
            Items: "Water Contents (ASTM D 1744, wt%)",
            "Standard Value": "0.5 max",
            "Test Results": "0.14",
          },
        ],
      },
    ],
  },
];

export default productsUseCase;
