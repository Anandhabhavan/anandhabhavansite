$(document).ready(function(){
$(".sweets").click(function(){
$(".pro_sweets_content").show();
$(".pro_savories_content, .pro_cakes_content").hide();
});

$(".savories").click(function(){
$(".pro_savories_content").show();
$(".pro_sweets_content, .pro_cakes_content").hide();
});

$(".cakes").click(function(){
$(".pro_cakes_content").show();
$(".pro_sweets_content, .pro_savories_content").hide();
});

})


$(document).ready(function(){
$('.sweets').click(function(){
$('.savories, .cakes').removeClass("product_shoplist_header_active");
$(this).addClass("product_shoplist_header_active");
});
});

$(document).ready(function(){
$('.savories').click(function(){
$('.sweets, .cakes').removeClass("product_shoplist_header_active");
$(this).addClass("product_shoplist_header_active");
});
});

$(document).ready(function(){
$('.cakes').click(function(){
$('.savories, .sweets').removeClass("product_shoplist_header_active");
$(this).addClass("product_shoplist_header_active");
});
});

