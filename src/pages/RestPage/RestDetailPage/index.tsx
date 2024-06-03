import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Rest } from "../../../model/rest";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { TextEditor } from "../../../components/ui/editor";
import { Checkbox } from "../../../components/ui/checkbox";
import { Button } from "../../../components/ui/button";
import { PhotoGallery } from "../../../components/ui/photo-gallery";
import { useNavigate } from "react-router-dom";

export const RestDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const restStore = useStore("restStore");
  const hotelStore = useStore("hotelStore");
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<Rest | null>(null);
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    if (isEdit) {
      if (hotelStore.hotel) {
        await restStore.fetchById(id, hotelStore.hotel.id);
        setData(restStore.rest);
      }
    } else {
      restStore.createNew();
      setData(restStore.rest);
    }
  });

  const updateRest = () => {
    if (data && hotelStore.hotel) {
      restStore.update(data, hotelStore.hotel.id);
      setTimeout(() => {
        if (restStore.canEdit) return;
        navigate(`/${cityStore.selectedCity?.name}/hotel/${hotelStore.hotel?.id}`);
      }, 700);
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
      <PhotoGallery 
        images={data?.images}
        onChange={(val) => setField('images', val)}
      />
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание (для карточки в списке)'}
      />
    </div>
  );
});