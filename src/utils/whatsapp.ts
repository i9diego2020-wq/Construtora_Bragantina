export const WHATSAPP_PHONE = '5511965939300';
export const WHATSAPP_DISPLAY = '(11) 96593-9300';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}
