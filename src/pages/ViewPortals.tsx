import { Link } from "react-router-dom";
import { portal } from '../model';
import portalSVG from '../assets/portalSVG.svg';
import styled from "styled-components";

interface Props {
  portals: portal[];
}

//TODO: Shared styling should go into component folder
const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  color: #0E1826;
  font-weight: 700;
  margin-bottom: 20px;
`;

function ViewPortals({portals}: Props) {

  console.log(portals);

  return (
    <>
      <Title>View Portals</Title>
      {portals.map((portal) => (
        <div>
          <h2>{portal.name}</h2>
          <p>{portal.description}</p>
          <img src={portalSVG} alt="portal image"/>
        </div>
      ))}
      <Link to="/">Back</Link>
    </>
  )
}

export default ViewPortals;
