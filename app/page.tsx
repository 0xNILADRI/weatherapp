"use client";

import React, { useState } from "react";

import Navbar from "./components/navbar";
import WeatherSection from "./components/hero";
import Footer from "./components/footer";
import { fetchWeather } from "@/utils/fetchWeather";

const Home: React.FC = () => {
  const [city, setCity] = useState("Bangalore");

  return (
    <main className="relative flex left-0 right-0 flex-col items-center ">
      <Navbar defaultCity={city} setCity={setCity}></Navbar>
      <WeatherSection defaultCity={city}></WeatherSection>
      <Footer></Footer>
    </main>
  );
};

export default Home;
