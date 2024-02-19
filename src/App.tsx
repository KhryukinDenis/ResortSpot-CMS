import React, { FC } from 'react';
import './styles.scss';
import { observer } from 'mobx-react';

export const App: FC = observer(() => {
  return (
    <div className="Apps">
      Content
    </div>
  );
});
