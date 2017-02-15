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
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i].$node.data('dancer-maker-function-name') === 'makeBlinkyDancer') {
      window.dancers[i].$node.css({
        'top': 450,
        'left': (i + 1) * (100 / (window.dancers.length + 1)) - 5 + '%'
      });
    }  
  }
};
