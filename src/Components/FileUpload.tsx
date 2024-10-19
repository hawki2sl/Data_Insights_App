import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./FileUpload.module.css";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<
    "idle" | "uploading" | "success" | "failed"
  >("idle");

  // Explicitly add type annotation for acceptedFiles
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
      setStatus("uploading");
      // Simulate upload delay
      setTimeout(() => setStatus("success"), 2000);
    }
  }, []);

  // Correct the accept prop by providing an object with MIME type and extension
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] }, // MIME type 'text/csv' for CSV files
  });

  return (
    <div>
      <div {...getRootProps()} className={classes.file_upload_container}>
        <input {...getInputProps()} />
        <p>Upload CSV File</p>
      </div>
      {file && <p>Selected File: {file.name}</p>}
      {status === "uploading" && <p>Uploading...</p>}
      {status === "success" && <p>Upload Successful!</p>}
    </div>
  );
};

export default FileUpload;
