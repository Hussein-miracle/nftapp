import { createContext , useState } from "react";

export const MenuContext = createContext(null);

export const MenuContextProvider = ({children}) => {
  const [showNav , setShowNav] = useState(false);

  const value = {showNav,setShowNav} ; 
  // console.log(showNav , 'current showNav STATE');
  
  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}