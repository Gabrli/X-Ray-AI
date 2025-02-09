import { useState } from "react";
import { IQuestionAnswer } from "../../types/IQuestionAnswer";
import { IoIosArrowUp } from "react-icons/io";
import Btn from "../atomics/btn";

export default function QuestionAnswer(props: IQuestionAnswer) {
  const { id, question, answer } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      key={id}
      onClick={() => setIsActive(!isActive)}
      className={`w-[70%]  ${
        isActive ? "min-h-[120px] " : "h-[60px] mobile2:h-[55px]"
      } flex flex-col gap-[4px] cursor-pointer transition duration-300 ease-in-out rounded-[16px] border border-secondary hover:bg-gray-400 hover:backdrop-blur-md hover:bg-opacity-10 hover:border-gray-400 mobile1:w-[90%]`}
    >
      <section className="w-full  p-4 flex flex-col items-center">
        <div className="w-full flex justify-evenly items-center">
          <p
            className={`transition duration-300 ease-in-out font-medium mobile2:text-[14px] ${
              isActive ? "text-primary" : "text-white"
            }`}
          >
            {question}
          </p>
          
          <Btn isActive={isActive} setIsActive={setIsActive} icon={<IoIosArrowUp/>} styles="transition duration-300 ease-in-out" />
        </div>
        <section
          className={`w-full transition duration-300 ease-in-out pt-2 flex justify-start pl-11 border-t border-secondary mt-2  ${
            isActive ? "translate-y-[0] " : "translate-y-[-20px] opacity-0 p"
          }`}
        >
          <p className={`text-sm text-white w-full `}>{answer}</p>
        </section>
      </section>
    </div>
  );
}
