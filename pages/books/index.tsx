import React from 'react';
import Head from 'next/head';

import Books from '@views/books';

function BooksPage() {
  return (
    <>
      <Head>
        <title>Pick what to read</title>
      </Head>
      <Books/>
    </>
  );
}

export default BooksPage;
