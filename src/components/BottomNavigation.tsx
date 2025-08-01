import { Gamepad2, Grid3X3, Search, Book } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Gamepad2, label: "Juegos", active: false },
    { icon: Grid3X3, label: "Aplicaciones", active: false },
    { icon: Search, label: "Buscar", active: true },
    { icon: Book, label: "Libros", active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center py-2 px-4 ${
              item.active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item.active ? (
              <div className="p-2 bg-primary/10 rounded-full">
                <item.icon className="w-5 h-5" />
              </div>
            ) : (
              <item.icon className="w-5 h-5" />
            )}
            <span className="text-xs mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;