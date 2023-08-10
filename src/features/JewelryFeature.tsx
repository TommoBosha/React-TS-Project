import React, { FC, useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Jewelry from "../models/Jewelry";


const JewelryFeature: FC = () => {
    
    const [jewelry, setJewelry] = useState<Jewelry | null>(null);

    const { id } = useParams();



    useEffect(() => {
        
        const jewelriesState = localStorage.getItem('jewelriesState');
        
        if (jewelriesState && id) {
            const jewelriesList = JSON.parse(jewelriesState);
            const searchId = parseInt(id);

            const currentJewelry = jewelriesList.find((p: Jewelry) => p.id === searchId);
            setJewelry(currentJewelry);
    }
    }, [id]);

    
    return (
        <>
            <span className="heading">Ваша прикраса</span>
            <div className="jewelry jewelry-page">
                <img
                    src={`/images/${jewelry?.img}`}
                    alt={jewelry?.title}
                />
                <h2>{jewelry?.title}</h2>
                <span>{jewelry?.price} ₴</span>
                <p> Прикрась себе!</p>
            </div>
        </>
)
    
}

export default JewelryFeature;

