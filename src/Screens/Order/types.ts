import { Dispatch, SetStateAction } from "react";
import { TablesType } from "../../appSlices";
import { OrderItem } from "../TablesList/types";

export type OrderProps = {
  setActiveOrderEdit: Dispatch<SetStateAction<string>>;
  table: TablesType;
};

export type newPosProps = {
  newPos: OrderItem;
  setNewPos: Dispatch<SetStateAction<OrderItem>>;
};

export type PositionProps = {
  position: OrderItem;
};
