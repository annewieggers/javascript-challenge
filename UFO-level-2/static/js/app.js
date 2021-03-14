// from data.js
var tableData = data;

// Select the button 
var submit = d3.select("#filter-btn");

// Create event handlers 
submit.on("click", runEnter);
inputElement.on("change", runEnter)

var tbody = d3.select("tbody");

// // Complete the event handler function for the form
function runEnter() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.selectAll('input');

    // get the value property of the input element
    var inputValue = inputElement.property("value",'');

    // log the input
    console.log(inputValue);

    var key = d3.select(this).property('id');
    var value = d3.select(this).property('value');

    // filter the data based on the input
    var filteredData = tableData.filter(obj => obj[key] == value);

    // log the filtered data 
    console.log(filteredData);

    // adding filtered data to table
    var tbody = d3.select("tbody");

    // clear table info before appending filtered data
    tbody.html(``);

    filteredData.forEach(function(sighting) {
         // create new row 
        var row = tbody.append("tr");
        // populate new rows
        Object.entries(sighting).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);

});
});
};


