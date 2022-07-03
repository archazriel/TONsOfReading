import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Icon404 from '@public/images/404.gif';

import Layout from '@components/layout';

function Custom404() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Layout>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <p>404 | Coming soon, probably :)</p>
          <Image src={Icon404}/>
        </div>
      </Layout>
    </>
  );
}

export default Custom404;
