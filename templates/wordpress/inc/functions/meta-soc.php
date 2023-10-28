<?php 
global $wp;

add_action( 'wp_head', 'madd_meta_soc', 1 );
function add_meta_soc() {
  echo '
  <meta property="og:site_name" content="'. esc_html_e(get_bloginfo('name')) .'">
  <meta property="og:url" content="' . home_url( add_query_arg( array(), $wp->request ) ) .'">
  <meta property="og:locale" content="'. get_bloginfo('language').'">
  <meta property="og:type" content="article">
  <meta property="og:title" content="Meta tags title">
  <meta property="og:description" content="Meta tags description">
  <meta property="og:image" content="URL TO IMAGE">

  <meta property="twitter:site" content="'. esc_html_e(get_bloginfo('name')).'">
  <meta property="twitter:card" content="summary">
  <meta property="twitter:title" content="Meta tags title">
  <meta property="twitter:description" content="Meta tags description">
  <meta property="twitter:image" content="URL TO IMAGE">
  ';
}
?>