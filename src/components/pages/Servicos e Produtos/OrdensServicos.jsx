import React from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import TecnicoNavbar from '../../TecnicoNavbar';
import axios from 'axios';


class OrdensServicosPage extends React.Component {
  // É executado assim que o componente é inicializado, executado antes de tudo
  constructor(props) {
    super(props);
    this.state = {
      routes: props.routes,
      ordemServicos: [], // Array para armazenar as ordens de serviços
      selectedService: null, // Armazena o serviço selecionado pelo tecnico
      responseText: '', // Armazena a resposta em texto da ordem de serviço
      responseFiles: [], // Armazena os arquivos da resposta da ordem de serviço
    };
  }

  componentDidMount() {
    // Realiza uma chamada de API para obter dados de produtos
    axios.get('http://localhost:5000//ordens')
      .then(res => {
        this.setState({ ordemServicos: res.data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleShowOrder = (order) => {
    this.setState({ selectedService: order });
  }

  handleResponseText = (event) => {
    this.setState({ responseText: event.target.value });
  };

  handleResponseFiles = (event) => {
    this.setState({ responseFiles: event.target.value });
  };

  handleSubmit = (event) => {
    // Faz a chamada à API para criar uma ordem de serviço com as informações
    // do serviço selecionado e da descrição do problema
    event.preventDefault();

    const { selectedService, responseText, responseFiles } = this.state;

    // Envia os dados para o seu backend usando o axios
    axios.put(`http://localhost:5000//ordens/${selectedService.id}`, {
      nome: selectedService.nome,
      valor: selectedService.valor,
      descricao: selectedService.descricao,
      descricao_problema: selectedService.descricao_problema,
      responseText: responseText,
      responseFiles: responseFiles
    })
      .then(response => {
        console.log("Ordem de serviço atualizada com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao criar ordem de serviço:", error);
      });

    this.componentDidMount();
  };

  // Renderiza o componente no DOM (obrigatório)
  render() {
    const { ordemServicos, selectedService } = this.state;
    return (
      <>
        <TecnicoNavbar routes={this.state.routes} isLoggedIn={true}></TecnicoNavbar>

        <h1>Ordens de Serviços</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Serviço</th>
              <th>Problema</th>
              <th>Solução</th>
              <th>Arquivos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ordemServicos.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>{order.nome}</td>
                <td>{order.descricao_problema}</td>
                <td>{order.responseText}</td>
                <td>{order.responseFiles}</td>
                <td>
                  <Button variant="primary" onClick={() => this.handleShowOrder(order)}>
                    Ver
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {selectedService && (
          <Form>
            <Form.Group controlId="responseText">
              <Form.Label>Resposta</Form.Label>
              <Form.Control type="text" placeholder="Escreva a resposta" onChange={this.handleResponseText} />
            </Form.Group>
            <Form.Group controlId="responseFiles" className="mb-3">
              <Form.Label>Arquivos de Resposta</Form.Label>
              <Form.Control type="file" multiple={true} onChange={this.handleResponseFiles} />
            </Form.Group>
            <Button onClick={this.handleSubmit}>Enviar pedido</Button>
          </Form>
        )}
      </>
    );
  }

}

export default OrdensServicosPage;