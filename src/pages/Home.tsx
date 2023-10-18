import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [portals, setPortals] = useState<string[]>([]);

  return (
    <>
      <h1>Portals</h1>
      <div className="card">
      <Link to="create-portal">Create a portal</Link>
      <Link to="view-portals">View portals</Link>
      </div>
    </>
  )
}

export default Home;
