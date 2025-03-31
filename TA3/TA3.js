function removeFromArray(arreglo, item) {
    const filteredArray = arreglo.filter(parametro => parametro !== item);
    console.log(filteredArray);
}

removeFromArray([1, 2, 3], 3);