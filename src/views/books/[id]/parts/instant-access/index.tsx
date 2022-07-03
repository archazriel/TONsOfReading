import Link from 'next/link';
import React from 'react';

import Logo from '@public/images/logo.svg?tag';
import Icon from '@views/parts/icon';

import styles from './styles.scss';

function InstantAccess({book}) {
  return (
    <div className="instant-access">
      <style jsx>{styles}</style>

      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>

      <h2 className="page-title">
        Get instant access to {book && book.name} of {book && book.author}
      </h2>



      <div className="l-list">
        <h3 className="list-title">To Proceed</h3>
        <ul className="list">
          <li>
            Enter desired login and secret phrase
          </li>
          <li>
            Enter auto refund time, it is a period to automatically return your funds after you stop reading
          </li>
          <li>
            Send {book && book.price} tons as book price to your account address, if your account balance insufficient
              <br/>
              You can withdraw money from your account anytime
          </li>
          <li>
            We will charge your account balance for each page with no additional fees
            <br/>
            (only network fee for first transfer may be charged)
          </li>
          <li>
            Enjoy Reading! If you will see a form to leave a review, and you will write it,
              <br/> you may receive discount or even complete refund
          </li>

        </ul>
      </div>

      <div className="icon-container">
        <Icon color="rgba(89, 99, 134, 0.6)" position="vertical" size="100%" />
      </div>
    </div>
  );
}

export default InstantAccess;
