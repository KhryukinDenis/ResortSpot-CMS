import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";

interface IProps {

}

export const NotFoundPage: FC<IProps> = observer((props) => {

  return (
    <>
      Ничего не найдено
    </>
  );
});