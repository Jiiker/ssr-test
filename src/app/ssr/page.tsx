export const dynamic = "force-dynamic";

interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data.slice(0, 10);
}

export default async function SSRPage() {
  const posts = await getPosts();

  return (
    <main className='p-6'>
      <h1 className='text-xl font-bold mb-4'>🔵 SSR 페이지</h1>
      <ul className='space-y-4'>
        {posts.map((post) => (
          <li key={post.id} className='p-4 border rounded shadow'>
            <h2 className='font-semibold'>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
