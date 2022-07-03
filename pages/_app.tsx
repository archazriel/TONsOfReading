import '../styles/globals.css'
import type {AppProps} from 'next/app'
import styles from  '@styles/index.scss?type=global';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <style jsx>{styles}</style>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
