console.log("JS Loaded");

function standardCallback(){
    console.log("I have been run in the future" + new Date())
}

console.log("Time now is" + new Date());
setTimeout(standardCallback, 3*1000)
console.log("Time after one line is" + new Date());

const magicButton = document.getElementById("magic-button")

magicButton.onclick = standardCallback

const directions = [
    "Starting point: Ironhack Miami",
    "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
    "➔ Turn right onto S Miami Ave",
    "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
  ];
  function getDirections(step, callback, errorCallback){
      setTimeout(()=>{
          console.log(directions[step])
          if(!directions[step]) errorCallback("Instructions not found")
          else callback()
      }, 2000)
  }