import { useState, useEffect } from 'react';
import { API_KEY } from '../settings';

export const useForcast = (coords) => {
    const [data, setCardData] = useState(null);

    useEffect(() => {
        if (coords) {
            const { lat, lon } = coords;

            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(json => setCardData(json));
        }
    }, [coords]);

    return data;
};