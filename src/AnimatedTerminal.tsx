import * as React from "react";
import { StrictMode } from "react";
// @ts-ignore: I think the preact-compat shims aren't set up properly for
// react-dom/client, so we need to refer directly to preact/compat/client for
// now. Hopefully it will be fixed in the future.
import { createRoot } from "preact/compat/client";

import Terminal, { RendererProps } from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";

export default function animatedTerminal(
  element: HTMLElement,
  content: RendererProps["lines"],
  interval: number = 40
) {
  const root = createRoot(element);

  root.render(
    <StrictMode>
      <Terminal lines={content} interval={interval} height={160} />
    </StrictMode>
  );
}
