import React, { useReducer } from 'react'

const Appstate = (props) => {
  const initialState = {
    users: [],
    loading: false,
    search: ''
  }
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <appContext.Provider value={{...state}}>
        {props.children}
    </appContext.Provider>
  )
}

export default Appstate
