let startGame = confirm("Do you want to play a game?");

if (!startGame) {
	console.log("You did not become a millionaire");
} else {
	let max = 5,
		totalPrize = 0,
		prizes = 10;

	while (startGame) {
		let number = randNum(max);
		let continueGame = false;

		for (let i=0; i<3; i++) {
			let userString = `Enter a number from 0 to ${max}\n
			Attempts left: ${3 - i}\n
			Total prize: ${totalPrize}$\n
			Possible prize on current attempt: ${Math.floor(prizes/(2**i))}$`;
			let userNum = Number(prompt(userString, "0"));
			if (userNum == number) {
				totalPrize += Math.floor(prizes/(2**i));
				continueGame = confirm("You win! Do you want to continue a game?");
				break;
			}
		}

		if (continueGame) {
			max *= 2;
			prizes *= 3;
		} else {
			console.log(`Thank you for a game. Your prize is: ${totalPrize}$`);
			startGame = confirm("Do you want to play again?");
			max = 5;
			prizes = 10;
			totalPrize = 0;
		}
	}
}

function randNum(max) {
	return Math.floor(Math.random() * (max + 1));
}
