import { useState, useRef } from "react";

export const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleOnClick = () => {
        setCitiesList((currentCities) => [...currentCities, inputValue]);
        setInputValue('');
        inputRef.current.focus();
    };

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    );
}
