//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(function() {
    $(window).load(function() {
        $('.submit').click(function () {
            //$('.seikou').hide();
            var keyword = $(this).attr('value');
            if (!keyword) {
                return;
            }
            ajaxSearch(keyword);
        });
    });
});

function ajaxSearch(keyword,page) {
    //$('.seikou').hide();
    if (!keyword) {
        keyword = $('.submit.active').attr('value');
    }
    $.ajax({
        type: 'GET',
        url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404',
        data: {
            applicationId: '1011423156545588403', // 必須
            affiliateId: '1619c75a.e3347e97.1619c75b.0859ce2c',
            title: keyword,
//            booksGenreId: keyword,
            hits: 10,
            itemCaption: keyword,
            //page: 10,
            //size: 0,
            //availability: 0,
        }
    }).done(function (data) {
        //$('.seikou').hide();
        _getItems(data)
    })
}




function _getItems(data) {
    //$('.seikou').hide();
    console.log(data);
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

$(function() {
    $(window).load(function() {
        $('セレクター').click(function () {
        });
    });
});

/*
$('.seikou').click(function(){
    $('.seikou').hide();
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).firstChild.nodeValue ) + 3;
});
*/


