import { observer } from "mobx-react-lite";
import { FC, useState } from "react";
import s from './style.module.scss';
import { Img } from "../image/img";
import plus from "../../../assets/images/icons/plus.svg";
import del from "../../../assets/images/icons/close_krest.svg";
import eye from "../../../assets/images/icons/eye.svg";
import { useDidUpdateEffect } from "../../../hooks/useDidUpdateEffect";

interface IProps {
  images?: string[];
  onChange?: (val: string[]) => void;
}

export const PhotoGallery: FC<IProps> = observer((props) => {
  const [data, setData] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleActions, setVisibleActions] = useState(new Array(data.length).fill(false));

  useDidUpdateEffect(() => {
    setData(props.images!);
  }, [props.images]);
  
  const addImg = () => {
    if (data.length >= 8) return;
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/png, image/jpeg';
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const files = target.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (event: ProgressEvent<FileReader>) => {
          const imageData = event.target?.result as string;
          if (imageData) {
            setData([...data, imageData]);
          }
        };
        reader.readAsDataURL(files[0]);
      }
    };
    input.click();
  };

  const delImg = (index: number) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const viewImg = (image: string) => {
    setSelectedImage(image);
  };  

  useDidUpdateEffect(() => {
    if (!data) return;
    props.onChange?.(data);
  }, [data]);

  return (
    <div className={s.wrapper}>
      {selectedImage && (
        <div className={s.modal} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className={s.fullScreenImage} alt="Full Screen" />
        </div>
      )}
      <div className={s.title}>Фотогалерея</div>
      <div className={s.block}>
        <div className={data.length < 8 ? s.addBtn : s.addBtnDisabled} onClick={addImg}>
          <Img src={plus} />
        </div>
        <div className={s.list}>
          {data?.map((image, idx) => (
              <div 
              key={idx}
              className={s.images}
              onMouseEnter={() => {
                const updatedActions = [...visibleActions];
                updatedActions[idx] = true;
                setVisibleActions(updatedActions);
              }}
              onMouseLeave={() => {
                const updatedActions = [...visibleActions];
                updatedActions[idx] = false;
                setVisibleActions(updatedActions);
              }}
            >
              {visibleActions[idx] && (
                <div className={s.action}>
                  <Img src={eye} className={s.actionImg} onClick={() => viewImg(image)}/>
                  <Img src={del} className={s.actionImg} onClick={() => delImg(idx)}/>
                </div>
              )}
              <Img key={idx} src={image} className={s.image}/>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
});
