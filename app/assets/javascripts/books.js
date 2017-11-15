// var t = $("#title").val();

$(function() {
    $(window).load(function(){
        //    $("#search").on("click", function(){
        var title = '恋愛';
        $.ajax({
            url: '/home_search',
            type: 'GET',
            dataType: 'json',
            async: true,
            data: {title: title}
        }).done(function(data){
            var bookTitle = JSON.stringify(data[0]["params"]["title"]);
            var imgURL = JSON.stringify(data[0]["params"]["largeImageUrl"]);
            var list = '<div class="inner_b">'
                + bookTitle
                + '</div>'
                + '<div class="inner_c">'
                + imgURL
                + '</div>';
            $("#wrap").html(list);
        }).fail(function(data){
            $('#out').html('<p>Failure</p>');
        });
    });
});
