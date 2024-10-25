//import { useState } from "react"
import TestImg from '../../assets/img/fracture-dis.jpg'
import ButtonExport from './buttonExport';
export default function Analysic() {
  //const [isActive, setIsActive] = useState(false)
  return (
    <div className="w-full flex justify-center items-center h-[45vh]">
      <div className="w-[32%] h-full border p-4 rounded-[8px] border-primary bg-secondary">
        <h3 className="font-medium text-[20px]">Results of analysis</h3>
        <p>After processed analysis by AI model is the: <strong>Fracture Dislocation</strong></p>
        <section className='w-full pt-6 pb-6 flex justify-center'>
        <img  className="h-[260px]"src={TestImg} alt="fracture-dislocation"/>
      </section>
      <ButtonExport/>
      </div>
    </div>
  );
}
