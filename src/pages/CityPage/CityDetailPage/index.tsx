import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { Button } from "../../../components/ui/button";
import { useStore } from "../../../stores";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { City } from "../../../model/city";
import { Cities } from "../../../mock/mock";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { TextEditor } from "../../../components/ui/editor";
import { NumberInput } from "../../../components/ui/number-input";

interface IProps {
  city?: string;
}

export const CityDetailPage: FC<IProps> = observer((props) => {
  const cityStore = useStore("cityStore");
  const [data, setData] = useState<City | null>(null);
  
  const arr = Cities;
  const actualCity = arr.find(item => item.name === props.city);

  const updateCity = () => {
    if (data) {
      cityStore.update(data);
      cityStore.setCanEdit(false);
    }
  };

  useDidMountEffect(() => {
    // if (props.city) {
    //   cityStore.fetchOne(props.city);
    //   setData(cityStore.city);
    // }
    if (actualCity) setData(actualCity);
  });

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
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание'}
      />
    </div>
  );
});
