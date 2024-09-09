import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";



export const Navigation = () => {

  const {getQuantity, getTotal} = useContext(CartContext);
  return (



<Navbar bg="dark" expand="md" data-bs-theme="dark">
<Container>
  <Navbar.Brand className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Link to="/" className="me-2">
        <Button variant="outline-warning" className="text-white">
          🍕 Home
        </Button>
      </Link>
      <Link to="/products" className="me-2">
        <Button variant="outline-warning" className="text-white">
          🔒 Products
        </Button>
      </Link>
      <Link to="/cart" className="me-2">
        <Button variant="outline-warning" className="text-white">
          🔒 Cart
        </Button>
      </Link>
    </Nav>

  </Navbar.Collapse>
  <Form className="d-flex me-4">

    <Link to="/cart">
      <Button variant="outline-primary">
        Total: $ {getTotal()}
        {'  '}
        CARRITO: {getQuantity()}
      </Button>
    </Link>
  </Form>
</Container>
</Navbar>
  );
};
