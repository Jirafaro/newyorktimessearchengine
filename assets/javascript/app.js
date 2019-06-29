$(document).ready(function () {

    var searchTerm ;
    var retrieveNumber;
    var startYear = $('#startYear');
    var endYear = $('#endYear');
    var queryURL;
    var startDate = 1800;
    var endDate = 2019;
    var objectDate;
    $('#clear').on('click', function () {
        searchTerm = '';
        retrieveNumber = 10;
        startYear = '';
        endYear = '';
    });


    $('#search').on('click', function (event) {
     retrieveNumber = parseInt($("#numberOfRecords").val(),10);
        event.preventDefault();
        searchTerm = $('#searchTerms').val();
        startDate = $("#startYear");
        endDate = $("#endYear");        
        startDate1=$.param( startDate );
        endDate2=$.param( endDate );


        queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=jNPGctvAAX0G11waPJxfyw0dFGVxqpSW`;


        function setDefaultDate() {
            if ($("#startYear").val() == "") { startDate = "1800"; }
            if ($("#endYear").val() == "") { endDate = "2019"; }
            if ($("#startYear").val() != "") { 
                startDate = $("#startYear");
                queryURL = queryURL + "&begin_date" + startDate1+"0101";
            } 
            if ($("#endYear").val () != "") {
                endDate = $("#endYear");
                queryURL = queryURL + "&end_date" + endDate2+"1231";
            }
        }
        setDefaultDate();
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                $("#numberOfRecords").val(retrieveNumber);
                $("#numberOfRecords").html(retrieveNumber);

                for (var i = 0; i < retrieveNumber; i++) {

                        $("#search-results").val(response.response.docs[i].abstract + response.response.docs[i].pub_date);
                        $("#search-results").append(JSON.stringify(response.response.docs[i].abstract + "<br>"+response.response.docs[i].pub_date+"<br><br>"));
                }
            });

    });

});