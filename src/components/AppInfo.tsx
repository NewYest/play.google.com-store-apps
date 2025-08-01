import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppInfo = () => {
  return (
    <div className="bg-card p-4 space-y-6">
      {/* App Info Section */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Info. de la app</h3>
          <p className="text-muted-foreground">¡Diviértete con llamadas anónimas!</p>
        </div>
        <ChevronRight className="w-5 h-5 text-muted-foreground" />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="rounded-full">
          Social
        </Button>
        <Button variant="outline" size="sm" className="rounded-full">
          Citas
        </Button>
      </div>
    </div>
  );
};

export default AppInfo;