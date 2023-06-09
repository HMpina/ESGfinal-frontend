import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsFillStarFill, BsFillHeartFill, BsFillLightningFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import './index.css';

const Home: React.FC = () => {
  const username = 'FIAP teacher'; // Insira o nome de usuário aqui
  const history = useHistory();

  const handleClick = (route: string) => {
    history.push(route);
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1 className='mt-4'>Bom dia, {username}!</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <span className="clickable-card" onClick={() => handleClick('/registros')}>
            <Card className='card-ponto card-geral'>
              <Card.Body className='card-bg card-text'>
                <Card.Title>Registrar Horas</Card.Title>
                <Card.Text className='card-2'>Bora fazer valer o holerite</Card.Text>
              </Card.Body>
            </Card>
          </span>
        </Col>
        <Col>
        <span className="clickable-card" onClick={() => handleClick('/alimentação')}>
            <Card className='card-food card-geral'>
              <Card.Body className='card-bg card-text'>
                <Card.Title>Alimentação</Card.Title>
                <Card.Text className='card-2'>Buscar uma alimentação saudável</Card.Text>
              </Card.Body>
            </Card>
          </span>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
        <span className="clickable-card" onClick={() => handleClick('/exercicios')}>
            <Card className='card-exercise card-geral'>
              <Card.Body className='card-bg card-text'>
                <Card.Title>Mexer o esqueleto</Card.Title>
                <Card.Text className='card-2'>Registrar exercício</Card.Text>
              </Card.Body>
            </Card>
          </span>
        </Col>
        <Col>
          <span className="clickable-card" onClick={() => handleClick('/mindfullness')}>
            <Card className='card-mindfullness card-geral'>
              <Card.Body className='card-bg card-text'>
                <Card.Title>Mindfullness</Card.Title>
                <Card.Text className='card-2'>Registrar Sono ou meditação</Card.Text>
              </Card.Body>
            </Card>
          </span>
        </Col>
      </Row>
    </Container>
  );
};


export default Home;

