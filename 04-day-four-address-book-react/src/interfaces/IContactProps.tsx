import { IContact } from "./IContact";

export interface IContactProps {
  contactProps: IContact;
  onClick: (id: number) => void;
}
