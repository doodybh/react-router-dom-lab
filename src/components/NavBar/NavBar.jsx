import { Link } from "react-router";

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
    </nav>
  );
}

export default NavBar;
