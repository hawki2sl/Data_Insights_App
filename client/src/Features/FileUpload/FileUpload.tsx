import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import classes from "../../Styles/FileUpload.module.css";
import { setFileData } from "../../Features/FileUpload/FileUploadSlice";
import { RootState } from "../../Store/Store";

const FileUploadComponent = () => {
  const { isUploaded } = useSelector(
    (state: RootState) => state.fileUploadReducer
  );

  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "text/csv": [] },
  });

  useEffect(() => {
    if (acceptedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const fileContent = event.target.result as string;
          dispatch(setFileData(fileContent));
        }
      };
      reader.readAsText(acceptedFiles[0]);
    }
  }, [acceptedFiles, dispatch]);

  return (
    <div>
      {isUploaded ? (
         <p>File Uploaded Successfully!</p>
      ) : (
        <div className={classes.file_upload_container} {...getRootProps()}>
          <input {...getInputProps()} data-testid="file-input" />
          <p>Select files</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;
