import './styles.scss';
import { FC } from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from './stores';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Router } from './components/router';

export const App: FC = observer(() => {
  const appStore = useStore("appStore");

  return (
    <div className={"App"}>
      <Sidebar />
      <div className={"content"}>
        <Header />
        <div className={"container"}>
          <Router />
        </div>
      </div>
    </div>
  );
});
