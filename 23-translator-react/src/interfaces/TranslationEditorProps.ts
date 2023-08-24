import { CSSProperties } from "react";
import { EditorTextChangeEvent } from "primereact/editor";

export default interface TranslationEditorProps {
  value: string;
  onTextChange?: (e: EditorTextChangeEvent) => void;
  headerTemplate: JSX.Element;
  style: CSSProperties;
  readOnly?: boolean;
}
