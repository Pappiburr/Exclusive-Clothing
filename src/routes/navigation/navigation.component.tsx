import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.components';
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutStart } from '../../store/user/user.action';

import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from './navigation.styles';

const Navigation = () => {
const dispatch = useDispatch();
const currentUser = useSelector(selectCurrentUser);
const isCartOpen = useSelector(selectIsCartOpen);
const signOutHandler = () => dispatch(signOutStart());
  return (
    <Fragment> 
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
        {
             currentUser ? (
                <NavLink to ='/profile'>
             {currentUser.displayName}
              </NavLink>
             ) :
             (
             <p></p>
            )
          } 
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          
          <NavLink to='/checkout'>
            CHECKOUT
          </NavLink>
          
          { currentUser ? (
            <span onClick={signOutHandler} className='nav-link'>
              SIGN OUT
            </span>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
         
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;