//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

//var affiliateUrl = item.affiliateUrl;
//var largeimageUrl = item.largeImageUrl;

/*
  $('.hiroya1').click(function () {
  $('.seikou').hide();

  });
*/
function data(a,b) {


    var url = 'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200'
    var foo = '<img class="toBook" src="'
        + '" alt="'
        + '" width="200" '
        + 'height="200"'
        + '<p>'
        + url
        + '<\p>'
        + '<p>改行します</p>';

    $('#photos_1').append(foo);
    $('#photos_1').append(b);
    $('.seikou').hide();
}

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

        $('.hiroya1').click(function () {
            $('.seikou').hide();
        });
        /*imgをセレクタとしてクリックはできない。*/
        $('.hiroya2').click(function () {
            $('#photos_1').append("ひろや");
            $('#photos_1').append('<img class="hiroya2" src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200" >');
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
                  var htmlTemplate = $('<div class="grid">' +
                  '<div class="imgholder swing">' +
                  '<a href="' + affiliateUrl + '">' +
                  '<img src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                  'height="200"/>' +
                  '</a></div>'+'<p>'+ itemCap + '</p>' );
                */

                /*
                  var htmlTemplate = $(
                  '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                  'height="200"' + ' onclick="data(' + largeimageUrl + ',' + item.itemName + ')" />' +
                  '<p>改行します</p>' );
                */


                var htmlTemplate = $(
                    '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                        'height="200"' + ' onclick="data(\'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200\',\'ひろ\')" />' +
                        '<p>改行します</p>' );



                /*
                  var htmlTemplate = $(
                  '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                  'height="200"' + 'onclick="data(' + 'largeimageUrl' + ',' + 'item.itemName' + ')"  />' +
                  '<p>改行します</p>' );
                */
                /*
                  var htmlTemplate = $(
                  '<img class="toBook" src="' + largeimageUrl + '" alt="' + item.itemName + '" width="200" ' +
                  'height="200" onclick="data(largeimageUrl,item.itemName)" />' +
                  '<p>改行します</p>' );
                */
            }

            //テンプレートを追加
            //$('#container').append('<img class="Butterfly" src="https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200" onclick="data(\'https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/9623/9784838729623.jpg?_ex=200x200\',\'ひろや\')" >');
            $('#container').append(htmlTemplate);
        });

    }
}



/*
  $('.hiroya1').click(function(){
  $('#photos_1').append("ひろや");
  });
*/

$(function() {
    $(window).load(function() {
        $('a').click(function () {

            /*
              var photos_1_html = $(
              '<a href="' + affiliateUrl + '">' +
              '<img src="' + largeimageUrl + '" width="200" ' +
              'height="200"/>' +
              '</a>'+'<p>'+ itemCap + '</p>'
              );
            */
            //$('#photos_1').append(photos_1_html);
            //            var photos_1_sample = $(
            //
            //            );
            $('#photos_1').append("ひろや");
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
