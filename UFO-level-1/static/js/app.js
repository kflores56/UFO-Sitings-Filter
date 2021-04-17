// from data.js
var tableData = data;

// set variables 
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var clearButton = d3.select("#clear-btn");
var form = d3.select("#form");

////CREATE TABLE////

// Step 1: Use `Object.entries` to console.log each ufo report
data.forEach(function(ufoReport) {
  Object.entries(ufoReport).forEach(function([key, value]) {
  });
});

// Step 2: Use d3 to append 1 cell per ufo report
data.forEach(function(ufoReport) {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
  });
});

// Step 3: Use d3 to update each cell  with ufo report 
data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each record
    // in the ufo report
    var cell = row.append("td");
    cell.text(value);
  });
});

////FILTER TABLE////

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
  d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
  
  var filteredData = tableData.filter(ufoReport => ufoReport.datetime === inputValue); 
  
  console.log(filterdData);

  // Step 1: Use `Object.entries` to console.log each ufo report
  filterdData.forEach(function(ufoReport) {
    Object.entries(ufoReport).forEach(function([key, value]) {
    });
  });

  // Step 2: Use d3 to append 1 cell per ufo report
  filterdData.forEach(function(ufoReport) {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
    });
  });

  // Step 3: Use d3 to update each cell  with ufo report 
  filterdData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each record
      // in the ufo report
      var cell = row.append("td");
      cell.text(value);
    });
  }); 

  // tbody.html('')

  // filteredData.forEach((ufoReport) => {
  //   var row = tbody.append("tr");
  //   Object.entires(ufoReport).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   })
  // })
}
