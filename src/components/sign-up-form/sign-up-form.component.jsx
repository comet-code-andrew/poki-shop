// Forms allow you to enforce certain fields, types of inputs etc;

import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  console.log(formFields);
  // We can destructure the name from the event so that we know which formFields to update
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update all of the fields to the same thing except the one that is changed
    setFormFields({...formFields, [name]: value})
  }

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label>Username</label>
        <input type='text' required onChange={handleChange} name='displayName' value={displayName}/>

        <label>Email</label>
        <input type='text' required onChange={handleChange} name='email' value={email}/>

        <label>Password</label>
        <input type='text' required onChange={handleChange} name='password'value={password}/>

        <label>Confirm Password</label>
        <input type='text' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>

        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;