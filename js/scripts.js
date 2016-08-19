//Back-End
var pingPongArray = ["ping", "pong", "ping-pong"]
var numbersTo = [];
var pingPong = function(inputNumber) {
  for (var total = 1; total <= inputNumber; total += 1) {
    console.log(total);
    if (total % 3 === 0) {
      numbersTo.push(pingPongArray[0]);
    } else {
        numbersTo.push(total);
    }
  }
  return numbersTo;
};

//Front-End
$(function() {
  $("#blank form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var results = pingPong(userInput);
    results.forEach(function(result) {
      $("#output ul").append("<li>" + result + "</li>")
    });
  });
});
