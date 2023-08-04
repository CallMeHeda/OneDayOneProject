import { IContact } from "./IContact";

export interface INewContactProps {
  handleAdd: (contact: IContact) => void;
  // contacts: IContact[];
}
