(function($){
    var headBox = $('#headBox');
    var topBtn = $('.top_move_btn');
    
    //브라우저 상단에서 떨어져있는 거리 체크
    var win = $(window);
    var headOffset = headBox.offset().top;
    console.log('offset:', headOffset);

    //200px이동 후에 나타나기
    topBtn.hide();

    win.on('scroll', function(){
        //스크롤이 이동한 거리 파악
       var winScroll = win.scrollTop();

       if(winScroll >= 200){
           topBtn.fadeIn();
       }else {
           topBtn.fadeOut();
       }
    });

    topBtn.on('click',function(e){
        e.preventDefault();
        var it = $(this).find('a');
        var itAttr = it.attr('href');
        //a요소의 속성값이 상단에서 얼만큼 떨어져있는지 거리 체크
        var itOffset = $(itAttr).offset().top;
        //브라우저이동, iffOffset의 파악된 거리만큼
        $('html,body').animate({scrollTop: itOffset});
    });


})(jQuery);
