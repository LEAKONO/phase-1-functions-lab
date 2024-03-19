function distanceFromHqInBlocks(blocks) {
  const headquaters = 42;
  if (blocks > 42) {
      return blocks - headquaters;
  }else {
      return headquaters-blocks;
  }
}
function distanceFromHqInFeet(blocks) {
  const headquaters = 42;
  if(blocks > 42){
      return (blocks - headquaters) * 264;
  }
  else if (blocks < 42) {
      return (headquaters - blocks) * 264;
  }
}

function distanceTravelledInFeet(a,b){
  if (b>a){
    return((b-a)*264);
  }
  else
    return((a-b)*264);
}

 
function calculatesFarePrice(start,destination){
  let distance = distanceTravelledInFeet(start,destination);
  if (distance<= 400){
    return 0;
  }
  if (distance>=400 && distance<=2000){
    return (distance-400)* 0.02;
  }
  else if(distance>=2000&& distance<=2500){
    return 25;
  }
  else if (distance > 2500){
    return "cannot travel that far";
  }
}