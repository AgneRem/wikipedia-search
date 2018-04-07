$(document).ready(function(){
  //When search is clicked run the code
  $("#search").click(function(){
    //Gets search input'
    var searchTerm = $('#searchTerm').val();
    //API URL
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";

    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $('#output').html('');
        for (var i = 0; i < data[1].length; i++){
        $('#output').prepend("<div><div class=\"btn-default\"><a href=\""+data[3][i]+"\" target=\"blank\">"+data[1][i]+"</a><p>" +data[2][i]+"</p></div></div>");
        }
        $('#searchTerm').val('');
      },
      error: function(errorMessage){
        alert("Error");
    }
    });

  });

      $('#searchTerm').keypress(function(e){
      if(e.which==13){
        $('#search').click();
      }
    });
});
