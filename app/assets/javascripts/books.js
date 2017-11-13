/*
$(function(){
    var h = '<div class="inner_b">'
        + 'コンテンツB'
        + '</div>'
        + '<div class="inner_c">'
        + 'コンテンツC'
        + '</div>';
    $("#wrap").append( h );
});
*/

$(function(){
    $.ajax({
        url: "/home/search",
        type: "POST",
        data: {title : "化学"},
        datatype: "json",
        success: function(data){
            $("#wrap").append(item.large_image_url);
        },
        error: function(data){
            //失敗時の処理
        }
    });
});
