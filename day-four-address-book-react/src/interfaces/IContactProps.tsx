import { IContact } from "./IContact";

export interface ContactProps {
  contactProps: IContact;
  onClick: (id: number) => void;
}
