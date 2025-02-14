import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url('/images/bg.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <nav className="glass relative z-10 bg-white flex justify-between py-4 px-10 shadow">
          <Link href="/" className="font-bold">
            Alfath
          </Link>
          <div className="space-x-5">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
