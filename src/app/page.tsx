import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        
        <h1 className="font-bold text-4xl">Snippets</h1>
        <Link href="/snippets/new" className="border rounded py-3 px-5 text-xl">New</Link>
      </div>

      <ul className="flex flex-col gap-3">
        {snippets.map((snippet) => (
          <li key={snippet.id} className="p-4 border rounded">
            <Link
              className="text-gray-700 flex justify-between"
              href={`/snippets/${snippet.id}`}
            >
              {snippet.title}
              <button type="button">View</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
