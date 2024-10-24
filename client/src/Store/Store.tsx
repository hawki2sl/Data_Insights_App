import { configureStore } from "@reduxjs/toolkit";
import fileUploadReducer from "../Features/FileUpload/FileUploadSlice"; // Adjust the path if needed

const Store = configureStore({
  reducer: {
    fileUploadReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>; // Define RootState type
export default Store;
