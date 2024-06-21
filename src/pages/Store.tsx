import { Container, Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import products from "../data/products.json";
const Store = () => {
  return ( 
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <Col key={product.id} >
            <Product {...product}>
              {/* ??? how does he pass props to product ??? */}
            </Product>
          </Col>
        ))}
      </Row>
    </Container>   
  );
}
 
export default Store;