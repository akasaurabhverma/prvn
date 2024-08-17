import Link from "next/link";

export default function Home() {
  return (
    <main className="container max-w-screen-lg m-auto">
      <h1 className="text-4xl">first page</h1>
      <Link href="/profile-list">
        <span className="text-blue-500">Go to second page</span>
      </Link>
    </main>
  );
}
