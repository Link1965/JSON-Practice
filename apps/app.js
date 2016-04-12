$(document).ready(function() {
    $("#search-button").click(function(e) {
    	e.preventDefault();
    	var mySearchQuery = $("#query").val();
        $.getJSON("http://www.omdbapi.com/?s="+ mySearchQuery +"&r=json", function(data) {
            showResults(data.Search);
        });
    });
})

function showResults(results) {
    var html = "";
    $.each(results, function(index, value) {
        html += '<p>' + value.Title + '</p>';
        console.log(value.Title);
    });
    $("#search-results").html(html);
}