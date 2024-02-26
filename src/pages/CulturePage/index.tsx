import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

interface IProps {

}

export const CulturePage: FC<IProps> = observer((props) => {

  useDidMountEffect(() => {
    console.log('link to culture page');
  });
  
  return (
    <>
      CulturePage
    </>
  );
});