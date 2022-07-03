import Link from 'next/link';
import React from 'react';

import Logo from '@public/images/logo.svg?tag';

import styles from './styles.scss';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <style jsx>{styles}</style>
      <div className="landing-container footer-content">
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>
        <nav className="footer-navigation">
          <Link href="/authors">
            <a>For Authors</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/terms-of-use">
            <a>Terms of Use</a>
          </Link>
          <Link href="/privacy-policy">
            <a>Privacy policy</a>
          </Link>
        </nav>
        <p className="all-right-reserved">{`© ${year} TONsOfReading. All Rights Reserved.`}</p>
      </div>
    </footer>
  );
}

export default Footer;
