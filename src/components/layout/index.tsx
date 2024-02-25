import { FC } from "react";
import s from "./style.module.scss";
import { Route, Routes } from "react-router-dom";
import { useStore } from "../../stores";
import { observer } from "mobx-react-lite";

export const Layout: FC = observer(() => {
  const appStore = useStore("appStore");
  
  return (
    <div className={s.layout}>
      <Routes>
        <Route path={'/'} element={<>Главная</>}/>

        <Route path={'/:city/hotel'} element={<div>Отели</div>}/>
        <Route path={'/:city/nature'} element={<div>Природа</div>}/>
        <Route path={'/:city/culture'} element={<div>Культура</div>}/>
        <Route path={'/:city/entertainment'} element={<div>Развлечения</div>}/>
        
        <Route path={'/*'} element={<div>Ничего не найдено</div>}/>
      </Routes>
    </div>
  );
});