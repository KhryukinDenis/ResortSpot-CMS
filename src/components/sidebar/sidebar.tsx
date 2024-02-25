import { FC } from "react";
import s from './style.module.scss';
import panel from "../../assets/images/icons/panel.svg";
import exit from "../../assets/images/icons/exit.svg";
import { Img } from "../ui/abstract/image/img";
import { Select } from "../ui/abstract/select/select";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";

export const Sidebar: FC = observer(() => {
  const Cities = ['Анапа', 'Новороссийск', 'Кабардинка', 'Геленджик', 'Дивноморское', 'Джубга', 'Туапсе', 'Лазоревское', 'Сочи', 'Адлер'];
  const Categories = ['Отели', 'Природа', 'Культура', 'Развлечения'];

  const appStore = useStore("appStore");

  const navigate = useNavigate();

  const setActiveCity = (city: string) => {
    appStore.setSelectedCity(city);
    console.log(appStore.selectedCity);
  };

  return (
    <div className={s.sidebar}>
      <div className={s.user}>
        <div className={s.userBlock}>
          <div className={s.avatar}>A</div>
          <div>Admin</div>
        </div>
        <Img src={exit}/>
      </div>

      <div className={s.panel} onClick={() => navigate('/')}>
        <Img src={panel}/>
        <div>Панель управления</div>
      </div>

      <Select 
        options={Cities}
        option={appStore.selectedCity}
        placeholder={'Выберите город'}
        style={{ marginBottom: '20px' }}
        onChange={(city) => setActiveCity(city)}
      />

      {appStore.selectedCity !== null && (
        <>
          {Categories.map((category) => (
            <div className={s.category}>
              {category}
            </div>
          ))}
        </>
      )}
    </div>
  );
});