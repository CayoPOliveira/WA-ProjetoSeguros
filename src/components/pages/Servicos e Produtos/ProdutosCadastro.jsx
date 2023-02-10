import React, { useState } from 'react';
import { Form, FormControl, Button, Container, Row, Col } from 'react-bootstrap';
import TecnicoNavbar from '../../TecnicoNavbar';
import axios from 'axios';

function ProdutosCadastroPage(props) {
  const [produto, setProduto] = useState({
    id: '',
    nome: '',
    valor: '',
    quantidade: '',
    descricao: ''
  });

  const handleChange = (event) => {
    setProduto({
      ...produto,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faz a requisição POST para a API com o objeto produto
    axios.post('http://localhost:5000/produtos', {
      nome: produto.nome,
      valor: produto.valor,
      quantidade: produto.quantidade,
      descricao: produto.descricao
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    // Faz a requisição PUT para a API com o objeto servicos
    axios.put(`http://localhost:5000/produtos/${produto.id}`, {
      nome: produto.nome,
      valor: produto.valor,
      quantidade: produto.quantidade,
      descricao: produto.descricao
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
                <Form.Label>ID do Produto</Form.Label>
                <FormControl
                  type="text"
                  name="id"
                  value={produto.id}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductnome">
                <Form.Label>Nome do Produto</Form.Label>
                <FormControl
                  type="text"
                  name="nome"
                  value={produto.nome}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductValor">
                <Form.Label>Valor</Form.Label>
                <FormControl
                  type="number"
                  name="valor"
                  value={produto.valor}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductQuantity">
                <Form.Label>Quantidade</Form.Label>
                <FormControl
                  type="number"
                  name="quantidade"
                  value={produto.quantidade}
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
                  value={produto.descricao}
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

export default ProdutosCadastroPage;