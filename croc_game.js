function Game() {
  this.river = ["--P--", "--C--", "CC-CC", "CC-CC"];
//   console.log(this.river);

  this.display = null

}

Game.prototype.left1 = function() {
  this.river = ["----", "-PC--", "CC-CC", "CC-CC"];
  console.log(this.river);
};

Game.prototype.left2 = function() {
  this.river = ["----", "--C--", "CCPCC", "CC-CC"];
  console.log(this.river);
};

Game.prototype.right1 = function() {
  this.river = ["-----", "--CP-", "CC-CC", "CC-CC"];
  console.log(this.river);
};

Game.prototype.right2 = function() {
  this.river = ["-----", "--C--", "CCPCC", "CC-CC"];
  console.log(this.river);
};

Game.prototype.neither1 = function() {
  this.river = ["-----", "--C--", "CC-CC", "CCPCC"];
  console.log(this.river);
};

Game.prototype.neither2 = function() {
  this.river = ["-----", "--C--", "CC-CC", "CCPCC"];
  console.log(this.river);
  console.log("You have been eaten ");
};

Game.prototype.print = function(){
    this.display = this.river[0] + '\n' + this.river[1] + '\n' + this.river[2] + '\n' + this.river[3]
    console.log(this.display)
}
``