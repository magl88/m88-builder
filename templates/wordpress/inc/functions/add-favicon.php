<?php
add_action('wp_head', 'add_favicons', 1);
function add_favicons()
{
	echo '
	<link rel="apple-touch-icon" sizes="57x57"
	href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180"
		href="' . get_template_directory_uri() . '/assets/favicons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"
		href="' . get_template_directory_uri() . '/assets/favicons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32"
		href="' . get_template_directory_uri() . '/assets/favicons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96"
		href="' . get_template_directory_uri() . '/assets/favicons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16"
		href="' . get_template_directory_uri() . '/assets/favicons/favicon-16x16.png">
	<link rel="manifest" href="' . get_template_directory_uri() . '/assets/favicons/manifest.json">
	<meta name="msapplication-TileImage"
	content="' . get_template_directory_uri() . '/assets/favicons/ms-icon-144x144.png">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="theme-color" content="#ffffff">
	';
}
