import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Head from 'next/head'
import Contact from '@/components/Contact'

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
        <Main />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
