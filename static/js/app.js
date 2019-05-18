// from data.js
var tableData = data;

var btn = d3.select("#filter-btn");

btn.on("click" , function(){

    d3.event.preventDefault();
    
    var dte = d3.select("#datetime").property("value");

    var result = tableData.filter( s => s.datetime === dte);

    var tbody = d3.select("tbody");

    tbody.selectAll("tr").remove();
    
    Object.entries(result).forEach(([key, value]) => {
      var row = tbody.append("tr");  
     
      var cell = row.append("td");      
      cell.text(value.datetime);

      var cell = row.append("td");
      cell.text(value.city);

      var cell = row.append("td");
      cell.text(value.state);

      var cell = row.append("td"); 
      cell.text(value.country);

      var cell = row.append("td");
      cell.text(value.shape);

      var cell = row.append("td"); 
      cell.text(value.durationMinutes);

      var cell = row.append("td");
      cell.text(value.comments);
      
    });
});
