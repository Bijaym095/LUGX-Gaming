const MostPlayedGames = () => {
  return (
    <section className="bg-lx-gray rounded-[5rem] mt-10">
        <div className="container py-8 md:py-14">
            <header className="flex justify-between items-center gap-6 mb-6">
                <div>
                    <small className="block font-bold text-[0.875rem] text-primary uppercase">TOP GAMES</small>
                    <h2>Most Played</h2>
                </div>
                <div>
                    <a href="/" role="button" className="btn btn-primary">VIEW ALL</a>
                </div>
            </header>
        </div>
    </section>
  )
}

export default MostPlayedGames;