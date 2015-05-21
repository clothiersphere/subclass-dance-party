var Pikachu = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.tripOut();
  // this.shake();
  this.$node = $('<img src="pika.png" style="width:304px;height:228px" >');
};

Pikachu.prototype = Object.create(Dancer.prototype);

Pikachu.prototype.constructor = Pikachu;

Pikachu.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

// Pikachu.prototype.tripOut = function(){

//   var colors = ["green", "blue", "red", "white"];

//   var color = "10px solid " + colors[Math.floor(Math.random() * colors.length)];

//   this.$node.css({ "border" : color});
// };


// };

