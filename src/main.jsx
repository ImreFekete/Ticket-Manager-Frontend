import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Register from './Component/Register/Register';

const router = createBrowserRouter([{
  path: "/", element: <App/>, errorElement: <p> "error" </p>, children: [
    {path: "/register", element: <Register/>}
  ]
}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
