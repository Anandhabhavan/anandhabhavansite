$(document).ready(function(){
var $mailid=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var $password=/^[a-zA-Z ]{3,}$/;
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";
error_password="Enter password";
error_password_entry="Enter Valid password(only Char min 3)";

$("#mailid").blur(function()
{
valid = true;   
if (valid && $('#mailid').val() == '') 
{
$("#mailid_error").html(error_mailid);  
valid = false;
}
else if(!$(this).val().match($mailid))
{

$("#mailid_error").hide(); 
$("#mailid_error").remove();
$("#mailid_error_entry").html(error_mailid_entry); 
valid = false;
}
else
{
$("#mailid_error").remove();
$("#mailid_error_entry").remove();
}       
});

$("#password").blur(function(){
valid = true;   
if (valid && $('#password').val() == '') {

$("#password_error").html(error_password);
valid = false;
}
else if(!$(this).val().match($password))
{

$("#password_error").remove();
$("#password_error").hide(); 
$("#password_error_entry").html(error_password_entry);
valid = false;
}
else
{
$("#password_error").remove();
$("#password_error_entry").remove();
}       
}); 
$('#login_sub_btn').click(function(){
var $mailid=/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
var $password=/^[a-zA-Z ]{3,}$/;
error_mailid="Enter Mail Id";
error_mailid_entry="Enter Valid Mailid(someone@some.com)";
error_password="Enter password";
error_password_entry="Enter Valid password(only Char min 3)";

valid = true; 
if (valid && !$('#mailid').val().match($mailid)) {
$("#mailid_error").html(error_mailid);  
valid = false;
return false;
}
else if (valid && !$('#password').val().match($password)) {
$("#password_error").html(error_password);  
valid = false;
return false;
}
else
{
$("#overlay").show();
$('#contact_loder').css('visibility', 'visible');
$("#mailid_error").remove();	
$("#password_error").remove();
return true;
valid = true; 

} 
});

});