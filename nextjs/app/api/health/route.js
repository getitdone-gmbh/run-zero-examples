export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ status: 'ok', runtime: `node ${process.version}`, platform: 'run.zero' });
}
