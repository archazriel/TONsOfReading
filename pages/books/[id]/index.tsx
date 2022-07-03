import React from 'react';
import Head from 'next/head';

import Book from '@views/books/[id]';

function BookPage() {
  return (
    <>
      <Head>
        <title>Enjoy it</title>
      </Head>
      <Book />
    </>
  );
}

export default BookPage;
