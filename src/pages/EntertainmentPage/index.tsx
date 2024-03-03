import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Entertainment } from "../../model/entertainment";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Entertainments } from "../../mock/mock";

interface IProps { }

export const EntertainmentPage: FC<IProps> = observer((props) => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  // const entertainmentStore = useStore("entertainmentStore");
  const [data, setData] = useState<Entertainment[]>([]);
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
    { title: "Время", field: "time" },
    { title: "Кол-во человек", field: "count_people" },
    { title: "Цена", field: "price" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/entertainment/${id}`)
  };

  useDidMountEffect(() => {
    // entertainmentStore.fetchAll();
    // setData(entertainmentStore.entertainments);
    setData(Entertainments);
  });
  
  return (
    <Table
      data={data}
      column={columns}
      canDelete
      canAdd
      canEdit
      onEdit={(data) => handleEdit(data.id)}
    />
  );
});