"use client";

import { useState } from "react";
import { fetchWeather } from "@/utils/fetchWeather";
import Hero from "@/app/components/hero";

import { MdMyLocation } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  defaultCity: string;
  setCity: (city: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ defaultCity, setCity }) => {
  const [inputCity, setInputCity] = useState("Bangalore");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity(inputCity);
  };

  return (
    <>
      <nav className="flex max-w-6xl left-0 right-0 flex-row items-center justify-between p-4 navbar">
        <Drawer>
          <DrawerTrigger asChild>
            <Button>
              <MdMyLocation color="#FFF" className="nav-loc" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Change Location</DrawerTitle>
              </DrawerHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Input
                      id="name"
                      type="text"
                      className="col-span-4"
                      placeholder="enter city name"
                      value={inputCity}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button className="loc-button" type="submit">
                      Submit
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </form>
            </div>
          </DrawerContent>
        </Drawer>

        <div className="cur-loc opacity-90">{defaultCity}</div>
        <MdOutlineSettings color="#FFF" className="nav-settings" />
      </nav>
    </>
  );
};
export default Navbar;
