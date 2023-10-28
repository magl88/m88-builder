<?php
/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
add_action( 'widgets_init', 'm88domain_widgets_init' );
function m88domain_widgets_init() {
  register_sidebar(array(
    'name'          => esc_html__( 'Sidebar', 'm88domain' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Add widgets here.', 'm88domain' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ));
}
?>