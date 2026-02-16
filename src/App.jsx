import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import MailboxList from "./pages/MailboxList/MailboxList";
import MailboxForm from "./pages/MailboxForm/MailboxForm";
import MailboxDetails from "./pages/MailboxDetails/MailboxDetails";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<h1>Welcome To The Post Office Box</h1>} />
        <Route path="/mailboxes" element={<MailboxList />} />
        <Route path="/new-mailbox" element={<MailboxForm />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} />
      </Routes>
    </>
  );
}

export default App;
