/*
  NAME: John Khanal
  UNID: 18406497
  MODULE :CSY1018 ASSIGNMENT 2
  GAME: HORSE RACING
  TESTING: 
  LIVE URL: https://www.youtube.com/watch?v=dOsw5mSaoCQ&feature=youtu.be
 */

//initialising variables
var pickedHorse = new Array();  //horse ending checker
var totalLapsGiven;  // totallaps user chooses
var currentLap=[0,0,0,0]; // four laps for each horse
var enterBet;   // user enters bet amount
var betOnHorse; // horse chosen 
var gamePlay=true; // checks for game progress
var givenFunds; // total funds
var startLine= new Array(false, false,false , false); //boolean checkers
var myBG =  new Audio('mario.flac'); // sound file

//white horse is the horse1 

/*for white horse*/
function whiteRightMovement(){   //right movement for white horse
	var playerHorse =document.getElementById('horse1');  
	var posFromLeft= playerHorse.offsetLeft;  
	playerHorse.className = 'horse runRight walkRight';   
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';  
	var generateRandSpeed= (Math.random()*0.287)+0.72;       
	if(posFromLeft>=window.innerWidth*generateRandSpeed) 
	{
		clearInterval(interWhite);   
		interWhite = setInterval(whiteUpMovement,25);  
	}
}

function whiteUpMovement(){    //up movement for white horse
	var playerHorse =document.getElementById('horse1');
	var posFromTop = playerHorse.offsetTop;  
	playerHorse.className = 'horse runUp walkUp'
			playerHorse.style.top = posFromTop - Math.random()*14.7 +'px'; // chaging the top position to move right by adding random speed
	var generateRandSpeed= (Math.random()*0.0387) +0.08;  // to check the horses postion in random to top of the track to move left
	if(posFromTop<=window.innerHeight*generateRandSpeed)    // comparing horse's top to the track's height to make horse change direction
	{

		clearInterval(interWhite);
		interWhite = setInterval(whiteLeftMovement,25);
	}

}


function whiteLeftMovement(){ //left movement for white horse
	var playerHorse =document.getElementById('horse1');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed){
		clearInterval(interWhite);
		interWhite = setInterval(whiteDownMovement,25);
	}
}

function whiteDownMovement(){  //down movement for white horse
	var playerHorse =document.getElementById('horse1');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';

	var totalLapsGiven = document.getElementById('laps').value; // getting the total laps required
	var generateRandSpeed= (Math.random()*0.225) +0.68;

	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{

		clearInterval(interWhite);
		if(currentLap[0]<totalLapsGiven-1){  // checking if the laps are  completed
			interWhite=setInterval(whiteRightMovement,25);
			currentLap[0]+=1; // running laps increase when the finish line is crossed
		}
		else{ interWhite = setInterval(whiteHorseAtFinishLine,25);currentLap[0]=0;}  // if laps are finished finishedline method is called

	}
}


function whiteHorseAtFinishLine(){  // stop line method
	var playerHorse =document.getElementById('horse1');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1 )+0.21;

	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interWhite);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse1');
		startLine[0] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;
	}

}

/* blue horse is the horse 2*/
function blueRightMovement(){  
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';  // speed of the horse
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed){
		clearInterval(interBlue);
		interBlue = setInterval(blueUpMovement,25);
	}
}


function blueUpMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387 )+0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBlue);
		interBlue = setInterval(blueLeftMovement,25);
	}
}


function blueLeftMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBlue);
		interBlue = setInterval(blueDownMovement,25);
	}
}

function blueDownMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	totalLapsGiven = document.getElementById('laps').value;

	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBlue);
		if(currentLap[1]<totalLapsGiven-1){
			interBlue = setInterval(blueRightMovement,25);
			currentLap[1]+=1;
		}
		else{ interBlue = setInterval(blueHorseAtFinishLine,25); currentLap[1]=0;}
	}
}

function blueHorseAtFinishLine(){ 
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBlue);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse2');
		startLine[1] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}
}

/*green horse all functions*/
function greenRightMovement(){ 
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenUpMovement,25);
	}
}

function greenUpMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387) +0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenLeftMovement,25);
	}
}



function greenLeftMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenDownMovement,25);
	}
}
function greenDownMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	var   totalLapsGiven = document.getElementById('laps').value;

	if(posFromTop>=window.innerHeight*generateRandSpeed){
		clearInterval(interGreen);
		if(currentLap[2]<totalLapsGiven-1){
			interGreen = setInterval(greenRightMovement,25);
			currentLap[2]+=1;
		}
		else{   interGreen = setInterval(greenHorseAtFinishLine,25);currentLap[2]=0;}
	}
}
function greenHorseAtFinishLine(){
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var  totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interGreen);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse3');

		startLine[2] =true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}
}




//brown horse functions
function brownRightMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';

	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownUpMovement,25);
	}
}


function brownUpMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387) +0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownLeftMovement,25);
	}
}

function brownLeftMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownDownMovement,25);
	}
}



function brownDownMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	var totalLapsGiven = document.getElementById('laps').value;
	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBrown);
		if(currentLap[3]<totalLapsGiven-1){
			interBrown = setInterval(brownRightMovement,25);
			currentLap[3]+=1;
		}
		else{interBrown = setInterval(brownHorseAtFinishLine,25);currentLap[3]=0;}
	}
}




function brownHorseAtFinishLine(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse4');
		startLine[3] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}

}
//horse movements done

function endMarker()   // checks if the laps are completed
{
	if(startLine[0] == true && startLine[1] == true && startLine[2] == true && startLine[3] == true) // to check all the horses crossed the line
	{
		horseRanks(); // called to display the winner table

	}
}


/*winner displaying function*/
function horseRanks()
{
	if(startLine[0] ==true, startLine[1] ==true, startLine[2] ==true, startLine[3] ==true){ //for all the horses reach the startline
		myBG.loop=false;
		for (var row = 1; row < 5; row++) {
			var tRow = document.getElementsByTagName('tr')[row];  
			var tData = tRow.getElementsByTagName('td')[1];
			tData.className = pickedHorse[row-1];  
			if(gameplay==true){
				betWonOrNot();  

				gameplay=false;  

				document.getElementById('start').style.background='#3498db';
				document.getElementById('start').disabled=false; //  start button  enabled
				document.getElementById('amount').disabled=false;  //  bet amount field enabled
				document.getElementById('laps').disabled=false;  //  laps options enabled
				document.getElementById('bethorse').disabled=false;  //  horse bet option enabled
				for(var i =0; i<currentLap.length; i++){

					if(currentLap[i]==totalLapsGiven){    //resetting the laps to replay the game
						totalLapsGiven= document.getElementById('laps').value; 

					}
				}

			}
		}
	}

}

function gettingValuesForBet()   // function created to initialise the funds and bet variables
{
	givenFunds = document.getElementById('funds').innerHTML;
	enterBet = document.getElementById('amount').value;

}

function allTheHorseMove(){   //function to call the horses interval
	interWhite = setInterval(whiteRightMovement,23.5);
	interBlue = setInterval(blueRightMovement,23.5);
	interGreen = setInterval(greenRightMovement,23.5);
	interBrown = setInterval(brownRightMovement,23.5);
}



function betWonOrNot(){  //bet won or not function
	gettingValuesForBet();
	var betOnHorse= document.getElementById('bethorse').value;

	if(pickedHorse[0] == betOnHorse)   //checks chosen horse
	{
		alert('You Won!');
		document.getElementById('funds').innerHTML = parseInt(givenFunds) + parseInt(enterBet)*2;  // the funds is increased by adding the double of bet amount
	}
	if (pickedHorse[1] == betOnHorse){  // if the second horse in the array is chose display second
		alert('You came second');
		document.getElementById('funds').innerHTML= parseInt( givenFunds) ; //bet decreased 
	}

	if (pickedHorse[2] == betOnHorse){ // if the third horse in the array is chose display third
		alert('You came third');  
		document.getElementById('funds').innerHTML= parseInt( givenFunds) ; 
	}

	else{alert('You Lost');   // if the last horse in the array is chose display lost
	document.getElementById('funds').innerHTML= parseInt( givenFunds) ;}
}



