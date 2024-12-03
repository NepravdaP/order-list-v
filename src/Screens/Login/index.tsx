import { useSelector } from "react-redux";
import Button from "../../components/Buttons";
import styles from "./login.module.scss";
import { RootState } from "../../store";
import { TablesType } from "../../appSlices";
import { LoginScreenProps } from "./types";
const LoginScreen: React.FC<LoginScreenProps> = ({ setIsStarted }) => {
  const tables = useSelector<RootState>(
    (state) => state.tablesSliceReducer.tables
  ) as TablesType[];

  return (
    <div className={styles.login}>
      {tables.length > 0 && (
        <div className={styles.info_block}>
          <div className={styles.info_block__active}>
            <p className={styles.info_block__text}>Активные</p>
            <div className={styles.info_block__circle}>
              {tables.filter((el) => el.isOpened == true).length}
            </div>
          </div>
          <div className={styles.info_block__closed}>
            <p className={styles.info_block__text}>Закрытые</p>
            <div className={styles.info_block__circle}>
              {tables.filter((el) => el.isOpened == false).length}
            </div>
          </div>
        </div>
      )}
      <h1>Vasilina's order list</h1>
      <Button onClick={() => setIsStarted(true)} border>
        Продолжить
      </Button>
    </div>
  );
};
export default LoginScreen;
