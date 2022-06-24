import { useState, useEffect } from "react";

export const useCitiesList = () => {
    const [cities, setCitiesList] = useState(JSON.parse(localStorage.getItem('citiesList')) || []);
    useEffect(() => {
        localStorage.setItem('citiesList', JSON.stringify(cities));
    }, [cities]);

    return [cities, setCitiesList];
};