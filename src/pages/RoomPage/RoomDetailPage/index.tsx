import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Room } from "../../../model/room";
import { Rooms } from "../../../mock/mock";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";

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
      RoomDetailPage
    </div>
  );
});