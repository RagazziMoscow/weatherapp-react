import { useRef, useContext } from "react";

import { GlobalContext } from "../App";

export const Input = () => {
    const { dispatch, state: { inputValue, editingCity } } = useContext(GlobalContext);
    const inputRef = useRef(null);
    const handleOnChange = (event) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: event.target.value
        });
    };
    const handleOnClick = () => {
        dispatch({
            type: 'ADD_CITY',
            payload: inputValue
        });
        dispatch({
            type: 'RESET_INPUT_VALUE'
        });
        inputRef.current.focus();
    };
    const handleOnDone = () => {
        dispatch({
            type: 'EDIT_CITY_DONE',
            payload: inputValue
        });
        dispatch({
            type: 'RESET_INPUT_VALUE'
        });
        inputRef.current.focus();
    };

    return (
        <div className="InputWrap">
            <input className="Input" onChange={handleOnChange} value={inputValue} ref={inputRef} />
            {
                editingCity
                    ?   <button className="Button" onClick={handleOnDone}>done</button>
                    :   <button className="Button" onClick={handleOnClick}>+</button>
            }
        </div>
    );
}
