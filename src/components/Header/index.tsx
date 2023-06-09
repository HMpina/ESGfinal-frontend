import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/saudeEPontoLogo.png';
import './index.css';
import { BsFillStarFill, BsFillHeartFill, BsFillLightningFill } from 'react-icons/bs';
import { HEART_POINTS, STAR_POINTS, LIGHTNING_POINTS } from './gamification';

const Header: React.FC = () => {
  return (
    <Navbar className="p-3 bg" expand="lg">
      <Container>
        <Navbar.Brand as={Link} className="nav-Item" to="/home">
          <Image src={logo} alt="Logo" fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="nav-Item nav2 mx-3" to="/home">
              Início
            </Nav.Link>
            <Nav.Link as={Link} className="nav-Item mx-3" to="/registros">
              Ponto
            </Nav.Link>
            <NavDropdown className='mx-3' title="Atividades" id="basic-nav-dropdown">
              <NavDropdown.Item className='my-2' as={Link} to="/alimentação">
                Alimentação
              </NavDropdown.Item>
              <NavDropdown.Item className='my-2' as={Link} to="/exercicios">
                Exercícios
              </NavDropdown.Item>
              <NavDropdown.Item className='my-2' as={Link} to="/mindfullness">
                Mindfullness
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
          <Row className="justify-content-end">
            <div className="d-flex align-items-center ml-auto text-white">
            <IconWithText icon={<BsFillStarFill className="yellow-icon" />} text={STAR_POINTS.toString()} />
            <IconWithText icon={<BsFillHeartFill className="red-icon" />} text={HEART_POINTS.toString()} />
            <IconWithText icon={<BsFillLightningFill className="blue-icon" />} text={LIGHTNING_POINTS.toString()} />

            </div>
          </Row>
      </Container>
    </Navbar>
  );
};


interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text }) => {
  return (
    <div className="d-flex align-items-center mr-3 mx-4">
      {React.cloneElement(icon as React.ReactElement, { fill: 'currentColor' })}
      <span className="mx-1">{text}</span>
    </div>
  );
};

export default Header;
