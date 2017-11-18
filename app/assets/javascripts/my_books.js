// var t = $("#title").val();

/*
  $(window).load(function() {
  $('.submit',).on('click',function() {
  });
  });
*/

$(window).load(function(){
    var author = '西尾維新';
    var title = '恋愛';
    var hits = 30;
    setBooks(author, hits);
});

function authorSearch(author, hits) {
    return $.ajax({
        url: '/home_authorSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            author: author,
            hits: hits
        }
    });
}

function titleSearch(title, hits) {
    return $.ajax({
        url: '/home_titleSearch',
        type: 'GET',
        dataType: 'json',
        async: true,
        data: {
            title: title,
            hits: hits
        }
    });
}

function setBooks(author, hits) {
    authorSearch(author, hits).done(function(data){
        getBooks(data);
    }).fail(function(data){
        $('#out').html('<p>Failure</p>');
    });
}

function getBooks(data) {
    $.each(data, function (i) {
        var url = data[i]["params"]["itemUrl"];
        var imgUrl = data[i]["params"]["largeImageUrl"];
        var list = '<p><img src="'
            + imgUrl
            +'"></p>';
        $("#photos_6").append(list);
    });
}


/*
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
*/