function buttonDisabler() // disabler function created
{		
	document.getElementById('start').style.background='red';
	document.getElementById('start').disabled=true;   //  start button disabled
	document.getElementById('amount').disabled=true;  //  bet  field disabled
	document.getElementById('laps').disabled=true;  //  laps options disabled
	document.getElementById('bethorse').disabled=true;  //  horse bet field disabled
}


function startTheRace(){

	gettingValuesForBet();
	if(enterBet>0 && enterBet<=100 && givenFunds>0) {
		myBG.loop=true;
		myBG.play();
		buttonDisabler();
		gameplay= true;
		document.getElementById('funds').innerHTML= givenFunds - enterBet;   // decrement of the bet amount from the total fund
		if(startLine[0] == true && startLine[1] == true && startLine[2] == true && startLine[3] == true)
		{  //checkers initialised after the horses reach start line
			startLine[0] = false; startLine[1] = false; startLine[2] = false; startLine[3] = false;
		}
		allTheHorseMove(); //making the horses move
		setInterval(horseRanks,200);  //table displays the ranks 
		pickedHorse = [];  // array initialised to clear the stored values
	}
	else if(enterBet==0 || enterBet<0){ alert('Enter the valid amount');}

	else {	alert('Not Enough Fund');}

}



function loadMyGame() {  //the start button activator
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startTheRace);


}

document.addEventListener('DOMContentLoaded', loadMyGame);   // calling the load function
/*
  NAME: John Khanal
  UNID: 18406497
  MODULE :CSY1018 ASSIGNMENT 2
  GAME: HORSE RACING
 */

//initialising variables
var pickedHorse = new Array();  //horse ending checker
var totalLapsGiven;  // totallaps user chooses
var currentLap=[0,0,0,0]; // four laps for each horse
var enterBet;   // user enters bet amount
var betOnHorse; // horse chosen 
var gamePlay=true; // checks for game progress
var givenFunds; // total funds
var startLine= new Array(false, false,false , false); //boolean checkers
var myBG =  new Audio('mario.flac'); // sound file

//white horse is the horse1 

/*for white horse*/
function whiteRightMovement(){   //right movement for white horse
	var playerHorse =document.getElementById('horse1');  
	var posFromLeft= playerHorse.offsetLeft;  
	playerHorse.className = 'horse runRight walkRight';   
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';  
	var generateRandSpeed= (Math.random()*0.287)+0.72;       
	if(posFromLeft>=window.innerWidth*generateRandSpeed) 
	{
		clearInterval(interWhite);   
		interWhite = setInterval(whiteUpMovement,25);  
	}
}

function whiteUpMovement(){    //up movement for white horse
	var playerHorse =document.getElementById('horse1');
	var posFromTop = playerHorse.offsetTop;  
	playerHorse.className = 'horse runUp walkUp'
			playerHorse.style.top = posFromTop - Math.random()*14.7 +'px'; // chaging the top position to move right by adding random speed
	var generateRandSpeed= (Math.random()*0.0387) +0.08;  // to check the horses postion in random to top of the track to move left
	if(posFromTop<=window.innerHeight*generateRandSpeed)    // comparing horse's top to the track's height to make horse change direction
	{

		clearInterval(interWhite);
		interWhite = setInterval(whiteLeftMovement,25);
	}

}


function whiteLeftMovement(){ //move white horse towards left
	var playerHorse =document.getElementById('horse1');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed){
		clearInterval(interWhite);
		interWhite = setInterval(whiteDownMovement,25);
	}
}

function whiteDownMovement(){  //down movement for white horse
	var playerHorse =document.getElementById('horse1');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';

	var totalLapsGiven = document.getElementById('laps').value; //reading user input value of laps
	var generateRandSpeed= (Math.random()*0.225) +0.68;

	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{

		clearInterval(interWhite);
		if(currentLap[0]<totalLapsGiven-1){  // checking if the laps are  completed
			interWhite=setInterval(whiteRightMovement,25);
			currentLap[0]+=1; // running laps increase when the finish line is crossed
		}
		else{ interWhite = setInterval(whiteHorseAtFinishLine,25);currentLap[0]=0;}  // if laps are finished finishedline method is called

	}
}


function whiteHorseAtFinishLine(){  // stop line method
	var playerHorse =document.getElementById('horse1');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1 )+0.21;

	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interWhite);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse1');
		startLine[0] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;
	}

}

