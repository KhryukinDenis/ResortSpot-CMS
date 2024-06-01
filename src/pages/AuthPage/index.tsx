import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from './styled.module.scss';
import { TextInput } from "../../components/ui/text-input";
import { Button } from "../../components/ui/button";
import { useStore } from "../../stores";
import { useNavigate } from "react-router-dom";

export const AuthPage: FC = observer(() => {
  const authStore = useStore("authStore");
  const navigate = useNavigate();

  const auth = () => {
    if (
      authStore.login === authStore.HARDCODED_LOGIN &&
      authStore.password === authStore.HARDCODED_PASSWORD
    ) {
      authStore.saveToLocalStorage(authStore.HARDCODED_LOGIN, authStore.HARDCODED_PASSWORD);
      navigate('/');

    } else {
      authStore.setWarning('Введен неверный логин или пароль. Повторите попытку.');
      authStore.reset('', '');
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.warning}>
        {authStore.warning}
      </div>
      <TextInput
        value={authStore.login}
        title={'Логин'}
        onChange={(e) => authStore.setLogin(e)}
      />
      <TextInput
        value={authStore.password}
        title={'Пароль'}
        isPassword
        onChange={(e) => authStore.setPassword(e)}
      />
      <Button 
        title={'Войти'}
        onClick={auth}
      />
    </div>
  );
});
