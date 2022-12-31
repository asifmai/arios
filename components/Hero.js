import React from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import Nav from './Nav';

export default function Hero() {
  return (
    <div className='Hero' style={{ minHeight: '100vh', backgroundColor: '#000000', paddingTop: '3em' }}>
      <Nav />
      <div className='heroSection'>
        <Container>
          <p className='heroHeading'>
            Professional Web
            <br />
            Design <span>and</span>
            <br />
            Development
          </p>
          <p className='mainText'>
            Deepen the connection to your brand with world-class digital
            <br />
            products and transformative user experiences.
          </p>
          <Link href='#contact-us-section' className='mainBtn white'>
            Start a project
          </Link>
          <Link href='#projects-section' className='mainBtn red'>
            View our work
          </Link>
        </Container>
      </div>
    </div>
  );
}
