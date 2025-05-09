import Image from "next/image";

type TopRankingProps = {
    title: string
}

export default function TopRankingTitle(props: TopRankingProps) {
    return (
        <div className="flex items-center gap-1">
        <div className="h-[2em] w-auto relative aspect-square">
          <Image
            src="/img-top/top10-red-transparent.png"
            alt={"top10"}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <h4 className="text-2xl font-bold">{props.title}</h4>
      </div>
    );
}