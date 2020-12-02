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
    var story = tabContents.find('.story_brand');
    var storyImg = story.children('img');
    var storyP = tabContents.find('p');
    var mainBg = tabContents.find('.main_bg');
    var innerBg = $('.inner_bg_img');
    var innerBgOffset = innerBg.offset().top;
    var mainBgOffset = mainBg.offset().top;
    var win = $(window);
    var winH = win.outerHeight();
    var myViewSet = winH/3;
    // console.log(innerBgOffset - (winH/3));
    

    win.scroll(function(){
        var it = $(this);

        if(it.scrollTop() >= innerBgOffset-myViewSet ){
            mainBg.addClass('animate');
            
        }
        if(it.scrollTop() >= mainBgOffset+(winH/5) ){
            storyImg.addClass('story_animate');

            setTimeout(function(){
                if(it.scrollTop() >= mainBgOffset+(winH/4) ){
                    storyP.addClass('story_animate');
                }
            },700);
        } 
    });



})(jQuery);