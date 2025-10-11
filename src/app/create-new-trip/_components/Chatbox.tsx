"use client";

import { SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Chatbox = () => {
  const handleCreateTrip = () => {};

  return (
    <div className="flex flex-col h-[calc(100vh-180px)]">
      {/* display message */}
      <section className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-end mt-2">
          <div className="max-w-lg bg-primary/20 text-black px-4 py-2 rounded-lg">
            Use msg
          </div>
        </div>
        <div className="flex justify-start mt-2">
          <div className="max-w-lg bg-muted text-black px-4 py-2 rounded-lg">
            Ai msg
          </div>
        </div>
      </section>

      {/* chatbox */}
      <section>
        <div className="border rounded-2xl p-4 shadow relative">
          <Textarea
            placeholder="Start typing..."
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
      </section>
    </div>
  );
};

export default Chatbox;
