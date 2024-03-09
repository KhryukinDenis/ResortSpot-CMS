import MaterialTable, { Action } from "material-table";
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
  onDelete?: (rowData: any) => void;
  onAdd?: () => void;
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
  };

  const actions: (Action<any> | ((rowData: any) => Action<any>) | undefined)[] = [
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
    //@ts-ignore
    (rowData) => {
      if (props.onDelete) {
        return {
          icon: DeleteIcon,
          tooltip: "Удалить",
          hidden: !props.canEdit,
          onClick: () => props.onDelete?.(rowData)
        }
      }
    },
  ];

  return (
    //@ts-ignore
    <MaterialTable
      title={props.title || titleTable()}
      data={props.data}
      columns={props.column}
      icons={tableIcons}
      style={props.style}
      // actions={[
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
        //@ts-ignore
        (rowData) => {
          if (props.onDelete) {
            return {
              icon: DeleteIcon,
              tooltip: "Удалить",
              hidden: !props.canEdit,
              onClick: () => props.onDelete?.(rowData)
            }
          }
        },
        {
          icon: AddIcon,
          tooltip: "Добавить",
          isFreeAction: true,
          onClick: () => props.onAdd?.(),
          hidden: !props.canAdd,
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
  );
});