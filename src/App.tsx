import './styles.scss';
import { FC } from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from './stores';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Breadcrumbs } from './components/breadcrumbs';
import { Layout } from './components/layout';

export const App: FC = observer(() => {
  const appStore = useStore("appStore");

  return (
    <div className={"App"}>
      <Sidebar />
      <div className={"content"}>
        <Header />
        <Breadcrumbs />
        <Layout />
      </div>
    </div>
  );
});
