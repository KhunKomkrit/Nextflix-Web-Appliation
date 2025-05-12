"use client";

import { usePopularMovies } from "@hooks/queries/usePopularMovies";
import HeroSection from "./HeroSection";
import TopRankingTitle from "../typography/TopRankingTitle";
import PopularScroller from "../scroller/PopularScroller";
import { IMovieObject } from "@nextflix/shared/index";

export default function MovieSection() {
  const { data, isLoading, error } = usePopularMovies();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const movies = data?.results;
  const heroMovie = movies?.[0];

  return (
    <>
      {heroMovie && (
        <HeroSection
          title={heroMovie.title}
          overview={heroMovie.overview}
          bgImage={`${process.env.NEXT_PUBLIC_IMDB_IMG_URL}/t/p/original${heroMovie.backdrop_path}`}
          topRanking={<TopRankingTitle title="#1 in Movie Show Today" />}
        />
      )}
      {movies && (
        <PopularScroller
          movies={movies?.map((item: IMovieObject) => ({
            id: item.id,
            title: item.title,
            image: `${process.env.NEXT_PUBLIC_IMDB_IMG_URL}/t/p/w500/${item.poster_path}`,
          }))}
        />
      )}
    </>
  );
}
