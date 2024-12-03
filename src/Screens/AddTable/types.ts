import { Dispatch, SetStateAction } from "react";
import { TablesType } from "../../appSlices";

export type AddTableProps = {
  setIsAddTable: Dispatch<SetStateAction<boolean>>;
  setTableList: Dispatch<SetStateAction<TablesType[]>>;
};
