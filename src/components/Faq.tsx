"use client";

import { useId, useState } from "react";

type Item = { q: string; a: string };

export function Faq({ items }: { items: readonly Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.q} className="border-b border-line">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-mono text-sm text-fg transition-colors hover:text-accent"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="text-accent">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="max-w-[65ch] pb-5 text-sm leading-relaxed text-muted"
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
