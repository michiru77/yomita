// var t = $("#title").val();

/*
  $(function() {
  $("#search").on("click", function(){
  var h = '<div class="inner_b">'
  + 'コンテンツB'
  + '</div>'
  + '<div class="inner_c">'
  + 'コンテンツC'
  + '</div>';
  $("#wrap").append( h );
  });
  });
*/

// Executed after top page load.
//

/*
  $(function() {
  $(window).load(function(){
  var h = '<div class="inner_b">'
  + 'コンテンツB'
  + '</div>'
  + '<div class="inner_c">'
  + 'コンテンツC'
  + '</div>';
  $("#wrap").append( h );
  });
  });
*/

$(function() {
    //    $(window).load(function(){
    $("#search").on("click", function(){
        var title = $("#title").val();
        $("#out").append('<p>hoge</p>');
        $.ajax({
            url: '/home_search',
            type: 'GET',
            dataType: 'json',
            async: true,
            //data: {title: title},
            data: {title: '化学'}
        }).done(function(data){
            var h = '<p>'
                + data
                + '</p>';
            $("#wrap").html( h );
        }).fail(function(data){
            $('#out').html('<p>Failure</p>');
        });
    });
});
