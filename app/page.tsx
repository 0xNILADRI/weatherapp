"use client";

import React, { useState } from "react";

import Navbar from "./components/navbar";
import WeatherSection from "./components/hero";
import Footer from "./components/footer";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState(null);

  const receiveDataFromChild = (data: any) => {
    setWeatherData(data);
  };

  return (
    <main className="relative flex left-0 right-0 flex-col items-center ">
      <Navbar sendDataToParent={receiveDataFromChild}></Navbar>
      <WeatherSection dataFromParent={weatherData}></WeatherSection>
      <Footer></Footer>
    </main>
  );
};

export default Home;
