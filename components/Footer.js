import React from 'react';
import Image from 'next/image';
import footerLogo from '../public/img/footerLogo.png';
import copyRight from '../public/img/copyright.svg';
import fb from '../public/img/fb.svg';
import ins from '../public/img/ins.svg';
import ln from '../public/img/ln.svg';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

export default function Footer() {
  return (
    <div>
      <div className='footer'>
        <Container fluid>
          <Row>
            <Col className='footerLeft'>
              <Image src={footerLogo} alt={''} />
              <span className='mainText'>- Web Design and creation</span>
              <span className='mainText copyRight'>
                <Image src={copyRight} alt={''} />
                Copyright Airos Media, All right reserved
              </span>
            </Col>
            {/* <Col lg={6} className='footerRight'>
              <span className='footerLink'>
                <Link href={''}>Portfolio</Link>
                <Link href={''}>Process</Link>
                <Link href={''}>Pricing</Link>
              </span>

              <span className='socialMedia'>
                <Link href={''} className='socailLink'>
                  <Image src={fb} />
                </Link>
                <Link href={''} className='socailLink'>
                  <Image src={ins} />
                </Link>
                <Link href={''} className='socailLink'>
                  <Image src={ln} />
                </Link>
              </span>
            </Col> */}
          </Row>
        </Container>
      </div>
    </div>
  );
}
