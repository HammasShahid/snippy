'use server';

import { Snippet } from '@prisma/client';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export const addNewSnippet = async (formData: FormData) => {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  redirect('/');
};

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
