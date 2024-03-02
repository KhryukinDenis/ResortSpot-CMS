import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";

interface IProps { }

export const HotelPage: FC<IProps> = observer((props) => {  
  const data = [
    { name: "Сочи Парк Отель", price: 4300, rast: 1.1 },
    { name: "Cosmos Stay Le Rond Sochi ", price: 5525, rast: 0.8 },
  ];
  
  const columns = [
    { title: "Название", field: "name" },
    { title: "Цена", field: "price" },
    { title: "Расстояние до моря", field: "rast" },
  ];

  return (
    <>
      <Table 
        data={data}
        column={columns}
        canDelete
        canAdd
        canEdit
      />
    </>
  );
});