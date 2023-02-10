import React, { Component } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ClienteNavbar from '../../ClienteNavbar';
import axios from 'axios';

class ProdutosServicosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [], // Array para armazenar os serviços disponíveis
      produtos: [], // Array para armazenar os produtos disponíveis
      selectedService: null, // Armazena o serviço selecionado pelo usuário
      problemDescription: '', // Armazena a descrição do problema do usuário
    };
  }

  componentDidMount() {
    // Realiza uma chamada de API para obter dados de serviços
    axios.get('http://localhost:5000//servicos')
      .then(res => {
        this.setState({ services: res.data });
      })
      .catch(error => {
        console.error(error);
      });

    // Realiza uma chamada de API para obter dados de produtos
    axios.get('http://localhost:5000//produtos')
      .then(res => {
        this.setState({ produtos: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleRequestService = (service) => {
    this.setState({ selectedService: service });
  };

  handleProblemDescription = (event) => {
    this.setState({ problemDescription: event.target.value });
  };

  handleSubmit = (event) => {
    // Faz a chamada à API para criar uma ordem de serviço com as informações
    // do serviço selecionado e da descrição do problema
    event.preventDefault();

    const { selectedService, problemDescription } = this.state;

    // Envia os dados para o seu backend usando o axios
    axios.post('http://localhost:5000/ordens', {
      nome: selectedService.nome,
      valor: selectedService.valor,
      descricao: selectedService.descricao,
      descricao_problema: problemDescription
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  render() {
    return (
      <div>
        <ClienteNavbar routes={this.props.routes} isLoggedIn={true} />
        <Container>
          <Container>
            <h1>Produtos</h1>
          </Container>
          {this.state.produtos.map((produto, index) => (
            <Container >
              <Row>
                <Col key={index}>
                  <h3>{produto.nome}</h3>
                  <p>R$ {produto.valor}</p>
                  <p>Descrição: {produto.descricao}</p>
                  <Button onClick={() => console.log("Comprado!")}>
                    Comprar!
                  </Button>
                </Col>
              </Row>
            </Container>
          ))}
          <Container>
            <Container>
              <h1>Serviços</h1>
            </Container>
            <Row>
              {this.state.services.map((service, index) => (
                <Col key={index}>
                  <h3>{service.nome}</h3>
                  <p>R$ {service.valor}</p>
                  <p>Descrição: {service.descricao}</p>
                  <Button onClick={() => this.handleRequestService(service)}>
                    Solicitar este serviço
                  </Button>
                </Col>
              ))}
            </Row>
          </Container>
          {this.state.selectedService && (
            <Container>
              <Form>
                <Form.Group controlId="problemDescription">
                  <h3>{this.state.selectedService.nome}</h3>
                  <Form.Label>Descrição do problema</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Insira a descrição do problema"
                    onChange={this.handleProblemDescription}
                  />
                </Form.Group>
                <Button onClick={this.handleSubmit}>Enviar pedido</Button>
              </Form>
            </Container>
          )}
        </Container>
      </div >
    );
  }
}

export default ProdutosServicosPage;