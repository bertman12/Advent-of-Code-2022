import { data } from './day1_input.js';
/**
 * --- Day 1: Calorie Counting ---
 */

/**
 * PART 1:
 * 
 * calories
 * each calorie entry represents a single item's calorie count
 * empty strings represent an end of an individual elf's calorie count
 * find the elf carrying the most calories 
 *  
 */

/**
 * PART 2: 
 * 
 * Find the top 3 elves with the most calories.
 * How many calories are those elves carrying in total?
 * 
 * Correct Answer: 206289
 */

/**
 * Failed outputs:  099682987504118431
 * Correct Answer: 71023
 */

const parsedData = data.split('\n');

let mostCalories = 0;
let localSum = 0;
const topThreeElves = [0,0,0];

for (let x = 0; x < parsedData.length; x++) {
    const itemCalorieCount = parseInt(parsedData[x], 10);
    
    if(!Number.isNaN(itemCalorieCount)){
        localSum += itemCalorieCount;
    }
    else{
        if(localSum > mostCalories) mostCalories = localSum;

        if(localSum > topThreeElves[0]) topThreeElves[0] = localSum;

        topThreeElves.sort((a,b) => a - b);

        localSum = 0;
    }
}

const totalTopThreeCalorieCount = topThreeElves.reduce((a,b) => (a+b));

console.log("Single elf with most calories: ", mostCalories);
console.log("Top three category: ", topThreeElves);
console.log("Top three elves calorie sum: ", totalTopThreeCalorieCount)




