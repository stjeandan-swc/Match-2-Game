
class ScoreBoard
{
  constructor()
  {
    this.turnsTaken;
    this.cardMatches;
    this.gamesPlayed;
    this.wins;
    this.losses;
  }

  setTurnsTaken(intVal)
  {
    this.turnsTaken = intVal;
  }

  getTurnsTaken()
  {
    return this.turnsTaken;
  }

  updateTurnsTaken()
  {
    var tt = document.getElementById("turns");

    tt.innerHTML = this.getTurnsTaken();
  }

  setCardMatches(intVal)
  {
    this.cardMatches = intVal;
  }

  getCardMatches()
  {
    return this.cardMatches;
  }

  updateCardMatches()
  {
    var mm = document.getElementById("matches");

    mm.innerHTML = this.getCardMatches();
  }

  setGamesPlayed(intVal)
  {
    this.gamesPlayed = intVal;
  }

  getGamesPlayed()
  {
    return this.gamesPlayed;
  }

  updateGamesPlayed()
  {
    var gp = document.getElementById("games");

    gp.innerHTML = "Games Played: " + this.getGamesPlayed();
  }

  setWins(intVal)
  {
    this.wins = intVal;
  }

  getWins()
  {
    return this.wins;
  }

  updateWins()
  {
    var wins = document.getElementById("wins");

    wins.innerHTML = "Games Won: " + this.getWins();
  }

  setLosses(intVal)
  {
    this.losses = intVal;
  }

  getLosses()
  {
    return this.losses;
  }

  updateLosses()
  {
    var losses = document.getElementById("losses");

    losses.innerHTML = "Games Lost: " + this.getLosses();
  }
}
