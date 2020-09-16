// Precaution to make sure HTML loads before JavaScript code runs
$(document).ready(function () {

  // moment.js time formats for app
  var HourNow = moment().format("H");
  var currentDate = moment().format("[Today is:] dddd, MMMM Do YYYY");

  var $todayDate = $(".todayDate");
  var $timeFields = $(".timeRow");
  var $mainDiv = $(".scheduler");

  // set initial tasks to empty array
  var tasks = [];

  // display date on jumbotron
  $todayDate.text(currentDate);

  // starts the app by initially creating an empty array of object pairs
  function startScheduler() {
    // .each function iterates over the timeFields
    $timeFields.each(function () {
      var $thisField = $(this);
      var hourField = parseInt($thisField.attr("data-time"));

      // create object to store taskItems related to the hourField it was added  
      var eventsObject = {
        hour: hourField,
        taskItem: "",
      }
      //adds or pushes tasks to eventsObject array
      tasks.push(eventsObject);
    });

    // use JSON stringify to store array of object pairs
    localStorage.setItem("events", JSON.stringify(tasks));
  }

  // if local storage has no data, call startScheduler function
  startTimeFields();
  if (!localStorage.getItem("events")) {
    startScheduler();
  }

  // use JSON parse to showScheduler items from local storage, and match tasks with the hour
  function showScheduler() {
    tasks = localStorage.getItem("events");
    tasks = JSON.parse(tasks);
    for (var i = 0; i < tasks.length; i++) {
      var itemText = tasks[i].taskItem;
      var itemHour = tasks[i].hour;

      $("[data-time = " + itemHour + "]").children("textarea").val(itemText);
    }
  }

  //format CSS color styles depending on time of day
  function startTimeFields() {
    $timeFields.each(function () {
      var $thisField = $(this);
      var hourField = parseInt($thisField.attr("data-time"));
      if (hourField < HourNow) {
        $thisField.addClass("previousTime").removeClass("currentTime futureTime");
      } else if (hourField == HourNow) {
        $thisField.addClass("currentTime").removeClass("previousTime futureTime");
      } else if (hourField > HourNow) {
        $thisField.addClass("futureTime").removeClass("previousTime currentTime");
      }
    });
  }

  // call showScheduler to see data from local storage
  showScheduler();
  // identify when a save button is pressed on the scheduler
  $mainDiv.on("click", "button", saveTasks);

  // updates tasks with textarea input and associated hour in data-time div using JSON stringify 
  function saveTasks() {
    var $thisField = $(this).parent();
    var taskHour = $(this).parent().attr("data-time");
    var taskAdd = (($(this).parent()).children("textarea")).val();

    for (var x = 0; x < tasks.length; x++) {
      if (tasks[x].hour == taskHour) {
        tasks[x].taskItem = taskAdd;
      }
    }
    localStorage.setItem("events", JSON.stringify(tasks));
    showScheduler();
  }

});