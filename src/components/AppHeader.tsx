import { Star, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
const AppHeader = () => {
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
      <Button className="w-full h-12 bg-primary hover:bg-primary/90 rounded-full text-base font-medium">
        Instalar
      </Button>
      
      <p className="text-xs text-muted-foreground text-center">
        Instalar en teléfono. Más dispositivos disponibles.
      </p>
    </div>;
};
export default AppHeader;