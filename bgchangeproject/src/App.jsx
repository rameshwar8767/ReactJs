import { useState } from 'react'



function App() {
  const [color, setColor] = useState("green")

  return (
    
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-3'>
          <button onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"red"}}
          >Red</button>
          <button 
           onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-sm'
          style={{backgroundColor:"yellow"}}
          >Yellow</button>
          <button 
           onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"green"}}
          >Green</button>
          <button 
           onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"blue"}}
          >Blue</button>
          <button 
           onClick={()=>setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"orange"}}
          >Orange</button>
          <button 
           onClick={()=>setColor("white")}
          className='outline-none px-4 py-1 rounded-full text-black shadow-sm'
          style={{backgroundColor:"white"}}
          >White</button>
          <button 
           onClick={()=>setColor("grey")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
          style={{backgroundColor:"grey"}}
          >Grey</button>
        </div>
      </div>
    </div>


    
  )
}

export default App
