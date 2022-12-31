import React from 'react';
import headerlogo from '../public/img/headerlogo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
export default function Nav() {
  return (
    <header className='pageHeader'>
      <Container>
        <Link href={'/'} className='brandLink'>
          <Image src={headerlogo} alt='' />
        </Link>
        <Link href={'#projects-section'} className='headerLink'>
          Our work
        </Link>
        <Link href={'#contact-us-section'} className='headerLink'>
          Contact
        </Link>
      </Container>
    </header>
  );
}
