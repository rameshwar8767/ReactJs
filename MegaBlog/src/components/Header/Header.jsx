import React from 'react'
import { Container, Logo, Logout } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { act } from 'react'
const Header = () => {
  const authStatus = useSelector((state)=>state.auth.status)
  const navigate =  useNavigate()

  const navItems= [
    {
      name: "Home",
      url: "/",
      active: true
    },
    {
      name: "Login",
      url: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      url:"/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      url: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Posts",
      url: "/add-post",
      active: authStatus
    }
  ]
  return (
    <Header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'><Logo width='70px'/></Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
            item.active ?  (
              <li key={item.name}>
                <button 
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full' onClick={()=> navigate(item.url)}>{item.name}</button>
              </li>
            ) : null

            )}
            {authStatus && (
              <li><Logout/></li>
            )}
            
          </ul>
        </nav>
      </Container>
    </Header>
  )
}

export default Header
