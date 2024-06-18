import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContex = createContext();

export const GlobalProvider = (props) => {
  const [fruitsArr, setFruitsArr] = useState([]);

  const requestMenuDB = async () => {
    const response = await axios.get(`http://localhost:3000/fruits`);
    // console.log(response.data);
    setFruitsArr(response.data);
    return response.data;
  };
  useEffect(() => {
    requestMenuDB();
  }, []);

  return (
    <GlobalContex.Provider value={{ requestMenuDB, fruitsArr }}>
      {props.children}
    </GlobalContex.Provider>
  );
};
