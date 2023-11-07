import { Link } from "react-router-dom";
import Title from "../components/Title.tsx"
import styled from "styled-components";

const MainNavLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: white;
  border: 2px solid #253140;
  margin-top: 10px;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
  max-width: 150px;
  margin: 10px auto;

  &:hover,
  &:focus {
    background-color: #253140;
    color: #FFFFFF;
  }
`;

function Home() {

  return (
    <>
      <Title>Portals</Title>
      <div>
        <MainNavLink to="create-portal">Create a portal</MainNavLink>
        <MainNavLink to="view-portals">View portals</MainNavLink>
      </div>
    </>
  )
}

export default Home;
