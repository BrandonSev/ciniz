import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

export default function Home({ movies }) {
  const [movie, setMovie] = useState();
  useEffect(() => {
    setMovie(movies.results[Math.floor(Math.random() * movies.results.length)]);
  }, [movies]);

  return (
    <div>
      <Head>
        <title>Ciniz - Movie App</title>
        <meta
          name="description"
          content="Ciniz is app to references all movie and series of world"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header movies={movies} />
      <main className="container mx-auto">
        <section>
          <h2 className="text-2xl lg:text-2xl py-4">Tendances</h2>
          <div className="lg:flex gap-8">
            <MovieCard
              movie={movie}
              className={
                "relative lg:min-h-[532px] h-[400px] max-w-full w-full rounded-lg overflow-hidden overlay lg:w-2/3"
              }
            />
            <div className="grid lg:grid-cols-2 lg:grid-rows-[_250px] grid-rows-[repeat(3,_250px)] w-full place-items-stretch gap-8">
              <MovieCard
                movie={movies.results[7]}
                className={
                  "relative min-h-full min-w-full w-full rounded-lg overflow-hidden h-fit overlay"
                }
              />
              <MovieCard
                movie={movies.results[9]}
                className={
                  "relative min-h-full min-w-full w-full rounded-lg overflow-hidden h-fit overlay"
                }
              />
              <MovieCard
                movie={movies.results[2]}
                className={
                  "relative min-h-full min-w-full w-full rounded-lg overflow-hidden h-fit overlay grid-col-span"
                }
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=fr`
  );
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
