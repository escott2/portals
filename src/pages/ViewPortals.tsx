import { Link } from "react-router-dom";
import { portal } from '../model';

interface Props {
  portals: portal[];
}

function ViewPortals({portals}: Props) {

  console.log(portals);

  return (
    <>
      <h1>View Portals</h1>
      {portals.map((portal) => (
        <div>
          <h2>{portal.name}</h2>
          <p>{portal.description}</p>
        </div>
      ))}
      <Link to="/">Back</Link>
    </>
  )
}

export default ViewPortals;
