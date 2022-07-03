import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import Router from 'next/router';

import ActiveLink from '@components/header/active-link';

import Logo from '@public/images/logo.svg?tag';

import styles from './styles.scss';

const NavigationBlock = () => (
  <>
    <style jsx>{styles}</style>
    <nav className="navigation">
      <ActiveLink activeClassName="active" href="/authors">
        <a id="l-link">For Authors</a>
      </ActiveLink>
      <ActiveLink activeClassName="active" href="/about-us">
        <a id="about-us-link">About Us</a>
      </ActiveLink>
    </nav>
    <div className="actions-container">
      <Link href="/books">
        <a className="get-started-link" id="get-started-link" target="_blank">
          Get Started
        </a>
      </Link>
    </div>
  </>
);

function Header() {
  return (
    <header
      className={classnames('header')}
    >
      <style jsx>{styles}</style>
      <div className="landing-container">
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <Logo />
            </a>
          </Link>
            <>
              <input
                type="checkbox"
                id="client-header-burger"
                className="mobile-navigation-input"
              />
              <label
                htmlFor="client-header-burger"
                className="mobile-navigation-label"
              >
                <span className="navigation-inner" />
              </label>
              <NavigationBlock />
              <div className="mobile-navigation">
                <NavigationBlock />
              </div>
            </>
        </div>
      </div>
    </header>
  );
}

export default Header;
