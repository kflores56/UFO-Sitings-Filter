// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Use `Object.entries` to console.log each ufo report
data.forEach(function(ufoReport) {
  Object.entries(ufoReport).forEach(function([key, value]) {
  });
});

// Use d3 to append 1 cell per ufo report
data.forEach(function(ufoReport) {
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
  });
});

// Use d3 to update each cell  with ufo report 
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


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

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

  console.log("date entered:", inputValue);
  
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue); 
  
  console.log('filteredData:', filterdData);

  tableData.html('')  

  filteredData.forEach((ufoReport) => {
    var row = tableData.append("tr");
    Object.entires(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
}
