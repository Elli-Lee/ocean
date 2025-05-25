import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './AppTailwindCss';
import './index.css'; // Tailwind 설정 포함된 CSS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
