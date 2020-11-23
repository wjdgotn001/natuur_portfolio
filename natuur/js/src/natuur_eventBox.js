(function($){
  var eventBox = $('#eventBox');
  var eventBtnBox = eventBox.children('.eventBtn');
  var eventBtn = eventBtnBox.children('button');

  var eventArea = eventBox.children('.event_area');
  var eventAreaUl = eventArea.children('ul');
  var eventAreaLi = eventAreaUl.children('li');
  var eventAreaLen = eventAreaLi.length;
  
  //마지막요소를 복제한 변수설정
  var eventAreaLi_copy = eventAreaLi.eq(-1).clone(true);
  eventAreaUl.prepend(eventAreaLi_copy);
  //복제한 변수 맨앞에 붙이기, 전체가로값 변경
  var eventAreaLi_after = eventAreaUl.children('li');
  eventAreaUl.css({'width':eventAreaLi_after.length * 100 + '%', 'position':'relative', 'left':-100 + '%' });
  eventAreaLi_after.css({'width':100 / eventAreaLi_after.length + '%'});
  
  //공통변수
  var slideN = 0;
  var timed = 500;
  var permission = true;

  eventBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
      permission = false;

      var it = $(this);
      var itClass = it.attr('class');
  
      if(itClass === 'next'){
        if( slideN >= eventAreaLen-1 ){ 
          slideN = -1;
          eventAreaUl.css({'marginLeft':slideN * -100 + '%'});
         }
        slideN += 1;     
        
      }else if(itClass === 'prev'){
        slideN -= 1;
      }

      //animate기능 통합*
      eventAreaUl.animate({'marginLeft':slideN * -100 + '%'},function(){
        if( slideN <= -1){ 
          slideN = eventAreaLen-1;
          eventAreaUl.css({'marginLeft':slideN * -100 + '%'});
        } 
        setTimeout(function(){
          permission = true;
        }, timed/5);
      });
    }//if(permission)
  });

})(jQuery);
