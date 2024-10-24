import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useDropzone } from "react-dropzone";
import classes from "../../Styles/FileUpload.module.css";
import { setFileData } from "../../Features/FileUpload/FileUploadSlice";

const FileUploadComponent = () => {
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "text/csv": [] },
  });

  //If file is uploaded, change Redux state
  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const fileContent = event.target.result as string; // Ensure it's a string
          dispatch(setFileData(fileContent)); // Dispatch action with file content
        }
      };
      reader.readAsText(acceptedFiles[0]); // Read the file as text
    }
  }, [acceptedFiles, dispatch]);

  return (
    <div className={classes.file_upload_container} {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Select files</p>
    </div>
  );
};

export default FileUploadComponent;
