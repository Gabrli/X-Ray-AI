import Logo from "./logo";
import Nav from "./nav";
import { useScroll } from "../../hooks/useScroll";

export default function TopHeader() {
  const isScrolling = useScroll();

  return (
    <header
      className={`transition duration-300 ease-in-out w-full z-10 ${
        isScrolling ? "bg-gray-500 backdrop-blur-md bg-opacity-10" : ""
      } fixed top-0 pt-2 pb-2 left-0  h-custom-h-top-header flex justify-evenly items-center mobile2:justify-start`}
    >
      <Logo />
      <Nav />
    </header>
  );
}
