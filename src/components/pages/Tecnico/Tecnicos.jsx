import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import TecnicoNavbar from '../../TecnicoNavbar';

const ClientesPage = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000//login/tecnico', {
        email,
        senha,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('id_tecnico', response.data.id);
      window.location = 'tecnico/ordens-de-servico';
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <TecnicoNavbar routes={props.routes} isLoggedIn={isLoggedIn} />
      <Container className="my-5">
        <h2 className="text-center">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ClientesPage;