import { Link } from "react-router-dom";

function CreatePortal() {
  return (
    <>
      <form>
        <h1>Create a Portal</h1>
        <label htmlFor="portal-name">Portal Name:</label>
        <input type="text" id="portal-name"></input>
        <button>Submit</button>
      </form>
      <Link to="/">Back</Link>
    </>
  )
}

export default CreatePortal;
