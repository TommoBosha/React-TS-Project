import React, { FC, useState } from "react";
import Jewelry from "../models/Jewelry";
import { Link } from 'react-router-dom';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditJewelryForm from "./EditJewelryForm"  


interface SingleJewelryProps {
    jewelry: Jewelry;
    updateJewelry: (newJewelry: Jewelry) => void;
    deleteJewelry: (id: number) => void;

}

const SingleJewelry: FC<SingleJewelryProps> = ({ jewelry, updateJewelry, deleteJewelry }) => {
    
    const [edit, setEdit] = useState<boolean>(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        deleteJewelry(jewelry.id);
    }

    return (
        <div className="jewelry">
            <img src={`/images/${jewelry.img}`} alt={jewelry.title} />
            <h2>
                <Link to={`/jewelry/${jewelry.id}`}>
                    {jewelry.title}
            </Link>
            </h2>
            <span>{jewelry.price} ₴</span>
            
            <div className="jewelry-controls">
                <AiFillEdit onClick={handleToggleEdit} />
                <AiFillDelete onClick={handleDelete}/>
            </div>

            {edit ? <EditJewelryForm
                data={jewelry}
                updateJewelry={updateJewelry}
                handleToggleEdit={handleToggleEdit}
                
            />
            : null}
        </div>
    )
}

export default SingleJewelry;