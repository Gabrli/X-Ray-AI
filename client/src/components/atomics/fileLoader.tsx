import { FileUploader } from "react-drag-drop-files";
import { IFileLoader } from "../../types/IFileLoader";
import { useFileLoader } from "../../hooks/useFileLoader";
import Btn from "./btn"

const fileTypes = ["JPG", "PNG", "JPEG"];
export default function FileLoader(props: IFileLoader) {
  const { setResult, setIsActive, isActive} = props;
  const { isReady, handleChange, analysisData, sendQuery } = useFileLoader({
    setIsActive,
    setResult,
    isActive
  });

  return (
    <div
      id="fileloader"
      className="flex justify-center items-center pt-20 pl-1 pr-1 pb-40"
    >
      <div className="transition duration-500 ease-in-out h-custom-h-fileloader w-custom-fileloader-w bg-gray-500 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-lg flex justify-center items-center flex-col hover:border-secondary">
        <div className="pb-20">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          
          />
        </div>
       
        <Btn fun={analysisData} styles={` ${
        isReady
          ? "bg-primary text-white hover:bg-secondary"
          : "bg-gray-700 text-gray-500 cursor-not-allowed"
      } transition duration-500 ease-in-out pl-28 pr-28 pt-3 pb-3 font-medium rounded-lg`}  content="Start Analysis" astyles="flex justify-center items-center gap-[10px]"/>
        {sendQuery ? <p className="m-0 pt-10 text-center text-sm w-[90%]">If you waiting longer than a few seconds it's does mean that server have to start and you have to wait <strong>20-50</strong> seconds</p> : ""}
      </div>
    </div>
  );
}
