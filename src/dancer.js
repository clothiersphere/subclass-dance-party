var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};


Dancer.prototype.everyBodyDanceNow = function(){
  var that = this;
  var thatNode = that.$node;
  $('.dancerThree', thatNode).css({transform : "rotate(-30deg)"});
    setTimeout(function(){
      $('.dancerThree', thatNode).css({transform : "rotate(30deg)"});

      setTimeout(function() {
        that.everyBodyDanceNow.call(that);
      }, 200);

  }, 200);

};
