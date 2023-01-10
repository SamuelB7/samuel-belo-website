import dynamic from 'next/dynamic'
import Head from 'next/head'
const Header = dynamic(() => import('../components/Header'), { ssr: false })


export default function Home() {

  return (
    <>
      <Head>
        <title>Samuel Belo | Desenvolvedor Full Stack</title>
        <meta name="description" content="Samuel Mariano Belo | Desenvolvedor Full Stack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  )
}
