import React,{useContext} from 'react'

import UserContext from '../context/User.Context'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user){
        return (
            <div>Please login</div>
        )
    }
    return <div>Welcome {user.username}</div>
  return (
    <div>
      
    </div>
  )
}

export default Profile
