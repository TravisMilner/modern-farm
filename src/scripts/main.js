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

const newPlant = addPlant(createCorn)
console.log(newPlant)