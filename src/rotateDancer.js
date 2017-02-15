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
makeRotateDancer.prototype.lineUp = function() {
  var count = 0;
  var totalCount = 0;
  window.dancers.forEach(function(e) {
    if (e instanceof makeRotateDancer) {
      totalCount++;
    }
  });
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof makeRotateDancer) {
      window.dancers[i].$node.css({
        'top': 550,
        'left': (count + 1) * (100 / (totalCount + 1)) + '%'
      });
      count++;
    }  
  }
};