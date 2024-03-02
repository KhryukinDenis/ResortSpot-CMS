import MaterialTable from "material-table";
import { observer } from "mobx-react-lite";
import { FC } from "react";
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
  onEdit?: () => void;
  onAdd?: () => void;
  onDelete?: () => void;
}

export const Table: FC<IProps> = observer((props) => {
  const appStore = useStore("appStore");
  
  function titleTable() {
    if (appStore.selectedCity && appStore.selectedCategory) {
      return `${appStore.selectedCity.name_rus}/${appStore.selectedCategory.name_rus}`
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
        actions={[
          {
            icon: DeleteIcon,
            tooltip: "Удалить",
            onClick: () => props.onDelete,
            hidden: !props.canDelete,
          },
          {
            icon: EditIcon,
            tooltip: "Редактировать",
            onClick: () => props.onEdit,
            hidden: !props.canEdit,
          },
          {
            icon: AddIcon,
            tooltip: "Добавить",
            isFreeAction: true,
            onClick: () => props.onAdd,
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
    </>
  );
});