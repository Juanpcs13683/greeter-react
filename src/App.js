import React, { useState } from "react";
import Input from "./components/Input";
import Logo from "./components/Logo";
import Welcome from "./components/Welcome";

function App() {

  const [value, setValue] = useState('')
  const [name, setName] = useState([])
  let valor = ''

  const addName = (event) => {
    event.preventDefault()
    const person = {
      name:`${value} 👋`
    }
    setName(person)
    console.log('message name', person)
    setValue('')
    setTimeout(() => {
      setName([])
    }, 5000);
  }

  const handleName = (event) => {    
    console.log('value' ,event.target.value)
    setValue(event.target.value)
  }
  console.log('name state', name)
  return (
    <div className="App">
      <Logo author='Juanpcs13683' />
      <Welcome name={name} />
      <Input value={value} handleName={handleName} handleMessage={addName} />
    </div>
  );
}

export default App;
