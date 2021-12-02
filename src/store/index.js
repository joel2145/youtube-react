import React, { createContext, useReducer } from 'react'

const initialState = {
  popular: [],
  selected: {}
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_POPULAR":
      return { popular: action.payload }
    case "SET_SELECTED":
      return { ...state, selected: action.payload }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null,
})

export const StoreProvider = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <div>
      <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
    </div>
  )
}