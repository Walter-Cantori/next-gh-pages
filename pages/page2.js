import useSWR from 'swr'
import Link from 'next/link'

import styles from './page2.module.css'

export default function Page2() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('https://api.github.com/search/repositories?q=react', fetcher)
  
  console.log(data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <>
      <div className={styles.title}>hello {data.total_count}!</div>
      <Link href="/" as={process.env.BACKEND_URL + '/'}>
        <a>Home</a>
      </Link>
    </>
  )
}
