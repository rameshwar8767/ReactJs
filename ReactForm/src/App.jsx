import './App.css'
import { useForm } from "react-hook-form";


function App() {
  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors }
   } = useForm();
  return (
   <form onSubmit={handleSubmit((data)=>console.log(data))}>
    <div>
      <label htmlFor="">First Name: </label>
      <input  {...register("firstName" , { required: true })}/>
    </div>
    <br />
    <div>
      <label htmlFor="">Middle Name: </label>
      <input  {...register("middleName",  { required: true })}/>
    </div>
    <br />
    <div>
      <label htmlFor="">Last Name: </label>
      <input  {...register("lastName",  { required: true })}/>
    </div>
    <br />
    <button type='submit'>Submit</button>
   </form>
  )
}

export default App
