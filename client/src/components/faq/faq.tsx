import { IQuestionAnswer } from "../../types/IQuestionAnswer";
import QuestionAnswer from "./questionAnswer";

export default function Faq() {
  const questionsAnswers: IQuestionAnswer[] = [
    {
      id: Math.random(),
      question: "What is the mission this app ?",
      answer: "This app could help doctors, hospitals or university to diagnose the different fractures by my neural network ( AI ).",
    },
    {
      id: Math.random(),
      question: "Why I created this project ?",
      answer: "I wanted to create something interesting with CNN and help medicine and provide new tech to x-ray.",
    },
    {
      id: Math.random(),
      question: "How is the finally target of this project ?",
      answer: "I want to that this project in the future will be one big step in medicine and x-ray tech revolution.",
    },
    
  ];
  return (
    <section id="faq" className="w-full h-[50vh] flex justify-center items-center mobile1:h-[64vh] mobile2:h-[64vh]">
      <div className="w-[50%] h-[70%] flex justify-center items-center border border-secondary rounded-[16px] mobile1:flex-col mobile1:w-[90%] mobile2:w-[96%] mobile2:h-[84%]">
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
