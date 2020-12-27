import Head from 'next/head'
import Conductor from '../components/conductor'
import TrebleKeyboard from '../components/treble_keyboard'
import song from '../data/auld_lang_syne'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accordion Teacher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Conductor song={song} beatsPerMinute={60}>
          <TrebleKeyboard/>
        </Conductor>
      </main>
    </div>
  )
}
