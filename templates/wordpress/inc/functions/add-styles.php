<?php
add_action('wp_print_styles', 'add_styles');
if (!function_exists('add_styles')) {
  function add_styles()
  {
    if (is_admin()) {
      return false;
    }
    // =======================================
    // wp_deregister_style( 'fancybox' );
    // wp_register_style( 'fancybox', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css', false, '5.0' );
    // wp_enqueue_style( 'fancybox' );
    // =======================================
    wp_deregister_style('theme-style');
    wp_register_style('theme-style', get_template_directory_uri() . '/css/main.css', '', null);
    wp_enqueue_style('theme-style');
    // =======================================
    wp_enqueue_style('wp-style', get_stylesheet_uri(), '', null);
  }
}
