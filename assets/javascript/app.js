



$(document).ready(function(){




let searchTerm;
let retrieveNumber;
let startYear;
let endYear;
let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=jNPGctvAAX0G11waPJxfyw0dFGVxqpSW`;

$('#clear').on('click', function(){
    searchTerm = '';
    retrieveNumber = '';
    startYear = '';
    endYear = '';
});

    $('#search').on('click', function(){
        
        searchTerm = $('#searchTerms').val();
        retrieveNumber = $('#numberOfRecords').val();
        startYear = $('#startYear').val();
        endYear = $('#endYear').val();


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            //abstract
            //


            
        })



    });

});