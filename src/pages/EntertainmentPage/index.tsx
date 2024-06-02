import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Entertainment } from "../../model/entertainment";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

export const EntertainmentPage: FC = observer(() => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  const entertainmentStore = useStore("entertainmentStore");
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

  const handleDelete = (id: number) => {
    if (cityStore.selectedCity) {
      entertainmentStore.delete(id, cityStore.selectedCity.id);
    }
  };

  const handleAdd = () => {
    navigate(`/${cityStore.selectedCity?.name}/entertainment/create`);
  };

  useDidMountEffect(async () => {
    if (cityStore.selectedCity) {
      await entertainmentStore.fetchAll(cityStore.selectedCity.id);
      setData(entertainmentStore.entertainments);
    }
  });
  
  return (
    <Table
      data={data}
      column={columns}
      canDelete
      canAdd
      canEdit
      onEdit={(data) => handleEdit(data.id)}
      onDelete={(data) => handleDelete(data.id)}
      onAdd={() => handleAdd()}
    />
  );
});
