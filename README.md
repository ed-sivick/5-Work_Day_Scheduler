# Work_Day_Scheduler
___
## Objective
Create a daily planner to manage time effectively by posting hourly events and/or tasks into assigned timeblocks.  The current day will be displayed at the top of the calendar.  Timeblocks in the form of rows are assigned for standard business hours (9AM to 5PM).  When viewing timeblocks for the current day, each block is color coded to indicate whether that specific block is in the past, present, or future.  When the user clicks on a timeblock, they are able to enter an event or task associated with that time period.  They can save the information by pressing the corresponding save button for that timeblock.  The information is then saved into local storage.

___
## Layout: index.html
The HTML file was built using primarily Bootstrap components. A **jumbotron** was used in the `header` of the code to provide a brief description of the app, and display the date provided by [moment.js] (https://momentjs.com/). The `main` element for the schedule was built using the Bootstrap grid system.  It consists of 9 rows, and each row has has three columns:
- the first column displays the associated time field (9AM - 5PM)
- the second column displays the input textarea for adding events or tasks during that specific time field
- the third column displays the save button field which includes a 30px font-size **save icon** from [Codesprogrm]   (https://www.codesprogram.com/web-icon/font-awesome-save-icon)   
A sticky footer was added to display the Author and Copyright year.  
  
___
## Layout: style.css
The CSS file utilized styling that allowed the HTML elements in the app to be responsive, giving it the ability to fit multiple screen sizes.  Color selections for the time variations of **previousTime**, **currentTime**, and **futureTime** are lighter tones of **gray**, **red**, and **green** respectively .  The save icon was given a color black with a background of a lighter blue, allowing it to stand out.  A Times New Roman font was used throughout the page for consistency.  The sticky footer was styled in the same manner as the previous "Code Quiz" project.

___
## Layout: script.js


___
## Summary



## Application Links and Images  
**Links:**  
Application link: (https://ed-sivick.github.io/5-Work_Day_Scheduler/)  
index.html code: (https://github.com/ed-sivick/5-Work_Day_Scheduler/blob/master/index.html)  
JavaScript.js code: (https://github.com/ed-sivick/5-Work_Day_Scheduler/blob/master/assets/script.js)  
style.css code: (https://github.com/ed-sivick/5-Work_Day_Scheduler/blob/master/assets/style.css)

**Application Image Examples:** Hover the mouse over each image for a brief description. 
<p align="left">
  <img src="assets/images/schedule_new.png" height="450"  margin-bottom: 10px; title="image of daily schedule showing future timeblocks with no tasks added" alt="image of daily schedule showing future timeblocks and no tasks added">
  
  <img src="assets/images/schedule_active1.png" height="450" align="right" title="image of daily schedule showing active timeblocks with tasks added" alt="image of daily schedule showing active timeblocks with tasks added">
  </p>

  <p align="left">
  <img src="assets/images/schedule_active2.png" height="450" style="float:left; margin-bottom: 10px;" title="image of daily schedule showing active timeblocks with tasks added" alt="image of daily schedule showing active timeblocks with tasks added">
  
  <img src="assets/images/schedule_past.png" height="450" align="right" title="image of daily schedule showing previous timeblocks and previous added tasks" alt="image of daily schedule showing previous timeblocks and previous added tasks">
  </p>