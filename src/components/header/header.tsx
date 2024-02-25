import { FC } from "react";
import s from './style.module.scss';
import { Img } from "../ui/abstract/image/img";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";

export const Header: FC = () => {
  const appStore = useStore("appStore");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    appStore.setSelectedCity(null);
    appStore.setSelectedCategory(null);
  };

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Img src={logo} className={s.img} onClick={handleClick}/>
      </div>
      <div>ResortSpot: Система управления контентом</div>
    </div>
  );
};