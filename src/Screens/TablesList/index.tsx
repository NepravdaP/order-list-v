import { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import styles from "./list.module.scss";
import TableCell from "./TableCell";
import AddTable from "../AddTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { TablesType } from "../../appSlices";
import OrderScreen from "../Order";

const TablesListScreen = () => {
  const tablesStore = useSelector<RootState>(
    (state) => state.tablesSliceReducer.tables
  ) as TablesType[];
  const [activeOrderEdit, setActiveOrderEdit] = useState("");
  const [tablesList, setTablesList] = useState<TablesType[]>([]);

  const [isAddTableOpened, setIsAddTableOpened] = useState(false);

  useEffect(() => {
    (async () => {
      console.log("TableSelector:", tablesList);
      setTablesList(tablesStore);
    })();
  }, [tablesStore]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles.table}>
        {tablesList.length > 0 ? (
          tablesList
            .filter((el) => el.isOpened === true)
            .map((el) => (
              <TableCell
                key={el.id}
                table={el}
                setActiveOrderEdit={setActiveOrderEdit}
              />
            ))
        ) : (
          <p>Нет столов</p>
        )}
        {}
      </div>
      <div className={styles.btn_block}>
        <Button onClick={() => setIsAddTableOpened(true)}>Добавить стол</Button>
      </div>

      {isAddTableOpened && (
        <AddTable
          setIsAddTable={setIsAddTableOpened}
          setTableList={setTablesList}
        />
      )}
      {activeOrderEdit && (
        <OrderScreen
          setActiveOrderEdit={setActiveOrderEdit}
          table={tablesList.filter((el) => el.id === activeOrderEdit)[0]}
        />
      )}
    </div>
  );
};
export default TablesListScreen;
