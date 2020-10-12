console.log("Welcome to the main module")
import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"
const yearlyPlan = createPlan();
console.log(yearlyPlan);

 const asparagusSeed = createAsparagus()
 console.log(asparagusSeed)

const cornSeed = createCorn()
console.log(cornSeed)

 const potatoSeed = createPotato()
 console.log(potatoSeed)

 const soybean = createSoybean()
 console.log(soybean)

 const sunflower = createSunflower()
console.log(sunflower)

const wheat = createWheat()
console.log(wheat)




 plantSeeds(createPlan());
const newPlant = usePlants();


console.log("THIS is the new field array" , newPlant);

const plants = harvestPlants(newPlant);
console.log(plants)

catalog(plants);