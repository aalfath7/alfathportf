import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between py-4 px-10 shadow">
        <Link href="/">Alfath</Link>
        <div className="space-x-5">
          <Link href="/about">About</Link>
          <Link href="/contact">contact</Link>
        </div>
      </nav>
      <div className="p-10">Welcome</div>
    </div>
  );
}
