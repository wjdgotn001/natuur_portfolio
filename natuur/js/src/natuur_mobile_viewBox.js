// filename.js 

(function($){
// jQuery start
var viewBox = $('#viewBox');
var indiUl = viewBox.children('.view_indicator');
var indiLi = indiUl.find('li');
var indiLink = indiLi.children('a');

var viewArea = $('.view_area');
var viewAreaUl = viewArea.children('.view_image');
var viewAreaLi = viewAreaUl.children('li');
var viewAction = viewArea.find('.action');

var timed = 500;

viewAction.show();
viewAreaLi.not(viewAction).stop().hide();
indiLink.on('click focus',function(e){
    e.preventDefault();

    var it = $(this);
    var itIndex = it.parent('li').index();

    if(itIndex !== viewAction.index()){ 
        
        indiLi.eq(itIndex).addClass('action');
        indiLi.eq(itIndex).siblings().removeClass('action');
        
        viewAreaLi.eq(itIndex).addClass('action');
        viewAreaLi.eq(itIndex).siblings().removeClass('action');
        // console.log(itIndex);
        viewAction = viewAreaUl.find('.action');


        viewAreaLi.not(viewAction).stop().fadeOut();
        setTimeout(function(){
            viewAreaLi.eq(itIndex).stop().fadeIn();
        }, timed/2);
 
    }
});//indiLi.on



})(jQuery);
