<!-- CSS -->
<link rel="stylesheet" href="css/main.css">

<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css">

<!-- Font Awesome IE7 -->
<!--[if IE 7]>
   <link rel="stylesheet" href="css/font-awesome-ie7.min.css">
<![endif]-->

<!-- Modernizr -->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>

<!-- Respond -->
<!--[if lt IE 9]>
<script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
<![endif]-->

<!-- Verif Mobile -->
<?php
   require_once 'in/mobile_detect.php';
   $detect = new Mobile_Detect();

   $isMobile = $detect->isMobile();
   $isTablet = $detect->isTablet();

   $notMobile = ! $isMobile || $isTablet;
   $onlyMobile = $isMobile && ! $isTablet;
?>
