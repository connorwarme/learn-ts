import { Card, Button } from "react-bootstrap";
import formatCurrency from "../utility/utilities";

type ProductProps = {
  id: number,
  model: string,
  price: number,
  brand: string,
  url: string,
}

const Product = (product: ProductProps) => {
  const quantity = 2;
  return ( 
    <Card>
      <Card.Img variant="top" src={product.url} />
      <Card.Body>
        <div className="d-flex">
          <div className="me-auto">
            <Card.Title>
              {product.model}
            </Card.Title>
            <Card.Text>
              {product.brand}
            </Card.Text>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-end">
            <Card.Text className="ms-auto">
              {formatCurrency(product.price)}
            </Card.Text>
            { quantity > 1 && (
              <Card.Text>
                <span className="mx-2">x{quantity}</span>
                {formatCurrency(product.price * quantity)}
              </Card.Text>
            )}
          </div>
        </div>
        <div className="my-2">
          { quantity > 0 && (
            <div className="d-flex justify-content-center align-items-center gap-2">
              <Button variant="outline-primary" className="me-2" style={{width: "3rem", height: "3rem"}}>
                -
              </Button>
              <Card.Text className="m-0 text-lg">{quantity}<span className="mx-2">in cart</span></Card.Text>
              <Button variant="outline-primary" style={{width: "3rem", height: "3rem"}}>
                +
              </Button>
            </div>
          )}
        </div>
        <div className="my-3 d-flex justify-content-center align-items-center">
          { quantity === 0 ? (
            <Button variant="primary" className="w-100">
              Add to Cart
            </Button>
          ) : (
            <Button variant="danger" className="px-4">
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