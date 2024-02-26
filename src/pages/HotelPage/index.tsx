import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { useStore } from "../../stores";
import { Table } from "../../components/ui/table/table";

interface IProps {

}

export const HotelPage: FC<IProps> = observer((props) => {
  const appStore = useStore("appStore");
  
  const data = [
    { name: "Сочи Парк Отель", price: 4300, rast: 1.1 },
    { name: "Cosmos Stay Le Rond Sochi ", price: 5525, rast: 0.8 },
  ];
  
  const columns = [
    { title: "Название отеля", field: "name" },
    { title: "Цена", field: "price" },
    { title: "Расстояние до моря", field: "rast" },
  ];

  function titleTable() {
    if (appStore.selectedCity && appStore.selectedCategory) {
      return `${appStore.selectedCity.name_rus}/${appStore.selectedCategory.name_rus}`
    } else {
      return 'Название таблицы'
    }
  }

  return (
    <>
      <Table 
        data={data}
        column={columns}
        title={titleTable()}
        canDelete
        canAdd
        canEdit
      />
    </>
  );
});