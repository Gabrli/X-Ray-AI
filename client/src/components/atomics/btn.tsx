import { IBtn } from "../../types/IBtn";

export default function Btn(props: IBtn) {
  const {
    styles,
    astyles,
    variant,
    isActive,
    setIsActive,
    fun,
    icon,
    content,
    href,
  } = props;
  return (
    <button
      onClick={() => (setIsActive ? setIsActive(!isActive) : fun ? fun() : "")}
      className={`${styles} ${variant} ${isActive ? "rotate-180" : ""}`}
    >
      <a href={href} className={`${astyles}  `}>
        {icon} {content}
      </a>
    </button>
  );
}
