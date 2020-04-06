import Head from 'next/head';
import Link from 'next/link';

import '../styles/variables.css';
import '../styles/global.css';
import styles from '../styles/app.module.css';

export default ({ Component, pageProps }) =>
  <>
    <Head>
      <link rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>

    <nav className={`${styles.navigation} d-flex`}>
      <img className={styles.logo} src="/images/onceland-logo.gif"/>
      <ul className="d-flex p-0 m-0">
        <Link href="/"><li>HOME</li></Link>
        <Link href="/about"><li>ABOUT</li></Link>
        <Link href="/learn"><li>LEARN</li></Link>
        <Link href="/connect"><li>CONNECT</li></Link>
      </ul>
    </nav>

    <div className="container">
      <Component {...pageProps}/>
    </div>
  </>


