import { Star, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
const AppHeader = () => {
  const [buttonState, setButtonState] = useState<'install' | 'installing' | 'open'>('install');
  const [progress, setProgress] = useState(0);

  const handleInstall = () => {
    if (buttonState === 'install') {
      setButtonState('installing');
      setProgress(0);
      
      // Анимация прогресса в течение 25 секунд
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setButtonState('open');
            return 100;
          }
          return prev + 4; // 100% / 25 сек = 4% в секунду
        });
      }, 1000);
    } else if (buttonState === 'open') {
      // Открываем ссылку в новом окне
      window.open('https://llqrbo.sweets4datings.com/?utm_source=da57dc555e50572d&ban=other&j1=1&s1=220791&s2=2027339', '_blank');
    }
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