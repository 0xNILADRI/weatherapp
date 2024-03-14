import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function footer() {
  return (
    <div className="footer max-w-7xl">
      <div className="niladri">
        Crafted by <span className=" text-yellow-400">Niladri Ghosh</span>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/0xniladri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin className="h-7 w-7 text-yellow-400" />
        </a>

        <a
          href="https://github.com/0xNILADRI/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub className="h-7 w-7 text-yellow-400" />
        </a>
      </div>
    </div>
  );
}
export default footer;
