import { Outlet, Link } from "react-router-dom";
// Great thing about using Links is that whatever you wrap in them you give navigation like functjonality, ex logos
import { Fragment, useContext } from 'react';

import { ReactComponent as CCLogo } from "../../assets/logo.svg";
import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser} = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CCLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {
            currentUser ? (
              <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
            )
          }
          <Link className='nav-link' to='/auth'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;