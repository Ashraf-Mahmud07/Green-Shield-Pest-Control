/**
 * Inline SVG brand icons (lucide-react no longer ships brand glyphs).
 * Each accepts a className for sizing/coloring like a Lucide icon.
 */

type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7h2.4l.5-3h-2.9V9.1c0-.9.3-1.6 1.6-1.6H16.5V4.8c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H8v3h2.4v7h3.1Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.6 3h3l-6.6 7.6L21.8 21h-6.1l-4.8-6.3L5.4 21h-3l7.1-8.1L2.2 3h6.3l4.3 5.7L17.6 3Zm-1.1 16.2h1.7L7.6 4.7H5.8l10.7 14.5Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26.5 26.5 0 0 0 2 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8ZM10 15.2V8.8L15.2 12 10 15.2Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M6.5 8.8H3.4V21h3.1V8.8ZM4.9 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM20.6 14.2c0-3.1-1.7-4.6-4-4.6a3.4 3.4 0 0 0-3 1.7V8.8h-3.1V21h3.1v-6.4c0-1.4.7-2.3 1.9-2.3 1.2 0 1.9.8 1.9 2.3V21h3.2v-6.8Z" />
    </svg>
  );
}
