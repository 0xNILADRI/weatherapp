"use client";

import React, { useState, useEffect } from "react";

import Navbar from "./components/navbar";
import WeatherSection from "./components/hero";
import Footer from "./components/footer";

const Home: React.FC = () => {
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCity(data.city);
      } catch (error) {
        console.error("Error fetching city:", error);
      }
    };

    fetchCity();
  }, []);

  return (
    <main className="relative flex left-0 right-0 flex-col items-center ">
      <Navbar defaultCity={city} setCity={setCity}></Navbar>
      <WeatherSection defaultCity={city}></WeatherSection>
      <Footer></Footer>
    </main>
  );
};

export default Home;
