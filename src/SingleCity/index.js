import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useForcast } from '../hooks/useForecast';
import { Card } from '../card';
import { DayliCard } from '../DailyCard';

export const SingleCity = () => {
    const { city } = useParams();
    const params = useParams();
    console.log(params);
    
    const [cityCoord, setCityCoord] = useState(null);
    const data = useForcast(cityCoord);

    return (
        <div className="SingleCityWrap">
            <Link to="/home" className="GoBack">Go back</Link>

            <Card city={city} setCityCoord={setCityCoord} />

            {data &&
                <div className='DayliCards'>
                    {data.daily.map(dailyCard => <DayliCard dailyCard={dailyCard} key={dailyCard.dt} />)}
                </div>
            }
        </div>
    );
}