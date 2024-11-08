<?php
add_action('after_setup_theme', 'languages_setup');
function languages_setup()
{
	/*
	* Make theme available for translation.
	* Translations can be filed in the /languages/ directory.
	* If you're building a theme based on m88 Template, use a find and replace
	* to change 'm88domain' to the name of your theme in all the template files.
	*/
	load_theme_textdomain('m88domain', get_template_directory() . '/languages');
}
