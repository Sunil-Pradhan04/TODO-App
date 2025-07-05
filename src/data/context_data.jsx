import { createContext, use, useEffect, useState } from "react";

export const contextData = createContext();

const ContextProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const [newData, setNewData] = useState(() => {
    const storedData = localStorage.getItem("data");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(newData));
  }, [newData]);
  const [vital, setVital] = useState(() => {
    const stroedVital = localStorage.getItem("vital");
    return stroedVital ? JSON.parse(stroedVital) : [];
  });
  useEffect(() => {
    localStorage.setItem("vital", JSON.stringify(vital));
  }, [vital]);

  const [complite, setComplite] = useState(() => {
    const storeC = localStorage.getItem("complite");
    return storeC ? JSON.parse(storeC) : [];
  });

 
  const [onGoing , setOnGoing] = useState(() => {
    const newGo = localStorage.getItem("onGoing");
    return newGo ? JSON.parse(newGo) : [];
  })
  const handleOnGoing = (item) => {
    setOnGoing((prev) => {
      return [item , ...prev];
    })
    const newD = newData.filter((data) => item !== data);
    setNewData(newD);
  }
   useEffect(() => {
    localStorage.setItem("onGoing" , JSON.stringify(onGoing));
   },[onGoing])

    const Done = (item) => {
    setComplite((prev) => {
      return [item, ...prev];
    });
    const newD = newData.filter((data) => item !== data);
    setNewData(newD);
    const Going = onGoing.filter((data) => item !== data);
    setOnGoing(Going);
  };
  useEffect(() => {
    localStorage.setItem("complite", JSON.stringify(complite));
  }, [complite]);

  

   const deletItem = (item) => {
    const newArr = newData.filter((data) => {
      return data.id !== item.id;
    });
    setNewData(newArr);
    const newVital = vital.filter((id) => id !== item.id);
    setVital(newVital);

    const newC = complite.filter((data) => item !== data);
    setComplite(newC);
    const Going = onGoing.filter((data) => item !== data);
    setOnGoing(Going);
  };
  return (
    <contextData.Provider
      value={{
        newData,
        setNewData,
        show,
        setShow,
        vital,
        setVital,
        deletItem,
        complite,
        setComplite,
        Done,
        handleOnGoing,
        onGoing,
      }}
    >
      {children}
    </contextData.Provider>
  );
};
export default ContextProvider;
