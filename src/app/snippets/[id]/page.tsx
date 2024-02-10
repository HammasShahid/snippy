import { notFound } from 'next/navigation';
import { db } from '@/db/';

interface Props {
  params: { id: string };
}

export default async function SnippetShowPage({ params: { id } }: Props) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) notFound();
  
  return <h1>{snippet.title}</h1>;
}
