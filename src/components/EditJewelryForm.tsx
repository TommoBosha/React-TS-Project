import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import Jewelry from "../models/Jewelry";
import './styles.css';

interface EditJewelryFormProps {
    data: Jewelry;
    updateJewelry: (newJewelry: Jewelry) => void;
    handleToggleEdit: () => void;
}


const EditJewelryForm:FC<EditJewelryFormProps> = ({data, updateJewelry, handleToggleEdit}) => {
    
    const [editJewelry, setEditJewelry] = useState<Jewelry>(data)
    
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;

        setEditJewelry({
            ...editJewelry,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { title, price, img } = editJewelry;

        if (title && price && img) {
            updateJewelry(editJewelry);
            handleToggleEdit();
        }
    }

    return (
        <form
            className="edit-form"
            onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Назва'
                name="title"
                onChange={handleChange}
                value={editJewelry.title}
            />
            <input
                type="text"
                placeholder='Вартість'
                name="price"
                onChange={handleChange}
                value={editJewelry.price}
            />
            <input
                type="text"
                placeholder='Зображення'
                name="img"
                onChange={handleChange}
                value={editJewelry.img}
            />
            <button type="submit"> Підтвердити</button>
    </form>
)
}

export default EditJewelryForm