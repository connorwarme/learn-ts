import { createContext, useContext  } from "react";

export type CartItem = {
  id: number,
  quantity: number
}
export type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  removeItem: (id: number) => void,
  showCart: () => void,
  hideCart: () => void,
  cartQuantity: number,
  cart: CartItem[]
}
export const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useSCContext = () => {
  return useContext(ShoppingCartContext)
}