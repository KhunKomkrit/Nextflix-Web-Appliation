import { useTranslations } from "next-intl";
import Image from "next/image";
import Header from "./components/layouts/Header";

export default function HomePage() {

  const t = useTranslations('AppName');
  return (
    <main className="text-white min-h-screen">
      <Header/>
      <section
        className="relative h-screen flex items-start p-50 bg-cover bg-center shadow-[inset_0_0_100px_70px_rgba(0,0,0,0.7)]"
        style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg')" }}
      >
        <div>
          <h2 className="text-4xl font-bold">The Shawshank Redemption</h2>
          <p className="mt-2 max-w-md text-sm text-gray-300">
          ภาพยนตร์เรื่องนี้ดัดแปลงมาจากเรื่องสั้นของสตีเฟน คิง เรื่อง Rita Hayworth and Shawshank Redemption เนื้อเรื่องพูดถึงแอนดี้ ดูเฟรนส์ (ทิม รอบบินส์) อดีตผู้บริหารธนาคาร ซึ่งถูกจำคุกในเรือนจำชอว์แชงค์ ด้วยข้อหาฆาตกรรมภรรยาและชายชู้ เมื่อเข้ามาอยู่ในชอว์แชงค์ ดูเฟรนต์ได้สร้างมิตรภาพกับหมู่นักโทษและพวกพัสดีเรือนจำ ด้วยความฉลาดรอบรู้ในแง่ของกฎหมายทำให้ดูเฟรนต์ได้เป็นผู้ควบคุมดูแลกิจการงานฉ้อฉลที่พัศดีได้ดำเนินการภายในคุก การดำเนินเรื่องโดยผ่านมุมมองของเรด (มอร์แกน ฟรีแมน)นักโทษผู้เป็นเพื่อนสนิทของดูเฟรนส์ ทำให้เห็นสภาพการดำเนินชีวิตในคุกชอว์แชงค์ วิวัฒนาการของการดำเนินชีวิตในคุกของดูเฟรนส์ การฉ้อฉลภายในคุกซึ่งดูเฟรนต์เป็นผู้ดูแลให้แก่พัสดี และการแหกคุกชอว์แชงค์ของดูเฟรนส์"
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-white text-black px-4 py-2 rounded">
              Play
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded">
              More Info
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
