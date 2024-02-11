import { db } from '@/db';
import { notFound } from 'next/navigation';
import SnippetEditForm from '@/components/SnippetEditForm';

interface Props {
  params: { id: string };
}

export default async function SnippetEditPage({ params: { id } }: Props) {
  const snippet = await db.snippet.findFirst({ where: { id: parseInt(id) } });
  if (!snippet) notFound();

  return (
    <SnippetEditForm snippet={snippet} />
  )
}
