import React, { useState } from 'react';
import s from './style.module.scss';
import { useDidUpdateEffect } from '../../../hooks/useDidUpdateEffect';

interface IProps {
  title?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export const Checkbox = React.forwardRef((props: IProps, ref: any) => {
  const [isChecked, setIsChecked] = useState<boolean>(!!props.value);

  useDidUpdateEffect(() => {
    setIsChecked(!!props.value);
  }, [props.value]);

  return (
    <div
      onClick={() => {
        let res = !isChecked;
        setIsChecked(res);
        if (props.onChange) props.onChange(res);
      }}
      className={s.checkbox}
    >
      <input
        ref={ref}
        type={'checkbox'}
        checked={isChecked}
        className={s.inputCheckbox}
      />
      <label>{props.title}</label>
    </div>
  );
});
