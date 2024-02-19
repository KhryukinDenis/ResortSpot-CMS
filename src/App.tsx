import React, { FC } from 'react';
import './styles.scss';
import { observer } from 'mobx-react';
import { Header } from './components/header/header';
import { Sidebar } from './components/sidebar/sidebar';

export const App: FC = observer(() => {
  return (
    <div className={"App"}>
      <Sidebar />
      <div className={"content"}>
        <Header />
        <div>Content</div>
      </div>
    </div>
  );
});
