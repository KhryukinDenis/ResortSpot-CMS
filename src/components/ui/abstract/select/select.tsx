import { observer } from "mobx-react";
import { CSSProperties, FC, useState } from "react";
import s from "./style.module.scss";
import { Img } from "../image/img";
import arrowBottom from "../../../../assets/images/icons/arrow_bottom.svg";
import arrowTop from "../../../../assets/images/icons/arrow_top.svg";

interface IProps {
  options: string[];
  placeholder?: string;
  style?: CSSProperties;
  onChange?: (option: string) => void;
}

export const Select: FC<IProps> = observer((props) => { 
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string>('');

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option: string) => {
    setSelectOption(option);
    props.onChange?.(option);
    handleClick();
  };

  return (
    <div className={s.wrapper} style={props.style}>
      <div className={s.input} onClick={handleClick}>
        {selectOption || (props.placeholder + ':')}
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