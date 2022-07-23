export const removeElementFromArray = (element, oldArray) => {
    const newArray = oldArray.filter(item => item !== element);
    return newArray;
};