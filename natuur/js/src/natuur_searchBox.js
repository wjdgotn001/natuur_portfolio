// natuur_searchBox.js

(function($){
  var searchBox = $('#searchBox');
  var searchArea = $('.search_area');
  var close = $('.close');
  var closeBtn = close.children('button');
  // searchArea.hide();

 var storeSearch = searchBox.children('.store_search');

 storeSearch.children('a').on('click',function(e){
    e.preventDefault();

    searchArea.fadeIn(500);
  });
  closeBtn.on('click',function(e){
    e.preventDefault();

    searchArea.fadeOut(500);
  });
  

})(jQuery);
