import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/products.json";
import formatCurrency from "../utility/utilities";

type CartItemProps = {
  id: number,
  quantity: number,
}
const CartItem = ( {id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = products.find((product) => product.id === id);
  if (item == null) return null;
  const { model, url, price } = item;
  return ( 
    <Stack direction="horizontal"className="border-bottom d-flex align-items-center" gap={2}>
      <img src={url} alt={model} style={{ width: "120px", height: "120px", objectFit: "cover" }} />
      <div className="me-auto">
        <h6>
          <span className="fs-1">{model}</span>
          <span className="text-muted ms-2">x{quantity}</span>
        </h6>
        <p className="text-muted">{formatCurrency(price)}</p>
      </div>
      <div>
        {formatCurrency(price * quantity)}
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
    </Stack>
   );
}
 
export default CartItem;