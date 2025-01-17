import { useEffect, useState } from "react";
import { ANALYSIS_POST_QUERY } from "../helpers/queris";
import { IFileLoader } from "../types/IFileLoader";
export const useFileLoader = (props: IFileLoader) => {
  const { setIsActive, setResult, isActive } = props;
  const [file, setFile] = useState({ name: " " });
  const [isReady, setIsReady] = useState(false);
  const [ sendQuery, setSendQuery ] = useState(false)
  const handleChange = (file: null) => {
    if (file) {
      setIsReady(true);
      setFile(file);
      setIsActive(false);
    } else setIsReady(false);
  };

  useEffect(() => setSendQuery(false), [isActive])

  const analysisData = () => {
    const formData = new FormData();
    formData.append("file", file as never, file.name);
    ANALYSIS_POST_QUERY(formData).then(res => {
      setResult({ text: res.data.res, img: formData.get("file") });
      setIsReady(false);
      setFile({ name: "" });
    });
    setSendQuery(true)
  };
  return {
    analysisData,
    isReady,
    handleChange,
    sendQuery
  };
};