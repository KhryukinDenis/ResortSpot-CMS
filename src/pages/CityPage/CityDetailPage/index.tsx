import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Button } from "../../../components/ui/button";
import { useStore } from "../../../stores";
import { City } from "../../../model/city";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { TextEditor } from "../../../components/ui/editor";
import { NumberInput } from "../../../components/ui/number-input";
import { PhotoGallery } from "../../../components/ui/photo-gallery";
import { useDidUpdateEffect } from "../../../hooks/useDidUpdateEffect";

interface IProps {
  city: City;
}

export const CityDetailPage: FC<IProps> = observer((props) => {
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<City | null>(props.city);
  
  const updateCity = () => {
    if (data) {
      cityStore.update(data);
      cityStore.setCanEdit(false);
    }
  };

  useDidUpdateEffect(async () => {
    await cityStore.fetchOne(props.city.id);
    setData(cityStore.city);
  }, [props.city]);

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    cityStore.setCanEdit(true);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button 
          title={'Сохранить'}
          onClick={() => updateCity()}
          disabled={!cityStore.canEdit}
        />
      </div>
      <NumberInput 
        value={data?.id}
        title={'Идентификатор города'}
        disabled
      />
      <TextInput 
        value={data?.name_rus}
        title={'Название'}
        disabled
      />
      <TextInput 
        value={data?.name}
        title={'Название на английском языке'}
        disabled
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
