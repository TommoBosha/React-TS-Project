import React, { FC } from "react";
import Jewelry from "../models/Jewelry";
import SingleJewelry from "./SingleJewelry";


interface DisplayJewelryProps {
    jewelryList: Jewelry[];
    updateJewelry: (newJewelry: Jewelry) => void;
    deleteJewelry: (id: number) => void;
}

const DisplayJewelry: FC<DisplayJewelryProps> = ({ jewelryList, updateJewelry, deleteJewelry }) => {

    return (
        <div className="container">
            {jewelryList.map((jewelry) => {
                return <SingleJewelry
                    key={jewelry.id}
                    jewelry={jewelry}
                    updateJewelry={updateJewelry}
                    deleteJewelry={deleteJewelry}
                />
            })}

        </div>
    )
}

export default DisplayJewelry;