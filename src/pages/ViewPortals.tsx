import { Link } from "react-router-dom";
import { portal } from '../model';
import portalSVG from '../assets/portalSVG.svg';
import styled from "styled-components";

interface Props {
  portals: portal[];
}

const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #0E1826;
  font-weight: 700;
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
