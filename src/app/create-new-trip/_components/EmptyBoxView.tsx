import { suggestions } from "@/components/hero/Hero";

const EmptyBoxView = ({ onSelectOption }: any) => {
  return (
    <div className="mt-7">
      <h2 className="text-center text-xl font-semibold">
        Plan your next <span className="text-primary">trip</span> easily with Ai
      </h2>
      <p className="text-muted-foreground mt-2 text-center">
        Discover custom travel plans, explore top destinations, and design your
        dream vacation effortlessly with AI. Let our smart assistant handle the
        details while you focus on enjoying the adventure.
      </p>

      {/* Suggetion */}
      <div className="flex flex-col gap-5 mt-8">
        {suggestions.map((suggestion) => (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelectOption(suggestion.title);
              }
            }}
            key={suggestion.title}
            className="flex items-center border rounded-xl gap-2 p-2 cursor-pointer hover:border-primary hover:text-primary"
            onClick={() => onSelectOption(suggestion.title)}
          >
            {suggestion.icon}
            <span className="text-sm">{suggestion.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmptyBoxView;
