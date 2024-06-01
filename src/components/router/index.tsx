import { FC } from "react";
import s from "./style.module.scss";
import { Route, Routes } from "react-router-dom";
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
import { RoomDetailPage } from "../../pages/RoomPage/RoomDetailPage";
import { RestDetailPage } from "../../pages/RestPage/RestDetailPage";
import { CityDetailPage } from "../../pages/CityPage/CityDetailPage";
import { AuthPage } from "../../pages/AuthPage";

export const Router: FC = observer(() => {
  useDidMountEffect(() => {
    // TODO: Запрос за массивом городов
  });

  return (
    <div className={s.layout}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/auth'} element={<AuthPage />} />

        {Cities.map((city) =>
          <>
            <Route 
              key={`${city.name}`}
              path={`${city.name}`}
              element={<CityDetailPage city={city.name}/>}
            />
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

            <Route
              key={`/${city.name}/hotel/:id/room/:id`}
              path={`/${city.name}/hotel/:id/room/:id`}
              element={<RoomDetailPage />}
            />
            <Route
              key={`/${city.name}/hotel/:id/rest/:id`}
              path={`/${city.name}/hotel/:id/rest/:id`}
              element={<RestDetailPage />}
            />

            <Route
              key={`/${city.name}/hotel/create`}
              path={`/${city.name}/hotel/create`}
              element={<HotelDetailPage />}
            />
            <Route
              key={`/${city.name}/nature/create`}
              path={`/${city.name}/nature/create`}
              element={<NatureDetailPage />}
            />
            <Route
              key={`/${city.name}/culture/create`}
              path={`/${city.name}/culture/create`}
              element={<CultureDetailPage />}
            />
            <Route
              key={`/${city.name}/entertainment/create`}
              path={`/${city.name}/entertainment/create`}
              element={<EntertainmentDetailPage />}
            />
            <Route
              key={`/${city.name}/room/create`}
              path={`/${city.name}/room/create`}
              element={<RoomDetailPage />}
            />
            <Route
              key={`/${city.name}/rest/create`}
              path={`/${city.name}/rest/create`}
              element={<RestDetailPage />}
            />
          </>
        )}

        <Route path={'/*'} element={<NotFoundPage />} />
      </Routes>
    </div>
  );
});
