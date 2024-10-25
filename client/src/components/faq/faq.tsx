import { IQuestionAnswer } from "../../types/IQuestionAnswer";
import QuestionAnswer from "./questionAnswer";

export default function Faq() {
  const questionsAnswers: IQuestionAnswer[] = [
    {
      id: Math.random(),
      question: "How is the finally target of this project ?",
      answer: "This is the only test answer for this question.",
    },
    {
      id: Math.random(),
      question: "How is the finally target of this project ?",
      answer: "",
    },
    {
      id: Math.random(),
      question: "How is the finally target of this project ?",
      answer: "",
    },
    {
      id: Math.random(),
      question: "How is the finally target of this project ?",
      answer: "",
    },
  ];
  return (
    <section className="w-full h-[50vh] flex justify-center items-center mobile1:h-[64vh]">
      <div className="w-[50%] h-[70%] flex justify-center items-center border border-secondary rounded-[16px] mobile1:flex-col mobile1:w-[90%]">
        <section className="w-[30%] h-[100%] flex justify-center items-center border-r border-secondary mobile1:w-full mobile1:border-r-0 mobile1:border-b mobile1:h-[20%]">
          <h5 className="text-white text-[24px] font-bold">FAQ</h5>
        </section>
        <section className="flex gap-[12px] flex-col jusifi-center items-center w-[70%] mobile1:w-full mobile1:pt-2 mobile1:pb-2 mobile1:h-[80%]">
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
