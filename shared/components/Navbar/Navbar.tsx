import Link from "next/link";
import "@shared/components/Navbar/styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">Netuteca</Link>

      <ul className="routes">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/books">Books</Link>
        </li>
      </ul>
    </nav>
  );
}
