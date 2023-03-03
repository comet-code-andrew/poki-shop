import { createContext, useEffect, useReducer } from "react";
import {createAction} from "../utils/reducer/reducer.utils";


import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// The actual value we want to access
export const UserContext = createContext({
  currentUser: null,
 });

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER : 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type){
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`unhandled data type ${payload}`)
  }
}

const INITIAL_STATE = {
  currentUser: null,
}

export const UserProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(userReducer, INITIAL_STATE)
  const { currentUser } = state

  const setCurrentUser = (user) => {
    dispatch(createAction( USER_ACTION_TYPES.SET_CURRENT_USER, user))
  }

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // this is ran once as soon as the component mounts then only after auth changes
    const unsubscribe = onAuthStateChangedListener((user) => {

      if(user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
      // console.log(user)
    })
    return unsubscribe
  },[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
