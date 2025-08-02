import { Button } from "@/components/ui/button";

const BetaProgram = () => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg space-y-3">
      <div className="flex items-start gap-3">
        <div className="text-2xl">🧪</div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-2">Únete al programa beta</h3>
          <p className="text-xs text-muted-foreground mb-4">
            Prueba funciones nuevas antes de su lanzamiento oficial y envía tus comentarios al desarrollador. Se recogerán algunos datos sobre el uso que hagas de la aplicación y se compartirán con el desarrollador para ayudar a mejorarla.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-primary border-primary">
              Unirme
            </Button>
            <Button variant="ghost" size="sm" className="text-primary">
              Más información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaProgram;
