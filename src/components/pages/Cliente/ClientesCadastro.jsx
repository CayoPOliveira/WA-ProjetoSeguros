import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import ClienteNavbar from '../../ClienteNavbar';

const ClientesCadastroPage = (props) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/clientes', {
      nome: nome,
      email: email,
      senha: senha
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div>
      <ClienteNavbar routes={props.routes} />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={e => setNome(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="formSenha">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ClientesCadastroPage;