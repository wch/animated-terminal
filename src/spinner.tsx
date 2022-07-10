import * as React from 'react';
import Terminal from '@nitric/react-animated-term';
// import 'react-animated-term/dist/react-animated-term.css';

export default () => {
  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  const spinnerLines = [
    {
      text: 'pip install foo',
      cmd: true,
      delay: 50,
    },
    {
      text: '✔ Done',
      cmd: false,
      repeat: true,
      repeatCount: 2,
      frames: spinnerFrames.map(function (spinner) {
        return {
          text: spinner + ' Running...',
          delay: 50,
        };
      }),
    },
    {
      text: 'foo create myapp',
      cmd: true,
      delay: 50,
    },
    {
      text: 'foo run myapp',
      cmd: true,
      delay: 50,
    },
    {
      text: 'Listening on http://127.0.0.1:8000 ',
      cmd: false,
    },
  ];
  return <Terminal lines={spinnerLines} interval={40} height={160} />;
};
