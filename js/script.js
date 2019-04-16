// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
      var choice = $("input").val();
      var true_url = "https://api.giphy.com/v1/gifs/search?q="+choice+"&rating=pg&api_key=dc6zaTOxFJmzC"
      var url2 = "https://api.giphy.com/v1/gifs/search?q=popup&rating=pg&api_key=dc6zaTOxFJmzC"
      console.log(true_url)
      var random = Math.random();
      if(random >.11){
            $.ajax({
            url: true_url,
            method: "GET",
            success: function(response) {
                console.log(response.data[0].images.original.url);
                var pic = response.data[0].images.original.url;
                $('.text-center').html("<img src=" + pic + ">");
            },
        }); 
      }else{
            $.ajax({
            url: url2,
            method: "GET",
            success: function(response) {
                console.log(response.data[0].images.original.url);
                var pic = response.data[0].images.original.url;
                $('.text-center').html("<img src=" + pic + ">");
            },
        }); 
      }
});