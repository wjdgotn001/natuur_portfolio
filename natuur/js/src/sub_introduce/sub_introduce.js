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

    
    //일정 스크롤 시에 이미지 나타나게 하기
    var tabContents = $('.tab_contents');
    var tabConImg = tabContents.find('img');
    var storyP = tabContents.find('p');
    // var storyCapi = tabContents.find('capitalize');
    var mainBg = tabContents.find('.main_bg');
    var win = $(window);
    var it = $(this);

    win.scroll(function(){

        if(it.scrollTop() >= 700 ){
            tabConImg.addClass('animate');
        }
        if(it.scrollTop() >= 300 ){
            mainBg.addClass('animate');
        }
        if(it.scrollTop() >= 1000 ){
            storyP.addClass('animate');
        }
        
        
    });

    

   
    




})(jQuery);