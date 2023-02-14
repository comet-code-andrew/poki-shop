import { Outlet, Link } from "react-router-dom";
// Great thing about using Links is that whatever you wrap in them you give navigation like functjonality, ex logos
import { Fragment } from 'react';

import { ReactComponent as CCLogo } from "../../assets/logo.svg";

import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;