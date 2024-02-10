export default function SnippetNotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-7 pt-20">
      <h1 className="font-bold text-4xl text-center text-red-500">Oops!</h1>
      <p className="text-lg text-red-400 text-center font-semibold tracking-wider">We could not find the snippet that you are looking for</p>
    </div>
  )
}