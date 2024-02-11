'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Snippet } from '@prisma/client';
import { editSnippet } from '@/actions';

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  const [currentCode, setCurrentCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);

  const handleChange = (code: string = '') => {
    setCurrentCode(code);
  };

  const editSnippetAction = editSnippet.bind(null, {
    id: snippet.id,
    title,
    code: currentCode,
  });

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between gap-5 items-center">
        <div className="flex gap-5 items-center w-full">
          <p className="font-bold text-2xl">Editing:</p>
          <input
            placeholder="Title"
            className="text-lg border rounded p-3 w-full"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>

        <form action={editSnippetAction}>
          <button
            type="submit"
            className="border border-teal-500 text-teal-500 font-bold py-2 px-4 hover:bg-teal-500 hover:text-white transition-all"
          >
            Done
          </button>
        </form>
      </div>

      <Editor
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        height="50vh"
        theme="vs-dark"
        options={{ minimap: { enabled: false } }}
        onChange={handleChange}
        value={currentCode}
      />
    </div>
  );
}
