import { useEffect, useState } from "react";
import Button from "../../components/Buttons";
import { OrderItem } from "../TablesList/types";
import NewPos from "./NewPos";
import styles from "./order.module.scss";
import Position from "./Position";
import { OrderProps } from "./types";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../appSlices";

const OrderScreen: React.FC<OrderProps> = ({ setActiveOrderEdit, table }) => {
  const dispatch = useDispatch();
  const [newPos, setNewPos] = useState<OrderItem>({
    id: "",
    name: "",
    special: "",
    quantity: "",
    isServed: false,
  });
  const [newOrder, setNewOrder] = useState<OrderItem[]>(table.order);
  const handleNewPosBtn = () => {
    setNewPos({
      ...newPos,
      id: `${table.order.length}v${Math.random()}`,
      name: newPos.name ? newPos.name : "Без названия",
    });

    setNewOrder([...newOrder, newPos]);
    setNewPos({
      id: "",
      name: "",
      special: "",
      quantity: "",
      isServed: false,
    });
  };
  const handleSave = () => {
    const updatedTable = { ...table, order: newOrder };
    dispatch(updateOrder(updatedTable));
    setTimeout(() => {
      setNewOrder(table.order);
      setActiveOrderEdit("");
    }, 200);
  };
  useEffect(() => {
    console.log("nO:", newOrder);
  }, [newOrder]);
  return (
    <div className={styles.order} onClick={() => setActiveOrderEdit("")}>
      <div
        className={styles.order_container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.order_header}>
          <h2>{`Стол ${table.name}`}</h2>
        </div>
        <div className={styles.order_body}>
          <div className={styles.order_list}>
            {newOrder.map((el) => (
              <Position key={el.id} position={el} />
            ))}

            <NewPos newPos={newPos} setNewPos={setNewPos} />
          </div>

          <div className={styles.btn_block}>
            <Button styletype="primary" onClick={handleNewPosBtn}>
              <h2>+</h2>
            </Button>
            <Button onClick={handleSave}>Сохранить</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderScreen;
