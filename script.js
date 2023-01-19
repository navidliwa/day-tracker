// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Add click event to saveBtn class
  $(".saveBtn").click(function (e) {

    e.preventDefault();

    // Get the textarea value and id of the time-block
    var note = $(this).parent().children("textarea").val();
    var hour = $(this).parent().attr("id");

    // Save text and time in local storage
    localStorage.setItem(hour, note);
  });

  // Creates function to add and remove classes from time blocks
  function handleTimeblocks() {
    // Get current hour
    var currentTime = dayjs().hour();
    
    // Loop over time blocks
    $(".time-block").each(function() {
      // Parse the number portion of a time block's id into an integer
      var divTime = parseInt($(this).attr("id").split("-")[1]);

      // Compare currentTime and divTime to add or remove classes
      if (divTime === currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
      } else if (divTime > currentTime) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    })
  };
  
  // Gets items from local storage and puts them in corresponding time-blocks
  for (i = 9; i < 23; i++) {
    $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
  };

  handleTimeblocks();

  // Display today's day and date
  var todayDate = dayjs().format('dddd, MMM D YYYY');
  $("#currentDay").text(todayDate);
});
