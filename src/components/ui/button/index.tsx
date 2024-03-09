import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: FC<IProps> = observer((props) => {
  return (
    <button
      onClick={props.onClick}
      className={s.btn}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  );
});
