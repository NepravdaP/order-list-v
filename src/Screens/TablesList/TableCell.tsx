import moment from "moment";
import styles from "./list.module.scss";
import { TableCellProps } from "./types";
import Button from "../../components/Buttons";
import { useDispatch } from "react-redux";
import { closeTable } from "../../appSlices";
const TableCell: React.FC<TableCellProps> = ({ table, setActiveOrderEdit }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={styles.table_cell}
      onClick={() => setActiveOrderEdit(table.id)}
    >
      <div className={styles.cell_text}>
        <div className={styles.cell_text__top}>
          <p className={styles.cell_text__name}>{`Стол ${table.name}`}</p>
        </div>
        <div className={styles.cell_text__bottom}>
          <>
            <p className={styles.cell_text__opened}>{`Открыт: ${moment(
              table.openedAt
            ).format("HH:MM")} `}</p>
          </>

          <p
            className={styles.cell_text__positions}
          >{`Позиции: ${table.order.length}`}</p>
        </div>
      </div>
      <Button
        styletype="secondary_link"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(closeTable(table.id));
        }}
      >
        Закрыть
      </Button>
    </div>
  );
};
export default TableCell;
