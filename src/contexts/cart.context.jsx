import { createContext, useReducer } from "react";
import {createAction} from '../utils/reducer/reducer.utils';

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if(existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove ) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  )
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

export const CartContext = createContext({
  // isCartOpen: true,
  // setIsCartOpen: () => {},
  // cartItems: [],
  // addItemToCart: () => {},
  // removeItemFromCart: () => {},
  // cartCount: 0,
  // cartTotal: 0
});

// Our reducer that sets the new items
const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error(`Unhandled type of ${type} in cartReducer`)
  }
}

export const CartProvider = ( { children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const {cartItems, isCartOpen, cartCount, cartTotal} = state;

  // Our method that controls the reducer login
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartCount: newCartCount
    }));
  }

  // These 3 are our "action" creator functions
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    console.log("adding new item to cart")
    console.log(productToAdd)
    console.log(newCartItems)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN,  bool
    ))
  }


  const value = {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    setIsCartOpen,
    isCartOpen,
    cartItems,
    cartCount,
    cartTotal
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}