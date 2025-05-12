

import PlayButton from "../buttons/PlayButton";
import MoreInfoButton from "../buttons/MoreInfoButton";

type HeroProps = { 
    title: string;
    overview: string;
    bgImage: string;
    topRanking?: React.ReactNode
}

export default function HeroSection(props: HeroProps) {
    return (
        <section
        className="relative h-screen flex items-start p-50 pl-10 bg-cover bg-center shadow-[inset_0_0_100px_70px_rgba(0,0,0,0.7)]"
        style={{
          backgroundImage:
            `url(${props.bgImage})`,
        }}
      >
        <div>
          <h1 className="text-[4rem] font-extrabold leading-none tracking-tight uppercase drop-shadow-xl">
            {props.title}
          </h1>
         {props.topRanking}
          <article>
            <p className="mt-2 max-w-md text-sm  text-shadow-lg ">
             {props.overview}
            </p>
          </article>
          <div className="mt-4 flex items-center gap-2">
            <PlayButton />
            <MoreInfoButton />
          </div>
        </div>
      </section>
    );
}