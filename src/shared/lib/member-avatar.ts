export function getMemberAvatarUrl(memberId: string): string {
  return `https://picsum.photos/seed/macching-${encodeURIComponent(memberId)}/400/520`;
}
