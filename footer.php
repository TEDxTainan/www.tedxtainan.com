<?php
 /**
 * The template for displaying the footer.
 *
 *
 * @package Customizr
 * @since Customizr 3.0
 */
?>
		<?php tc__f('rec' , __FILE__ , __FUNCTION__ ); ?>
		
		<?php do_action( '__before_footer' ); ?>
		
			<!-- FOOTER -->
			<footer id="footer">
			 	<?php do_action( '__footer' ); // hook of footer widget and colophon?>
				
			</footer>

			<?php wp_footer(); //do not remove, used by the theme and many plugins?>

		<?php do_action( '__after_footer' ); ?>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-36410365-2', 'tedxtainan.com');
  ga('send', 'pageview');

</script>
	</body>

</html>