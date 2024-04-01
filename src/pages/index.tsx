import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '@/componenPage/Nav'
import Height from '@/componen/Height'
import Jumberton from '@/componenPage/Jumberton'
import Main from '@/componenPage/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Nav />
      <Jumberton />
      <Main />


    </>
  )
}
