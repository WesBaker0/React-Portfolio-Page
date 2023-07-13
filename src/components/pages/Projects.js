import React from 'react';
import '../../styles/Projects.css'
import Project1 from '../../images/CharTest-Demo.png';
import Project2 from '../../images/Dreamer-GPT.png';
import Project3 from '../../images/coming-soon.png';
import { Container, Row, Col } from 'react-bootstrap';


export default function Projects() {
  return (
    <section>
      <Container>
        <Row md={12} className='project-intro-container'>
          <h1>My Projects</h1>
        </Row>
        <Row className='project-container'>
          <Row className='project-info'>
          </Row>
          <Col md={6} className='project-1'>
            <a href="https://example.com/project1"><img className='project1' src={Project1} alt='CharTest'></img></a>
          </Col>

          <Col md={6} className='project-2'>
            <a href="https://example.com/project2"><img className='project2' src={Project2}></img></a>
          </Col>
        </Row>
        <Row className='project-container'>
          <Col md={12} className='project-3'>
            <a href="https://example.com/project3"><img className='project3' src={Project3}></img></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

