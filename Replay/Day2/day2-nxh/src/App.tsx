// App.tsx
// import React from 'react';
// import HelloFunction from './components/HelloFunction';
// import HelloClass from './components/HelloClass';

// function App() {
//   return (
//     <div>
//       <HelloFunction name="Hưởng" />
//       <HelloClass name="Hưởng" />
//     </div>
//   );
// }

// export default App;
// import React from 'react';
// import Counter from './components/Count';

// function App() {
//   return (
//     <div>
//       <h1>Ví dụ về State trong React</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import WelcomeCounter from './components/WelcomeCounter';

const App: React.FC = () => {
  return (
    <div style={{ padding: 40 }}>
      <h1>Ví dụ Props + State (dùng React.FC)</h1>
      <WelcomeCounter name="Hưởng" />
      <WelcomeCounter name="Mai" />
    </div>
  );
};

export default App;
