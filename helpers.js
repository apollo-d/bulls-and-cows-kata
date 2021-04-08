const fs = require('fs').promises;

exports.writeData = async (data) => {
    await fs.writeFile('./store.json', JSON.stringify(data));
}

exports.readData = async () => {
    const data = await fs.readFile('./store.json')
    return JSON.parse(data);
}

exports.matchFourNonRepeatingNumber = /^(?!.*(.).*\1)\d{4}$/ //regex to match against 4 non-repeating numbers

exports.generateRandomDigit = () => Math.floor(Math.random() * 10)
