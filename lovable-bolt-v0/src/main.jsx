// Same shape as a Lovable or Bolt export: Vite, React and client side routing.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Vite SPA on run.zero</h1>
      <p>Built with vite build at image build time, served with serve -s so deep links work.</p>
      <p><Link to="/about">Open /about</Link></p>
    </main>
  );
}

function About() {
  return (
    <main>
      <h1>About</h1>
      <p>This route only exists in the browser. Reload it: the server falls back to index.html.</p>
      <p><Link to="/">Back</Link></p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
