import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import TecnicoNavbar from "../../TecnicoNavbar";


const TecnicosCadastroPage = (props) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [especialidade, setEspecialidade] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/tecnicos', {
      nome: nome,
      email: email,
      senha: senha,
      especialidade: especialidade
    })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  };

  return (
    <div>
      <TecnicoNavbar routes={props.routes}></TecnicoNavbar>

      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formSpecialty">
                <Form.Label>Especialidade</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Especialidade"
                  value={especialidade}
                  onChange={(event) => setEspecialidade(event.target.value)}
                />
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
};

export default TecnicosCadastroPage;