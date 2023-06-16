import React from 'react';
import '../../styles/Home.css';
import homeClipart from '../../images/Home.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';

export default function Home({ setCurrentPage }) {
  return (
    <section>
      <Container>
        <Col md={12}>
        <Row className='home-me'>
          <Col md={7} className='home-container'>
            <h1 className='home-name'>Hello, I'm Wes</h1>
            <h1 className='home-title'>Full-Stack Web Developer</h1>
            <div class="btn-box">
              <a href="#projects" onClick={(e) => { e.preventDefault(); setCurrentPage('Projects') }}>View Projects</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); setCurrentPage('Contact') }}>Hire Me</a>
            </div>
          </Col>
          <Col md={5} className="mt-5">
            <img className='home-image' src={homeClipart} alt='Home'></img>
          </Col>
        </Row>
        <Row className='icon-row'>
          <a href='https://github.com/WesBaker0'><FontAwesomeIcon icon={faGithub} /></a>
          <a href='https://www.instagram.com/bakerwes/'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href='https://www.twitch.tv/wesbaker0'><FontAwesomeIcon icon={faTwitch} /></a>
        </Row>
        </Col>
      </Container>
    </section>
  );
}