/* blue horse is the horse 2*/
function blueRightMovement(){  
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';  // speed of the horse
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed){
		clearInterval(interBlue);
		interBlue = setInterval(blueUpMovement,25);
	}
}


function blueUpMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387 )+0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBlue);
		interBlue = setInterval(blueLeftMovement,25);
	}
}


function blueLeftMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBlue);
		interBlue = setInterval(blueDownMovement,25);
	}
}

function blueDownMovement(){
	var playerHorse =document.getElementById('horse2');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	totalLapsGiven = document.getElementById('laps').value;

	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBlue);
		if(currentLap[1]<totalLapsGiven-1){
			interBlue = setInterval(blueRightMovement,25);
			currentLap[1]+=1;
		}
		else{ interBlue = setInterval(blueHorseAtFinishLine,25); currentLap[1]=0;}
	}
}

function blueHorseAtFinishLine(){ 
	var playerHorse =document.getElementById('horse2');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBlue);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse2');
		startLine[1] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}
}

/*green horse all functions*/
function greenRightMovement(){ 
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenUpMovement,25);
	}
}

function greenUpMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387) +0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenLeftMovement,25);
	}
}



function greenLeftMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed){
		clearInterval(interGreen);
		interGreen = setInterval(greenDownMovement,25);
	}
}
function greenDownMovement(){
	var playerHorse =document.getElementById('horse3');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	var   totalLapsGiven = document.getElementById('laps').value;

	if(posFromTop>=window.innerHeight*generateRandSpeed){
		clearInterval(interGreen);
		if(currentLap[2]<totalLapsGiven-1){
			interGreen = setInterval(greenRightMovement,25);
			currentLap[2]+=1;
		}
		else{   interGreen = setInterval(greenHorseAtFinishLine,25);currentLap[2]=0;}
	}
}
function greenHorseAtFinishLine(){
	var playerHorse =document.getElementById('horse3');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var  totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interGreen);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse3');

		startLine[2] =true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}
}




//brown horse functions
function brownRightMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';

	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.287) +0.73;
	if(posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownUpMovement,25);
	}
}


function brownUpMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runUp walkUp';
	playerHorse.style.top = posFromTop - Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.0387) +0.08;
	if(posFromTop<=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownLeftMovement,25);
	}
}

function brownLeftMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runLeft walkLeft';
	playerHorse.style.left = posFromLeft - Math.random()*14.7 +'px';
	var generateRandSpeed = (Math.random()*0.1)- 0.0186;
	if(posFromLeft<=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		interBrown = setInterval(brownDownMovement,25);
	}
}



function brownDownMovement(){
	var playerHorse =document.getElementById('horse4');
	var posFromTop = playerHorse.offsetTop;
	playerHorse.className = 'horse runDown walkDown';
	playerHorse.style.top = posFromTop + Math.random()*14.7 +'px';
	var generateRandSpeed= (Math.random()*0.21) +0.68;
	var totalLapsGiven = document.getElementById('laps').value;
	if(posFromTop>=window.innerHeight*generateRandSpeed)
	{
		clearInterval(interBrown);
		if(currentLap[3]<totalLapsGiven-1){
			interBrown = setInterval(brownRightMovement,25);
			currentLap[3]+=1;
		}
		else{interBrown = setInterval(brownHorseAtFinishLine,25);currentLap[3]=0;}
	}
}




function brownHorseAtFinishLine(){
	var playerHorse =document.getElementById('horse4');
	var posFromLeft= playerHorse.offsetLeft;
	playerHorse.className = 'horse runRight walkRight';
	playerHorse.style.left = posFromLeft + Math.random()*14.7 +'px';
	var totalLapsGiven = document.getElementById('laps').value;
	var generateRandSpeed=(Math.random()*0.1)+0.21;
	if( posFromLeft>=window.innerWidth*generateRandSpeed)
	{
		clearInterval(interBrown);
		playerHorse.className = 'horse standRight';
		pickedHorse.push('horse4');
		startLine[3] = true;
		endMarker();
		totalLapsGiven=totalLapsGiven-1;

	}

}
//horse movements done

