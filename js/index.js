$(document).ready(function(){
  function drawGraph(initial) {
    var val = initial;
    if (isNaN(initial)) {
      val = parseInt(Math.floor(Math.random() * 100));
    }
    var oldVal = $('.percent').attr('data-pct');  
    var $circle = $('#svg #bar');
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    $circle.css({ strokeDashoffset: pct});
      // $('#cont').attr('data-pct',val);
    function count(oldVal, val) {
      var totalGain = $('.percent')//$(graph).find('.total-gain');
      var i = oldVal
      var time = 1000;
      var difference = (val - oldVal)
      var intervalTime = Math.abs(time / difference);
      var timerID = 0;
      if (difference > 0) {
          var timerID = setInterval(function () {
              i++;
              totalGain.attr('data-pct', i);
              if (i === val) clearInterval(timerID);
          }, intervalTime);
      } else if (difference < 0) {
          var timerID = setInterval(function () {
              i--;
              totalGain.attr('data-pct', i);
              if (i === val) clearInterval(timerID);
          }, intervalTime);
      }
    }
    count(oldVal, val);
  }

  drawGraph(79);
  $('#cont').on('click', function(){
    drawGraph(); 
  });
});