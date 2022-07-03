import React from 'react';

import CreateDeal from './parts/start-read';
import InstantAccess from './parts/instant-access';

import styles from './styles.scss';
import {booksInfo} from "../books-info";
import {useRouter} from "next/router";

function Book() {
    const router = useRouter();
    const {
        query: { id },
    } = router;

    const book = booksInfo.find((book) => book.id == id);

  return (
    <div className="read-with-us">
      <style jsx>{styles}</style>

      <div className="read-with-us-wrap">
        <InstantAccess book={book} />
        <CreateDeal />
      </div>
    </div>
  );
}

export default Book;
