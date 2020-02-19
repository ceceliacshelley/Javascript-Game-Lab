//startGame function//

// const wantGame = prompt(`Welcome, would you like to play a game? [yes] or [no]
// `);

const wantGame = prompt(
  `Welcome, would you like to play a game? [yes] or [no]`
);
let attackOrQuit = "attack";

function startGame() {
  while (user.health > 0 && user.wins < 3 && attackOrQuit === "attack") {
    console.log(user.name + " has " + user.health + " health left.");
    console.log(
      "Grant the mighty chicken has " + grant.health + " health left."
    );
    grant.health -= getDamage(); // grant.health = grant.health - getDamage();//
    user.health -= getDamage();
    if (grant.health <= 0) {
      user.wins += 1; //user.wins = user.wins + 1    user.wins++//
      alert("the user now has " + user.wins + " wins.");
      grant.health = 10;
    }
    attackOrQuit = prompt(`Would you like to attack or quit?`);
  }

  if (user.health <= 0) {
    alert("Grant has won.");
  } else {
    alert(user.name + " has won the game.");
  }
}

// const userHealth = 40;
// const grantHealth = 10;

//startCombat function//

const user = {
  health: 40,
  wins: 0,
  name: null
};

const grant = {
  health: 10
};

user.name = prompt(`What is your name?`);

const playOrQuit = prompt(`Would you like to attack or quit?`);

function getDamage() {
  return Math.floor(Math.random() * 2) + 1;
}

// const userHealth = userHealth => {
//   return Math.floor(Math.random() * 2) + 1;
// };

if (wantGame === "yes") {
  startGame();
}

// || means "or" condition

//     console.log
//     return
// }
