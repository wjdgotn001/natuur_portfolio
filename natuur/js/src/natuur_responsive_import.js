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
var eventBox = $('#eventBox');
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
var eventImport = function(){
    eventBox.append('<script src="../js/src/natuur_eventBox.js"></script>');
};
var eventPcImport = function(){
    eventBox.append('<script src="../js/src/natuur_pc_eventBox.js"></script>');
};


// ========================================
if(nowW === deviceType[0]){
    headBox.load( url + 'headBox.html', headImport );
    viewBox.load( url + 'viewBox.html', viewImport );
    eventBox.load( url + 'eventBox.html' , eventImport );
    // viewBox.load( url + '' );
}else if(nowW === deviceType[1]){
    headBox.load( url + 'headBox.html', headImport );
    viewBox.load( url + 'viewBox.html', viewImport );
    eventBox.load( url + 'eventBox.html' , eventImport );
}
else{
    headBox.load( pcUrl + 'pc.headBox.html', headPcImport );
    viewBox.load( url + 'viewBox.html', viewImport );
    eventBox.load( url + 'eventBox.html' , eventPcImport );
}


})(jQuery);
