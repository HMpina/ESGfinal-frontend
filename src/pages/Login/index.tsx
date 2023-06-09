import { Container, Modal, Card, Form, Button } from 'react-bootstrap';
import './index.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import logo1 from '../../assets/images/saudeEPontoTitle.svg';
import logo2 from '../../assets/images/saudeEPontoLogo.svg';


const Login: React.FC = () => {
  const history = useHistory();
  const handleLogin = () => {history.push('/home')}



  return (
    <Container className='login-page-bg'>
 
      <Card className='login-card'>
        <Card.Body>
        <Card.Title className='center-logo'>
          <div className='image-container'>
    <img src={logo1} alt="Logo"/> <br/>
    <img src={logo2} className='main-logo' alt="Logo"/>
          </div>
</Card.Title>

          <Form>
            <Form.Group controlId='formUsername'>
              <Form.Label>Username</Form.Label>
              <div className='input-icon'>
                <i className='fa fa-user'></i>
                <Form.Control
                  type='text'
                  placeholder='Enter username'
                />
              </div>
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <div className='input-icon'>
                <Form.Control
                  type='password'
                  placeholder='Enter password'
                />
                <i className='fa fa-lock'></i>
              </div>
            </Form.Group>

            <Button variant='primary' type='submit' className='login-button' onClick={handleLogin}>
              LOGIN
            </Button>
          </Form>
          <div className='forgot-password'>
            <a href='#' className='forgot-link'>
              Forgot your password
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
