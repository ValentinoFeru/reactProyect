import React, { useState, useContext } from 'react';

const UserContext = React.createContext([]);

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider