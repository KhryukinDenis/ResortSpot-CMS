import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Table } from "../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores";
import { Culture } from "../../model/culture";
import { useDidMountEffect } from "../../hooks/useDidMountEffect";
import { Cultures } from "../../mock/mock";

interface IProps { }

export const CulturePage: FC<IProps> = observer((props) => {
  const navigate = useNavigate();
  const cityStore = useStore("cityStore");
  // const cultureStore = useStore("cultureStore");
  const [data, setData] = useState<Culture[]>([]);
  
  const columns = [
    { title: "ID", field: "id" },
    { title: "Названиe", field: "name" },
    { title: "Адрес", field: "address" },
  ];

  const handleEdit = (id: number) => {
    navigate(`/${cityStore.selectedCity?.name}/culture/${id}`)
  };

  useDidMountEffect(() => {
    // cultureStore.fetchAll();
    // setData(cultureStore.cultures);
    setData(Cultures);
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