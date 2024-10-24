import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";

const FileUploadActions = () => {
  const { isUploaded, fileData } = useSelector(
    (state: RootState) => state.fileUploadReducer
  );

  return (
    <div>
      {isUploaded ? (
        <p>File Uploaded Successfully!</p>
      ) : (
        <p>No File Uploaded</p>
          )}
          {/* Optional: Show file content */}
      {/* {fileData && <pre>{fileData}</pre>}  */}
    </div>
  );
};

export default FileUploadActions;
