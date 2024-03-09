import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { useDidUpdateEffect } from "../../../hooks/useDidUpdateEffect";
import s from "./style.module.scss";

interface IProps {
  value: string | undefined;
  onChange: (timeString: string) => void;
  title: string;
}

export const TimePicker: FC<IProps> = observer((props) => {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useDidUpdateEffect(() => {
    if (props.value) parseTimeString(props.value);
  }, [props.value]);

  const parseTimeString = (timeString: string) => {
    const parts = timeString.split(" ");
    const hoursPart = parts[0];
    const minutesPart = parts[2];

    const parsedHours = Number(hoursPart);
    const parsedMinutes = Number(minutesPart);

    setHours(parsedHours);
    setMinutes(parsedMinutes);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newHours = Number(event.target.value);
    setHours(newHours);
    updateTimeString(newHours, minutes);
  };

  const handleMinutesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMinutes = Number(event.target.value);
    setMinutes(newMinutes);
    updateTimeString(hours, newMinutes);
  };

  const updateTimeString = (hours: number, minutes: number) => {
    const newValue = `${hours} ч. ${minutes} мин.`;
    props.onChange(newValue);
  };

  const renderMinutesOptions = () => {
    const options = [];
    for (let i = 0; i < 60; i += 5) {
      options.push(
        <option key={i} value={i} className={s.option}>
          {i.toString().padStart(2, "0")}
        </option>
      );
    };
    return options;
  };

  return (
    <div className={s.wrapper}>
      <div className={s.title}>{props.title}</div>
      <div className={s.timepicker}>
        <select value={hours} onChange={handleHoursChange} className={s.select}>
          {Array.from({ length: 24 }, (_, i) => (
            <option key={i} value={i} className={s.option}>
              {i.toString().padStart(2, "0")}
            </option>
          ))}
        </select>
        <div className={s.text}>ч.</div>

        <select value={minutes} onChange={handleMinutesChange} className={s.select}>
          {renderMinutesOptions()}
        </select>
        <div className={s.text}>мин.</div>
      </div>
    </div>
  );
});
