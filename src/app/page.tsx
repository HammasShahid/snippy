import Link from 'next/link';
import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  return (
    <ul>
      {snippets.map((snippet) => (
        <li key={snippet.id}>
          <Link href={`/snippets/${snippet.id}`}>{snippet.title}</Link>
        </li>
      ))}
    </ul>
  );
}
