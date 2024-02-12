'use client';

import { useFormState } from 'react-dom';
import { addNewSnippet } from '@/actions';

export default function NewSnippetPage() {
  const [formState, action] = useFormState(addNewSnippet, {
    message: '',
  });

  return (
    <>
      <h1 className="text-4xl font-semibold tracking-wider mb-12">
        Add a new snippet
      </h1>
      
      <div className={`bg-red-100 p-3 text-red-700 mb-12 rounded ${!formState.message && 'hidden'}`}>{formState.message}</div>

      <form action={action} className="flex flex-col gap-5">
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
