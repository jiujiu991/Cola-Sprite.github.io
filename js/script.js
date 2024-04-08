// Calculate the number of days since the start date
var startDate = new Date("Sep 29, 2022 00:00:00").getTime();
var now = new Date().getTime();
var distance = now - startDate;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));

// Update the inner HTML of the 'demo' element
document.getElementById("demo").innerHTML = "我们在一起 " + days + " 天 <span class='love'>&#10084;</span>";
