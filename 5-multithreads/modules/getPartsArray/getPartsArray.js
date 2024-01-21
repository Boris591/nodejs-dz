const getPartsArray = (arr, size) => {
    return arr.reduce((acc, item, index)=> {
        if (acc[index % size] == undefined) acc.push([]);
        acc[index % size].push(item);
        return acc;
    } , []);
}

export default getPartsArray;
