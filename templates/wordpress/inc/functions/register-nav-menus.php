<?php
add_action('after_setup_theme', 'add_menu');
function add_menu()
{
  register_nav_menus([
    'header_menu' => esc_html__('Header menu', 'm88domain'),
    'footer_menu' => esc_html__('Footer menu', 'm88domain'),
  ]);
}
