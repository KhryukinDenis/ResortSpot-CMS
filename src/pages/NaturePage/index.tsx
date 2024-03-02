import { observer } from "mobx-react-lite";
import { FC } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";

interface IProps { }

export const NaturePage: FC<IProps> = observer((props) => {
  const data = [
    { name: "Дольмены большого сочи" },
    { name: "Каньон белые скалы" },
  ];
  
  const columns = [
    { title: "Название", field: "name" },
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