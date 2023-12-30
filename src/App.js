import React from 'react';
import DataComponent from './DataComponent';
import AddProductForm from './AddProductForm';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>React App med Server</h1>
      <DataComponent />
      <div className="AdminGUI">
        <h2>Tillfälligt Admin GUI</h2>
      </div>
      <AddProductForm />
    </div>
  );
}

export default App;
