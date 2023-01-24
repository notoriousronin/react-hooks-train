import { useState } from 'react';

export const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () => {
  const [color, setColor] = useState('violet');

  const [fontSize, setFontSize] = useState(14);

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: color,
        fontSize: `${fontSize}px`,
      }}
    >
      Hello World!
      <button onClick={() => setFontSize(s => s + 2)}>Change Font-Size</button>
      <button
        onClick={() => {
          setColor('black');
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          setColor('white');
        }}
      >
        Light
      </button>
    </div>
  );
};
