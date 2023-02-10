import React from 'react';
import {
  Container,
  Nav,
  Navbar,
} from 'react-bootstrap';

function ClienteNavbar(props) {

  const state = {
    home: props.routes.home,
    informacoescliente: props.routes.informacoescliente,
    produtoseservicos: props.routes.produtoseservicos,
    isLoggedIn: props.isLoggedIn
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="down">
      <Container>
        <Navbar.Brand href={state.home}>UFU Seguros</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {state.isLoggedIn && (
          <Navbar.Collapse id="cliente-navbar">
            <Nav className="me-auto">
              <Nav.Link href={state.informacoescliente}>Informações Pessoais</Nav.Link>
              <Nav.Link href={state.produtoseservicos}>Produtos e Serviços</Nav.Link>
              <Nav.Link href={state.home}>Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );


}

export default ClienteNavbar;