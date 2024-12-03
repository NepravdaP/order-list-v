import styles from "./order.module.scss";
import { newPosProps } from "./types";
const NewPos: React.FC<newPosProps> = ({ newPos, setNewPos }) => {
  return (
    <div className={styles.new_pos}>
      <div className={styles.position__text}>
        <input
          type="text"
          placeholder="Название блюда"
          value={newPos.name}
          onChange={(e) => setNewPos({ ...newPos, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Дополнительно"
          value={newPos.special}
          onChange={(e) => setNewPos({ ...newPos, special: e.target.value })}
        />
        <input
          type="number"
          placeholder="Количество"
          value={newPos.quantity}
          onChange={(e) => setNewPos({ ...newPos, quantity: e.target.value })}
        />
      </div>
    </div>
  );
};
export default NewPos;
