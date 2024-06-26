import { ShoppingCartContext, CartItem } from "./ShoppingCartContext";
import { useState, ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode
}
// what cart functionality do I want?
// get item id
// add item to cart
// update item quantity
// remove item from cart


const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [cart, setCart] = useState([] as CartItem[])
  const [displayCart, setDisplayCart] = useState(false)

  const getItemQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id)
    return item ? item.quantity : 0
  }
  const increaseQuantity = (id: number) => {
    setCart((currentCart) => {
      if (currentCart.find((item) => item.id === id) === null) {
        return [...currentCart, {id, quantity: 1}]
      } else {
        return currentCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      }
    })
  }
  const decreaseQuantity = (id: number) => {
    setCart((currentCart) => {
      if (currentCart.find((item) => item.id === id)?.quantity === 1) {
        return currentCart.filter((item) => item.id !== id)
      } else {
        return currentCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          return item
        })
      }
    })
  }
  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }
  const showCart = () => {
    setDisplayCart(true)
  }
  const hideCart = () => {
    setDisplayCart(false)
  }
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0)
  return ( 
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseQuantity, decreaseQuantity, removeItem, showCart, hideCart, cartQuantity, cart }}>
      {children}
      <ShoppingCart display={displayCart} />
    </ShoppingCartContext.Provider>
   );
}
 
export default ShoppingCartProvider;