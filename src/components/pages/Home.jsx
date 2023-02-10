import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Row, Col
} from 'react-bootstrap';

class Home extends React.Component {

  // É executado assim que o componente é inicializado, executado antes de tudo
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }


  // Esse método é executado sempre antes do metodo render()
  static getDerivedStateFromProps(props, state) {
    // Dessa forma tudo que tiver no state vai ser copiado e só o routes vai manter o valor passado
    // é uma medida para evitar que alguma funcionalidade altere as rotas
    return { ...state, routes: props.routes }
  }

  // Renderiza o componente no DOM (obrigatório)
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="down">
          <Container>
            <Navbar.Brand href={this.state.routes.home}>UFU Seguros</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar" >
              <Nav className="me-auto">
                <NavDropdown title="Acessar" id="basic-nav-dropdown">
                  <NavDropdown.Item href={this.state.routes.cliente}>Cliente</NavDropdown.Item>
                  <NavDropdown.Item href={this.state.routes.tecnico}>Técnico</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Cadastro" id="basic-nav-dropdown">
                  <NavDropdown.Item href={this.state.routes.cadastrocliente}>Cliente</NavDropdown.Item>
                  <NavDropdown.Item href={this.state.routes.cadastrotecnico}>Técnico</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <h1>Bem Vindo!</h1>
          </Row>
          <Row>
            <h3>O sistema UFU Seguros serve para cadastrar, acessar, solicitar e acompanhar todos os nossos serviços e produtos oferecidos!</h3>
          </Row>
          <Row>
            <Col md="auto">
              <p>
                Sistema desenvolvido por:
              </p>
            </Col>
            <Col md="auto">
              <p>
                Cayo Phellipe Ramalho de Oliveira
              </p>
            </Col>
          </Row>
        </Container>



      </>
    );
  }

}

export default Home;