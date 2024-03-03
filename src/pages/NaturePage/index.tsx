import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Nature } from "../../model/nature";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Natures } from "../../mock/mock";

interface IProps { }

export const NaturePage: FC<IProps> = observer((props) => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  // const natureStore = useStore("natureStore");
  const [data, setData] = useState<Nature[]>([]);
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/nature/${id}`)
  };

  useDidMountEffect(() => {
    // natureStore.fetchAll();
    // setData(natureStore.natures);
    setData(Natures);
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