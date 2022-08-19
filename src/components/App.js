
import React from 'react';
import NavigationBar from './navbar'
import BodyContainer from './body/bodyContainer'

function App() {
  return (
    <div className="App">
      <NavigationBar title='CV Generator'/>
      <BodyContainer/> 
    </div>
  );
}

export default App;
