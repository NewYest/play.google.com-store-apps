import TopBar from "@/components/TopBar";
import AppHeader from "@/components/AppHeader";
import AppScreenshots from "@/components/AppScreenshots";
import AppInfo from "@/components/AppInfo";
import DataSafety from "@/components/DataSafety";
import RatingsReviews from "@/components/RatingsReviews";
import AppSupport from "@/components/AppSupport";
import SimilarApps from "@/components/SimilarApps";
import BetaProgram from "@/components/BetaProgram";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto bg-card">
        <TopBar />
        
        <div className="space-y-4 pb-20">
          <AppHeader />
          <AppScreenshots />
          <AppInfo />
          <DataSafety />
          <RatingsReviews />
          <AppSupport />
          <SimilarApps />
          
          <div className="px-4">
            <BetaProgram />
          </div>
          
          <div className="px-4 py-4">
            <p className="text-xs text-muted-foreground">Todos los precios incluyen IVA</p>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Index;
