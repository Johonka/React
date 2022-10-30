import React from 'react';
import Product from './Product';
import {useState, useEffect} from 'react';


const App =() =>  {
const [counter, setCounter] = useState(0); 

useEffect(() => {
  setCounter(55)
}, [])

return (
    <div className="App">
      <button onClick={()=>{
        setCounter ((prevCounter) => prevCounter - 1);
      }}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter((prevCounter) => prevCounter + 1)
      }}>+</button>
    </div>
  );
}

export default App;

//<Product name ={"Johannes"}  age ={32} />

