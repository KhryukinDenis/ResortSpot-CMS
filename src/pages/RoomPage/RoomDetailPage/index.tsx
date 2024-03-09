import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Room } from "../../../model/room";
import { Rooms } from "../../../mock/mock";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { NumberInput } from "../../../components/ui/number-input";
import { Textarea } from "../../../components/ui/textarea";
import { Checkbox } from "../../../components/ui/checkbox";

export const RoomDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const roomStore = useStore("roomStore");
  const [data, setData] = useState<Room | null>(null);

  const arr = Rooms;

  useDidMountEffect(() => {
    // roomStore.fetchById(id);
    // setData(roomStore.room);
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
      <NumberInput 
        value={data?.area}
        onChange={(val) => setField('area', val)}
        title={'Площадь'}
      />
      <NumberInput 
        value={data?.count_people}
        onChange={(val) => setField('count_people', val)}
        title={'Количество человек'}
      />
      {data && (
        <Checkbox
          value={data?.isBooked}
          onChange={(val) => setField('isBooked', val)}
          title={'Данный номер сейчас недоступен'}
        />
      )}
      <Textarea 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Краткое описание (для карточки в списке)'}
        maxCount={550}
      />
    </div>
  );
});