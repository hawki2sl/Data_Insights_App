import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RootLayout from './Routes/RootLayout';
import ErrorPage from './Routes/ErrorPage';
import Home from './Routes/Home';
import FileUpload from './Routes/FileUpload';
import InsightsDisplay from './Routes/InsightsDisplay';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Default route
        element: <App />, // Render App component at the root path
      },
      {
        path: "/home",
        element: <Home />, 
      },
      {
        path: "/upload",
        element: <FileUpload />, 
      },
      {
        path: "/insights",
        element: <InsightsDisplay />, 
      },
      // You can add more nested routes here
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
