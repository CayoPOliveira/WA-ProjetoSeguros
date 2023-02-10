import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ClienteNavbar from '../../ClienteNavbar';

const ClientPage = (props) => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const id_cliente = props.id_cliente;
      const response = await fetch(`http://localhost:5000/clientes/${id_cliente}`);
      const clientData = await response.json();
      setClient(clientData);
      setLoading(false);
    };
    fetchData();
  }, [props.id_cliente]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://localhost:5000/clientes/${client.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: client.nome, email: client.email, senha: client.senha }),
    });
    if (response.ok) {
      alert('Informações atualizadas com sucesso!');
    } else {
      alert('Erro ao atualizar informações!');
    }
  };

  return (
    <div>
      <ClienteNavbar routes={props.routes} isLoggedIn={props.isLoggedIn} />
      <Container>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <Row>
            <Col xs={12}>
              <h1>Informações do cliente</h1>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    value={client.nome}
                    onChange={(event) => setClient({ ...client, nome: event.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={client.email}
                    onChange={(event) => setClient({ ...client, email: event.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    value={client.senha}
                    onChange={(event) => setClient({ ...client, senha: event.target.value })}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleUpdate}>
                  Atualizar informações
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ClientPage;