import styles from "./order.module.scss";
import { PositionProps } from "./types";
const Position: React.FC<PositionProps> = ({ position }) => {
  return (
    <div className={styles.position}>
      <div className={styles.position__text}>
        <h2 className={styles.dish_name}>{position.name}</h2>
        <p className={styles.dish_special}>{position.special}</p>
        <p
          className={styles.dish_quantity}
        >{`Количество: ${position.quantity}`}</p>
      </div>
      <div className={styles.position__check}>
        <input type="checkbox" />
      </div>
    </div>
  );
};
export default Position;
