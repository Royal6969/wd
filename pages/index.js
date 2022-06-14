import Head from 'next/head'
import Sidebar from '../components/Sidebar';
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>WhatsApp 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      
    </div>
  );
}
