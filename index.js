const data = require('./elfData.js');

function parseInput(input) {
    return input.split('\n\n').map((group) => group.split('\n').map(Number));
}

function findElfWithMostcalories(elfGroups) {
    return Math.max(...elfGroups.map((elfGroup) => getTotalCalories(elfGroup)));
}

function findTop3ElfWithMostcalories(elfGroups) {
    const totalCaloriesPerElf = elfGroups.map(elfGroup => getTotalCalories(elfGroup));
    const sortedCaloriesPerElf = totalCaloriesPerElf.sort((a, b) => b - a);
    return getTotalCalories(sortedCaloriesPerElf.slice(0, 3));
}

function getTotalCalories(elfGroup) {
    return elfGroup.reduce((a, b) => a + b, 0);
}

function main() {
    try {
        const parsedInput = parseInput(data);
        const maxCalories = findElfWithMostcalories(parsedInput);
        const top3CaloriesTotal = findTop3ElfWithMostcalories(parsedInput);

        console.log('The Elf with the most calories has', maxCalories, 'calories');
        console.log('The total of the top 3 Elves with the most calories is', top3CaloriesTotal, 'calories');

    } catch (e) {
        console.error(e);
    }   
}

main();

