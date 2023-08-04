import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIdBadge,
  faMobileScreenButton,
  faAt,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { IContact } from "../interfaces/IContact";
import { useState } from "react";

library.add(faIdBadge, faMobileScreenButton, faAt, faTrashCan);

export default function Contact() {
  const [contacts, setContacts] = useState<IContact[]>([
    {
      id: 1,
      name: "D.Va",
      phone: "+32476589746",
      email: "hana.song@overwatch.com",
    },
  ]);

  return (
    <div className="">
      <div className="datas grid">
        <div>
          <p className="name">
            <span>
              <FontAwesomeIcon icon={faIdBadge} />
            </span>
            {contacts[0].name}
          </p>
        </div>

        <div>
          <p className="phone">
            <span>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            {contacts[0].phone}
          </p>
        </div>

        <div>
          <p className="email">
            <span>
              <FontAwesomeIcon icon={faAt} />
            </span>
            {contacts[0].email}
          </p>
        </div>

        <div className="buttonDelete"></div>
      </div>
    </div>
  );
}
