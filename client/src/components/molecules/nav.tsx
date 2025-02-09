import Btn from "../atomics/btn";

export default function Nav() {
  return (
    <nav
      className={`flex justify-center  items-center gap-6 mobile2:gap-0 mobile2:hidden`}
    >
      <Btn
        href="#faq"
        content="FAQ "
        styles="pl-6 pr-6 pt-1 pb-1 rounded-full hover:bg-white/20 transition duration-500 ease-in-out text-white font-500"
        astyles="flex justify-center items-center gap-[10px]"
      />
      <Btn
        href="https://github.com/Gabrli/X-Ray-IQ"
        content="Repo"
        styles="pl-6 pr-6 pt-1 pb-1 rounded-full hover:bg-white/20 transition duration-500 ease-in-out text-white font-500"
        astyles="flex justify-center items-center gap-[10px]"
      />
    </nav>
  );
}
