import Image from 'next/image'
import { Inter } from 'next/font/google'
import { supabase } from './../lib/supabaseClient';
import Chat from '@/components/Chat';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <Nav />
        <div className=' h-screen max-h-[1000px] w-full'>
          <Chat />
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  return {
    props: {
    },
  }
}

