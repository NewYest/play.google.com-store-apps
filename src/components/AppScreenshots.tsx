const AppScreenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "¡Diviértete con las conversaciones en videollamada!",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 2, 
      title: "La forma más divertida de conocer personas en línea.",
      gradient: "from-red-600 to-orange-500"
    },
    {
      id: 3,
      title: "Comienza llamando a alguien aleatoriamente. Serás anónimo",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      id: 4,
      title: "30 Segundos después conversa a el video",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="bg-card p-4">
      <div className="flex gap-3 overflow-x-auto pb-2">
        {screenshots.map((screenshot) => (
          <div
            key={screenshot.id}
            className="flex-shrink-0 w-48 h-80 rounded-2xl relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient}`}>
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-black/20 text-white text-xs p-2 rounded">
                  {screenshot.title}
                </div>
              </div>
              
              {/* Mock phone interface elements */}
              <div className="absolute bottom-20 left-4 right-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="w-full h-8 bg-white/30 rounded mb-2"></div>
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                    <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                    <div className="w-12 h-12 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Timer indicator */}
              <div className="absolute top-16 left-4 bg-black/30 text-white text-xs px-2 py-1 rounded">
                3:21
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;