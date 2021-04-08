# Setup & Itinerary
1. Review `CONTEXT.md` (5min)
2. Create user and add self to my repl: https://repl.it/join/psymvics-pauldiehl (5min)
3. Fork the following repl:
 https://repl.it/@PaulDiehl/bulls-and-cows-problem
5. Code Activity 1
6. Regroup Activity 1
7. Code Activity 2
6. Regroup Activity 2
1. Code Activity 3
6. Regroup Activity 3
8. Play (10min)

Feel free to check out my solution after challenge: https://repl.it/@PaulDiehl/bulls-and-cows-solution

# RUN & TEST
- To run test: click RUN and view 'Console'
- To invoke directly: `node -e 'require("./bc").guess("1463")'` from SHELL

# Activities 

## Activity 1
FEATURE: Validate guess
- WHEN I invoke an invalid guess (examples: '123', '1122', '!123','A312','01234')
  - 4-digit
  - all digits must be all different
  - values ranging from 0 to 9
  - stored as string
  - (hint: Use regex from `./helpers`)
- THEN I receive a thrown invalidation error
----
## Activity 2
FEATURE: Generate and store secret
- GIVEN no secret exists
- WHEN I invoke a guess
- THEN a secret will be generated and stored
- AND the secret will meet the following criterion: 
  - 4-digit
  - all digits must be all different
  - values ranging from 0 to 9
  - stored as string
----
## Activity 3
FEATURE: Return list of match results 
- GIVEN secret value of '4321'
- WHEN I invoke a guess of '1234' (i.e., incorrect guess)
- THEN the latest match result will be stored to the match result list
- AND I will receive the list of match results
- EXAMPLE: `[{ attempt: 1, guess: '1234', matchResult: '0B4C' }]`
---

- GIVEN a secret value of '4321'
- WHEN I invoke a '1234' (i.e., correct guess)
- THEN the stored match result and secret will be cleared from store
- AND I will receive the list of match results
- EXAMPLE: `[{ attempt: 1, guess: '1234', matchResult: '0B4C' },
{ attempt: 2, guess: '4321', matchResult: '4B0C' }]`

### Technical Requirements:

Matching Guess and Secret: If the matching digits are in their right positions, they are "bulls", if in different positions, they are "cows".

Proposed Response Schema of Match Result:
- `{ attempt: number, guess: string, matchResult: string }`
- attempt: the number of attempts made in that round
- guess: 4 digit string
- match response:  4 character string in following format: "#B#C" (total number of bulls and cows)

A Game Won is when the Match Response is "4B0C"


