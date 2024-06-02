import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Nature } from "../../model/nature";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

export const NaturePage: FC = observer(() => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  const natureStore = useStore("natureStore");
  const [data, setData] = useState<Nature[]>([]);
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/nature/${id}`);
  };

  const handleDelete = (id: number) => {
    if (cityStore.selectedCity) {
      natureStore.delete(id, cityStore.selectedCity?.id);
    }
  };

  const handleAdd = () => {
    navigate(`/${cityStore.selectedCity?.name}/nature/create`);
  };

  useDidMountEffect(async () => {
    if (cityStore.selectedCity) {
      await natureStore.fetchAll(cityStore.selectedCity?.id);
      setData(natureStore.natures);
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