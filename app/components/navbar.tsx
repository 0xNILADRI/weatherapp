"use client";

import { useState, useEffect, useRef } from "react";
import { fetchWeather } from "@/utils/fetchWeather";

import { MdMyLocation } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import Loader from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  sendDataToParent: any;
}

const Navbar: React.FC<NavbarProps> = ({ sendDataToParent }) => {
  const [inputCity, setInputCity] = useState("*");
  const inputRef = useRef<HTMLInputElement>(null);
  const [tempValue, setTempValue] = useState("");
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (inputCity == "*") {
          const res = await fetch("https://ipapi.co/json/");
          const d = await res.json();
          setInputCity(d.city);
          const data = await fetchWeather(d.city);
        } else {
          const data = await fetchWeather(inputCity);
          setWeatherData(data);
          sendDataToParent(data);
        }
      } catch (error) {
        console.error("Error fetching weather data");
      }
    };

    fetchData();
  }, [inputCity]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(e.target.value);
    setInputCity(tempValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputCity(tempValue);
    if (inputRef.current) {
      setInputCity(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      {weatherData ? (
        <nav className="flex max-w-4xl left-0 right-0 flex-row items-center justify-between p-4 navbar">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="pl-0">
                <MdMyLocation color="#FFF" className="nav-loc" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] location-box">
              <DialogHeader>
                <DialogTitle>Edit to change location</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      ref={inputRef}
                      id="name"
                      type="text"
                      className="col-span-4"
                      placeholder="enter city name"
                    />
                  </div>
                </div>
                <DialogTrigger type="submit" className="loc-button">
                  Submit
                </DialogTrigger>
              </form>
            </DialogContent>
          </Dialog>
          <div className="cur-loc opacity-90">{weatherData[0].name}</div>
          <MdOutlineSettings color="#FFF" className="nav-settings" />
        </nav>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};
export default Navbar;
