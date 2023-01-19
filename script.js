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
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  $("#hour-19 .description").val(localStorage.getItem("hour-19"));
  $("#hour-20 .description").val(localStorage.getItem("hour-20"));
  $("#hour-21 .description").val(localStorage.getItem("hour-21"));
  $("#hour-22 .description").val(localStorage.getItem("hour-22"));

  handleTimeblocks();

  // Display today's day and date
  var todayDate = dayjs().format('dddd, MMM D YYYY');
  $("#currentDay").text(todayDate);
});
