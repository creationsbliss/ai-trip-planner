"use client";

import { useUser } from "@clerk/nextjs";
import {
  ArrowDownIcon,
  Globe2Icon,
  LandmarkIcon,
  PlaneIcon,
  SendIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { HeroVideoDialog } from "../ui/hero-video-dialog";
import { Textarea } from "../ui/textarea";

const suggestions = [
  {
    title: "Create new trip",
    icon: <Globe2Icon className="h-5 w-5 text-blue-400" />,
  },
  {
    title: "Inspire me where to go",
    icon: <PlaneIcon className="h-5 w-5 text-green-400" />,
  },
  {
    title: "Discover hidded gems",
    icon: <LandmarkIcon className="h-5 w-5 text-orange-400" />,
  },
  {
    title: "Adventure destination",
    icon: <Globe2Icon className="h-5 w-5 text-yellow-400" />,
  },
];

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();

  const handleCreateTrip = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }

    // Navigate to create new trip page
    router.push("/create-new-trip");
  };

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
            <Button
              size="icon"
              className="absolute bottom-6 right-6"
              onClick={handleCreateTrip}
            >
              <SendIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Suggetion */}
        <div className="flex gap-5">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.title}
              className="flex items-center border rounded-full gap-2 p-2 cursor-pointer hover:bg-primary hover:text-white"
            >
              {suggestion.icon}
              <span className="text-sm">{suggestion.title}</span>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="flex flex-col items-center">
          <h2 className="flex gap-2 mt-14 mb-6">
            Not sure where to start? <strong>See how it works.</strong>{" "}
            <ArrowDownIcon />
          </h2>
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="/maldives.mp4"
            thumbnailSrc="/hero-image.png"
            thumbnailAlt="Video Thumbnail"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
