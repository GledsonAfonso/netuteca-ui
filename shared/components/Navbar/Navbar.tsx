import bookLogo from "@public/book.svg";
import "@shared/components/Navbar/styles.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link href="/" className="site-title">
        <Image
          src={bookLogo}
          alt={"Logo"}
          width={40}
          height={40}
          className="logo-container-navbar"
        />
        Netuteca
      </Link>

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
