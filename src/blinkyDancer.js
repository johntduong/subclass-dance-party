var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var _this = this;
  makeDancer.call(_this, top, left, timeBetweenSteps);
  var oldStep = _this.step;
  _this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    _this.$node.toggle();
  };
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.lineUp = function() {
  var count = 0;
  var totalCount = 0;
  window.dancers.forEach(function(e) {
    if (e instanceof makeBlinkyDancer) {
      totalCount++;
    }
  });
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof makeBlinkyDancer) {
      window.dancers[i].$node.css({
        'top': 450,
        'left': (count + 1) * (100 / (totalCount + 1)) - 15 + '%'
      });
      count++;
    }  
  }
};
