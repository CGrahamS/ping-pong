//Back-End
var pingPongArray = ["ping", "pong", "ping-pong"]
var numbersTo = [];
var pingPong = function(inputNumber) {
  for (var total = 1; total <= inputNumber; total += 1) {
    if ((total % 3 === 0) && (total % 5 === 0)) {
      numbersTo.push(pingPongArray[2]);
    } else if (total % 3 === 0) {
      numbersTo.push(pingPongArray[0]);
    } else if (total % 5 === 0) {
      numbersTo.push(pingPongArray[1]);
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

    if (userInput) {
      $("#output ul").empty();
      results.forEach(function(result) {
        $("#output ul").append("<li>" + result + "</li>")
      });
      numbersTo = [];
    } else {
      $(".alert").show();
    }
  });
  $("button#classic").click(function() {
    $("body").removeClass();
  })
  $("button#olde-time").click(function() {
    $("body").removeClass();
    $("body").addClass("olde-time");
  });
  $("button#seventies").click(function() {
    $("body").removeClass();
    $("body").addClass("seventies");
  });
});
