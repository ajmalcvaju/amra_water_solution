import { siteConfig } from "./siteConfig";

/**
 * Builds a direct WhatsApp chat URL with encoded pre-filled text.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = siteConfig.whatsapp.number.replace(/\D/g, "");
  const text = customMessage || siteConfig.whatsapp.defaultMessage;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Builds a WhatsApp URL specifically asking about a product.
 * Format specified in master prompt:
 * "Hello Amra Water Solution, I am interested in the [Product Name]. Please share more details and pricing."
 */
export function getProductWhatsAppUrl(productName: string): string {
  const message = `Hello Amra Water Solution, I am interested in the ${productName}. Please share more details and pricing.`;
  return getWhatsAppUrl(message);
}

/**
 * Builds a WhatsApp URL for solutions enquiries.
 */
export function getSolutionWhatsAppUrl(solutionTitle: string): string {
  const message = `Hello Amra Water Solution, I am seeking a solution for ${solutionTitle}. Please guide me on feasibility, system sizing, and water testing.`;
  return getWhatsAppUrl(message);
}

/**
 * Builds a click-to-call tel: URI.
 */
export function getCallUrl(useOffice = false): string {
  const phone = useOffice ? siteConfig.phones.officeRaw : siteConfig.phones.primaryRaw;
  return `tel:+91${phone}`;
}

/**
 * Builds a mailto link with pre-filled subject and body.
 */
export function getMailtoUrl(subject?: string, body?: string): string {
  const sub = subject || `Enquiry from ${siteConfig.name} Website`;
  const b = body || "Hello Amra Water Solution Team,\n\nI would like to enquire about your services.";
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(b)}`;
}
