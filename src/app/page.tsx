"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-6 p-6'>
      <h1 className='text-2xl font-bold'>렌더링 방식 비교해보기</h1>
      <div className='flex gap-4'>
        <button
          onClick={() => router.push("/csr")}
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded'
        >
          CSR 페이지
        </button>
        <button
          onClick={() => router.push("/ssr")}
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
        >
          SSR 페이지
        </button>
      </div>
    </main>
  );
}
