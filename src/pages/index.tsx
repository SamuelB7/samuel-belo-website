import dynamic from 'next/dynamic';
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'

/* const Navbar = dynamic(() => import('@/components/Navbar'), {ssr: false})
const Main = dynamic(() => import('@/components/Main'), {ssr: false})
const About = dynamic(() => import('@/components/About'), {ssr: false})
const Skills = dynamic(() => import('@/components/Skills'), {ssr: false})
const Contact = dynamic(() => import('@/components/Contact'), {ssr: false})
const Experience = dynamic(() => import('@/components/Experience'), {ssr: false}) */

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
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
