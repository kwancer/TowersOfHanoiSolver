
//edit these as desired before running 
let n = 5
let start = 1
let end = 3
let speed = 30


let counter = 0 
let spare = 6 - (start + end)
let one = []
let two = []
let three = []
let movesFrom = []
let movesTo = []


function hanoi(n, start, end, spare) {
  if (n == 0) {
    return;
  }
  hanoi(n - 1, start, spare, end);
  printMove(start, end)
  hanoi(n - 1, spare, end, start);


}

function printMove(start, end) {
  console.log("Please move the top disk from rod number " + start + " to rod number " + end)
  movesFrom.push(start)
  movesTo.push(end)

}

function setup() {
  createCanvas(600, 400)
  switch (start) {
    case 1:
      for (i = 0; i < n; i++) {
        one.push(new Disk(1, 390 - (i) * (20), 100 - (i - 1) * (100 / n)))
      }
      break;
    case 2:
      for (i = 0; i < n; i++) {
        two.push(new Disk(2, 390 - (i) * (20), 100 - (i - 1) * (100 / n)))
      }
      break;
    case 3:
      for (i = 0; i < n; i++) {
        three.push(new Disk(3, 390 - (i) * (20), 100 - (i - 1) * (100 / n)))
        break;
      }
  }
  hanoi(n, start, end, spare)
 
}

function draw() {
  background(0)
  rectMode(CENTER);
  rect(100, height / 2 + 100, 5, 250)
  rect(300, height / 2 + 100, 5, 250)
  rect(500, height / 2 + 100, 5, 250)
  for (disk of one) {
    if (disk != null) { disk.draw() }
  }
  for (disk of two) {
    if (disk != null) { disk.draw() }
  }
  for (disk of three) {
    if (disk != null) { disk.draw() }
  }
  let moved = false
 
  if (frameCount%speed === 0) {
      move(movesFrom[counter], movesTo[counter])
      counter++
  }
}


console.log(counter)