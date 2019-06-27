// Calls from other scripts.

let dealer = new Dealer();
let sb = new ScoreBoard();

dealer.getPositions();
dealer.shuffleCardDeck();
dealer.dealOutCards();

var currentDeck = dealer.getshuffledDeck();

//variable for this script
var startSec = 03;
var wrongChoiceDelay = 1;
var timer, gameTime;
var seconds = 0, minutes = 3;
var isGameOn = true;

var deckSize = 36;
var flipCount = 0;
var nTurns = 0, nMatches = 0, nGames = 0, nWins = 0, nLosses = 0;
var selectedCardPosOne;
var selectedCardPosTwo;
var firstSelectedImage;
var secondSelectedImage;
var removed = [];

// get element of the document
var shortTimerEl = document.getElementById("shortTimer");
var gameTimerEl = document.getElementById("gameTimer");
var resetButton = document.getElementById("btn");
var mainClass = document.getElementsByClassName("cardContainer");
var announcement = document.getElementById("announcement");


window.onload = function()
{
  timer = setInterval(countDownToStart, 1000);
  setInterval(update, 1000 / 60);
}

function update()
{
  setScoreBoard();
}

function setScoreBoard()
{
  sb.setTurnsTaken(nTurns);
  sb.updateTurnsTaken();

  sb.setCardMatches(nMatches);
  sb.updateCardMatches();

  sb.setGamesPlayed(nGames);
  sb.updateGamesPlayed();

  sb.setWins(nWins);
  sb.updateWins();

  sb.setLosses(nLosses);
  sb.updateLosses();
}

//  Timers  ====================================================================
// This is a short timer before the games starts, then flips the cards.
function countDownToStart()
{
  if(startSec < 0)
  {
    clearTimeout(timer);
    shortTimerEl.innerHTML = " ";
    flipAllOver();
    startGameTimer();
    isGameOn = true;
    startSec = 3;
  }
  else {
    {
      shortTimerEl.innerHTML = "Start in: " + startSec;
      startSec--;
    }
  }
}

// This timer will delay the selected cards from fliping back over if not a match.
function matchFlipDelay()
{
  if(wrongChoiceDelay < 0)
  {
    clearTimeout(timer);
    checkForMatch();
    wrongChoiceDelay = 1;
  }
  else {
    {
      wrongChoiceDelay--;
    }
  }
}

// This timer will be a count down for the total alowed play time.
function gameTimer()
{
  if(minutes == 0 && seconds == 0)
	{
		gameTimerEl.innerHTML = "0:00";
    nLosses++;
    clearTimeout(gameTime);

    announcement.innerHTML = "Sorry You Loose!";
    announcement.style.opacity = 1;
    announcement.style.zIndex = 2;
    resetButton.disabled = false;

    removeOnclick();
	}
	else if(minutes >= 0 && seconds >= 0)
	{
		if(seconds <= 0)
		{
			minutes--;
			seconds = 59;
		}
		else
		{
			seconds--;
		}

		if(seconds < 10)
		{
			gameTimerEl.innerHTML = minutes + ":0" + seconds;
		}
		else
		{
			gameTimerEl.innerHTML = minutes + ":" + seconds;
		}
    return isGameOn = true;
	}
}

function startGameTimer()
{
  gameTime = setInterval(gameTimer, 1000);
}
//  ============================================================================

function flipAllOver()
{
  for(var i = 0; i < deckSize; i++)
  {
     mainClass[i].style.transform = "rotate3d(0, 0.5, 0, 180deg)";
  }
}

function gameReset()
{
  removed = [];

  for(var i = 0; i < deckSize; i++)
  {
     mainClass[i].style.transform = "rotate3d(0, 0.5, 0, 0deg)";
     mainClass[i].style.opacity = "1";
     mainClass[i].setAttribute("onclick", "makeMove(this);")
  }
  // reset timers.
  clearTimeout(gameTime);
  minutes = 3;
  seconds = 0;
  gameTimerEl.innerHTML = " ";
  timer = setInterval(countDownToStart, 1000);

  dealer.shuffleCardDeck();
  dealer.dealOutCards();
  nGames++;

  announcement.innerHTML = " ";
  announcement.style.opacity = 0;
  announcement.style.zIndex = -2;
}

function makeMove(pos)
{
  flipCount++;

  if(flipCount == 1)
  {
    resetButton.disabled = true;
    selectedCardPosOne = pos;
    firstSelectedImage = selectedCardPosOne.getElementsByClassName("front")[0].style.backgroundImage;
    selectedCardPosOne.style.transform = "rotate3d(0, 0.5, 0, 0deg)";
  }
  else if(flipCount == 2)
  {
    selectedCardPosTwo = pos;
    secondSelectedImage = selectedCardPosTwo.getElementsByClassName("front")[0].style.backgroundImage;
    selectedCardPosTwo.style.transform = "rotate3d(0, 0.5, 0, 0deg)";

    removeOnclick();

    timer = setInterval(matchFlipDelay, 500);
    nTurns++;
    flipCount = 0;
  }
  console.log(flipCount);
}

function checkForMatch()
{
  if(firstSelectedImage === secondSelectedImage)
  {
    selectedCardPosOne.style.opacity = "0";
    removed.push(selectedCardPosOne);
    selectedCardPosTwo.style.opacity = "0";
    removed.push(selectedCardPosTwo);
    nMatches++;

    if(removed.length == deckSize)
    {
      nWins++;
      clearTimeout(gameTime);

      announcement.innerHTML = "Congrats You Win!";
      announcement.style.opacity = 1;
      announcement.style.zIndex = 2;
      resetButton.disabled = false;
    }
  }
  else
  {
    selectedCardPosOne.style.transform = "rotate3d(0, 0.5, 0, 180deg)";
    selectedCardPosTwo.style.transform = "rotate3d(0, 0.5, 0, 180deg)";
  }

  // reseting the onclick to all elements but the matched ones.
  for(var i = 0; i < mainClass.length; i++)
  {
    for(var j = 0; j <= removed.length; j++)
    {
      if(mainClass[i] != removed[j])
      {
        mainClass[i].setAttribute("onclick", "makeMove(this);")
      }
      else
      {
        mainClass[i].setAttribute("onclick", " ");
      }
    }
  }
  resetButton.disabled = false;
}

function removeOnclick()
{
  for(var i = 0; i < mainClass.length; i++)
  {
    mainClass[i].setAttribute("onclick", " ");
  }
}
