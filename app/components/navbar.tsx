import Image from "next/image";

function navbar() {
  return (
    <>
      <nav className="flex max-w-6xl left-0 right-0 flex-row items-center justify-between p-4 navbar">
        <div className="flex left-0 right-0 flex-row items-center justify-between logo">
          <Image
            className="relative"
            src="/image/brand-logo.svg"
            alt="Weather App Logo"
            width={50}
            height={50}
            priority
          ></Image>
          <p className="logo-name">FLDSMDFR</p>
        </div>
        <div className="flex flex-row items-center justify-between contact-navbar">
          <div className="contact-inside navbar-aboutus">ABOUT US</div>
          <div className="contact-inside contact">CONTACT</div>
        </div>
      </nav>
    </>
  );
}
export default navbar;
