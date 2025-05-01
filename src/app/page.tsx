"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-6 p-6'>
      <h1 className='text-2xl font-bold'>🔍 렌더링 방식 비교</h1>
      <div className='flex gap-4'>
        <button
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
          onClick={() => router.push("/csr")}
        >
          CSR 페이지
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
          onClick={() => router.push("/ssr")}
        >
          SSR 페이지
        </button>
      </div>
    </main>
  );
}
