<?php
// add_action( 'wp_head', 'add_head_scripts');
// if (!function_exists('add_head_scripts')) {
//   function add_head_scripts() {
//     if (is_admin()) {
//       return false;
//     }
//     // =======================================
//     wp_deregister_script('head');
//     wp_register_script('head', get_template_directory_uri() . '/js/head.js');
//     wp_enqueue_script( 'head' );
//   }
// }
// =======================================
add_action('wp_footer', 'add_footer_scripts');
if (!function_exists('add_footer_scripts')) {
  function add_footer_scripts() {
    if (is_admin()) {
      return false;
    }
    // =======================================
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js', false, '3.7.0');
    wp_enqueue_script('jquery');
    // =======================================
    // wp_deregister_script('fancybox');
    // wp_register_script('jquery', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js', false, '5.0');
    // wp_enqueue_script( 'fancybox' );
    // =======================================
    // wp_deregister_script('libs');
    // wp_register_script('libs', get_template_directory_uri() . '/js/libs.js');
    // wp_enqueue_script('libs');
    // =======================================
    wp_deregister_script('scripts');
    wp_register_script('scripts', get_template_directory_uri() . '/js/scripts.js');
    wp_enqueue_script('scripts');
    // =======================================
    // wp_deregister_script('main');
    // wp_register_script('main', get_template_directory_uri() . '/js/main.js');
    // wp_enqueue_script('main');
  }
}
?>