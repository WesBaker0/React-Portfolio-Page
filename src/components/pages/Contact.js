import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../../styles/Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({...formState, [name]: value})
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_w1kuq2w', 
      'template_yz4u1k1', 
      formState, 
      '8BK42poixrZUIHoGl'
    )
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    setFormState({
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={12}>
          <h1 className="contact-header">Contact Me</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" className="contact-input" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject:</Form.Label>
              <Form.Control type="text" name="subject" placeholder="Subject" className="contact-input" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} className="contact-input" onChange={handleInputChange} />
            </Form.Group>
            <div className="custom-btn">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
