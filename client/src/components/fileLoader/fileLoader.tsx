import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import ButtonAnalysic from "./buttonAnalysis";
const fileTypes = ["JPG", "PNG", "GIF"];
export default function FileLoader(){
    const [file, setFile] = useState(null);
    const [isReady, setIsReady] = useState(true)
    const handleChange = (file:null) => {
      if (file){
        setIsReady(true)
        setFile(file);
      } else setIsReady(false)
     
    };

    const analysisData = (file:string) => {
      
    }
    return (
        <div id="fileloader" className="flex justify-center items-center pt-20 pl-1 pr-1 pb-10">
        <div className="transition duration-500 ease-in-out h-custom-h-fileloader w-custom-fileloader-w bg-gray-500 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-lg flex justify-center items-center flex-col hover:border-secondary">
        <div className="pb-20">
        <FileUploader   handleChange={handleChange} name="file" types={fileTypes} />
        </div>
        <ButtonAnalysic  isReady={isReady}/>
        </div>
        </div>
    )
}