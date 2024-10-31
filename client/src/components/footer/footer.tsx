import CtaButton from "../cta/ctaButton";
import Logo from "../topHeader/logo";
import NavLink from "../topHeader/navLink";
import { FaInstagram, FaGithub, FaLinkedin, FaBug } from "react-icons/fa";
import { SiCodementor } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="getintouch"
      className="w-full mt-14  h-[54vh] flex justify-center items-center pb-6 mobile1:h-[84vh] mobile2:h-[86vh]"
    >
      <div className="flex flex-col h-full bg-secondary rounded-[16px] w-[56%] items-center mobile1:w-[90%]">
        <section className="flex justify-evenly h-[100%] pt-10  w-full mobile1:flex-col mobile2:pb-10">
          <div className="w-1/3 flex flex-col gap-[14px]   pr-2 mobile1:w-full">
            <Logo />
            <p className="text-gray-400 text-center ">AI Image classificer </p>
            <CtaButton
              icon={<FaLinkedin size={24} />}
              content="Linkedin"
              href="https://www.linkedin.com/in/gabriel-wi%C5%9Bniewski-8a8b7730b/"
              styles="bg-blue-500 hover:bg-blue-600"
            />
            <CtaButton
              icon={<FaBug size={24} />}
              content="Report bug"
              href="mailto:gabrys.wisniewski@op.pl"
              styles="bg-orange-500 hover:bg-orange-600"
            />
          </div>
          <div className="w-1/3 flex flex-col relative top-[48px] gap-[14px] mobile1:w-full mobile1:pl-12 ">
            <p className="text-gray-400 font-medium text-[20px]">Explore</p>
            <ul className="flex flex-col m-0 gap-[14px]  ">
              <NavLink
                content="Get started"
                href="#"
                styles="p-0  text-[16px] hover:text-primary"
              />
              <NavLink
                content="Faq"
                href="#faq"
                styles="p-0  text-[16px] hover:text-primary"
              />

              <NavLink
                content="Cooperation"
                href="mailto:gabrys.wisniewski@op.pl"
                styles=" p-0  text-[16px] hover:text-primary"
              />
            </ul>
          </div>
          <div className="w-1/3 flex flex-col gap-[14px] relative top-[48px] mobile1:w-full mobile1:pl-12">
            <p className="text-gray-400 font-medium text-[20px]">Follow me</p>
            <ul className="flex justify-start items-centrer m-0 gap-[14px] ">
              <NavLink
                content={<FaInstagram size={20} />}
                href="https://www.instagram.com/gabrysdev/"
                styles="p-0  w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center text-[16px] hover:bg-primary"
              />
              <NavLink
                content={<FaGithub size={20} />}
                href="https://github.com/Gabrli"
                styles="p-0  text-[16px] w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center hover:bg-primary"
              />
              <NavLink
                content={<SiCodementor size={20} />}
                href="https://gabriedev.vercel.app/"
                styles="p-0  text-[16px] w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center hover:bg-primary"
              />
            </ul>
          </div>
        </section>
        <section className="pt-2 border-t flex items-start flex-col pt-4 pl-16 border-gray-400 pb-2 w-full ">
          <p className="text-primary">
            Made by{" "}
            <a
              className="text-primary border-b border-primary"
              target="_blank"
              href="https://github.com/Gabrli"
            >
              @GabrielDev
            </a>
          </p>
        </section>
      </div>
    </footer>
  );
}
