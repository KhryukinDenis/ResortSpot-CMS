import s from "./style.module.scss";

export const MainPage = () => {
  return (
    <div className={s.main}>
      <div className={s.header}>Добро пожаловать в систему управления контентом&nbsp;<b>ResortSpot!</b></div>
      <div className={s.text}>На данной платформе Вы можете управлять контентом одноименного веб-сайта <b>ResortSpot</b>. Настроенный Вами контент будет доступен для просмотра пользователям на <a className={s.link}>www.resort-spot.ru.</a></div>
      <div className={s.headerMin}>Как работать:</div>
      <div className={s.text}>Для того чтобы настроить контент для начала Вам необходимо выбрать город в выпадающем списке слева.</div>
      <div className={s.text}>Перед вами появится страница города, на которой Вы можете изменить лишь описание выбранного города.</div>
      <div className={s.text}>Если же Вы хотите изменить что-то относящиеся к выбранному городу, то Вам нужно выбрать категорию, в которую Вы хотите внести изменения.</div>
      <div className={s.text}>После этого перед Вами появится таблица с полями, которые Вы можете изменить (нажав на кнопку "Изменить" с карандашом) или удалить (нажав на кнопку "Удалить" мусорного бака). Вы также можете добавить запись в таблицу (нажав на кнопку "Добавить" с "+" в правом верхнем углу таблицы).</div>
      <div className={s.text}>При нажатии на кнопку "Изменить", Вы окажетесь на странице существующего контента, который можете изменить и нажав на кнопку "Сохранить" в правом верхнем углу страницы, измененный Вами контент отправится на сайт <b>ResortSpot</b>.</div>
      <div className={s.text}>При нажатии на кнопку "Удалить", контент относящийся к этой строке в таблице будет удален и исчезнет с сайта <b>ResortSpot</b>.</div>
      <div className={s.text}>При нажатии на кнопку "Добавить", Вы можете создать совершенно новый контент, который пользователи <b>ResortSpot</b> с удовольствием изучат.</div>
      <div className={s.text}>По дополнительным вопросам обращайтесь напрямую к разработчикам (email: dev@resortspot.pro). Удачной работы!</div>
    </div>
  );
};
