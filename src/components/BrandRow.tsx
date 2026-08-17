import Image from "next/image";

type Brand = { name: string; logo: string | null };

export function BrandRow({ brands }: { brands: readonly Brand[] }) {
  if (brands.length === 0) {
    return (
      <p className="mt-6 font-mono text-sm text-muted">
        Open to first partners. Your logo could go here.
      </p>
    );
  }

  return (
    <ul className="mt-6 flex flex-wrap items-start gap-4">
      {brands.map((brand) => (
        <li key={brand.name}>
          {brand.logo ? (
            // Both logos ship with light backgrounds baked in, so they sit on a
            // light tile rather than floating on the near-black page.
            <figure>
              <div className="flex h-20 w-36 items-center justify-center bg-white p-3">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={144}
                  height={80}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <figcaption className="mt-2 text-center font-mono text-xs text-muted">
                {brand.name}
              </figcaption>
            </figure>
          ) : (
            <span className="inline-flex h-20 items-center border border-line px-5 font-mono text-sm text-muted">
              {brand.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
