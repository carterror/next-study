import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <>
      <div>
        <h1 className={styles.center}> About </h1>
        <br />
        <h1>
          Ir al
          <Link href="/about"> Home </Link>
        </h1>
      </div>
      <div className={styles.center}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/about.jsx</code>
        </p>
      </div>
      </>
    </MainLayout>
  );
}
