import MaterialTable from "material-table";
import { observer } from "mobx-react-lite";
import { CSSProperties, FC } from "react";
import tableIcons from "../../../utils/MaterialTableIcons";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from "@material-ui/icons/AddBox";
import { useStore } from "../../../stores";

interface IProps {
  data: any[];
  column: any[];
  title?: string;
  canEdit?: boolean;
  canAdd?: boolean;
  canDelete?: boolean;
  onEdit?: (rowData: any) => any;
  onAdd?: () => void;
  onDelete?: () => void;
  style?: CSSProperties;
}

export const Table: FC<IProps> = observer((props) => {
  const cityStore = useStore("cityStore");
  const categoryStore = useStore("categoryStore");
  
  function titleTable() {
    if (cityStore.selectedCity && categoryStore.selectedCategory) {
      return `${cityStore.selectedCity.name_rus}/${categoryStore.selectedCategory.name_rus}`
    } else {
      return 'Название таблицы'
    }
  }

  return (
    <>
      <MaterialTable
        title={props.title || titleTable()}
        data={props.data}
        columns={props.column}
        icons={tableIcons}
        style={props.style}
        // actions={[
        //   {
        //     icon: EditIcon,
        //     tooltip: "Редактировать",
        //     onClick: (rowData) => console.log(rowData),
        //     hidden: !props.canEdit,
        //   },
        //   {
        //     icon: DeleteIcon,
        //     tooltip: "Удалить",
        //     onClick: () => props.onDelete?.(),
        //     hidden: !props.canDelete,
        //   },
        //   {
        //     icon: AddIcon,
        //     tooltip: "Добавить",
        //     isFreeAction: true,
        //     onClick: () => props.onAdd?.(),
        //     hidden: !props.canAdd,
        //   },
        // ]}
        actions={[
          //@ts-ignore
          (rowData) => {
            if (props.onEdit) {
              return {
                icon: EditIcon,
                tooltip: "Редактировать",
                hidden: !props.canEdit,
                onClick: () => props.onEdit?.(rowData)
              }
            }
          },
        ]}
        localization={{
          toolbar: {
            searchPlaceholder: "Поиск",
            searchTooltip: "Найти",
          },
          header: {
            actions: "Действия",
          },
          pagination: {
            labelRowsSelect: "записей",
            firstTooltip: "Первая страница",
            lastTooltip: "Последняя страница",
            previousTooltip: "Назад",
            nextTooltip: "Вперед",
          },
        }}
      />
    </>
  );
});