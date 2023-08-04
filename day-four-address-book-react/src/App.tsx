import "./styles/app.css";

import { useState } from "react";
import NewContact from "./components/NewContact";
import { IContact } from "./interfaces/IContact";
import ContactList from "./components/ContactsList";

function App() {
  const [contacts, setContacts] = useState<IContact[]>([
    {
      id: 1,
      name: "D.Va",
      phone: "+32476589746",
      email: "hana.song@overwatch.com",
    },
    {
      id: 2,
      name: "Orisa",
      phone: "+32487669822",
      email: "efi.oladele@overwatch.com",
    },
  ]);

  const handleDelete = (id: number) => {
    const copy_contact = [...contacts];
    const update_contact = copy_contact.filter((contact) => contact.id !== id);
    setContacts(update_contact);
  };

  const handleAdd = (contact: {
    id: number;
    name: string;
    phone: string;
    email: string;
  }) => {
    const copy_contact = [...contacts];
    copy_contact.push(contact);
    setContacts(copy_contact);
  };

  return (
    <div>
      <div className="App container">
        <h1>
          <span>DAY 4 :</span> Address Book<span>.</span>
        </h1>
        <NewContact handleAdd={handleAdd} />
        <ContactList contacts={contacts} handleDelete={handleDelete} />
      </div>
      <footer>
        <p>
          © 2023 - <span>Fatima.</span> Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
