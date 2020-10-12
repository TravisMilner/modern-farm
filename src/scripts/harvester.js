export const harvestPlants = (plantArray) => {
    let seedArray = []
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            for (let i = 0; i < plant.output / 2; i++){
                seedArray.push(plant)
            }
        } else {
            for (let i = 0; i < plant.output; i++) {
                seedArray.push(plant);
            }
        }
    }
    return seedArray; 
}