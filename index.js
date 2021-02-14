$(".preview").click(function() {
    document.getElementById("third-card-img__img").src=$(this).attr('src');
});

$(document).ready(function(){
    $('.content-header_burger').click(function(event){
        $('.content-header_burger,.content-header_sections').toggleClass('active');
        $('body').toggleClass('lock')
});
});