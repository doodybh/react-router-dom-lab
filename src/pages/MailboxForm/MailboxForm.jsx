import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

function MailboxForm() {
  const [formData, setFormData] = useState({
    owner: "",
    size: "Small",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    await axios.post("https://mailbox-lab.onrender.com/mailboxes", formData);

    navigate("/mailboxes");
  }

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="mail-box">
      <h1>New Mailbox</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter a Boxholder: </label>
        <input
          placeholder="Boxholder name"
          type="text"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
        />

        <label>Select a Box Size: </label>
        <select name="size" value={formData.size} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        <button>Create Mailbox</button>
      </form>
    </div>
  );
}

export default MailboxForm;
