"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type MovieCard = {
  id: number;
  title: string;
  image: string;
};
export default function PopularScroller({ movies }: { movies: MovieCard[] }) {
  return (
    <section className="mt-2 mx-auto absolute w-full bottom-0 left-0 right-0 pl-7 pb-5">
      <h2 className="text-xl font-bold text-white mb-2">Popular on Nextflix</h2>
      <Swiper slidesPerView={"auto"} spaceBetween={10} grabCursor={true} className="w-full">
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}  className="!w-auto">
            <div
              key={movie.id}
              className="relative min-w-[160px] h-[90px] md:min-w-[200px] md:h-[120px] rounded shadow-xl"
            >
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
