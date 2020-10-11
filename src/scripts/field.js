let fieldArray = [];

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj) === true) {
        seedObj.forEach(element => {
            fieldArray.push(element)
            
        });
        return addPlant;


    }
   
};

export const usePlants = () => {
    console.log(fieldArray)
    return fieldArray.slice();
}