export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Contact Us", href: "/contact" },
];

export const productCategoriesNav = [
  { label: "Domestic RO Purifiers", href: "/products?category=Domestic+Purification" },
  { label: "Commercial RO Plants", href: "/products?category=Commercial+RO" },
  { label: "Industrial RO Plants", href: "/products?category=Industrial+Treatment" },
  { label: "Water Softeners", href: "/products?category=Water+Softening" },
  { label: "Iron & Media Filters", href: "/products?category=Filtration" },
  { label: "All Water Solutions", href: "/products" },
];

export const solutionsNav = [
  { label: "Residential Water Purification", href: "/solutions#residential-water-purification" },
  { label: "Commercial RO Systems", href: "/solutions#commercial-ro-water-treatment" },
  { label: "Industrial RO Plants", href: "/solutions#industrial-ro-plants" },
  { label: "Water Softening & Scale Prevention", href: "/solutions#water-softening-solutions" },
  { label: "STP & ETP Wastewater Plants", href: "/solutions#stp-etp-plants" },
  { label: "Water Testing & PCB Consultancy", href: "/solutions#water-testing-consultancy" },
];
