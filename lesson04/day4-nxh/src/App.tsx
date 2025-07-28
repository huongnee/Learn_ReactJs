import React from 'react';
import TvcUseState from './components/TvcUseState';
import TvcPostList from './components/TvcPostList';
import TvcCounter from './components/TvcCounter';
import TvcInputFocus from './components/TvcInputFocus';
import TvcAutoCounter from './components/TvcAutoCounter';
import NxhConfirmExit from './components/NxhConfirmExit';
import NxhThemeProvider, { NxhTheme } from './components/NxhThemeProvider'; // <- import thêm NxhTheme nếu cùng file

function App() {
  return (
    <NxhThemeProvider>
      <NxhTheme />   {/* <-- THÊM DÒNG NÀY để hiện nút Đổi theme */}
      <TvcUseState />
      {/* <TvcPostList /> */}
      <TvcCounter />
      <TvcInputFocus />
      <TvcAutoCounter />
      <NxhConfirmExit />
    </NxhThemeProvider>
  );
}

export default App;
