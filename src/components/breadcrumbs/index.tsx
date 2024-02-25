import { FC } from "react";
import s from "./style.module.scss";
import { useStore } from "../../stores";
import { observer } from "mobx-react-lite";

export const Breadcrumbs: FC = observer(() => {
  const appStore = useStore("appStore");
  
  return (
    <div>
      {appStore.selectedCity && appStore.selectedCategory && (
        <div>{`${appStore.selectedCity.name_rus}/${appStore.selectedCategory.name_rus}`}</div>
      )}
    </div>
  );
});