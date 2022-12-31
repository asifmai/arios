import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import project1 from '../public/img/project1.png';
import project2 from '../public/img/project2.png';
import project3 from '../public/img/project3.png';
import project4 from '../public/img/project4.png';
import project5 from '../public/img/project5.png';
import project6 from '../public/img/project6.png';
import project7 from '../public/img/project7.png';
import project8 from '../public/img/project8.png';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
  {
    image: project1,
    title: 'Inventory Tracker',
    descritpion: 'Inventory Tracker made to track incoming shipments, <br /> outbound, and current inventory.',
    webdesign: true,
    webdevelopment: true,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project2,
    title: 'Thirdwealth',
    descritpion:
      'Thirdwealth is an automated investing tool <br /> that helps Africans living abroad easily invest <br /> in their financial goals back home.',
    webdesign: true,
    webdevelopment: true,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project3,
    title: 'Tally',
    descritpion: 'Tally helps you pay off debt faster',
    webdesign: true,
    webdevelopment: false,
    landingpage: true,
    uidesign: false,
  },
  {
    image: project4,
    title: 'CoffeeUp',
    descritpion: 'Order your coffee online and pick it up later',
    webdesign: true,
    webdevelopment: false,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project5,
    title: 'Viome',
    descritpion: 'Precision products engineered for your unique microbiome',
    webdesign: true,
    webdevelopment: false,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project6,
    title: 'Mikra',
    descritpion: 'Mikra helps you restore your cellular health.',
    webdesign: true,
    webdevelopment: false,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project7,
    title: 'Care/of',
    descritpion: 'Care/of helps you on your path to achieve a higher standard of your personal health',
    webdesign: true,
    webdevelopment: false,
    landingpage: false,
    uidesign: false,
  },
  {
    image: project8,
    title: 'Harvest',
    descritpion:
      'Thirdwealth is an automated investing tool that helps Africans living abroad easily invest in their financial goals back home.',
    webdesign: true,
    webdevelopment: true,
    landingpage: false,
    uidesign: true,
  },
];

export default function Project() {
  return (
    <div>
      <div className='project' id='projects-section'>
        <Container>
          <h1 className='mainHeading mb-5 pb-5'>Projects</h1>
          <Row>
            {projects.map((proj) => (
              <Col lg={6}>
                <ProjectCard
                  image={proj.image}
                  title={proj.title}
                  desc={proj.descritpion}
                  webdesign={proj.webdesign}
                  webdevelopment={proj.webdevelopment}
                  landingpage={proj.landingpage}
                  uidesign={proj.uidesign}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
