<?php
/*
Plugin Name: WP PunchCard
Plugin URI: http://noteslog.com/punchcard/wp-punchcard/
Description: Easy social bookmarking for Wordpress with PunchCard
Author: Andrea Ercolino
Version: 1.0
Author URI: http://noteslog.com
*/

if( ! is_admin() ) {
	$wppunchcard_url = get_bloginfo('wpurl').'/wp-content/plugins/wp-punchcard';

	function wppunchcard_init() {
		global $wppunchcard_url;
		wp_register_script( 'jquery-latest', 'http://code.jquery.com/jquery-latest.pack.js', array(), '0' );
		wp_register_script( 'punchcard', $wppunchcard_url.'/punchcard/jquery.punchcard.js', array( 'jquery-latest' ), '1.4' );
		wp_enqueue_script( 'punchcard' );
	}

	function wppunchcard_setup() {
		global $wppunchcard_url;
		?>
	<script type="text/javascript">
	PunchCard.icons  = "<?php echo $wppunchcard_url; ?>/punchcard/";
	PunchCard.styles = "<?php echo $wppunchcard_url; ?>/punchcard/";
	</script>
		<?php
	}

	add_action( 'wp_print_scripts', 'wppunchcard_init' );
	add_action( 'wp_head', 'wppunchcard_setup' );

}

?>