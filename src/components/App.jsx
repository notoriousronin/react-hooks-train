import { useState, useEffect } from 'react';

export const App = () => {
  const [value, setValue] = useState(1);
  const [visible, setVisible] = useState(true);
  if (visible) {
    return (
      <div>
        <button onClick={() => setValue(v => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>Hide</button>
        <PlanetInfo id={value} />
      </div>
    );
  } else {
    return <button onClick={() => setVisible(true)}>Show</button>;
  }
};

const PlanetInfo = ({ id }) => {
  const [name, setName] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://swapi.co/api/planets/${id}`)
      .then(res => res.json())
      .then(data => !cancelled && setName(data.name));
    return () => (cancelled = true);
  }, [id]);

  return (
    <div>
      {id} - {name}
    </div>
  );
};
//   const Notification = () => {
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//       const timeOut = setTimeout(() => {
//         setVisible(false);
//       }, 2000);
//       return () => clearTimeout(timeOut);
//     }, []);

//     return <div>{visible && <p>Hello</p>}</div>;
//   };
// };

//

// const HookSwitcher = () => {
//   const [color, setColor] = useState('violet');

//   const [fontSize, setFontSize] = useState(14);

//   useEffect(() => console.log('Mount'), []);
//   // вызывается только 1 раз при создании компонента, аналогично componentDidMount

//   useEffect(() => console.log('Update'));
//   // аналогично componentDidUpdate, будет вызываться каждый раз, когда компонент будет обновлятся

//   useEffect(() => {
//     console.log('Mount');
//     return () => console.log('Unmount');
//   }, []);
//   // аналогично componentWillUnmount

//   return (
//     <div
//       style={{
//         padding: '10px',
//         backgroundColor: color,
//         fontSize: `${fontSize}px`,
//       }}
//     >
//       Hello World!
//       <button onClick={() => setFontSize(s => s + 2)}>Change Font-Size</button>
//       <button
//         onClick={() => {
//           setColor('black');
//         }}
//       >
//         Dark
//       </button>
//       <button
//         onClick={() => {
//           setColor('white');
//         }}
//       >
//         Light
//       </button>
//     </div>
//   );
// };
