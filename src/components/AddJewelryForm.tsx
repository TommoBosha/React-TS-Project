import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import './styles.css';
import Jewelry from '../models/Jewelry';

interface AddJewelryFormProps {
    addJewelry: (newJewelry: Jewelry) => void;
}

const initState = {
    title: '',
    price: '',
    img: '',
}

const AddJewelryForm: FC<AddJewelryFormProps> = ({addJewelry}) => {
    const [newJewelry, setNewJewelry] =
        useState<{ title: string, price: string, img: string }>(initState);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;

        setNewJewelry({
            ...newJewelry,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const { title, price, img } = newJewelry;

        if (title && price && img) {
            addJewelry({
                title,
                img,
                price: Number(price),
                id: Date.now()
            })
            setNewJewelry(initState)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Назва'
                name="title"
                onChange={handleChange}
                value={newJewelry.title}
            />
            <input
                type="text"
                placeholder='Вартість'
                name="price"
                onChange={handleChange}
                value={newJewelry.price}
            />
            <input
                type="text"
                placeholder='Зображення наприклад jewelry-1.webp'
                name="img"
                onChange={handleChange}
                value={newJewelry.img}
            />
            <button type="submit"> + Додати на полицю</button>
    </form>
)
}

export default AddJewelryForm;