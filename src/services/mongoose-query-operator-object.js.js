const toQueryOperatorObject = (array) => {
    const result = {};

    for (let i = 0; i < array.length; i += 2) {
        const key = `$${array[i]}`;
        const value = array[i + 1];
        result[key] = value;
    }

    return result;
}

export default toQueryOperatorObject;