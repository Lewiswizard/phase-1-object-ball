function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
console.log(gameObject());
/*
{
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {...},
      "Reggie Evans": {...},
      "Brook Lopez": {...},
      "Mason Plumlee": {...},
      "Jason Terry": {...}
    }
  },
  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {...},
      "Bismak Biyombo": {...},
      "DeSagna Diop": {...},
      "Ben Gordon": {...},
      "Brendan Haywood": {...}
    }
  }
}
*/

function numPointsScored(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerKey in teamObj.players) {
      if (playerKey === playerName) {
        return teamObj.players[playerKey].points;
      }
    }
  }
}

console.log(numPointsScored("Alan Anderson")); // 22

function shoeSize(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerKey in teamObj.players) {
      if (playerKey === playerName) {
        return teamObj.players[playerKey].shoe;
      }
    }
  }
}

console.log(shoeSize("Reggie Evans")); // 14

function teamColors(teamName) {
  let game = gameObject();
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      return game[teamKey].colors;
    }
  }
}

console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]

function teamNames() {
  let game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]

function playerNumbers(teamName) {
  let game = gameObject();
  let numbers = [];
  for (let teamKey in game) {
    if (game[teamKey].teamName === teamName) {
      for (let playerKey in game[teamKey].players) {
        numbers.push(game[teamKey].players[playerKey].number);
      }
    }
  }
  return numbers;
}

console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]

function playerStats(playerName) {
  let game = gameObject();
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerKey in teamObj.players) {
      if (playerKey === playerName) {
        return teamObj.players[playerKey];
      }
    }
  }
}

console.log(playerStats("Alan Anderson"));
/*
{
  number: 0,
  shoe: 16,
  points: 22,
  rebounds: 12,
  assists: 12,
  steals: 3,
  blocks: 1,
  slamDunks: 1
}
*/

function bigShoeRebounds() {
  let game = gameObject();
  let maxShoe = 0;
  let maxRebounds = 0;
  for (let teamKey in game) {
    let teamObj = game[teamKey];
    for (let playerKey in teamObj.players) {
      let player = teamObj.players[playerKey];
      if (player.shoe > maxShoe) {
        maxShoe = player.shoe;
        maxRebounds = player.rebounds;
      }
    }
  }
  return maxRebounds;
}

console.log(bigShoeRebounds()); // 12

function totalPoints(teamName) {
  let gameData = gameObject();
  let totalPoints = 0;
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    if (teamObj.teamName === teamName) {
      for (let playerKey in teamObj.players) {
        let player = teamObj.players[playerKey];
        totalPoints += player.points;
      }
      return totalPoints;
    }
  }
  return 0; // Team not found
}

console.log(totalPoints("Brooklyn Nets")); // 96
console.log(totalPoints("Charlotte Hornets")); // 85

function averagePoints(teamName) {
  let gameData = gameObject();
  let totalPoints = 0;
  let playerCount = 0;
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    if (teamObj.teamName === teamName) {
      for (let playerKey in teamObj.players) {
        let player = teamObj.players[playerKey];
        totalPoints += player.points;
        playerCount++;
      }
      return totalPoints / playerCount;
    }
  }
  return 0; // Team not found
}

console.log(averagePoints("Brooklyn Nets")); // 19.2
console.log(averagePoints("Charlotte Hornets")); // 17

function mostPointsScored() {
  let gameData = gameObject();
  let maxPoints = 0;
  let playerWithMaxPoints = "";
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    for (let playerKey in teamObj.players) {
      let player = teamObj.players[playerKey];
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMaxPoints = playerKey;
      }
    }
  }
  return playerWithMaxPoints;
}

console.log(mostPointsScored()); // "Ben Gordon"

function winningTeam() {
  let gameData = gameObject();
  let homeTeamTotalPoints = 0;
  let awayTeamTotalPoints = 0;
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    for (let playerKey in teamObj.players) {
      let player = teamObj.players[playerKey];
      if (teamKey === "home") {
        homeTeamTotalPoints += player.points;
      } else {
        awayTeamTotalPoints += player.points;
      }
    }
  }
  if (homeTeamTotalPoints > awayTeamTotalPoints) {
    return gameData.home.teamName;
  } else {
    return gameData.away.teamName;
  }
}

console.log(winningTeam()); // "Brooklyn Nets"

function playerWithLongestName() {
  let gameData = gameObject();
  let longestName = "";
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    for (let playerKey in teamObj.players) {
      if (playerKey.length > longestName.length) {
        longestName = playerKey;
      }
    }
  }
  return longestName;
}

console.log(playerWithLongestName()); // "DeSagna Diop"

function doesLongNameStealATon() {
  let gameData = gameObject();
  let longestName = "";
  let maxSteals = 0;
  for (let teamKey in gameData) {
    let teamObj = gameData[teamKey];
    for (let playerKey in teamObj.players) {
      if (playerKey.length > longestName.length) {
        longestName = playerKey;
        maxSteals = teamObj.players[playerKey].steals;
      } else if (playerKey.length === longestName.length && teamObj.players[playerKey].steals > maxSteals) {
        maxSteals = teamObj.players[playerKey].steals;
      }
    }
  }
  return maxSteals > 10;
}

console.log(doesLongNameStealATon()); // true
