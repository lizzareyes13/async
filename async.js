//challenge 1
console.log("I am at the beginning of the code");

setTimeout(function timer() {
  console.log('I am in the setTimeout callback function');
}, 3000);


//challenge 2
function stopIt() {
var counter = 0;
var interval = setInterval(function(){
   counter += 1;
   if(counter === 5){
       clearInterval(interval);
   }
   console.log('Interval Hello!');
}, 2000);
}

stopIt();


//challenge 3
function everyXsecsForYsecs() {
  var counter = 0;
  var interval =
  setTimeout(function(){
    counter += 1;
    if()
  }, 1000);
}

let howdyTwo = everyXsecsForYsecs();
