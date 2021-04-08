const { readData,
    writeData,
    matchFourNonRepeatingNumber,
    generateRandomDigit } = require('./helpers')

exports.guess = async (guess) => {
    if (!guess.match(matchFourNonRepeatingNumber)) throw new Error()
    let { matchResults = [], secret } = await readData()
    if (!secret)
        secret = await _generateAndStoreSecret()
    const matchResult = _getBullsAndCows(guess, secret)
    const newEntry = {
        attempt: matchResults.length + 1,
        guess,
        matchResult
    }
    if (newEntry.matchResult === '4B0C') {
        await writeData('')
    } else {
        await writeData({matchResults: [...matchResults, newEntry], secret})
    }
    console.log([...matchResults, newEntry])
    return [...matchResults, newEntry]
}

const _getBullsAndCows = (guess, secret) => {
    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == j && guess[i] === secret[j]) {
                bulls++
            } else if (guess[i] === secret[j]) {
                cows++
            }
        }
    }
    return `${bulls}B${cows}C`
}

// RECURSIVE APPROACH
const _generateAndStoreSecret = async () => {
    let secret = ''
    for(let i = 0; i < 4; i++) {
        secret += _generateSecret(secret)
    }
    await writeData({ secret })
    return secret
}

const _generateSecret = (secret ) => {
    const _secret = generateRandomDigit()
    if (secret.indexOf(_secret) !== -1) {
        return _generateSecret(secret)
    }
    return _secret
}




// PICK FROM LIST APPROACH - but THIS IMPLEMENTATION IS WRONG!
// const _generateAndStoreSecret = async () => {
//     let secret = ''
//     let numbers = [...Array(10).keys()];
//     for(let i = 0; i < 4; i++) {
//         let randomNumber = numbers[Math.floor(Math.random() * numbers.length)]
//         const index = numbers.indexOf(randomNumber);
//         if (index > -1) {
//             numbers.splice(index, 1);
//         }
//         secret += randomNumber.toString()
//     }
//     await writeData({ secret })
//     return secret
// }
