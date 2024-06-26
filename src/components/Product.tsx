import { Card, Button } from "react-bootstrap";
import { useSCContext } from "../context/ShoppingCartContext";

type ProductProps = {
  id: number,
  model: string,
  brand: string,
  url: string,
  price: number
}

const Product = ({ id, model, brand, url, price }: ProductProps) => {
  const { getItemQuantity, increaseQuantity, decreaseQuantity, removeItem } = useSCContext()
  const quantity = getItemQuantity(id)
  return ( 
    <Card className="h-100">
      <Card.Img variant="top" src={url} style={{height: '250px', objectFit: 'cover'}} />
      <Card.Body>
        <div className="d-flex">
          <div className="">
            <Card.Title>{model}</Card.Title>
            <Card.Text>{brand}</Card.Text>
          </div>
          <div className="ms-auto">
            <Card.Text>${price}</Card.Text>
          </div>
        </div>
        <div className="mt-auto">
          { quantity === 0  
          ? <Button className="w-100" onClick={() => increaseQuantity(id)}>Add to Cart</Button> 
          : (
            <div className="d-flex flex-column justify-content-center align-items-center ">
              <div className="d-flex justify-content-center align-items-center gap-3">
                <Button className="" style={{ height: '3rem', width: '3rem'}} onClick={() => decreaseQuantity(id)}>-</Button>
                <span className="mx-2">{quantity}</span>
                <Button className="" style={{ height: '3rem', width: '3rem'}} onClick={() => increaseQuantity(id)}>+</Button>
              </div>
              <Button className="btn btn-danger mt-2 px-4 py-2" onClick={() => removeItem(id)}>Remove</Button>
            </div>
          )}
        </div>

      </Card.Body>
    </Card>
   );
}
 
export default Product;