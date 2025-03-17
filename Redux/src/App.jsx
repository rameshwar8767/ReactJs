import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import UpdateTodo from './components/UpdateTodo'

function App() {
  
  return (
    <>
      <h1>Learn about Redux toolkit</h1>
      <AddTodo />
      <Todos/>
      
    </>
  )
}

export default App
