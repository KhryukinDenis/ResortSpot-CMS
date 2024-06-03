import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Culture } from "../../../model/culture";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Textarea } from "../../../components/ui/textarea";
import { TextEditor } from "../../../components/ui/editor";
import { Button } from "../../../components/ui/button";
import { PhotoGallery } from "../../../components/ui/photo-gallery";
import { useNavigate } from "react-router-dom";

export const CultureDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const cultureStore = useStore("cultureStore");
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<Culture | null>(null);
  const navigate = useNavigate();

  useDidMountEffect(async () => {
    if (isEdit) {
      if (cityStore.selectedCity) {
        await cultureStore.fetchById(id, cityStore.selectedCity?.id);
        setData(cultureStore.culture);
      }
    } else {
      cultureStore.createNew();
      setData(cultureStore.culture);
    }
  });

  const updateCulture = () => {
    if (data && cityStore.selectedCity) {
      cultureStore.update(data, cityStore.selectedCity?.id);
      setTimeout(() => {
        if (cultureStore.canEdit) return;
        navigate(`/${cityStore.selectedCity?.name}/culture`);
      }, 700);
    }
  };

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    cultureStore.setCanEdit(true);
  };
  
  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button
          title={isEdit ? 'Сохранить' : 'Создать'}
          onClick={() => updateCulture()}
          disabled={!cultureStore.canEdit}
        />
      </div>
      <TextInput 
        value={data?.name}
        onChange={(val) => setField('name', val)}
        title={'Название'}
      />
      <TextInput 
        value={data?.address}
        onChange={(val) => setField('address', val)}
        title={'Адрес'}
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