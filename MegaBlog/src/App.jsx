import { useState, useEffect, use } from "react"
import {useDispatch} from "react-redux"
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";
import'./App.css';
function App() {
  
  const[loding, setLoding] = useState(true);
  const dispatch= useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setLoding(false);
    })
  }
  , [])
  
  return !loding ? (
    <div className="min-h-screen flex flex-wrap bg-gray-400 content-between" >
      <div className="w-full block">
        <Header/>
        <main>
        <h1 className="bg-yellow-700">Todo</h1>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default App
