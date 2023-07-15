'use client';
import Image from 'next/image';

import { useAtom } from 'jotai';
import { countAtom } from '@/shop/store.js';
import Center from '@/components/UI/Center';

export default function Home() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <main className='h-screen'>
      <Center>
        Main
        <h1 onClick={() => setCount((prev) => prev + 1)}>{count}</h1>
      </Center>
    </main>
  );
}
