import { Link } from "react-router-dom";
import { useState} from "react";
import { portal } from "../model";

function CreatePortal() {

  const [portals, setPortals] = useState<portal[]>([]);
  const [portalName, setPortalName] = useState("");
  const [portalDescription, setPortalDescription] = useState("");

  const maxDescriptionLength = 200;
  const remainingCharacters = maxDescriptionLength - portalDescription.length;

  const addPortal = () => {
    setPortals(initialPortals => [
      ...initialPortals,
      {
        "name": portalName,
        "description": portalDescription
      }
    ]);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPortalName("");
    setPortalDescription("");
    addPortal();
    console.log(portals);
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPortalDescription(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Create a Portal</h1>
        <label htmlFor="portal-name">Portal Name:</label>
        <input
          type="text"
          id="portal-name"
          value={portalName}
          onChange={e => setPortalName(e.target.value)}>
        </input>
        <label htmlFor="portal-description">Description</label>
        <textarea
          id="portal-description"
          value={portalDescription}
          onChange={handleChangeDescription}
          maxLength={maxDescriptionLength}
        >
        </textarea>
        <p>You have {remainingCharacters} remaining</p>
        <button>Submit</button>
      </form>
      {portalName}
      <Link to="/">Back</Link>
    </>
  )
}

export default CreatePortal;
