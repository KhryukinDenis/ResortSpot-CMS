import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {

}

export const MainPage: FC<IProps> = observer((props) => {

  return (
    <>
      Главная
    </>
  );
});