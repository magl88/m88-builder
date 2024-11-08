<?php
$templates = [
	'/inc/functions/add-ajax',
	'/inc/functions/add-favicon',
	// '/inc/functions/add-image-size',
	'/inc/functions/add-js',
	// '/inc/functions/add-languages',
	'/inc/functions/add-meta',
	'/inc/functions/add-styles',
	'/inc/functions/add-theme-support',
	'/inc/functions/clear',
	'/inc/functions/meta-soc',
	// '/inc/functions/pagination',
	// '/inc/functions/register-nav-menus',
	// '/inc/functions/register-sidebar',
	'/inc/functions/replaces-query-version'
];

foreach ($templates as $template) {
	get_template_part($template);
}
