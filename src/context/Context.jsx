import { createContext, useState } from "react"


export const Context = createContext()

function ContextProvider(children) {    
    const [basket,setBasket] = useState(0)
  return (
    <Context.Provider value={{basket,setBasket}}>
        {children}
    </Context.Provider>
  )
}

export default Context