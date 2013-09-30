<?php
if(isset($_POST['email'])) {

	$form = trim(stripslashes($_POST['formname']));
	
    $email_to = "Gifford Nowland <contact@giffordnowland.com>";
    $email_subject = "$form Form Submitted";
     
     
    function died($error) {
        // your error code can go here
        echo "Oops! There seems to be something wrong with what you submitted:<br /><br />";
        echo $error."<br />";
        echo "Please go back and try agian.<br /><br />";
        die();
    }
     
    // validate that expected data exists
    if(!isset($_POST['name']) ||
        !isset($_POST['email']) ||
		!isset($_POST['message']) ||
        !isset($_POST['human'])) {
        died('The form appears to be missing required information (please make sure you\'ve filled it out completely).');       
    }
     
    $name = $_POST['name']; // required to pass validation
    $email_from = $_POST['email']; // required to pass validation
    $telephone = $_POST['telephone']; // not required
    $message = $_POST['message']; // required to be 2+ chars
	$human = $_POST['human']; //required to = 12
	$page = $_POST['currentpage']; // not required
     
    $error_message = "";
	//EMAIL VALIDATE
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid (it contains invalid characters).<br />';
  }
    //NAME VALIDATE
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
   //COMMENTS VALIDATE
  if(strlen($message) < 2) {
    $error_message .= 'The Message you entered does not appear to be valid (messages must contain at least 2 characters).<br />';
  }
    //HUMAN VALIDATE
  if($human != 12) {
    $error_message .= 'The Anti-Spam answer you entered was incorrect (please check your math).<br />';
  }
    //IF THERE ARE ANY ERRORS, DIE.
  if(strlen($error_message) > 0) {
    died($error_message);
  }
  
  //SEND EMAIL MESSAGE:
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Message:\n\"".clean_string($message)."\"\n";
	$email_message .= "\nReferring Page: ".clean_string($page)."\n";
     
     
// create email headers
$headers = 
'From: '.$name." <".$email_from.">\r\n".
'Reply-To: '.$name." <".$email_from.">\r\n".
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
<script type="text/javascript">
  alert("Thank you for contacting me, your message has been successfully sent!\nYou will now be taken back to the homepage.");
 window.location = '/';
</script>
<?php
}
?>