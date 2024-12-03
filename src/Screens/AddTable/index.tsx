import { useState } from "react";
import Button from "../../components/Buttons";
import styles from "./add.module.scss";
import { AddTableProps } from "./types";
import moment from "moment";
import { useDispatch } from "react-redux";
import { addTable } from "../../appSlices";
const AddTable: React.FC<AddTableProps> = ({ setIsAddTable, setTableList }) => {
  const [tableName, setTableName] = useState("");
  const dispatch = useDispatch();
  const handleAddNewTable = () => {
    const newTable = {
      id: `${tableName}v${Math.random()}`,
      name: tableName.length > 0 ? tableName : "Без имени",
      isOpened: true,
      order: [],
      openedAt: moment().format().toString(),
    };
    setTableList((prevState) => [...prevState, newTable]);

    setIsAddTable(false);
    dispatch(addTable(newTable));
    console.log("name: ", tableName);
    console.log("date:", moment().format());
  };

  return (
    <div
      className={styles.add_table_container}
      onClick={() => setIsAddTable(false)}
    >
      <div
        className={styles.table_form}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.table_form_header}>
          <p className={styles.table_form_header__heading}>Новый стол</p>
        </div>
        <form
          className={styles.table_form_body}
          onSubmit={(e) => {
            e.preventDefault();
            handleAddNewTable();
          }}
        >
          <div className={styles.name_input}>
            <p className={styles.name_input__title}>Стол: </p>
            <input
              type="text"
              placeholder="Название/номер"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />
          </div>

          <Button type="submit">Создать</Button>
        </form>
      </div>
    </div>
  );
};
export default AddTable;
