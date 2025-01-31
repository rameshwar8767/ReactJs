import React from 'react';
import UserContest from "./User.Context"
const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState(null);
  return (
    <UserContest.Provider value={({user, setUser})}>
    
    {children}
    </UserContest.Provider>
  )
}

export default UserContextProvider
