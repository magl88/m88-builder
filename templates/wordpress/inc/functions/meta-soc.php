<?php 
  global $wp;
  $current_url = home_url( add_query_arg( array(), $wp->request ) );

  print_r(get_bloginfo('url'));
  print_r(get_bloginfo('language'));
?>
<?php 
function m88_add_meta_soc() {
  echo '
<meta property="og:site_name" content="'. esc_html_e(get_bloginfo('name')).'">
<meta property="og:url" content="' $current_url '">
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

// add_action( 'wp_head', 'm88_add_meta_soc', 1 );
?>