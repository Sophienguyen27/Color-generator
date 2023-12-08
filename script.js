$(document).ready(function() {


  // EVERYTHING GOES BELOW HERE

 
   //random color generator below 
const hexvalues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
//array for all possible hexvalues
let randomColor = () => {
  let hex = "#";
  //pound sign is needed for the color
  for(let i = 0; i < 6; i++){
    //for loop to get 6 different values from array
    hexvalues[1];
      let randomIndex = Math.floor(hexvalues.length * Math.random());
      //math.random is a random number picker between 0 and 1 so math.floor makes it so that it is a whole number
      let randomValue = hexvalues [randomIndex];
      hex = hex + randomValue;
  }
  return hex;
}

$("button").click(() => {
  console.log('i was clicked!')
document.body.style.backgroundColor = randomColor();

}
)

  // EVERYTHING GOES ABOVE HERE

})