import { FC } from "react";
import s from "./style.module.scss";
import { Route, Routes } from "react-router-dom";
import { useStore } from "../../stores";
import { observer } from "mobx-react-lite";
import { Cities } from "../../mock/mock";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { HotelPage } from "../../pages/HotelPage";
import { NaturePage } from "../../pages/NaturePage";
import { CulturePage } from "../../pages/CulturePage";
import { EntertainmentPage } from "../../pages/EntertainmentPage";
import { HotelDetailPage } from "../../pages/HotelPage/HotelDetailPage";
import { NatureDetailPage } from "../../pages/NaturePage/NatureDetailPage";
import { CultureDetailPage } from "../../pages/CulturePage/CultureDetailPage";
import { EntertainmentDetailPage } from "../../pages/EntertainmentPage/EntertainmentDetailPage";
import { MainPage } from "../../pages/MainPage";
import { NotFoundPage } from "../../pages/NotFoundPage";

export const Router: FC = observer(() => {
  const appStore = useStore("appStore");

  useDidMountEffect(() => {
    // TODO: Запрос за массивом городов
  });

  return (
    <div className={s.layout}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />

        {Cities.map((city) =>
          <>
            <Route
              key={`${city.name}/hotel`}
              path={`/${city.name}/hotel`}
              element={<HotelPage />}
            />
            <Route
              key={`${city.name}/nature`}
              path={`/${city.name}/nature`}
              element={<NaturePage />}
            />
            <Route
              key={`${city.name}/culture`}
              path={`/${city.name}/culture`}
              element={<CulturePage />}
            />
            <Route
              key={`${city.name}/entertainment`}
              path={`/${city.name}/entertainment`}
              element={<EntertainmentPage />}
            />

            <Route
              key={`/${city.name}/hotel/:id`}
              path={`/${city.name}/hotel/:id`}
              element={<HotelDetailPage />}
            />
            <Route
              key={`/${city.name}/nature/:id`}
              path={`/${city.name}/nature/:id`}
              element={<NatureDetailPage />}
            />
            <Route
              key={`/${city.name}/culture/:id`}
              path={`/${city.name}/culture/:id`}
              element={<CultureDetailPage />}
            />
            <Route
              key={`/${city.name}/entertainment/:id`}
              path={`/${city.name}/entertainment/:id`}
              element={<EntertainmentDetailPage />}
            />
          </>
        )}

        <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
});