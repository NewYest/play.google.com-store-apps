import { Share2, Shield, Lock, Trash2, ChevronRight } from "lucide-react";

const DataSafety = () => {
  const safetyItems = [
    {
      icon: Share2,
      title: "Puede que esta aplicación comparta estos tipos de datos con terceros",
      subtitle: "Información personal e información financiera"
    },
    {
      icon: Shield,
      title: "Esta aplicación puede recoger estos tipos de datos",
      subtitle: "Información personal"
    },
    {
      icon: Lock,
      title: "Los datos están cifrados durante el tránsito",
      subtitle: ""
    },
    {
      icon: Trash2,
      title: "Eliminación de cuentas disponible",
      subtitle: "Puedes solicitar que se eliminen los datos recogidos."
    }
  ];

  return (
    <div className="bg-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Seguridad de los datos</h3>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>
      
      <p className="text-sm text-muted-foreground">
        La seguridad empieza por entender cómo recogen y comparten tus datos los desarrolladores. Las prácticas de privacidad y seguridad de los datos pueden variar en función de tu uso de la aplicación, el territorio donde la uses y tu edad. El desarrollador ha proporcionado esta información y puede actualizarla con el tiempo.
      </p>

      <div className="space-y-4">
        {safetyItems.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.title}</p>
              {item.subtitle && (
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-primary text-sm font-medium">Ver detalles</p>
    </div>
  );
};

export default DataSafety;