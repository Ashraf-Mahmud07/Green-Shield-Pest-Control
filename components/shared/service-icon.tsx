import {
  Bug,
  Rat,
  Shield,
  ShieldCheck,
  Bird,
  Squirrel,
  Worm,
  Fish,
  Calendar,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the string icon keys stored in data files to Lucide components.
 * Pests without a dedicated Lucide glyph reuse the closest match.
 */
const iconMap: Record<string, LucideIcon> = {
  bug: Bug,
  rat: Rat,
  shield: Shield,
  "shield-check": ShieldCheck,
  bird: Bird,
  squirrel: Squirrel,
  worm: Worm,
  fish: Fish,
  calendar: Calendar,
  mosquito: Bug,
  bedbug: Bug,
  spider: Bug,
  fly: Bug,
  flea: Bug,
  tick: Bug,
  wasp: Bug,
  bee: Bug,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Bug;
  return <Icon className={className} aria-hidden />;
}
