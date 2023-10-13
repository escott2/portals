import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import CreatePortal from './pages/CreatePortal.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "create-portal",
    element: <CreatePortal />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
