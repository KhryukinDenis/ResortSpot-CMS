import { observer } from "mobx-react";
import { FC } from "react";
import s from './style.module.scss';
import panel from "../../assets/images/icons/panel.svg";
import exit from "../../assets/images/icons/exit.svg";
import { Img } from "../ui/abstract/image/img";
import { Select } from "../ui/abstract/select/select";

export const Sidebar: FC = observer(() => {
  const arr = ['Анапа', 'Новороссийск', 'Кабардинка', 'Геленджик', 'Дивноморское', 'Джубга', 'Туапсе', 'Лазоревское', 'Сочи', 'Адлер'];
  return (
    <div className={s.sidebar}>
      <div className={s.user}>
        <div className={s.userBlock}>
          <div className={s.avatar}>A</div>
          <div>Admin</div>
        </div>
        <Img src={exit}/>
      </div>
      <div className={s.panel}>
        <Img src={panel}/>
        <div>Панель управления</div>
      </div>
      <Select 
        options={arr}
        placeholder={'Выберите город'}
      />
    </div>
  );
});