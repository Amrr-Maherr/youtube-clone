export default function AuthorInfo({ name, publishedAt, text }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <p className="font-medium text-white">{name}</p>
        <span className="text-gray-400 text-xs">{publishedAt}</span>
      </div>
      <p className="text-white text-sm mt-1">{text}</p>
    </div>
  );
}
