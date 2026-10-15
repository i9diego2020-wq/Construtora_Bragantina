export const WHATSAPP_PHONE = '5511965939300';
export const WHATSAPP_DISPLAY = '(11) 96593-9300';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean | void;
  }
}

export function reportConversion(): void {
  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
    try {
      window.gtag_report_conversion();
    } catch {
      // ignore
    }
  }
}

export function openWhatsApp(message: string): void {
  reportConversion();
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
