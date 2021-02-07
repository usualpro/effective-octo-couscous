import Head from 'next/head'
import { ProfileList } from '../components/ProfileList';
import { Modal } from '../components/Modal';

export default function Home() {
  return <main>
    <Head>
      <title>Meetic Interview</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Modal />
    <div className="container d-grid gap-4">
      <ProfileList data={'online'} />
      <ProfileList data={'featured'} />
    </div>
  </main>
}
