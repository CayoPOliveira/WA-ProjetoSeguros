import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import TecnicoNavbar from '../../TecnicoNavbar';
import axios from 'axios';

function ServicosCadastroPage(props) {
  const [servicos, setServicos] = useState({
    id: '',
    nome: '',
    valor: '',
    descricao: ''
  });

  const handleChange = (event) => {
    setServicos({
      ...servicos,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faz a requisição POST para a API com o objeto servicos
    axios.post('http://localhost:5000/servicos', {
      nome: servicos.nome,
      valor: servicos.valor,
      descricao: servicos.descricao
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Faz a requisição PUT para a API com o objeto servicos
    axios.put(`http://localhost:5000/servicos/${servicos.id}`, {
      nome: servicos.nome,
      valor: servicos.valor,
      descricao: servicos.descricao
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  return (
    <div>

      <TecnicoNavbar routes={props.routes} isLoggedIn={true}></TecnicoNavbar>

      <Container>
        <Row classnome="justify-content-md-center">
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formProductId">
                <Form.Label>ID do Serviço</Form.Label>
                <FormControl
                  type="text"
                  name="id"
                  value={servicos.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductnome">
                <Form.Label>Nome do Serviço</Form.Label>
                <FormControl
                  type="text"
                  name="nome"
                  value={servicos.nome}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductValor">
                <Form.Label>Valor</Form.Label>
                <FormControl
                  type="number"
                  name="valor"
                  value={servicos.valor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductDescription">
                <Form.Label>Descrição</Form.Label>
                <FormControl
                  as="textarea"
                  rows="3"
                  name="descricao"
                  value={servicos.descricao}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col>
                  <Button variant="primary" type="submit">
                    Cadastrar
                  </Button>
                </Col>
                <Col>
                  <Button variant="primary" type="button" onClick={handleUpdate}>
                    Atualizar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServicosCadastroPage;
