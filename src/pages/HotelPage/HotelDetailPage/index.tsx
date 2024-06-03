import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from "./style.module.scss";
import { useIdParams } from "../../../hooks/useIdParams";
import { useStore } from "../../../stores";
import { Hotel } from "../../../model/hotel";
import { useDidMountEffect } from "../../../hooks/useDidMountEffect";
import { setDeep } from "../../../utils/setDeep";
import { TextInput } from "../../../components/ui/text-input";
import { Select } from "../../../components/ui/select/select";
import { NumberInput } from "../../../components/ui/number-input";
import { Textarea } from "../../../components/ui/textarea";
import { Table } from "../../../components/ui/table/table";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { PhotoGallery } from "../../../components/ui/photo-gallery";

export const HotelDetailPage: FC = observer(() => {
  const { id } = useIdParams();
  const isEdit = !!id;
  const hotelStore = useStore("hotelStore");
  const cityStore = useStore("cityStore");
  const roomStore = useStore("roomStore");
  const restStore = useStore("restStore");
  const [data, setData] = useState<Hotel | null>(null);
  const navigate = useNavigate();

  const Stars: number[] = [1, 2, 3, 4, 5];

  useDidMountEffect(async () => {
    if (isEdit) {
      if (cityStore.selectedCity) {
        await hotelStore.fetchById(id, cityStore.selectedCity?.id);
        setData(hotelStore.hotel);
      }
    } else {
      hotelStore.createNew();
      setData(hotelStore.hotel);
    }
  });

  const updateHotel = () => {
    if (data && cityStore.selectedCity) {
      hotelStore.update(data, cityStore.selectedCity?.id);
      setTimeout(() => {
        if (hotelStore.canEdit) return;
        navigate(`/${cityStore.selectedCity?.name}/hotel`);
      }, 700);
    }
  };

  function setField(field: string, val: any) {
    setDeep(data, field, val, setData);
    hotelStore.setCanEdit(true);
  };

  const columnsRoom = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
    { title: "Кв. м.", field: "area" },
    { title: "Кол-во человек", field: "count_people" },
  ];

  const columnsRest = [
    { title: "ID", field: "id" },
    { title: "Название", field: "name" },
  ];

  function titleTableRoom() {
    if (data?.name) {
      return `${data?.name}/Номера`
    } else {
      return 'Название таблицы'
    }
  };

  function titleTableRest() {
    if (data?.name) {
      return `${data?.name}/Отдых`
    } else {
      return 'Название таблицы'
    }
  };

  const handleEditRoom = (id_room: number) => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/${id}/room/${id_room}`)
  };

  const handleEditRest = (id_rest: number) => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/${id}/rest/${id_rest}`)
  };

  const handleDeleteRoom = (id: number) => {
    if (hotelStore.hotel) {
      roomStore.delete(id, hotelStore.hotel.id);
  
      setData((prevData) => {
        if (!prevData) return null;
  
        const updatedRooms = prevData.rooms.filter((item) => item.id !== id);
        
        return {
          ...prevData,
          rooms: updatedRooms
        };
      });
    }
  };

  const handleDeleteRest = (id: number) => {
    if (hotelStore.hotel) {
      restStore.delete(id, hotelStore.hotel.id);
  
      setData((prevData) => {
        if (!prevData) return null;
  
        const updatedRooms = prevData.rests.filter((item) => item.id !== id);
        
        return {
          ...prevData,
          rests: updatedRooms
        };
      });
    }
  };

  const handleAddRoom = () => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/${id}/room/create`);
  };

  const handleAddRest = () => {
    navigate(`/${cityStore.selectedCity?.name}/hotel/${id}/rest/create`);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.btn}>
        <Button
          title={isEdit ? 'Сохранить' : 'Создать'}
          onClick={() => updateHotel()}
          disabled={!hotelStore.canEdit}
        />
      </div>
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
        style={{ width: '300px', fontSize: '16px' }}
      />
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
      <PhotoGallery 
        images={data?.images}
        onChange={(val) => setField('images', val)}
      />
      <Table 
        data={data?.rooms ? data?.rooms : []}
        column={columnsRoom}
        title={titleTableRoom()}
        style={{ width: '100%' }}
        canDelete
        canAdd
        canEdit
        onEdit={(val) => handleEditRoom(val.id)}
        onDelete={(val) => handleDeleteRoom(val.id)}
        onAdd={() => handleAddRoom()}
      />
      <Table 
        data={data?.rests ? data?.rests : []}
        column={columnsRest}
        title={titleTableRest()}
        style={{ width: '100%' }}
        canDelete
        canAdd
        canEdit
        onEdit={(val) => handleEditRest(val.id)}
        onDelete={(val) => handleDeleteRest(val.id)}
        onAdd={() => handleAddRest()}
      />
    </div>
  );
});
