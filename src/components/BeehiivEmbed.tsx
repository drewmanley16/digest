"use client";

import { useEffect, useRef, useState } from "react";
import { beehiiv } from "@/lib/site";

/**
 * Beehiiv's loader injects the subscribe form relative to its own <script> tag,
 * so the script has to live at the exact spot the form should appear. That rules
 * out rendering it in JSX (React hoists async scripts to <head>) and next/script
 * (appends to body). Injecting into a ref'd container is the only placement that
 * survives both.
 *
 * The form itself renders in an iframe, so its colors come from the Beehiiv
 * dashboard (Forms -> Design), not from this file. See .beehiiv-embed in
 * globals.css for the layout side.
 *
 * Its request chain is serial (loader -> api -> iframe document) and lands
 * around a second and a half in, so we hold the space and show a skeleton
 * rather than letting the page sit blank and then jump.
 */
export function BeehiivEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    // Strict Mode double-invokes effects; bail if the form is already there.
    if (!container || container.querySelector("script")) return;

    // The loader replaces its own script tag, so watch for the iframe instead
    // of listening for a load event that never fires on our element.
    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = beehiiv.loaderSrc;
    script.async = true;
    script.setAttribute("data-beehiiv-form", beehiiv.formId);
    container.appendChild(script);

    return () => {
      observer.disconnect();
      container.replaceChildren();
    };
  }, []);

  return (
    <div className="beehiiv-embed relative">
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex animate-pulse flex-col items-center justify-center gap-4 border border-line"
        >
          <div className="h-3 w-32 bg-line" />
          <div className="h-10 w-4/5 bg-line" />
        </div>
      )}
      <div ref={containerRef} />
    </div>
  );
}
