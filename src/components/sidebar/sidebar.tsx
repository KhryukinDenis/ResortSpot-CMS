import { observer } from "mobx-react";
import { FC, useContext } from "react";
import s from './style.module.scss';
import panel from "../../assets/images/icons/panel.svg";
import exit from "../../assets/images/icons/exit.svg";
import { Img } from "../ui/abstract/image/img";
import { Select } from "../ui/abstract/select/select";
import { useNavigate } from "react-router-dom";
import { RootStoreContext } from "../../stores/root";

export const Sidebar: FC = observer(() => {
  const Cities = ['Анапа', 'Новороссийск', 'Кабардинка', 'Геленджик', 'Дивноморское', 'Джубга', 'Туапсе', 'Лазоревское', 'Сочи', 'Адлер'];
  const Categories = ['Отели', 'Природа', 'Культура', 'Развлечения'];

  const rootStore = useContext(RootStoreContext);
	const appStore = rootStore.appStore;

  const navigate = useNavigate();

  const setActiveCity = (city: string) => {
    appStore.setSelectedCity(city);
    console.log(appStore.selectedCity);
  }

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
        placeholder={'Выберите город'}
        style={{ marginBottom: '20px' }}
        onChange={(city) => setActiveCity(city)}
      />

      {appStore.selectedCity && (
        <>
          {Categories.map((cat) => (
            <div className={s.category}>
              {cat}
            </div>
          ))}
        </>
      )}

      <div>{appStore.selectedCity}</div>
    </div>
  );
});