function endMarker()   // checks if the laps are completed
{
	if(startLine[0] == true && startLine[1] == true && startLine[2] == true && startLine[3] == true) // to check all the horses crossed the line
	{
		horseRanks(); // called to display the winner table

	}
}


/*winner displaying function*/
function horseRanks()
{
	if(startLine[0] ==true, startLine[1] ==true, startLine[2] ==true, startLine[3] ==true){ //for all the horses reach the startline
		myBG.loop=false;
		for (var row = 1; row < 5; row++) {
			var tRow = document.getElementsByTagName('tr')[row];  
			var tData = tRow.getElementsByTagName('td')[1];
			tData.className = pickedHorse[row-1];  
			if(gameplay==true){
				betWonOrNot();  

				gameplay=false;  

				document.getElementById('start').style.background='#3498db';
				document.getElementById('start').disabled=false; //  start button  enabled
				document.getElementById('amount').disabled=false;  //  bet amount field enabled
				document.getElementById('laps').disabled=false;  //  laps options enabled
				document.getElementById('bethorse').disabled=false;  //  horse bet option enabled
				for(var i =0; i<currentLap.length; i++){

					if(currentLap[i]==totalLapsGiven){    //resetting the laps to replay the game
						totalLapsGiven= document.getElementById('laps').value; 

					}
				}

			}
		}
	}

}



function gettingValuesForBet()   // function created to initialise the funds and bet variables
{
	givenFunds = document.getElementById('funds').innerHTML;
	enterBet = document.getElementById('amount').value;

}

function allTheHorseMove(){   //function to call the horses interval
	interWhite = setInterval(whiteRightMovement,23.5);
	interBlue = setInterval(blueRightMovement,23.5);
	interGreen = setInterval(greenRightMovement,23.5);
	interBrown = setInterval(brownRightMovement,23.5);
}



function betWonOrNot(){  //bet won or not function
	gettingValuesForBet();
	var betOnHorse= document.getElementById('bethorse').value;

	if(pickedHorse[0] == betOnHorse)   //checks chosen horse
	{
		alert('You Won!');
		document.getElementById('funds').innerHTML = parseInt(givenFunds) + parseInt(enterBet)*2;  // the funds is increased by adding the double of bet amount
	}
	else if (pickedHorse[1] == betOnHorse){  // if the second horse in the array is chose display second
		alert('You came second');
		document.getElementById('funds').innerHTML= parseInt( givenFunds) ; //bet decreased 
	}

	else if (pickedHorse[2] == betOnHorse){ // if the third horse in the array is chose display third
		alert('You came third');  
		document.getElementById('funds').innerHTML= parseInt( givenFunds) ; 
	}

	else{alert('You Lost');   // if the last horse in the array is chose display lost
	document.getElementById('funds').innerHTML= parseInt( givenFunds) ;}
}



function buttonDisabler() // disabler function created
{		
	document.getElementById('start').style.background='red';
	document.getElementById('start').disabled=true;   //  start button disabled
	document.getElementById('amount').disabled=true;  //  bet  field disabled
	document.getElementById('laps').disabled=true;  //  laps options disabled
	document.getElementById('bethorse').disabled=true;  //  horse bet field disabled
}


function startTheRace(){

	gettingValuesForBet();
	if(enterBet>0 && enterBet<=100 && givenFunds>0) {
		myBG.loop=true;
		myBG.play();
		buttonDisabler();
		gameplay= true;
		document.getElementById('funds').innerHTML= givenFunds - enterBet;   // decrement of the bet amount from the total fund
		if(startLine[0] == true && startLine[1] == true && startLine[2] == true && startLine[3] == true)
		{  //checkers initialised after the horses reach start line
			startLine[0] = false; startLine[1] = false; startLine[2] = false; startLine[3] = false;
		}
		allTheHorseMove(); //making the horses move
		setInterval(horseRanks,200);  //table displays the ranks 
		pickedHorse = [];  // array initialised to clear the stored values
	}
	else if(enterBet==0 || enterBet<0){ alert('Invalid amount entry');}

	else {	alert('You don\'t have enough amount');}

}



function loadMyGame() {  //the start button activator
	var startButton = document.getElementById('start');
	startButton.addEventListener('click', startTheRace);


}

document.addEventListener('DOMContentLoaded', loadMyGame);   // calling the load function
