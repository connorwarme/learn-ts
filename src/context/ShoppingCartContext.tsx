import { createContext, useContext, useState, ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";

type ShoppingCartProviderProps = {
  children: ReactNode,
};
type CartItem = {
  id: number,
  quantity: number,
};
type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  removeFromCart: (id: number) => void,
  showCart: () => void,
  hideCart: () => void,
  cartQuantity: number,
  cart: CartItem[],
};
const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [displayCart, setDisplayCart] = useState(false);

  const getItemQuantity = (id: number) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };
  const increaseQuantity = (id: number) => {
    setCart((currentCart) => {
      if (currentCart.find((item) => item.id === id) == null) {
        return [...currentCart, { id, quantity: 1 }];
      } else {
        return currentCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
    });
  };
  const decreaseQuantity = (id: number) => {
    setCart((currentCart) => {
      if (currentCart.find((item) => item.id === id)?.quantity === 1) {
        return currentCart.filter((item) => item.id !== id);
      } else {
        return currentCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };
  const showCart = () => {  
    setDisplayCart(true);
  }
  const hideCart = () => {
    setDisplayCart(false);
  }
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        showCart,
        hideCart,
        cartQuantity,
        cart,
      }}
    >
      {children}
      <ShoppingCart displayCart={displayCart} />
    </ShoppingCartContext.Provider>
  );
}
