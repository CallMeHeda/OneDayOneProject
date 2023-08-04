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

  return (
    <div className="App">
      <ContactList contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
