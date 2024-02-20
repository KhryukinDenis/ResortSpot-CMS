import React, { FC, useContext } from 'react';
import './styles.scss';
import { observer } from 'mobx-react';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';
import { RootStoreContext } from './stores/root';

export const App: FC = observer(() => {
  const rootStore = useContext(RootStoreContext);
	const appStore = rootStore.appStore;

  return (
    <div className={"App"}>
      <Sidebar />
      <div className={"content"}>
        <Header />
        <div>{appStore.selectedCity}</div>
      </div>
    </div>
  );
});
