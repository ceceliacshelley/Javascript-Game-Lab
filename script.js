const wantGame = prompt(`Welcome, would you like to play a game? [yes] or [no]
`);

// const userHealth = 40;
// const grantHealth = 10;

const user = {
  health: 40,
  wins: 0,
  name: null
};

const grant = {
  health: 10
};

user.name = prompt(`What is your name?`);

function getDamage() {
  return Math.floor(Math.random() * 2) + 1;
}

// const userHealth = userHealth => {
//   return Math.floor(Math.random() * 2) + 1;
// };

if (wantGame === "yes") {
  while (user.health > 0 && user.wins < 3) {
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
  }
  if (user.health <= 0) {
    alert("Grant has won.");
  } else {
    alert(user.name + " has won the game.");
  }
}

// || means "or" condition

//     console.log
//     return
// }
