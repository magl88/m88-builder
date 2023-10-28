<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <?php wp_head(); ?>
</head>

<body <?php body_class('index'); ?>>
  <?php wp_body_open(); ?>
  <div class="wrapper">
    <?php get_header(); ?>
    <main>
      <?php get_template_part('inc/sections/content'); ?>
    </main>
    <?php get_footer(); ?>
  </div>
  <?php wp_footer(); ?>
</body>

</html>