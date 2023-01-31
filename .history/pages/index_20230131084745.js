import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link'

export default function Home() {
  return (
<main className={styles.container} id= "colouring">
    <nav>
      <Link href="/about">About</Link>
    </nav>
</main>
  )
}
