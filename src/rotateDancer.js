var makeRotateDancer = function(top, left, timeBetweenSteps) {
  var _this = this;
  makeDancer.call(_this, top, left, timeBetweenSteps);
  var oldStep = _this.step;
  _this.step = function() {
    oldStep();

    _this.$node.animate({ borderSpacing: 30 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)'); 
        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
        $(this).css('transform', 'rotate(' + now + 'deg)');
      },
    }, 'linear').animate({ borderSpacing: 0 }, {
      step: function(now, fx) {
        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)'); 
        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
        $(this).css('transform', 'rotate(' + now + 'deg)');
      },
    }, 'linear');
  };
};

makeRotateDancer.prototype = Object.create(makeDancer.prototype);
makeRotateDancer.prototype.constructor = makeRotateDancer;