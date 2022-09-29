function sum(arrays) {
    if (!(arrays instanceof Array)) {
        throw new Error("Parameter [arrays] should be an Array type.");
    }
    return arrays.reduce((prve, current, index, arrays) => {
        return prve + current;
    });
}

try {
    console.log(sum(";;"));
} catch (error) {
    console.log(error.message);
}