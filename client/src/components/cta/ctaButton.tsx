import { ICta } from "../../types/ICta";

export default function CtaButton(props: ICta) {
  const { content, href, styles, icon, variant } = props;
  return (
    <button className={`cta-${variant} ${styles} transition duration-500 ease-in-out font-medium text-white pl-8 pr-8 pt-3 pb-3 rounded-[4px]`}>
      <a href={href} className="flex justify-center items-center gap-[10px]">{icon} {content}</a>
    </button>
  )
}
