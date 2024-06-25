import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App.jsx";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: userCredentials.username,
        password: userCredentials.password,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.userId);
      sessionStorage.setItem("token", data.token);
      navigate("/");
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Form onSubmit={handleLogin} className="container form-1">
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter username"
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleFormChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
