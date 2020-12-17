// natuur_searchBox.js

(function($){
  var searchBox = $('#searchBox');
  var storeSearch = searchBox.children('.store_search');
  var storeSearchBtn = storeSearch.children('button');
  var searchArea = $('.search_area');
  var close = searchArea.find('.close');
  var closeBtn = close.children('button');
  searchArea.hide();
  
  // ======================================
 
 storeSearch.children('a').on('click',function(e){
    e.preventDefault();

    searchArea.fadeIn(500);
    closeBtn.focus();
  });
  closeBtn.on('click',function(e){
    e.preventDefault();

    searchArea.fadeOut(500);
    storeSearch.children('a').focus();
  });
  

})(jQuery);
