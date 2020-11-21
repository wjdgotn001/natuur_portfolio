// natuur_responsive_import.js

(function($){
// jQuery start
var nowW = deviceSize();
// console.log(nowW);

// 디바이스 타입===========================
var deviceType = ['mobile', 'tablet', 'pc', 'pcfull' ];

// 변수지정====================================
var url = './common/';
var pcUrl = './pc/';
var headBox = $('#headBox');
var viewBox = $('#viewBox');
var menuBox = $('#menuBox');
var searchBox = $('#searchBox');
var snsBox = $('#snsBox');
var footBox = $('#footBox');

// import file=============================
var headImport = function(){
    headBox.append('<script src="../js/src/natuur_mobile_headBox.js"></script>');
};
var headPcImport = function(){
    headBox.append('<script src="../js/src/natuur_pc_headBox.js"></script>');
};
var viewImport = function(){
    viewBox.append('<script src="../js/src/natuur_mobile_viewBox.js"></script>');
};
// ========================================
if(nowW === deviceType[0]){
    headBox.load( url + 'headBox.html', headImport );
    viewBox.load( url + 'viewBox.html', viewImport );
    // viewBox.load( url + '' );
}else if(nowW === deviceType[1]){
    headBox.load( url + 'headBox.html', headImport );
    viewBox.load( url + 'viewBox.html', viewImport );
}
else{
    headBox.load( pcUrl + 'pc.headBox.html', headPcImport );
    viewBox.load( url + 'viewBox.html', viewImport );
}




})(jQuery);
