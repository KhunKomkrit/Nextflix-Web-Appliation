import { useTranslations } from "next-intl";
import Image from "next/image";
import Header from "./components/layouts/Header";
import PlayButton from "./components/buttons/PlayButton";
import MoreInfoButton from "./components/buttons/MoreInfoButton";

export default function HomePage() {
  const t = useTranslations("AppName");
  return (
    <main className="text-white min-h-screen">
      <Header />
      <section
        className="relative h-screen flex items-start p-50 pl-10 bg-cover bg-center shadow-[inset_0_0_100px_70px_rgba(0,0,0,0.7)]"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg')",
        }}
      >
        <div>
          <h1 className="text-[4rem] font-extrabold leading-none tracking-tight uppercase drop-shadow-xl">
            Exterritorial
          </h1>
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
            <h4 className="text-2xl font-bold"> #1 in Movie Show Today</h4>
          </div>
          <article>
            <p className="mt-2 max-w-md text-sm  text-shadow-lg ">
              ภาพยนตร์เรื่องนี้ดัดแปลงมาจากเรื่องสั้นของสตีเฟน คิง เรื่อง Rita
              Hayworth and Shawshank Redemption เนื้อเรื่องพูดถึงแอนดี้ ดูเฟรนส์
              (ทิม รอบบินส์) อดีตผู้บริหารธนาคาร ซึ่งถูกจำคุกในเรือนจำชอว์แชงค์
              ด้วยข้อหาฆาตกรรมภรรยาและชายชู้ เมื่อเข้ามาอยู่ในชอว์แชงค์
              ดูเฟรนต์ได้สร้างมิตรภาพกับหมู่นักโทษและพวกพัสดีเรือนจำ
              ด้วยความฉลาดรอบรู้ในแง่ของกฎหมายทำให้ดูเฟรนต์ได้เป็นผู้ควบคุมดูแลกิจการงานฉ้อฉลที่พัศดีได้ดำเนินการภายในคุก
              การดำเนินเรื่องโดยผ่านมุมมองของเรด (มอร์แกน
              ฟรีแมน)นักโทษผู้เป็นเพื่อนสนิทของดูเฟรนส์
              ทำให้เห็นสภาพการดำเนินชีวิตในคุกชอว์แชงค์
              วิวัฒนาการของการดำเนินชีวิตในคุกของดูเฟรนส์
              การฉ้อฉลภายในคุกซึ่งดูเฟรนต์เป็นผู้ดูแลให้แก่พัสดี
              และการแหกคุกชอว์แชงค์ของดูเฟรนส์"
            </p>
          </article>
          <div className="mt-4 flex items-center gap-2">
            <PlayButton />
            <MoreInfoButton />
          </div>
        </div>
      </section>
    </main>
  );
}
