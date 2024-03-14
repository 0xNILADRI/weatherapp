"use client";

import { useState } from "react";

import { MdMyLocation } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
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
                    id="name"
                    type="text"
                    className="col-span-4"
                    placeholder="enter city name"
                    value={inputCity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <DialogTrigger>
                <button type="submit" className="loc-button ">
                  Submit
                </button>
              </DialogTrigger>
            </form>
          </DialogContent>
        </Dialog>
        <div className="cur-loc opacity-90">{defaultCity}</div>
        <MdOutlineSettings color="#FFF" className="nav-settings" />
      </nav>
    </>
  );
};
export default Navbar;
