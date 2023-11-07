import { Link } from "react-router-dom";
import { portal } from '../types/model';
import portalSVG from '../assets/portalSVG.svg';
import Title from "../components/Title.tsx";

interface Props {
  portals: portal[];
}

function ViewPortals({portals}: Props) {

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
