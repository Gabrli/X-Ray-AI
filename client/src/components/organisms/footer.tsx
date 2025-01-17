import Btn from "../atomics/btn";
import Logo from "../topHeader/logo";
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
          <div className="w-[40%] flex flex-col gap-[14px]   pr-3 pl-3 mobile1:w-full">
            <Logo />
            <p className="text-gray-400 text-center ">AI Image classificer </p>

            <Btn
              icon={<FaLinkedin size={24} />}
              content="Linkedin"
              href="https://www.linkedin.com/in/gabriel-wi%C5%9Bniewski-8a8b7730b/"
              styles="bg-blue-500 hover:bg-blue-600 transition duration-500 ease-in-out font-medium text-white pl-8 pr-8 pt-3 pb-3 rounded-[4px] "
              astyles="flex justify-center items-center gap-[10px]"
            />
            <Btn
              icon={<FaBug size={24} />}
              content="Report bug"
              href="mailto:gabrys.wisniewski@op.pl"
              styles="bg-orange-500 hover:bg-orange-600 transition duration-500 ease-in-out font-medium text-white pl-8 pr-8 pt-3 pb-3 rounded-[4px] "
              astyles="flex justify-center items-center gap-[10px] "
            />
          </div>
          <div className="w-1/3 flex flex-col relative top-[48px] gap-[14px] mobile1:w-full mobile1:pl-12 ">
            <p className="text-gray-400 font-medium text-[20px]">Explore</p>
            <ul className="flex flex-col m-0 gap-[14px]  ">
             
              <Btn
               content="Get started"
               href="#"
               styles="p-0 text-[16px] hover:text-primary transition duration-500 ease-in-out text-white font-500"
               astyles="flex justify-start w-full"
              />
              
              <Btn
               content="Faq"
               href="#faq"
               styles="p-0 text-[16px] hover:text-primary transition duration-500 ease-in-out text-white font-500"
               astyles="flex justify-start w-full"
              />

              <Btn
                content="Cooperation"
                href="mailto:gabrys.wisniewski@op.pl"
                styles=" p-0  text-[16px] hover:text-primary transition duration-500 ease-in-out text-white font-500 "
                astyles="flex justify-start w-full"
              />
            </ul>
          </div>
          <div className="w-1/3 flex flex-col gap-[14px] relative top-[48px] mobile1:w-full mobile1:pl-12">
            <p className="text-gray-400 font-medium text-[20px]">Follow me</p>
            <ul className="flex justify-start items-centrer m-0 gap-[14px] ">
              
              <Btn
               icon={<FaInstagram size={20} />}
               href="https://www.instagram.com/gabrysdev/"
               styles="transition duration-500 ease-in-out text-white font-500 p-0  w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center text-[16px] hover:bg-primary"
              />
              <Btn
                icon={<FaGithub size={20} />}
                href="https://github.com/Gabrli"
                styles="transition duration-500 ease-in-out text-white font-500 p-0  text-[16px] w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center hover:bg-primary"
              />
              <Btn
                icon={<SiCodementor size={20} />}
                href="https://gabriedev.vercel.app/"
                styles="transition duration-500 ease-in-out text-white font-500 p-0  text-[16px] w-[36px]  h-[36px] rounded-full bg-white/20 flex justify-center items-center hover:bg-primary"
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
