import React, { FC, MouseEvent } from "react";
import { EditorState, RichUtils } from "draft-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faListUl,
  faListOl,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
} from "@fortawesome/free-solid-svg-icons";
import { observer } from "mobx-react-lite";

interface Tool {
  label: string;
  style: string;
  icon?: JSX.Element;
  method: "inline" | "block";
}

interface ToolbarProps {
  editorState: EditorState;
  setEditorState: (editorState: EditorState) => void;
}

export const Toolbar: FC<ToolbarProps> = observer((props) => {
  const tools: Tool[] = [
    {
      label: "Жирный",
      style: "BOLD",
      icon: <FontAwesomeIcon icon={faBold} />,
      method: "inline",
    },
    {
      label: "Курсив",
      style: "ITALIC",
      icon: <FontAwesomeIcon icon={faItalic} />,
      method: "inline",
    },
    {
      label: "Подчёркнутый",
      style: "UNDERLINE",
      icon: <FontAwesomeIcon icon={faUnderline} />,
      method: "inline",
    },
    {
      label: "Зачёркнутый",
      style: "STRIKETHROUGH",
      icon: <FontAwesomeIcon icon={faStrikethrough} />,
      method: "inline",
    },
    {
      label: "Маркированный список",
      style: "unordered-list-item",
      method: "block",
      icon: <FontAwesomeIcon icon={faListUl} transform="grow-6" />,
    },
    {
      label: "Пронумерованный список",
      style: "ordered-list-item",
      method: "block",
      icon: <FontAwesomeIcon icon={faListOl} transform="grow-6" />,
    },
    {
      label: "Выровнить по левому краю",
      style: "leftAlign",
      icon: <FontAwesomeIcon icon={faAlignLeft} transform="grow-2" />,
      method: "block",
    },
    {
      label: "Выровнить по центру",
      style: "centerAlign",
      icon: <FontAwesomeIcon icon={faAlignCenter} transform="grow-2" />,
      method: "block",
    },
    {
      label: "Выровнить по правому краю",
      style: "rightAlign",
      icon: <FontAwesomeIcon icon={faAlignRight} transform="grow-2" />,
      method: "block",
    },
    { label: "h1", style: "header-one", method: "block" },
    { label: "h2", style: "header-two", method: "block" },
    { label: "h3", style: "header-three", method: "block" },
    { label: "h4", style: "header-four", method: "block" },
    { label: "h5", style: "header-five", method: "block" },
    { label: "h6", style: "header-six", method: "block" },
  ];

  const applyStyle = (e: MouseEvent<HTMLButtonElement>, style: string, method: "inline" | "block") => {
    e.preventDefault();
    method === "block"
      ? props.setEditorState(RichUtils.toggleBlockType(props.editorState, style))
      : props.setEditorState(RichUtils.toggleInlineStyle(props.editorState, style));
  };

  const isActive = (style: string, method: "inline" | "block"): boolean => {
    if (method === "block") {
      const selection = props.editorState.getSelection();
      const blockType = props.editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
      return blockType === style;
    } else {
      const currentStyle = props.editorState.getCurrentInlineStyle();
      return currentStyle.has(style);
    }
  };

  return (
    <div className="toolbar-grid">
      {tools.map((item, idx) => (
        <button
          style={{
            color: isActive(item.style, item.method)
              ? "rgba(0, 0, 0, 1)"
              : "rgba(0, 0, 0, 0.5)",
          }}
          key={`${item.label}-${idx}`}
          title={item.label}
          onClick={(e) => applyStyle(e, item.style, item.method)}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.icon || item.label}
        </button>
      ))}
    </div>
  );
});
