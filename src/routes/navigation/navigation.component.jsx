import { Outlet, Link } from "react-router-dom";
// Great thing about using Links is that whatever you wrap in them you give navigation like functjonality, ex logos
import { Fragment, useContext } from 'react';

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CCLogo } from "../../assets/logo.svg";
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';


import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";


const Navigation = () => {
  const { currentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    const res = await signOutUser();
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CCLogo className='logo'/>
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>
              ) : (
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )
            }
          <CartIcon/>
        </NavLinks>
        { isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;