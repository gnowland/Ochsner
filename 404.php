<!DOCTYPE HTML>
<html>
<head>

<!--
THIS WEBSITE MADE WITH LOVE; BAKED FROM SCRATCH USING ONLY THE FINEST INGREDIENTS.
ALL RIGHTS RESERVED GIFFORD NOWLAND (c) MMXIII, EXCEPT WHERE OTHERWISE CREDITED.
Contact: http://giffordnowland.com
-->

<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>404 - PAGE NOT FOUND</title>

<!--Icon Files-->
<link rel="shortcut icon" type="image/x-icon" href="http://www.giffordnowland.com/img/icon/favicon.ico" />
<link rel="apple-touch-icon" href="http://www.giffordnowland.com/img/icon/apple-touch-icon-iphone.png" /> 
<link rel="apple-touch-icon" sizes="72x72" href="http://www.giffordnowland.com/img/icon/apple-touch-icon-ipad.png" /> 
<link rel="apple-touch-icon" sizes="114x114" href="http://www.giffordnowland.com/img/icon/apple-touch-icon-iphone4.png" />
<link rel="apple-touch-icon" sizes="144x144" href="http://www.giffordnowland.com/img/icon/apple-touch-icon-ipad3.png" />

<!--CSS Files-->
<link href="http://www.giffordnowland.com/css/reset.css" rel="stylesheet" type="text/css" />
<link href="http://www.giffordnowland.com/css/style.css" rel="stylesheet" type="text/css" />
<link href="http://www.giffordnowland.com/css/css3.css" rel="stylesheet" type="text/css" />
<link href='http://fonts.googleapis.com/css?family=Alfa+Slab+One:400|Quicksand:400|Montserrat:700' rel='stylesheet' type='text/css' />
<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lt IE 9]><script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script><![endif]-->
<!--[if gte IE 9]><style type="text/css"> .gradient {filter: none;}</style><![endif]-->

<!--INTERNAL CSS-->
<style type="text/css">
#error404 {width: 390px; margin:5% auto 5% auto; }
#error404 h1 {
font-size: 41px;
font-weight: 400;
font-family: "Alfa Slab One", sans-serif;
color: #4A4A4A;
line-height: 100%;
padding: 0 0 10% 0;
margin: 0 auto;
-webkit-text-shadow: 0px -1px 0px rgba(74, 74, 74, 0.75);
   -moz-text-shadow: 0px -1px 0px rgba(74, 74, 74, 0.75);
	    text-shadow: 0px -1px 0px rgba(74, 74, 74, 0.75);
}
#error404 p {
text-align: center;
font-family: Quicksand, sans-serif;
font-size: 17px;
font-weight: 400;
padding: 1.5% 0;
}

.opaqueness {
width: 100%;
height: 100%;
background: #FAFAFA;
}

/* Style the form */
form {
	background:#CCC;
	padding:2%;
}
label {
    display:block;
    margin-top:5px;
    letter-spacing:2px;
	text-align:left;
}

input, textarea {
    width:93%;
    height:auto;
    background:#efefef;
    border:1px solid #dedede;
    padding:3%;
    margin-top:3px;
    font-size:0.9em;
    color:#3a3a3a;
    -webkit-border-radius:5px;
	   -moz-border-radius:5px;	     
		    border-radius:5px;
}

textarea {
	height:113px;
}

input:focus, textarea:focus {
    border:1px solid #97d6eb;
}

.required {
 color: black;       
}
.required:before {
 color: red;
 content: "*";
 font-weight:700;
}


legend {
font-style:italic;
color:#999;
margin:10px auto 0;
font-size:10px;
}

#submit {
width: 127px;
height: 38px;
border: none;
margin-top: 2px;
cursor: pointer;
background-color: #1C4363;
font-weight: 700;
color: #fff;
}

#submit:hover {
opacity: 0.8;
}

@media screen and (max-width: 400px){
	#error404 {width: 300px;}
}
</style>

