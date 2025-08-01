import { ChevronDown } from "lucide-react";

const AppSupport = () => {
  return (
    <div className="bg-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Asistencia de la aplicación</h3>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </div>
  );
};

export default AppSupport;