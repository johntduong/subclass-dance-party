$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      // Limits the dances positions on the stage, should only have 3 rows of dancers.
      $('body.background').height() * ((Math.random() * 0.4) + 0.25),
      $('body.background').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    var lineUpFunctionName = $(this).data('line-up-function-name');
    //window['makeDancer'].prototype.lineUp()
    // get the maker function for the kind of dancer we're supposed to make
    var arrOfFuncNames = ['makeBlinkyDancer', 'makeMovingDancer', 'makeRotateDancer'];
    for (var i = 0; i < arrOfFuncNames.length; i++) {
      var lineUpFunction = window[arrOfFuncNames[i]].prototype[lineUpFunctionName];
      lineUpFunction();
    }
  });

  // $('.dancer').mouseover(function(event) {
  //   console.log('******************');
  //   $(this).animate({
  //     top: '+=100'
  //   }, 1000).animate({
  //     bottom: '-=100'
  //   }, 1000);
  // });
});




