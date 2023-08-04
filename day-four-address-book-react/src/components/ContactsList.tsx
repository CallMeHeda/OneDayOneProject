import { useState, ChangeEvent } from "react";
import Contact from "./Contact";
import { ContactListProps } from "../interfaces/IContactListProps";

export default function ContactList({
  contacts,
  handleDelete,
}: ContactListProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const filterContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      contact.phone.includes(searchValue)
  );

  return (
    <div>
      <div>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Search"
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
      {filterContacts.map((contact) => (
        <article key={contact.id}>
          <Contact
            contactProps={contact}
            onClick={() => handleDelete(contact.id)}
          />
        </article>
      ))}
    </div>
  );
}
