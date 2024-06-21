import { Navbar as NavbarBs, Container, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <NavbarBs>
      <Container>
        <Nav>
          <NavLink><Link to="/">Home</Link></NavLink>
          <NavLink><Link to="/about">About</Link></NavLink>
          <NavLink><Link to="/store">Store</Link></NavLink>
        </Nav>
      </Container>
    </NavbarBs>
   );
}
 
export default Navbar;