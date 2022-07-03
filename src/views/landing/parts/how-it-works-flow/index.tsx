import React from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import styles from './styles.scss';

function HowItWorksFlow() {
  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 960px)',
  });
  return (
    <section className="how-it-works-flow">
      <style jsx>{styles}</style>
      <div className="landing-container">
        <div className="step-item">
          {isTabletOrMobile && (
            <Link href="/books">
              <a className="start-now" id="start-button-loan">
                Start Now
              </a>
            </Link>
          )}
          <div className="image-container">
            <img src="/images/books.jpg" alt="" />
            <img
              className="asset-type-image"
              src="/images/client/asset-type.png"
              alt=""
            />
          </div>
          <div className="step-description">
            <h2>Select what to read</h2>
            <p className="description">
              You are a passionate reader but it is always hard to know if something worth buying it?
              Or you just want to read read one novel from the collection?
              We got you covered, select from thousands books, tutorials, science articles, stories and just start reading it
              <strong> with ability to get your money for unread part back</strong>
            </p>
            {!isTabletOrMobile && (
              <Link href="/books">
                <a className="start-now" id="start-button-loan">
                  Select Now
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="step-item revert">
          {isTabletOrMobile && (
            <Link href="/books">
              <a className="start-now" id="start-button">
                Start Now
              </a>
            </Link>
          )}
          <div className="image-container obtain">
            <img src="/images/enjoy.jpg" alt="" />
          </div>
          <div className="step-description">
            <h2>Enjoy Reading</h2>
            <p className="description">
              With using TON blockchain payments technologies your money totally secure.
              You don't have to care about refund terms anymore and can just enjoy reading or quit it.
              Moreover some yong <strong> authors can be interested in your review and they will refund you part
              or even all the price for your review
              </strong>.
            </p>
            {!isTabletOrMobile && (
              <Link href="/books">
                <a className="start-now" id="start-button">
                  Start Now
                </a>
              </Link>
            )}
          </div>
        </div>
        <div className="step-item">
          {isTabletOrMobile && (
            <Link href="/books">
              <a className="start-now" id="start-button">
                Start Reading
              </a>
            </Link>
          )}
          <div className="image-container">
            <img src="/images/shelf.jpg" alt="" />
          </div>
          <div className="step-description">
            <h2>Finish Reading</h2>
            <p className="description">
              Don't like the material you picked for reading? Just stop reading it and get your money for unread part back.
            </p>
            {!isTabletOrMobile && (
              <Link href="/books">
                <a className="start-now" id="start-button">
                  Start Reading
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksFlow;
