import { Globe2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalUi = ({ viewTrip }: any) => {
  return (
    <div className="flex flex-col items-center mt-2 p-4 border rounded-2xl bg-white">
      <Globe2Icon className="text-primary text-4xl animate-bounce" />
      <h2 className="mt-3 text-lg font-semibold text-primary">
        Planning your dream trip...
      </h2>
      <p className="text-muted-foreground text-sm text-center mt-1">
        Gathering best destinations, and travel details for you.
      </p>
      <Button disabled onClick={viewTrip} className="mt-2 w-full">
        View Trip
      </Button>
      {/* <div className="w-48 h-2 bg-gray-200 rounded-full mt-4 overflow-hidden">
        <div className="h-2 bg-primary animate-pulse w-3/4"></div>
      </div> */}
    </div>
  );
};

export default FinalUi;
