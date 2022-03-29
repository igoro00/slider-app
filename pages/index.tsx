import type { NextPage } from 'next'
import Link from 'next/link'
import { useLocalStorage } from '../hooks'
import Header from '../components/Header'

const Home: NextPage = () => {


  return (
    <div>
      <Header/>
      <Link href="home" >
        <a>Home</a>
      </Link>
      
    </div>
  )
}

export default Home
