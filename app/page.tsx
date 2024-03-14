import Navbar from "./components/navbar";
import WeatherSection from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative flex left-0 right-0 flex-col items-center ">
      <Navbar></Navbar>
      <WeatherSection></WeatherSection>
      <Footer></Footer>
    </main>
  );
}
