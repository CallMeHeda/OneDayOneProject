import { useState, ChangeEvent } from "react";
import { IContact } from "../interfaces/IContact";
import { INewContactProps } from "../interfaces/INewContactProps";

import parsePhoneNumber, { CountryCode } from "libphonenumber-js";

export default function NewContact({ handleAdd }: INewContactProps) {
  const [contact, setContact] = useState<IContact>({
    id: new Date().getTime(),
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newContact = {
      id: new Date().getTime(),
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    };

    const countriesCodes: CountryCode[] = ["BE", "FR", "GB", "US"];

    let isValidPhoneNumber: boolean = false;

    countriesCodes.forEach((country) => {
      const phoneNumber = parsePhoneNumber(newContact.phone, country);

      if (phoneNumber && phoneNumber.isValid()) {
        isValidPhoneNumber = true;
        newContact.phone = phoneNumber.number;

        return;
      }
    });

    if (newContact.name && isValidPhoneNumber) {
      handleAdd(newContact);
    } else {
      console.log("ERROR");
    }

    setContact({
      id: new Date().getTime(),
      name: "",
      phone: "",
      email: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((contact) => ({
      ...contact,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputs grid">
          <div>
            <label htmlFor="name">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={contact.name}
                onChange={handleChange}
                autoFocus
              />
            </label>
          </div>

          <div>
            <label htmlFor="phone">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contact.phone}
                required
                onChange={handleChange}
                placeholder="Phone Number"
              />
            </label>
          </div>

          <div>
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </label>
          </div>
          <button type="submit">Ajouter</button>
        </div>
      </form>
    </div>
  );
}
