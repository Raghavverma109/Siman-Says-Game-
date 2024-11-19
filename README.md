Create a Simon Game using HTML CSS & JavaScript

Approach

Create the different HTML elements that will make up the markup of the game, like <div> for making the base structure of the game, <button> to display the word Start, which means the game can be switched on and subsequently played, and <input> for strict mode which means that the game can be played in strict mode and if there is one wrong answer, the user has to start from scratch as opposed to non-strict mode which means that the user can start from where they left off.
Add the different styling properties to the game using classes and elements that will define the padding, margin, font sizes to text, alignments, colors, etc to the specific elements.
Attack onclick events to each light button which refers to a handleClick() function in JavaScript which agains invokes the this object to refer to the current object for that HTML element. Also, create a data attribute data-color for each light button via a single digit such as 1 for the first color, 2 for the second color etc. The start button simply starts the game and also resets everything to default if there was a previous game that was played.
Moreover, create the functions nextRound() which simply lets you play the following round with an increment in the level counter, the checkSequence() function which at every round check whether the whole sequence has been repeated correctly or not, and also helper functions to enable/disable strict mode and for enabling/disabling the light buttons as well.
Furthermore, the two arrays of sequence and userSequence are used to determine whether the randomized order by the computer is followed step by step by the user. This is done repeatedly until the user fails to follow the pattern.
