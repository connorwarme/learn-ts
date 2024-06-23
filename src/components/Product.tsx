import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utility/utilities";

type ProductProps = {
  id: number,
  model: string,
  price: number,
  brand: string,
  url: string,
}

const Product = ({id, model, brand, price, url}: ProductProps) => {
  const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  // old code
    // <div className="d-flex flex-column justify-content-center align-items-end">
    // <Card.Text className="ms-auto">
    //   {formatCurrency(price)}
    // </Card.Text>
    // { quantity > 1 && (
    //   <Card.Text>
    //     <span className="mx-2">x{quantity}</span>
    //     {formatCurrency(price * quantity)}
    //   </Card.Text>
    // )}
    const handleIncrease = () => {
      increaseQuantity(id);
    }
    const handleDecrease = () => {
      decreaseQuantity(id);
    }
    const handleRemove = () => {
      removeFromCart(id);
    }
  return ( 
    <Card className="h-100">
      <Card.Img variant="top" src={url} height="300px" style={{ objectFit: "cover" }} />
      <Card.Body>
        <div className="d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <span className="fs-2">{model}</span>
              <span className="text-muted">{brand}</span>
            </div>
            <div className="ms-2 text-muted">{formatCurrency(price)}</div>
          </Card.Title>
        </div>
        <div className="mt-auto">
          { quantity > 0 && (
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button variant="outline-primary" className="" style={{width: "3rem", height: "3rem"}} onClick={() => handleDecrease()}>
                -
              </Button>
              <Card.Text className="d-flex justify-content-center align-items-center ms-2 mb-0">
                <span className="fs-2">{quantity}</span>
                <span className="mx-2">in cart</span>
              </Card.Text>
              <Button variant="outline-primary" style={{width: "3rem", height: "3rem"}} onClick={() => handleIncrease()}>
                +
              </Button>
            </div>
          )}
        </div>
        <div className="my-3 d-flex justify-content-center align-items-center">
          { quantity === 0 ? (
            <Button variant="primary" className="w-100" onClick={() => handleIncrease()}>
              Add to Cart
            </Button>
          ) : (
            <Button variant="danger" className="px-4" onClick={() => handleRemove()}>
              Remove
            </Button>
          )
          }
        </div>
      </Card.Body>
    </Card>
   );
}
 
export default Product;