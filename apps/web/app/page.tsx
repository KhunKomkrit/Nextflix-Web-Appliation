import Header from "./components/layouts/Header";
import PopularScroller from "./components/scroller/PopularScroller";
import HeroSection from "./components/sections/HeroSection";
import TopRankingTitle from "./components/typography/TopRankingTitle";

export default function HomePage() {
  return (
    <main className="text-white min-h-screen">
      <Header />
      <HeroSection
        title={"Exterritorial"}
        overview="When her son vanishes inside a US consulate, ex-special forces soldier Sara does everything in her power to find him — and uncovers a dark conspiracy."
        bgImage={
          "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
        }
        topRankink={<TopRankingTitle title="#1 in Movie Show Today" />}
      />
      <PopularScroller
        movies={[
          {
            id: 1,
            title: "Locke & Key",
            image:
              "https://image.tmdb.org/t/p/w500/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
          },
          {
            id: 2,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
          },
          {
            id: 3,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/j8tqBXwH2PxBPzbtO19BTF9Ukbf.jpg",
          },
          {
            id: 4,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg",
          },
          {
            id: 5,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/tbJ3RkA2s6X5qrBzrYHYTxvDBui.jpg",
          },
          {
            id: 6,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/iPPTGh2OXuIv6d7cwuoPkw8govp.jpg",
          },
          {
            id: 7,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/r46leE6PSzLR3pnVzaxx5Q30yUF.jpg",
          },
          {
            id: 8,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/bTvHlcqiOjGa3lFtbrTLTM3zasY.jpg",
          },
          {
            id: 9,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
          },
          {
            id: 10,
            title: "Jojo",
            image:
              "https://image.tmdb.org/t/p/w500/qycPITRqXgPai7zj1gKffjCdSB5.jpg",
          },
        ]}
      />
          <HeroSection
        title={"Gute Zeiten, schlechte Zeiten"}
        overview="Gute Zeiten, schlechte Zeiten is a long-running German television soap opera, first broadcast on RTL in 1992. The programme concerns the lives of a fictional neighborhood in Germany's capital city Berlin. Over the years the soap opera tends to have an overhaul of young people in their late teens and early twenties; targeting a young viewership."
        bgImage={
          "https://image.tmdb.org/t/p/original/qujVFLAlBnPU9mZElV4NZgL8iXT.jpg"
        }
        topRankink={<TopRankingTitle title="#1 in TV Show Today" />}
      />
    </main>
  );
}
