import { Star, ChevronRight } from "lucide-react";

const SimilarApps = () => {
  const similarApps = [
    {
      name: "Calling Me - chat de vídeo",
      rating: 4.7,
      icon: "🔥",
      bgColor: "bg-black"
    },
    {
      name: "Chatspin: Chat vídeo Al Azar",
      rating: 4.5,
      icon: "🌀",
      bgColor: "bg-yellow-400"
    },
    {
      name: "Vegoo - chat en vivo en línea",
      rating: 4.5,
      icon: "😊",
      bgColor: "bg-purple-500"
    },
    {
      name: "Vollo Video Chat",
      rating: 4.2,
      icon: "📱",
      bgColor: "bg-blue-500"
    }
  ];

  const relatedApps = [
    {
      name: "Cafe - Video Chat en Vivo",
      category: "Citas • Comunicación",
      rating: 4.5,
      size: "169 MB",
      bgColor: "bg-pink-500",
      icon: "Café"
    },
    {
      name: "Litgo - Chat de video en línea",
      category: "Entretenimiento",
      rating: 3.5,
      size: "33 MB",
      bgColor: "bg-purple-600",
      icon: "👥"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Similar Apps */}
      <div className="bg-card p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Aplicaciones similares</h3>
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-2">
          {similarApps.map((app, index) => (
            <div key={index} className="flex-shrink-0 w-20 text-center">
              <div className={`w-16 h-16 ${app.bgColor} rounded-2xl flex items-center justify-center text-white text-2xl mb-2`}>
                {app.icon}
              </div>
              <p className="text-xs font-medium line-clamp-2 mb-1">{app.name}</p>
              <div className="flex items-center justify-center gap-1">
                <span className="text-xs">{app.rating}</span>
                <Star className="w-3 h-3 fill-app-star text-app-star" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Apps */}
      <div className="bg-card p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Patrocinado</p>
            <h3 className="font-semibold">Relacionado con esta aplicación</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          {relatedApps.map((app, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-12 h-12 ${app.bgColor} rounded-xl flex items-center justify-center text-white font-bold`}>
                {app.icon}
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">{app.name}</p>
                <p className="text-xs text-muted-foreground">{app.category}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs">{app.rating}</span>
                    <Star className="w-3 h-3 fill-app-star text-app-star" />
                  </div>
                  <span className="text-xs text-muted-foreground">{app.size}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarApps;