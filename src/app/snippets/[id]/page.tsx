import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/db/';
import { deleteSnippet } from '@/actions';

interface Props {
  params: { id: string };
}

export default async function SnippetShowPage({ params: { id } }: Props) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) notFound();

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">{snippet.title}</h1>
        <div className="flex gap-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border border-green-500 text-green-500 p-3 hover:text-white hover:bg-green-500"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="text-red-500 border border-red-500 p-3 hover:text-white hover:bg-red-500">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-300 p-3 rounded text-lg">{snippet.code}</pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();
  return snippets.map((snippet) => ({ id: snippet.id.toString() }));
}
