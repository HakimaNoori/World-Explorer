import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>

      <Link href="/countries">Countries</Link>

      <Link href="/search">Search</Link>

      <Link href="/about">About</Link>
    </nav>
  );
}
