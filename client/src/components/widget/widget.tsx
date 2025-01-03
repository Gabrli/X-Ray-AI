import { IWidget } from "../../types/IWidget";

export default function Widget(props: IWidget) {
  const { variant, content, icon, styles } = props;
  return (
    <div
      className={`widget-${variant} ml-auto mr-auto border w-[200px] p-1 flex justify-center items-center gap-[10px] rounded-[99px] mobile1:w-[70%] ${styles}`}
    >
      {icon}
      {content}
    </div>
  );
}
