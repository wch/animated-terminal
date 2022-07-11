import * as React from "react";
import Terminal from "@nitric/react-animated-term";
import "@nitric/react-animated-term/css/styles.css";

export default function SpinnerTerm() {
  const spinnerFrames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  const spinnerLines = [
    {
      text: "pip install shiny",
      cmd: true,
      delay: 50,
    },
    {
      text: "✔ Done",
      cmd: false,
      repeat: true,
      repeatCount: 2,
      frames: spinnerFrames.map(function (spinner) {
        return {
          text: spinner + " Running...",
          delay: 50,
        };
      }),
    },
    {
      text: "shiny create myapp",
      cmd: true,
      delay: 50,
    },
    {
      text: "shiny run myapp",
      cmd: true,
      delay: 50,
    },
    {
      text: "Listening on http://127.0.0.1:8000 ",
      cmd: false,
    },
  ];
  return <Terminal lines={spinnerLines} interval={40} height={160} />;
}
