import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  const drawerWidth = 240;

  const drawerStyle = {
    width: `${drawerWidth}px`
  };

  const mainStyle = {
    flexGrow: 1,
    padding: '16px',
    marginLeft: `${drawerWidth}px`,
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={drawerStyle}>
        <span>Menu</span>
        <Navbar />
      </div>
      <main style={mainStyle}>
        <Content />
      </main>
    </div>
  );
}

export default App;
