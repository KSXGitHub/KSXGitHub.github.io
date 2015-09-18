
function main() {
  
  // Prepare constant
  var GET_DAY = 1000 * 24 * 60 * 60;
  
  // Get elements
  var year1 = document.getElementById("year1");
  var month1 = document.getElementById("month1");
  var day1 = document.getElementById("day1");
  var year2 = document.getElementById("year2");
  var month2 = document.getElementById("month2");
  var day2 = document.getElementById("day2");
  var result = document.getElementById("result");
  
  // Function
  function createDateFrom3HTMLInputElements(year, month, day) {
    return new Date(parseInt(year.value), parseInt(month.value), parseInt(day.value));
  }
  
  // The main handler
  function calculate() {
    var date1 = createDateFrom3HTMLInputElements(year1, month1, day1);
    var date2 = createDateFrom3HTMLInputElements(year2, month2, day2);
    var distance = Number(date2) - Number(date1);
    result.textContent = String(distance / GET_DAY);
  }
  
  // Set event for the main button
  document.getElementById("confirm-button").addEventListener("click", calculate, false);

}

main();
