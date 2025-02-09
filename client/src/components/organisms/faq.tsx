import QuestionAnswer from "../molecules/questionAnswer";
import { questionsAnswers } from "../../constants/questionsAnswer";

export default function Faq() {
  return (
    <section
      id="faq"
      className="w-full min-h-[40vh] flex justify-center items-center mobile1:h-[38vh] mobile2:min-h-[38vh] mb-10 mobile1:items-start"
    >
      <div className="w-[50%] min-h-[40%] flex justify-center items-center border border-secondary rounded-[16px] mobile1:flex-col mobile1:w-[90%] mobile2:w-[96%] mobile2:min-h-[50%] mobile2:justify-start">
        <section className="w-[30%]   flex justify-center items-center border-r border-secondary mobile1:w-full mobile1:border-r-0 mobile1:border-b mobile2:min-h-[8%] mobile2:max-h-[10%]">
          <h5 className="text-white text-[24px] font-bold ">FAQ</h5>
        </section>
        <section className="flex gap-[12px] flex-col pt-2 pb-2 jusifi-center items-center w-[70%] mobile1:w-full mobile1:pt-2 mobile1:pb-2 mobile2:min-h-[80%]">
          {questionsAnswers.map((questionAnswer) => {
            return (
              <QuestionAnswer
                id={questionAnswer.id}
                question={questionAnswer.question}
                answer={questionAnswer.answer}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
}
