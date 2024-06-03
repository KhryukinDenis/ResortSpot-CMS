import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Hotel } from "../../model/hotel";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";

export const HotelPage: FC = observer(() => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  const hotelStore = useStore("hotelStore");
  const [data, setData] = useState<Hotel[]>([]);

  const columns = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
    { title: "Цена", field: "price" },
    { title: "Расстояние до моря", field: "distanse_sea" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/${id}`)
  };

  const handleDelete = (id: number) => {
    if (cityStore.selectedCity) {
      hotelStore.delete(id, cityStore.selectedCity?.id);
      setData((prevData) => prevData.filter(item => item.id !== id));
    }
  };

  const handleAdd = () => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/create`);
  };

  useDidMountEffect(async () => {
    if (cityStore.selectedCity) {
      await hotelStore.fetchAll(cityStore.selectedCity?.id);
      setData(hotelStore.hotels);
    }
  });

  return (
    <Table
      data={data || []}
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