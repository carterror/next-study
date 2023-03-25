
import styles from '/styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Contact() {
  return (
    <MainLayout>
      <>
      <div>
        <h1 className={styles.center}> Contact </h1>
        <br />
        <h1>
          Ir al
          <Link href="/"> Home </Link>
        </h1>
      </div>
      <div className={styles.center}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>pages/contact/index.jsx</code>
        </p>
      </div>
      </>
    </MainLayout>
  );
}
