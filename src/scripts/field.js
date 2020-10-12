

let fieldArray = [];

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        seedObj.forEach(element => {
            fieldArray.push(element)
            
            
        });


    } else {
        fieldArray.push(seedObj);
    }
   
};

export const usePlants = () => {
    return fieldArray.slice();
}