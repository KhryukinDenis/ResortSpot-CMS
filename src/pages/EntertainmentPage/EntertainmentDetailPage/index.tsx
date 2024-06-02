import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { Entertainment } from "../../../model/entertainment";
import { useStore } from "../../../stores";
import { useIdParams } from "../../../hooks/useIdParams";
import { TextInput } from "../../../components/ui/text-input";
import { setDeep } from "../../../utils/setDeep";
import { NumberInput } from "../../../components/ui/number-input";
import { Textarea } from "../../../components/ui/textarea";
import { TextEditor } from "../../../components/ui/editor";
import { TimePicker } from "../../../components/ui/time-picker";
import { Button } from "../../../components/ui/button";
import { PhotoGallery } from "../../../components/ui/photo-gallery";
import { useNavigate } from "react-router-dom";

export const EntertainmentDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const entertainmentStore = useStore("entertainmentStore");
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<Entertainment | null>(null);
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    if (isEdit) {
      if (cityStore.selectedCity) {
        await entertainmentStore.fetchById(id, cityStore.selectedCity.id);
        setData(entertainmentStore.entertainment);
      }
    } else {
      entertainmentStore.createNew();
      setData(entertainmentStore.entertainment);
    }
  });

  const updateEntertainment = () => {
    if (data && cityStore.selectedCity) {
      entertainmentStore.update(data, cityStore.selectedCity.id);
      entertainmentStore.setCanEdit(false);
      setTimeout(() => {
        navigate(`/${cityStore.selectedCity?.name}/entertainment`);
      }, 500);
    }
  };

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    entertainmentStore.setCanEdit(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button
          title={isEdit ? 'Сохранить' : 'Создать'}
          onClick={() => updateEntertainment()}
          disabled={!entertainmentStore.canEdit}
        />
      </div>
      <TextInput 
        value={data?.name}
        onChange={(val) => setField('name', val)}
        title={'Название'}
      />
      <NumberInput 
        value={data?.count_people}
        onChange={(val) => setField('count_people', val)}
        title={'Количество человек'}
      />
      <NumberInput 
        value={data?.price}
        onChange={(val) => setField('price', val)}
        title={'Цена, ₽'}
      />
      <TimePicker 
        value={data?.time}
        onChange={(val) => setField('time', val)}
        title={'Время'}
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