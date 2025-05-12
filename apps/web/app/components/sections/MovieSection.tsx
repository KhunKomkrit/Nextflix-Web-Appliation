"use client";

import { usePopularMovies } from "@hooks/queries/usePopularMovies";
import HeroSection from "./HeroSection";
import TopRankingTitle from "../typography/TopRankingTitle";
import PopularScroller from "../scroller/PopularScroller";
import { IMovieObject } from "@nextflix/shared/index";
import { useIsMobile } from "@hooks/checkscreen/useIsMobile";
import { useLocaleFromCookie } from "@hooks/language/useLocaleFromCookie";
import { useTranslations } from "next-intl";
import CenteredMessage from "../spinners/CenteredMessage";

export default function MovieSection() {
  const isMobile = useIsMobile();
  const locale = useLocaleFromCookie();
  const { data, isLoading, error } = usePopularMovies(1, locale);
  const t = useTranslations("TitleTopRanking");
  const tLabel = useTranslations();
  
  if (isLoading) return <CenteredMessage>{tLabel('Loadding')} ...</CenteredMessage>;
  if (error) return <CenteredMessage>{tLabel('Error')}: {error.message}</CenteredMessage>;

  const movies = data?.results;
  const heroMovie = movies?.[0];

  return (
    <>
      {heroMovie && (
        <HeroSection
          title={heroMovie.title}
          overview={heroMovie.overview}
          bgImage={`${process.env.NEXT_PUBLIC_IMDB_IMG_URL}/t/p/original${heroMovie.backdrop_path}`}
          topRanking={<TopRankingTitle title={t('top10Movie')} />}
        />
      )}
      {movies && (
        <PopularScroller
          movies={movies?.map((item: IMovieObject) => ({
            id: item.id,
            title: item.title,
            image: `${process.env.NEXT_PUBLIC_IMDB_IMG_URL}/t/p/w500/${isMobile ? item.poster_path : item.backdrop_path}`,
          }))}
        />
      )}
    </>
  );
}