<?php
    $name = Trim(stripslashes($_POST['name']));
    $email = Trim(stripslashes($_POST['email']));
    $message = Trim(stripslashes($_POST['message']));
    $EmailFrom = "404 Page <404@giffordnowland.com>";
    $EmailTo = "Gifford Nowland <404@giffordnowland.com>"; 
    $subject = "404 Error";
    $human = $_POST['human'];
	
	// validation
	$validationOK=true;
	if (!$validationOK) {
	  ?>
	    <script type="text/javascript">
		  alert("Something went wrong, please try submitting again.");
		  history.back();
	    </script>
	  <?php 
	  exit;
	}
			
    $body = "From: $name\nE-Mail: $email\nMessage:\n $message";
				
    if ($_POST['submit']) {
    if ($name != '' && $email != '') {
        if ($human == '12') {				 
            if (mail ($EmailTo, $subject, $body, "From: <$EmailFrom>")) { 
			?>
			  <script type="text/javascript">
                alert("Your message has been sent!\nYou will now be taken to the homepage.");
				window.location = '/';
              </script>
			<?php
	    } else { 
	        ?>
			  <script type="text/javascript">
                alert("Something went wrong, please try submitting again.");
				history.back();
              </script>
			<?php 
	    } 
	} else if ($_POST['submit'] && $human != '12') {
	    ?>
		  <script type="text/javascript">
            alert("The anti-spam question was answered incorrectly!");
			history.back();
          </script>
        <?php
	}
    } else {
	    ?>
		  <script type="text/javascript">
            alert("Please fill in all required fields.");
			history.back();
          </script>
        <?php
    }
    }
?>
</head>

<body>



<!--MASTHEAD ==================================================================================================================================== -->

<header>
	<div class="opaqueness">
 	<div id="name">
    <div class="left">GIFFORD </div><!-- no space here
 --><br class="rwd-break"><div class="right">NOWLAND</div>
	</div>
    <a href="/index.html" id="plax" style="position:static;">
      <img src="http://www.giffordnowland.com/img/GNlogo_sketchy_back.png" style="position: absolute;" id="plax-back" />
      <img src="http://www.giffordnowland.com/img/GNlogo_sketchy_front.png" style="position: absolute;" id="plax-front" />
    </a>
    <div class="gradient-border gradient"></div>
</div></div></header>
<!-- END MASTHEAD -->
<!-- CONTENTWINDOW ============================================================================================================================== -->
<div id="contentwindow" style="overflow:auto">
<div id="error404">
<h1>
404 &mdash; <br />page not found.
</h1>
<p>Shoot, it looks like I missed a bug...</p>
<p>Kindly <a href="/index.html">return to the homepage</a> &amp; try again.</p>
<p>Feeling helpful? <i>Tell me about what happened!</i></p>
<form method="post" action="404.php">
        
    <label class="required">Name</label>
    <input name="name" placeholder="First and Last Name">
            
    <label class="required">Email Address</label>
    <input name="email" type="email" placeholder="Your Email Address">
            
    <label class="required">Message</label>
    <textarea name="message" placeholder="Type Here"></textarea>
    
    <label class="required">What is 10+2? (anti-spam)</label>
	<input name="human" placeholder="Type Answer">

    <legend>Fields marked with * are required.</legend>        
    <input id="submit" name="submit" type="submit" value="Submit">
</form>
</div>
</div><!-- END CONTENTWINDOW -->

<!-- LOAD SCRIPTS -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script type="text/javascript" src="http://www.giffordnowland.com/js/windowresize.js"></script>
<script type="text/javascript" src="http://www.giffordnowland.com/js/jquery.fittext.js"></script>
<script type="text/javascript" src="http://browserstate.github.io/history.js/scripts/bundled/html4+html5/jquery.history.js"></script>

<!-- GOOGLE ANALYTICS -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43887306-1', 'giffordnowland.com');
  ga('send', 'pageview');

</script>
</body>
</html>
