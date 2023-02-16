import { createContext, useState, useEffect } from "react";

import {createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser} from "../utils/firebase/firebase.utils";

// The actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// UserProvider is a context used to give children elements access to the auth singleton. The UserProvider also
// implements an observer via onAuthStateChangedListener which fires anytime the auth state changes. auth state can be
// changed anytime we call a firebase method for signing in/out etc; This allows us to monitor for changes in auth
// state in one location - as opposed to hooking into the context within our sign-in and sign-out component.
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // this is ran once as soon as the component mounts then only after auth changes
    const unsubscribe = onAuthStateChangedListener((user) => {

      if(user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
      console.log(user)
    })
    return unsubscribe
  },[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
