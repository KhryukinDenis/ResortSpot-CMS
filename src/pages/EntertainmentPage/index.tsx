import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";

interface IProps { }

export const EntertainmentPage: FC<IProps> = observer((props) => {
  const data = [
    { name: "Морская прогулка на яхте с купанием", time: 1.5, people: 10, price: 1600 },
    { name: "Сплав по реке Мзымта", time: 3, people: 18, price: 2300 },
  ];
  
  const columns = [
    { title: "Название", field: "name" },
    { title: "Время", field: "time" },
    { title: "Кол-во человек", field: "people" },
    { title: "Цена", field: "price" },
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