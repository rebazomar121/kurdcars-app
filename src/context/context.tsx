import React, { createContext, useState, ReactNode, useReducer } from "react"
import { userReducer, initialUserState } from "./reducers/userReducer"

interface Provider {
  children: ReactNode
}

export const Context = createContext<{}>({})

const Provider = ({ children }: Provider) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState)

  return (
    <Context.Provider
      value={{
        userState,
        userDispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
