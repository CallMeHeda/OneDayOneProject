import { IContact } from "./IContact";

export interface ContactListProps {
  contacts: IContact[];
  handleDelete: (id: number) => void;
}
