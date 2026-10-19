import { SolutionCategory } from "@/lib/types";

export const solutionsData: SolutionCategory[] = [
  {
    id: "residential-water-purification",
    title: "Residential Water Purification",
    shortDesc:
      "Safe, crystal-clear drinking water and whole-house filtration tailored to borewell, open well, and municipal connections.",
    fullDesc:
      "Residential water across Kerala often presents varying challenges, from high TDS in coastal or rocky zones to bacterial contamination in shallow open wells and reddish iron stains in borewells. Amra Water Solution provides customized residential solutions — from compact under-sink and wall-mounted RO/UV purifiers to whole-villa central filtration units that protect your family's health and extend plumbing lifespan.",
    image: "/images/solutions/residential.jpg",
    targetApplications: [
      "Independent Villas & Bungalows",
      "Gated Communities & Apartments",
      "Farmhouses & Vacation Homes",
      "Domestic Kitchens & Dining Spaces",
    ],
    keyChallenges: [
      "High Total Dissolved Solids (TDS) causing bitter taste and heavy mineral ingestion",
      "Coliform bacteria and microbial pathogens in shallow open wells",
      "Turbid seasonal runoff and muddy rainwater intrusion",
      "Chlorine odor and chemical residues in municipal piped water",
    ],
    treatmentMethods: [
      "Thin-film composite (TFC) reverse osmosis for deep molecular demineralization",
      "Germicidal ultraviolet (UV) sterilization chamber for pathogen eradication",
      "Activated carbon filtration for chemical adsorption and odor elimination",
      "Sediment depth filtration for suspended particulate arrest",
    ],
    recommendedSystems: [
      "Domestic RO Purifier with Mineral Controller",
      "Wall-Mounted UV Water Purifier",
      "Whole-House Central Sediment & Carbon Filter",
    ],
  },
  {
    id: "commercial-ro-water-treatment",
    title: "Commercial RO Water Treatment",
    shortDesc:
      "Continuous high-yield potable water systems for restaurants, hotels, hospitals, offices, and institutions.",
    fullDesc:
      "Commercial enterprises cannot afford unexpected downtime or substandard water quality. Our commercial RO systems are engineered with industrial-grade components, providing reliable outputs from 250 to 2,000+ litres per hour. Whether you operate a bustling hotel kitchen, a busy diagnostic laboratory, or a multi-storey corporate office, we design skid-mounted systems that satisfy both regulatory drinking standards and daily consumption demands.",
    image: "/images/solutions/commercial.jpg",
    targetApplications: [
      "Hotels, Cafes & Bakeries",
      "Hospitals, Clinics & Diagnostic Labs",
      "Colleges, Universities & Schools",
      "Corporate Tech Parks & Government Offices",
    ],
    keyChallenges: [
      "Fluctuating municipal and tanker water supplies requiring consistent stabilization",
      "Heavy daily peak demand requiring high recovery rates and rapid tank refill",
      "Strict food safety and hygienic drinking compliance requirements",
      "Preventing equipment scale in commercial steam ovens and coffee machines",
    ],
    treatmentMethods: [
      "Dual media sand & activated carbon filtration skids",
      "Automatic anti-scalant dosing to safeguard commercial RO membranes",
      "Vertical multi-stage stainless steel booster pumps",
      "Post-treatment UV sterilization and inline TDS monitoring",
    ],
    recommendedSystems: [
      "250 LPH to 1,000 LPH Skid-Mounted Commercial RO Plants",
      "Commercial Water Coolers with Inbuilt Purification",
      "Centralized Water Softener for Laundry & Kitchen Boilers",
    ],
  },
  {
    id: "industrial-ro-plants",
    title: "Industrial RO Water Treatment Plants",
    shortDesc:
      "Heavy-duty demineralization and process water treatment for manufacturing, boilers, food processing, and pharmaceuticals.",
    fullDesc:
      "Industrial operations require precision water chemistry. High hardness, silica, sulfates, and conductivity can destroy expensive boilers, foul cooling towers, and compromise product consistency. Amra Water Solution engineers multi-stage industrial RO plants with capacities scaling up to 50,000+ LPH. We incorporate comprehensive pre-treatment, chemical dosing skids, and automated CIP (Clean-In-Place) flushing modules designed specifically for heavy industrial duty cycles.",
    image: "/images/solutions/industrial.jpg",
    targetApplications: [
      "Manufacturing & Packaging Facilities",
      "Boiler Feed & Cooling Tower Utility Systems",
      "Food & Beverage Processing Facilities",
      "Pharmaceutical & Chemical Industries",
    ],
    keyChallenges: [
      "Strict conductivity and silica limits for high-pressure boiler feed",
      "High osmotic pressure and membrane fouling from complex raw water chemistry",
      "Managing high water recovery while preventing premature membrane scaling",
      "Need for continuous 24/7 automated monitoring and alarm telemetry",
    ],
    treatmentMethods: [
      "Multi-stage high-rejection 8040 brackish water membrane configuration",
      "Proportional dosing of anti-scalant, coagulant, and pH correctors",
      "Ultrafiltration (UF) pre-treatment for SDI (Silt Density Index) reduction",
      "PLC automation with touch HMI, digital flow transmitters, and safety cut-offs",
    ],
    recommendedSystems: [
      "Multi-Stage Industrial RO Treatment Plants (3,000 – 50,000 LPH)",
      "Automated Clean-In-Place (CIP) Membrane Sanitization Skids",
      "Integrated UF + RO Demineralization Units",
    ],
  },
  {
    id: "water-softening-solutions",
    title: "Water Softening & Scale Prevention",
    shortDesc:
      "Ion-exchange technology to permanently eliminate calcium and magnesium hardness, scale buildup, and boiler fouling.",
    fullDesc:
      "Hard water containing high concentrations of calcium and magnesium is a silent destroyer of plumbing infrastructure, bathroom brassware, solar water heaters, and industrial heat exchangers. Our automatic ion-exchange water softeners swap hard ions with soluble sodium ions, eliminating stubborn chalky residues, lowering detergent expenses by up to 50%, and preventing catastrophic scale-related boiler burnouts.",
    image: "/images/solutions/softening.jpg",
    targetApplications: [
      "Residential Apartments & Independent Villas",
      "Laundromats, Hotels & Commercial Kitchens",
      "Industrial Boilers & Cooling Towers",
      "Automotive Service Centers & Car Washes",
    ],
    keyChallenges: [
      "White crusty limescale deposition inside plumbing pipes, geysers, and fittings",
      "Dull laundry, rough hair, and dry skin caused by mineral precipitation",
      "Thermal efficiency loss in heating elements, causing elevated power bills",
      "Frequent clogging of shower heads, faucets, and precision machinery",
    ],
    treatmentMethods: [
      "Strong Acid Cation (SAC) premium resin ion-exchange beds",
      "Automated digital multiport valve with volumetric or chronological regeneration",
      "High-density polyethylene (HDPE) brine saturation and salt suction system",
      "Automatic backwash and brine displacement cycles with zero operator intervention",
    ],
    recommendedSystems: [
      "Automatic Residential Whole-House Softener",
      "Duplex Continuous Softening Plant for Commercial & Industrial Boilers",
      "FRP Hardness Reduction Modules with Digital Valves",
    ],
  },
  {
    id: "iron-removal-filtration",
    title: "Iron & Manganese Removal Filtration",
    shortDesc:
      "Catalytic oxidation media filters to eliminate red-yellow turbidity, metallic odors, and stained plumbing fixtures.",
    fullDesc:
      "Many groundwater borewells in Kerala suffer from dissolved ferrous bicarbonate. When exposed to air in overhead tanks, this iron oxidizes into insoluble ferric hydroxide, creating reddish sludge, discolored clothes, and foul metallic tastes. Our catalytic oxidation systems use media like Manganese Greensand, Birm, and specialized catalytic granules to convert and filter iron down to certified drinking standards.",
    image: "/images/products/iron-filter.jpg",
    targetApplications: [
      "Borewells with yellow, reddish, or brown water discoloration",
      "Residences with persistent tile and sanitaryware stains",
      "Hotels, resorts, and commercial properties with borewell dependence",
      "Pre-filtration before RO membranes and softener resin beds",
    ],
    keyChallenges: [
      "Severe staining of white porcelain, tiles, and laundry fabrics",
      "Unpleasant metallic iron taste and sulfurous odours",
      "Rapid fouling and iron-fouling destruction of sensitive RO membranes",
      "Sediment accumulation inside overhead distribution tanks and pipes",
    ],
    treatmentMethods: [
      "Catalytic oxidation converting dissolved Fe²⁺ into filterable Fe³⁺ precipitate",
      "Multi-grade quartz support bed for high-efficiency solids retention",
      "High-velocity counter-flow backwashing to purge trapped oxidized iron flocs",
      "Optional aeration or chlorine dosing for raw water with elevated iron (>5 ppm)",
    ],
    recommendedSystems: [
      "Amra Catalytic Iron Removal Filter (1,000 to 15,000 LPH)",
      "Auto-Backwash FRP Filtration Units with Multiport Valves",
      "Integrated Aeration + Catalytic Media Filtration Skids",
    ],
  },
  {
    id: "stp-etp-plants",
    title: "STP & ETP Wastewater Treatment Plants",
    shortDesc:
      "Sewage and Effluent Treatment Plants ensuring Kerala Pollution Control Board (KSPCB) compliance, odor control, and eco-friendly water reuse.",
    fullDesc:
      "As highlighted in our company portfolio, Amra Water Solution designs, installs, and commissions Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP). We help residential societies, commercial complexes, resorts, and industrial manufacturers treat wastewater effectively, control odors, meet stringent statutory discharge norms, and recycle treated water for toilet flushing and landscape irrigation.",
    image: "/images/solutions/stp-plant.jpg",
    targetApplications: [
      "Apartment Complexes & Gated Townships (STP)",
      "Hotels, Resorts & Convention Centers (STP)",
      "Manufacturing Units, Food Processing & Chemical Units (ETP)",
      "Hospitals & Healthcare Facilities (Bio-medical ETP/STP)",
    ],
    keyChallenges: [
      "Meeting strict Kerala State Pollution Control Board (KSPCB) discharge standards",
      "Eliminating noxious odors and maintaining neighbor-friendly operations",
      "Optimizing footprint in urban areas with constrained basements or open land",
      "Recycling water safely to reduce reliance on expensive freshwater tankers",
    ],
    treatmentMethods: [
      "Moving Bed Biofilm Reactor (MBBR) & Membrane Bioreactor (MBR) processes",
      "Physical & chemical coagulation, flocculation, and primary settling (ETP)",
      "Tertiary treatment with pressure sand, activated carbon, and ozonation/chlorination",
      "Sludge dewatering using filter presses and centrifuge decanters",
    ],
    recommendedSystems: [
      "Prefabricated & Civil Sewage Treatment Plants (STP)",
      "Industrial Effluent Treatment Plants (ETP) with Chemical Dosing",
      "Tertiary Water Recycling Systems for Flushing & Gardening",
    ],
  },
  {
    id: "water-testing-consultancy",
    title: "Water Testing & PCB Consultancy Work",
    shortDesc:
      "Comprehensive laboratory water testing and statutory Pollution Control Board (PCB) documentation, consent, and compliance services.",
    fullDesc:
      "Proper water treatment begins with knowing your water quality. Our dedicated water testing services test for pH, Total Dissolved Solids (TDS), Total Hardness, Iron, Chlorides, Nitrates, Turbidity, and Coliform bacteria. Furthermore, our seasoned environmental consultants assist businesses with Kerala State Pollution Control Board (KSPCB) Consent to Establish (CTE), Consent to Operate (CTO), periodic returns, and environmental auditing.",
    image: "/images/solutions/water-testing.jpg",
    targetApplications: [
      "New Borewell & Well Owners seeking baseline water quality",
      "Industrial & Commercial Units requiring KSPCB Consent to Operate",
      "Hotels, Hospitals & Food Businesses needing regulatory compliance",
      "Property Developers & Educational Institutions",
    ],
    keyChallenges: [
      "Selecting water treatment equipment blindly without knowing water parameters",
      "Navigating complex Pollution Control Board documentation and statutory norms",
      "Seasonal changes in groundwater chemistry causing sudden system failures",
      "Preventing heavy fines or operating notices from regulatory authorities",
    ],
    treatmentMethods: [
      "Multi-parameter physicochemical laboratory water testing",
      "Biological and microbiological pathogen culture analysis",
      "Environmental impact assessment and equipment sizing calculation",
      "Preparation of KSPCB compliance filings, schematic drawings, and testing audits",
    ],
    recommendedSystems: [
      "Standard & Comprehensive Water Quality Testing Packages",
      "PCB Consultancy & Environmental Consent Processing",
      "Annual Water Monitoring & Testing Retainers",
    ],
  },
  {
    id: "amc-service-support",
    title: "Sales, Service & Annual Maintenance Contracts (AMC)",
    shortDesc:
      "Prompt onsite service, preventive maintenance, genuine spares, and dependable Annual Maintenance Contracts across Kerala.",
    fullDesc:
      "A water treatment system is an essential investment that requires regular care. Amra Water Solution provides complete lifecycle support — from original equipment sales and expert installation to scheduled filter changes, membrane servicing, and round-the-year Annual Maintenance Contracts (AMC). With branch presence in Kottayam (Vaikom) and Kozhikode, our skilled technicians ensure your pure water never stops flowing.",
    image: "/images/solutions/pcb-consulting.jpg",
    targetApplications: [
      "Domestic Water Purifier Owners",
      "Commercial RO Plant Operators",
      "Industrial Facility Maintenance Teams",
      "Apartment Owners Associations (AOA) managing STPs and central filters",
    ],
    keyChallenges: [
      "Preventing sudden breakdown of drinking water purifiers",
      "Membrane fouling due to neglected cartridge replacements",
      "Finding genuine spares and reliable technical technicians",
      "Emergency service response during business operations",
    ],
    treatmentMethods: [
      "Scheduled preventive maintenance checkups and TDS calibration",
      "Replacement of spent filter media (carbon, sand, resin, membranes)",
      "Chemical cleaning and de-scaling of RO membrane arrays",
      "Fast-response emergency breakdown support",
    ],
    recommendedSystems: [
      "Comprehensive & Non-Comprehensive AMC Packages for RO Purifiers",
      "Commercial RO & Softener Monthly Maintenance Contracts",
      "STP/ETP Plant Operation & Maintenance (O&M) Contracts",
    ],
  },
];
