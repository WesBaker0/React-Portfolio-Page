import React from 'react';
import '../../styles/About.css'
import aboutImage from '../../images/About.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faNodeJs, faReact, faEnvira } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <section>
      <Container>
        <Col md={12}>
          <Row className='about-me'>
            <Col md={8} className='about-container'>
              <h1 className='about-title'>About Me</h1>
              <p className='about-body'>I am a dedicated and solution-oriented web developer with a solid foundation in computer science and full-stack development. I specialize in making applications as user-friendly as possible. When I'm not deep in the vast sea of Javascript, you can find me on the couch watching Netflix, walking my dog, or somewhere on the beach.</p>
            </Col>
            <Col md={4} className="mt-5">
              <img className='about-image' src={aboutImage} alt='About'></img>
            </Col>
          </Row>
          <Row className='toolset-container'>
            <Col md={12} className='toolset-title'>
              <p className='toolset-text'>My toolset includes, but is not limited to:</p>
            </Col>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <FontAwesomeIcon className="html-icon" icon={faHtml5} size="3x" />
              <FontAwesomeIcon className="css-icon" icon={faCss3Alt} size="3x" />
              <FontAwesomeIcon className="js-icon" icon={faJsSquare} size="3x" />
              <FontAwesomeIcon className="nodeJS-icon" icon={faNodeJs} size="3x" />
              <FontAwesomeIcon className="react-icon" icon={faReact} size="3x" />
              <FontAwesomeIcon className="mongo-icon" icon={faEnvira} size="3x" />

            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
}
