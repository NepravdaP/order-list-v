import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { OrderItem } from "../Screens/TablesList/types";

export type TablesType = {
  id: string;
  name: string;
  isOpened: boolean;
  openedAt: string;
  order: OrderItem[];
};
type TablesSliceType = {
  tables: TablesType[];
};

const initialState: TablesSliceType = {
  tables: [],
};
export type UpdateOrderPayload = {
  id: string;
  order: OrderItem[];
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    setInitialTables: (state) => {
      state.tables = JSON.parse(localStorage.getItem("tables") || "[]");
      console.log("initial tables:", state.tables);
    },
    addTable: (state, action: PayloadAction<TablesType>) => {
      console.log("addTable triggers");

      console.log("state:", current(state.tables));
      console.log("action:", action.payload);
      state.tables.push(action.payload);
      localStorage.setItem("tables", JSON.stringify(state.tables));
    },
    clearTables: (state) => {
      state.tables = [];
      localStorage.setItem("tables", "[]");
    },
    closeTable: (state, action: PayloadAction<string>) => {
      console.log("deleteTable trig");
      // const closedTable = state.tables.find((el) => el.id === action.payload);
      // state.tables = state.tables.filter((el) => el.id != action.payload);
      // if (closedTable) state.tables.push({ ...closedTable, isOpened: false });
      state.tables[
        state.tables.findIndex((el) => el.id === action.payload)
      ].isOpened = false;

      localStorage.setItem("tables", JSON.stringify(state.tables));
    },
    updateOrder: (state, action: PayloadAction<TablesType>) => {
      console.log("upd");
      state.tables[
        state.tables.findIndex((el) => el.id === action.payload.id)
      ].order = action.payload.order;
      localStorage.setItem("tables", JSON.stringify(state.tables));
    },
  },
});

export const {
  setInitialTables,
  addTable,
  clearTables,
  closeTable,
  updateOrder,
} = tablesSlice.actions;

export default tablesSlice.reducer;
