import { useEffect } from "react";
import classes from "../../Styles/FileUpload.module.css"
import { useDropzone } from "react-dropzone";

const FileUploadComponent = () => {
  const { acceptedFiles, getRootProps, getInputProps } =
    useDropzone({ accept: { "text/csv": [] } });

  //If file is uploaded, change Redux state
  useEffect(() => {
    
  }, [acceptedFiles])

  return (
    <div className={classes.file_upload_container} {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Select files</p>
    </div>
  );
};

export default FileUploadComponent;
