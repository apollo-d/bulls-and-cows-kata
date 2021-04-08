# Bulls & Cows Kata

# B&C Background:
- Played over a hundred years. 
- Traditionally, paper-and-pencil game
- played between 2 opponents: 
  - code-maker - chooses a secret code
  - code-breaker - guesses secret code in minimum number of guesses
- Most commonly known analogs: 
  - Mastermind - uses colored pegs instead of digits. 
  - Jotto - word based game


# Rules of Game
- Player A Writes a 4-digit secret number. The digits must be all different, values 0 to 9.
- Player B Attempts to guess the secret number.
- For each guess, Player A gives the number of matches. 
	-  If the matching digits are in their right positions, they are "bulls"
	-  If in different positions, they are "cows". 

Example:
- Secret number: 4271
- Opponent's try: 1234
- Answer: 1 bull and 2 cows. (The bull is "2", the cows are "4" and "1".)

The Game is over once Player B guesses the secret number. 
The count of guesses is tallied and then the players play a new game with reverse roles and Player A would attempt to beat Player B’s score.


# Noteworthy History of B&C Computer Programs:
- 1968: Frank King, Mainframe - Cambridge University
- 1970: Moo - J. M. Grochow in the PL/I computer language for the Multics operating system, MIT
- Because the game has simple rules, there were many computer variants; was often included in telephones and PDAs.

It is proved that any number can be solved within seven turns. 
The average minimal game length is 26274/5040 ≈ 5.2131 turns
