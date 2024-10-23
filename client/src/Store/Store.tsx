import { configureStore } from "@reduxjs/toolkit";
import FileUploadSlice from "../Features/FileUpload/FileUploadSlice";

const Store = configureStore({
  reducer: {
    fileUploadReducer: FileUploadSlice.reducer,
  },
});

export default Store;
