var makeMovingDancer = function(top, left, timeBetweenSteps) {
  var _this = this;
  makeDancer.call(_this, top, left, timeBetweenSteps);
  var oldStep = _this.step;
  _this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    _this.$node.animate({
      left: '+=100'
    }, 1000).animate({
      left: '-=100'
    }, 1000);
  };
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.lineUp = function() {
  var count = 0;
  var totalCount = 0;
  window.dancers.forEach(function(e) {
    if (e instanceof makeMovingDancer) {
      totalCount++;
    }
  });
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof makeMovingDancer) {
      window.dancers[i].$node.css({
        'top': 350,
        'left': (count + 1) * (100 / (totalCount + 1)) + '%'
      });
      count++;
    }  
  }
};