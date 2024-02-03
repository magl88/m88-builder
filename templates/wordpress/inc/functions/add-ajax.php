<?php
function add_ajax()
{
  // need add file ajax-scripts.js
  wp_enqueue_script('ajax-script', get_template_directory_uri() . '/js/ajax-scripts.js', array('jquery'));

  wp_localize_script(
    'ajax-script',
    'm88_ajax_object',
    array(
      'ajax_url' => admin_url('admin-ajax.php'),
      'nonce' => wp_create_nonce('ajax-nonce'),
    )
  );
}

add_action('wp_enqueue_scripts', 'add_ajax');
