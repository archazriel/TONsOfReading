import React from 'react';

import Footer from '../parts/footer';
import Header from '../parts/header';
import Icon from '../parts/icon';
import Image from 'next/image';
import BookIcon from '@public/images/book.png';


import styles from './styles.scss';
import { booksInfo } from './books-info';

function BooksView() {
  return (
    <div className="books-container">
      <style jsx>{styles}</style>
      <Header />
      <div className="landing-container">
        <div className="books">
          <div className="title-container">
            <Icon color="#11C696" />
            <h2>
              Pick a Read
            </h2>
          </div>
          <div className="book-list">
            {booksInfo.map((book) => (
              <a href={`books/${book.id}`} target="_blank" key={book.name} className="book">
                {book.image ? (
                  <div className="img">
                    <Image
                      quality={50}
                      unoptimized
                      objectPosition="top"
                      layout="fill"
                      objectFit="contain"
                      src={book.image}
                      alt={book.name}
                    />
                  </div>
                ) : (
                  <div className="book-image-default">
                    <Image src={BookIcon} />
                  </div>
                )}
                <h4>{book.name}</h4>
                <p>{book.author}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BooksView;
