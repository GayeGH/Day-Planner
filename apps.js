$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function () {
        //grab value from the text box that is clicked
        var hour = $(this).parent().attr('id');
        var text = $(this).prev('textarea').val();
        localStorage.setItem(hour, text);

    
        // Show notification that item was saved to localStorage by adding class 'show'

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        // get current number of hours (preferably with moment.js)
          
        // loop over time blocks
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file
        // make background color of / past hours gray / current hour red / future hours green

        // check if we've moved past this time

}
      hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    // need to repeat line 21 for all the other hours
    
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

   // display current day on page

   var timeDisplayEl = document.querySelector("#time-display");

   timeDisplayEl.textContent = moment().format("LLL");
   console.log(moment().format("LLL"));

   //var hourDisplayEl = document.querySelector("#hour-display");

   //hourDisplayEl.textContent = moment().format("H");
   //console.log(moment().format("H"));

});  
