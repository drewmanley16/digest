import Image from "next/image";
import { profile } from "@/lib/site";

/**
 * Renders the headshot once profile.avatarSrc points at a real file.
 * Until then it falls back to a monogram tile so the layout is already correct.
 */
export function Avatar({ size, className = "" }: { size: number; className?: string }) {
  const base = `border border-line bg-bg ${className}`;

  if (profile.avatarSrc) {
    return (
      <Image
        src={profile.avatarSrc}
        alt={profile.name}
        width={size}
        height={size}
        priority={size > 64}
        className={`${base} object-cover`}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      style={{ width: size, height: size }}
      className={`${base} flex items-center justify-center font-mono text-muted`}
    >
      <span style={{ fontSize: Math.round(size * 0.38) }}>
        {profile.monogram}
      </span>
    </div>
  );
}
