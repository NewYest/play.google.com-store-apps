const AppScreenshots = () => {
  const screenshots = [
    {
      id: 1,
      title: "¡Diviértete con las conversaciones en videollamada!",
      gradient: "from-red-500 to-pink-500",
      image: "https://play-lh.googleusercontent.com/CtBtrPqXPUL_lNMbMTUqjjMkysBrNZJ6aq1cfO7s-Mxw-k8nePcPKYVzK9g-yCoc8g=w5120-h2880-rw"
    },
    {
      id: 2, 
      title: "La forma más divertida de conocer personas en línea.",
      gradient: "from-red-600 to-orange-500",
      image: "https://play-lh.googleusercontent.com/HJp0jM2q2gHmd989CzjJJ9piUXySJg2LjL3a5M923ylp9gUBr70TzMpNGIZLn6D5RCLS=w5120-h2880-rw"
    },
    {
      id: 3,
      title: "Comienza llamando a alguien aleatoriamente. Serás anónimo",
      gradient: "from-purple-600 to-pink-500",
      image: "https://play-lh.googleusercontent.com/BbiePtdhwc_60XhbzZA3VahmGH2GRZWl_SETSNIimNmwGu2cmUIcdg-VUpHJVu2ApQ=w5120-h2880-rw"
    },
    {
      id: 4,
      title: "30 Segundos después conversa a el video",
      gradient: "from-orange-500 to-red-500",
      image: "https://play-lh.googleusercontent.com/DMhrjVa_RXa6ECC9z-jLuB0OM_x-AU4_gH4RZqwWT5sqBRS9Sy500U12LYSyiKjeSg=w5120-h2880-rw"
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
              
              {/* Screenshot image */}
              <img 
                src={screenshot.image} 
                alt={screenshot.title} 
                className="absolute bottom-20 left-4 right-4 rounded-lg object-cover w-auto h-48 mx-auto"
              />
              
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
