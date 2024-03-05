import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Culture } from "../../../model/culture";
import { Cultures } from "../../../mock/mock";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Textarea } from "../../../components/ui/textarea";
import { TextEditor } from "../../../components/ui/editor";

export const CultureDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const cultureStore = useStore("cultureStore");
  const [data, setData] = useState<Culture | null>(null);

  const arr = Cultures;

  useDidMountEffect(() => {
    // cultureStore.fetchById(id);
    // setData(cultureStore.culture);
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
      {/* TODO: Подумать над типом данных и компонентом */}
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
      <TextEditor 
        value={data?.description}
        onChange={(val) => setField('description', val)}
        title={'Описание'}
      />
    </div>
  );
});