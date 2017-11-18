// var t = $("#title").val();

/*
  $(window).load(function() {
  $('.submit',).on('click',function() {
  var t = 'hoge'
  var hoge = '<div>'
  + '<p>'
  + t
  + '</p>'
  + '</div>';
  $('#wrap').append(hoge);
  });
  });
*/

$(window).load(function(){
    var title = '恋愛';
    var hits = 3;
    //    searchBooks(title, hits);
    tt(title, hits);
});

function searchBooks(title, hits) {
    return $.ajax({
        url: '/home_search',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: hits
        }
    });
}

function tt(title, hits) {
    searchBooks(title, hits).done(function(data){
        var list;
        $.each(data, function (i) {
            var url = data[i]["params"]["itemUrl"];
            var imgUrl = data[i]["params"]["largeImageUrl"];
            list = '<p><img src="'
                + imgUrl
                +'"></p>';
            $("#photos_6").append(list);
        });
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}



function getBooks(data) {
    var list;
    $.each(data, function (i) {
        var url = data[i]["params"]["itemUrl"];
        var imgUrl = data[i]["params"]["largeImageUrl"];
        list = '<p><img src="'
            + imgUrl
            +'"></p>';
        $("#photos_6").append(list);
    });
}

function _getItems(data) {
    //$('.seikou').hide();
    // console.log(data);
    $('#container').empty();
    //    var pageCount = data.pageCount;
    //    var current = data.page;

    var dataStat = data.count;
    if (dataStat > 0) {
        $.each(data.Items, function (i, items) {
            var item = items.Item;
            var affiliateUrl = item.affiliateUrl;
            var largeimageUrl = item.largeImageUrl;
            var itemCap = item.itemCaption;
            //var mediumimageUrl = item.mediumImageUrl;

            var itemName = item.title;
            if (itemName.length > 10) {
                itemName = itemName.substring(0, 10) + '...';
            }
            var itemPrice = item.itemPrice;

            if (largeimageUrl !='https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/noimage_01.gif?_ex=200x200'){
                var htmlTemplate = $('<div class="grid">' +
                                     '<div class="imgholder swing">' +
                                     '<a href="' + affiliateUrl + '">' +
                                     '<img src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                                     'height="200"/>' +
                                     '</a></div>'+'<p>'+ itemCap + '</p>' );
            }

            //テンプレートを追加
            $('#container').append(htmlTemplate);

        });

    }
}
