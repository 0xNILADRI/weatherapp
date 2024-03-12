import { MdMyLocation } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";

function navbar() {
  return (
    <>
      <nav className="flex max-w-6xl left-0 right-0 flex-row items-center justify-between p-4 navbar">
        <MdMyLocation color="#FFF" className="nav-loc" />
        <div className="cur-loc opacity-90">Bengaluru</div>
        <MdOutlineSettings color="#FFF" className="nav-settings" />
      </nav>
    </>
  );
}
export default navbar;
