'use client';

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Snippet } from '@prisma/client';

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  const [currentCode, setCurrentCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);

  const handleChange = (code: string = '') => {
    setCurrentCode(code);
  };

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
        <button className="border border-teal-500 text-teal-500 font-bold py-2 px-4 hover:bg-teal-500 hover:text-white transition-all">
          Done
        </button>
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
