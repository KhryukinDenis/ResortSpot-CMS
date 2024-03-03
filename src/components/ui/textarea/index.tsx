import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {
  value: string | undefined;
  title?: string;
  onChange?: (val: string) => void;
  maxCount?: number;
}

export const Textarea: FC<IProps> = observer((props) => {
  return (
    <div>
      {props.title && <div className={`${s.title} ${props.value ? s.slide_in : s.slide_out}`}>{props.title}</div>}
      <div className={s.block}>
        <textarea
          value={props.value}
          onChange={(e) => props.onChange?.(e.target.value)}
          placeholder={props.title}
          maxLength={props.maxCount}
        />
        <div className={s.count}>{`${props.value?.length}/${props.maxCount}`}</div>
      </div>
    </div>
  );
});
