export function generateMailtoLink(email: string, subject: string): string {
  const params = new URLSearchParams({ subject });
  return `mailto:${email}?${params.toString()}`;
}
