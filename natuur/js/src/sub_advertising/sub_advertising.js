// sub_advertising.js

(function($){
    $.ajax({
        url:'../data/video_data.json',
        dataType : 'json',
        context:document.body
    }).done(function(data){
        var nowW = deviceSize();
        var deviceType = ['mobile', 'tablet', 'pc', 'pcfull' ];
        
        var deviceViewLength; 
        switch(nowW){
            case deviceType[0]:
                deviceViewLength = 2;
                break;
            case deviceType[1]:
                deviceViewLength = 4;
                break;
            default:
                deviceViewLength = 6;
                break;
        }

        var videoData = data;
        var i = 0; 
        var len = i;
        var viewLen = deviceViewLength || 6; //화면에 보이는 갯수
        var maxLen = videoData.length; //데이터 총 갯수
        var adverConten = $('.adver_contents');
        var adverUl = '<ul class="clearfix"></ul>';
        var iframeCode = '<li><div class="play"><iframe src="" id="videoUrl" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe></div><div class="play_title"><p></p><span></span></div></li>';
        var liEq;
        var more = $('.more_btn');
        var moreBtn = more.children('button');



        adverConten.append(adverUl);
        var j;
        var moreFn = function(){
            var k; //k는 나머지 값인 3으로 처리하는 변수
            if( j === undefined){ //예)총13개의 갯수가 있는데 한번에 보이는 갯수가 5개일 때 동일한 5,5,5개씩 생기기때문에 5,5,3으로 보일 수 있도록 언급해준다.
                k = viewLen;  //보이는 갯수
            }else{ k = j; } //나머지값만큼 처리될 수 있도록 변수 k를 생성

            len = i + k; //0+6, 6+3 , 9+3.....
            for(; i<len ; i+=1 ){
               if( i >= maxLen ){
                more.remove();
                  break;
               }else{
                adverConten.children('ul').append(iframeCode);
                liEq = adverConten.find('li').eq(i);
                liEq.find('iframe').attr({'src': data[i].movie});
                liEq.find('p').text(data[i].title);
                liEq.find('span').text(data[i].year);
               } 
            }//for
        };//moreFn
        moreFn(6);

        // moreBtn.on===================================
        moreBtn.on('click',function(e){
            e.preventDefault();
            moreFn(3);
        });

        
    });//.done()
})(jQuery);
