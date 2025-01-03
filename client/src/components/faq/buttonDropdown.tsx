import { IoIosArrowUp } from "react-icons/io";
import { IButtonDropdown } from "../../types/IButtonDropdown";

export default function ButtonDropdown(props: IButtonDropdown) {
  const { isActive, setIsActive } = props;

  return (
    <button
      className={`transition duration-300 ease-in-out ${
        isActive ? "rotate-180" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      {<IoIosArrowUp />}
    </button>
  );
}
