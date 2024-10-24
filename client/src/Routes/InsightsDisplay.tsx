import FileUpload from "../Features/FileUpload/FileUpload";
import FileUploadActions from "../Features/FileUpload/FileUploadActions";

const InsightsDisplay = () => {
  return (
    <div>
      <h2>Insights</h2>
      <FileUpload />
      <FileUploadActions />
    </div>
  );
};

export default InsightsDisplay;
