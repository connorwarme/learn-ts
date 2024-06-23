import { useShoppingCart } from "../context/ShoppingCartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
import formatCurrency from "../utility/utilities";
import products from "../data/products.json";

type ShoppingCartProps = {
  displayCart: boolean,
};
const ShoppingCart = ({ displayCart }: ShoppingCartProps) => {
  const { hideCart, cart } = useShoppingCart();
  return ( 
    <Offcanvas show={displayCart} onHide={hideCart} placement="end" style={{}}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Stack direction="vertical" gap={3} className="p-3">
        {
          cart.length === 0 ? <p>Your cart is empty</p> : (
            cart.map((item) => <CartItem key={item.id} {...item} />)
          )
        }
        <div className="ms-auto fs-3">
          Total: {formatCurrency(cart.reduce((total, cartProduct) => {
            const item = products.find((product) => product.id === cartProduct.id);
            return total + (item ? item.price * cartProduct.quantity : 0);
          }, 0))
          }
        </div>
      </Stack>
    </Offcanvas>
   );
}
 
export default ShoppingCart;