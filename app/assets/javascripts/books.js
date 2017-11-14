//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .


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




/*
$(function(){
    $.ajax({
        url: "/home/search",
        type: "POST",
        data: {title:"化学"},
        datatype: "json",
        success: function(data){
            var h = '<div class="inner_b">'
                + 'コンテンツB'
                + '</div>'
                + '<div class="inner_c">'
                + 'コンテンツC'
                + '</div>';
            $("#wrap").append( h );
            //$("#add").append(item.large_image_url);
        },
        error: function(data){
            //失敗時の処理
        }
    });
});
*/

/*
function ajaxSearch(keyword,page) {
    if (!keyword) {
        keyword = $('.submit.active').attr('value');
    }
    $.ajax({
        type: 'GET',
        url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404',
        data: {
            applicationId: '1011423156545588403', // 必須
            affiliateId: '1619c75a.e3347e97.1619c75b.0859ce2c',
            keyword: keyword,
            page: page
        }
    }).done(function (data) {
        _getItems(data)
    })
}

function _getItems(data) {
    //console.log(data);
    $('#container').empty();
    var pageCount = data.pageCount;
    var current = data.page;

    var dataStat = data.count;
    if (dataStat > 0) {
        $.each(data.Items, function (i, items) {
            var item = items.Item;
            var affiliateUrl = item.affiliateUrl;
            var imageUrl = item.mediumImageUrls[0].imageUrl;
            var itemName = item.itemName;
            if (itemName.length > 10) {
                itemName = itemName.substring(0, 10) + '...';
            }
            var itemPrice = item.itemPrice;
            var htmlTemplate = $('<div class="grid">' +
                '<div class="imgholder swing">' +
                '<a href="' + affiliateUrl + '">' +
                '<img src="' + imageUrl + '" alt="' + item.itemName + '" width="128" ' +
                'height="128"/>' +
                '</a></div>' +
                '<h2><a href="' + affiliateUrl + '">' + itemName + '</a></h2>' +
                '<p>' + item.itemName + '</p>' +
                '<div class="meta">' + comma(itemPrice) + '円</div>' +
                '</div>');

            //テンプレートを追加
            $('#container').append(htmlTemplate);

        });
    });//each
}

$(function _action() {
    $('.submit').click(function () {
        var keyword = $(this).attr('value');
        //var oElements = document.getElementById("#button1");
        //var keyword = oElements.value();
        if (!keyword) {
            return;
        }
        ajaxSearch(keyword);
    })
});


$(document).ready(function() {
    $("p").css("color", "blue");
});
*/



$(function() {
    $(window).load(function() {
        $("#title").on("click", function(){
            var keyword = $("#title").val(); 
            //var keyword = $(this).attr('value');
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


)
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



/*
$('.seikou').click(function(){
    $('.seikou').hide();
    document.getElementById( "sample" ).innerHTML =
        parseInt( document.getElementById( "sample" ).firstChild.nodeValue ) + 3;
});
*/


