$(document).ready(function(){
$(".product_list_sweets").click(function(){
$(".golf_subproduct_list").show();
$(".landirri_subproduct_list, .agri_subproduct_list, .cenralsys_subproduct_list").hide();
});

$(".product_list_landscape_savories").click(function(){
$(".landirri_subproduct_list").show();
$(".golf_subproduct_list, .agri_subproduct_list, .cenralsys_subproduct_list").hide();
});

$(".product_list_agri").click(function(){
$(".agri_subproduct_list").show();
$(".golf_subproduct_list, .landirri_subproduct_list, .cenralsys_subproduct_list").hide();
});

$(".product_list_central_sys").click(function(){
$(".cenralsys_subproduct_list").show();
$(".golf_subproduct_list, .agri_subproduct_list, .landirri_subproduct_list").hide();
});
})



$(document).ready(function(){
$(".product_sort").click(function(){
$(".sortby_content").show();
$(".filterby_content").hide();
});

$(".product_filter").click(function(){
$(".filterby_content").show();
$(".sortby_content").hide();
});
})




$(document).ready(function(){
$('.product_sort').click(function(){
$('.sortby_content').addClass("active");    
$('.filterby_content').removeClass("active");
$(this).addClass("active");
});
});





$(document).ready(function(){
$('.product_list_sweets').click(function(){
$('.product_list_landscape_savories,.product_list_agri,.product_list_central_sys').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});
$(document).ready(function(){
$('.product_list_landscape_savories').click(function(){
$('.product_list_sweets,.product_list_agri,.product_list_central_sys').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});
$(document).ready(function(){
$('.product_list_agri').click(function(){
$('.product_list_landscape_savories,.product_list_sweets,.product_list_central_sys').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});
$(document).ready(function(){
$('.product_list_central_sys').click(function(){
$('.product_list_landscape_savories,.product_list_agri,.product_list_sweets').removeClass("filter_pro_active");
$(this).addClass("filter_pro_active");
});
});















