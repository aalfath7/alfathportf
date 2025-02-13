import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <nav className="flex justify-between py-4 px-10 shadow">
          <Link href="/">Alfath</Link>
          <div className="space-x-5">
            <Link href="/about">About</Link>
            <Link href="/contact">contact</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
