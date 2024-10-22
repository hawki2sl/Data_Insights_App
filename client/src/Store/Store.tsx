import { configureStore } from "@reduxjs/toolkit";
import FileUploadSlice from "../Features/FileUpload/FileUploadSlice";

const Store = configureStore({
  reducer: {
    FileUploadSliceReducer: FileUploadSlice.reducer,
  },
});

export default Store;
