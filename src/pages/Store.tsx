import { Row, Col } from "react-bootstrap";
import products from "../data/products.json";
import Product from "../components/Product";

const Store = () => {
  return ( 
    <div>
      <h2>Store</h2>
      <Row xs={1} md={2} lg={3} className="g-3">
        {
          products.map(product => (
            <Col key={product.id}>
              <Product {...product} />
            </Col>
          ))
        }
      </Row>
    </div>
   );
}
 
export default Store;