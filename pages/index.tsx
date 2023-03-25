import Head from 'next/head'
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function Home() {
  return (
    <MainLayout>
      <DarkLayout>
        <>
      <div>
        <h1 className={styles.center}> Home </h1>
        <br />
        <h1>
          Ir al
          <Link href="/about"> About </Link>
        </h1>
      </div>
      <div className={styles.center}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/index.jsx</code>
        </p>
      </div>
      </>
      </DarkLayout>
    </MainLayout>
  );
}
