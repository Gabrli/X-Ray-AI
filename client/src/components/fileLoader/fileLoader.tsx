import { FileUploader } from "react-drag-drop-files";
import ButtonAnalysic from "./buttonAnalysis";
import { IFileLoader } from "../../types/IFileLoader";
import { useFileLoader } from "../../hooks/useFileLoader";

const fileTypes = ["JPG", "PNG", "JPEG"];
export default function FileLoader(props: IFileLoader) {
  const { setResult, setIsActive } = props;
  const { isReady, handleChange, analysisData } = useFileLoader({
    setIsActive,
    setResult,
  });

  return (
    <div
      id="fileloader"
      className="flex justify-center items-center pt-20 pl-1 pr-1 pb-10"
    >
      <div className="transition duration-500 ease-in-out h-custom-h-fileloader w-custom-fileloader-w bg-gray-500 backdrop-blur-md bg-opacity-10 border border-gray-100 rounded-lg flex justify-center items-center flex-col hover:border-secondary">
        <div className="pb-20">
          <FileUploader
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
        </div>
        <ButtonAnalysic fun={analysisData} isReady={isReady} />
      </div>
    </div>
  );
}
