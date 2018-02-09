let startGame = confirm("Do you want to play a game?");

if (!startGame) {
	console.log("You did not become a millionaire");
} else {
	let max = 5,
		prize = 0,
		prizesOne = [10, 5, 2],
		prizesDouble = [30, 15, 7],
		prizes = prizesOne;

	while (startGame) {
		let number = randNum(max);
		let continueGame = false;

		for (let i=0; i<3; i++) {
			let userString = `Enter a number from 0 to ${max}\n
			Attempts left: ${3 - i}\n
			Total prize: ${prize}$\n
			Possible prize on current attempt: ${prizes[i]}$`;
			let userNum = parseInt(prompt(userString));

			if (userNum == number) {
				prize += prizes[i];
				continueGame = confirm("You win! Do you want to continue a game?");
				break;
			}
		}

		if (continueGame) {
			max = 10;
			prizes = prizesDouble;

		} else {
			startGame = confirm("Game over. Do you want to play again?");
			prizes = prizesOne;
			max = 5;
		}
	}

	console.log(`Thank you for a game. Your prize is: ${prize}$`);
}

function randNum(max) {
	return Math.floor(Math.random() * (max + 1));
}
