export interface ClientLogo {
  id: string;
  name: string;
  category: string;
  location?: string;
  logo: string;
}

export const prestigiousClients: ClientLogo[] = [
  {
    id: "lulu",
    name: "LuLu Hypermarket",
    category: "Retail & Commercial",
    location: "Kerala",
    logo: "/images/clients/lulu-hypermarket.png",
  },
  {
    id: "confident-bellatrix",
    name: "Confident Bellatrix 3",
    category: "Luxury Apartments",
    location: "Thrippunithura, Kochi",
    logo: "/images/clients/confident-bellatrix.png",
  },
  {
    id: "mikas",
    name: "Mikas Convention Centre",
    category: "Hospitality & Events",
    location: "Kayamkulam",
    logo: "/images/clients/mikas-convention-centre.png",
  },
  {
    id: "555-cafe",
    name: "555 Cafe",
    category: "Dining & Hospitality",
    location: "Kerala",
    logo: "/images/clients/555-cafe.jpg",
  },
  {
    id: "ghost-6-garage",
    name: "Ghost 6 Garage",
    category: "Automotive Facility",
    location: "Vaikom",
    logo: "/images/clients/ghost-6-garage.png",
  },
  {
    id: "mkm-varavoor",
    name: "MKM Varavoor",
    category: "Institutional & Community",
    location: "Varavoor",
    logo: "/images/clients/mkm-varavoor.png",
  },
  {
    id: "aqua-green",
    name: "Aqua Green",
    category: "Commercial Project",
    location: "Kerala",
    logo: "/images/clients/aqua-green.png",
  },
];
