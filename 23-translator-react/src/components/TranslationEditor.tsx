import { Editor } from "primereact/editor";
import TranslationEditorProps from "../interfaces/TranslationEditorProps";

export default function TranslationEditor(props: TranslationEditorProps) {
  return (
    <Editor
      value={props.value}
      onTextChange={props.onTextChange}
      headerTemplate={props.headerTemplate}
      style={props.style}
      readOnly={props.readOnly}
    />
  );
}
