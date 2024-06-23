import { useShoppingCart } from "../context/ShoppingCartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";

type ShoppingCartProps = {
  displayCart: boolean,
};
const ShoppingCart = ({ displayCart }: ShoppingCartProps) => {
  const { hideCart, cart } = useShoppingCart();
  return ( 
    <Offcanvas show={displayCart} onHide={hideCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Stack direction="vertical" gap={3} className="p-3">
        {
          cart.length === 0 ? <p>Your cart is empty</p> : (
            cart.map((item) => <CartItem key={item.id} {...item} />)
          )
        }
      </Stack>
    </Offcanvas>
   );
}
 
export default ShoppingCart;