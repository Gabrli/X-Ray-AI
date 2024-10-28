import { ICta } from "../../types/ICta";

export default function CtaButton(props: ICta) {
  const { content, href, styles, icon } = props;
  return (
    <button
      className={`transition duration-500 ease-in-out w-2/3 ml-auto mr-auto flex text-[18px] justify-center items-center gap-[12px] font-medium h-[45px] rounded-[8px]  text-white ${styles}`}
    >
      <a
        href={href}
        className="text-white flex justify-center items-center gap-[12px]"
      >
        {icon} {content}
      </a>
    </button>
  );
}
