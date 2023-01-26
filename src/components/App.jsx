import { useState, useEffect } from 'react';

export const App = () => {
  return (
    <div>
      <HookSwitcher />
      <Notification />
    </div>
  );
};

const Notification = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return <div>{visible && <p>Hello</p>}</div>;
};

const HookSwitcher = () => {
  const [color, setColor] = useState('violet');

  const [fontSize, setFontSize] = useState(14);

  useEffect(() => console.log('Mount'), []);
  // вызывается только 1 раз при создании компонента, аналогично componentDidMount

  useEffect(() => console.log('Update'));
  // аналогично componentDidUpdate, будет вызываться каждый раз, когда компонент будет обновлятся

  useEffect(() => {
    console.log('Mount');
    return () => console.log('Unmount');
  }, []);
  // аналогично componentWillUnmount

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
