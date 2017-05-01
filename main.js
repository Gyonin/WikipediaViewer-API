$(document).ready(function(){
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $("#searchResults").html("");
        for(var i=0; i<data[1].length; i++){
          $("#searchResults").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");          
        }
      $("#searchResults a").attr("target", "_blank");
      $("#searchTerm").val("");
    },
      error: function(errorMsg){
      alert("error");
    }
    });
  });
  
  $("#searchTerm").keypress(function(e){
    if(e.which == 13){
      $("#search").click();
    }
  });
  
});