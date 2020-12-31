// sub_flagship_menu.js

(function($){
  $.ajax({
    url : '../data/menu_list_data.json',
    dataType : 'json',
    context:document.body
  }).done(function(data){
    // var dataFile = data.sort(function(a,b){
    //   return b.id - a.id;
    // });
    var menuCode = '<li><a href="#"><div class="product"><img></div><p class="txt"></p></a></li>';
    var indiCode = '<li><a href="#"></a></li>';
  
    var menuContent = $('.menu_content');
    var listWrap = $('.list_wrap');
    var menuArea = listWrap.children('.menu_area'); //ul
    var indiCator = listWrap.children('.pagination');
    var indiCatorUl = indiCator.children('ul');
  
    var imgUrl = '../img/';

  //================================================================
  var dataFile;
  dataFile = data.sort(function(a,b){
    return b.id - a.id;
  });   


  var dataFile = data;


  var menuTypeArr = ["ice_cream","desert","beverage","coffee","cake"];
  var menuDirectory = ["iceCream_menu","desert_menu","beverage_menu","coffee_menu","cake_menu"];

    // console.log( dataFile );
    var myViewLen = 15;
    // idx: 메뉴종류, n:보이고자하는위치페이지
    var selectArrFn = function(idx, n){ 
      var selectArr = [];
      var i=0; 
      var index = idx || 0;
      var type = menuTypeArr[index];
      for(; i < dataFile.length; i+=1){
        if( dataFile[i].type === type ){
          selectArr.push( dataFile[i] );
        }
      }

      console.log(selectArr);

      var j = 0;
      var k = n || 0;
      menuArea.empty();
  
      var menuAreaLi;
      // console.log(menuDirectory[index]);
  
      for(; j < myViewLen ; j+=1 ){
        if(selectArr[j+k] === undefined){
          break;
        }else{
          menuArea.append(menuCode);
          menuAreaLi = menuArea.children('li').eq(j);
          menuAreaLi.find('.product').addClass(selectArr[j].type);
          menuAreaLi.find('img').attr({
            'src': imgUrl + menuDirectory[index] + '/' + selectArr[j].image,
            'alt': selectArr[j].text
          });
          menuAreaLi.find('p').html(selectArr[j].text);
        }
      }//for


      // console.log(selectArr);
      // return selectArr;
    };

    // var Myresult = selectArrFn('desert');
    // console.log( Myresult );
// ---------------------------------------------------
  //내용삽입
    //한번에 보일 갯수
  // var myViewLen = 15;
  // var Setting = function(idx, n){
  //   var i = 0;
  //   var index = idx || 0;
  //   var k = n || 0;
  //   menuArea.empty();

  //   var menuAreaLi;
  //   console.log(menuDirectory[index]);

  //   for(; i < myViewLen ; i+=1 ){
  //     if(Myresult[i+k] === undefined){
  //       break;
  //     }else{
  //       menuArea.append(menuCode);
  //       menuAreaLi = menuArea.children('li').eq(i);
  //       menuAreaLi.find('.product').addClass(Myresult[i].type);
  //       menuAreaLi.find('img').attr({
  //         'src': imgUrl + menuDirectory[index] + '/' + Myresult[i].image,
  //         'alt': Myresult[i].text
  //       });
  //       menuAreaLi.find('p').html(Myresult[i].text);
  //     }
  //   }//for
  // }//var setting

  selectArrFn(0);
  // Setting(0, myViewLen);
// ---------------------------------------------------

    var mlist = $('.menu_list').find('li');
    mlist.eq(0).addClass('on');

    mlist.on('click', function(e){
      e.preventDefault();
      var idx = $(this).index();
      mlist.eq(idx).addClass('on');
      mlist.eq(idx).siblings().removeClass('on');
      selectArrFn(idx);
      // console.log(menuTypeArr[idx], Myresult);
    });


  
  //인디케이터 생성하기
  // var indiLen = Math.ceil(dataFile.length / myViewLen);
  // var indiN = 0;
  // var indiLi;
  // for(; indiN < 6 ; indiN += 1 ){
  //   indiCatorUl.append(indiCode);
  //   indiLi = indiCatorUl.children('li').eq(indiN);
  //   indiLi.find('a').text(indiN + 1);
  // }


  });
})(jQuery);
