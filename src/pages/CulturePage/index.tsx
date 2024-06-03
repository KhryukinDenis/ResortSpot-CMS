import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Culture } from "../../model/culture";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

export const CulturePage: FC = observer(() => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  const cultureStore = useStore("cultureStore");
  const [data, setData] = useState<Culture[]>([]);
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Названиe", field: "name" },
    { title: "Адрес", field: "address" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/culture/${id}`)
  };

  const handleDelete = (id: number) => {
    if (cityStore.selectedCity) {
      cultureStore.delete(id, cityStore.selectedCity?.id);
      setData((prevData) => prevData.filter(item => item.id !== id));
    }
  };

  const handleAdd = () => {
    navigate(`/${cityStore.selectedCity?.name}/culture/create`);
  };

  useDidMountEffect(async () => {
    if (cityStore.selectedCity) {
      await cultureStore.fetchAll(cityStore.selectedCity?.id);
      setData(cultureStore.cultures);
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