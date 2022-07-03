import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from "../src/views/landing";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TONs Of Reading - Pay as you read!</title>
        <meta name="description" content="Pay only for pages you read with help of TON blockchain without fees for each transaction"/>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Landing />
      </main>
    </div>
  )
}

export default Home
