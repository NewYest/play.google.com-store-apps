import { ArrowLeft, Share, MoreVertical, Wifi, Signal, Battery } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-card p-4 pb-2">
      {/* Status Bar */}
      <div className="flex items-center justify-between text-xs mb-4">
        <span className="font-medium">20:55</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-foreground rounded-full"></div>
            <div className="w-1 h-1 bg-muted rounded-full"></div>
          </div>
          <Wifi className="w-4 h-4" />
          <Signal className="w-4 h-4" />
          <span>62%</span>
          <Battery className="w-4 h-4" />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between">
        <ArrowLeft className="w-6 h-6" />
        <div className="flex gap-4">
          <Share className="w-6 h-6" />
          <MoreVertical className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;