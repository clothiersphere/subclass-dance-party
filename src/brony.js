var Brony = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  //this.tripOut();
  // this.shake();
  var library = ["brony.gif", "carlton.gif", "corgi.gif", "kanye.gif", "llama.gif", "pokellama.gif", "rooster.gif", "snail.gif"];
  var gif = '<img class="dancerTwo" src="' + library[Math.floor(Math.random() * library.length)] + '" style="width:204px;height:128px">'
  this.$node = $(gif);

};

Brony.prototype = Object.create(Dancer.prototype);

Brony.prototype.constructor = Brony;

/*
Brony.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};
*/

// Brony.prototype.tripOut = function(){

//   var colors = ["green", "blue", "red", "white"];

//   var color = "10px solid " + colors[Math.floor(Math.random() * colors.length)];

//   this.$node.css({ "border" : color});
// };


// };
