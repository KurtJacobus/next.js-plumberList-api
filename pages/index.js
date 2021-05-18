import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Plumber List | Home</title>
        <meta name="keywords" content="plumbers"/>
      </Head>
      <div>
        <h1 className={styles.title}>King Plumbers</h1>
        <p className={styles.text}>King Plumbing offers unsurpassed Plumbing Expertise at affordable prices. Our service offering covers general household plumbing, maintenance plumbing, off the grid plumbing solutions to complex construction. Based in the southern suburbs of Cape Town we operate in the greater Western Cape area.</p>
        <p className={styles.text}>King Plumbing are registered plumbers with the Plumbing Industry Registration Board and the Institute of Plumbing South Africa. All our plumbers are qualified, professional and meets the standards of the South African National Standards.</p>
        <Link href="/lists/">
        <div className="text-center">
          <button type="button" className="btn btn-info">
            See Plumber List
          </button>
        </div>
        </Link>
      </div>
    </>
  )
}