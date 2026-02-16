import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";

function MailboxDetails() {
  const { mailboxId } = useParams();
  const location = useLocation();
  const mailboxNumber = location.state?.number;

  const [mailbox, setMailbox] = useState(null);

  useEffect(() => {
    async function getMailbox() {
      const res = await axios.get(
        `https://mailbox-lab.onrender.com/mailboxes/${mailboxId}`
      );
      setMailbox(res.data);
    }

    getMailbox();
  }, [mailboxId]);

  if (!mailbox) return <p>Loading...</p>;

  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>Mailbox {mailboxNumber}</h1>
      <h1>Details</h1>
      <p>Owner: {mailbox.owner}</p>
      <p>Size: {mailbox.size}</p>
    </div>
  );
}

export default MailboxDetails;
