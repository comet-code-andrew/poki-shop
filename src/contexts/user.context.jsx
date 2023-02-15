import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";

// The actual value we want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  useEffect(() => {
    // this is ran once as soon as the component mounts then only after auth changes
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user)
    })
    return unsubscribe
  },[]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
