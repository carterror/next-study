import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import styles from '/styles/Home.module.css'

export default function Pricing() {
  return (
    <MainLayout>
        <>
          <div>
          <h1 className={styles.center}> Pricing </h1>
          <br />
          <h1>
            Ir al
            <Link href="/home"> Home </Link>
          </h1>
        </div>
        <div className={styles.center}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/pricing/index.jsx</code>
          </p>
        </div>
      </>
    </MainLayout>
  )
}

 Pricing