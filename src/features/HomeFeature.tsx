import React, { FC, useState, useEffect } from "react";
import AddJewelryForm from "../components/AddJewelryForm";
import Jewelry from "../models/Jewelry";
import DisplayJewelry from "../components/DisplayJewelry";

const HomeFeature: FC = () => {
  const [jewelryList, setJewelryList] = useState<Jewelry[]>([]);

  const addJewelry = (newJewelry: Jewelry) => {
    const newJewelryList = [...jewelryList, newJewelry];
    setJewelryList(newJewelryList);
    localStorage.setItem("jewelriesState", JSON.stringify(newJewelryList));
  };

  const updateJewelry = (newJewelry: Jewelry) => {

    const newJewelryList = jewelryList.map((jewelry) =>
      jewelry.id === newJewelry.id ? newJewelry : jewelry
    );

    setJewelryList(newJewelryList);

    localStorage.setItem("jewelriesState", JSON.stringify(newJewelryList));
  };

  const deleteJewelry = (id: number) => {
    const newJewelryList = jewelryList.filter((jewelry) => jewelry.id !== id);
    setJewelryList(newJewelryList);

    localStorage.setItem("jewelriesState", JSON.stringify(newJewelryList));
  };

  useEffect(() => {
    
    const jewelriesState = localStorage.getItem('jewelriesState');
    
    if (jewelriesState) {
      setJewelryList(JSON.parse(jewelriesState));
    }
  }, []);

  return (
    <div className="App">
      <div className="wrap">
        <span className="heading">Наші прикраси</span>
        <AddJewelryForm addJewelry={addJewelry} />
        <DisplayJewelry
          jewelryList={jewelryList}
          updateJewelry={updateJewelry}
          deleteJewelry={deleteJewelry}
        />
      </div>
    </div>
  );
};

export default HomeFeature;
