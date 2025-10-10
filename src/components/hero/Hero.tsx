import { SendIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const Hero = () => {
  return (
    <div className="mt-24 flex justify-center w-full">
      {/* Content */}
      <div className="max-w-3xl w-full text-center flex flex-col gap-y-6">
        <h2 className="font-bold text-xl md:text-5xl">
          Hi, I&apos;m your Personal
          <span className="text-primary"> Trip Planner</span>
        </h2>
        <p className="text-lg">
          Share your travel wishes and I&apos;ll handle the rest: Flights,
          Hotels, Trip Planning - all in seconds{" "}
        </p>

        {/* Input */}
        <div>
          <div className="border rounded-2xl p-4 shadow relative">
            <Textarea
              placeholder="Create a trip for Maldives from Dhaka"
              className="border-none w-full h-28 bg-transparent focus-visible:ring-0 shadow-none resize-none"
            />
            <Button size="icon" className="absolute bottom-6 right-6">
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Suggetion */}

        {/* Video */}
      </div>
    </div>
  );
};

export default Hero;
