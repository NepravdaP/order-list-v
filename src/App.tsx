import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { setInitialTables } from "./appSlices";
import LoginScreen from "./Screens/Login";
import TablesListScreen from "./Screens/TablesList";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitialTables());
  });
  return (
    <>
      {isStarted ? (
        <TablesListScreen />
      ) : (
        <LoginScreen setIsStarted={setIsStarted} />
      )}
    </>
  );
}

export default App;
