import { Snippet } from '@prisma/client';

interface Props {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: Props) {
  return <div>Editing: {snippet.title}</div>;
}
