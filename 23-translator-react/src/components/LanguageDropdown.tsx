import { Dropdown } from "primereact/dropdown";
import LanguageDropdownProps from "../interfaces/LanguageDropdownProps";

export default function LanguageDropdown(props: LanguageDropdownProps) {
  return (
    <Dropdown
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      options={props.options}
      optionLabel="label"
      placeholder={props.placeholder}
      className="w-full md:w-14rem"
    />
  );
}
