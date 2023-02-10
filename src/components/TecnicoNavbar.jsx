import React from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown
} from 'react-bootstrap';

class TecnicoNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: this.props.routes.home,
      informacoestecnico: this.props.routes.informacoestecnico,
      ordemservico: this.props.routes.ordemservico,
      cadastroproduto: this.props.routes.cadastroproduto,
      cadastroservico: this.props.routes.cadastroservico,
      isLoggedIn: props.isLoggedIn
    }
  }

  render() {
    let state = this.state;
    return (
      <Navbar bg="dark" variant="dark" expand="lg" fixed="down">
        <Container>
          <Navbar.Brand href={state.home}>UFU Seguros</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {state.isLoggedIn && (
            <Navbar.Collapse id="tecnico-navbar">
              <Nav className="me-auto">
                <Nav.Link href={state.informacoestecnico}>Informações Pessoais</Nav.Link>
                <Nav.Link href={state.ordemservico}>Ordens de Serviços</Nav.Link>
                <NavDropdown title="Atualizar" id="basic-nav-dropdown">
                  <NavDropdown.Item href={state.cadastroproduto}>Produtos</NavDropdown.Item>
                  <NavDropdown.Item href={state.cadastroservico}>Serviços</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={state.home}>Sair</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    );
  }

}

export default TecnicoNavbar;