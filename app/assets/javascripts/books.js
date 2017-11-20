//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .


$('img').click(function(){
    var src1 = $(this).attr('src');
    $('#photos_1').append('<img src="'+src1+'">');
    //data();
});

/*jQueryはこの関数が読み込まれる。他に同じような関数を用意しても動作しない*/
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

        $('.toBook').click(function(){
            var src1 = $(this).attr('src');
            $('#photos_1').append('<img src="'+src1+'">');
            //data();
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
        var pageCount = data.pageCount;
        var current = data.page;

    var dataStat = data.count;
    if (dataStat > 0) {
        $.each(data.Items, function (i, items) {
            var item = items.Item;
            var affiliateUrl = item.affiliateUrl;
            var largeimageUrl = item.largeImageUrl;
            affiliateUrl = item.affiliateUrl;
            largeimageUrl = item.largeImageUrl;
            var itemCap = item.itemCaption;
            //var mediumimageUrl = item.mediumImageUrl;

            var itemName = item.title;
            if (itemName.length > 10) {
                itemName = itemName.substring(0, 10) + '...';
            }
            var itemPrice = item.itemPrice;

            if (largeimageUrl !='https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/noimage_01.gif?_ex=200x200'){
/*
                var htmlTemplate = $(
                    '<span>'+
                    '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                    'height="200"' + 'onclick="data()"' + ' />' +
                    '<p>改行します</p>'+
                    '</span>'
                );
*/

                var htmlTemplate = $(
                    '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                    'height="200"' +  ' />' +
                    '<p>改行します</p>' );
            }

            //テンプレートを追加
            //$('#container').append('<img class="Butterfly" src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200" onclick="data(\'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200\',\'ひろや\')" >');
            $('#container').append(htmlTemplate);
        });

    }
}




