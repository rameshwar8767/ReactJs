
import './App.css'
import { useState } from 'react'
function App() {
  
  const [counter, setCounter]= useState(15)
  const addValue = ()=>{
    setCounter(counter + 1)
    if(counter >= 20){
      alert("Counter value can't be more than 20")
      setCounter(20)
    }
    console.log("Counter value: ", counter)  
  }
  const removeValue = ()=>{
    setCounter(counter - 1)
    if(counter <= 0){
      alert("Counter value can't be less than 0")
      setCounter(0)
    }
    console.log("Counter value: ", counter)  
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button
     onClick={addValue}
     >Add Value: {counter}</button>
     <br/>
     <button
     onClick={removeValue}
     >remove value :{counter}</button>
    </>
  )
}

export default App
