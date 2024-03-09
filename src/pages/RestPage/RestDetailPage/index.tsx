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
import { TextEditor } from "../../../components/ui/editor";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";

export const RestDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const restStore = useStore("restStore");
  const [data, setData] = useState<Rest | null>(null);

  const arr = Rests;

  useDidMountEffect(() => {
    if (isEdit) {
      // restStore.fetchById(id);
      // setData(restStore.rest);
      setData(arr[0]);
    } else {
      // restStore.createNew();
      setData(new Rest({}));
    }
  });

  const updateRest = () => {
    if (data) {
      if (isEdit) {
        restStore.update(data);
        restStore.setCanEdit(false);
      } else {
        // Пушим data в массив 
        restStore.setCanEdit(false);
      }
    }
  };

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    restStore.setCanEdit(true);
  };
  
  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button
          title={isEdit ? 'Сохранить' : 'Создать'}
          onClick={() => updateRest()}
          disabled={!restStore.canEdit}
        />
      </div>
      <TextInput 
        value={data?.name}
        onChange={(val) => setField('name', val)}
        title={'Название'}
      />
      <Checkbox 
        value={data ? data.isClosed : false}
        onChange={(val) => setField('isClosed', val)}
        title={'Данный отдых сейчас недоступен'}
      />
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание (для карточки в списке)'}
      />
    </div>
  );
});