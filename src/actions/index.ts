'use server';

import { Snippet } from '@prisma/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { db } from '@/db';

export const addNewSnippet = async (
  formState: { message: string },
  formData: FormData
) => {
  const title = formData.get('title');
  const code = formData.get('code');

  if (typeof title !== 'string' || title.length < 3)
    return { message: 'Title must be at least 3 characters long' };
  if (typeof code !== 'string' || code.length < 3)
    return { message: 'Code must be at least 3 characters long' };

  try {
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Something went wrong. Could not create the snippet.';
    return { message };
  }

  revalidatePath('/');
  redirect('/');
};

export const editSnippet = async (snippet: Snippet) => {
  const id = snippet.id;
  const title = snippet.title;
  const code = snippet.code;

  await db.snippet.update({ where: { id }, data: { title, code } });

  revalidatePath('/');
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });
  revalidatePath('/');
  redirect('/');
};
