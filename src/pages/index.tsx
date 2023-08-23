import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Samuel Belo | Fullstack Developer</title>
        <meta name="description" content="Samuel Belo | Fullstack developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <Analytics />
        <Main />
        <About />
        <Experience />
        <Skills />
      </main>
    </>
  )
}
