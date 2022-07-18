import { memo, useContext, useEffect } from "react";
import { Link, useMatch } from 'react-router-dom';

import { useWeather } from "../hooks/useWeather";

import { GlobalContext } from "../App";

const CardNoMemo = ({ city, setCityCoord }) => {
    const { dispatch } = useContext(GlobalContext);
    const data = useWeather(city);
    const isHome = !!useMatch('/home');

    useEffect(() => {
        if (data && data.coord.lat && data.coord.lon && setCityCoord) {
            setCityCoord({
                lat: data.coord.lat,
                lon: data.coord.lon
            });
        }
    }, [data, setCityCoord]);

    const handleOnEdit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: 'EDIT_CITY',
            payload: city
        });
    };

    const handleOnDelete = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch({
            type: 'DELETE_CITY',
            payload: city
        });
    };

    if (data === null) {
        return (
            <div className="Card">
                <div className="ActionButtonWrap">
                    <button className="ActionButton" onClick={handleOnEdit}>edit</button>
                    <button className="ActionButton" onClick={handleOnDelete}>X</button>
                </div>
                <div className="MainInfo">
                    <div className="Title">{city}</div>
                    <div className="Description">Not Found</div>
                </div>
            </div>
        );
    }

    if (!data) return;

    const { name, main, weather } = data;
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;

    return (
        isHome
            ? (
                <Link to={`/city/${city.toLowerCase()}`} className="Card">
                    <div className="ActionButtonWrap">
                        <button className="ActionButton" onClick={handleOnEdit}>edit</button>
                        <button className="ActionButton" onClick={handleOnDelete}>X</button>
                    </div>
                    <div className="MainInfo">
                        <img
                            className="Icon"
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt="icon"
                        />
                        <div className="Title">{name}</div>
                        <div className="Description">{description}</div>
                        <div className="Temperature TemperatureIcon">{temp.toFixed()}</div>
                    </div>
                    <div className="Information">
                        <div>Humidity: {humidity}</div>
                        <div>Feels like: {feels_like}</div>
                    </div>
                </Link>
            )
            : (
                <div className="Card">
                    <div className="MainInfo">
                        <img
                            className="Icon"
                            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                            alt="icon"
                        />
                        <div className="Title">{name}</div>
                        <div className="Description">{description}</div>
                        <div className="Temperature TemperatureIcon">{temp.toFixed()}</div>
                    </div>
                    <div className="Information">
                        <div>Humidity: {humidity}</div>
                        <div>Feels like: {feels_like}</div>
                    </div>
                </div>
            )
    );
};

export const Card = memo(CardNoMemo);
