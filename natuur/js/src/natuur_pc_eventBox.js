(function($){
   var eventBox = $('#eventBox');
   var eventBtnBox = eventBox.children('.eventBtn');
   var eventBtn = eventBtnBox.children('button');
   
   var eventArea = $('.event_area');
   var eventAreaUl = eventArea.children('ul');
   var eventAreaLi = eventAreaUl.children('li');
   var eventAreaLiLen = eventAreaLi.length;
   //공통변수
   var timed = 500;
   var permission = true;
   var slideN = 0;

   //마지막요소 복제
   var eventAreaLi_copy = eventAreaLi.eq(-1).clone(true);
   eventAreaUl.prepend(eventAreaLi_copy);

   //ul의 가로값 변경
   var eventAreaLi_after = eventAreaUl.children('li');
   eventAreaUl.css({'width':eventAreaLi_after.length * 100 + '%', 'position':'relative', 'marginLeft': -100 + '%' });
   eventAreaLi_after.css({'width':100 / eventAreaLi_after.length / 3 + '%'});
   

   console.log(eventAreaLi_after.length);

   






   eventBtn.on('click', function(e){
       e.preventDefault();
       var it = $(this);
       var itAttr = it.attr('class');

       if(permission){
           
        permission = false;
        if(itAttr === 'next'){
    

            slideN += 1;
    
            
        }else if(itAttr === 'prev'){

            slideN -= 1;
            
        }



       }//if(permission)

   });


    

})(jQuery);
