class Disk {
  constructor(column,y,w) {
    this.column = column
    this.w =w 
    this.y = y
  }
  draw(y=this.y){
    rectMode(CENTER);
      rect(100+200*(this.column-1),y,this.w,20)
  }


}

function move(start,end){
  let moving 
  switch (start) {
    case 1:
      moving = one.pop()
      break;
    case 2:
      moving = two.pop()
      break;
    case 3:
     moving = three.pop()
      break;
  }
  if(moving!=undefined){
  moving.column = end
  switch (end) {
    case 1:
      moving.y = 390- (one.length) * (20)
      one.push(moving)
      break;
    case 2:
      moving.y = 390- (two.length) * (20)
      two.push(moving)
      break;
    case 3:
      moving.y = 390- (three.length) * (20)
      three.push(moving)
      break;
  }}
}