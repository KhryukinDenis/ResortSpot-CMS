import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {
  value: string | undefined | null;
  title?: string;
  onChange?: (val: string) => void;
  disabled?: boolean;
  isPassword?: boolean;
}

export const TextInput: FC<IProps> = observer((props) => {
  return (
    <div>
      {props.title && <div className={`${s.title} ${props.value ? s.slide_in : s.slide_out}`}>{props.title}</div>}
      <div className={s.inputBlock}>
        <input
          type={props.isPassword ? 'password' : 'text'}
          value={props.value || ''}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder={props.title}
          disabled={props.disabled}
        />
      </div>
    </div>
  );
});
