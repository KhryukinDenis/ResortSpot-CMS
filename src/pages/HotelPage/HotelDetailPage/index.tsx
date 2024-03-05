import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Hotel } from "../../../model/hotel";
import { Hotels } from "../../../mock/mock";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Select } from "../../../components/ui/abstract/select/select";
import { NumberInput } from "../../../components/ui/number-input";
import { Textarea } from "../../../components/ui/textarea";

export const HotelDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const hotelStore = useStore("hotelStore");
  const [data, setData] = useState<Hotel | null>(null);

  const arr = Hotels;

  const Stars: number[] = [1, 2, 3, 4, 5];

  useDidMountEffect(() => {
    // hotelStore.fetchById(id);
    // setData(hotelStore.hotel);
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
      <Select 
        option={data?.star}
        options={Stars}
        onChange={(val) => setField('star', val)}
        title={'Количество звезд'}
        placeholder={'Выберите кол-во звёзд'}
        style={{ width: '300px' }}
      />
      {/* TODO: Подумать над типом данных и компонентом */}
      <TextInput
        value={data?.address}
        onChange={(val) => setField('address', val)}
        title={'Адрес'}
      />
      <NumberInput 
        value={data?.distanse_sea}
        onChange={(val) => setField('distanse_sea', val)}
        title={'Расстояние до моря, км'}
      />
      <NumberInput 
        value={data?.price}
        onChange={(val) => setField('price', val)}
        title={'Цена, ₽'}
      />
      <Textarea 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Краткое описание (для карточки в списке)'}
        maxCount={550}
      />
    </div>
  );
});