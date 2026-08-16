"use client";

import { useEffect, useRef } from "react";
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
 */
export function BeehiivEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    // Strict Mode double-invokes effects; bail if the form is already there.
    if (!container || container.childElementCount > 0) return;

    const script = document.createElement("script");
    script.src = beehiiv.loaderSrc;
    script.async = true;
    script.setAttribute("data-beehiiv-form", beehiiv.formId);
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} className="beehiiv-embed" />;
}
