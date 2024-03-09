import { ContentBlock, ContentState, DraftBlockType, DraftHandleValue, Editor, EditorState, RichUtils } from "draft-js";
import { observer } from "mobx-react-lite";
import { FC, useRef, useState } from "react";
import s from "./style.module.scss";
import { Toolbar } from "../toolbar";
import { convertFromHTML, convertToHTML } from 'draft-convert';
import { Img } from "../image/img";
import download from "../../../assets/images/icons/download.svg";

interface IProps {
  value: string | undefined;
  onChange?: (val: string) => void;
  title?: string;
}

export const TextEditor: FC<IProps> = observer((props) => {
  const convertFromHTMLEditorState = (html: string): EditorState => {
    const contentState: ContentState = convertFromHTML(html);
    const editorState: EditorState = EditorState.createWithContent(contentState);
    return editorState;
  };

  const convertToHtmlEditorState = (contentState: ContentState) => {
    const html: string = convertToHTML({
      blockToHTML: (block) => {
        if (block.type === 'centerAlign') {
          return <p style={{ textAlign: 'center' }}>{block.text}</p>;
        }
        if (block.type === 'leftAlign') {
          return <p style={{ textAlign: 'left' }}>{block.text}</p>;
        }
        if (block.type === 'rightAlign') {
          return <p style={{ textAlign: 'right' }}>{block.text}</p>;
        }
        if (block.type === 'header-one') {
          return <h1 style={{ textAlign: 'center', fontSize: '30px' }}>{block.text}</h1>;
        }
        if (block.type === 'header-two') {
          return <h2 style={{ textAlign: 'center', fontSize: '24px' }}>{block.text}</h2>;
        }
        if (block.type === 'header-three') {
          return <p style={{ fontSize: '20px' }}>{block.text}</p>;
        }
        if (block.type === 'header-four') {
          return <p style={{ fontSize: '16px' }}>{block.text}</p>;
        }
        if (block.type === 'header-five') {
          return <p style={{ fontSize: '12px' }}>{block.text}</p>;
        }
        if (block.type === 'header-six') {
          return <p style={{ fontSize: '9px' }}>{block.text}</p>;
        }
      },
    })(contentState);
  
    props.onChange?.(html);
  };
  const [editorState, setEditorState] = useState(convertFromHTMLEditorState(''));

  const editor = useRef(null);

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const myBlockStyleFn = (contentBlock: ContentBlock): string => {
    const type: DraftBlockType = contentBlock.getType();
    switch (type) {
      case 'blockQuote':
        return s.superFancyBlockquote;
      case 'leftAlign':
        return s.leftAlign;
      case 'rightAlign':
        return s.rightAlign;
      case 'centerAlign':
        return s.centerAlign;
      case 'header-one':
        return s.h1;
      case 'header-two':
        return s.h2;
      case 'header-three':
        return s.h3;
      case 'header-four':
        return s.h4;
      case 'header-five':
        return s.h5;
      case 'header-six':
        return s.h6;
      default:
        return '';
    }
  };

  return (
    <div>
      {props.title && <div className={s.title}>{props.title}</div>}
      <div className={s.editor_wrapper}>
        <div className={s.editor_toolbar}>
          <Img
            src={download}
            onClick={() => setEditorState(convertFromHTMLEditorState(props.value ? props.value : ''))}
            className={s.download}
          />
          <Toolbar editorState={editorState} setEditorState={setEditorState} />
        </div>
        <div className={s.editor_container}>
          <Editor
            ref={editor}
            placeholder={'Нажмите кнопку "Загрузить" в левом верхнем углу, чтобы отобразить в редакторе имеющийся текст. Если текст не задан - задайте его, установив курсор ниже.'}
            handleKeyCommand={handleKeyCommand}
            editorState={editorState}
            blockStyleFn={myBlockStyleFn}  
            onChange={(editorState) => {
              setEditorState(editorState);
              const contentState = editorState.getCurrentContent();
              convertToHtmlEditorState(contentState);
            }}
          />
        </div>
      </div>
    </div>
  );
});
