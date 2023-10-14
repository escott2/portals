import { Link } from "react-router-dom";
import { useState} from "react";

function CreatePortal() {

  const [portals, setPortals] = useState<string[]>([]);
  const [portalName, setPortalName] = useState("");
  const [portalDescription, setPortalDescription] = useState("");
  const [descriptionInfo, setDescriptionInfo] = useState("Describe this portal. You have 10 characters remaining");

  const addPortal = () => {
    setPortals(initialPortals => [...initialPortals, portalName]);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPortalName("");
    addPortal();
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPortalDescription(e.target.value);
    console.log(portalDescription.length);
    const remainingCharacters = 10 - portalDescription.length;
    setDescriptionInfo(`You have ${remainingCharacters} remaining`);
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
          maxLength={10}
        >
        </textarea>
        {descriptionInfo}
        <button>Submit</button>
      </form>
      {portalName}
      <Link to="/">Back</Link>
    </>
  )
}

export default CreatePortal;
