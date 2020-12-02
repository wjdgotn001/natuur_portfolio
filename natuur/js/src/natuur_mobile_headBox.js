(function($){
    var gnbBox = $('.gnbBox');
    var gnbWrap = $('#gnbBox_wrap');
    var gnbBoxUl = gnbBox.children('.gnbBox_menu');
    var gnbBoxLi = gnbBoxUl.children('li');
    var gnbBoxDl = gnbBoxLi.children('dl');
    var gnbBoxDt = gnbBoxDl.children('dt');
    var gnbBoxDd = gnbBoxDl.children('dd');
    var addPoint = '<i class="fas fa-plus"></i>';
    var removePoint = '<i class="fas fa-minus"></i>';
    var iconLink = gnbBoxDt.children('a');
    var gnbOpenBtn = gnbWrap.find('.gnb_open_btn');
    var gnbCloseBtn = gnbBox.find('.gnb_close_btn');

    
    iconLink.append(addPoint);

    gnbBoxDt.on('click', ['a'], function(e){
        e.preventDefault();
        
        var it = $(this);
        var itI = it.parents('li').index();
        var addPoint = '<i class="fas fa-plus"></i>';
        var removePoint = '<i class="fas fa-minus"></i>';

        it.siblings('dd').stop().slideToggle(function(){
            var ddDisplay = it.siblings('dd').css('display') === 'none';
            gnbBoxDt.find('i').remove();
            
        if(ddDisplay){
            //none
            it.removeClass('action');
            gnbBoxLi.eq(itI).siblings().find('dt').children('a').append(addPoint);
            it.children('a').append(addPoint);
            it.find('span').text('열기');

            }else{
            //block
            it.addClass('action');
            it.parents('li').siblings().find('dt').removeClass('action');
            gnbBoxLi.eq(itI).siblings().find('dt').children('a').append(addPoint);
            it.children('a').append(removePoint);
            it.find('span').text('닫기');
            }
            
        }); //slideToggle
        it.parents('li').siblings().find('dd').stop().slideUp();
      
    }); //gnbBoxDt.on

    timed = 100;
    gnbBox.hide();
    gnbOpenBtn.on('click', function(e){
        e.preventDefault();        
        gnbBox.stop().show(function(){
            $(this).addClass('action');
        });      
    });

    gnbCloseBtn.on('click',function(e){
        e.preventDefault();
        gnbBox.removeClass('action');
        setTimeout(function(){
            gnbBox.stop().hide();
        }, 500);
      
    });



  

})(jQuery);
