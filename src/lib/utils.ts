export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneForTel(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export const PHONE_NUMBER = "(214) 751-8014";
export const PHONE_TEL = "tel:+12147518014";
export const EMAIL = "info@planoconcretesolutions.com";
export const SITE_URL = "https://planoconcretesolutions.com";
export const COMPANY_NAME = "Plano Concrete Solutions";
