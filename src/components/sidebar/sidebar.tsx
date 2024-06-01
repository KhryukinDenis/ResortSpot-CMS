import { FC } from "react";
import s from './style.module.scss';
import panel from "../../assets/images/icons/panel.svg";
import exit from "../../assets/images/icons/exit.svg";
import { Img } from "../ui/image/img";
import { Select } from "../ui/select/select";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { Category } from "../../model/category";
import { Categories, Cities } from "../../mock/mock";

export const Sidebar: FC = observer(() => {
  const cityStore = useStore("cityStore");
  const categoryStore = useStore("categoryStore");
  const authStore = useStore("authStore");
  const navigate = useNavigate();

  const onSelect = (cityName: string) => {
    const selectedCity = Cities.find(city => city.name_rus === cityName);
    if (selectedCity) { 
      cityStore.setSelectedCity(selectedCity);
      categoryStore.setSelectedCategory(null);
      navigate(selectedCity.name);
    }
  }; 

  const categoryClick = (category: Category) => {
    categoryStore.setSelectedCategory(category);
    if (cityStore.selectedCity && categoryStore.selectedCategory) {
      navigate(`${cityStore.selectedCity.name}/${categoryStore.selectedCategory.name}`);
    }
  };

  const panelClick = () => {
    navigate('/');
    cityStore.setSelectedCity(null);
    categoryStore.setSelectedCategory(null);
  };

  const unlogin = () => {
    authStore.unlogin();
    authStore.reset('', '');
    authStore.setWarning('');
    navigate('/auth');
  };

  return (
    <div className={s.sidebar}>
      <div className={s.user}>
        <div className={s.userBlock}>
          <div className={s.avatar}>A</div>
          <div>Admin</div>
        </div>
        <Img src={exit} onClick={unlogin} className={s.exit}/>
      </div>

      <div className={s.panel} onClick={panelClick}>
        <Img src={panel}/>
        <div>Панель управления</div>
      </div>

      <Select 
        options={Cities.map(city => city.name_rus)}
        option={cityStore.selectedCity ? cityStore.selectedCity?.name_rus : null}
        placeholder={'Выберите город'}
        style={{ marginBottom: '20px' }}
        onChange={(cityName) => {onSelect(cityName)}}
      />

      {cityStore.selectedCity && (
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