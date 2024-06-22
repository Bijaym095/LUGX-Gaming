import GamesCard from "@/components/GamesCard";
import { trendingGames } from "@/data";

const TrendingGames = () => {
  return (
    <section className="container py-8 md:py-14">
      <header className="flex justify-between items-center gap-6 mb-6">
        <div>
          <small className="block font-bold text-[0.875rem] text-primary uppercase">TRENDING</small>
          <h2>Trending Games</h2>
        </div>
        <div>
          <a href="#" role="button" className="btn btn-primary">
            View All
          </a>
        </div>
      </header>

      <div className="flex flex-wrap justify-center gap-y-6 -mx-3">
        {trendingGames.map((game, index) => (
          <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-3" key={index}>
            <GamesCard game={game}/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;

