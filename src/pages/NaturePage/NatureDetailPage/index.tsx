import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Nature } from "../../../model/nature";
import { Natures } from "../../../mock/mock";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Textarea } from "../../../components/ui/textarea";
import { TextEditor } from "../../../components/ui/editor";
import { Button } from "../../../components/ui/button";

export const NatureDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const natureStore = useStore("natureStore");
  const [data, setData] = useState<Nature | null>(null);

  const arr = Natures;

  useDidMountEffect(() => {
    if (isEdit) {
      // natureStore.fetchById(id);
      // setData(natureStore.nature);
      setData(arr[0]);
    } else {
      // natureStore.createNew();
      setData(new Nature({}));
    }
  });

  const updateNature = () => {
    if (data) {
      if (isEdit) {
        natureStore.update(data);
        natureStore.setCanEdit(false);
      } else {
        // Пушим data в массив 
        natureStore.setCanEdit(false);
      }
    }
  };

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    natureStore.setCanEdit(true);
  };
  
  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button 
          title={isEdit ? 'Сохранить' : 'Создать'}
          onClick={() => updateNature()}
          disabled={!natureStore.canEdit}
        />
      </div>
      <TextInput 
        value={data?.name}
        onChange={(val) => setField('name', val)}
        title={'Название'}
      />
      <Textarea 
        value={data?.description_min}
        onChange={(val) => setField('description_min', val)}
        title={'Краткое описание (для карточки в списке)'}
        maxCount={550}
      />
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание'}
      />
    </div>
  );
});