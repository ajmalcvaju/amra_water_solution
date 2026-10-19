export const siteConfig = {
  name: "Amra Water Solution",
  legalName: "Amra Water Solution",
  tagline: "Pure Solutions. Healthy Future.",
  secondaryTagline: "Clean Water Brighter Tomorrow",
  description:
    "Leading water treatment & purification solutions in Kerala. Specializing in Domestic & Commercial RO, Industrial Treatment Plants, STP, ETP, Water Softeners, Water Testing, and PCB Consultancy.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://amrawatersolution.com",
  contactPerson: "Nejumal",
  phones: {
    primary: "+91 8075129422",
    primaryRaw: "8075129422",
    office: "+91 9072919041",
    officeRaw: "9072919041",
  },
  whatsapp: {
    number: "919072919041", // International format without + or spaces
    defaultMessage:
      "Hello Amra Water Solution, I would like to enquire about your water treatment and purification solutions. Please share more details.",
  },
  email: "contact@amrawatersolution.com",
  branches: [
    {
      name: "Head Office & Service Center",
      city: "Vaikom, Kottayam",
      address:
        "Amar water Solution building, 125/56, Vadakkenada, Udhayanapuram, near Chakkara Bakary, Vaikom, Vadakkemuri, Keralam 686143",
      phone: "+91 8075129422 / +91 9072919041",
      isPrimary: true,
      serviceRadius: "Kottayam, Ernakulam, Alappuzha & Central Kerala",
    },
    {
      name: "North Kerala Branch",
      city: "Kozhikode",
      address: "Kozhikode Branch Office, Kerala",
      phone: "+91 8075129422",
      isPrimary: false,
      serviceRadius: "Kozhikode, Malappuram, Kannur & North Kerala",
    },
  ],
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM | Sunday: Support Available",
  affiliation: "Proud Member of BNI (Business Network International)",
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.895198392212!2d76.3952321!3d9.7749348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0879f58eeac2c3%3A0xa4bc462f1f04d6c!2sAmra%20Water%20Solution%20-%20Water%20treatment%20plant%20Kottayam%2C%20Water%20purifier%2C%20Water%20Testing%2C%20STP%2FETP%2FRO!5e0!3m2!1sen!2sin!4v1792403979495!5m2!1sen!2sin",
  googleMapsLink: "https://maps.google.com/?cid=741897368686611820",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  keywords: [
    "Water Purifier Kerala",
    "RO Water Purifier Vaikom Kottayam",
    "Commercial RO Plant Kerala",
    "Industrial RO Water Treatment Plant",
    "STP Sewage Treatment Plant Kerala",
    "ETP Effluent Treatment Plant Kerala",
    "Water Softener System Kottayam",
    "Iron Removal Filter Kerala",
    "Water Testing Laboratory Kottayam Kozhikode",
    "PCB Consultancy Work Kerala",
    "Annual Maintenance Contract Water Purifier AMC",
  ],
};
