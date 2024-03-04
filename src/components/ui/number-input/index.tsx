import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {
  value: number | undefined;
  title?: string;
  onChange?: (val: string) => void;
}

export const NumberInput: FC<IProps> = observer((props) => {
  return (
    <div>
      {props.title && <div className={`${s.title} ${props.value ? s.slide_in : s.slide_out}`}>{props.title}</div>}
      <div className={s.inputBlock}>
        <input
          type={"number"}
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder={props.title}
        />
      </div>
    </div>
  );
});