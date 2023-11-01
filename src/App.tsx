import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import CreatePortal from './pages/CreatePortal.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import ViewPortals from "./pages/ViewPortals.tsx";
import { useState } from "react";
import { portal } from "./model";
import styled from "styled-components";

const Main = styled.main`
  background-color: #4F5F73;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


function App() {
  const [portals, setPortals] = useState<portal[]>([]);

  const addPortal = (portal: portal) => {
    setPortals(initialPortals => [
      ...initialPortals,
      {
        "name": portal.name,
        "description": portal.description
      }
    ]);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "create-portal",
      element: <CreatePortal onAdd={addPortal} />
    },
    {
      path: "view-portals",
      element: <ViewPortals portals={portals} />
    }
  ])

  return (
    <Main>
       <RouterProvider router={router} />
    </Main>
  )
}

export default App;