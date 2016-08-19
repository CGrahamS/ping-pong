//Back-End
var numbersTo = [];
var pingPong = function(inputNumber) {
  for (var total = 1; total < inputNumber; total + 1) {
    numbersTo.push(total);
  };
  return numbersTo;
};

//Front-End
$(function() {
  $("#blank form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);

    $("#output ul").append("<li>" + result + "</li>")
  });
});
