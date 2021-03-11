import Head from 'next/head'
import Link from 'next/link'
import Hello from '../components/Hello'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Hello name="World" />
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>

        <Link href="/readme" passHref>
          <a className="link" href="replace">
            Readme
          </a>
        </Link>
        <br />
        <Link href="https://github.com/ronsj/nextjs-dx-starter" passHref>
          <a className="link" href="replace">
            GitHub
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
