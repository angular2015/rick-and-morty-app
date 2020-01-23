import React from 'react';
import Home from './container/Home/Home';
import Navbar from './component/NavBar/NavBar';
function App() {
  return (
    <div>
      <Navbar>
        Rick and Morty
      </Navbar>
      <Home />
    </div>
  );
}

export default App;
