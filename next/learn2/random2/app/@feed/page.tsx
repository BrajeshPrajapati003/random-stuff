import Link from 'next/link'

const posts = [
  { id: 1, title: "React Compiler is now Live", summary: "Big performance improvements in React 19." },
  { id: 2, title: "Next.js 16 Released", summary: "App Router enhancements and faster builds." },
  { id: 3, title: "Tailwind v4 Preview", summary: "Future of utility-first CSS." },
];

export default function Feed() {
  return (
    <div>
      <h2 className="text-xl font-bold text-blue-600 mb-4">📰 Feed</h2>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="p-3 border rounded-lg hover:bg-gray-50">
            <Link href={`/feed/${post.id}`}>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}