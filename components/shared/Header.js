import Link from "next/link";

export default function Header({ title, subtitle, showBackButton = true }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg mb-8 text-white">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-white/80">{subtitle}</p>
      {showBackButton && (
        <Link href="/" className="inline-flex items-center text-white/90 hover:text-white mt-4 group">
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          <span className="ml-2">Tilbage til forsiden</span>
        </Link>
      )}
    </div>
  );
}
