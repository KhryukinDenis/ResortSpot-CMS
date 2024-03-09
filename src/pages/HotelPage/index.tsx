import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Hotel } from "../../model/hotel";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Hotels } from "../../mock/mock";

interface IProps { }

export const HotelPage: FC<IProps> = observer((props) => {
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
    hotelStore.delete(id);
  };

  const handleAdd = () => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/create`);
  };

  useDidMountEffect(() => {
    // hotelStore.fetchAll();
    // setData(hotelStore.hotels);
    setData(Hotels);
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