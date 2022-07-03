import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Image from 'next/image';

import Icon from '../../../parts/icon';
import Arrow from '@public/images/arrow.svg?tag';
import Book from '@public/images/book.png';
import BookShelf from '@public/images/bookshelf.png';
import Reading from '@public/images/reading.png';

import styles from './styles.scss';

function HowItWorks() {

  return (
    <section className="container">
      <style jsx>{styles}</style>
      <div className="landing-container">
        <div className="title-container">
          <Icon />
          <h2 className="section-title">How it Works</h2>
        </div>
        <div className="steps">
          <div className="step-item">
            <div className="step-icon loan">
              <Image src={Book} />
            </div>
            <div className="step-text">
              <p>Create account and select what to read</p>
              <p>Put money for book price on your account wallet balance</p>
            </div>
          </div>
          <Arrow />
          <div className="step-item">
            <div className="step-icon obtain">
              <Image src={Reading} />
            </div>
            <div className="step-text">
              <p>Enjoy Reading</p>
              <p>System will do transaction for every page you read</p>
            </div>
          </div>
          <Arrow />
          <div className="step-item">
            <div className="step-icon close">
              <Image src={BookShelf} />
            </div>
            <div className="step-text">
              <p>Finish Reading</p>
              <p>You can quit anytime and get money for not read part back</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
