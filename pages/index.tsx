import type { NextPage } from 'next'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>IntelRobotics</h1>
      <Link href="/products">Products</Link>
    </>
  )
}

export default Home
