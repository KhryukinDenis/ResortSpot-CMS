import './styles.scss';
import { FC, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from './stores';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Router } from './components/router';
import { useNavigate } from 'react-router-dom';

export const App: FC = observer(() => {
  const authStore = useStore('authStore');
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const login = localStorage.getItem("login");
    const password = localStorage.getItem("password");
    return login === authStore.HARDCODED_LOGIN && password === authStore.HARDCODED_PASSWORD;
  };

  const authenticated = isAuthenticated();

  useEffect(() => {
    if (!authenticated) navigate('/auth');
  }, []);

  return (
    <div className={"App"}>
      {authenticated && (
        <Sidebar />
      )}
      <div className={"content"}>
        <Header />
        <div className={"container"}>
          <Router />
        </div>
      </div>
    </div>
  );
});
