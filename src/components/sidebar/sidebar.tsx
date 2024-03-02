import { FC } from "react";
import s from './style.module.scss';
import panel from "../../assets/images/icons/panel.svg";
import exit from "../../assets/images/icons/exit.svg";
import { Img } from "../ui/abstract/image/img";
import { Select } from "../ui/abstract/select/select";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { Category } from "../../model/category";
import { Categories, Cities } from "../../mock/mock";

export const Sidebar: FC = observer(() => {
  const appStore = useStore("appStore");
  const navigate = useNavigate();

  const onSelect = (cityName: string) => {
    const selectedCity = Cities.find(city => city.name_rus === cityName);
    if (selectedCity) { 
      appStore.setSelectedCity(selectedCity);
      appStore.setSelectedCategory(null);
    }
  }; 

  const categoryClick = (category: Category) => {
    appStore.setSelectedCategory(category);
    if (appStore.selectedCity && appStore.selectedCategory) {
      navigate(`${appStore.selectedCity.name}/${appStore.selectedCategory.name}`);
    }
  };

  const panelClick = () => {
    navigate('/');
    appStore.setSelectedCity(null);
    appStore.setSelectedCategory(null);
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

      <div className={s.panel} onClick={panelClick}>
        <Img src={panel}/>
        <div>Панель управления</div>
      </div>

      <Select 
        options={Cities.map(city => city.name_rus)}
        option={appStore.selectedCity ? appStore.selectedCity?.name_rus : null}
        placeholder={'Выберите город'}
        style={{ marginBottom: '20px' }}
        onChange={(cityName) => {onSelect(cityName)}}
      />

      {appStore.selectedCity && (
        <>
          {Categories.map((category) => (
            <div 
              className={s.category} 
              onClick={() => categoryClick(category)}
            >
              {category.name_rus}
            </div>
          ))}
        </>
      )}
    </div>
  );
});