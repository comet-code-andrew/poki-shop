import { signInWithGooglePopup,
  createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js'

const SignIn = () => {
  const logGoogleUser = async () => {
    // This response contains the accessToken we need to do CRUD requests
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google popup</button>
    </div>
  );
};

export default SignIn