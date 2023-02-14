import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils.js'
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {

  // Lots going on here...
  // 1. auth is a singleton that keep track of all the auth states happening on this app
  // 2. When we get redirected back to our app as a result of Google, we can
  useEffect( () => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if(response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
      console.log(response);
    }
    fetchData()
  }, []);

  const logGoogleUser = async () => {
    // This response contains the accessToken we need to do CRUD requests
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google popup</button>
      <button onClick={logGoogleRedirectUser}> Sign in with Google redirect</button>
      <SignUpForm/>
    </div>
  );
};

export default SignIn