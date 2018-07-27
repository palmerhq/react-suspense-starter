import React from 'react';
import { unstable_createRoot as createRoot } from 'react-dom';

function App() {
  return <span className="big">hello</span>;
}

createRoot(window.app).render(<App />);
