import Hero from "@/components/hero/Hero";
import { PopularCityList } from "@/components/popular-city-list/popular-city-list";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCityList />
    </div>
  );
}
