import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HomePage() {

  const t = useTranslations('AppName');
  return (
    <main className="bg-black text-white min-h-screen">
      <header className="flex justify-between items-center px-6 py-4 bg-gray-900">
        <h1 className="text-xl font-bold">My Netflix Clone {t('title')}</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TV Shows
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Movies
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section
        className="relative h-[60vh] flex items-end p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      >
        <div>
          <h2 className="text-4xl font-bold">Devil in Ohio</h2>
          <p className="mt-2 max-w-md text-sm text-gray-300">
            A psychiatrist shelters a young girl who escaped a cult...
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

      <section className="p-6">
        <h3 className="text-2xl mb-4">Popular on Netflix</h3>
        {/* movie cards here */}
      </section>

      <footer className="text-center text-sm text-gray-500 py-4 mt-10">
        © 2025 My Netflix Clone
      </footer>
    </main>
  );
}
