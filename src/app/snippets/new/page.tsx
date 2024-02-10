import { redirect } from 'next/navigation';
import { db } from '@/db';

export default function NewSnippetPage() {
  const addNewSnippet = async (formData: FormData) => {
    'use server';

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

  return (
    <>
      <h1 className="text-4xl font-semibold tracking-wider mb-12">
        Add a new snippet
      </h1>

      <form action={addNewSnippet} className="flex flex-col gap-5">
        <div>
          <label htmlFor="title" className="mr-5 text-lg">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full border rounded px-4 py-1"
          />
        </div>
        <div>
          <label htmlFor="code" className="mr-5 text-lg">
            Code
          </label>
          <textarea
            id="code"
            name="code"
            className="w-full px-4 py-1 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-200 w-full p-2 py-3 border rounded"
        >
          Add
        </button>
      </form>
    </>
  );
}
