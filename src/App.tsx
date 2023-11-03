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
import { portal } from "./types/model.ts";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #F2F2F2;
  width: 100vw;
  height: 100vh;
`;

const StyledHeader = styled.header`
  height: 60px;
  background-color: red;
  box-shadow: 
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
    <AppWrapper>
      <StyledHeader>
        test
      </StyledHeader>
       <RouterProvider router={router} />
    </AppWrapper>
  )
}

export default App;