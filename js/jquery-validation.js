$(document).ready(function(){
var $client_name=/^[a-zA-Z ]{3,}$/;
var $email_id=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var $contact_number=/^[1-9]{1}[0-9]{7,9}$/;
var $address_line_1=/^[a-zA-Z0-9,-\/] ?([a-zA-Z0-9,-\/]|[a-zA-Z0-9,-\/] )*[a-zA-Z0-9,-\/]$/;
var $address_line_2=/^[a-zA-Z0-9,-\/] ?([a-zA-Z0-9,-\/]|[a-zA-Z0-9,-\/] )*[a-zA-Z0-9,-\/]$/;
var $postal_zip=/^[1-9][0-9]{5}$/;
var $isubj=/^[a-zA-Z ]{2,}$/;
error_name="Enter Name";
error_name_entry="Enter Valid Name(only Char min 3)";
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";
error_contactno="Enter Mobile Number";
error_contactno_entry="Enter Valid Mobile Number(only numeric values)";
error_address1="Enter Address1";
error_address1_entry="Enter Valid Address1";
error_address2="Enter Address2";
error_address2_entry="Enter Valid Address2";
error_country="Select Your Country";
error_state="Select Your State";
error_district="Select Your District";
 
error_zip="Enter Zip Code";
error_zip_entry="Enter Valid Zipcode(only 6digits)";
error_subject="Enter Subject";
error_subject_entry="Enter Valid Subject(only char)";
error_message="Enter Your Enquery";
			 
		  

$("#contact_us_name").blur(function()
{
valid = true;   
if (valid && $('#contact_us_name').val() == '') 
{
$("#contact_us_name_error").html(error_name);  
valid = false;
}
else if(!$(this).val().match($client_name))
{

$("#contact_us_name_error").hide(); 
$("#contact_us_name_error").remove();
$("#contact_us_name_error_entry").html(error_name_entry); 
valid = false;
}

else
{
$("#contact_us_name_error").remove();
$("#contact_us_name_error_entry").remove();


}       
});

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
$("#contact_us_contact").blur(function(){
valid = true;   
if (valid && $('#contact_us_contact').val() == '') {

$("#contact_us_contact_error").html(error_contactno); 
valid = false;
}
else if(!$(this).val().match($contact_number))
{

$("#contact_us_contact_error").remove();
$("#contact_us_contact_error").hide(); 
$("#contact_us_contact_error_entry").html(error_contactno_entry);
valid = false;
}
else
{
$("#contact_us_contact_error").remove();
$("#contact_us_contact_error_entry").remove();
}       
});
$("#contact_us_address_line_1").blur(function(){
valid = true;   
if (valid && $('#contact_us_address_line_1').val() == '') {

$("#contact_us_address_line_1_error").html(error_address1);
valid = false;
}
else if(!$(this).val().match($address_line_1))
{

$("#contact_us_address_line_1_error").remove();
$("#contact_us_address_line_1_error").hide(); 
$("#contact_us_address_line_1_error_entry").html(error_address1_entry);
valid = false;
}
else
{
$("#contact_us_address_line_1_error").remove();
$("#contact_us_address_line_1_error_entry").remove();
}       
});  
$("#contact_us_address_line_2").blur(function(){
valid = true;   
if (valid && $('#contact_us_address_line_2').val() == '') {

$("#contact_us_address_line_2_error").html(error_address2);
valid = false;
}
else if(!$(this).val().match($address_line_2))
{

$("#contact_us_address_line_2_error").remove();
$("#contact_us_address_line_2_error").hide(); 
$("#contact_us_address_line_2_error_entry").html(error_address2_entry);
valid = false;
}
else
{
$("#contact_us_address_line_2_error").remove();
$("#contact_us_address_line_2_error_entry").remove();
}       
});	
$("#contact_us_country").blur(function(){
valid = true;   
if (valid && $('#contact_us_country').val() == '') {
$("#contact_us_country_error").html(error_country);   
valid = false;
}
else
{

$("#contact_us_country_error").remove();
valid = true;
}       
});	
$("#contact_us_state").blur(function(){
valid = true;   
if (valid && $('#contact_us_state').val() == '') {

$("#contact_us_state_error").html(error_state);
valid = false;
}
else
{
$("#contact_us_state_error").remove();
}       
}); 
$("#contact_us_district").blur(function(){
valid = true;   
if (valid && $('#contact_us_district').val() == '') {
$("#contact_us_district_error").html(error_district);   
valid = false;
}
else
{

$("#contact_us_district_error").remove();
valid = true;
}       
});

$("#contact_us_zip").blur(function(){
valid = true;   
if (valid && $('#contact_us_zip').val() == '') {

$("#contact_us_zip_error").html(error_zip); 
valid = false;
}
else if(!$(this).val().match($postal_zip))
{

$("#contact_us_zip_error").remove();
$("#contact_us_zip_error").hide(); 
$("#contact_us_zip_error_entry").html(error_zip_entry);
valid = false;
}
else
{
$("#contact_us_zip_error").remove();
$("#contact_us_zip_error_entry").remove();
}       
});  
$("#contact_us_subject").blur(function(){
valid = true;   
if (valid && $('#contact_us_subject').val() == '') {

$("#contact_us_subject_error").html(error_subject); 
valid = false;
}
else if(!$(this).val().match($isubj))
{

$("#contact_us_subject_error").remove();
$("#contact_us_subject_error").hide(); 
$("#contact_us_subject_error_entry").html(error_subject_entry);
valid = false;
}
else
{
$("#contact_us_subject_error").remove();
$("#contact_us_subject_error_entry").remove();
}       
});  
$("#contact_us_message").blur(function(){
valid = true;   
if (valid && $('#contact_us_message').val() == '') {
             
	          $("#contact_us_message_error").html(error_message); 
              valid = false;
}
else
{
$("#contact_us_message_error").remove();
}       
}); 


$('#submitcontactus').click(function(){
var $client_name=/^[a-zA-Z ]{3,}$/;
var $email_id=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var $contact_number=/^[1-9]{1}[0-9]{7,9}$/;
var $address_line_1=/^[a-zA-Z0-9,-\/] ?([a-zA-Z0-9,-\/]|[a-zA-Z0-9,-\/] )*[a-zA-Z0-9,-\/]$/;
var $address_line_2=/^[a-zA-Z0-9,-\/] ?([a-zA-Z0-9,-\/]|[a-zA-Z0-9,-\/] )*[a-zA-Z0-9,-\/]$/;
var $postal_zip=/^[1-9][0-9]{5}$/;
var $isubj=/^[a-zA-Z ]{2,}$/;
error_name="Enter Name";
error_name_entry="Enter Valid Name(only Char min 3)";
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";
error_contactno="Enter Mobile Number";
error_contactno_entry="Enter Valid Mobile Number(only numeric values)";
error_address1="Enter Address1";
error_address1_entry="Enter Valid Address1";
error_address2="Enter Address2";
error_address2_entry="Enter Valid Address2";
error_country="Select Your Country";
error_state="Select Your State";
error_district="Select Your District";

error_zip="Enter Zip Code";
error_zip_entry="Enter Valid Zipcode(only 6digits)";
error_subject="Enter Subject";
error_subject_entry="Enter Valid Subject(only char)";
error_message="Enter Your Enquery";


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