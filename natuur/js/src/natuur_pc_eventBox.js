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
   var cloneN = 0;
   var myWantClone = 3;
   var eventAreaLi_copy;
   for(; cloneN < myWantClone; cloneN+=1){
       eventAreaLi_copy = eventAreaLi.eq(-cloneN-1).clone(true);
       eventAreaUl.prepend(eventAreaLi_copy);       
   }

   //ul의 가로값 변경
   var eventAreaLi_after = eventAreaUl.children('li');
   eventAreaUl.css({'width':eventAreaLi_after.length * 100 + '%', 'position':'relative', 'left': -100 + '%' });
   eventAreaLi_after.css({'width':100 / eventAreaLi_after.length / 3 + '%'});
   
   eventBtn.on('click', function(e){
       e.preventDefault();
       var it = $(this);
       var itAttr = it.attr('class');

       if(permission){
        permission = false;
        if(itAttr === 'next'){
            if(slideN >= eventAreaLiLen-3){ 
                slideN = -3; 
                eventAreaUl.css({'marginLeft': slideN * (-100 /3)+ '%'});
            }
            slideN += 1;
        }else if(itAttr === 'prev'){
            // if(slideN <= -3){
            //     slideN = eventAreaLiLen-3
            //     eventAreaUl.css({'marginLeft': slideN * (-100 /3)+ '%'});
            // }
            slideN -= 1;
        }
        //animate
        eventAreaUl.animate({'marginLeft': slideN * (-100 /3)+ '%'},function(){
            if(slideN <= -3){
                slideN = eventAreaLiLen-3
                eventAreaUl.css({'marginLeft': slideN * (-100 /3)+ '%'});
            }
            console.log(slideN)
            setTimeout(function(){
                permission = true;
            }, timed/5);
        });
       }//if(permission)
   });//eventBtn.on


})(jQuery);
