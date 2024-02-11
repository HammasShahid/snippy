'use server';

import { Snippet } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export const editSnippet = async (snippet: Snippet) => {
  const id = snippet.id;
  const title = snippet.title;
  const code = snippet.code;

  await db.snippet.update({ where: { id }, data: { title, code } });
  console.log('done');
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });
  redirect('/');
};
