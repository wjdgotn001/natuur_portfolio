// sub_introduce.js

(function($){
    var tabList = $('.title_list');
    var tabLi = tabList.children('li');
    var tabCon = $('.tab_contents');
    var tabMenu = tabCon.children('div');

    tabLi.on('click',['a'],function(e){
        e.preventDefault();

        var it = $(this);
        var itI = it.index();

        tabMenu.eq(itI).show();
        tabMenu.eq(itI).siblings().hide();

        tabLi.eq(itI).addClass('action');
        tabLi.eq(itI).siblings().removeClass('action');

    });


})(jQuery);