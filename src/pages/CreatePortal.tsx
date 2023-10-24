import { Link } from "react-router-dom";
import { useState} from "react";
import { portal } from "../model";

interface Props {
  onAdd: (portal: portal) => void;
}

function CreatePortal({onAdd}: Props) {

  const [portalName, setPortalName] = useState("");
  const [portalDescription, setPortalDescription] = useState("");
  
  const portal: portal = {
    name: portalName,
    description: portalDescription
  }
  const maxDescriptionLength = 200;
  const remainingCharacters = maxDescriptionLength - portalDescription.length;
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(portal);
    setPortalName("");
    setPortalDescription("");
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
