import { observer } from "mobx-react";
import { CSSProperties, FC } from "react";

interface IProps {
  src?: string;
  alt?: string;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
  onLoad?: () => void;
}

export const Img: FC<IProps> = (props) => {
  return (
    <>
      <img 
        src={props.src}
        alt={props.alt || "Изображение"}
        style={props.style}
        className={props.className}
        onClick={props.onClick}
        onLoad={props.onLoad}
      />
    </>
  );
};