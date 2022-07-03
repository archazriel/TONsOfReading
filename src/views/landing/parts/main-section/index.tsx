import React  from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.scss';
import animation from '@public/images/intro.gif';




function MainSection() {

  return (
    <>
      <style jsx>{styles}</style>
      <section className="top-section">
        <div className="top-section-content landing-container">
          <h1 className="page-title">
            Have you ever pay for book, tutorial, article but never finish it?
          </h1>
          <div className="animation-container">
            <Image src={animation}/>
          </div>
          <Link href="/books">
            <a className="get-reading" id="get-reading-button">
              Start Reading
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}

export default MainSection;
