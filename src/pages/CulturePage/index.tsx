import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";

interface IProps { }

export const CulturePage: FC<IProps> = observer((props) => {
  const data = [
    { name: "Морской вокзал", address: "г. Сочи, ул. Войкова, 1" },
    { name: "Сочинский маяк", address: "г. Сочи, ул. Приморская" },
  ];
  
  const columns = [
    { title: "Названиe", field: "name" },
    { title: "Адрес", field: "address" },
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