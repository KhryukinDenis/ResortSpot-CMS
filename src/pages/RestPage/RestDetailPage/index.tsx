import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Rest } from "../../../model/rest";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { Rests } from "../../../mock/mock";
import { TextInput } from "../../../components/ui/text-input";

export const RestDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const restStore = useStore("restStore");
  const [data, setData] = useState<Rest | null>(null);

  const arr = Rests;

  useDidMountEffect(() => {
    // restStore.fetchById(id);
    // setData(restStore.rest);
    setData(arr[0]);
  });

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
  };
  
  return (
    <div className={s.wrapper}>
      <TextInput 
        value={data?.name}
        onChange={(val) => setField('name', val)}
        title={'Название'}
      />
    </div>
  );
});