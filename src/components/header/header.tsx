import { FC } from "react";
import s from './style.module.scss';
import { Img } from "../ui/abstract/image/img";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={s.header}>
      <Img src={logo} className={s.logo} onClick={() => navigate('/')}/>
      <div>ResortSpot: Система управления контентом</div>
    </div>
  );
};