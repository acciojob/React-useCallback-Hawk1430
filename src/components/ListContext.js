import React, {useState} from 'react'

export const ListContext = React.createContext();

export const ListContextProvider = ({ children }) => {
    const [list, setList] = useState([
      {id:1,name:"HTML"},
      {id:2,name:"CSS"},
      {id:3,name:"JavaScript"},
      {id:4,name:"React"},
    ]);
  return (
    <ListContext.Provider value={{list, setList}}>
        {children}
    </ListContext.Provider>
  )
}
