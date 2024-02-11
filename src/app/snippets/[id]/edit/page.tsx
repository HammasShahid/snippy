import { db } from '@/db';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function SnippetEditPage({ params: { id } }: Props) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) notFound();

  return <div>{snippet.title} </div>;
}
