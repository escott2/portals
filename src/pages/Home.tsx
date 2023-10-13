import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Portals</h1>
      <div className="card">
      <Link to="create-portal">Create a portal</Link>
      <p>View portals</p>
      </div>
    </>
  )
}

export default Home;
