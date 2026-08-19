const paths: Record<string, string[]> = {
  video: ["M3 6h18v12H3z", "m3 10 4-4M9 10l4-4M15 10l4-4"],
  link: [
    "M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1 1",
    "M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1-1",
  ],
  megaphone: ["M3 11v2a1 1 0 0 0 1 1h3l7 4V6L7 10H4a1 1 0 0 0-1 1Z", "M18 8a5 5 0 0 1 0 8"],
  bolt: ["M13 2 4 14h7l-1 8 9-12h-7l1-8Z"],
  mail: ["M3 6h18v12H3z", "m3 7 9 6 9-6"],
  file: ["M14 3H6v18h12V7l-4-4Z", "M14 3v4h4", "m10 12 5 3-5 3v-6Z"],
};

export function OfferingIcon({ name }: { name: string }) {
  const shapes = paths[name];
  if (!shapes) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className="h-5 w-5"
    >
      {shapes.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

// One per resource. Drawn in the same square, single-weight style as the
// offering icons above so the set reads as one family.
const resourcePaths: Record<string, string[]> = {
  layers: ["m12 3 9 5-9 5-9-5 9-5Z", "m3 12 9 5 9-5", "m3 16 9 5 9-5"],
  terminal: ["M3 4h18v16H3z", "m7 9 3 3-3 3", "M13 15h4"],
  inbox: ["M3 6h18v12H3z", "m3 7 9 6 9-6"],
  checklist: [
    "M8 3h8v3H8z",
    "M8 4.5H5V21h14V4.5h-3",
    "m8 12 2 2 3.5-3.5",
    "M8 17h8",
  ],
};

export function ResourceIcon({ name }: { name: string }) {
  const shapes = resourcePaths[name];
  if (!shapes) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className="h-6 w-6"
    >
      {shapes.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
