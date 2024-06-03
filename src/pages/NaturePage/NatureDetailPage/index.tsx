import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Nature } from "../../../model/nature";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Textarea } from "../../../components/ui/textarea";
import { TextEditor } from "../../../components/ui/editor";
import { Button } from "../../../components/ui/button";
import { PhotoGallery } from "../../../components/ui/photo-gallery";
import { useNavigate } from "react-router-dom";

export const NatureDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const natureStore = useStore("natureStore");
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<Nature | null>(null);
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    if (isEdit) {
      if (cityStore.selectedCity) {
        await natureStore.fetchById(id, cityStore.selectedCity.id);
        setData(natureStore.nature);
      }
    } else {
      natureStore.createNew();
      setData(natureStore.nature);
    }
  });

  const updateNature = () => {
    if (data && cityStore.selectedCity) {
      natureStore.update(data, cityStore.selectedCity?.id);
      setTimeout(() => {
        if (natureStore.canEdit) return;
        navigate(`/${cityStore.selectedCity?.name}/nature`);
      }, 700);
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
      <PhotoGallery 
        images={data?.images}
        onChange={(val) => setField('images', val)}
      />
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание'}
      />
    </div>
  );
});