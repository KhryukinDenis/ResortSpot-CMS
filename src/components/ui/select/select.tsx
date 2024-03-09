import { CSSProperties, FC, useState } from "react";
import s from "./style.module.scss";
import { Img } from "../image/img";
import arrowBottom from "../../../assets/images/icons/arrow_bottom.svg";
import arrowTop from "../../../assets/images/icons/arrow_top.svg";
import { observer } from "mobx-react-lite";

interface IProps {
  options: any[];
  option: string | number | null | undefined;
  placeholder?: string;
  title?: string;
  style?: CSSProperties;
  onChange?: (option: string) => void;
}

export const Select: FC<IProps> = observer((props) => { 
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    props.onChange?.(option);
    handleClick();
  };

  return (
    <div className={s.wrapper} style={props.style}>
      {props.title && <div className={`${s.title} ${props.option ? s.slide_in : s.slide_out}`}>{props.title}</div>}
      <div className={s.input} onClick={handleClick}>
        {props.option || (props.placeholder + ':')}
        {!isOpen && <Img src={arrowBottom} />}
        {isOpen && <Img src={arrowTop} />}
      </div>
      {isOpen && (
        <div className={s.options}>
          {props.options.map((option, key) => (
            <div
              className={s.option}
              key={key}
              onClick={() => handleSelectOption(option)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});