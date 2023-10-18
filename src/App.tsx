import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import CreatePortal from './pages/CreatePortal.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import ViewPortals from "./pages/ViewPortals.tsx";
// import { useState } from "react";

function App() {
  // const [portals, setPortals] = useState<string[]>([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "create-portal",
      element: <CreatePortal />
    },
    {
      path: "view-portals",
      element: <ViewPortals />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App;