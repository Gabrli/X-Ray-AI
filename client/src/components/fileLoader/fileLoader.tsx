import { FileUploader } from "react-drag-drop-files";
import { useState } from "react";
import ButtonAnalysic from "./buttonAnalysis";
import { ANALYSIS_POST_QUERY } from "../../helpers/queris";
import { IResult } from "../../types/IResult";

const fileTypes = ["JPG", "PNG", "JPEG"];
export default function FileLoader(props: {
  setResult: React.Dispatch<React.SetStateAction<IResult>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { setResult, setIsActive } = props;
  const [file, setFile] = useState({ name: " " });
  const [isReady, setIsReady] = useState(false);
  const handleChange = (file: null) => {
    if (file) {
      setIsReady(true);
      setFile(file);
      setIsActive(false)
    } else setIsReady(false);
  };

  const analysisData = () => {
    const formData = new FormData();

    formData.append("file", file as never, file.name);
    ANALYSIS_POST_QUERY(formData).then((res) => {
      setResult({ text: res.data.res, img: formData.get("file") });
      setIsReady(false)
      setFile({name: ''})
    });
  };
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
