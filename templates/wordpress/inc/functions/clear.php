<?php
// delete / before > on single tag
add_filter('litespeed_buffer_after', 'remove_trailing_slashes', 0);
function remove_trailing_slashes($content)
{
  if (is_admin()) {
    return $content;
  } else {
    return str_replace('/>', '>', $content);
  }
}
// ====================================================================
add_filter('use_widgets_block_editor', '__return_false');
add_filter('show_admin_bar', '__return_false');
add_action('after_setup_theme', 'disable_wbe_theme_support');
function disable_wbe_theme_support()
{
  remove_theme_support('widgets-block-editor');
}
// ====================================================================
add_action('wp_enqueue_scripts', function () {
  wp_dequeue_style('wp-block-library');
  wp_dequeue_style('global-styles');
});
// ====================================================================
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_head', 'wp_resource_hints', 2); //remove dns-prefetch
remove_action('wp_head', 'wp_generator'); //remove meta name="generator"
remove_action('wp_head', 'wlwmanifest_link'); //remove wlwmanifest
remove_action('wp_head', 'rsd_link'); // remove EditURI
remove_action('wp_head', 'rest_output_link_wp_head'); // remove 'https://api.w.org/
remove_action('wp_head', 'rel_canonical'); //remove canonical
remove_action('wp_head', 'wp_shortlink_wp_head', 10); //remove shortlink
remove_action('wp_head', 'wp_oembed_add_discovery_links'); //remove alternate
remove_action('wp_head', 'wp_robots', 1);
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'wp_oembed_add_discovery_links');
remove_action('wp_head', 'wp_oembed_add_host_js');
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_enqueue_scripts', 'wp_enqueue_global_styles');
remove_action('admin_print_styles', 'print_emoji_styles');
remove_action('admin_print_scripts', 'print_emoji_detection_script');
// ====================================================================
// Clear admin_menu
// add_action('admin_menu', 'remove_menus');
// function remove_menus() {
//   remove_menu_page('index.php');								# Консоль
//   remove_menu_page('edit.php');								# Записи 
//   remove_menu_page('edit-comments.php');				# Комментарии
//   remove_menu_page('edit.php?post_type=page');	# Страницы
//   remove_menu_page('upload.php');							# Медиафайлы
//   remove_menu_page('themes.php');							# Внешний вид
//   remove_menu_page('plugins.php');							# Плагины
//   remove_menu_page('users.php');								# Пользователи
//   remove_menu_page('tools.php');								# Инструменты
//   remove_menu_page('options-general.php');			# Параметры
//   remove_menu_page('edit.php?post_type=acf-field-group'); # ACF
// }
// ====================================================================
define('DISALLOW_FILE_EDIT', true);
