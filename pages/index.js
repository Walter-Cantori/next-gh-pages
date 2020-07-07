import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Link href="/page2" as={process.env.BACKEND_URL + '/page2'}>
          <a>Page 2 test</a>
        </Link>
      </main>
    </div>
  )
}
