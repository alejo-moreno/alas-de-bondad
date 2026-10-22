export function telHref(phone: string): string | undefined {
  if (!phone || phone.startsWith("[")) return undefined;
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned ? `tel:${cleaned}` : undefined;
}

export function whatsappUrl(number: string, message: string): string {
  const digits = number.replace(/\D/g, "");
  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${query}`;
}

export function isPlaceholder(value: string): boolean {
  return value.length === 0 || value.startsWith("[");
}
