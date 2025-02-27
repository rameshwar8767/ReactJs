import { use } from 'react'
import { useState, useCallback, useEffect ,useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [ password, setPassword] = useState()


  //ref hook

  const paswordRef = useRef(null)
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    

    
    if(number){
      str+="0123456789"
    }
    if(charAllowed){
      str+="~!@#$%^&*()_+=|\?/"
    }
    for (let index = 1; index <= length; index++) {
      let charIndex = Math.floor((Math.random()*str.length)+1)
      pass = pass + str.charAt(charIndex)
    }

    setPassword(pass)    
  },[length, number , charAllowed, setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length, passwordGenerator, number, charAllowed])

  const copyPasswordToClipboard = useCallback(()=>{
    paswordRef.current?.select()
    paswordRef.current?.setSelectionRange(0, 30)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
    
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white my-3 text-center'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={paswordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            name="" 
            id=""
            min={6}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              {setLength(e.target.value)}
            }}
            />
            <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" name="" id="numberInput"
            defaultChecked={number}
            onChange={()=>{
              setNumber((prev)=> !prev);
            }}
            
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" name="" id="charInput"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=> !prev);
            }}
            
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
