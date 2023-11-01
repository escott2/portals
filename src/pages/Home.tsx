import { Link } from "react-router-dom";
import styled from "styled-components";

const MainNavLink = styled(Link)`
  display: block;
  text-align: center;
  background-color: white;
  border: 2px solid black;
  margin-top: 10px;
  color: black;
  padding: 5px 10px;
  border-radius: 5px;
`;

//TODO: Shared styling should go into component folder
const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  color: #0E1826;
  font-weight: 700;
  margin-bottom: 20px;
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
