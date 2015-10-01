<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Password generator</title>
        <meta name="description" content="Simple online password generator">
        <meta name="viewport" content="width=device-width">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>

        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">Password Generator</a>
        </div>

      </div>
    </div>

    <!-- Fortune Jumbotron -->
    <div class="jumbotron">
      <div class="container">
        <h1>Password Generator</h1>
        <ul>
          <li>Treat yourself to a sensible password! These suggestions are strong and secure yet easy to remember.</li>
		      <li>The passwords are automatically generated (server-side using the <b>pwgen</b> command). </li>
          <li>A new list of unique suggestions is created each time you load the page (try pressing F5). </li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6">
        	<pre>
			<?php echo "<br>"; echo shell_exec('/usr/bin/pwgen -N 20 -n'); ?>
			</pre>
  		</div>
    	<div class="col-lg-6">
        	<pre>
			<?php echo "<br>"; echo shell_exec('/usr/bin/pwgen -N 20 -n'); ?>
			</pre>
       	</div>
      
      </div>


      </div> <!-- /container -->        
      	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        	<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.1.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
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
    </body>
</html>