import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function ProjectCard({ image, title, desc, webdesign, webdevelopment, landingpage, uidesign }) {
  return (
    <div className='projectCard'>
      <Image src={image} alt='' />
      <h1 className='subHeading'>{title}</h1>
      <p className='mainText' dangerouslySetInnerHTML={{ __html: desc }}></p>
      {webdesign && (
        <span href='#' className='trend'>
          Web Design
        </span>
      )}
      {webdevelopment && (
        <span href='#' className='trend'>
          Web Devlopment
        </span>
      )}
      {landingpage && (
        <span href='#' className='trend'>
          Landing Page
        </span>
      )}
      {uidesign && (
        <span href='#' className='trend'>
          UI/UX Design
        </span>
      )}
    </div>
  );
}

export default ProjectCard;
