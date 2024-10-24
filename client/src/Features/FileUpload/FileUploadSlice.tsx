import { createSlice } from "@reduxjs/toolkit";

interface FileUploadState {
  fileData: string | null;
  isUploaded: boolean;
}

const initialState: FileUploadState = {
  fileData: null,
  isUploaded: false,
};

const FileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    setFileData: (state, action) => {
      state.fileData = action.payload;
      state.isUploaded = true;
    },
    resetFileData: (state) => {
      state.fileData = null;
      state.isUploaded = false;
    },
  },
});

export const { setFileData, resetFileData } = FileUploadSlice.actions;
export default FileUploadSlice.reducer;
