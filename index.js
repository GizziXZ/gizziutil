/**
 * @module gizziutil my npm package for some utility functions i use
 */

const fs = require('fs').promises;

// there likely will be more functions in the future as i need them

/**
 * Sleep for a specified number of milliseconds
 * @param {number} ms - The number of milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Read a .json file and return parsed data from it.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @returns {Promise<any>} Parsed JSON data
 */
function jsonRead(filePath) {
    return new Promise(async(resolve, reject) => {
        const data = await fs.readFile(filePath, { encoding: 'utf8' }).catch(reject);
        resolve(JSON.parse(data));
    });
}

/**
 * Write data to a .json file.
 * @param {string} filePath Path to the .json file, can be relative or absolute.
 * @param {string[] | object[] | object} data Data to write to the .json file.
 * @returns {Promise<void>} Promise. If "fs" meets an error then the promise is rejected
 */
async function jsonWrite(filePath, data) {
    return new Promise(async(resolve, reject) => {
        await fs.writeFile(filePath, JSON.stringify(data, null, 4), { encoding: 'utf8' }).catch(reject);
        resolve();
    });
}

/**
 * Get a pseudo-random number between "min" and "max" numbers. Includes both "min" and "max" numbers. Supports negative numbers.
 * @param {number} min Minimal value.
 * @param {number} max Maximal value.
 * @returns {number} A number between "min" and "max" values.
 * @example
 * console.log(getRandomArbitrary(69, 420)); // 243
 * console.log(getRandomArbitrary(-1337, 1337)); // -462
 */
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Pick a random element from an array.
 * @param {Array} array The array to pick a random element from.
 * @returns {*} A random element from the array.
 * @example
 * console.log(pickRandomElement([1, 2, 3, 4])); // 2
 * console.log(pickRandomElement(['a', 'b', 'c', 'd'])); // 'c'
 */
function pickRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

/**
 * Pseudo-random chance function.
 * @param {number} number Chance in percentage to return 'true'.
 * @returns {boolean} true or false.
 * @example
 * // 1% chance to self destruct
 * if (chance(1)) console.log('self destruction protocol initiated');
 * else return;
 */
function chance(number) {
    return Math.random() * 100 < number;
}

module.exports = {
    sleep,
    jsonRead,
    jsonWrite,
    getRandomArbitrary,
    pickRandomElement,
    chance
};