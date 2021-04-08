const { guess } = require('./bc')
const { readData, writeData, matchFourNonRepeatingNumber } = require('./helpers')

//ACTIVITY 1
test('should throw error for invalid guess', async () => {
    await expect(guess('123')).rejects.toThrow(Error)
    await expect(guess('1122')).rejects.toThrow(Error)
    await expect(guess('!123')).rejects.toThrow(Error)
    await expect(guess('A123')).rejects.toThrow(Error)
    await expect(guess('01234')).rejects.toThrow(Error)
})

//ACTIVITY 2
test('should generate secret string and store value', async () => {
    await guess('1234')
    const { secret } = await readData()
    expect(secret).toBeDefined()
    expect(typeof secret).toBe('string')
});

test('should generate secret string to meet criterion', async () => {
    await guess('1234')
    const { secret } = await readData()
    expect(secret).toMatch(matchFourNonRepeatingNumber)
})

test('should only generate secret string when none exists', async () => {
    await writeData({ secret: '4321'})
    await guess('1234')
    const { secret } = await readData()
    expect(secret).toBe('4321')
})

//ACTIVITY 3
test('should store and return list of match results for incorrect guess', async () => {
    await writeData({ secret: '4321'})
    const _guess = '1234'
    const returnedResults = await guess(_guess)
    const { matchResults } = await readData();
    const expectedResults = [{ attempt: 1, guess: '1234', matchResult: '0B4C' }];
    expect(returnedResults).toMatchObject(expectedResults)
    expect(matchResults).toMatchObject(expectedResults)
})

test('should return list of match results for correct guess and clear store', async () => {
    await writeData({ secret: '4321'})
    const _guess = '4321'
    const returnedResults = await guess(_guess)
    const { matchResults } = await readData();
    const expectedResults = [{ attempt: 1, guess: '4321', matchResult: '4B0C' }];
    expect(returnedResults).toMatchObject(expectedResults)
    expect(matchResults).toBeUndefined()
})
