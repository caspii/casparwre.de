
<!-- saved from url=(0020)http://casparwre.de/ -->
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" >
	<meta name="keywords" content="Caspar von Wrede, Caspar v. Wrede, Caspar Wrede">
	<style type="text/css" media="screen">
		@import url( http://www.casparwre.de/style.css );
	</style>
	<title>Password generator</title>

<!-- Begin: GOOGLE ANALYTICS -->	
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-35934020-1']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<!-- End: GOOGLE ANALYTICS -->

</head>
<body><br>
        
	
<div id="wrapper">

<div id="header">
<h1>Password generator</h1>


</div>

<div id="content">

<p>
Treat yourself to a sensible password!

These passwords are automatically generated (server-side using the <b>pwgen</b> command). A new list is creatd each time your load the page (try pressing F5). You can choose one and use it: I won't know which one you picked!
</p>
<p>
	<pre>
	<?php
		echo "<br>"; 
		echo shell_exec('/usr/bin/pwgen -N 200 -n'); 
		?>
	</pre>
	

<br>
<a href="JavaScript:window.location.reload()">more</a>
<br>
</p>



			
</div>


<div id="footer"> 
<p>
<br>
</p>

</div>

</div>




</body>
</html>
