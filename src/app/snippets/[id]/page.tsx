import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db/';

interface Props {
  params: { id: string };
}

export default async function SnippetShowPage({ params: { id } }: Props) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) notFound();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{snippet.title}</h1>
        <Link
          href={`/snippets/${snippet.id}/edit`}
          className="border border-green-600 text-green-600 p-3 hover:text-white hover:bg-green-600"
        >
          Edit
        </Link>
      </div>
      <pre className="bg-gray-300 p-3 rounded text-lg">{snippet.code}</pre>
    </div>
  );
}
