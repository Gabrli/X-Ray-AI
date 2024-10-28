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
    <section id="faq" className="w-full min-h-[54vh]  pt-10 flex justify-center items-center mobile1:h-[66vh] mobile2:min-h-[50vh]">
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
