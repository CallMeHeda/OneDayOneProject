import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIdBadge,
  faMobileScreenButton,
  faAt,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { IContactProps } from "../interfaces/IContactProps";

library.add(faIdBadge, faMobileScreenButton, faAt, faTrashCan);

export default function Contact({ contactProps, onClick }: IContactProps) {
  const handleDeleteClick = () => {
    onClick(contactProps.id);
  };

  return (
    <div className="">
      <div className="datas grid">
        <div>
          <p className="name">
            <span>
              <FontAwesomeIcon icon={faIdBadge} />
            </span>
            {contactProps.name}
          </p>
        </div>

        <div>
          <p className="phone">
            <span>
              <FontAwesomeIcon icon={faMobileScreenButton} />
            </span>
            {contactProps.phone}
          </p>
        </div>

        <div>
          <p className="email">
            <span>
              <FontAwesomeIcon icon={faAt} />
            </span>
            {contactProps.email}
          </p>
        </div>

        <div className="buttonDelete">
          <button onClick={handleDeleteClick} className="remove">
            <FontAwesomeIcon icon={faTrashCan} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}
