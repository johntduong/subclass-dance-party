var makeDancer = function(top, left, timeBetweenSteps) {
  var _this = this;
  _this.top = top;
  _this.left = left;
  _this.timeBetweenSteps = timeBetweenSteps;
  _this.$node = $('<img src="images/psypsy.gif" class="dancer">');
  _this.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    _this.$node.css(styleSettings);
  };
  
  _this.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
    setTimeout(_this.step, _this.timeBetweenSteps);
  };

  _this.step();
  _this.setPosition(_this.top, _this.left);
};


