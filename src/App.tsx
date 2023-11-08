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
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-shadow: -1px 1px 10px 2px rgba(0,0,0,0.05);
  margin-bottom: 25px
`;

//TODO: Create logo, don't use h1 for this
const AppTitle = styled.h1`
  font-size: 25px;
  text-align: center;
  color: #0E1826;
  font-weight: 700;
  margin-left: 10px;
`;


function App() {
  const [portals, setPortals] = useState<portal[]>([]);

  const addPortal = (portal: portal) => {
    setPortals(initialPortals => [
      ...initialPortals,
      {
        name: portal.name,
        description: portal.description,
        id: portal.id
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
        <div><AppTitle>Portals</AppTitle></div>
        <div>
          <button>Home</button>
          <button>Create</button>
          <button>View</button>
        </div>
      </StyledHeader>
       <RouterProvider router={router} />
    </AppWrapper>
  )
}

export default App;