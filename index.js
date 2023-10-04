const data = require('./elfData.js');

function parseInput(input) {
    return input.split('\n\n').map((group) => group.split('\n').map(Number));
}

function findElfWithMostcalories(elfGroups) {
    return Math.max(...elfGroups.map((elfGroup) => elfGroup.reduce((a, b) => a + b, 0)));
}

function main() {
    try {
        const parsedInput = parseInput(data);
        const maxCalories = findElfWithMostcalories(parsedInput);
        console.log('The Elf with the most calories has', maxCalories, 'calories');
    } catch (e) {
        console.error(e);
    }   
}

main();
