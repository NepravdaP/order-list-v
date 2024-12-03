import { Dispatch, SetStateAction } from "react";
import { TablesType } from "../../appSlices";

export type OrderItem = {
  id: string;
  name: string;
  quantity: string;
  isServed: boolean;
  special: string;
};

export type AddNewTable = {
  id: string;
  name: string;
  order: OrderItem[];
};

export type TableCellProps = {
  table: TablesType;
  setActiveOrderEdit: Dispatch<SetStateAction<string>>;
};
