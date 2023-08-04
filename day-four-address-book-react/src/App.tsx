import ContactList from "./components/ContactsList";
import { IContact } from "./interfaces/IContact";
import "./styles/app.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState<IContact[]>([
    {
      id: 1,
      name: "D.Va",
      phone: "+32476589746",
      email: "hana.song@overwatch.com",
    },
  ]);

  return (
    <div className="App">
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
