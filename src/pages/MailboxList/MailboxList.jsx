import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function MailboxList() {
  const [mailboxes, setMailboxes] = useState([]);

  useEffect(() => {
    async function getMailboxes() {
      const res = await axios.get("https://mailbox-lab.onrender.com/mailboxes");
      setMailboxes(res.data);
    }

    getMailboxes();
  }, []);

  return (
    <div>
      <h1>Mailboxes</h1>

      {mailboxes.map((oneMailbox, i) => (
        <div key={oneMailbox._id} className="mail-box">
          <Link to={`/mailboxes/${oneMailbox._id}`} state={{ number: i + 1 }}>
            Mailbox {i + 1}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MailboxList;
