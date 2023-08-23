import { IContact } from "./IContact";

export interface IContactListProps {
  contacts: IContact[];
  handleDelete: (id: number) => void;
}
