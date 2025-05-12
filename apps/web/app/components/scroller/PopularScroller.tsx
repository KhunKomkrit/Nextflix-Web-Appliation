"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useTranslations } from "next-intl";

type MovieCard = {
  id: number;
  title: string;
  image: string;
};
export default function PopularScroller({ movies }: { movies: MovieCard[] }) {
  const t = useTranslations();
  return (
    <section className="mt-2 mx-auto absolute w-full bottom-0 left-0 right-0 pl-7 pb-5">
      <h2 className="text-xl font-bold text-white mb-2">{t('PopularOnNextFlix')}</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} grabCursor={true} className="w-full">
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}  className="!w-auto flex-shrink-0">
            <div
              key={movie.id}
              className="relative min-w-[160px] md:min-w-[200px] aspect-[2/3] md:aspect-[16/9] rounded overflow-hidden shadow-lg"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                sizes="(min-width: 500px) 200px, 160px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
