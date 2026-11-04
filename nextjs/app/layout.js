export const metadata = { title: 'Next.js on run.zero' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '64px auto', padding: '0 24px' }}>{children}</body>
    </html>
  );
}
