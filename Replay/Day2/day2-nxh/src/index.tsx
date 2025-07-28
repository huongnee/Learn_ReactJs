import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const user = {
//   name: "Hưởng",
//   age: 20
// };

// const Info = (user1: { name: string; age: number }) => {
//   return `Name: ${user1.name}, Age: ${user1.age}`;
// };

// const element = (
//   <div>
//     <h2>Info</h2>
//     <p>{Info(user)}</p>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root")!);
// root.render(element);
