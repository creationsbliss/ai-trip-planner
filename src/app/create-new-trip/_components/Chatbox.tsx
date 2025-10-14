"use client";

import axios from "axios";
import { LoaderIcon, SendIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import BudgetUi from "./BudgetUi";
import EmptyBoxView from "./EmptyBoxView";
import FinalUi from "./FinalUi";
import GroupSizeUi from "./GroupSizeUi";
import SelectDays from "./SelectDay";

type messagesType = {
  role: string;
  content: string;
  ui?: string;
};

const Chatbox = () => {
  const [messages, setMessages] = useState<messagesType[]>([]);
  const [userInput, setUserInput] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTrip = async () => {
    if (!userInput?.trim()) return;

    setIsLoading(true);
    setUserInput("");

    const newMessage: messagesType = {
      role: "user",
      content: userInput,
    };

    setMessages((prev: messagesType[]) => [...prev, newMessage]);

    const result = await axios.post("/api/aimodel", {
      messages: [...messages, newMessage],
    });

    setMessages((prev: messagesType[]) => [
      ...prev,
      { role: "assistant", content: result?.data?.resp, ui: result?.data?.ui },
    ]);

    setIsLoading(false);
  };

  const renderGenerativeUi = (ui: string) => {
    if (ui === "budget") {
      // Budget ui component
      return (
        <BudgetUi
          onSelectedOption={(v: string) => {
            setUserInput(v);
            handleCreateTrip();
          }}
        />
      );
    } else if (ui === "groupSize") {
      // Group size component
      return (
        <GroupSizeUi
          onSelectedOption={(v: string) => {
            setUserInput(v);
            handleCreateTrip();
          }}
        />
      );
    } else if (ui === "tripDuration") {
      // Select day component
      return (
        <SelectDays
          onSelectedOption={(v: string) => {
            setUserInput(v);
            handleCreateTrip();
          }}
        />
      );
    } else if (ui === "final") {
      // Final ui component
      return <FinalUi viewTrip={() => console.log()} />;
    }
    return null;
  };

  return (
    <div className="flex flex-col h-[calc(100vh-180px)]">
      {/* display message */}
      {messages.length === 0 && (
        <EmptyBoxView
          onSelectedOption={(v: string) => {
            setUserInput(v);
            handleCreateTrip();
          }}
        />
      )}
      <section className="flex-1 overflow-y-auto p-4">
        {messages.map((message: messagesType, index) =>
          message.role === "user" ? (
            <div key={index} className="flex justify-end mt-2">
              <div className="max-w-lg bg-primary/20 text-black px-4 py-2 rounded-lg">
                {message.content}
              </div>
            </div>
          ) : (
            <div key={index} className="flex justify-start mt-2">
              <div className="max-w-lg bg-muted text-black px-4 py-2 rounded-lg">
                {message.content}
                {renderGenerativeUi(message.ui ?? "")}
              </div>
            </div>
          ),
        )}
        {isLoading && (
          <div className="flex justify-start mt-2">
            <div className="max-w-lg bg-muted text-black px-4 py-2 rounded-lg">
              <LoaderIcon className="animate-spin" />
            </div>
          </div>
        )}
      </section>
      <section>
        <div className="border rounded-2xl p-4 shadow relative">
          <Textarea
            placeholder="Start typing..."
            className="border-none w-full h-28 bg-transparent focus-visible:ring-0 shadow-none resize-none"
            onChange={(event) => setUserInput(event?.target.value)}
            value={userInput}
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
