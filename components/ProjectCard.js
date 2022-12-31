import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const toTheTop = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
};

function ProjectCard({ image, title, desc, webdesign, webdevelopment, landingpage, uidesign }) {
  return (
    <div className='projectCard'>
      <Image src={image} alt='' />
      <h1 className='subHeading'>{title}</h1>
      <p className='mainText' dangerouslySetInnerHTML={{ __html: desc }}></p>
      {webdesign && (
        <Link href='#' className='trend' onClick={toTheTop}>
          Web Design
        </Link>
      )}
      {webdevelopment && (
        <Link href='#' className='trend' onClick={toTheTop}>
          Web Devlopment
        </Link>
      )}
      {landingpage && (
        <Link href='#' className='trend' onClick={toTheTop}>
          Landing Page
        </Link>
      )}
      {uidesign && (
        <Link href='#' className='trend' onClick={toTheTop}>
          UI/UX Design
        </Link>
      )}
    </div>
  );
}

export default ProjectCard;
