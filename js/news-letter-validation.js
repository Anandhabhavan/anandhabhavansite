$(document).ready(function(){
var $email_id=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";
			 
$("#contact_us_mailid").blur(function(){
valid = true;   
if (valid && $('#contact_us_mailid').val() == '') {

$("#contact_us_mailid_error").html(error_mailid);
valid = false;
}
else if(!$(this).val().match($email_id))
{

$("#contact_us_mailid_error").remove();
$("#contact_us_mailid_error").hide(); 
$("#contact_us_mailid_error_entry").html(error_mailid_entry);
valid = false;
}
else
{
$("#contact_us_mailid_error").remove();
$("#contact_us_mailid_error_entry").remove();
}       
}); 




$('#submitcontactus').click(function(){
var $email_id=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";


valid = true; 
if (valid && !$('#contact_us_name').val().match($client_name)) {

$("#contact_us_name_error").html(error_name);  
valid = false;
return false;
}


else if (valid && !$('#contact_us_mailid').val().match($email_id)) {

$("#contact_us_mailid_error").html(error_mailid);  
valid = false;
return false;
}

else if (valid && !$('#contact_us_contact').val().match($contact_number)) {

$("#contact_us_contact_error").html(error_contactno);  
valid = false;
return false;
}
else if (valid && !$('#contact_us_address_line_1').val().match($address_line_1)) {

$("#contact_us_address_line_1_error").html(error_address1);  

valid = false;
return false;
}
else if (valid && !$('#contact_us_address_line_2').val().match($address_line_2)) {

$("#contact_us_address_line_2_error").html(error_address2);  
valid = false;
return false;
}
else if (valid && $('#contact_us_country').val() == '') {

$("#contact_us_country_error").html(error_country);  
valid = false;
return false;
}


else if (valid && $('#contact_us_state').val() == '') {

$("#contact_us_state_error").html(error_state);   
valid = false;
return false;
}
else if (valid && $('#contact_us_district').val() == '') {

$("#contact_us_district_error").html(error_district);    
valid = false;
return false;
}
else if (valid && $('#contact_us_city').val() == '') {

$("#contact_us_city_error").html(error_city);    
valid = false;
return false;
}





else if (valid && !$('#contact_us_zip').val().match($postal_zip)) {

$("#contact_us_zip_error").html(error_zip);  
valid = false;
return false;
}
else if (valid && !$('#contact_us_subject').val().match($isubj)) {

$("#contact_us_subject_error").html(error_subject);  
valid = false;
return false;
}
else if (valid && $('#contact_us_message').val() == '') {

$("#contact_us_message_error").html(error_message);  
valid = false;
return false;
}





else
{
$("#overlay").show();
$('#contact_loder').css('visibility', 'visible');
$("#contact_us_name_error").remove();	
$("#contact_us_mailid_error").remove();
$("#contact_us_contact_error").remove();
$("#contact_us_address_line_1_error").remove();
$("#contact_us_address_line_2_error").remove();
$("#contact_us_state_error").remove();
$("#contact_us_zip_error").remove();
$("#contact_us_country_error").remove();
$("#contact_us_district_error").remove(); 
$("#contact_us_subject_error").remove(); 
$("#contact_us_message_error").remove(); 
return true;
valid = true; 

} 
});

});