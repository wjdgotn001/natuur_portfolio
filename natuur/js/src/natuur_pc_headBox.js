(function($){

  var gnbContent = [
    { 'titleNav': {'name':'나뚜루', 'link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['나뚜루 소개', '광고 이야기', '나뚜루 뉴스'] },

    { 'titleNav': {'name':'플래그십','link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['store', 'menu', '매장위치'] },

    { 'titleNav': {'name':'메뉴','link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['신제품/인기제품', '완제품', '전문점 제품'] },

    { 'titleNav': {'name':'매장','link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['매장찾기', '가맹점 모집', '홈배달 서비스', '푸드트럭'] },

    { 'titleNav': {'name':'이벤트','link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['진행중인 이벤트', '지난 이벤트', '당첨자 발표', '그룹 옴니채널'] },

    { 'titleNav': {'name':'sns','link':'http//naver.com', 'target':'_blank'},
      'subNav'  : ['인스타그램', '페이스북'] }
  ];

  var gnbList = '<li><dl><dt><span class="hidden_context"></span></dt><dd></dd></dl></li>';

  var gnbBox = $('.gnbBox');
  var gnbBoxUl = gnbBox.children('.gnbBox_menu');
  var gnbBoxLen = gnbContent.length;
  var gnbDt, gnbDd, subNavLen, titleN, subN ;
  var i, j;

  for(i=0 ; i < gnbBoxLen ; i += 1){
    gnbBoxUl.append(gnbList);
    gnbDt = gnbBoxUl.children('li').eq(i).find('dt');
    gnbDd = gnbBoxUl.children('li').eq(i).find('dd');
    titleN = gnbContent[i].titleNav;
    gnbDt.append('<a href="'+titleN.link+'" target="'+titleN.target+'">'+titleN.name+'</a>');
    
    subNavLen = gnbContent[i].subNav.length;
  for(j=0  ; j < subNavLen ; j +=1){
    subN = gnbContent[i].subNav[j];
    gnbDd.append('<a href="#">'+subN+'</a>');
   }
  } //for end

// ===============================================
  var gnbBoxFindDt = gnbBox.find('dt');
  var gnbBoxFindDtLink = gnbBoxFindDt.find('a');
  var gnbBoxFindDd = gnbBox.find('dd'); 
  var gnbBoxFindDdLink = gnbBoxFindDd.find('a'); 
  gnbBoxFindDd.hide();

  //gnbBoxUl
  gnbBoxUl.on('mouseenter',function(){
    gnbBoxFindDd.stop().slideDown();
  });
  gnbBoxUl.on('mouseleave',function(){
    gnbBoxFindDd.stop().slideUp();
  });

  //gnbBoxFindDtLink
  gnbBoxFindDtLink.on('focus', function(){
    gnbBoxFindDd.stop().slideDown();
  });
  gnbBoxFindDdLink.eq(-1).on('blur', function(){
    gnbBoxFindDd.stop().slideUp();
  });

})(jQuery);
