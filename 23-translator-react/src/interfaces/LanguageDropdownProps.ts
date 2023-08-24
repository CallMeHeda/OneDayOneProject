import { CSSProperties } from "react";

export default interface LanguageDropdownProps {
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  name: string;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
}
