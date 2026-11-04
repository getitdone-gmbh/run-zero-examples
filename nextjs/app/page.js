// Rendered on the server for every request, so the time shows that SSR runs on run.zero.
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <h1>Next.js on run.zero</h1>
      <p>Server-rendered at {new Date().toISOString()} by next start.</p>
      <p><a href="/api/health">/api/health</a></p>
    </main>
  );
}
