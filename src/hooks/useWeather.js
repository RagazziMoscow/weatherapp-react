import { useState, useEffect } from "react";

import { API_KEY } from '../settings';

export const useWeather = (city) => {
    const [data, setCardData] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(fetchedData => {
            if (fetchedData && fetchedData.cod === '404') {
                throw new Error('CITY NOT FOUND');
            } else {
                setCardData(fetchedData);
            }
        })
        .catch((err) => {
            console.log(err);
            setCardData(null);
        });
    }, [city]);

    return data;
};