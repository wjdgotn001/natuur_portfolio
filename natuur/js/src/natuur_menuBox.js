(function($){
    var menuBox =$('#menuBox');
    var menuArea = menuBox.children('.menu_area');
    var menuAreaUl = menuArea.children('ul');
    var menuAreaLi = menuAreaUl.children('li');


    $(document).ready(function(){

        menuAreaLi.hover(
            // mouse hover
            function(){
                $(this).animate({
                    marginTop: "-8px"
                },200);
            },

            //mouse leave
            function(){
                $(this).animate({
                    marginTop: "0%"
                },200);
            }
        )
    });
})(jQuery);
