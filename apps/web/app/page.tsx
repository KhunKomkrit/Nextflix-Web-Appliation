
import Header from "./components/layouts/Header";
import MovieSection from "./components/sections/MovieSection";

export default function HomePage() {  
  return (
    <main className="text-white min-h-screen">
      <Header />
      <MovieSection/>
    </main>
  );
}
